import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faArrowRight, faEnvelope, faKey, faEye, faUser, faAnglesLeft, faAnglesRight, faChessRook , faChessKnight, faChess, faGlobe, faBrain, faChessBoard, faRightFromBracket, faDownload, faPlus ,faLocationDot ,faMobileScreenButton} from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faArrowRight, faEnvelope, faKey, faEye, faUser, faAnglesLeft, faAnglesRight ,faChessRook , faChessKnight,faChess,faGlobe,faBrain,faChessBoard,faRightFromBracket , faDownload, faPlus ,faLocationDot , faMobileScreenButton);

// import Style Géneral
import "./assets/style.css"

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
