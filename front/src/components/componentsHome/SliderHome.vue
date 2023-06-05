<template>
  <div>
    <div class="slider" @mouseover="stopAutoSlide" @mouseleave="startAutoSlide">
      <div class="slider-container">
        <div
          class="slider-slide"
          v-for="(photo, index) in photos"
          :key="index"
          :style="getSlideStyle(index)"
        >
          <div class="contenuSlider mr-44 text-left text-white">
            <h1 class="font-bold text-3xl">{{ photo.title }}</h1>
            <br />
            <p>{{ photo.description }}</p>
            <br />
            <button class="enSavoirPlus">En savoir plus</button>
          </div>
          <div class="blur"></div>
          <img :src="photo.src" alt="" />
        </div>
      </div>
    </div>

    <div class="pagination">
      <span
        v-for="(photo, index) in photos"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="setCurrentSlide(index)"
      >
      </span>
    </div>

    <div class="controls">
      <button @click="prevSlide"><font-awesome-icon icon="fa-solid fa-angles-left" class="font-left" /></button>
      <button @click="nextSlide"><font-awesome-icon icon="fa-solid fa-angles-right" class="font-right" /></button>
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
          description:
            "Apave est un groupe international de plus de 150 ans spécialisé dans la maîtrise des risques.",
        },
        {
          id: 2,
          src: require("@/assets/6.733de935.jpg"),
          title: "Contrôles environnementaux",
          description:
            "Apave est un groupe international de plus de 150 ans spécialisé dans la maîtrise des risques.",
        },
        {
          id: 3,
          src: require("@/assets/2.eb84855a.jpg"),
          title: "Contrôles réglementaires des installations techniques",
          description:
            "Apave est un groupe international de plus de 150 ans spécialisé dans la maîtrise des risques Apave est un groupe international de plus de 150 ans spécialisé dans la maîtrise des risques.",
        },
        {
          id: 4,
          src: require("@/assets/1.3cfb99a0.jpg"),
          title: "Audits et assistances techniques",
          description:
            "Apave est un groupe international de plus de 150 ans spécialisé dans la maîtrise des risques.",
        },
      ],
      currentIndex: 0,
      slideInterval: null, 
      Duration: 4000, 
    };
  },
  methods: {
    setCurrentSlide(index) {
      this.currentIndex = index;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.photos.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.photos.length) % this.photos.length;
    },
    getSlideStyle(index) {
      if (index === this.currentIndex) {
        return {
          display: "block",
        };
      } else {
        return {
          display: "none",
        };
      }
    },
    //auto slide 4 seconds
    startAutoSlide() {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, this.Duration);
    },
    stopAutoSlide() {
      clearInterval(this.slideInterval);
    },
  },
  created() {
    this.startAutoSlide(); 
  },
};
</script>

<style scoped>
.slider {
  height: 100vh;
  width: 100%;
  margin: 0 auto;
}
.blur {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 100vh;
  opacity: 0.5;
}

.slider-container {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.slider-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.7s;
}
.slider-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.contenuSlider {
  position: absolute;
  z-index: 5;
  margin-top: 200px;
  margin-left: 250px;
  max-width: 700px;
  min-width: 100px;
}
.controls {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  position: absolute;
  top: 0;
  margin-top: 350px;
  width: 100%;
  height: 30%;
  z-index: 2;
}
.controls button .font-left, .controls button .font-right {
  width: 80px;
  height: 80px;
  color: #ff0000b0;
  transition  : 0.3s all ease;
}

.controls button:hover .font-left, .controls button:hover .font-right {
  width: 85px;
  height: 85px;
  color: #0044ffb0;
}

.pagination {
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 10%;
}

.pagination span {
  display: inline-block;
  margin-top: 100vh;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
}

.pagination span.active {
  background-color: rgb(226, 20, 6);
}
.enSavoirPlus {
  cursor: pointer;
  padding: 5px 10px;
  border: 2px solid white;
  border-radius: 50px;
}
.enSavoirPlus:hover {
  background-color: white;
  color: black;
}
@media screen and (max-width: 1168px) {
  .enSavoirPlus {
    width:160px;
  }
  .contenuSlider{
    margin-left: 100px;
    margin-top: 100px;
    margin-right: 50px;
  }
  .controls button{
    width:100px;
  }
}
@media screen and (max-width: 768px) {
  .contenuSlider {
    margin-left: 100px;
    margin-top: 100px;
    margin-right: 50px;
  }
}
</style>
