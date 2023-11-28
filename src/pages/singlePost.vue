<script>
import axios from 'axios'

    export default{
        name: "singlePost",
        data() {
        return {
            arraySinglePost: []
        };
    },
    mounted(){
    this.chiamataApi();
    },
    methods: {
        chiamataApi(){
            axios.get(`http://localhost:3000/post/${this.$route.params.slug}`)
            .then((response) => {
               const result = response.data;
                this.arraySinglePost.push(result)
            });
        }
    },
}
</script>

<template>
     <div class="d-flex justify-content-around flex-wrap w-100 vh-100">
        <div class="container-post" v-for="elem in arraySinglePost">
            
                <h1>{{ elem.title }}</h1>
                <h2>{{ elem.content }}</h2>
                <h3>{{ elem.category.name }}</h3>
                <button class="btn btn-primary">
                    <router-link :to="{name: 'update', params:{slug:elem.slug}}" class="nav-link active" aria-current="page">
                        Modfica Post
                    </router-link>
                </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>