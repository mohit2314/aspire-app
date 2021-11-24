export default {
  async  login(context, payload) {
    return context.dispatch('auth',{
         ...payload,
         mode:'login'
     });
    },

    async signup(context, payload) {
      return context.dispatch('auth',{
            ...payload,
            mode:'signup'
        });
    },

async auth(context,payload) {

    const mode=payload.mode;
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQ7M7_6EenkF7JkLwNAaO3N5UM0OW6N0w`;

    if(mode ==='signup') {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
        AIzaSyAQ7M7_6EenkF7JkLwNAaO3N5UM0OW6N0w`;
    }
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
        })
    });
    const responseData = await response.json();

    if (!response.ok) {
        console.log("responseData",responseData);
        if(responseData.error.message === 'EMAIL_EXISTS'){
        const error = new Error("User already exists !");
        throw error;
        }
        else{
            const error = new Error(responseData.error.message || 'Failed to authenticate');
            throw error;
        }

       
    }
    console.log(responseData);

    context.commit('setUser',{
        token:responseData.idToken,
        userId:responseData.localId,
        tokenExpiration: responseData.expiresIn
    })

},

    logout(context) {
        context.commit('setUser',{
            token:null,
            userId:null,
            tokenExpiration:null
        })
        
    }
};