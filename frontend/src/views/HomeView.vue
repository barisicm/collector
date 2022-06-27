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
					<v-simple-table height="300px">
						<template v-slot:default>
							<thead>
							<tr>
								<th class="text-left">
									Name
								</th>
								<th class="text-left">
									Artist
								</th>
								<th class="text-left">
									Actions
								</th>
							</tr>
							</thead>
							<tbody>
							<tr
									v-for="item in filteredSongs"
									:key="item.name"
							>
								<td>{{ item.name }}</td>
								<td>{{ item.artist }}</td>
								<td>
									Ikonice
								</td>
							</tr>
							</tbody>
						</template>
					</v-simple-table>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
// @ is an alias to /src
export default {
	data () {
		return {
			searchField: "",
			searchType: "",
			type: ["Name", "Artist"],
			songs: [
				{
					name: "Pismo Moja",
					artist: "Oliver Dragojević"
				},
				{
					name: "Imala je lijepu rupicu na bradi",
					artist: "Oliver Dragojević"
				},
				{
					name: "Mjerkam te mjerkam",
					artist: "Zdravko Čolić"
				}
			],
		}
	},
  name: 'HomeView',
  components: {
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
}
</script>
