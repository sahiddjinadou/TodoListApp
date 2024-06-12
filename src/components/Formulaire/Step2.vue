<template>
    <div>
      <h2>Step 2</h2>
      <Input v-model="localFormData.email" placeholder="Email" />
      <Input v-model="localFormData.phone" placeholder="Phone Number" />
      <Button @click="prevStep">Previous</Button>
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
      const { formData, updateFormData, nextStep, prevStep } = useForm();
      const localFormData = ref({
        email: '',
        phone: '',
      });
  
      watch(localFormData, () => {
        updateFormData(localFormData.value);
      });
  
      return { localFormData, nextStep, prevStep };
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  