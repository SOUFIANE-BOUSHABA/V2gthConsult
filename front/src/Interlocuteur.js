import axios from "axios";

const VUE_APP_API_BASE_URL_DEV = "http://localhost:3000/api"


class Interlocuteur {

    static Login(email, password) {
        console.log(process.env.VUE_APP_URL)
        return new Promise((resolve, reject) => {
            axios.post(`${VUE_APP_API_BASE_URL_DEV}/interlocuteur/login`,
            {
                email : email,
                password : password
            },
            {
                headers: {
                     'Content-Type': 'application/json'
                 }
             })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });

        })
    }
}

export default Interlocuteur