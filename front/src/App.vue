<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    
  </head>

  <div role="navigation">
      <div class="header">

        <div class="header-logo">
          <a href=""><img src="./assets/logogth.8f1f3863.png"/></a>
        </div>
       
        <div class="text-center">
          <nav class="top-bar-wrap">
                
            <ul class="top-bar">
              
              <li class="nav-item" id="carrier">
                <a href="#" class="nav-link" @click="carrieresPage()"><span class="inner-link" ><i class="fa fa-briefcase" id="briefcase"></i>Carriere</span></a>
              </li>
              <li class="nav-item" id="Client-space">
                <a href="#" class="nav-link" @click="loginPage()"><span class="inner-link" ><i class="fa fa-user" id="user"></i>Espace client</span></a>
              </li>
              <li class="nav-item" id="catalogue">
                <a href="#" class="nav-link" @click="cataloguePage()" ><span class="inner-link"><i class="fa fa-handshake" id="handsahke"></i>Catalogue</span></a>
              </li>
            </ul>
          </nav>
          <nav class="main-nav-wrap">
            <label for="check" class="bar">
              <span class="fa fa-bars" id="icon"></span>
            </label>
            <input type="checkbox" id="check"/>
            <ul class="main-nav">
              <li class="nav-item">
                <a href="#propos" class="nav-link"><span class="inner-link">À Propos</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#metiers" class="nav-link"><span class="inner-link">Nos métiers</span></a>
              </li>
              <li class="nav-item">
                <a href="#moyens" class="nav-link"><span class="inner-link">Nos moyens</span></a>
              </li>
              <li class="nav-item">
                <a href="#certificats" class="nav-link"><span class="inner-link">Certificats</span></a>
              </li>
              <li class="nav-item">
                <a href="#agrements" class="nav-link"><span class="inner-link">Agréments</span></a>
              </li>
              <li class="nav-item" id="contact">
                <a href="#contacter" class="nav-link"><span class="inner-link">Nous contacter</span></a>
              </li>
            
            </ul>
           
          </nav>
        </div>
      </div>
    </div>


    <router-view/>

    
<footer class="footer_info">
<div class="map">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5779.463841041547!2d-7.370628643336544!3d33.69782057769933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b73d256f309f%3A0x3e969925cc12ea26!2sGTHCONSULT!5e0!3m2!1sfr!2sma!4v1684484901048!5m2!1sfr!2sma" 
   height="350"  
  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<div class="question">
  <h3 class="hours">24/7</h3>
  <ul>
    <li>Avez-vous des questions?</li>
    <li class="phone_number"><i class="fa fa-phone" id="phone"></i> <b>+212 5 23 27 27 74</b></li>
  </ul>
</div>
<div class="footer_top">
  <ul class="about">
    <li class="footer_list">
    <h5 class="title">A propos</h5>
    <p>GTHCONSULT est un bureau de contrôle agrée par l'etat créé par deux ingénieurs pluridisciplinaires. 
      Sa mission est d'accompagner les chefs d'établissements et les exploitants pour répondre à leurs obligations
       réglementaires ou volantaires en matière de contôles réglementaires des installationns techniques,
        gestion des risques professionnels,
        protectiion des personnes, des biens et de l'environnement.</p>
    </li>
    <li class="footer_list">
      <h5 class="title">Contactez-Nous</h5>
      <ul class="contact">
        <li><i class="fa fa-building"></i>   Bd MOHAMMED VI,Imm FB08,3ème étage,<p class="text">n°9,Mohammédia 28820</p></li>
        <li><i class="fa fa-phone" id="phone"></i>  <b>+212 5 23 27 27 74</b>  </li>
        <li><i class="fa fa-phone"></i>  <b>+212 5 23 27 29 79</b></li>
        <li><i class="fa fa-clock-o"></i>  Matin : 8h30 à 18h30 Lundi au Vendredi</li>
      </ul>
    </li>
    <li class="footer_list">
      <h5 class="title">NEWSLETTER</h5>
      <p>Entrez votre email pour recevoir<br> nos nouvelles</p>
      <input type="email" class="email" placeholder="Entrez votre email" style="text-align: center"/>
      <button class="email_btn" >S'ABONNER</button> 
    </li>
  </ul>
</div>
<div class="footer_bottom">
   <ul class="footer_rights">
    <li><a href="#"><img src="./assets/logo-footer.e772d696.png" width="140px" height="60px"></a></li>
    <li>
      <ol class="copy_right">
        <li>© 2023 Groupe Qualiconsult </li>
        <li> <a href="">   Mentions légales</a></li>
        <li><a href="">  Politique de confidentialité</a></li>
        <li><a href="">  Politique Cookies</a></li>
      </ol>
  </li>
   </ul> 
   <ul class="footer_media">
    <li>
      <ol class="social_media">
        <li><a href="#" ><i class="fa fa-twitter" id="twitter"></i>  </a></li>
        <li><a href="#" ><i class="fa fa-linkedin" id="linkedin"></i> </a></li>
      </ol>
    </li> 
  </ul>
</div>
</footer>

  
</template>

<script>


export default {
  name : "App",
  data() {
    return {
        flag : "achraf",
    }
  },
  components : {
  },
  methods  : {

    cataloguePage() {
      this.$router.push({ path: '/catalogue' })
    },

    loginPage() {
      this.$router.push({ path: '/espace-client' })
    },
    
    carrieresPage() {
      this.$router.push({ path: '/carrieres' })
    }
  }

  // setup() {
  //   console.log(`the component is now setup.`)
  //   // console.log(this.flag)
  // },

  // beforeCreate() {
  //   console.log(this.$router.currentRoute.value.path);
  //   // console.log(this.flag)
  // },

  // created() {
  //   console.log(`the component is now created.`)
  //   // console.log(this.$router.history)
  // },

  // mounted() {
  //   console.log(`the component is now mounted.`)
  //   // console.log(this.flag)

  // },



}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
      margin:0; padding: 0;
      box-sizing: border-box;
      transition: all .2s linear;
      font-family: Arial, Helvetica, sans-serif;
      text-decoration: none;
      list-style: none;
   }
.top-bar {
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-items: center;
    }
    
   
    .main-nav{
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-items: center;
      height: 55px;
      
    } 
   
     nav.top-bar-wrap {
      background:rgb(36, 48, 100);
      width: 100%;
    } 
    
    .top-bar-wrap {
      height: 35px;
      line-height: 40px;
    }
    
    .top-bar-wrap ul li{
      width:16%;
    }
     nav.main-nav-wrap {
      background: #ffff;
      font-size: 16px;
    }
    
    .main-nav li a:hover{
      height: 55px;
      border-bottom:4px solid rgba(0, 0, 0, 0.5) ;
      padding-bottom: 13px;
      width: max-content;
      font-size: 20px;
    }
   
  
    .top-bar a.nav-link {
      color: #fff;
      text-transform: uppercase;
      font-family: 'Rubik',sans-serif;
      font-weight: bold;
      text-decoration: none;
      font-size: 14px;
      
    } 
    .main-nav a.nav-link{
      color: #222f3b;
      padding-right: 10px;
      margin: 0px;
      font-size: 18px;
      font-weight: bold;
    }
   
    
    
    #user,#briefcase,#handsahke{
      padding-right: 10px;
    }
    
    .top-bar-wrap li {
      height: 35px;
      margin: 0px;
      position: relative;
      width: 16%;
    }
    .top-bar-wrap a:hover {
     color: #CBD4E6;
     font-size: 17px;
    }
    .main-nav-wrap a {
      padding-right: 15px;  
      padding-left: 15px;
    }
    #carrier {
      border-right: 1px solid #fff;
    }
    
    #Client-space,#carrier{
       height: 35px;
      background-color:rgb(207,31,33);
       width: 16%;  
    }
    
    #Client-space a:hover,#carrier a:hover{
      color: #CBD4E6;
    }
    
    .header-logo {
      padding: 10px;
      position: absolute;
      top: 0;
      height: 90px;
      width: 220px; 
      left: -30px;
      padding-left: 40px;
      background: #ffff;
      border-radius: 0px 50px 50px 0px; 
    }
    .header-logo img{
      width:150px;
      height: 70px;
    }
    .header{
      height: 90px;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    }
   
    .main-nav-wrap .bar{
             display: none; 
             position: relative;
             margin: auto;
            }
    .main-nav-wrap .bar span{
              position: absolute;
              font-size: 28px;
            }
    input[type=checkbox]{
              display: none;
               
              } 


              .map{
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
}
.map iframe{
  border: none ;
  border-radius: 10px 10px;
  width:100%;
  padding-left: 10px;
  padding-right: 10px;
}
 .question{
  width: 85%;
  border: 1px solid rgb(36, 48, 100);
  margin-left:7.5% ;
  border-radius: 5px;
  height: 95px;
  background-color: rgb(36, 48, 100);
  position: relative;
}
.question ul{
  display:flex;
  flex-direction:row ;
  justify-content: space-between;
}
.question li{
   padding: 30px 70px;
   color: #fff;
   font-size: 25px;
   font-weight:bold;
}
.footer_top .about{
  display:flex;
  flex-direction:row ;
  margin-left:60px ;
  width: 90%;
  margin-bottom:20px;
}
.hours{
  position: absolute;
  bottom: 1px;
  left:87%;
  color: #fff;
  font-size: 70px;
  opacity:0.1;
}
 .text{
  padding-left: 20px;
}
.footer_list{
 width: 35%;
 text-align:start;
 padding: 10px;
 padding-left: 60px;
 margin-top: 50px;
 font-size: 15px;
}

.title{
  font-size: 20px;
  font-weight: bold;
  color:rgb(36, 48, 100) ;
}
.contact li{
 padding-top: 5px;
}
.email_btn{
  color: #fff;
  background-color: rgb(36, 48, 100);
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 12px;
  width: 78%;
  height: 40px;
  border: 1px solid rgb(36, 48, 100);
  border-radius: 5px;
}
.email{
  margin-bottom: 10px;
  margin-top: 12px;
  width: 78%;
  height: 40px;
  border: 1px solid rgb(36, 48, 100);
  border-radius: 5px;
}
input ,button{
  display: block;
  padding-top: 10px;
}
button:hover{
  color: rgba(255,255, 255, 0.4)
}
.footer_bottom{
  width: 100%;
  background-color:rgb(36, 48, 100) ;
  height: 170px;
}
.footer_bottom{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
 
}
.copy_right{
  display: flex;
  flex-direction: row;
  padding: 10px;
  padding-top: 40px;
  padding-left: 40px;
}

.copy_right a{
  padding-left: 10px;
  border-left: 1px solid #fff;
  color: #fff;
  font-size: 11px;
}
.copy_right li{
  padding-right: 10px;
  color: #fff;
  font-size: 11px;
}
.social_media{
  font-size: 30px;
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 40%;
}
.social_media li{
  padding: 40px;  
}
.social_media a{
  color:#fff;
}
.footer_bottom img{
  margin-top: 30px;
  height: 70px;
  margin-left: 40px;
}
#twitter:hover{
  color: #00acee;
}
#linkedin:hover{
  color: #0072b1 ;
}








/*responsive Media query */

@media(max-width:600px) and (min-width:0px){
  .top-bar {  
   width: 100%;
   margin-left: 0%;
  
  }
  .top-bar a.nav-link {
      
      font-size: 12px;
      margin-left: 0%;
      
    } 
    #catalogue{
      width: 80%;   
      padding-left: 10px;
    }
    #Client-space,#carrier{
       height: 35px;
      background-color:rgb(207,31,33);
       width: 80%;  
       padding-left: 10px;
    }
  #icon,#icon1{ 
    padding: 15px 30px;
  }
  .header-logo,.header-logo img{
    float: left;
    top: 35px;
  }
  .header-logo{
    height: 55px;
    width: 200px;
  }
  .header-logo img{
    height: 45px;
    width: 100px;
    padding-bottom: 5px;
  }
  .main-nav-wrap{
    display: block;
    z-index: 6;
    padding-bottom: 12px;
    
  }
   .main-nav{
    position: absolute;
    top: 90px;
    left: -100%;
    background-color:rgb(238, 242, 247,0.3);
    margin-top: 0;
    width: 100%;
    display: flex;
    text-align: center;
    transition: all .0s;
    flex-direction: column;
    padding-bottom:50px ;
    padding-top: 50px;
 }
  .main-nav li{
   transition: all .0s;
    padding: 10px 12px 10px 15px;
    
    border-bottom:1px solid #73777a;
    width: 75%;
  }
  .main-nav li:hover{
    border-bottom: none;
    height: fit-content;
  }
  #contact{
    border-bottom: none;
  }
  .main-nav a:hover{
    color: rgb(207,31,33,0.5);
  }
  .main-nav-wrap .bar{
    display: block;
    position: absolute;
    top: 35px;
    right: 90px;
    cursor: pointer;
  }
  
  
  #check:checked ~ div .main-nav {
    left: 0;
    height: max-content;
  }

  .map iframe{
    width:98%;
    padding-left: 5px;
    padding-right: 5px;
  }
  .question{
   width: 90%;
   height: 160px;
   margin: 5%;
  }
  .question ul{
   display: flex;
   flex-direction: column;
   padding: 0%;
   padding-top: 10%;
  }
  .question b{
    font-size: 14px;
  }
  .question li{
   font-size: 16px;
   padding:10px 50px;
   text-align: center;
  }
  .hours{
    position: absolute;
    bottom: 1px;
    left:30%;
    color: #fff;
    font-size: 70px;
    opacity:0.1;
  }
  .footer_top .about{
   display: flex;
   flex-direction: column;
   margin-left: -30px;
   
  }
  .footer_top .about li{
   margin-top: 0%;
   width: 90%;
  }
  input, button{
    width: 100%;
  }
  .footer_bottom{
    display: flex;
    flex-direction: column;
    width:100%;
    height:370px;
    position: relative;
  }
  .footer_bottom .footer_rights{
    position: absolute;
    top:90px;
    width: 90%;
  }
  
  .copy_right{
    display: flex;
    flex-direction: column;
    text-align: center;
   margin-left: 7%;
  }
  .copy_right li,.copy_right a{
    font-size: 16px;
    border: none;
  }
  .footer_bottom img{
    margin-left: 36%;
  }
  .social_media{
    position: absolute;
    left: 37%;
  }
  .social_media li{
    padding-left: 0%;
  }  
}

@media(max-width:900px){
  footer{
   margin-top:10px;
  }
  .map iframe{
    width:98%;
    padding-left: 20px;
    padding-right: 5px;
  }
  .question{
   width: 90%;
   height: 160px;
   margin: 5%;
  }
  .question ul{
   display: flex;
   flex-direction: column;
   padding: 0%;
   padding-top: 5%;
  }
  .phone_number b{
    font-size: 30px;
  }
  .question li{
   font-size: 20px;
   padding:10px 50px;
   text-align: center;
  }
  .hours{
    position: absolute;
    bottom: 1px;
    left:30%;
    color: #fff;
    font-size: 70px;
    opacity:0.1;
  }
  .footer_top .about{
   display: flex;
   flex-direction: column;
   margin-left: -30px;
   
  }
  .footer_top .about li{
   margin-top: 0%;
   width: 90%;
  }
  input, button{
    width: 100%;
  }
  .footer_bottom{
    display: flex;
    flex-direction: column;
    width:100%;
    height:370px;
    position: relative;
  }
  .footer_bottom .footer_rights{
    position: absolute;
    top:90px;
    width: 90%;
  }
  
  .copy_right{
    display: flex;
    flex-direction: column;
    text-align: center;
   margin-left: 10%;
  }
  .copy_right li,.copy_right a{
    font-size: 16px;
    border: none;
  }
  .footer_bottom img{
    margin-left: 45%;
  }
  .social_media{
    position: absolute;
    left: 45%;
  }
  .social_media li{
    padding-left: 0%;
  } 
}

@media(max-width:1100px) {
  footer{
    margin-top: 30px;
  }
  .question{
   width: 90%;
   height: 160px;
   margin: 5%;
  }
  .question ul{
   display: flex;
   flex-direction: column;
   padding: 0%;
   padding-top: 25px;
  }
  .phone_number b{
    font-size: 30px;
  }
  .question li{
   font-size: 20px;
   padding:10px 50px;
   text-align: center;
  }
  .hours{
    position: absolute;
    bottom: 1px;
    left:30%;
    color: #fff;
    font-size: 70px;
    opacity:0.1;
  }
  .footer_top .about{
   display: flex;
   flex-direction: column;
   margin-left: -30px;
   
  }
  .footer_top .about li{
   margin-top: 0%;
   width: 90%;
  }
  input, button{
    width: 100%;
  }
  .footer_bottom{
    display: flex;
    flex-direction: column;
    width:100%;
    height:370px;
    position: relative;
  }
  .footer_bottom .footer_rights{
    position: absolute;
    top:90px;
    width: 90%;
  }
  
  .copy_right{
    display: flex;
    flex-direction: column;
    text-align: center;
   margin-left: 10%;
  }
  .copy_right li,.copy_right a{
    font-size: 16px;
    border: none;
  }
  .footer_bottom img{
    margin-left: 45%;
  }
  .social_media{
    position: absolute;
    left: 45%;
  }
  .social_media li{
    padding-left: 0%;
  } 
}  

  @media(max-width:1100px) and (min-width:600px){ 
  nav.main-nav-wrap ul {
        padding-right: 0px;
      }
      .top-bar a.nav-link {
      
      font-size: 14px;
      margin-right: 30px;
      
    } 
    #catalogue{
      width: 80%;   
      
    }
    #Client-space,#carrier{
       height: 35px;
      background-color:rgb(207,31,33);
       width: 80%;  
      
    }   
      
     
      
      #icon,#icon1{
        
        padding: 15px 30px;
      }
      .header-logo,.header-logo img{
        float: left;
        top: 35px;
      }
      .header-logo{
        height: 55px;
        width: 200px;
      }
      .header-logo img{
        height: 45px;
        width: 100px;
        padding-bottom: 5px;
      }
      .main-nav-wrap{
        display: block;
        z-index: 6;
        padding-bottom: 12px;
        
      }
       .main-nav{
        position: absolute;
        top: 90px;
        left: -100%;
        background-color:rgb(238, 242, 247,0.3);
        margin-top: 0;
        width: 100%;
        display: flex;
        text-align: center;
        transition: all .0s;
        flex-direction: column;
        padding-bottom:50px ;
        padding-top: 50px;
     }
      .main-nav li{
       transition: all .0s;
        padding: 10px 12px 10px 15px;
        border-bottom:1px solid #73777a;
        width: 75%;
      }
      .main-nav li:hover{
        border-bottom: none;
        height: fit-content;
      }
      .main-nav-wrap .bar{
        display: block;
        position: absolute;
        top: 35px;
        right: 90px;
        cursor: pointer;
      }
      
      
      #check:checked ~ div .main-nav {
       left: 0;
        height: max-content;
      }
      
    
}
  
</style>
