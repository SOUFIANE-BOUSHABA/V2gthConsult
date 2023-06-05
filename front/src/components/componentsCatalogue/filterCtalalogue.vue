
<template>
  <div class="alll">
    <div class="flex justify-center border-2 border-gray-400 rounded-full  cursor-pointer filterr" @click="showDiv = true">
      <div class="w-90  flex justify-center text-sky-500 font-bold pt-2 pb-2">
        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 4)"><path d="m4.5 0c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1z"/><path d="m16.5 2h-11"/><path d="m3.5 2h-3"/><path d="m4.5 10c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1z"/><path d="m16.5 12h-11"/><path d="m3.5 12h-3"/><path d="m12.5 5c.5522847 0 1 .44771525 1 1v2c0 .55228475-.4477153 1-1 1s-1-.44771525-1-1v-2c0-.55228475.4477153-1 1-1z"/><path d="m11.5 7h-11"/><path d="m16.5 7h-3"/></g></svg> Filter
      </div>
    </div>

    <div v-if="showDiv" class="fixed top-0 left-0 right-0 h-5/6 p-4 bg-white z-40 ">
      <div   class="pb-6">
        <h3 class="text-xl font-semibold mb-2 text-cyan-400 border-t-2 pt-6 text-left">categories</h3>
        <div class="scrollable  p-2 mb-4 ">
         <div class="block min-h-6 " v-for="(category, index) in categories" :key="index" >
            <label class="flex gap-1 items-start">
              <input id="checkbox-1" class="mt-1 " type="checkbox" />
              <label for="checkbox-1" class="cursor-pointer text-left select-none text-slate-700 text-zinc-400" >   {{ category}}</label>
            </label>
            </div>
          
            
        </div>
       
      </div>
      <div  class="pb-6">
        <h3 class="text-xl font-semibold mb-2 text-cyan-400 border-t-2 pt-6 text-left">Type</h3>
        <div class="scrollable  p-2 mb-4 ">
         <div class="block min-h-6  " v-for="type in getTypes()" :key="type">
            <label class="flex gap-1 items-start">
              <input  type="radio" />
              <label for="checkbox-1" class="cursor-pointer text-left select-none text-slate-700 text-zinc-400" >   {{type}}</label>
            </label>
            </div>
          
            
        </div>
       
      </div>

      <button @click="showDiv = false" class="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16"> <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/> <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/> </svg></button>
    </div>
   <div class="w-64 ml-24 leftDiv">
    <p class="text-cyan-400 text-left">Réinitialiser</p>
    <div   class="pb-6">
      <h3 class="text-xl font-semibold mb-2 text-cyan-400 border-t-2 pt-6 text-left">categories</h3>
      <div class="scrollable  p-2 mb-4 ">
       <div class="block min-h-6 " v-for="(category, index) in categories" :key="index" >
          <label class="flex gap-1 items-start">
            
            <input type="radio" name="" id="">
            <label  class="cursor-pointer text-left select-none text-slate-700 text-zinc-400" >   {{ category}}</label>
          </label>
          </div>
        
          
      </div>
     
    </div>
    <div  class="pb-6">
      <h3 class="text-xl font-semibold mb-2 text-cyan-400 border-t-2 pt-6 text-left">Type</h3>
      <div class="scrollable  p-2 mb-4 ">
       <div class="block min-h-6  " v-for="type in getTypes()" :key="type">
          <label class="flex gap-1 items-start">
            <input  type="radio" />
            <label for="checkbox-1" class="cursor-pointer text-left select-none text-slate-700 text-zinc-400" >   {{type}}</label>
          </label>
          </div>
        
          
      </div>
     
    </div>
    
  </div>
</div>
</template>

<script>
export default{
data() {
  return { showDiv: false,
    categories : ["Contrôle réglementations installations techniques", "Contrôle des risques travailleur", "Contrôle environnementaux", "Formation reglementaires"],
      missions : [
                  { prev : "ELEC-VRI" , name : "Vérification réglementaire initial d’installation électrique", type	 : "Installations électriques"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ELEC-VRP" , name : "Vérification réglementaire périodique d’installation électrique",type : "Installations électriques"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ELEC-VRPPV" , name : "Vérification réglementaire périodique d’installation photovoltaique", type : "Installations électriques"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ELEC-VRPPP" , name : "Vérification réglementaire périodique d’installation parafoudre - paratonnere",type : "Installations électriques"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ELEC-VLRVR" , name : "Vérification  de levée des réserves suite vérification  réglementaire d’installation électrique", type : "Installations électriques"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ELEC-VTH" , name : "Vérification d'installation électrique par thermographie infrarouge sans Q19", type : "Installations électriques"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ELEC-VTHQ19" , name : "Vérification d'installation électrique par thermographie infrarouge avec Q19",type : "Installations électriques"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ELEC-VAR" , name : "Vérification d'installation électrique par analyseur de réseau",type : "Installations électriques"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ELEC-D" , name : "Diagnostique d’une installation électrique",type : "Installations électriques"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ELEC-AT" , name : "Assistance technique installation électrique",type : "Installations électriques"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "LEV-VRMRS" , name : "Vérification réglementaire de mise ou remise en service d’appareils et accessoires de levage", type : "Appareil et accessoires levage"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "LEV-VRP" , name : "Vérification réglementaire périodique d’appareils et accessoires de levage", type : "Appareil et accessoires levage"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "LEV-VLRVR" , name : "Vérification de levée des réserves suite Vérification réglementaire d’appareils et accessoires de levage", type : "Appareil et accessoires levage"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "LEV-D" , name : "Diagnostique d’appareils et accessoires de levage", type : "Appareil et accessoires levage"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "VET-QN" , name : "Vérification d'un équipement de travail - Quais niveleurs", type : "Equipement de travail"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "VET-PP" , name : "Vérification d'un équipement de travail - Portes et portail", type : "Equipement de travail"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "VET-EPI" , name : "Vérification d'un équipement de travail - Equipement de Protection Individuel", type : "Equipement de travail"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "VET-RY" , name : "Vérification d'un équipement de travail - Rayonnage", type : "Equipement de travail"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ASC-VDT" , name : "Vérification du dossier technique d’une installation d’ascenseur ou monte-charge accompagné", type : "Installation d’ascenseur"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ASC- STI" , name : "Suivi des travaux d’installation d’ascenseur ou monte-charge accompagné",type : "Installation d’ascenseur"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ASC-VMRS" , name : "Vérification réglementaire de mise ou remise en service d’une installation d’ascenseur ou monte-charge accompagné",type : "Installation d’ascenseur"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ASC-VRP" , name : "Vérification réglementaire périodique d’une installation d’ascenseurs ou monte-charge accompagné",type : "Installation d’ascenseur"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ASC-VLRVR" , name : "Vérification  de levé de reserves suite vérification réglementaire périodique d’une installation d’ascenseurs ou monte-charge accompagné",type : "Installation d’ascenseur"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ASC-AST" , name : "Assistance technique ascenseur",type : "Installation d’ascenseur"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "ASC-D" , name : "Diagnostique ascenseur", type : "Installation d’ascenseur"  ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "INC- VTSSI" , name : "Vérification  triennale d'un Système de Sécurité Incendie" ,type : "Dispositif incendie" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "INC- VPSSI" , name : "Vérification  périodique d'un Système de Sécurité Incendie" ,type : "Dispositif incendie" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "INC- VSDF" , name : "Vérification  du système de désenfumage" ,type : "Dispositif incendie" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "INC- VMSS" , name : "Vérification  des moyens de secours simples" ,type : "Dispositif incendie" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "INC- VGC" , name : "Vérification  des appareils de cuisson et de remise en températures" ,type : "Dispositif incendie" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "INC- AUD" , name : "Audit de mise ou remise en conformité réglementaire des dispositifs incendie" ,type : "Dispositif incendie" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "INC- DDI" , name : "Diagnostique des dispositifs incendie" ,type : "Dispositif incendie" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "INC- AT" , name : "Assistance technique dispositif incendie" ,type : "Dispositif incendie" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "PRS-VQRQ" , name : "Vérification  d'un appreil à pression gas/vapeur pour qualification / requalification " ,type : "Appareils à pression de gaz et vapeur" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "PRS-VRP" , name : "Vérification  réglementaire d'un appreil à pression gas/vapeur" ,type : "Appareils à pression de gaz et vapeur" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "PRS-D" , name : "Diagnostique d'un appreil à pression gas/vapeur" ,type : "Appareils à pression de gaz et vapeur" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "MAC-VGPT" , name : "Vérification Générale Périodique Trimestriel machinee" ,type : "Vérification machines et engins de chantiers" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "MAC-VGPA" , name : "Vérification Générale Périodique Annuelle machiner" ,type : "Vérification machines et engins de chantiers" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "MAC-VCCE" , name : "Vérification de la conformité CE machine" ,type : "Vérification machines et engins de chantiers" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "MAC-AR" , name : "Analyses des risque d'une machine" ,type : "Vérification machines et engins de chantiers" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "MAC-D" , name : "Diagnostique d'un appreil à pression gas/vapeur" ,type : "Vérification machines et engins de chantiers" ,categorie : "Contrôle réglementations installations techniques" },
                  { prev : "BRUIT-VDBD" , name : "Vérification  des doses de bruits absorbées par les travailleurs par dosimétrie" , type : "Vérification des risques au travail" ,categorie : "Contrôle des risques travailleur" },
                  { prev : "BRUIT-VDBCT" , name : "Vérification  des doses de bruits absorbées par les travailleurs code du travail" , type : "Vérification des risques au travail" ,categorie : "Contrôle des risques travailleur" },
                  { prev : "BRUIT-CRT" , name : "Elaboration de la cartographie bruit" ,type : "Vérification des risques au travail" ,categorie : "Contrôle des risques travailleur" },
                  { prev : "ECRM-MTE" , name : "Mesures des taux d’éclairement au poste du travail" , type : "Vérification des risques au travail" , categorie : "Contrôle des risques travailleur" },
                  { prev : "AIR-MQA" , name : "Mesure de la qualité de l’air intérieur" , type : "Vérification des risques au travail" , categorie : "Contrôle des risques travailleur" },
                  { prev : "EAU-POT" , name : "Analyse de la potabilité de l’eau" , type : "Vérification des risques au travail" , categorie : "Contrôle des risques travailleur" },
                  { prev : "EAU-LEG" , name : "Analyse des légionnelles" , type : "Vérification des risques au travail" , categorie : "Contrôle des risques travailleur" },
                  { prev : "ENVIR-ARL" , name : "Analyse des rejets liquides" ,type : "Environnement" ,categorie : "Contrôle environnementaux" },
                  { prev : "ENVIR-ARAT" , name : "Analyse des rejets atmosphérique" ,type : "Environnement" ,categorie : "Contrôle environnementaux" },
                  { prev : "ENVIR-MNS" , name : "Mesures se la nuisance sonore" ,type : "Environnement" ,categorie : "Contrôle environnementaux" },
                  { prev : "ENVIR-AQA" , name : "Analyse de la qualité de l’air environnant" ,type : "Environnement" ,categorie : "Contrôle environnementaux" },
                  { prev : "EVAC-INC" , name : "Evacuation : guide-files et serre-files" ,type : "Formations réglementaires incendie" ,categorie : "Formation reglementaires" },
                  { prev : "EPI-INC" , name : "Equipier Première Intervention" ,type : "Formations réglementaires incendie" ,categorie : "Formation reglementaires" },
                  { prev : "ESI-INC" , name : "Equipier Seconde Intervention" ,type : "Formations réglementaires incendie" ,categorie : "Formation reglementaires" },
                  { prev : "SST-INC" , name : "Sauveteur Secouriste du Travail" ,type : "Formations réglementaires incendie" ,categorie : "Formation reglementaires" },
                  { prev : "PF-INC" , name : "Permis feu" ,type : "Formations réglementaires incendie" ,categorie : "Formation reglementaires" },
                  { prev : "SSI1-INC" , name : "Exploitation d’un Système de Sécurité Incendie" ,type : "Formations réglementaires incendie" ,categorie : "Formation reglementaires" },
                  { prev : "HAB-001" , name : "Préparation à l’habilitation électrique, personnel non électricien ind. B0-H0-H0V" ,type : "Formations réglementaires electricité" ,categorie : "Formation reglementaires" },
                  { prev : "HAB-002" , name : "Préparation à l’habilitation électrique, personnel non électricien ind B0-H0-H0V" ,type : "Formations réglementaires electricité" ,categorie : "Formation reglementaires" },
                  { prev : "HAB-003" , name : "Préparation à l’habilitation électrique, personnel électricien Basse tension" ,type : "Formations réglementaires electricité" ,categorie : "Formation reglementaires" },
                  { prev : "HAB-004" , name : "Préparation à l’habilitation électrique, personnel électricien Basse et/ou haute tension (HTA)" ,type : "Formations réglementaires electricité" ,categorie : "Formation reglementaires" },
                  { prev : "HAB-005" , name : "Préparation à l’habilitation électrique, personnel effectuant des verifications, des mesurages, des manoeuvres es basse et/ou haute tesnsion - Ind. BE-HE verification, mesurage et manoeuvre" ,type : "Formations réglementaires electricité" ,categorie : "Formation reglementaires" },
                  { prev : "HAB-006" , name : "Recyclage" , type : "Formations réglementaires electricité" ,categorie : "Formation reglementaires" }
                ],
    
  };
  
},
methods: {
    getTypes() {
      const TOUStypes = new Set();
      this.missions.forEach(mission => {
        TOUStypes.add(mission.type);
      });
      return Array.from(TOUStypes);
    }
  }
};
</script>

<style  scoped>

.leftDiv{
  max-width: 300px;
  float: left;
 
}

.scrollable {
  width: 100%;
  max-height: 150px; /* Define your desired maximum height */
  overflow-y: scroll; /* Enable vertical scrolling */
  scrollbar-width: thin; /* Set the width of the scrollbar */
  scrollbar-color: #3182ce transparent; /* Set the color of the scrollbar (replace with your desired color) */
}

.scrollable::-webkit-scrollbar {
  width: 8px; /* Set the width of the scrollbar */
}
.scrollable::-webkit-scrollbar-track{
  background-color: #e6e7e9;
  border-radius: 4px;
}
.scrollable::-webkit-scrollbar-track:hover{
  background-color: #dadbdd;
 
}
.scrollable::-webkit-scrollbar-thumb {
  background-color: #1980e0; /* Set the color of the scrollbar thumb (replace with your desired color) */
  border-radius: 4px; /* Set the border-radius of the scrollbar thumb */
}

.scrollable::-webkit-scrollbar-thumb:hover {
  background-color: #2a6a9e; /* Set the color of the scrollbar thumb on hover (replace with your desired color) */
}
.filterr{
  margin: auto;
  display: flex;
  transition: .5s;
  justify-content: center;
  width: 40%;
  display: none;
}
@media screen and (max-width: 1101px) {
  .leftDiv{
    display: none;
  }
  .filterr{
    display: block;
  }
 }

</style>