<template>
  <div class="carrieres">

    <div class="top">
        <titreCarrieres />
    </div>

    <div class="bottom">

      <div class="filter">
        <filterCarrieres />
      </div>

      <div class="posts">
        <postsCarrieres />
      </div>

      <div class="social-media">
        <socialMediaCarrieres />
      </div>
      
    </div>
  </div>
</template>

<script>
import titreCarrieres from "@/components/componentsCarrieres/titreCarrieres.vue";
import filterCarrieres from "@/components/componentsCarrieres/filterCarrieres.vue";
import socialMediaCarrieres from "@/components/componentsCarrieres/socialMediaCarrieres.vue";
import postsCarrieres from "@/components/componentsCarrieres/postsCarrieres.vue";

export default {
  name : "CarrieresView",
  components : {
    titreCarrieres,
    filterCarrieres,
    socialMediaCarrieres,
    postsCarrieres
  }

}
</script>

<style>


.carrieres {
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: auto;
 
}

.carrieres .top{
  width: 100%;
  height: 170px;
  background-color: #f1f5f9;
}
.carrieres .bottom {
  margin-top:50px;
  display: grid;
  grid-template-columns: 25% 55% 20%;
  width: 100%;
}
@media screen  and (max-width: 1380px){
  .carrieres .bottom {
    grid-template-columns: 25% 50% 25%;
  }
}
@media screen  and (max-width: 1350px){
  .carrieres .bottom {
    grid-template-columns: 27% 48% 25%;
  }
}
@media screen  and (max-width: 1230px){
  .carrieres .bottom {
    grid-template-columns:30% 45% 25%;
  }
}
@media screen  and (max-width: 1190px){
  .carrieres .bottom {
    grid-template-columns:33% 42% 20%;
  }
}
@media screen  and (max-width: 1090px){
  .carrieres .bottom {
    grid-template-columns:33% 40% 20%;
  }
}
@media screen  and (max-width: 1020px){
  .carrieres .bottom {
   display: grid;
   grid-template-columns: none;
   justify-content: center;
  }
}

</style>