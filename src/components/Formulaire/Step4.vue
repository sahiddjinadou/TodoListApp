<template>
    <div class="flex flex-col gap-4">
      <h2 class="text-center font-bold text-2xl" >Step 4</h2>
      <p>First Name: <input v-model="props.formValues.firstName"> </p>
      <p>Last Name: <input v-model="props.formValues.lastName"></p>
      <p>Email: <input v-model="props.formValues.email"> </p>
      <p>Phone: <input v-model="props.formValues.phone"> </p>
      <p>Address: <input v-model="props.formValues.address"> </p>
      <p>City: <input v-model="props.formValues.city"> </p>
    </div>

   
  </template>
  
  <script setup>

  const props = defineProps(['formValues']);

  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  span {
    font-size: 1.1em;
    color:chartreuse;
  }
  </style>
  