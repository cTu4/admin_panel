/*!

=========================================================
* Vue Argon Dashboard - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-argon-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/vue-argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ArgonDashboard from "./plugins/argon-dashboard";
import "element-plus/lib/theme-chalk/index.css";


// // Import the Auth0 configuration
// import { domain, clientId } from "../auth_config.json";
//
// // Import the plugin here
// import { Auth0Plugin } from "./auth";







const appInstance = createApp(App);

// appInstance.use(Auth0Plugin, {
//     domain,
//     clientId,
//     onRedirectCallback: appState => {
//         router.push(
//             appState && appState.targetUrl
//                 ? appState.targetUrl
//                 : window.location.pathname
//         );
//     }
// });


appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.config.globalProperties.auth = "";

appInstance.mount("#app");
