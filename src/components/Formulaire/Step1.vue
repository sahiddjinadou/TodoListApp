<template>
    <div class="flex flex-col gap-4">
      <h2 class="text-center font-bold text-2xl">Step 1</h2>
      <input  placeholder="First Name" required v-model="formValues.firstName"/>
      <input  placeholder="Last Name" required v-model="formValues.lastName"/>
    </div>
  </template>
  
<script setup>
  const props = defineProps(['formValues']);

</script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  