<template>
    <v-container>
        <h1>This is the Landing/Index Page</h1>
        <div>
            <v-row justify="center"> 
                <v-card v-for="userpost in posts" :key="userpost.id" class="ml-5 mb-5" max-width="300" max-height="300">
                    <div class="text-center mb-5 mt-5">  
                   <h5>UserID</h5> <br> {{userpost.userId}} <br>
                   <h4>Title</h4> <br> {{userpost.title}} <br>
                   <h3>Description</h3> <br> {{userpost.body}}
                    </div>
                   
                </v-card>
            </v-row>
        </div>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
           posts:[] 
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        getData(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.posts = response.data
            })
            .catch(error =>{
                console.log(error)
            })

            // axios.get = pagkuha ng data sa api
            // axios.post = put data in api
            // axios.put = update
            // axios.delete = delete 
        }
    }
}
</script>