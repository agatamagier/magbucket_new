
import * as firebase from 'firebase'



export default {
  state: {
    goals: [{
      imageUrl: 'https://www.funktionevents.co.uk/images/pictures/new/uk/activities/pizza-making/pizza-making-(1600x1200-crop).jpg?v=43cfbd5d',
      id: 'qwerty',
      title: 'Make my own Pizza',
      added: '2018-06-10',
      when: 'October 2018',
      description: 'gsgsgsfdg'
    },
    {
      imageUrl: 'https://www.rei.com/adventures/assets/adventures/images/trip/core/africa/kil_hero',
      id: 'qwerty2',
      title: 'Climb Kilimanjaro',
      added: '2018-10-10',
      when: 'Anytime this lifetime!',
      description: 'gsgsgsfdg'
    },
    {
      imageUrl: 'http://musicboxy.net/wp-content/uploads/2018/09/1537784259_maxresdefault.jpg',
      id: 'qwerty432342',
      title: 'Learn shuffle dance',
      added: '2018-09-10',
      when: 'Ongoing',
      description: 'gsgsgsfdg'
    }
    ]
  },
  mutations: {
    addGoal (state, payload) {
      state.goals.push(payload)
    },
    udpateGoalData (state, payload) {
      const goal = state.goals.find(goal => {
        return goal.id === payload.id
      })
      if (payload.title) {
        goal.title = payload.title
      }
      if (payload.description) {
        goal.description = payload.description
      }
      if (payload.when) {
        goal.when = payload.when
      }
    },
    setGoals (state, payload) {
      state.goals = payload
    }
  },
  actions: {
    loadGoals ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('goals').once('value')
      .then((data) => {
        const goals = []
        const obj = data.val()
        for (let key in obj) {
          goals.push({
            id: key,
            title: obj[key].title,
            description: obj[key].description,
            imageUrl: obj[key].imageUrl,
            added: obj[key].added,
            when: obj[key].when,
            creatorId: obj[key].creatorId
          })
        }
        commit('setGoals', goals)
        commit('setLoading', false)
      })
      .catch((error) => { console.log(error)
        commit('setLoading', true) })
    },
    addGoal ({commit, getters}, payload) {
      const goal = {
        title: payload.title,
        when: payload.when,
        description: payload.description,
        added: payload.added,
        creatorId: getters.user.id
        // imageUrl: payload.imageUrl
      }

      let imageUrl
      let key
      firebase.database().ref('goals').push(goal)
      .then((data) => {
        console.log(data)
        key = data.key
        return key
      })
      .then(key => {
        const filename = payload.image.name
        const extention = filename.slice(filename.lastIndexOf('.'))
        console.log('filename:' + filename)
        return firebase.storage().ref('goals/' + key + '.' + extention).put(payload.image)
      })
      .then(fileUploadData => {
        console.log('file upload data: ' + fileUploadData.getMetadata)
        let imagePath = fileUploadData.metadata.fullPath
        console.log('image path: ' + imagePath)
        return firebase.storage().ref().child(imagePath).getDownloadURL()
      })
     .then(url => {
       imageUrl = url
       console.log('image url: ' + imageUrl)
       return firebase.database().ref('goals').child(key).update({imageUrl: imageUrl})
     })
     .then(() => {
       commit('addGoal', {
         ...goal,
         imageUrl: imageUrl,
         id: key
       })
     })
     .catch((error) => { console.log(error) })
    },
    editGoaldata ({commit}, payload) {
      commit('setLoading', true)
      const updateGoal = {}
      if (payload.title) {
        updateGoal.title = payload.title
      }
      if (payload.description) {
        updateGoal.description = payload.description
      }
      if (payload.when) {
        updateGoal.when = payload.when
      }
      firebase.database().ref('goals').child(payload.id).update(updateGoal)
      .then(() => {
        commit('setLoading', false)
        commit('udpateGoalData', payload)
      })
      .catch(error => {
        console.log(error)
        commit('setLoading', false)
      })
    }
  },
  getters: {
    loadedGoals (state) {
      return state.goals.sort((goalA, goalB) => {
        return goalA.added < goalB.added
      })
    },
    latestGoals (state, getters) {
      return getters.loadedGoals.slice(0, 5)
    },
    loadedGoal (state) {
      return (goalId) => {
        return state.goals.find((goal) => {
          return goal.id === goalId
        })
      }
    }
  }
}
