<template>
<h1>Jobs List</h1>
<div>
    <p v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'jobDetails', params: { id: job.id } }">
            <h2>{{ job.title }}</h2>
        </router-link>
    </p>
</div>
  
</template>

<script>
export default {
    data(){
        return{
            jobs: [
                { title: 'Developer', id: 1 },
                { title: 'Designer', id: 2 },
                { title: 'Manager', id: 3 }
            ]
        }
    }
}
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.job h2:hover {
  background: #ddd;
}

.job a {
  text-decoration: none;
}
</style>
