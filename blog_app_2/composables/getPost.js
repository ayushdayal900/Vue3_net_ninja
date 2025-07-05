import {ref} from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try{
        const data = await fetch('http://localhost:3000/posts/'+id)
        if(!data.ok){
          throw new Error('Error loading post');
        }
        post.value = await data.json();
        console.log(post.value);
      }
      catch(err){
        error.value = err.message;
        console.error(error.value);
      }
    }
    return {  post,  error,  load  }
}

export default getPost