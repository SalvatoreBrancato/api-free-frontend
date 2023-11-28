<script>
    export default{
        name: "updatePost",
        data() {
        return {
            title: "",
            slug: "",
            image: "",
            content: "",
            published: false,
            categoryId: 1,
            userId: 1,
            tags: [3]
        };
    },
    methods: {
    onSubmit() {
      // Crea l'oggetto JSON
      const data = {
        title: this.title,
        slug: this.slug,
        image: this.image,
        content: this.content,
        published: this.published,
        categoryId: this.categoryId,
        userId: this.userId,
        tags: this.tags
      };

      // Invia l'oggetto JSON al backend Express
      axios.put("http://localhost:3000/post/", data)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        });
    },
  },
}
</script>

<template>
    <h3>update</h3>
</template>

<style lang="scss" scoped>

</style>