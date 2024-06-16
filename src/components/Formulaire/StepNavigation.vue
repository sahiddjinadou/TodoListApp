<template>
  <div class="flex flex-col gap-6 pt-6">
    <h2 class="text-3xl text-gray-400 text-center font-bold">Formulaire</h2>

    <div
      class="mx-auto block w-[480px]  rounded-lg bg-gray-400 p-6 shadow-4 dark:bg-surface-dark container"
    >
      <form >
        <!-- <component 
        v-bind:is="arrayComponent[step]"
        v-bind:formValues="formData"
        >
        </component> -->
        <router-view :formValues="formData"></router-view>
      </form>
      <span>{{ veryfPassNextStep }}</span>
      <div class="button">
        <button @click="prevStep" v-if="currentStepIndex != 0" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Prev</button>
        <button @click="nextStep" v-if="currentStepIndex != (steps.length -1) && veryfPassNextStep !== false" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Next</button>
      </div>

      <div class="soumettre">
        <button  v-if="currentStepIndex == (steps.length -1)">Soumettre</button>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";


import Step1 from "@/components/Formulaire/Step1.vue";
import Step2 from "@/components/Formulaire/Step2.vue";
import Step3 from "@/components/Formulaire/Step3.vue";
import Step4 from "@/components/Formulaire/Step4.vue";

import  useForm  from "../../composables/useForm";

const router = useRouter();
const route = useRoute();


const { formData} = useForm();

const step = ref(0);

const arrayComponent = [Step1, Step2, Step3, Step4];
const steps = ['etap1', 'etap2', 'etap3', 'etap4'];

const veryfPassNextStep = ref(false);
console.log(veryfPassNextStep);



const currentStepIndex = computed(() => {
  return steps.indexOf(route.path.split('/').pop());
});
console.log(currentStepIndex.value);


const isFirsStep = computed(() => {
  return currentStepIndex.value === 0;
})

const isLastStep = computed(() => {
  return currentStepIndex.value === steps.length - 1;
});

const nextStep = () => {
  if(currentStepIndex.value < (steps.length - 1)) {
    const nextStepPath = steps[currentStepIndex.value + 1];
    router.push(`/mutiStepForm/${nextStepPath}`);
  }
}

const prevStep = () => {
  if(currentStepIndex.value > 0) {
    const prevStepPath = steps[currentStepIndex.value - 1];
    router.push(`/mutiStepForm/${prevStepPath}`)
  }
}

const emptyValue = (index, objRef) => {
  switch (index) {
    case 0:
      veryfPassNextStep.value = objRef.value.firstName !== '' && objRef.value.lastName !== '';
      break;
    case 1:
      veryfPassNextStep.value = objRef.value.email !== '' && objRef.value.phone !== '';
      break;
    case 2:
      veryfPassNextStep.value = objRef.value.address !== '' && objRef.value.city !== '';
      break;
  }
};

watch(() => currentStepIndex.value, (newValue) => {
  emptyValue(newValue, formData);
});

watch(() => formData.value, (newValue) => {
  emptyValue(currentStepIndex.value, formData);
}, { deep: true });
// function prevStep(){
//   if(step.value > 0) step.value--;
// }

// function nextStep(){
//   if(step.value < 3) step.value++;
// }


</script>
  

<style >
/* Ajoutez vos styles ici */
.button {
  display: flex;
  justify-content: space-around;
  margin-block: 10px;
}

input {
  background-color: #F9FAFB; /* bg-gray-50 */
  border: 1px solid #D1D5DB; /* border and border-gray-300 */
  color: #111827; /* text-gray-900 */
  font-size: 0.875rem; /* text-sm */
  border-radius: 0.5rem; /* rounded-lg */
  display: block; /* block */
  width: 100%; /* w-full */
  padding: 0.625rem; /* p-2.5 */
}

input {
  outline: none; /* Ensure no default outline */
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* focus:ring-blue-500 */
  border-color: #3B82F6; /* focus:border-blue-500 */
}

.container {
  position: relative;
}

.soumettre {
  margin-top: 25px;
  margin-bottom: 5px;
display:flex;
justify-content: center;
/* align-items:center; */
}

.soumettre button{
position: absolute;
bottom: 2%;
border: 1px solid #D1D5DB;
border-radius: 8px;
background-color: #F9FAFB;
padding: 0.625rem;
font-size: 0.875rem;
color: #111827;
}
</style>
  