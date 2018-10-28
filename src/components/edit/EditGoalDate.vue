<template>
    <v-dialog width="350px" persistent v-model="editDialog">
        <v-btn round class="error" slot="activator">
           edit date
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title>EDIT GOAL DUE DATE</v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                      <v-date-picker v-model="editableDueDate" type="month" style="width: 100%" actions>
                          <template slot-scope="{save, cancel}">
                              <v-btn class="accent"  round @click.native="editDialog = false">Close</v-btn>
                              <v-btn class="success" round @click.native="onSaveChanges">Save</v-btn>
                          </template>
                      </v-date-picker>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['goal'],
    data () {
        return {
            editDialog: false,
            editableDueDate: null
        }
    },
    methods: {
        onSaveChanges () {
            const newDueDate = new Date(this.goal.when).toISOString()
            const newMonth = new Date(this.editableDueDate).getUTCMonth().toISOString()
            const newYear = new Date(this.editableDueDate).getUTCFullYear().toISOString()
            newDueDate.setUTCMonth(newMonth)
            newDueDate.setUTCFullYear(newYear)
            this.$store.dispatch('editGoaldata', {
                id: this.goal.id,
                when: newDueDate
            })
        }
    },
    created () {
        this.editableDueDate = new Date(this.goal.when).toISOString()
    }
}
</script>

