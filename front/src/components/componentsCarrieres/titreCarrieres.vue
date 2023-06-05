<template>
    <div class="parent text-left mt-14 grid  ml-6">
     <h1 class="text-3xl text-zinc-600 font-bold">
      Find the best Vue.js jobs
     </h1>
     <p class="text-zinc-400">
      Browse through our list of Vue.js jobs, find your perfect match and apply. Use the sidebar filters for more accurate results!
     </p>
    </div>
</template>
  
<script>
export default {
  name: "titreCarrieres",
};
</script>
  
<style scoped>
@media screen  and (max-width:750px){
 
  .parent h1{
   font-size: 18px;

  }
  .parent p{
   font-size: 16px;
  }
 }
@media screen  and (max-width:650px){
 
   .parent h1{
    font-size: 16px;

   }
   .parent p{
    font-size: 12px;
   }
  }
</style>