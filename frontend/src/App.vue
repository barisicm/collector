<template>
  <v-app id="app">
		<v-app-bar app color="white" flat>
			<v-row>
				<v-col class="col-sm-12 col-md-6 offset-md-3">
					<v-container class="py-0 fill-height">
						<v-avatar class="mr-10" color="grey darken-1"	size="32"></v-avatar>
						<v-btn text @click="toHomePage()">
							Home
						</v-btn>
						<v-btn text @click="toCollectionsPage()">
							Collections
						</v-btn>
						<v-btn text @click="toSettingsPage()">
							Settings
						</v-btn>
					</v-container>
				</v-col>
			</v-row>
		</v-app-bar>

    <v-main class="grey lighten-3">
			<router-view/>
		</v-main>
  </v-app>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		toHomePage() {
			this.$router.push('/')
		},
		toCollectionsPage() {
			this.$router.push('collections-list')
		},
		toSettingsPage() {
			this.$router.push('settings')
		}
	}
}
</script>
<style lang="scss">

/* This rule disables scroll down to refresh page on mobile. */
html {
	overscroll-behavior: contain;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
