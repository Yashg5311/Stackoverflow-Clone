const mongoose = require("mongoose");

const url="mongodb+srv://yashgaur:Webyashudodo321@cluster0.zvaxwtk.mongodb.net/stack-overflow-clone?retryWrites=true&w=majority";

module.exports.connect = () => {
    mongoose
    .connect(url)
    .then((res) => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
}