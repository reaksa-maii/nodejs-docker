const { v4: uuidv4 } = require("uuid");
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const user = [
  {
    user_id: uuidv4(),
    user_name: String,
    age: String,
  },
];

module.exports = user;
