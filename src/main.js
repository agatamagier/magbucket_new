// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store'
import Alert from './components/shared/Alert.vue'
import UploadButton from 'vuetify-upload-button'
import EditGoal from './components/edit/EditGoal.vue'
import EditGoalDate from './components/edit/EditGoalDate.vue'

Vue.component('app-alert', Alert)
Vue.component('app-edit-goal', EditGoal)
Vue.component('app-edit-goal-date', EditGoalDate)

Vue.use(Vuetify, {
  theme: {
    primary: '#4DD0E1',
    secondary: '#FFF59D',
    accent: '#FBC02D',
    strong: '00838F',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#00ACC1',
    success: '#43A047'
  }
})
Vue.use(UploadButton)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCKTPbIc8QN3TTgCntaztOIF35yUIi0cVY',
      authDomain: 'magbucket-794c7.firebaseapp.com',
      databaseURL: 'https://magbucket-794c7.firebaseio.com',
      projectId: 'magbucket-794c7',
      storageBucket: 'magbucket-794c7.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadGoals')
  }
})
