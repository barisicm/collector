<template>
	<v-container >
		<v-row>
			<v-col class="col-md-4 offset-md-3">
				<h2>Song collections</h2>
			</v-col>
		</v-row>
		<v-row>
			<v-col class="col-sm-8 col-md-4 offset-md-3">
				<v-text-field
						label="Search collections"
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
			<v-col class="col-sm-12 col-md-6 offset-md-3">
				<v-sheet rounded="lg"	height="max-height">
					<v-data-table
							@click:row="clickRow"
							:headers="headers"
							:items="filteredCollections"
							:items-per-page="20"
							class="elevation-1"
							hide-default-footer
					></v-data-table>
				</v-sheet>
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
			searchField: "",
			searchType: "",
			type: ["Name"],
			headers: [
				{ text: 'Name',	value: 'name',  sortable: false },
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