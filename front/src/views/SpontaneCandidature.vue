<template>
  <div class="container">
    <div class="w-full Responsive mx-auto">
      <h2 class="text-center text-2xl font-bold mt-10 mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate impedit unde iure,</h2>
      <form class="flex flex-wrap">
        <div class="w-full sm:w-1/2 px-2 mb-4">
          <input type="text" class="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Nom">
        </div>
        <div class="w-full sm:w-1/2 px-2 mb-4">
          <input type="text" class="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Prénom">
        </div>
        <div class="w-full sm:w-1/2 px-2 mb-4">
          <input type="email" class="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Email">
        </div>
        <div class="w-full sm:w-1/2 px-2 mb-4">
          <input type="tel" class="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Téléphone">
        </div>
        <div class="w-full sm:w-1/2 px-2 mb-4">
          <label for="file1" class="block mb-2 text-left font-bold">Joindre mon CV <span class="text-red-700">*</span></label>
          <div class="relative">
            <input type="file" id="file1" class="hidden" @change="handleFileChange($event, 'file1')">
            <div class="flex items-center justify-center border border-gray-300 bg-white rounded-md px-4 py-2 cursor-pointer"
                 @click="selectFile('file1')">
              <span class="mr-2 text-xs font-bold">Choisir un fichier</span>
              <span class="text-gray-500">{{ selectedFile1 ? selectedFile1.name : 'Aucun fichier sélectionné' }}</span>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 px-2 mb-4">
          <label for="file2" class="block mb-2 text-left font-bold">Ajouter un document</label>
          <div class="relative">
            <input type="file" id="file2" class="hidden" @change="handleFileChange($event, 'file2')">
            <div class="flex items-center justify-center border border-gray-300 rounded-md bg-white px-4 py-2 cursor-pointer"
                 @click="selectFile('file2')">
              <span class="mr-2 text-xs font-bold">Choisir un fichier</span>
              <span class="text-gray-500">{{ selectedFile2 ? selectedFile2.name : 'Aucun fichier sélectionné' }}</span>
            </div>
          </div>
        </div>
        <div class="w-full px-2 mb-4">
          <textarea class="w-full border border-gray-300 rounded-md px-4 py-2" rows="4" placeholder="Votre motivation"></textarea>
        </div>
        <div class="w-full px-2 mb-4">
          <label class="flex items-center">
            <input type="checkbox" class="mr-4">
            <span>Oui, accepter les conditions</span>
          </label>
        </div>
        <div class="w-full px-2 mb-4">
          <p class="text-sm text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quis doloribus unde harum ducimus distinctio exercitationem nisi voluptatibus perferendis aperiam soluta, nulla laudantium, assumenda amet, qui repellendus. Natus, quibusdam a.</p>
        </div>
        <div class="w-full px-2 grid justify-center">
          <button class="w-64 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Envoyer ma candidature
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpontaneCandidature",
  data() {
    return {
      selectedFile1: null,
      selectedFile2: null
    }
  },
  methods: {
    handleFileChange(event, identifier) {
      const file = event.target.files[0];
      if (identifier === 'file1') {
        this.selectedFile1 = file;
      } else if (identifier === 'file2') {
        this.selectedFile2 = file;
      }
    },
    selectFile(identifier) {
      const fileInput = document.getElementById(identifier);
      fileInput.click();
    }
  }
}
</script>

<style scoped>
.container {
  height: auto;
  min-width: 100%;
  margin-top: 5px;
  background: rgba(15, 127, 254, 0.126);
  padding: 10px;
  padding-bottom: 20px;
}

.Responsive {
  width: 700px;
}

@media (max-width: 740px) {
  .Responsive {
    width: 100%;
  }
}
</style>
