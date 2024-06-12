<template>
    <div>
      <h2>Step 1</h2>
      <Input v-model="localFormData.firstName" placeholder="First Name" />
      <Input v-model="localFormData.lastName" placeholder="Last Name" />
      <Button @click="nextStep">Next</Button>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  import { useForm } from '../../composables/useForm';
  import Input from '../partager/Input.vue';
  import Button from '../partager/Button.vue';
  
  export default {
    components: { Input, Button },
    setup() {
      const { formData, updateFormData, nextStep } = useForm();
      const localFormData = ref({ firstName: '', lastName: '' });
  
      watch(localFormData, () => {
        updateFormData(localFormData.value);
      });
  
      return { localFormData, nextStep };
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  