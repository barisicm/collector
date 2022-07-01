<template>
  <v-container>
		<v-row>
			<v-col class="col-md-4 offset-md-3 ">
				<h2>Song list</h2>
			</v-col>
		</v-row>
		<div class="mt-2"></div>
		<v-row>
			<v-col class="col-sm-8 col-md-4 offset-md-3 ">
				<v-text-field
						label="Search catalogue"
						placeholder="Ex. Oliver"
						outlined
						v-model="searchField"
						hide-details=true
				></v-text-field>
			</v-col>
			<v-col class="col-sm-4 col-md-2">
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
			<v-col class=" col-sm-12 col-md-6 offset-md-3">
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
		<!-- TODO: Resolve this button	-->
		<v-row class="justify-end">
			<v-btn fab large color="primary" right>
				<v-icon>mdi-plus-circle-outline</v-icon>
			</v-btn>
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
		}
	},
	created() {
		this.songs.push(...store.getters.getSongs)
	}
}
</script>
