<template>
    <div>
      <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: String,
      placeholder: String,
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  