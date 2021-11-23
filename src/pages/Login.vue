<template>
  <q-layout class="login-pg">
    <div class="login-card">
      <div class="brand-col">
        <div class="logo">
          <img  src="../assets/Logo.svg" alt="asprie-logo" />
        </div>
        <div class="tagline">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </div>
      </div>
      <div class="form-col">
        <div class="welcome-msg">Welcome to Aspire</div>
        <div class="separator"></div>
        <div class="social-tab" @click="loginGoogle">
          <div class="g-logo-img">
            <img src="../assets/google-logo.svg" class="g-logo" />
          </div>
          <div class="google">Login with Google</div>
        </div>
        <div class="q-pa-lg">OR</div>
        <div class="login-form">
          <q-input class="q-mb-lg" outlined v-model.trim="email" label="Email" type="email"/>
          <q-input class="q-mb-lg" outlined v-model.trim="password" label="Password" type="password"  />
         <p class="text-center text-red-5" v-if="!formIsValid">Please enter a valid email and password.Password should be 6 character long</p>
         <p class="text-center text-red-5" v-if="error">{{error}}</p>
         
         <div class="text-center loader-wrap">
          <q-spinner-oval
          v-show="isLoading"
          color="primary"
          size="2em"
         
  class="loader"
          />
         </div>
          <div class="login-btn">
              <q-btn v-if="mode=='login'"  @click="submitForm" color="secondary" label="Log In"  style="width:172px;border-radius:8px;" />
              <q-btn v-else color="secondary" @click="submitForm" label="Sign up"  style="width:172px;border-radius:8px;" />

              </div>
              <div v-if="mode=='login'" class="signup-link q-mt-lg text-center">
<span  class="q-mr-xs"> Register here </span><p @click="switchAuthMode" class="q-ml-xs text-bold" style="color:#0c365a;cursor:pointer;">Sign up</p>
              </div>
               <div v-else class="signup-link q-mt-lg text-center">
<span  class="q-mr-xs"> Click here to </span><p @click="switchAuthMode" class="q-ml-xs text-bold" style="color:#0c365a;cursor:pointer;">Login</p>
              </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {

  data(){
    return{
      email:'',
      password:'',
      formIsValid:true,
      mode:'login',
      isLoading:false,
      error:null
    }
  },
  methods:{
   async submitForm(){
      this.formIsValid=true;
if(this.email === '' || !this.email.includes('@') || this.password.length < 6){
  this.formIsValid=false;
  return;
}

this.isLoading=true;

try{
if(this.mode ==='login') {

}
else {
await this.$store.dispatch('signup',{
    email:this.email,
    password:this.password
  });
}
}
catch(err){
  console.log("err",err.message);
this.error=err.message || 'Failed to authenticate, try later.'
}


this.isLoading=false;
// this.$router.push({name:'Dashboard'})
    },

    switchAuthMode(){
if(this.mode === 'login') {
  this.mode='signup';
}
else{
  this.mode='login';
}
    }
  }
  
};
</script>

<style lang="scss">
.login-pg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-card {
  display: flex;
  border: 1px solid #fcfcfc;
  box-shadow: 0px 2px 12px #00000014;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  max-height: 750px;
  box-shadow: 0 0 5px #fff, 0 20px 30px 10px rgb(0 0 0 / 10%);
  border-radius: 20px;

  overflow: hidden;
}
.brand-col {
  width: 50%;
  background-color: #0c365a;
  padding: 26px;
 
  .tagline {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    margin-top: 28px;
  }
}

.form-col {
  width: 50%;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .welcome-msg {
    font-size: 28px;
    font-weight: 600;
    color: #0c365a;
  }
}

.separator {
  border-bottom: 1px solid #e9ebed;
  margin-bottom: 20px;
  width: 90%;
}
.social-tab {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 200px;
  background: #ffffff;
  padding: 12px;

  margin-top: 20px;
  transition: all 0.3s ease-in-out;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  /* padding: 7px; */
  .g-logo {
    display: flex;
    width: 15px;
    margin-right: 20px;
  }
}
.social-tab:hover {
  background: #f5f5f5;
}

.login-form{
    width: 80%;

    .login-btn{
        display: flex;
        justify-content: center;
    }
}
.loader-wrap{
  position: relative;
  .loader{
    position: absolute;
    top:-106px;
  }
}
</style>
