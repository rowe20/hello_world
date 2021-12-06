const express = require('express')
const router = express.Router();
router.use(express.json());

const animeModel = require("../models/anime");
const episodeModel = require("../models/episode");

router.post("/add_anime",(req,res)=>{
    const { newAnime } = req.body;
    animeModel.create(newAnime);
    return res.json({ data:"Added Anime name Succesfully"});
});

router.get("/fetch_anime",async(req,res)=>{
    const anime_name = req.body.name;
    const anime = await animeModel.findOne({name:anime_name});
    return res.json({Your_Requested_anime:anime});
});

router.put("/update_anime/:id",async(req,res)=>{
    const aid = req.params.id;
    const aname = req.body.name;
    const anime = await animeModel.findOneAndUpdate({anime_id:aid},{name:aname},{new:true});
    return res.json({result:"updated Succesfully",Updated_anime:anime});
});

router.delete("/delete_anime/:id",async(req,res)=>{
    const animeid = req.params.id;
    const anime = await animeModel.findOneAndDelete({anime_id:animeid});
    return res.json("Deleted Succesfully");
});
module.exports = router;