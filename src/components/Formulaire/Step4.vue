<template>
    <div class="flex flex-col gap-4">
      <h2 class="text-center font-bold text-2xl" >Step 4</h2>
      <div>
        <label>First Name:</label>  <input v-model="props.formValues.firstName" disabled> 
      </div>
      <div>
        <label>Last Name:</label>  <input v-model="props.formValues.lastName" disabled>
      </div>
      <div>
        <label>Email:</label>  <input v-model="props.formValues.email" disabled> 
      </div>
      <div>
        <label>Phone:</label>  <input v-model="props.formValues.phone" disabled> 
      </div>
      <div>
        <label>Address:</label>  <input v-model="props.formValues.address" disabled>  
      </div>
      <div>
        <label>City:</label>  <input v-model="props.formValues.city" disabled> 
      </div>
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
  