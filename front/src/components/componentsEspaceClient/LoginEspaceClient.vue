<template>
    <div class="form-container">
        <div class="form login-form">
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="form-close" @click="pageHome()"/>

                <img src="../../assets/logogth.png" alt="logo gthconsult">

                <h2>AUTHENTIFICATION</h2>

                <div class="message_client">
                    <span>Bienvenue dans votre espace sécurisé GTHCONSULT ON LINE. Pour accéder à votre compte, merci de vous identifier.</span>
                </div>

                <div class="input-box">
                    <input type="text" v-model="email" placeholder="Saisissez votre Email" required>
                    <font-awesome-icon icon="fa-solid fa-envelope" class="form-envelope" /> 
                </div>

                <div class="input-box">
                    <input type="password" v-model="password" placeholder="Saisissez votre mote de passe" required>
                    <font-awesome-icon icon="fa-solid fa-key" class="form-key" />
                    <font-awesome-icon icon="fa-solid fa-eye" class="form-eye" />
                </div>

                <div class="option_field">
                        <input type="checkbox" id="check">
                        <span>Se souvenir de moi</span>
                </div>

                <div class="option_field">
                        <input type="checkbox" id="check">
                        <span>Vous acceptez notre politique sur les conditions générales et la confidentialité</span>
                </div>

                <button class="button" @click="login()">Connexion</button>

                <div class="message_client">
                    <span>Pour obtenir l’accès à notre plate-forme ou mot de passe oublié, veuillez nous contacter à l’adresse Email : direction@gthconsult.ma</span>
                </div>

        </div>
    </div>
</template>

<script>
import Interlocuteur from "@/Interlocuteur"
export default {
    name: 'LoginEspaceClient',
    data() {
        return {
            email : null,
            password : null
        }
    },
    methods : {

        pageHome() {
            return this.$router.push("/");
        },

        login() {
            Interlocuteur.Login(this.email, this.password,)
            .then((result) => {
                console.log(result.data.accesToken)
                console.log(result.data.accesRefrechToken)
                if(result.data.accesToken != null) {
                    if(result.data.flag == true) {
                       return this.$router.push("/dashboard");     
                    }
                }
            })
            .catch((error) => {
                console.log(error)
            });
        }


    }
}
</script>

<style>

.form-container {
    position: absolute;
    background-color: #fafafa;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px;
    border-radius: 12px;
    box-shadow: rgb(0, 0, 0, 0.1);
    max-width: 320px;
    width: 100%;
}

.form-close {
    position: absolute;
    top: 10px;
    right : 20px;
    color: #0b0217;
    cursor: pointer;
    opacity: 0.5;
}

.form-close:hover {
    opacity: 0.9;
}

.form-envelope, .form-key, .form-eye  {
    opacity: 0.5;
}

.form-envelope:hover, .form-key:hover, .form-eye:hover {
    opacity: 0.9;
}

.form-container img {
    width: 50%;
}

.form-container h2 {
    text-align: center;
    font-size: 22px;
    color: #0b0217;
}

.input-box {
    position: relative;
    margin-top: 30px;
    height: 40px;
    width: 100%;
}

.input-box input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #aaaaaa;
    padding: 0;
    padding-left: 30PX;
    transition: all 0.2s ease;
    color: #7d2ae8;
}

.input-box input:focus {
    border-color: red;
}

.input-box .form-envelope {
    position: absolute;
    top: 50%;
    left: 1%;
    transform: translateY(-50%);
    color: red;
}

.input-box .form-key {
    position: absolute;
    top: 50%;
    left: 1%;
    transform: translateY(-50%);
    color: red;

}

.input-box .form-eye {
    position: absolute;
    top: 50%;
    left: 101%;
    transform: translateY(-50%);
    cursor: pointer;
}

.option_field {
    margin-top: 15px;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
}

.option_field > input {
    display: block;
    margin-top: 2px;
    margin-right: 2px;
    width: auto;
    height: auto;
}

.option_field span {
    font-size: 12px;
    color: #6f657a;
}

.form-container button {
    background-color: #7d2ae8;
    margin-top: 30px;
    width: 100%;
    padding: 10px 0px;
    border-radius: 10px;
    color: #fafafa;
} 

.form-container button:hover {
    background-color: transparent;
    margin-top: 30px;
    width: 100%;
    font-weight: bold;
    padding: 10px 0px;
    border-radius: 10px;
    color: #7d2ae8;
    border: 2px solid #7d2ae8;
    transition: 0.3s all ease;
} 

.form-container h2 {
    color: #ff00009e;
    font-weight: bold;
} 
.form-container .user {
    color: #ff00009e;
    font-size: 40px;
} 

.message_client {
    margin-top: 15px;
    width: 100%;
}

.message_client > span {
    font-size: 12px;
}

</style>