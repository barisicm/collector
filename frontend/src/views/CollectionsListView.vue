<template>
	<v-container>
		<v-row>
			<v-col class="col-sm-12 col-md-6 offset-md-3">
				<h2>Song collections</h2>
				<div class="mt-6"></div>
				<v-row>
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
										mdi-plus-circle-outline
									</v-icon>
								</v-btn>
							</template>
							<v-card>
								<v-container>
									<v-sheet rounded="lg">
										<!-- Component for adding a new collection -->
										<v-row>
											<v-col class="col-sm-8 col-md-6 offset-md-3">
												<h1>Create or edit collection</h1>
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
														@click="saveCollection"
												>
													<v-icon large color="darken-2">
														mdi-content-save
													</v-icon>
												</v-btn>
											</v-col>
											<v-col class="col-sm-8 col-md-6 offset-md-3">
												<v-text-field
														label="Collection Name"
														v-model="collectionName"
														hide-details=true
												></v-text-field>
											</v-col>
											<v-col class="col-sm-8 col-md-6 offset-md-3">
												<p>Songs in collection</p>
												<v-data-table
														:headers="songListHeaders"
														:items="songListForNewCollection"
														:items-per-page="20"
														class="elevation-1"
														hide-default-footer
												>
													<template v-slot:[`item.actions`]="{ item }">
														<v-icon
																small
																class="mr-2"
																@click="addItem(item)"
														>
															mdi-plus
														</v-icon>
													</template>
												</v-data-table>
											</v-col>
											<v-col class="col-sm-8 col-md-4 offset-md-3">
												<v-text-field
														label="Search Songs"
														v-model="collectionSearch"
														hide-details=true
												></v-text-field>
											</v-col>
											<v-col class="col-sm-4 col-md-2">
												<v-select
														:items="type"
														label="by"
														v-model="searchType"
														hide-details=true
												></v-select>
											</v-col>
											<v-col class="col-sm-8 col-md-6 offset-md-3">
												<v-data-table
														:headers="songListHeaders"
														:items="songListData"
														:items-per-page="20"
														class="elevation-1"
														hide-default-footer
												>
													<template v-slot:[`item.actions`]="{ item }">
														<v-icon
																small
																class="mr-2"
																@click="addItem(item)"
														>
															mdi-plus
														</v-icon>
													</template>
												</v-data-table>
											</v-col>
										</v-row>
									</v-sheet>

								</v-container>
							</v-card>
						</v-dialog>
				</v-row>
				<div class="mt-5"></div>
				<v-row>
					<v-col class="col-8">
						<v-text-field
								label="Search collections"
								placeholder="Ex. Oliver"
								outlined
								v-model="searchField"
								hide-details=true
						></v-text-field>
					</v-col>
					<v-col class="col-4">
						<v-select
								:items="type"
								label="by"
								outlined
								v-model="searchType"
								hide-details=true
						></v-select>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<v-sheet rounded="lg"	height="max-height">
							<v-data-table
									@click:row="clickRow"
									:headers="headers"
									:items="filteredCollections"
									:items-per-page="20"
									class="elevation-1"
									hide-default-footer
							>
							</v-data-table>
						</v-sheet>
					</v-col>
				</v-row>
			</v-col>
		</v-row>


	</v-container>
</template>

<script>
import store from "@/store";

//TODO: remove search by filtering if there is no other relevant info in data
//except collection name
export default {
	name: "CollectionsView",
	data() {
		return {
			songListHeaders: [
				{ text: 'Name',	value: 'name',  sortable: false },
				{ text: 'Artist',	value: 'artist',  sortable: false },
				{ text: 'Actions',	value: 'actions',  sortable: false },
			],
			songListData: [{
				id: 1,
				name: "Neko ime",
				artist: "Umjetnik"
			}],
			songListForNewCollection: [

			],
			dialog: false,
			searchField: "",
			searchType: "",
			type: ["Name"],
			headers: [
				{ text: 'Name',	value: 'name',  sortable: false },
				{ text: 'Actions',	value: 'actions',  sortable: false },
			],
			collections: []
		}
	},
	created() {
		this.collections.push(...store.getters.getCollections)
	},
	methods: {
		clickRow(event, item) {
			this.$router.push({ name: 'collection', query: { id: item.item.id }})
		},
		addItem(item) {
			this.songListForNewCollection.push(item)
		}
	},
	computed: {
		filteredCollections() {
			return this.collections.filter(item => {
				switch (this.searchType) {
					case "Artist":
						return item.artist.toLowerCase().includes(this.searchField.toLowerCase())
					default:
						return item.name.toLowerCase().includes(this.searchField.toLowerCase())
				}
			})
		}
	}
}
</script>

<style scoped>

</style>