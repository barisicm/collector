<template>
	<v-container>
		<v-row>
			<v-col class="col-sm-12 col-md-6 offset-md-3">
				<v-sheet max-height="10vh" rounded="lg">
					<v-icon large color="darken-2">mdi-arrow-expand-all</v-icon>
					Ikonice goes here
				</v-sheet>
			</v-col>
			<v-col class="col-sm-12 col-md-6 offset-md-3">
				<v-sheet rounded="lg">
					<p v-if="songData===''">
						No lyrics for song
					</p>
					<pre>{{songData}}</pre>
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