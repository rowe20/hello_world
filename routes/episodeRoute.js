const express = require('express')
const router = express.Router();
router.use(express.json());

const animeModel = require("../models/anime");
const episodeModel = require("../models/episode");

router.post("/add_episode",(req,res)=>{
    const { newEpisode } = req.body;
    episodeModel.create(newEpisode);
    return res.json({ data:"Added Episode Succesfully"});
});

router.get("/fetch_anime_episode",async(req,res)=>{
    const anime_name = req.body.name;
    const animeid = await animeModel.findOne({name:anime_name});
    const anime_idf = animeid.anime_id;
    const episode = await episodeModel.findOne({anime_id:anime_idf});
    return res.json({Your_Requested_anime:anime_name,Your_Requested_anime_episode:episode});
});


router.put("/update_episode/:id",async(req,res)=>{
    const episodeid = req.params.id;
    const status = req.body.status;
    const anime = await episodeModel.findOneAndUpdate({episode_id:episodeid},{Status:status},{new:true});
    return res.json({result:"updated Succesfully",Updated_anime:anime});
});

router.delete("/delete_episode/:id",async(req,res)=>{
    const episodeid = req.params.id;
    const anime = await episodeModel.findOneAndDelete({episode_id:episodeid});
    return res.json("Deleted Succesfully");
});


module.exports = router;