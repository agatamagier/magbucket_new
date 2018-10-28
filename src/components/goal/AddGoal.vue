<template>
    <v-container>
        <v-layout row class="mb-4">
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="accent--text">Add new goal to your bucket</h1>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="onAddGoal" enctype="multipart/form-data">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="title" label="Title" id="title" v-model="title" required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="when" label="By when" id="when" v-model="when" required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-textarea name="description" label="Description" id="description" v-model="description" required></v-textarea>
                            <p>{{description}}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="imageUrl" label="Image URL" id="image-url" v-model="imageUrl"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <!-- <upload-btn large round color="accent" title="Upload image" accept="image/*"
                                        @change="onImgPicked"><template slot="icon"><v-icon right>add_a_photo</v-icon>
</template>Upload image</upload-btn> -->
                        <v-btn raised round large class="accent" @click="onUploadImageClicked">Upload image<v-icon right>add_a_photo</v-icon></v-btn>
                            <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onImgPick">
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3 class="mb-4 pb-4">
                            <img :src="imageUrl" width="100%">
                        </v-flex>
                    </v-layout>
                           
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3 class="info--text mb-4">
                            <h3>Pick a deadline date for your goal</h3>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3 class="mb-4">
                            <v-date-picker v-model="when" type="month" show-current></v-date-picker>
                            <p> {{ when }} </p>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn class="primary" type="submit" :disabled="!formIsValid" round>Add goal</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import UploadButton from 'vuetify-upload-button'
    export default {
        data() {
            return {
                title: '',
                when: '',
                imageUrl: '',
                description: '',
                image: null
            }
        },
        components: {
            'upload-btn': UploadButton
        },
        computed: {
            formIsValid() {
                return this.title !== '' && this.when !== '' && this.imageUrl !== '' && this.description !== ''
            }
        },
        methods: {
            onAddGoal() {
                if (!this.formIsValid) {
                    return
                }
                if (!this.image) {
                    return
                }
                const goalData = {
                    title: this.title,
                    when: this.when,
                    // imageUrl: this.imageUrl,
                    description: this.description,
                    image: this.image,
                    added: new Date().toLocaleDateString(["en-US"], {
                        day: "2-digit",
                        month: "long",
                        year: "numeric"
                    })
                }
                console.log("goal data: " + goalData)
                this.$store.dispatch('addGoal', goalData)
                this.$router.push('/goals')
            },
            onUploadImageClicked() {
                this.$refs.fileInput.click()
                console.log(event)
            },
            onImgPick(event) {
                console.log(event)
                // console.log(event.target.files[0].name)
                const files = event.target.files
                let imgName = files[0].name
                if (imgName.lastIndexOf('.') <= 0) {
                    return alert('please add valid image type')
                }
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.imageUrl = fileReader.result
                    console.log(fileReader.result)
                    console.log("url:" + this.imageUrl)
                })
                fileReader.readAsDataURL(files[0])
                this.image = files[0]
            }
        }
    }
</script>

