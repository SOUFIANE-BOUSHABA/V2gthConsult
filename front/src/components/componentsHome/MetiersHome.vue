<template>
  <div class="containerGlobal flex items-center text-left justify-center h-screen" id="metiers">
    <div class="all">
      <div class="container test1">
        <div class="titre p-6 font-bold text-cyan-500 text-3xl">
          <h2>
           <span class="NosBorder">Nos</span> métiers
          </h2>
        </div>
        <div class="paragraphe p-6 text-xl">
          <p>
            Découvrez nos services dans les secteurs de la construction, de l'Industrie, du Bâtiment, et de tertiaire.
          </p>
        </div>
      </div>
      <div v-for="photo in photos" :key="photo.id">
        <div class="container">
          <div class="image">
            <img :src="photo.src" alt="" />
          </div>
          <div class="content"></div>
          <div class="contenu p-3">
            <div class="divTitre font-bold text-2xl text-sky-50 ml-2">
              <p>{{ photo.title }}</p>
            </div>
          </div>
          <div class="contenu2">
            <div class="divFooter">
              <div class="decouvrir">
                <p class="text-white decouvrirText">DECOUVRIR</p>
                <p class="plus text-white text-2xl">+</p>
              </div>
              <p class="cercle "></p>
            </div>
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
      photos: [
        {
          id: 1,
          src: require("@/assets/7.a4904722.jpg"),
          title: "Contrôles risques travailleurs",
        },
        {
          id: 2,
          src: require("@/assets/6.733de935.jpg"),
          title: "Contrôles environnementaux",
        },
        {
          id: 3,
          src: require("@/assets/2.eb84855a.jpg"),
          title: "Contrôles réglementaires des installations techniques",
        },
        {
          id: 4,
          src: require("@/assets/1.3cfb99a0.jpg"),
          title: "Audits et assistances techniques",
        },
        {
          id: 5,
          src: require("@/assets/9.6fc45052.jpg"),
          title: "Formations réglementaires et techniques",
        },
      ],
    };
  },
};
</script>
    
    
<style scoped>
.containerGlobal {
  width: 100%;
  height: auto;
  margin-top: 30px;

}
.all {
  height: auto;
  width: 1050px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.test1 {
  max-width: 350px;
  min-width: 350px;
}
.NosBorder{
  padding-top: 6px;
  border-top: 2px solid red;;
}
.container {
  overflow: hidden;
  flex: 1 0 33.33%;
  position: relative;
  cursor: pointer;
}
.image {
  width: 350px;
  height: 50vh;
}
.image img {
  width: 350px;
  height: 50vh;
  object-fit: cover;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  width: 350px;
  height: 50vh;
  display: flex;
  opacity: 0.3;
}

.contenu {
  position: absolute;
  top: 0;
  left: 0;

  width: 350px;
  height: 300px;
}
.contenu2 {
  position: absolute;
  bottom: 100px;
  
  right:50px;
  width: 350px;
  height: 70px;
}
.divFooter {
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: end;
}
.divFooter .cercle {
  padding: 25px;
  border: 5px solid rgb(179, 179, 179);
  border-radius: 100px;
  opacity: 0.7;
}
.divFooter:hover .decouvrir .plus {
  -webkit-transform: rotate(600deg);
  -webkit-transition-duration: 1s;
  -webkit-transition-delay: now;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
 
}
.divFooter:hover .decouvrir .decouvrirText {
  padding-right: 5px;
  transition: ease 1s;
}

.decouvrir {
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-right: -35px;
}
.divTitre {
  width: 300px;
  height: 400px;
}
.container:hover .content {
  opacity: 0.5;
  transition: 0.5s ease;
}
.container:hover .image img {
  transition: 0.5s ease;
  transform: scale(1.1);
}
</style>
  
  
  
  
  
    