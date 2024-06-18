<template>
    <div class="flex flex-col gap-4">
      <h2 class="text-center font-bold text-2xl">Step 2</h2>
      <input  type="email" placeholder="Email" v-model="formValues.email"/>
      <input  type="tel" placeholder="Phone Number" v-model="formValues.phone"/>
      
    </div>
  </template>
  
  <script setup>


  const props = defineProps(['formValues']);
  // console.log(props.formValues);
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  