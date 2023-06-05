<template>
  <div class="parent">
    <div class="left">

        <div class="first">
            <img class="agrement-iccon" src="../../assets/approval.png" alt="" srcset="">
            <h3><span>CONTRÔLE</span> <span>DES INSTALLATION ÉLECTRIQUE</span></h3>
            <div class="ministere">
                <h4>GTHCONSULT est agréé par le ministère de l'emploi</h4>
            </div>
            <div class="abbreviation">
                <h4>MIEPEEC</h4>
            </div>
            <img class="check-iccon" src="../../assets/checked.png" alt="">
        </div>

    </div>

    <div class="center">

        <div class="second">
            <img class="agrement-iccon" src="../../assets/approval.png" alt="" srcset="">
            <h3><span>CONTRÔLE</span> <span>DES APPAREILS ET ACCESSOIRES DE LEVAGE</span></h3>
            <div class="ministere">
                <h4>GTHCONSULT est agréé par le ministère de l'emploi</h4>
            </div>
            <div class="abbreviation">
                <h4>MIEPEEC</h4>
            </div>
            <img class="check-iccon" src="../../assets/checked.png" alt="">
        </div>

        <div class="third">
            <img class="agrement-iccon" src="../../assets/approval.png" alt="" srcset="">
            <h3><span>CONTRÔLE</span> <span>DES ASCENSEURS ET MONTE-CHARGESS</span></h3>
            <div class="ministere">
                <h4>GTHCONSULT est agréé par le ministère de l'equipement et transport</h4>
            </div>
            <div class="abbreviation">
                <h4>MTPNET</h4>
            </div>
            <img class="check-iccon" src="../../assets/checked.png" alt="">
        </div>

    </div>
    <div class="rigth">
        
        <div class="fourth">
            <img class="agrement-iccon" src="../../assets/approval.png" alt="" srcset="">
            <h3><span>VÉRIFICATION</span> <span>GÉNÉRALE PÉRIODIQUE DES APPAREILS OU MACHINE</span></h3>
            <div class="ministere">
                <h4>GTHCONSULT est agréé par le ministère de l'emploi</h4>
            </div>
            <div class="abbreviation">
                <h4>MIEPEEC</h4>
            </div>
            <img class="check-iccon" src="../../assets/checked.png" alt="">
        </div>

        <div class="fifth">
            <img class="agrement-iccon" src="../../assets/approval.png" alt="" srcset="">
            <h3><span>CONTRÔLE</span> <span>DES APPAREIL À PRESSION</span></h3>
            <div class="ministere">
                <h4>GTHCONSULT est déposé le dossier d'agrement à le ministère de l'energie et des mines</h4>
            </div>
            <div class="abbreviation">
                <h4>MEM</h4>
            </div>
            <img class="check-iccon" src="../../assets/sand-clock.png" alt="">
        </div>

    </div>
  </div>
</template>

<script>
export default {
    name : "AgrementsHome",
    date() {
        return {
        }
    }

}
</script>

<style scoped>
.parent{
    margin-left: 0;
    margin-right: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 200vh;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 5%;
}
.parent > .left {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 33%;
    border-right: 1px solid whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.parent > .center {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.parent > .rigth {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-left: 1px solid whitesmoke;

}


.first, .second, .third, .fourth, .fifth {
    width: 100%;
    padding: 5px;
    background-color: white;
    height: 400px;
    border-top: 5px solid #003478;
    border-bottom: 5px solid #003478;
    box-shadow: 14px -16px 15px -4px rgba(0,0,0,0.1);
    transition: 0.3s all ease;
}
.first:hover, .second:hover, .third:hover, .fourth:hover, .fifth:hover {
    border-bottom: 10px solid #003478;
    box-shadow: 26px -6px 29px -3px rgba(0,0,0,0.1);

}

.first {
    border-radius: 30px 0px 0px 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.second {
    border-radius: 30px 0px 30px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.third {
    border-radius: 0px 30px 0px 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.fourth {
    border-radius: 30px 30px 30px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.fifth {
    border-radius: 0px 30px 30px 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.first > img:nth-child(1), .second > img:nth-child(1), .third > img:nth-child(1), .fourth > img:nth-child(1), .fifth > img:nth-child(1)  {
    width: 90px;
}
.first > .check-iccon, .second > .check-iccon, .third > .check-iccon, .fourth > .check-iccon, .fifth > .check-iccon  {
    margin-top: 10px;
    width: 60px;
}

.first > h3, .second > h3, .third > h3, .fourth > h3, .fifth > h3  {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
}
.first > h3 > span:nth-child(1), .second > h3 > span:nth-child(1), .third > h3 > span:nth-child(1), .fourth > h3 > span:nth-child(1), .fifth > h3 > span:nth-child(1)  {
    color: #ac1010;
}

.first > .ministere, .second > .ministere, .third > .ministere, .fourth > .ministere, .fifth > .ministere  {
    width: 100%;
    background-color: #ac1010;
    margin-top: 20px;
    padding: 2px;
}


.first > .abbreviation, .second > .abbreviation, .third > .abbreviation, .fourth > .abbreviation, .fifth > .abbreviation  {
    width: 100%;
    background-color: #003478;
    margin-top: 20px;
    padding: 2px;
}

.first > div > h4, .second > div > h4, .third > div > h4, .fourth > div > h4, .fifth > div > h4 {
    color: aliceblue;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: bold;
}




</style>