const searchInApi=require("../helpers/searchInApi");
const searchInBBDD=require("../helpers/searchInBBDD");


const getPokemonsById = async (req, res) => {
  const {id} = req.params;
  let find=null;
  id.length < 10 ? find = await searchInApi(res,id) : find = await searchInBBDD(id);
  
  find ? res.status(200).json(find) :
  res.status(404).json({message:"Pokemon not found"});  
};

module.exports = getPokemonsById;
