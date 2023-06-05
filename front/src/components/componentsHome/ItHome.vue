<template>
  <div class="parent">
        <div class="first">
            <div class="cover"></div>
        </div>
        <div class="second">
            <div class="cover">
                <h2><span>NOS SOLUTIONS</span> <span>NUMÉRIQUES</span></h2>
                <p>Une gamme de solutions numériques uniques pour nos partenaires</p>
                <div class="multi-cards">
                    <CardAnimationOne />
                    <CardAnimationTow />
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import CardAnimationOne from "@/components/animations/CardAnimationOne.vue"
import CardAnimationTow from "@/components/animations/CardAnimationTow.vue"
export default {
    name : "ItHome",
    data() {
        return {
        }
    },
    components : {
        CardAnimationOne,
        CardAnimationTow
    }
}
</script>

<style scoped>


.parent {
    margin-top: 30px;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100vh;
    width: 100%;
}


.first {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("@/assets/8767132.jpg");
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
}

.second {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("@/assets/phone.jpg");
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;

}
.first > .cover {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: rgb(17 14 217 / 37%);
}
.second > .cover {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: rgb(17 14 217 / 37%);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

}
.second > .cover > h2 {
    padding: 0;
    margin: 0;
    margin-top: 10px;
    color: white;
    max-width: 80%;
    font-size: 40px;
    font-weight: bold;
    text-shadow: 2px 4px 4px rgb(0 47 179 / 0%);
}
.second > .cover > h2 > span:nth-child(1) {
    padding: 4px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
}
.second > .cover > h2 > span:nth-child(2) {
    padding: 4px;
    border-right: 2px solid white;
    border-top: 2px solid white;
}
.second > .cover > p {
    margin-top: 20px;
    color: white;
    line-height: 30px;
    max-width: 80%;
    font-size: 25px;
    text-shadow: 2px 4px 4px rgb(0 47 179 / 0%);
}

.multi-cards {
    width: 100%;
    padding: 0;
    margin: 0;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}


</style>