<template>
  <div>
    <div
      v-if="type === 'paragraph'"
      v-for="el in data"
    >
      <p>{{ el }}</p>
    </div>

    <ul v-if="type === 'ul'">
      <li v-for="el in data">{{ el }}</li>
    </ul>

    <ol v-if="type === 'ol'">
      <li v-for="el in data">{{ el }}</li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'Content',
    props: ['data', 'type'],
  };
</script>
