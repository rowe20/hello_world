const mongoose = require("mongoose");

const animeSchema = mongoose.Schema({
    anime_id:String,
    name:String,
    season:[{
        type:String
    }],
    description:String
});

const animeModel = mongoose.model("anime",animeSchema,"anime");
module.exports = animeModel;