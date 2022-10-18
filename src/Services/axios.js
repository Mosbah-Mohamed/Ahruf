import Vue from "vue";

import axios from "axios";

// new

const devInstance = createInstance(
  "https://a-ibrahem.azq1.com/Ahruf/Dashboards/api/"
);
const productionInstance = createInstance(
  "https://a-ibrahem.azq1.com/Ahruf/Dashboards/api/"
);

function createInstance(baseURL) {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      "Acess-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Accept-Language": localStorage.getItem("lang"),
    },
  });
}

export default {
  install() {
    Vue.prototype.$http = devInstance;
  },
};

// axios.defaults.withCredentials = true;

axios.defaults.baseURL = "https://a-ibrahem.azq1.com/Ahruf/Dashboards/api/";

axios.interceptors.request.use(function (config) {
  config.headers.common = {
    "Accept-Language": localStorage.getItem("lang"),
    "Content-Type": "application/json",
    Authorization: ` Bearer ${localStorage.getItem("authToken")} `,
    Accept: "application/json",
  };
  return config;
});
