<template>
	<v-container>
		<v-row>
			<v-col class="col-sm-12 col-md-6 offset-md-3">
				<v-dialog v-model="dialog" fullscreen hide-overlay>
					<template v-slot:activator="{ on, attrs }">
						<v-btn
								class="mx-2"
								fab
								dark
								color="indigo"
								v-bind="attrs"
								v-on="on"
						>
							<v-icon large color="darken-2">
								mdi-arrow-expand-all
							</v-icon>
						</v-btn>
						<v-btn
								class="mx-2"
								fab
								dark
								color="indigo"
								@click="updateOrSave"
						>
							<v-icon large color="darken-2" v-if="form.disabled">
								mdi-pencil-outline
							</v-icon>
							<v-icon large color="darken-2" v-else>
								mdi-content-save
							</v-icon>
						</v-btn>
					</template>
					<v-card>
						<v-container>
							<v-sheet rounded="lg">
								<v-btn
										class="mx-2"
										fab
										dark
										color="indigo"
										@click="dialog = false"
								>
									<v-icon large color="darken-2">
										mdi-close
									</v-icon>
								</v-btn>
								<v-btn
										class="mx-2"
										fab
										dark
										color="indigo"
								>
									<v-icon large color="darken-2">
										mdi-arrow-left-bold
									</v-icon>
								</v-btn>
								<v-btn
										class="mx-2"
										fab
										dark
										color="indigo"
								>
									<v-icon large color="darken-2">
										mdi-arrow-right-bold
									</v-icon>
								</v-btn>
								<p v-if="form.songLyrics===''">
									No lyrics for song
								</p>
								<div class="pa-1">
									<pre>{{form.songLyrics}}</pre>
								</div>
							</v-sheet>
						</v-container>
					</v-card>
				</v-dialog>
				<div class="mt-4"></div>
				<!-- Song form -->
				<v-sheet rounded="lg">
					<v-col>
						<v-text-field
								label="Song Name"
								placeholder="Song Name"
								:disabled="form.disabled"
								v-model="form.song.name"
						></v-text-field>
					</v-col>
					<v-col>
						<v-text-field
								label="Artist Name"
								placeholder="Artist Name"
								:disabled="form.disabled"
								v-model="form.song.artist"
						></v-text-field>
					</v-col>
					<v-col>
						<v-textarea
								name="song-input"
								label="Song Lyrics"
								v-model="form.song.lyrics"
								auto-grow
								hint="Song Lyrics"
								:disabled="form.disabled"
						></v-textarea>
					</v-col>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
export default {
	components: {
	},
	data () {
		return {
			form: {
				disabled: true,
				song: {},
			},
			songId: undefined,
			dialog: false,
		}
	},
	methods: {
		updateOrSave() {
			this.form.disabled = !this.form.disabled
			if (Object.prototype.hasOwnProperty.call(this.form.song, "id")) {
				this.update()
			} else {
				this.save()
			}
		},
		save() {
			//ID's here are pretty fake
			//Save to store
			this.$store.commit('addSong', {
				id: Date.now(),
				name: this.form.song.name,
				artist: this.form.song.artist,
				lyrics: this.form.song.lyrics
			})
		},
		update() {
			//Update to store
			this.$store.commit('updateSong', {
				id: this.songId,
				name: this.form.song.name,
				artist: this.form.song.artist,
				lyrics: this.form.song.lyrics
			})
		}
	},
	mounted() {
		this.songId = this.$route.query.id
		if (this.songId!==undefined) {
			this.form.song = this.$store.getters.getSong(this.songId)
		}

		this.form.disabled = false
	},
	destroyed() {
		this.form.disabled = true
	}
}
</script>
<style>
pre {
	white-space: pre-wrap;
}
</style>