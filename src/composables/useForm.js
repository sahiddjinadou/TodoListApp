import { ref, computed } from 'vue';


export default function useForm() {

  const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  });
  return { formData};
};
