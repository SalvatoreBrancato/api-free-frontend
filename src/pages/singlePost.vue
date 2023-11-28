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
            
                <div>{{ elem.title }}</div>
                <div>{{ elem.content }}</div>
                <div>{{ elem.category.name }}</div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>