import { createRouter, createWebHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ErrorView from '../views/ErrorView.vue'
import CarrieresView from '../views/CarrieresView.vue'
import EspaceClientView from '../views/EspaceClientView'
import DashboardView from '../views/DashboardView'
import CatalogueView from '../views/CatalogueView'
import CrvView from '../views/metiers/CrvView'
import ErtView from '../views/metiers/ErtView'
import FtView from '../views/metiers/FtView'
import AatView from '../views/metiers/AatView'
import EView from '../views/metiers/EView'
import ActualitesView from '../views/ActualitesView'
import SpontaneCandidature from '../views/SpontaneCandidature'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView
  },
  {
    path: '/carrieres',
    name: 'carrieres',
    component: CarrieresView
  },
  {
    path: '/espace-client',
    name: 'espace-client',
    component: EspaceClientView
  },
  {
    path: '/catalogue',
    name: 'catalogue',
    component: CatalogueView
  },
  {
    path: '/controle-reglementaire-et-volontaire',
    name: '/controle-reglementaire-et-volontaire',
    component: CrvView
  },
  {
    path: '/evaluation-des-risques-au-travail',
    name: '/evaluation-des-risques-au-travail',
    component: ErtView
  },
  {
    path: '/environnement',
    name: '/environnement',
    component: EView
  },
  {
    path: '/formations-techniques',
    name: '/formations-techniques',
    component: FtView
  },
  {
    path: '/audits-et-assistance-techniques',
    name: '/audits-et-assistance-techniques',
    component: AatView
  },
  {
    path: '/actualites',
    name: '/actualites',
    component: ActualitesView
  },
  {
    path: '/dashboard',
    name: '/dashboard',
    component: DashboardView
  },
  {
    path: '/candidature-spontanee',
    name: '/candidature-spontanee',
    component: SpontaneCandidature
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
