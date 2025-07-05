import {ref} from 'vue'

const getPosts = () =>{
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try{
        const data = await fetch('http://localhost:3000/posts')
        if(!data.ok){
          throw new Error('Error loading posts');
        }
        posts.value = await data.json();
        console.log(posts.value);
      }
      catch(err){
        error.value = err.message;
        console.error(error.value);
      }
    }
    return {  posts,  error,  load  }
}

export default getPosts