const axios = require("axios");

// data.results ={ name : name
//          url: url}
const getUrlsApi = async ({results}) => { //{results}=data que viene de la api x AXIOS.
  let values = [];
  for (let i = 0; i < results.length; i++) {
    const dataUrlsApi = await axios.get(results[i].url.split(" "));
    values.push(dataUrlsApi.data);
  }
  //console.log(values)
  return values;
};

module.exports = getUrlsApi;
