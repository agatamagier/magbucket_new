<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2 v-for="goal in goals" :key="goal.id" class="mb-4">
                <v-card class="secondary" hover >
                    <v-container fluid >
                        <v-layout column>
                            <v-flex xs4 sm5>
                                <v-img :src="goal.imageUrl"  height="260px"></v-img>
                            </v-flex>
                            <v-flex xs7 sm7>
                                <v-card-title primary-title class="ml-3">
                                    <div>
                                        <h2 class="strong--text mb-3 ">{{ goal.title }}</h2>
                                        <div class="goal-info"><v-icon class="icon" left>hourglass_empty</v-icon> Start: {{ goal.added }}</div>
                                        <div class="goal-info"><v-icon class="icon" left>alarm</v-icon> By when: {{ goal.when }}</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions class="ml-2">
                                    <v-btn class="info" large round :to="/goals/ + goal.id">
                                        <v-icon left>search</v-icon>
                                        View goal
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                          
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        computed: {
           goals () {
               return this.$store.getters.loadedGoals
           },
        },
        methods: {
            goalAchieved() {
                this.achieved_info = 'You did it!'
                event.target.style
            }
        }
    }
</script>
<style scoped>
h2 {
    font-size: 2.2em !important;
}
.goal-info {
    font-size: 1.2em;
}
.icon {
    font-size: 1.3em;
}
</style>
