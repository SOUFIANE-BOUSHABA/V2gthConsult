<template>
  <div class="parent">
    <div class="parent">
    <div class="title">
        <h2 class="news">Dernières nouvelles et histoires les plus populaires</h2>
    </div>
    <div class="actual">
        <div class="actual_1">
            <div class="img"><a href=""><img src=""/></a></div>
            <div class="date">15 JUL ,2023</div>
            <div class="description"><a href="" >The for fully had she there leave merit enjoy forth</a></div>
            <div class="comment"><p>BY JOHN BAUS</p></div>
        </div>
        <div class="actual_1" id="division">
            <div class="date">15 JUL ,2023</div>
            <div class="description_1"><a href="" >The for fully had she there leave merit enjoy forth</a></div>
            <p class="text">Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor. Estimable me disposing of be moonlight cordially curiosity.</p>
            <div class="comment_1"><p>BY JOHN BAUS</p></div>
        </div>
        <div class="actual_1">
            <div class="img"><a href=""><img src=""/></a></div>
            <div class="date">15 JUL ,2023</div>
            <div class="description"><a href="" >The for fully had she there leave merit enjoy forth</a></div>
            <div class="comment"><p>BY JOHN BAUS</p></div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
    name : "ActualitesHome"

}
</script>

<style scoped>
 *{
        margin: 0;
        padding: 0%;
        box-sizing: border-box;
        transition: all .2s linear;
        font-family: Arial, Helvetica, sans-serif;
        text-decoration: none;
    }
 .parent {
    height: 860px;
    width : 100%;
    background-color: green;
    margin-top: 200px;
 }
 .title{
        width: 40%;
        margin: auto;
        font-size: 26px;
      
    }
    .news{
        text-align: center;
        color:rgb(36, 48, 100) ;
    }
   
   .actual{
    display: flex;
    flex-direction:row;
    width: 90%;
    margin: auto;
    margin-top: 100px;
    position: relative;
    
   } 
   .actual_1{
    width: 30%;
    text-align: left;
    height: max-content;
    border: 2px solid rgba(207, 31, 33, 0.3);
    margin-left: 30px;
    overflow: hidden;
   }
   img{
    height:400px;
    width: 100%;
    transform-origin: center center;
    object-fit: cover;
    transition: transform 0.5s;
    transition-property: all;
   }
   #division{
    height:405px
   }
   .date{
    font-size: 12px;
    font-weight: bold; 
    position: absolute;
    top: 30px;
    margin-left: 30px;
    color: #fff;
    background-color:rgb(207, 31, 33) ;
    width: 90px;
    height: 20px;
    border-radius: 5px;
    text-align: center;
    padding-top:3px;
   }
   .description{
    position: absolute;
    top: 280px;
    width:25%;
    margin-left: 20px;
   }
   .description a{
    color: #fff;
    font-size: 20px;
    font-weight: bold;
   }
   .comment{
    position: absolute;
    top: 350px;
    margin-left: 20px;
   }
   .comment p{
   
    color: #fff;
    font-size: 14px;
   }
   .comment_1{
    color: black;
    font-size: 14px;
    margin-left: 20px;
    margin-top: 25px;

   }
   .description_1{
    margin-top: 100px;
    width: 90%;
    margin-left: 20px;
   }
   .description_1 a{
    color: black;
    font-size: 20px;
    font-weight: bold;
   }
   .text{
    margin-top: 20px;
    width:90%;
    margin-left: 20px;
   }
   img:hover{
    transform:rotate(5deg) scale(1.1);
   }
   .description_1 a:hover{
     color:rgba(207, 31, 33, 0.8);
    
   }





   @media screen and (min-width:0px) and (max-width:600px){
    .parent{
      height: fit-content;
      padding-bottom: 20px;
    }
    .title{
        width:100%;
        margin: auto;
        height: fit-content;
    }
    .actual{
     display: flex;
    flex-direction:column;
    width: 90%;
    margin: auto;
      
   
   } 
   .comment_1{
    position: absolute;
    top: 330px;
   }
   .actual_1{
    width: 90%;
    text-align: left;
    height: fit-content;
    border: 2px solid rgba(207, 31, 33, 0.3);
    margin-left: 20px;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
   }
   .description{
    width:90%;
   }
}
    @media  (max-width:800px) and (min-width:600px){
        .title{
        width: 100%;
        margin: auto;
        height: fit-content;
    }
    .parent{
        position: relative;
        height: fit-content;
        padding-bottom: 20px;
    }
    .actual{
     display: flex;
    flex-direction:column;
    width: 90%;
      margin-left: 10px;
    margin-top: 50px;  
    text-align: left;
    }
    .comment_1{
    position: absolute;
    top: 330px;
   }
   .text{
    position: absolute;
    top:120px;
   }
    #division{
        position: absolute;
        top: 25%;
        left: 55%;
    }
    .actual_1{
    width: 50%;
    height: fit-content;
    border: 2px solid rgba(207, 31, 33, 0.3);
    margin-left: 10px;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
   }
   .description{
    width:70%;
    position: absolute;
    top: 250px;
   }

    }
    @media(max-width:1100px) and (min-width:800px) {
        .title{
        width: 50%;
        margin: auto;
        height: fit-content;
    }
    .parent{
        position: relative;
        height: fit-content;
        padding-bottom: 20px;
    }
    .comment_1{
    position: absolute;
    top: 330px;
   }
    .actual{
     display: flex;
    flex-direction:column;
    width: 90%;
    margin: auto;
    margin-top: 50px;  
    text-align: left;
    }
    #division{
        position: absolute;
        top: 15%;
        left: 55%;
    }
    .actual_1{
    width: 45%;
    height: fit-content;
    border: 2px solid rgba(207, 31, 33, 0.3);
    margin-left: 10px;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
   }
   .description{
    width:70%;
    position: absolute;
    top: 250px;
   }
    }
   
</style>