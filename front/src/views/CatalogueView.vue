<template>
  <div class="catalogue">

    <div class="search">
      <searchCatalogue />
    </div>

    <div class="filter-liste">
      <filterCtalalogue />
      <listeCtalalogue />
    </div>
   
  </div>
</template>
  
<script>


import filterCtalalogue from "@/components/componentsCatalogue/filterCtalalogue.vue";
import listeCtalalogue from "@/components/componentsCatalogue/listeCtalalogue.vue";
import searchCatalogue from "@/components/componentsCatalogue/searchCatalogue.vue";

export default {
  name: "CatalogueView",
  data() {
    return {

      categorie : ["Contrôle réglementations installations techniques", "Contrôle des risques travailleur", "Contrôle environnementaux", "Formation reglementaires"],
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
  components: {
    filterCtalalogue,
    listeCtalalogue,
    searchCatalogue,
  },
};
</script>
  
<style scoped>
.catalogue {
  display: flex;
  flex-direction: column;
}
.catalogue > .search {
  display: flex;
  height: auto;
  width: 100%;
}
.catalogue > .filter-liste {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
}
.catalogue > .filter-liste > .filter {
  width: 25%;
  height: auto;
  background-color: blue;
}
.catalogue > .filter-liste > .liste {
  width: 75%;
  height: auto;
  background-color: green;
}
@media screen and (max-width:1101px) {
  .catalogue > .filter-liste  {
    width: 100%;
    height: auto;
    display: grid;
  }
}
</style>