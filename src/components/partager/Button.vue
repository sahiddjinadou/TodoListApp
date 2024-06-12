<template>
    <button @click="$emit('click')">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
  };
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  