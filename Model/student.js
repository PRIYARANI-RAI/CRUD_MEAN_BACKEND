const mongoose = require('mongoose');
const Student = mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});
const usersdata = mongoose.model("angularcrud", Student);
export default usersdata;

  