import { reactive, computed } from 'vue';


export default function useForm() {

  const formData = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  });
  return { formData};
};
