<template>
  <div class="home">
    <SliderHome />
    <MetiersHome />
    <ProposHome />
    <DescriptionHome />
    <DifferentHome />
    <CertificatsHome />
    <ItHome />
    <OurHome />
    <AgrementsHome />
    <ContactHome />
    <ActualitesHome />
  </div>
</template>

<script>
// @ is an alias to /src
import MetiersHome from '@/components/componentsHome/MetiersHome.vue'
import SliderHome from '@/components/componentsHome/SliderHome.vue'
import DescriptionHome from '@/components/componentsHome/DescriptionHome.vue'
import ProposHome from '@/components/componentsHome/ProposHome.vue'
import OurHome from '@/components/componentsHome/OurHome.vue'
import DifferentHome from '@/components/componentsHome/DifferentHome.vue'
import ActualitesHome from '@/components/componentsHome/ActualitesHome.vue'
import ContactHome from '@/components/componentsHome/ContactHome.vue'
import CertificatsHome from '@/components/componentsHome/CertificatsHome.vue'
import AgrementsHome from '@/components/componentsHome/AgrementsHome.vue'
import ItHome from '@/components/componentsHome/ItHome.vue'

export default {
  name: 'HomeView',
  components: {
    SliderHome,
    MetiersHome,
    DescriptionHome,
    ProposHome,
    OurHome,
    DifferentHome,
    ActualitesHome,
    ContactHome,
    CertificatsHome,
    AgrementsHome,
    ItHome
  }
}
</script>
