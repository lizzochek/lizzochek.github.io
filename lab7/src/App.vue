<template>
  <div id="app">
    <head>
      <title>Dolhova Yelyzaveta, IP-94, Lab7, Variant 2</title>
      <meta charset="UTF-8" />
      <meta
        name="keywords"
        content="Dolhova, IP-94, Yelyzaveta"
      />
      <meta
        name="description"
        content="Laboratory work 7 by Dolhova"
      />
    </head>
    <body>
      <Heading :text="fullName" />
      <Content
        :data="[dateOfBirth, education]"
        type="paragraph"
      />

      <Heading text="Hobbies" />
      <Content
        :data="hobbies"
        type="ul"
      />

      <Heading text="Favourite books" />
      <Content
        :data="books"
        type="ol"
      />

      <Content
        :data="[kyivDescription]"
        type="paragraph"
      />
      <Image />

      <div id="container">
        <ProdCard
          v-for="product in products"
          :product="product"
        />
      </div>
    </body>
  </div>
</template>

<script>
  import Image from './components/Image.vue';
  import Heading from './components/Heading.vue';
  import Content from './components/Content.vue';
  import ProdCard from './components/ProdCard.vue';

  export default {
    name: 'App',
    components: { Image, Heading, Content, ProdCard },
    data() {
      return {
        fullName: 'Dolhova Yelyzaveta Olehivna',
        dateOfBirth: 'Date of birth: 03.04.2002, Donetsk, Ukraine',
        education: 'Graduated lyceum "Intellect", 4th year student in KPI',
        hobbies: ['Crochet', 'Art makeup', 'Cycling'],
        books: [
          'American tragedy - Theodore Dreiser',
          'Plague - Albert Camus',
          '1984 - George Orwell',
        ],
        kyivDescription:
          "Out of all cities I've been to Kyiv is still the best and the most beautiful one!",
      };
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
    },
    created() {
      this.$store.dispatch('fetchProducts');
    },
  };
</script>

<style>
  #container {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
