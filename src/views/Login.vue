<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
<!--        <div class="card-header bg-transparent pb-5">-->
<!--          <div class="text-muted text-center mt-2 mb-3">-->
<!--            <small>Sign in with</small>-->
<!--          </div>-->
<!--          <div class="btn-wrapper text-center">-->
<!--            <a href="#" class="btn btn-neutral btn-icon">-->
<!--              <span class="btn-inner&#45;&#45;icon"-->
<!--                ><img src="img/icons/common/github.svg"-->
<!--              /></span>-->
<!--              <span class="btn-inner&#45;&#45;text">Github</span>-->
<!--            </a>-->
<!--            <a href="#" class="btn btn-neutral btn-icon">-->
<!--              <span class="btn-inner&#45;&#45;icon"-->
<!--                ><img src="img/icons/common/google.svg"-->
<!--              /></span>-->
<!--              <span class="btn-inner&#45;&#45;text">Google</span>-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
        <div class="card-body px-lg-5 py-lg-5">
<!--          <div class="text-center text-muted mb-4">-->
<!--            <small>Or sign in with credentials</small>-->
<!--          </div>-->
          <form role="form">
            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Email"
              addon-left-icon="ni ni-email-83"
              @input="email"

            >
            </base-input>

            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Password"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              @input="pswd"


            >
            </base-input>

            <base-checkbox class="custom-control-alternative">
              <span class="text-muted">Remember me</span>
            </base-checkbox>
            <div class="text-center">
              <base-button type="primary" @click="Login" class="my-4">Sign in</base-button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-light"><small>Forgot password?</small></a>
        </div>
        <div class="col-6 text-right">
          <router-link to="/register" class="text-light"
            ><small>Create new account</small></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      model: {
        email: "",
        password: "",
      },
    };
  },
  methods:{
    pswd(val){
      this.model.password += val.data;
    },
    email(val){
      this.model.email += val.data;
    },
    Login(){
      console.log(this.model.email,this.model.password)
      if(this.model.email && this.model.password){
        this.$router.push({path: '/'});

      }

    }
  },
  mounted(){
    this.auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzc28uYnJlc3QuYXBwIiwic3ViIjoiYmI3OTYwODYtYmUwMS0xMWViLTgxY2ItNmVmOTFmZTZhODA1IiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjk5OTk5OTk5OTl9.86jG45MN1rsqqbysGTaMwrHyhxL4XDzY0_RLpWSLRgI";

    axios.get('https://api.brest.app/payment/',{
      headers:{
        Authorization: this.auth
      }
    }).then((resp)=>{
      console.log(resp)
    });


  //   axios.post("https://equilit.eu.auth0.com/oauth/token",{
  //     "client_id":"hj8Ml5qdojTwwvMORVIK0TGvR98uDnXe",
  //     "client_secret":"WyWsFEJwEFRwNNuedVdrQyFvdsVcYrA_AsKQknodmwQZb2RVvONMsCNwA-m_5fWd",
  //     "audience":"https://equilit.eu.auth0.com/api/v2/",
  //     "grant_type":"client_credentials"
  // }, {
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   }).then((resp) =>{
  //     // let auth_app = resp.data.token_type + " " + resp.data.access_token;
  //
  //     // axios.post('https://equilit.eu.auth0.com/authorize',{
  //     //   "response_type": "id_token token",
  //     //   "redirect_uri": "http://admin.demo.tst/",
  //     //   username: 'ctu4m@yandex.ru',
  //     //   password: 'sfsfsfsf',
  //     //   connection: 'Username-Password-Authentication',
  //     //   "scope": "openid name"
  //     // },{
  //     //   headers: {
  //     //     authorization : auth_app
  //     //   }
  //     // }).then((resp)=>{
  //     //   console.log(resp)
  //     // });
  //
  //   }).catch((error)=> console.log(error))
  }
};
</script>
<style></style>
