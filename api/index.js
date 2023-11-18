//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const getTypesPokemons = require("./src/controllers/getTypesPokemons.js");

// Syncing all the models at once.
conn
  .sync({ force: true })
  .then(() => {
    getTypesPokemons();
  })
  .then(() => {
    server.listen(3001, () => {
      console.log("Server listening at 3001");
    });
  })
  .catch((err) => {
    console.log("fallo algo");
  });

// conn.sync({ alter: true }).then(() => {
//   server.listen(3001, () => {
//     console.log('Server listening at 3001'); // eslint-disable-line no-console
//   });
// });
