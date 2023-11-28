<script>
import axios from 'axios'

export default {
    name: "creaPost",
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
      axios.post("http://localhost:3000/post", data)
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
    <div class="d-flex justify-content-center align-items-center vh-100 w-100">
        <div class="container-form d-flex flex-column">
            <div class="mb-4">
                <span>Titolo: </span>
                <input class="me-5" v-model="this.title" type="text" name="title" placeholder="Titolo" />
                <span>Slug: </span>
                <input v-model="this.slug" type="text" name="slug" placeholder="Slug" />
            </div>
            <div class="mb-4">
                <span>Immagin(text): </span>
                <input class="me-3" v-model="this.image" type="text" name="image" />
                <span>Contenuto: </span>
                <input v-model="this.content" name="content" placeholder="Contenuto">
            </div>
            <div class="mb-4">
                <span>published: </span>
                <input class="me-3" v-model="this.published" type="checkbox" name="published" value="true" />
                <span>Categoria: </span>
                <select class="me-3" v-model="this.categoryId" name="categoryId">
                    <option value="1">Categoria 1</option>
                    <option value="2">Categoria 2</option>
                    <option value="3">Categoria 3</option>
                </select>
                <span>User: </span>
                <select class="me-3" v-model="this.userId" name="userId">
                    <option value="1">Salvo 1</option>
                    <option value="2">SalvoDue</option>
                    <option value="5">Samuele</option>
                </select>
                <span>tags: </span>
                <input v-model="this.tags" type="checkbox" name="tags" value="1" />
            </div>            
            <button class="btn btn-primary" @click="onSubmit()" type="submit">Invia</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-form{
    width: 600px;
}
</style>