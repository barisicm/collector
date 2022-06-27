<template>
  <v-container>
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
				<v-sheet min-height="70vh"	rounded="lg">
					<v-data-table
							@click:row="clickRow"
							height="300px"
							:headers="headers"
							:items="filteredSongs"
							:items-per-page="20"
							class="elevation-1"
					></v-data-table>
				</v-sheet>
			</v-col>

		</v-row>
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
	name: 'HomeView',
	components: {
	},
	data () {
		return {
			searchField: "",
			searchType: "",
			type: ["Name", "Artist"],
			songs: [],
			headers: [
				{ text: 'Song',	value: 'name' },
				{ text: 'Artist', value: 'artist' },
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
