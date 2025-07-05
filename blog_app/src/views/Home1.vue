<template>
  <div class="home">
    <h1>{{ name1 }}</h1>
    <p ref="para">Age: {{ age1 }}</p>

    <input type="text" v-model="name1">
    <button @click="handleClick">Click me</button>
    <button @click="age1++" >Inc Age</button>

    <h2>Ninja 1</h2>
    <p>Name: {{ ninja.name }} & Age: {{ ninja.age }}</p>
    <button @click="updateNinja">Update Ninja</button>
    
    <h2>Ninja 2</h2>
    <p>Name: {{ ninja2.name }} & Age: {{ ninja2.age }} </p>
    <!-- <p>Name: {{ ninja2.name }} & Age: {{ ninja2.age }} & Name2: {{ name2 }}</p> -->
    <button @click="updateNinja2">Update Ninja</button>

  </div>
</template>

<script>
import { ref, reactive } from 'vue'



export default {
  name: 'Home',
  // setup will run before any life cycle hooks
  // composition API
  // setup is a function that returns an object
  // the object will be available in the template
  // setup is used to define reactive data, methods, and computed properties
  // setup is called before the component is created
  // setup is called once when the component is created
  // setup is used to define the component's state and behavior
  // setup is used to define the component's data, methods, and computed properties
  // setup is used to define the component's lifecycle hooks
  // setup is used to define the component's props and emits
  // setup is used to define the component's slots and provides
  // setup is used to define the component's watchers and effects
  // setup is used to define the component's reactivity and composition
  // setup is used to define the component's context and dependencies
  // setup is used to define the component's template and render function
  // setup is used to define the component's styles and classes
  // setup is used to define the component's directives and filters     
  // this is undefined in setup

  setup(){
    console.log('setup')

    // non reactive data
    const name = "Aysuh"  
    const age = 30

    // reactive data
    const name1 = ref('Aysuh') // ref is a function that creates a reactive reference
    const age1 = ref(30) // ref is a function that creates a reactive reference

    const para = ref(null)

    const ninja = ref({name:"Ayush", age:30}) 
    const ninja2 = reactive({name:"Shrirang", age:30}) 

    // const name2 = ref('Alkali')

    function handleClick(){
      // console.log('clicked')
      // console.log(para, para.value) // accessing the DOM element
      // para.value.classList.add('test') // adding a class to the DOM element
      // para.value.textContent = 'Age changed!' // changing the text content of the DOM element

      name1.value = 'Ayush Dayal'
      age1.value = 35
    }


    const updateNinja = () => {
      // console.log('update ninja')
      ninja.value.name = 'Ninja Hattori'
      ninja.value.age = 20
    }

    // we dont need to use .value for reactive objects created with reactive
    // if we dont psss obj in reactive then it will not be reactive
    const updateNinja2 = () => {
      // console.log('update ninja')
      ninja2.name = 'Ninja Hattori'
      ninja2.age = 20
      // name2 = 'anaaiaiiaianiannaina'
    }



    // return {name:name, age:age}
    return {name, age, para, handleClick, name1, age1, ninja, ninja2, updateNinja, updateNinja2} 
  }

}
</script>
