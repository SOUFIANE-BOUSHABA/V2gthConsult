<template>
  <div class="grid  gap-4 ml-6">
    <p class="font-bold text-left">Filters</p>
    <div class="relative w-72">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
    
      <input type="search" id="default-search" class="block w-full p-4 w-72 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 " placeholder="Rechercher" required>
      
  </div>
    
      <div class="relative dropdown">
        <button @click="toggleDropdown(1)" :class="{'bg-gray-200': isActiveDropdown(1)}" class="border focus:border-red-400 w-72 py-2 px-4 rounded flex justify-between ">
          <span class="text-zinc-500">Filter by work type</span>
          <svg class="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5 7l5 5 5-5z" />
          </svg>
        </button>
        <ul v-show="isActiveDropdown(1)" class="dataOption absolute text-left z-10 w-72 text-gray-700 bg-white rounded-md shadow-lg mt-2">
          <li><a class="block px-4 py-2 hover:bg-gray-200" href="#">Option 1</a></li>
          <li><a class="block px-4 py-2 hover:bg-gray-200" href="#">Option 2</a></li>
          <li><a class="block px-4 py-2 hover:bg-gray-200" href="#">Option 3</a></li>
        </ul>
      </div>
    
  
      <div class="relative dropdown">
        <button @click="toggleDropdown(2)" :class="{'bg-gray-200': isActiveDropdown(2)}" class="border focus:border-red-400 w-72  py-2 px-4 rounded flex justify-between ">
          <span class="text-zinc-500">Filter by level</span>
          <svg class="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5 7l5 5 5-5z" />
          </svg>
        </button>
        <ul v-show="isActiveDropdown(2)" class=" dataOption absolute z-10 text-left text-gray-700 w-72 bg-white rounded-md shadow-lg mt-2">
          <li><a class="block px-4 py-2 hover:bg-gray-200" href="#">Option A</a></li>
          <li><a class="block px-4 py-2 hover:bg-gray-200" href="#">Option B</a></li>
          <li><a class="block px-4 py-2 hover:bg-gray-200" href="#">Option C</a></li>
        </ul>
      </div>
    
    <div class="relative">
       <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <label class="relative inline-flex items-center w-full cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer">
            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Option 1</span>
          </label>
        </div>
        <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <label class="relative inline-flex items-center w-full cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer">
            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Option 1</span>
          </label>
        </div>
        <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <label class="relative inline-flex items-center w-full cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer">
            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Option 1</span>
          </label>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeDropdown: null
    };
  },
  methods: {
    toggleDropdown(dropdown) {
      if (this.activeDropdown === dropdown) {
        this.activeDropdown = null;
      } else {
        this.activeDropdown = dropdown;
      }
    },
    isActiveDropdown(dropdown) {
      return this.activeDropdown === dropdown;
    }
  }
};
</script>

<style scoped>
@media screen  and (max-width: 1020px){
   .relative , .dropdown button{
   width: 800px;
  }
}
@media screen  and (max-width:850px){
  .relative , .dropdown button{
  width: 600px;
 }
}
@media screen  and (max-width:650px){
.relative , .dropdown button{
  width: 400px;
 }
}
@media screen  and (max-width:450px){
  .relative , .dropdown button{
  width: 300px;
 }
}
@media screen  and (max-width:350px){
  .relative , .dropdown button{
  width: 200px;
 }
 .dataOption{
  width: 200px;
 }
 
}
@media screen  and (max-width:270px){
  .relative , .dropdown button{
  width: 150px;
 }
 .dataOption{
  width: 150px;
 }
}

</style>
