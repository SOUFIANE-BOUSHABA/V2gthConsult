<template>
    <div class="about-page">
      <div class="timeline">
        <div class="timeline-item" v-for="year in years" :key="year">
          <div class="timeline-year">{{ year }}</div>
          <div class="timeline-content">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        years: [2019, 2020, 2021, 2022, 2023],
       
        }
      },
    };
   
    
  
  </script>
  
  <style scoped>
  .about-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  </style>
  