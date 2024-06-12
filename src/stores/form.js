import { reactive } from 'vue';



export const formStore = reactive({
  formData: {},
  currentStep: 1,
  nextStep() {
    this.currentStep++;
  },
  prevStep() {
    this.currentStep--;
  },
  updateFormData(newData) {
    this.formData = { ...this.formData, ...newData };
  },
});
