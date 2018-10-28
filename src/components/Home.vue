<template>
    <v-container>
        <v-layout row wrap class="mb-4">
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn router to="/goals" class="accent" large round>Explore Goals</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn router to="/goal/new" class="accent" large round >Add new goal</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row >
            <v-flex class="mt-4 pt-4 text-xs-center">
                <v-progress-circular indeterminate color="primary" :width="10" :size="100" v-if="loading"></v-progress-circular>
            </v-flex>
        </v-layout>
        <v-layout row wrap v-if="!loading">
            <v-flex xs12  sm8 offset-sm2>
                <v-carousel style="cursor: pointer">
                    <v-carousel-item v-for="goal in goals" :key="goal.id" :src="goal.imageUrl" @click="onLoadGoal(goal.id)">
                        <div class="title"> {{ goal.title }}
                            <v-icon class="icon">check</v-icon>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
             <v-flex xs12 class="text-xs-center mt-4 pt-4">
                <h1 class="strong--text display-3 font-weight-thin"> Create your future.</h1>
                <h2 class="strong--text font-weight-medium font-italic">Die with memories, not dreams.</h2>
            </v-flex>
        </v-layout>
        
    </v-container>
</template>
<script>
    export default {
        computed: {
            goals() {
                return this.$store.getters.latestGoals
            },
            userIsAuthenticated() {
                return this.$store.getters.user !== null && this.$store.getters.user !== undefined
            },
                loading () {
                return this.$store.getters.loading
            }
        },
        methods: {
            onLoadGoal(id) {
                this.$router.push('/goals/' + id)
            }
        }
    }
</script>
<style scoped>
    .title {
        position: absolute;
        bottom: 50px;
        width: 100%;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 2.4em !important;
        padding: 25px;
        text-transform: uppercase;
        font-weight: lighter;
    }
    .icon {
        font-size: 2em;
        font-weight: lighter;
        padding-left: 10px;
        color: #FBC02D;
    }
</style>


