<template>
    <div class="globalll flex flex-col gap-16 md:flex-row mx-auto  text-left">
        
      <div class="md:w-1/2">
        <h2 class="text-2xl text-red-600 font-extrabold">Contactez-nous</h2>
        <p class="mt-2">N'hésitez pas à nous contacter en utilisant le formulaire ci-dessous :</p>
  
        <div class="mt-4">
          <input type="text" placeholder="Nom" class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
  
        <div class="mt-4 flex">
          <div class="mr-2 flex-1">
            <input type="email" placeholder="Email" class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="ml-2 flex-1">
            <input type="tel" placeholder="Téléphone" class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
  
        <div class="mt-4">
          <textarea placeholder="Message" class="w-full px-4 py-2  h-44 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
  
        <div class="mt-4">
          <button class="px-4 py-2 bg-blue-500 text-white rounded-md">Envoyer</button>
        </div>
      </div>
     <div class=" md:w-1/2  mt-4 md:mt-0  md:pl-8 pt-2 p-10 h-5/6 bg-white rounded-lg shadow-lg relative">
       
        <h3 class="text-2xl text-red-600 font-extrabold">Informations de contact</h3>
        <p class="mt-2 w-5/6 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique justo in nunc condimentum, et maximus mauris lacinia. Integer dapibus varius ante in euismod.</p>
  
        <ul class="mt-4">
          <li class="flex items-basline mb-6">
            <font-awesome-icon :icon="['fas', 'location-dot']" class="mr-6 text-red-600"/>
            <b class="mr-8">Adresse</b>
            <span> Bd MOHAMMED VI,<br> 
                Imm FB08, 3ème étage, n° 9,
                <br> Mohammédia 28820</span>
          </li>
          <li class="flex items-basline mb-6">
            <font-awesome-icon :icon="['fas', 'envelope']" class="mr-6 text-red-600" />
            <b class="mr-10">Email</b>
            <span> direction@gthconsult.ma</span>
          </li>
          <li class="flex items-basline ">
            <font-awesome-icon :icon="['fas', 'mobile-screen-button']" class="mr-6 text-red-600" />
            <b class="mr-4">Téléphone</b>
            <span>  +212 5 23 27 27 74<br> 
                +212 5 23 27 29 79</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  

  <style scoped>
.globalll {
  width: 90%;
 
}

</style>
 
  