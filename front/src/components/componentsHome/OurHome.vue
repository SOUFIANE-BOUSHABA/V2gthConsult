<template>
    <div class="parent">
      <div class="topContent w-8/12 m-auto justify-center">
        <div class=" grid gap-4 ">
        <h3  class="text-black text-4xl font-extrabold "> Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </h3>
        <p class="text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam adipisci exercitationem labore, esse, natus fugit vero animi eos quisquam molestiae at nihil eius enim cum harum inventore quidem dignissimos rem!</p>
        </div>
    </div>
    <div class="bottomContent">
        <img src="https://gthpdf.fra1.digitaloceanspaces.com/ourWorld.svg" alt="" class="world">
        <div class="analystic flex justify-center gap-36 ">
                        <div class="eachone grid">
                                <h3 class="text-sky-600  font-extrabold text-5xl">2000+</h3>
                                <p>Developpers</p>
                        </div>
                        <div class="eachone grid">
                                    <h3 class="text-sky-600 font-extrabold text-5xl" >267+</h3>
                                    <p>Nationalities</p>
                            </div>
                            <div class="eachone grid">
                                <h3 class="text-sky-600 font-extrabold text-5xl">167+</h3>
                                <p>Tech stacks</p>
                        </div>
                        <div class="eachone grid">
                            <h3 class="text-sky-600 font-extrabold text-5xl">96%</h3>
                            <p>Recommended us</p>
                    </div>
        </div>
        <div class="people flex justify-center gap-16  mt-32 h-32">
            <img src="https://gthpdf.fra1.digitaloceanspaces.com/1our.png" alt="" class="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
            <img src="https://gthpdf.fra1.digitaloceanspaces.com/2our.png" alt="" class="top1 rounded-full h-14 w-14 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
            <img src="https://gthpdf.fra1.digitaloceanspaces.com/3our.png" alt="" class="rounded-full h-16 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
        </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
      name : "OurHome",
      data() {
          return {
  
          }
      }
  
  }
  </script>
  
  <style scoped>
      .parent{
        overflow:hidden ;
          height: 100vh;
          width: 100%;
        
      }
      .analystic{
        margin-top:-70vh;
      }
      .top1{
        margin-top: -70px;
      }
      @media screen  and (max-width: 1211px){
        .analystic{
            margin-top:-60vh;
          }
      }
      @media screen  and (max-width: 1091px){
        .analystic{
            margin-top:-55vh;
            flex-wrap: wrap;
            gap:30px;
          }
          .analystic h3{
            font-size: 50px;
          }
      }
      @media screen  and (max-width: 971px){
        .analystic{
            margin-top:-45vh;
            flex-wrap: wrap;
            gap:30px;
          }
          .analystic h3{
            font-size: 30px;
          }
      }
      @media screen  and (max-width: 881px){
        .analystic{
            margin-top:-42vh;
            flex-wrap: wrap;
            gap:30px;
          }
          .analystic h3{
            font-size: 26px;
          }
         
      }
      @media screen  and (max-width: 770px){
        .analystic{
            margin-top:-39vh;
            flex-wrap: wrap;
            gap:30px;
          }
          .analystic h3{
            font-size: 22px;
          }
          .analystic p{
            font-size: 18px;
          }
         
      }
      @media screen  and (max-width: 680px){
        .analystic{
            margin-top:-35vh;
            flex-wrap: wrap;
            gap:30px;
          }
          .analystic h3{
            font-size: 18px;
          }
          .analystic p{
            font-size: 14px;
          }
          .people img{
            width:40px;
            height:40px;
          }
          .people{
            margin-top: 90px;
          }
         
      }
      @media screen  and (max-width: 600px){
        .analystic{
            margin-top:-30vh;
            flex-wrap: wrap;
            gap:30px;
          }
          .analystic h3{
            font-size: 16px;
          }
          .analystic p{
            font-size: 12px;
          }

         
      }
      @media screen  and (max-width: 520px){
        .analystic{
            margin-top:-27vh;
          }

         
      }
      @media screen  and (max-width: 470px){
        .analystic{
            margin-top:-23vh;
          }
      }
      @media screen  and (max-width: 390px){
        .analystic{
            margin-top:-20vh;
          }
          .world{
            margin-top: 40px;
          }
          .people img{
            display: none;
          }
      }
  </style>
  