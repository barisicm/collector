<template>
	<v-container>
		<!--Component Title-->
		<v-row>
			<v-col class="col-md-4 offset-md-3">
				<h2>Collection {{collection.name}}</h2>
			</v-col>
		</v-row>
		<!--Component Icons-->
		<v-row>
			<v-col class="">
				<v-btn
						class="mx-2"
						fab
						dark
						color="indigo"
				>
					<v-icon large color="darken-2">
						mdi-play
					</v-icon>
				</v-btn>
				<v-btn
						class="mx-2"
						fab
						dark
						color="indigo"
				>
					<v-icon large color="darken-2">
						mdi-plus
					</v-icon>
				</v-btn>
			</v-col>
		</v-row>
		<!--Component List-->
		<v-row>
			<v-col class="col-sm-12 col-md-6 offset-md-3">
				<v-sheet rounded="lg"	height="max-height">
					<v-data-table
							:headers="headers"
							:items="collection.songList"
							:items-per-page="20"
							class="elevation-1"
							hide-default-footer
							@click:row="clickRow"
					></v-data-table>
				</v-sheet>
			</v-col>
		</v-row>
		<!-- Songs Overlay -->
		<v-row>
			<v-col class="col-sm-12 offset-sm-0 col-md-6 offset-md-3">
				<v-dialog v-model="dialog" fullscreen hide-overlay>
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
										@click="previousSong"
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
										@click="nextSong"
								>
									<v-icon large color="darken-2">
										mdi-arrow-right-bold
									</v-icon>
								</v-btn>
								<p v-if="lyrics===''">
									No lyrics for song
								</p>
								<div class="pa-1">
									<pre>{{lyrics}}</pre>
								</div>
							</v-sheet>
						</v-container>
					</v-card>
				</v-dialog>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>

export default {
	name: "CollectionView.vue",
	data() {
		return {
			dialog: false,
			songIndex: 0,
			collection: {
			},
			headers: [
				{ text: 'Name',	value: 'name',  sortable: false },
			],
		}
	},
	created() {
		let collectionId = this.$route.query.id
		let collection = this.$store.getters.getCollection(collectionId)
		this.collection = collection
		console.log(this.collection)
	},
	methods: {
		clickRow(event, item) {
			this.songIndex = item.item.id - 1
			this.dialog = true
			console.log(item.item.id)
			console.log(item)
		},
		nextSong() {
			if ((this.songIndex+1) >= this.collection.songList.length) {
				return
			}
			this.songIndex += 1
		},
		previousSong() {
			if ((this.songIndex-1) < 0) {
				return
			}
			this.songIndex -= 1
		}
	},
	computed: {
		lyrics() {
			return this.collection.songList[this.songIndex].lyrics
		}
	}
}
</script>

<style scoped>

</style>