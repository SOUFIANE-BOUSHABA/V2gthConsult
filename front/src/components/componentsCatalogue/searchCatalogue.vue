<template>
  <div class="all">
    <div class="search">
      <form>   
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          
            <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher" required>
            <button type="submit" class="text-white  absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="white"></path> </svg>
            </button>
        </div>
    </form>
    </div>
   <div class="flex flex-wrap place-items-center  container">
    <div v-for="category in categories" :key="category" class="">
      <div class="flex mr-3 border-solid border-sky-500 text-sky-500  p-2  eachOne">
     <h2>{{ category }}</h2>
      <p class="ml-5 mr-5 bg-sky-500  pl-2 pr-2 rounded-full text-white"> {{ countMissions(category) }}</p>
    </div>
    </div>
   </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
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
    countMissions(category) {
      return this.missions.filter(mission => mission.categorie === category).length;
    }
  }
};
</script>


<style scoped>
.all{width: 100%;
  display: grid;
  justify-content: center;
}
.search{
  margin-top: 20px;
  height: 100px;
}
.relative button{
  width:50px;
}
.container{
  margin-bottom: 20px;
   margin-top: -20px;
   height: auto;
}
.eachOne{
 cursor: pointer;
  border: 1px solid rgb(128, 128, 239);
  border-radius: 50px;
  transition: .5s;
 
 }
.eachOne:hover {
 background-color: rgb(103, 103, 242);
 color: white;
}
.eachOne:hover p{
  background-color: white;
  color: rgb(61, 61, 249);
  transition: .5s;
  
}
@media screen and (max-width: 1080px) {
  .all{
   max-width:900px;
   margin: auto;
 }
 }
@media screen and (max-width: 1040px) {
  .all{
   max-width:900px;
   margin: auto;
 }
 }
 @media screen and (max-width: 840px) {
  .all{
   max-width:600px;
   margin: auto;
 }
 }
 @media screen and (max-width: 640px) {
  .all{
   max-width:500px;
   margin: auto;
 }
 *{
  font-size: 14px;
 }
 }
 @media screen and (max-width: 540px) {
  .all{
   max-width:450px;
   margin: auto;
 }
 *{
  font-size: 12px;
 }
 }
 @media screen and (max-width: 490px) {
  .all{
   max-width:350px;
   margin: auto;
 }
 *{
  font-size: 10px;
 }
 }
 @media screen and (max-width: 375px) {
  .all{
   max-width:280px;
   margin: auto;
 }
 *{
  font-size: 9px;
 }
 }
 @media screen and (max-width: 330px) {
  .all{
   max-width:200px;
   margin: auto;
 }
 *{
  font-size: 8px;
 }
 }

</style>