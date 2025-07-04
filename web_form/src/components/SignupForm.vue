<template>
  <form action="/login" @submit.prevent="handleSubmit">

    <label>Email:</label>
    <input type="emial" required  v-model="email" />

    <label>Password:</label>
    <input type="password" required  v-model="password" />
    <label v-if="passError" class="error">{{ passError }}</label>

    <label>Role:</label>
    <select v-model="role">
        <option value="designer">Web Designer</option>
        <option value="developer">Web Developer</option>
    </select>

    <div class="terms">
        <input type="checkbox" required v-model="terms" />
        <label>Accept terms and conditions.</label>
    </div>


    <div>
        <input type="checkbox" value="ayush"  required v-model="names" />
        <label>Ayush</label>
    </div>
    <div>
        <input type="checkbox" value="ram" required v-model="names" />
        <label>Ram</label>
    </div>
    <div>
        <input type="checkbox" value="sham" required v-model="names" />
        <label>Sham</label>
    </div>


    <div>
        <label>Skills</label>
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill"/>
        <p class="pill" v-for="skill in skills" :key="skill">
            <span @click="deleteSkill(skill)">{{ skill }}  </span>
        </p>
    </div>

    <div class="submit">
        <button>Submit</button>
    </div>

</form>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Terms: {{ terms }}</p>
    <p>Names: {{ names }}</p>
    
</template>

<script>
export default {
    data(){
    return {
      email:"",
      password:"",
      role:"",
      terms:false,
      names:[],
      tempSkill:"",
      skills:[],

      passError:""
    }
  },
  methods:{
    addSkill(e){

        if(e.key === "," && this.tempSkill){
            if(!this.skills.includes(this.tempSkill)){
                this.skills.push(this.tempSkill);
                this.tempSkill = ""; 
            }
        }
    },
    deleteSkill(skill){
        this.skills = this.skills.filter(s => s != skill)
    },

    handleSubmit(){
        // console.log("Form submitted");

        // validate password
        this.passError = this.password.length < 6 ? "Password must be at least 6 characters long" : "";
        if(!this.passError){
            // submit the form
            console.log("Form submitted with data:", {
                email: this.email,
                password: this.password,
                role: this.role,
                terms: this.terms,
                names: this.names,
                skills: this.skills
            });
            // reset the form
            this.email = "";
            this.password = "";
            this.role = "";
            this.terms = false;
            this.names = [];
            this.tempSkill = "";
            this.skills = [];
        }
    }
  }
}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }

  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  input,select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }

  input[type="checkbox"] {
    display: inline-block;
    width:16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

.submit {
  text-align: center;
}

.error{
    color: red;
  font-size: 0.8em;
  margin-top: 5px;
  font-weight: bold;
}

</style>
