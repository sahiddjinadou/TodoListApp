<template>
    <div class="flex flex-col gap-4">
      <h2 class="text-center font-bold text-2xl">Step 1</h2>
      <Input placeholder="First Name" />
      <Input  placeholder="Last Name" />
      <Button @click="nextStep">Next</Button>
    </div>
  </template>
  
  <script setup>
  import Button from "@/components/partager/Button.vue";
  import Input from "@/components/partager/Input.vue";

  
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  