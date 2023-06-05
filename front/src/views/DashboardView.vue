<template>
  <div class="dashboard">
    <div class="top  pr-4  pl-4">
      <div class="logo w-24 mr-6">
        <img src="@/assets/logogth.8f1f3863.png"/>
      </div>

      <div class="infoHeader">
      <div class="company-name  text-zinc-400 text-left text-sm">
       AGC AUTOMATIVE INDUVER MOROCCO <br>
       ATLANTIC FREE ZONE 99350 AMER SAFLIA
      </div>
      <div class="name   text-zinc-400 text-left text-sm">
        DRIOUCH Imad  <br>
       imad.driouch@eu.agc.com
       </div>
      <div class="buttons flex gap-4 ">
        <button class="px-4 py-3 text-sm font-medium text-white bg-indigo-600 rounded-full hover:text-white"  @click="openModal">
          <font-awesome-icon :icon="['fas', 'envelope']" /> Observation/Reclamation
        </button>
       
       
       
       
        <div class="fixed inset-0 flex items-center justify-center testModal"  v-if="isModalOpen" >
            <div class="fixed inset-0 bg-black opacity-50  testModal"></div>

            <div class="bg-white rounded-lg p-6 testModal">
              <textarea class="w-full h-32 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Enter your observation" ></textarea>
          
            <div class="mt-4 flex justify-end">
             
            </div>
              <div class="mt-6 flex justify-end gap-4">
                <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-500" @click="sendObservation"  >
                Send
              </button>
                <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-500" @click="closeModal" >
                  Close
                </button>
              </div>
            </div>
         </div>
       
       
         <button class="px-4 py-3 text-sm font-medium text-white bg-gray-600 rounded-full hover:text-white">
          <font-awesome-icon :icon="['fas', 'right-from-bracket']" /> Déconnexion
        </button>
        
        
      </div>
    </div>
      <div class=" affichemenu flex justify-center   rounded-full  cursor-pointer filterr" @click="showDiv = true">
        <span class="fa fa-bars" id="icon"></span>
      </div>
  
      <div v-if="showDiv" class="fixed top-0 left-0 right-0 h-5/6 p-10 bg-zinc-300 z-50 ">
        <div   class="pb-6">
          <div class="  grid gap-10 text-center">
            <div class="company-name  text-zinc-400 text-left text-sm">
             AGC AUTOMATIVE INDUVER MOROCCO <br>
             ATLANTIC FREE ZONE 99350 AMER SAFLIA
            </div>
            <div class="name   text-zinc-400 text-left text-sm">
              DRIOUCH Imad  <br>
             imad.driouch@eu.agc.com
             </div>
            <div class="buttons grid gap-4 ">
              <button class="px-4 py-3 text-sm font-medium text-white bg-indigo-600 rounded-full hover:text-white"  @click="openModal">
                <font-awesome-icon :icon="['fas', 'envelope']" /> Observation/Reclamation
              </button>
             
             
             
             
              <div class="fixed inset-0 flex items-center justify-center testModal"  v-if="isModalOpen" >
                  <div class="fixed inset-0 bg-black opacity-50  testModal"></div>
      
                  <div class="bg-white rounded-lg p-6 testModal">
                    <textarea class="w-full h-32 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Enter your observation" ></textarea>
                
                  <div class="mt-4 flex justify-end">
                   
                  </div>
                    <div class="mt-6 flex justify-end gap-4">
                      <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-500" @click="sendObservation"  >
                      Send
                    </button>
                      <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-500" @click="closeModal" >
                        Close
                      </button>
                    </div>
                  </div>
               </div>
             
             
               <button class="px-4 py-3 text-sm font-medium text-white bg-gray-600 rounded-full hover:text-white">
                <font-awesome-icon :icon="['fas', 'right-from-bracket']" /> Déconnexion
              </button>
              
              
            </div>
          </div>
         
        </div>
       
  
        <button @click="showDiv = false" class="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16"> <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/> <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/> </svg></button>
      </div>

   


    </div>
    <div class="bottom">
      <div class="left p-6 pt-10  ">
       <div class="DownIndex">
        <h1 class="text-lg font-bold text-zinc-400 mb-3 mt-3 text-left">Trouver Le Rapport</h1>

        <div class="relative">
          <input type="text" placeholder="Search" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 ">
          <span class="absolute inset-y-0 right-2 flex items-center pr-3">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.2-5.2M15 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
            </svg>
          </span>
        </div>

        <h1 class="text-lg font-bold text-zinc-400 mb-3 mt-4 text-left">Trouver La Catégorie</h1>

        <div class="relative inline-block w-full">
          <select class=" appearance-none w-full px-4 py-2 text-zinc-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 ">
            <option >Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 12l-6-6h12l-6 6z" />
            </svg>
          </div>
        </div>


        <h1 class="text-lg font-bold text-zinc-400 mb-3 mt-4 text-left">Trouver L'anneé</h1>

        <div class="relative inline-block w-full">
          <select class=" appearance-none w-full px-4 py-2 text-zinc-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 ">
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 12l-6-6h12l-6 6z" />
            </svg>
          </div>
        </div>
       </div>
        
      </div>
      <div class="right p-6">
       
        <div class="content ">
          <div class="bg-white shadow-md rounded-lg overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 ">
              <thead class="bg-gray-100">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase ">Date</th>
                  <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase w-64 ">Références de rapport</th>
                  <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase ">Désignation</th>
                  <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase ">Action</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 text-left text-cyan-500  font-medium">
             
                <tr class="hover:bg-zinc-100">
                  <td class=" py-4 pl-4 whitespace-nowrap">2023-05-29</td>
                  <td class=" py-4  pl-4 whitespace-nowrap">RP001</td>
                  <td class=" py-4  pl-4 whitespace-nowrap">Lorem Ipsum</td>
                  <td class=" py-4  pl-4 pr-10 whitespace-nowrap flex">
                    <div class="px-4 py-2 text-sm font-medium text-white bg-indigo-300 rounded-full  cursor-pointer"> <p class="text-gray-700 animate-bounce-infinite "> <font-awesome-icon :icon="['fas', 'download']" /></p></div>
                    <div class="px-4 py-2 ml-2 text-sm font-medium text-white bg-red-300 rounded-full cursor-pointer "><p class="text-gray-700 animate-spin-slow"><font-awesome-icon :icon="['fas', 'plus']" /></p></div>
                  </td>
                </tr>
                <tr class="hover:bg-zinc-100">
                  <td class=" py-4 pl-4 whitespace-nowrap">2023-05-29</td>
                  <td class=" py-4  pl-4 whitespace-nowrap">RP001</td>
                  <td class=" py-4  pl-4 whitespace-nowrap">Lorem Ipsum</td>
                  <td class=" py-4  pl-4 whitespace-nowrap flex">
                    <div class="px-4 py-2 text-sm font-medium text-white bg-indigo-300 rounded-full  cursor-pointer"> <p class="text-gray-700 animate-bounce-infinite "> <font-awesome-icon :icon="['fas', 'download']" /></p></div>
                    <div class="px-4 py-2 ml-2 text-sm font-medium text-white bg-red-300 rounded-full cursor-pointer "><p class="text-gray-700 animate-spin-slow"><font-awesome-icon :icon="['fas', 'plus']" /></p></div>
                  </td>
                </tr>
                <tr class="hover:bg-zinc-100">
                  <td class=" py-4 pl-4 whitespace-nowrap">2023-05-29</td>
                  <td class=" py-4  pl-4 whitespace-nowrap">RP001</td>
                  <td class=" py-4  pl-4 whitespace-nowrap">Lorem Ipsum</td>
                  <td class=" py-4  pl-4 whitespace-nowrap flex">
                    <div class="px-4 py-2 text-sm font-medium text-white bg-indigo-300 rounded-full  cursor-pointer"> <p class="text-gray-700 animate-bounce-infinite "> <font-awesome-icon :icon="['fas', 'download']" /></p></div>
                    <div class="px-4 py-2 ml-2 text-sm font-medium text-white bg-red-300 rounded-full cursor-pointer "><p class="text-gray-700 animate-spin-slow"><font-awesome-icon :icon="['fas', 'plus']" /></p></div>
                  </td>
                </tr>
                <tr class="hover:bg-zinc-100">
                  <td class=" py-4 pl-4 whitespace-nowrap">2023-05-29</td>
                  <td class=" py-4  pl-4 whitespace-nowrap">RP001</td>
                  <td class=" py-4  pl-4 whitespace-nowrap">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolorem? Deleniti velit, hic exercitationem perspiciatis quibusdam voluptas amet cumque, placeat qui inventore nobis consequatur molestiae sunt perferendis harum eum quaerat. Ipsum</td>
                  <td class=" py-4  pl-4 whitespace-nowrap flex">
                    <div class="px-4 py-2 text-sm font-medium text-white bg-indigo-300 rounded-full  cursor-pointer"> <p class="text-gray-700 animate-bounce-infinite "> <font-awesome-icon :icon="['fas', 'download']" /></p></div>
                    <div class="px-4 py-2 ml-2 text-sm font-medium text-white bg-red-300 rounded-full cursor-pointer "><p class="text-gray-700 animate-spin-slow"><font-awesome-icon :icon="['fas', 'plus']" /></p></div>
                  </td>
                </tr>
                <tr class="hover:bg-zinc-100">
                  <td class=" py-4 pl-4 whitespace-nowrap">2023-05-29</td>
                  <td class=" py-4  pl-4 whitespace-nowrap">RP001</td>
                  <td class=" py-4  pl-4 whitespace-nowrap">Lorem Ipsum</td>
                  <td class=" py-4  pl-4 whitespace-nowrap flex">
                    <div class="px-4 py-2 text-sm font-medium text-white bg-indigo-300 rounded-full  cursor-pointer"> <p class="text-gray-700 animate-bounce-infinite "> <font-awesome-icon :icon="['fas', 'download']" /></p></div>
                    <div class="px-4 py-2 ml-2 text-sm font-medium text-white bg-red-300 rounded-full cursor-pointer "><p class="text-gray-700 animate-spin-slow"><font-awesome-icon :icon="['fas', 'plus']" /></p></div>
                  </td>
                </tr>
              
               
              </tbody>
            </table>
          </div>
          
        </div>
        <div class="footer flex flex-wrap items-baseline gap-10">
        <div class="flex justify-center mt-4">
          <nav class="inline-flex rounded-md shadow">
            <a href="#" class="px-2 py-1 bg-gray-200 text-gray-500 rounded-l-md hover:bg-gray-300">précédent</a>
            <a href="#" class="px-2 py-1 bg-gray-200 text-gray-500 hover:bg-gray-300">1</a>
            <a href="#" class="px-2 py-1 bg-gray-200 text-gray-500 hover:bg-gray-300">2</a>
            <a href="#" class="px-2 py-1 bg-gray-200 text-gray-500 rounded-r-md hover:bg-gray-300">suivant</a>
          </nav>
        </div>
        <div class="flex items-center mb-2">
          <label for="perPage" class="mr-2">afficher:</label>
          <select id="perPage" class="px-2 py-1 border rounded-md">
            <option value="10">3</option>
            <option value="10">6</option>
            <option value="20">9</option>
            <option value="30">12</option>
          </select>
        </div>
       
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDiv: false,
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
}
.infoHeader{
  display:flex;
  gap:30px;
}
.testModal{
  z-index: 110;
}
.DownIndex{
  z-index: -100;
}

.top {
  width: 100%;
  z-index: 40;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
}

.bottom {
  display: flex;
}
.affichemenu{
  display: none;
}
.left {
  width: 20%;
 z-index: 10;
  height: auto;
  min-height: 90vh;
  box-shadow:8px 0px 8px -4px rgba(0, 0, 0, 0.1);
}

.right {
  width: 80%;
  background-color: rgb(250, 252, 253);
}
.content{
 
  height: auto;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1px);
  }
  100% {
    transform: translateY(1px);
  }
}

.animate-bounce-infinite {
  animation: bounce .7s infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(0deg);
  }
  70% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin 2s linear infinite;
}

@media screen and (max-width : 1010px){
  .infoHeader{
    display: none;
  }
  .affichemenu{
    display: block;
  }
  .bottom{
   
   min-width: 100%;
    display:grid;
    justify-content: center;
   

  }
  .bottom .left{
    width:100%;
    box-shadow:none;
  }
  .bottom .left input{
    width: 100%;
  }
  .bottom .right{
    width: 100%;
    margin-top:-300px;
    overflow-x: auto;
  }
}
</style>
