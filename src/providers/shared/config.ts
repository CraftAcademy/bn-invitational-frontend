const ENV = {
  config(env = "dev") {
    const apiUrl =
      env === "dev" ? "" : "https://votingapi.herokuapp.com/api/v1";

    return {
      apiUrl: apiUrl
    };
  }
};

export default ENV;
