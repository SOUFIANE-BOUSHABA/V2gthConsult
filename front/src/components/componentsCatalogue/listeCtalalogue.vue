<template>

<div class="container grid ml-10">
  <div v-for="mission in missions" :key="mission" class="all  mr-20 border-b-2">
  
          <div class="flex  p-4 cursor-pointer contenuu">
              <div class="w-1/3">
                <img src="@/assets/7.a4904722.jpg" alt="Product Image" class="w-72 h-52 mr-2">
              </div>
              <div class="w-2/3 px-4   content" >
                <h2 class="text-xl font-medium mb-11 mt-6 text-left text-sky-500 Titre">{{ mission.name }}</h2>
                <div class="flex justify-between items-center mb-4  fotterContent">
                  <span class="text-left text-xs w-96  Description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime animi a, laborum inventore distinctio dolor ea molestiae!   <br></span>
                  <button class=" btn bg-blue-500 text-white px-4 py-2 rounded  ease-in-out duration-300">Demander un devis  <span class="flech">&#10230;</span> </button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                </div>
              </div>
            </div>
            
  </div>
</div>
</template>

<script>
  export default{
     data(){
   return{
  
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
};

</script>


<style scoped>

       
       svg{
          display: none;
       }
       .btn{
          display: flex;
          transition: 0.6s;
       }
      .btn .flech{
          display: none;
          width: 0px;
          margin-left: 5px;
          overflow: hidden;
         
      }
      .btn:hover .flech{
          display: block;
          width:20px;
          color:blue;
      }
      .btn:hover{
          background-color: white;
          color: blue;
          border:1px solid blue;
      }
      @media screen and (max-width: 1480px) {
         .all{
          max-width: 1000px;
          min-width: 600px;
          left: 0;
         }
        }
        @media screen and (max-width: 1335px) {
          .all{
           max-width: 950px;
          }
          .Description{
            width:250px;
          }
          .btn{
            margin-left: -420px;
          }
         }
         @media screen and (max-width: 1235px) {
          .all{
           max-width: 850px;
          }
          img{
            width:190px;
              height: 170px;
          }
          
          .content{
            margin-top:-20px;
            margin-left: -20px;
          }
          .content .btn{
           margin-right: -60px;
          }
         }
         @media screen and (max-width: 1135px) {
          .all{
           width: 650px;
           
           margin-right: 20px;
           margin-left: 20px;
         
          }
          img{
            width:130px;
              height: 120px;
          }
          .content{
            margin-top: 0px;
           
          }
         .fotterContent{
          margin-top: -20px;
          margin-left: -40px;
         
         }
         .Titre{
          margin-top: -3px;
          font-size: 16px;
          margin-left: -40px;
         }
         }
         @media screen and (max-width:1101px) {
          .container{
            width: 1000px;
            padding: 0;
            margin: 0;
          }
          .all{
           min-width: 1000px;
           margin:auto;
           float: none;
          padding: 0;
         
         }
         .all:hover{
          background: white;
         }
         img{
            width:160px;
              height: 150px;
        
          margin-left: 40px;
         }
         svg{
          display: block;
          width:70px;
          opacity: 0.4;
       }
         .fotterContent{
          display: flex;
          margin-top: 20px;
         }
         .fotterContent button{
          display: none;
         }
         }
         @media screen and (max-width: 1040px) {
          .all{
           min-width:900px;
         
         }
         }
         @media screen and (max-width: 980px) {
          .all{
           min-width:800px;
         margin: auto;
         }
         }
         @media screen and (max-width: 900px) {
          .all{
           min-width:700px;
        
         }
         .content{
          margin-left: 40px;
         }
         }
         @media screen and (max-width: 800px) {
          .all{
           width:500px;
        
         }
         img{
          width:140px;
          height: 120px;
            }
          
         }
         @media screen and (max-width: 740px) {
          .all{
           min-width:700px;
        
         }
         .content{
          margin-left: 40px;
         }
         .fotterContent{
          margin-top: -30px;
        }
         }
         @media screen and (max-width: 700px) {
          .all{
            margin-left: -10px;
           min-width:650px;
        
         }
         .fotterContent{
          margin-top: -30px;
        }
         }
         
         
         @media screen and (max-width: 650px) {
          .container{
            width: 600px;
          }
          .all{
            width: 600px;
           min-width:400px;
          
         }
         .Titre , .fotterContent{
          margin-left: 30px;
         }
        
         }
         @media screen and (max-width: 610px) {
          .container{
            width: 530px;
          }
          .all{
            width: 530px;
           min-width:400px;
          
         }
         .Titre , .fotterContent{
          margin-left: 30px;
         }
        
         }
         @media screen and (max-width: 560px) {
          .container{
            width: 430px;
          }
          .all{
            width:450px;
           min-width:300px;
         }
         }
         @media screen and (max-width: 490px) {
          .all{
            width:400px;
           min-width:300px;
         }
         .Description{
          display: none;
         }
         .flech{
          width: 20px;
        }
         .Titre{
          font-size: 14px;
          width:200px;
         }
         .content{
          margin-left:0px;
         }
         }
         @media screen and (max-width: 442px) {
          .container{
            width: 350px;
          }
          .all{
            width:350px;
           min-width:300px;
         }
         img{
          height: 80px;
         }
         }
         @media screen and (max-width: 395px) {
          .container{
            width: 300px;
          }
          .all{
            width:300px;
           min-width:300px;
         }
         }
         @media screen and (max-width: 340px) {
          .container{
            width:250px;
          }
          .all{
            width:250px;
           min-width:200px;
         }
         svg{
          display: none;
         }
         .Titre{
          font-size: 12px;
          width:150px;
         }
         }
        
         
         

</style>





