<template>
    <div class="flex flex-col gap-4">
      <h2 class="text-center font-bold text-2xl">Step 3</h2>
      <input  placeholder="Address" v-model="props.formValues.address"/>
      <input  placeholder="City" v-model="props.formValues.city"/>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['formValues']);
 
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  