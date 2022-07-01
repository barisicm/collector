<template>
	<v-container>
		<v-row>
			<v-col class="col-sm-12 offset-sm-0 col-md-6 offset-md-3">
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
								v-bind="attrs"
								v-on="on"
						>
							<v-icon large color="darken-2">
								mdi-pencil-outline
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
								<p v-if="songData===''">
									No lyrics for song
								</p>
								<div class="pa-1">
									<pre>{{songData}}</pre>
								</div>
							</v-sheet>
						</v-container>
					</v-card>
				</v-dialog>
			</v-col>
		</v-row>
		<v-row>
			<v-col class="col-sm-12 offset-sm-0 col-md-6 offset-md-3">
				<v-sheet rounded="lg">
					<p v-if="songData===''">
						No lyrics for song
					</p>
					<div class="pa-1">
						<pre>{{songData}}</pre>
					</div>
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
			dialog: false,
			notifications: false,
			sound: true,
			widgets: false,
			songData: `
			`,
		}
	},
	methods: {
	},
	mounted() {
		let songId = this.$route.query.id
		let song = this.$store.getters.getSong(songId)
		this.songData = song.lyrics
	}
}
</script>
<style>
pre {
	white-space: pre-wrap;
}
</style>