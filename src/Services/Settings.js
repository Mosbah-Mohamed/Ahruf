const Settings = {
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("authToken"),
      Accept: "application/json",
      "Content-Type": "application/json",
      "Acess-Control-Allow-Origin": "*",
    },
  },
};

export { Settings };
