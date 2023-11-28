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
    <div class="d-flex justify-content-around flex-wrap w-100 vh-100">
        <div class="container-post" v-for="elem in arrayPost">
            <RouterLink :to="{name: 'singlePost', params:{slug:elem.slug}}">
                <div>{{ elem.title }}</div>
                <div>{{ elem.content }}</div>
                <div>{{ elem.category.name }}</div>
                <div v-for="e in elem.tags ">
                    <div>{{ e.name }}</div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-post{
    width: calc(90% / 4);
    display: flex;
    flex-direction: column;
    //text-align: center;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    margin: 10px 0;
    background-color: rgba(45, 136, 228, 0.432);
    border-radius: 10px 20px 20px 50px;
}
</style>