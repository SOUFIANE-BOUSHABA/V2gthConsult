<template>
  <div class="parent">
    <ul>
      <li v-for="job in jobs" :key="job.id">
        <div class="jobs border-2 w-full grid p-4 mb-6 rounded-xl text-left  ">
          <div class="flex">
            <div class="img">
              <img src="@/assets/7.a4904722.jpg" class="w-12 h-12 rounded-xl mr-8" alt="Company Logo" />
            </div>
            <div class="grid">
              <div class="title text-sm font-bold text-3xl text-slate-900">
                <h3>{{ job.title }}</h3>
              </div>
              <div class="company flex gap-2 text-sm text-slate-500 truncate">
               <p>at</p>   <p>{{ job.companyName }}</p>
              </div>
            </div>
          </div>
          <div class="flex mt-4 justify-between text-xs items-center">
            <div class="flex gap-3">
              <div class="type bg-red-200 rounded-xl pl-2 pr-2">
                <p>{{ job.workType }}</p>
              </div>
              <div class="remote bg-green-200 rounded-xl pl-2 pr-2">
                <p>{{ job.remote}}</p>
              </div>
              <div class="salary bg-gray-200 rounded-xl pl-2 pr-2">
      
                <p>{{ job.salary }}</p>
              </div>
             </div>

            <div class="view mr-3  cursor-pointer font-bold">
              View details  <span class="flech">&#10230;</span> 
            </div>
          </div>
       
        </div>
       
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.  1',
          companyName: 'Company 1',
          companyPhoto: 'company1.png',
          workType: 'Full-time',
          remote: 'remote',
          salary: '$50,000'
        },
        {
          id: 2,
          title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.  2',
          companyName: 'Company 2',
          companyPhoto: 'company2.png',
          workType: 'Part-time',
          remote: 'remote-allowed',
          salary: '$40,000'
        },
        {
          id: 1,
          title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.  1',
          companyName: 'Company 1',
          companyPhoto: 'company1.png',
          workType: 'Full-time',
          remote: 'remote',
          salary: '$50,000'
        },
        {
          id: 2,
          title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.  2',
          companyName: 'Company 2',
          companyPhoto: 'company2.png',
          workType: 'Part-time',
          remote: 'remote-allowed',
          salary: '$40,000'
        },
        {
          id: 1,
          title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.  1',
          companyName: 'Company 1',
          companyPhoto: 'company1.png',
          workType: 'Full-time',
          remote: 'remote',
          salary: '$50,000'
        },
        {
          id: 2,
          title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.  2',
          companyName: 'Company 2',
          companyPhoto: 'company2.png',
          workType: 'Part-time',
          remote: 'remote-allowed',
          salary: '$40,000'
        },
        {
          id: 1,
          title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.  1',
          companyName: 'Company 1',
          companyPhoto: 'company1.png',
          workType: 'Full-time',
          remote: 'remote',
          salary: '$50,000'
        },
        {
          id: 2,
          title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.  2',
          companyName: 'Company 2',
          companyPhoto: 'company2.png',
          workType: 'Part-time',
          remote: 'remote-allowed',
          salary: '$40,000'
        },
        {
          id: 1,
          title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.  1',
          companyName: 'Company 1',
          companyPhoto: 'company1.png',
          workType: 'Full-time',
          remote: 'remote',
          salary: '$50,000'
        },
        {
          id: 2,
          title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.  2',
          companyName: 'Company 2',
          companyPhoto: 'company2.png',
          workType: 'Part-time',
          remote: 'remote-allowed',
          salary: '$40,000'
        },
        
      ]
    };
  }
};
</script>

<style  scoped>
.view{
  display: none;
}
.jobs:hover .view{
  display: block;
}
.jobs:hover{
  border: 2px solid red;
  border-left: 7px red solid;
}
@media screen  and (max-width:530px){
 
    .jobs{
    width: 85%;
    margin-left: 5%;
   }
   
   }
   @media screen  and (max-width:440px){
 
    h3{
      font-size: 12px;
    }
    p{
      font-size: 10px;
    }
   
   }
   @media screen  and (max-width:340px){
 
    h3{
      font-size: 10px;
      margin-left: 3px;
    }
    p{
      font-size: 8px;
    }
   
   }

</style>