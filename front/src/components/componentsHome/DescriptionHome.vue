<template>
<div  class="parent">
    <div class="direc_title">
             <h1 class="title_1">Direction</h1>
        </div>
    <div class="direction">
       
        <div class="text">
            <i class="fa fa-quote-left" aria-hidden="true" id="quote_left"></i> 
            <p>
            Les révolutions industrielles ont progressivement modifié le visage du monde économique
             et les modes de consommation. Apave a toujours accompagné ces mutations,
              en étant garante de la sécurité des biens, des hommes et de l’environnement.
               Plus que jamais, dans un monde qui se transforme et s’internationalise,
                innove et se digitalise, Apave poursuit sa mission de tiers de confiance auprès de ses clients, 
                pour leur permettre
             d’exercer leurs métiers et de les adapter en toute sécurité.
            </p>
            <i class="fa fa-quote-right" aria-hidden="true" id="quote_right"></i>
        </div>
        <div class="profile">
            <img src=""  id="img"/>
            <h1 class="name"> Nom complet</h1>
            <h3 class="work_station">DIRECTEUR GENERAL GTHCONSULT</h3>
        </div>  
    </div>  
    <ul class="statistic">
      <li>
        <div class="agence">
            <h2 class="number" >{{ counters[0] }}</h2>
            <h4 class="title">Agences en France</h4>
            <p>Equipés des dernières technologies</p>

        </div></li>
        <li>
        <div class="center_formation">
            <h2 class="number">{{ counters[1] }}</h2>
            <h4 class="title">Agences en France</h4>
            <p>En France et à l'international</p>
        </div>
      </li>
        <li>
        <div class="centre_essais">
            <h2 class="number" >{{ counters[2] }}</h2>
            <h4 class="title">Agences en France</h4>
            <p>Couvrant l'ensemble de nos métiers</p>
        </div>
      </li>
      </ul>
    <div class="info">
           <div class="pictures">
                    <img src="">
                    <img src="" >
            </div>
        <div class="opacity"></div>
        <p class="float_text">Pour toutes vos demandes <br><b>0 5 23 27 27 74</b><br> Pour toutes vos demandes specifiques Infrastructures et Constructions<br><b>0 5 23 27 29 79</b></p>
    </div>
</div>
</template>

<script>
      export default {
      name : "DescriptionHome",
      data(){
        return{
                  numbers: [102, 110, 108], 
                  counters: [], 
                  intervals: [] 
             }
             },
              mounted() {
                  this.counters = this.numbers.map(() => 0); 
  
                  
  
                  this.numbers.forEach((number, index) => {
                      const interval = setInterval(() => {
                          this.counters[index] ++ ;
  
                          if (this.counters[index] >= number) {
                              this.counters[index] = number; 
                          }
                      }, 40); 
  
                      this.intervals.push(interval); 
                  });
              }
  
  }
</script>

<style scoped>
  
    div.parent{
    height: 150vh;
    width: 100%;
    margin-bottom: 4px;
    }
    .direc_title{
    text-decoration-line: overline;
    text-decoration-color:rgb(207 , 31 ,33) ;
    font-size: 40px;
    font-weight: bold;
    }
    .direction{
    width: 100%;
    height: 300px;
    background-color: rgb(36, 48, 100);
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
   
}
    .text{
        width: 50%;
        padding-top: 20px;
        text-align: left;
        font-size: 14px;
    }
    #quote_left{
    font-size: 30px;
    padding-right: 100%;
    padding-bottom: 25px;
  }
    #quote_right{
      font-size: 50px;
      padding-left: 90%;
      padding-top: 30px;
  }
    
     .profile{
      padding-right: 10%;
     }
    .profile #img{
    border-radius: 20px;
    margin-top: -60px;
    width:190px;
    height:220px;
    }
    .profile .name{
    text-align: left;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    }
    .profile .work_station{
      text-align: left;
    }
    .statistic{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 250px;
    margin-bottom: 10px;
  } 
  .statistic p{
    font-size: 14px;
}
.statistic h2{
font-size: 40px;
color: rgb(207,31,33);
font-family: Arial,sans-serif;
padding-bottom: 10px;
}
.info{
width: 100%;
height: fit-content;
position: relative; 
text-align: center;   
margin-top: -10px;
}
.parent .pictures{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 330px;
}
.pictures img{
  width: 100%;
}
.float_text{
    position: absolute;
    bottom: 15%;
    color: #fff;
    font-size: 30px;
    left: 25%;
    width: 50%;
}
.float_text b{
    color: rgb(207,31,33);
}

.opacity{
    position: absolute;
    bottom: 0%;
    height: 330px;
    width: 100%;
    background-color:rgb(36, 48, 100) ;
    opacity: 0.5;
}




@media (max-width:600px) and (min-width:0px){
    div.parent{
        margin-bottom: -0px;
        height: fit-content;
    }
    .direction{
        display: flex;
        flex-direction: column-reverse;
        height: max-content;
    }
    .direc_title{
        padding-bottom: 50px;
    }
    .profile{
        padding-left: 40px;
    }
    .statistic{
        display: flex;
        flex-direction: column;
        text-align: center;
        height: fit-content;
    }
    .info{
        width:100%;
        position: relative;
    }
    .float_text{
        position: absolute;
        bottom: 10%;
        color: #fff;
        font-size: 30px;
        left: 0%;
        width: 100%;
    }

}


@media (max-width:784px) and (min-width:600px){
    div.parent{
        margin-bottom: -0px;
        height: fit-content;
    }
    .direction{
        display: flex;
        flex-direction: row;
        height: max-content;
    }
    .direc_title{
        padding-bottom: 50px;
    }
    .profile{
        padding-left: 40px;
    }
    .statistic{
        display: flex;
        flex-direction: column;
        text-align: center;
        height: fit-content;
    }
    .info{
        width:100%;
        position: relative;
    }
    .float_text{
        position: absolute;
        bottom: 10%;
        color: #fff;
        font-size: 30px;
        left: 0%;
        width: 100%;
    }

}
@media (max-width: 1365px) and (min-width:784px){
    div.parent{
        margin-bottom: 45px;
    }
}

</style>
