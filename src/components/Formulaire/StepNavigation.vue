<template>
  <div class="flex flex-col gap-6 pt-6">
    <h2 class="text-3xl text-gray-400 text-center font-bold">
      Formulaire Multi-étapes
    </h2>

    <div
      class="mx-auto block w-[480px] rounded-lg bg-gray-400 p-6 shadow-4 dark:bg-surface-dark container"
    >
      <form @submit.prevent="submitForm">
        <!-- <component 
        v-bind:is="arrayComponent[step]"
        v-bind:formValues="formData"
        >
        </component> -->
        <router-view :formValues="formData" ></router-view>

        <div class="button">
          <button
            type="button"
            @click="prevStep"
            v-if="currentStepIndex != 0"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Prev
          </button>
          <button
            type="button"
            @click="nextStep"
            v-if="
              currentStepIndex != steps.length - 1 &&
              veryfPassNextStep !== false
            "
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Next
          </button>
        </div>

        <div class="soumettre">
          <button v-if="currentStepIndex == steps.length - 1">Soumettre</button>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script setup>
import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { nanoid } from "nanoid";
import { appendFormDataToBlob } from "@/services/BlobServices";

// import Step1 from "@/components/Formulaire/Step1.vue";
// import Step2 from "@/components/Formulaire/Step2.vue";
// import Step3 from "@/components/Formulaire/Step3.vue";
// import Step4 from "@/components/Formulaire/Step4.vue";

import useForm from "../../composables/useForm";

const router = useRouter();
const route = useRoute();
const pageForm = () => {
  return router.push('/mutiStepForm/etap1')
};



const { formData, resetFormData } = useForm();
formData.id = nanoid();

const step = ref(0);

// const arrayComponent = [Step1, Step2, Step3, Step4];

const steps = ["etap1", "etap2", "etap3", "etap4"];

const veryfPassNextStep = ref(false);

const currentStepIndex = computed(() => {
  return steps.indexOf(route.path.split("/").pop());
});

const isFirsStep = computed(() => {
  return currentStepIndex.value === 0;
});

const isLastStep = computed(() => {
  return currentStepIndex.value === steps.length - 1;
});

const nextStep = () => {
  if (currentStepIndex.value < steps.length - 1) {
    const nextStepPath = steps[currentStepIndex.value + 1];
    router.push(`/mutiStepForm/${nextStepPath}`);
  }
};

const prevStep = () => {
  if (currentStepIndex.value > 0) {
    const prevStepPath = steps[currentStepIndex.value - 1];
    router.push(`/mutiStepForm/${prevStepPath}`);
  }
};

// const image = ref("");
// const boolImage = ref(false);
// const veryfImage = (img) => {
//   if(img) {
//     console.log(img);
//     formData.image = img;
//     return boolImage = true;
//   } else {
//     return boolImage = false;
//   }
// };


const emptyValue = (index, objRef) => {
  switch (index) {
    case 0:
      veryfPassNextStep.value =
        objRef.firstName !== "" && objRef.lastName !== "";
      break;
    case 1:
      veryfPassNextStep.value = objRef.email !== "" && objRef.phone !== "";
      break;
    case 2:
      veryfPassNextStep.value = objRef.address !== "" && objRef.city !== "" ;
      break;
  }
};

watch(
  () => currentStepIndex.value,
  (newValue) => {
    emptyValue(newValue, formData);
  }
);

watch(
  () => formData,
  (newValue) => {
    emptyValue(currentStepIndex.value, newValue);
  },
  { deep: true }
);

const submitForm = () => {
  appendFormDataToBlob(formData);
  pageForm();
  resetFormData();

};

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
  background-color: #f9fafb; /* bg-gray-50 */
  border: 1px solid #d1d5db; /* border and border-gray-300 */
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
  border-color: #3b82f6; /* focus:border-blue-500 */
}

.container {
  position: relative;
}

.soumettre {
  margin-top: 25px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  /* align-items:center; */
}

.soumettre button {
  position: absolute;
  bottom: 2%;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: #f9fafb;
  padding: 0.625rem;
  font-size: 0.875rem;
  color: #111827;
}
</style>
  