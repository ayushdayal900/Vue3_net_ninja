<template>

  <div v-if="job">
    <h1>Job title is : {{ job.title }}</h1>
    <h1>Job id is: {{ id }}</h1>
  </div>
  <div v-else>
    <h1>Loading...</h1>
  </div>
</template>

<script>
export default {
    props: ['id'],
    mounted(){
        fetch(`http://localhost:3000/jobs/${this.id}`)
        .then((res) => res.json())
        .then((data) => {console.log(data);})
        .catch((err) => console.log(err));
    }
}
</script>

<style>

</style>