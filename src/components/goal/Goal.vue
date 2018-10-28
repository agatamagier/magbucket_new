<template>
    <v-container>
        <v-layout row wrap v-if="loading">
            <v-flex class="mt-4 pt-4 text-xs-center">
                <v-progress-circular indeterminate color="primary" :width="10" :size="100"></v-progress-circular>
            </v-flex>
        </v-layout>
        <v-layout row wrap v-else>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-title>
                        <h1 class="strong--text">{{ goal.title }}</h1>
                        <!-- <p>{{ this.userIsAuthenticated }}</p>
                        <p>{{ this.userIsCreator }}</p> -->
                        <template v-if="userIsCreator">
                            <v-spacer></v-spacer>
                            <app-edit-goal :goal="goal"></app-edit-goal>
                        </template>
                        
                    </v-card-title>
                    <v-img :src="goal.imageUrl"  height="500px">
                    </v-img>
                    <v-card-text>
                        <div class="accent--text"><v-icon class="icon" left>hourglass_empty</v-icon> Added: {{ goal.added }}</div>
                        <div class="info--text due-date"><v-icon class="icon" left>schedule</v-icon><span> By when: {{ goal.when }}</span> </div>
                        <!-- <div>
                            <app-edit-goal-date :goal="goal"></app-edit-goal-date>
                        </div> -->
                        <div>Description: <strong>{{ goal.description }}</strong></div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn large round class="accent mb-3 mr-3">
                            register
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        props: ['id'],
        computed: {
            goal() {
                return this.$store.getters.loadedGoal(this.id)
            },
             userIsAuthenticated () {
                return this.$store.getters.user !== null && this.$store.getters.user !== undefined
            },
            userIsCreator() {
                if (!this.userIsAuthenticated) {
                    return false
                }
               return this.$store.getters.user.id === this.goal.creatorId
            },
                loading () {
                return this.$store.getters.loading
            }
        }
    }
</script>
<style scoped>
    .due-date {
        font-size: 2em;
    }
</style>


