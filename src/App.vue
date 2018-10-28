<template>
  <v-app id="app">
    <v-navigation-drawer v-model="sideNav" temporary fixed>
      <v-list>
        <v-list-tile v-for="menuItem in menuItems" :key="menuItem.title" :to="menuItem.link">
          <v-list-tile-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ menuItem.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="onLogout" v-if="userIsAuthenticated">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon class="hidden-sm-and-up" @click="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link tag="span" style="cursor: pointer" to="/">MagBucket</router-link>
         <img class="logo" src="../img/bucked-clipart-transparent-background-6.png" alt="bucket">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="menuItem in menuItems" :key="menuItem.title" :to="menuItem.link">
          <v-icon left>{{ menuItem.icon }}</v-icon>{{ menuItem.title }}
        </v-btn>
        <v-btn flat @click="onLogout" v-if="userIsAuthenticated"><v-icon left>exit_to_app</v-icon> Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
     <v-footer height="55" fixed class="strong pt-3 pb-3 mt-4">
    <div class="warning--text">
      Coded with ❤ by Agata Magier. &copy; 2018 All rights reserved.
    </div>
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: null,
      }
    },
    computed: {
      menuItems() {
        let menuItems = [{
            icon: 'face',
            title: 'Sign up',
            link: '/signup'
          },
          {
            icon: 'lock_open',
            title: 'Sign in',
            link: '/signin'
          }
        ]
        if (this.userIsAuthenticated) {
          menuItems = [{
              icon: 'event_available',
              title: 'Goals bucket',
              link: '/goals'
            },
            {
              icon: 'add',
              title: 'Add new',
              link: '/goal/new'
            },
            {
              icon: 'person',
              title: 'Your profile',
              link: '/profile'
            },
          ]
        }
        return menuItems
      },
      userIsAuthenticated() {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
      }
    },
    name: 'App'
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Varela+Round');
#app {
font-family: 'Montserrat', sans-serif;
}
.logo {
  height: 1.5em;
}
.warning--text {
  margin: 0 auto;
}

</style>

