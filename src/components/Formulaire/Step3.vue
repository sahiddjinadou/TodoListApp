<template>
    <div class="flex flex-col gap-4">
      <h2 class="text-center font-bold text-2xl">Step 3</h2>
      <input  placeholder="Address" v-model="props.formValues.address"/>
      <input  placeholder="City" v-model="props.formValues.city"/>
      <!-- <input type="file" accept="image/*" @change="handleFileChange" > -->
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['formValues']);
  const emit = defineEmits(["image-up"]);

  
  // let selectedImage = null;


  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if(file){
  //     const reader = new FileReader();
  //     reader.onload = function(e){
  //       const arrayBuffer = e.target.result;
  //       selectedImage = new Blob([arrayBuffer], {type: file.type});
  //       emit("image-up", selectedImage);
  //       console.log("Image Blob:", selectedImage);
  //     }
  //     reader.readAsArrayBuffer(file);
  //   }
  // }
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  