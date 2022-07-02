<template>
	<v-container>
	<v-row>
		<v-col class="col-sm-12 offset-sm-0 col-md-6 offset-md-3">
			<v-dialog  fullscreen hide-overlay>
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
							mdi-plus
						</v-icon>
					</v-btn>
				</template>
				<v-card>
					<v-row>
						<v-col class="col-sm-12 col-md-6 offset-md-3">
							<v-sheet rounded="lg"	height="max-height">
								<v-data-table
										v-if="songs.length > 0"
										:items="songs"
										:items-per-page="20"
										class="elevation-1"
										hide-default-footer
								></v-data-table>
							</v-sheet>
						</v-col>
					</v-row>
				</v-card>
			</v-dialog>
		</v-col>
	</v-row>
	<v-row>
		<v-col class="col-sm-12 offset-sm-0 col-md-6 offset-md-3">
			<v-sheet rounded="lg">
				{{collection}}
			</v-sheet>
		</v-col>
	</v-row>
</v-container>
</template>

<script>
export default {
	name: "CollectionView.vue",
	data() {
		return {
			collection: {},
			songs: []
		}
	},
	created() {
		let collectionId = this.$route.query.id
		let fetchedCollection = this.$store.getters.getCollection(collectionId)
		console.log(fetchedCollection)
		this.collection = fetchedCollection
		this.songs.push(fetchedCollection.songList)
		console.log(this.songs)
	}
}
</script>

<style scoped>

</style>