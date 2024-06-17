<template>
    <!-- component -->
    <div class="min-h-screen w-full content-center justify-center p-5 bg-gray-200">
        <div class="flex justify-center items-center gap-5">
            <div class="flex justify-center items-center gap-5 ">
                <button @click="navigateTo('cars')" class="border border-green-500 rounded-md py-1 px-2">Voitures</button>
                <button @click="navigateTo('Motars')" class="border border-green-500 rounded-md py-1 px-2">Motars</button>
                <button @click="navigateTo('country')" class="border border-green-500 rounded-md py-1 px-2">Pays</button>
                <button @click="navigateTo('githubUsers')" class="border border-green-500 rounded-md py-1 px-2">Utilisateurs github</button>
            </div>

            <div>
                <input class="rounded-md text-center h-7" type="search" placeholder="Recherche..."
                v-model="searchVal">
            </div>
        </div>

        <router-view></router-view>
    </div>
 

</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed, onMounted } from 'vue';
import { CarsService } from '@/service/Voitures'
import { DataService } from '@/service/DataService'


const router = useRouter();

const navigateTo = (route) => {
  router.push(`/${route}`)
}


  const searchVal = ref('')

  // Définir les données pour les voitures
  const cars = ref([
    { id: 1, nom: 'Tesla Model S', categorie: 'Electrique', image:'../../public/img/Tesla_Model_S.webp'},
    { id: 2, nom: 'BMW M3', categorie: 'Sport', image:'../../public/img/BMW_M3.jpg' },
    { id: 3, nom: 'Audi A4', categorie: 'Berline', image:'../../public/img/Audi_A4.jfif' },
    { id: 4, nom: 'Ford F-150', categorie: 'Camion', image:'../../public/img/Ford_F-150.jpg' },
    { id: 5, nom: 'Chevrolet Corvette', categorie: 'Sport', image:'../../public/img/Chevrolet_Corvette.jfif' },
    { id: 6, nom: 'Toyota Prius', categorie: 'Hybride', image:'../../public/img/Toyota_Prius.jpg' },
    { id: 7, nom: 'Honda Civic', categorie: 'Compact', image:'../../public/img/Honda_Civic.jpg' },
    { id: 8, nom: 'Jeep Wrangler', categorie: 'SUV', image:'../../public/img/Jeep_Wrangler.jpg' },
    { id: 9, nom: 'Mercedes-Benz C-Class', categorie: 'Berline', image:'../../public/img/Mercedes-Benz_C-Class.jpg' },
    { id: 10, nom: 'Lexus RX', categorie: 'SUV', image:'../../public/img/Lexus_RX.jpeg' },
    { id: 11, nom: 'Nissan Leaf', categorie: 'Electrique', image:'../../public/img/Nissan_Leaf.jpg' },
    { id: 12, nom: 'Porsche 911', categorie: 'Sport', image:'../../public/img/Porsche_911.jpg' },
    { id: 13, nom: 'Subaru Outback', categorie: 'Wagon', image:'../../public/img/Subaru_Outback.webp' },
    { id: 14, nom: 'Volkswagen Golf', categorie: 'Compact', image:'../../public/img/Volkswagen_Golf.jpg' },
    { id: 15, nom: 'Volvo XC90', categorie: 'SUV', image:'../../public/img/Volvo_XC90.jpg' },
    { id: 16, nom: 'Hyundai Elantra', categorie: 'Compact', image:'../../public/img/Hyundai_Elantra.jpg' },
    { id: 17, nom: 'Mazda CX-5', categorie: 'SUV', image:'../../public/img/Mazda_CX-5.jpg' },
    { id: 18, nom: 'Chevrolet Bolt', categorie: 'Electrique', image:'../../public/img/Chevrolet_Bolt.jpg' },
    { id: 19, nom: 'Ford Mustang', categorie: 'Sport', image:'../../public/img/Ford_Mustang.jpg' },
    { id: 20, nom: 'Kia Sorento', categorie: 'SUV', image:'../../public/img/Kia_Sorento.jpg' }
  ]);

    //Fonction de filtrage
    const filteredItems = computed(() => {
      const query = searchVal.value.toLowerCase();
      console.log(query);
      return cars.value.filter(item =>
        item.nom.toLowerCase().includes(query)
      );
    });

    //juste un test
    const carsService = new CarsService();
    let country = ref([])
    const dataService = new DataService()

    const fetchCountyData = async () => {
      try {
          country.value = await dataService.getCountry();
          console.log(country.value);
      } catch (error) {
        console.log(error);
      }
    }

    onMounted(() => {
      fetchCountyData();
        // console.log(cars);
    })

  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
    text-align: left;
  }
  </style>