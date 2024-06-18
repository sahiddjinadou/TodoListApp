import { reactive, computed } from 'vue';


export default function useForm() {

  const formData = reactive({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    // image: null,
  });

  //Réinitialisation des formData
 const resetFormData = () => {
  formData.firstName = '';
  formData.lastName = '';
  formData.email = '';
  formData.phone = '';
  formData.address = '';
  formData.city = '';
  // formData.image = null;
 }

 return { formData, resetFormData};
};
