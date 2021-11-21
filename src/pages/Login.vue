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
          <q-input class="q-mb-lg" outlined v-model="text" label="Email" type="email"/>
          <q-input class="q-mb-lg" outlined v-model="text" label="Password" type="password"  />
          <div class="login-btn" @click="$router.push({name:'Dashboard'})">
              <q-btn color="secondary" label="Log In"  style="width:172px;border-radius:8px;" />
              </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {};
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
</style>
