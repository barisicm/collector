<template>
  <v-container>
		<v-row>
			<v-col class="col-sm-12 col-md-6 offset-md-3">
				<h2>Song list</h2>
				<div class="mt-6"></div>
				<v-row>
					<v-btn
							class="mx-2"
							fab
							dark
							color="indigo"
							@click="createSong"
					>
						<v-icon large color="darken-2">
							mdi-plus-circle-outline
						</v-icon>
					</v-btn>
				</v-row>
				<div class="mt-5"></div>
				<v-row>
					<v-col class="col-8">
						<v-text-field
								label="Search catalogue"
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
						<v-sheet rounded="lg">
							<v-data-table
									@click:row="clickRow"
									height="300px"
									:headers="headers"
									:items="filteredSongs"
									class="elevation-1"
									hide-default-footer
							></v-data-table>
						</v-sheet>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import store from '../store'

export default {
	name: 'SongsListView',
	components: {
	},
	data () {
		return {
			searchField: "",
			searchType: "",
			type: ["Name", "Artist"],
			songs: [],
			headers: [
				{ text: 'Song',	value: 'name',  sortable: false },
				{ text: 'Artist', value: 'artist',  sortable: false, align: ' d-xs-none' },
			],
		}
	},
	computed: {
		filteredSongs() {
			return this.songs.filter(item => {
				switch (this.searchType) {
					case "Artist":
						return item.artist.toLowerCase().includes(this.searchField.toLowerCase())
					default:
						return item.name.toLowerCase().includes(this.searchField.toLowerCase())
				}
			})
		}
	},
	methods: {
		clickRow(event, item) {
			this.$router.push({ name: 'song', query: { id: item.item.id }})
		},
		createSong() {
			this.$router.push({ name: 'song'})
		}
	},
	created() {
		this.songs.push(...store.getters.getSongs)
	}
}
</script>
