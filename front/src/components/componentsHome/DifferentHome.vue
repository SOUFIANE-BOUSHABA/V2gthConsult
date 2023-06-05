<template>
  <div class="global">
    <div class="divTop">
      <h1 class="title  font-bold mb-4 text-4xl">Qu'est-ce qui nous <span class="text-red-600">différencie</span>  ?</h1>
      <p class="text-zinc-500 hover:text-zinc-700">AlgoSecure est un cabinet de conseil indépendant spécialisé en sécurité des systèmes d’information (SSI). Nous sommes une équipe lyonnaise de passionnés de sécurité, au plus proche de vos besoins en cybersécurité. Notre métier est d’accompagner nos clients à Lyon, Paris, Grenoble et Saint-Étienne pour sécuriser leur système d’information.</p>
    </div>
    <div class="divBottom">
      <div class="item cursor-pointer">
        <div class="divHeader">
          <i class="icon mr-2 text-3xl text-red-500"><font-awesome-icon :icon="['fas', 'chess-knight']" /></i>
          <h2 class="headerTitle"> Expertise</h2>
        </div>
        <div class="divBody ">
          <p class="text-zinc-500 hover:text-zinc-700">Notre équipe est composée d'experts en cybersécurité, en audit et pentests, reverse engineering, analyse forensique et conseil (iso 27001, formation, sensibilisation...).</p>
        </div>
      </div>
      <div class="item cursor-pointer">
        <div class="divHeader">
          <i class="icon text-3xl mr-2 text-red-500"><font-awesome-icon :icon="['fas', 'chess-rook']" /></i>
          <h2 class="headerTitle">Indépendance</h2>
        </div>
        <div class="divBody ">
          <p class="text-zinc-500 hover:text-zinc-700">AlgoSecure revendique le fait de n'avoir aucun partenariat avec des éditeurs ou constructeurs.</p>
        </div>
      </div>
      <div class="item cursor-pointer">
          <div class="divHeader">
            <i class="icon text-3xl mr-2 text-red-500"><font-awesome-icon :icon="['fas', 'chess']" /></i>
            <h2 class="headerTitle">Innovation</h2>
          </div>
          <div class="divBody ">
            <p class="text-zinc-500 hover:text-zinc-700">Nous avons noué un partenariat avec un centre de recherche à Lyon pour travailler sur la sécurisation des systèmes IoT à travers le financement d'une thèse Cifre.</p>
          </div>
        </div>
        <div class="item cursor-pointer">
          <div class="divHeader">
            <i class="icon text-3xl mr-2 text-red-500"><font-awesome-icon :icon="['fas', 'globe']" /></i>
            <h2 class="headerTitle">À taille humaine</h2>
          </div>
          <div class="divBody ">
            <p class="text-zinc-500 hover:text-zinc-700">La taille de notre structure vous garantit une offre personnalisée ainsi qu'une qualité de service optimale.</p>
          </div>
        </div>
        <div class="item cursor-pointer">
          <div class="divHeader">
            <i class="icon text-3xl mr-2 text-red-500"><font-awesome-icon :icon="['fas', 'brain']" /></i>
            <h2 class="headerTitle">En expansion</h2>
          </div>
          <div class="divBody ">
            <p class="text-zinc-500 hover:text-zinc-700">Notre siège se trouve à Lyon mais nous couvrons également les régions de Paris, Saint-Étienne, Grenoble et Annecy.</p>
          </div>
        </div>
        <div class="item cursor-pointer">
          <div class="divHeader">
            <i class="icon text-3xl mr-2 text-red-500"><font-awesome-icon :icon="['fass', 'chess-board']" /></i>
            <h2 class="headerTitle"> Certifiés</h2>
          </div>
          <div class="divBody ">
            <p class="text-zinc-500 hover:text-zinc-700">Nous sommes qualifiés PASSI, afin de vous fournir des audits et tests d'intrusion qualitatifs.</p>
          </div>
      </div>
    </div>
  </div>
</template>

<style>
.global {
 height: auto;
 padding-top: 130px;
 padding-bottom: 130px;
 margin-top: -100px;
 background: rgba(236, 235, 235, 0.8);
}

.divTop {
 
  width: 600px;
margin: 0 auto;
text-align: center;
margin-bottom: 30px;
}

.divBottom {
 
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.item:nth-child(2),
.item:nth-child(5) {
border-left: 2px solid rgb(222, 220, 220);
border-right: 2px solid rgb(222, 220, 220);
}
.item:nth-child(1),
.item:nth-child(2), .item:nth-child(3) {
border-bottom: 2px solid rgb(222, 220, 220);

}

.item {

  width: 30%;
  text-align: center;
 
  padding:50px ;
}

.divHeader {
  display: flex;
}

.icon {
}

.headerTitle {
  margin-bottom: 20px;
 font-weight: bold;

}

.divBody p{
 text-align: justify;
 padding-left: 40px;
}
@media screen and (max-width: 1080px) {
  .divBottom {
    flex-wrap: wrap;
  }
  
  .item {
    width: 50%;
    border-bottom: 2px solid rgb(222, 220, 220);
  }
  .item:nth-child(2),
  .item:nth-child(5) {
    border-left: 0px ;
    border-right: 0px ;
  }
}
@media screen and (max-width: 768px) {
  .item {
    width: 100%;
  }
  .divTop{
    width:80%;
  }
}
</style>
