<script>
import axios from 'axios'

    export default{
        name: "mainComp",
        data() {
            return {
                arrayPost: [],
            }
         },
         mounted(){
            this.chiamataApi()
            //console.log(this.arrayPost)
         },
        methods: {
            chiamataApi(){
            axios.get('http://localhost:3000/post')
            .then((response) => {
               const result = response.data;
                 for(let elem of result){
                   this.arrayPost.push(elem);
                 }
            });
            }
        }
    }
</script>

<template>
    <div class="d-flex justify-content-around w-100 vh-100">
        <div v-for="elem in arrayPost">
            <div>{{ elem.title }}</div>
            <div>{{ elem.content }}</div>
            <div>{{ elem.category.name }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>