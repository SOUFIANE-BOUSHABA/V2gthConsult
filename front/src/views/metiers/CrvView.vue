<template>
  <div class="containerFerst">
    <div class="titre text-left p-4">Home <span class="text-orange-700 font-extrabold font">|</span> Test</div>
    <div class="top-div mb-24">
      <div class="image-cover text-left ">
    
        <img src="@/assets/6.733de935.jpg" alt="Image de couverture">
      </div>
      <div class="centered-text grid justify-between p-4">
        <p> Découvrez nos services dans les secteurs de la construction, de l'Industrie, du Bâtiment, et de tertiaire.</p>
       
        <div class="socialMedia flex justify-center gap-4">
          <svg style="color: blue" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" fill="blue"></path> </svg>
          <svg style="color: blue" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" fill="blue"></path> </svg>
          <svg style="color: blue" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" fill="blue"></path> </svg>
        </div>
      </div>
    </div>
   
      <div class="containerGlobal flex items-center justify-center  h-screen" id="metiers">
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

<style  scoped>
.containerFerst {
  position: relative;
  height: auto;
   margin: auto;
}

.top-div {
  position: relative;
  width: 100%;
  height: 40vh;
}

.image-cover {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image-cover img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.centered-text {
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 50%;
  height: 60%;
  margin-top: 100px;
  z-index: 100;
  background-color: rgb(255, 255, 255);
  color: #686868;
  border:1px solid rgb(124, 123, 123);
}

.bottom-div {
  width: 100%;
  height: auto; 
}




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
