<script>
import axios from 'axios'

export default {
    name: "CreaPost",
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
    <div>
        <input v-model="this.title" type="text" name="title" placeholder="Titolo" />
        <input v-model="this.slug" type="text" name="slug" placeholder="Slug" />
        <input v-model="this.image" type="text" name="image" />
        <textarea v-model="this.content" name="content" placeholder="Contenuto"></textarea>
        <span>published: </span>
        <input v-model="this.published" type="checkbox" name="published" value="true" />
        <select v-model="this.categoryId" name="categoryId">
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>
        </select>
        <select v-model="this.userId" name="userId">
            <option value="1">Salvo 1</option>
            <option value="2">SalvoDue</option>
            <option value="5">Samuele</option>
        </select>
        <span>tags: </span>
        <input v-model="this.tags" type="checkbox" name="tags" value="1" />
        <button @click="onSubmit()" type="submit">Invia</button>
    </div>
</template>

<style scoped></style>