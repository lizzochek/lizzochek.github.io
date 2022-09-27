<template>
  <div id="card">
    <img
      :src="product.image"
      alt="image"
    />
    <p>Title: {{ product.title }}</p>
    <p>Price: {{ product.price }}</p>
  </div>
</template>

<script>
  export default {
    name: 'ProdCard',
    props: ['product'],
  };
</script>

<style scoped>
  #card {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin-left: 2rem;
    margin-top: 2rem;
    width: 15%;
    height: 350px;
    display: flex;
    flex-direction: column;
    vertical-align: center;
    justify-content: center;
  }

  #card p {
    height: 5%;
    margin-top: 4rem;
    padding: 0;
  }

  img {
    width: 90%;
    height: 40%;
    display: block;
  }
</style>
