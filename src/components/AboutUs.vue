<template>
    <v-container>
        <h1>This is AboutUS Page</h1>
        <!-- <span v-on:mouseover="hiddenmessage = true" v-on:mouseleave="hiddenmessage = false">Hidden Message</span> <br> -->
        <span v-if="hiddenmessage">Ronalyn Pangit</span>
        <span v-else>Andre Pogi</span>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
           hiddenmessage: true
        }
    }
}
</script>