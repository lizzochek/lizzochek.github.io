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

      <div id="img-container"></div>
      <button
        id="add"
        @click="createImg"
      >
        Add image
      </button>
      <button
        id="smaller"
        @click="changeImgSize('smaller')"
      >
        Make smaller
      </button>
      <button
        id="bigger"
        @click="changeImgSize('bigger')"
      >
        Make bigger
      </button>
      <button id="remove" @click="deleteImg()">Remove image</button>

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
  import { defineComponent, createApp } from 'vue';
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
    methods: {
      createImg(e) {
        const img = defineComponent(Image);
        createApp(img).mount(e.target.previousElementSibling);
      },

      changeImgSize(action) {
        const imgContainer = document.getElementById('img-container');
        const img = imgContainer.lastChild?.firstElementChild;
        if (!img) {
          alert('Please create image first!');
          return;
        }
        const imgSize = img.getBoundingClientRect()['width'];
        console.log(imgSize);
        if (action === 'bigger') {
          if (imgSize >= 1000) return;
          img.style.width = Number(imgSize) + 10 + 'px';
        } else if (action === 'smaller') {
          if (imgSize <= 50) return;
          img.style.width = imgSize - 10 + 'px';
        }
      },
      deleteImg() {
        const imgContainer = document.getElementById('img-container');
        imgContainer.removeChild(imgContainer.lastChild);
      }
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

  button {
    background-color: #405cf5;
    border-radius: 6px;
    border-width: 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    height: 44px;
    margin: 1rem;
    padding: 0 25px;
    text-align: center;
    text-transform: none;
    width: 20%;
  }
</style>
