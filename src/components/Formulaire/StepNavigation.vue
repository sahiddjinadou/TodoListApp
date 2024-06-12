<template>
  <div>
    <Step1 v-if="currentStep === 1" />
    <Step2 v-if="currentStep === 2" />
    <Step3 v-if="currentStep === 3" />
    <Step4 v-if="currentStep === 4" />
    <!-- <Button v-if="currentStep > 1" @click="prevStep">Previous</Button>
    <Button v-if="currentStep < 4" @click="nextStep">Next</Button> -->
  </div>
</template>
  
  <script>
import { useForm } from "../../composables/useForm";
import Button from "../partager/Button.vue";
import Step1 from "./Step1.vue";
import Step2 from "./Step2.vue";
import Step3 from "./Step3.vue";
import Step4 from "./Step4.vue";

export default {
  components: { Button,Step1, Step2, Step3, Step4 },
  setup() {
    const { currentStep, nextStep, prevStep } = useForm();
    return { currentStep, nextStep, prevStep };
  },
};
</script>
  
  <style scoped>
/* Ajoutez vos styles ici */
</style>
  