<template>
  <div class="parent">
    <div class="design-left">
        <div class="cover">
                <div class="loder">
                    <LoaderAnimationComponent />
                </div>
                <h2><span>CERTIFICATS</span> <span>GTHCONSULT</span></h2>
                <P>Nos 5 métiers complémentaires pour conjuguer sécurité et performance à toutes les étapes de vos projets.</P>
        </div>
    </div>
    <div class="design-right">
        <div class="field-certification" v-for="item in certificates" :key="item.id">
            <div class="left">
                <img :src="item.src" alt="iso 9001">
            </div>
            <div class="right">
                <h2>
                    <a href="">{{ item.title }}</a>
                </h2>
                <p>{{ item.description }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import LoaderAnimationComponent from "@/components/animations/LoaderAnimationComponent.vue"
export default {
    name : "CertificatsHome",
    data() {
        return {
            certificates: [
                {
                id: 1,
                src: require("@/assets/iso-9000.png"),
                title: "Janvier 2022",
                description:
                    "Apave est un groupe international de plus de 150 ans spécialisé dans la maîtrise des risques.",
                },
                {
                id: 2,
                src: require("@/assets/briefcase.png"),
                title: "Avril 2022",
                description:
                    "Apave est un groupe international de plus de 150 ans spécialisé dans la maîtrise des risques.",
                },
                {
                id: 3,
                src: require("@/assets/afnor.jpg"),
                title: "Mai 2022",
                description:
                    "Apave est un groupe international de plus de 150 ans spécialisé dans la maîtrise des risques.",
                },
                {
                id: 4,
                src: require("@/assets/iso-afnor.png"),
                title: "September 2022",
                description:
                    "Apave est un groupe international de plus de 150 ans spécialisé dans la maîtrise des risques.",
                }
            ]
        }
    },
    components : {
        LoaderAnimationComponent
    }

}
</script>

<style scoped>
.parent {
    height: 100vh;
    width: 100%;
    background-color: #f0efee;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
}
.parent > .design-left{
    height: 100%;
    width: 60%;
    position: relative;
    background-image: url("@/assets/7.a4904722.jpg");
    padding: 0;
    margin: 0;

}
.parent > .design-left > .cover {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgb(17 14 217 / 37%);
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;   
    justify-content: center;
    align-items: center;
}
.parent > .design-left > .cover > h2 {
    color: white;
    max-width: 80%;
    font-size: 40px;
    font-weight: bold;
    text-shadow: 2px 4px 4px rgb(0 47 179 / 0%);
}
.parent > .design-left > .cover > h2 > span:nth-child(1) {
    padding: 4px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
}
.parent > .design-left > .cover > h2 > span:nth-child(2) {
    padding: 4px;
    border-right: 2px solid white;
    border-top: 2px solid white;
}
.parent > .design-left > .cover > p {
    margin-top: 20px;
    color: white;
    line-height: 30px;
    max-width: 80%;
    font-size: 25px;
    text-shadow: 2px 4px 4px rgb(0 47 179 / 0%);
}

.parent > .design-right {
    height: 100%;
    width: 40%;
    background: #f4f4f4;
    padding: 2% 5%;
    align-items: flex-start;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
}
.parent > .design-right > .field-certification {
    height: auto;
    width: 100%;
    background: #f4f4f4;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
}
.parent > .design-right > .field-certification > .left {
    height: auto;
    width: 25%;
    padding: 5px;
}
.parent > .design-right > .field-certification > .right {
    height: auto;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.parent > .design-right > .field-certification > .right > h2 {
    font-weight: 500;
    color: #4a4b9f;
    font-size: 20px;
}
.parent > .design-right > .field-certification > .right > p {
    font-size: 12px;
    text-align: justify;

}


</style>