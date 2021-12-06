const mongoose = require("mongoose");

const episodeSchema = mongoose.Schema({
    episode_id:String,
    anime_id:String,
    episodes:String,
    list:[{
        type:String
    }],
    Status:String
});

const episodeModel = mongoose.model("episode",episodeSchema,"episode");
module.exports = episodeModel;