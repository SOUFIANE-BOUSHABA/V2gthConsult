<template>
  <div class="espace-client">
    <div class="content">
      <LoginEspaceClientVue />
    </div>
  </div>
</template>
<script>

import LoginEspaceClientVue from '@/components/componentsEspaceClient/LoginEspaceClient.vue'

export default {
  name: "EspaceClientView",
  components : {
    LoginEspaceClientVue
  }

}
</script>

<style>
.espace-client {
  margin: 0;
  padding: 0;
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url("./../assets/login.jpg");
  background-size: cover;
  background-position: center;
}

.espace-client .content {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(71 50 245 / 38%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>