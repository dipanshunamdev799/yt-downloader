const express = require("express");
const router = express.Router();
//router is just like a mini app

router.get("/", (req, res) => {
  res.status(200).render("home", { data: "something" });
  // res.status(200).json({msg:"Hello"});
  // res.download("temp.js")
});

// app.put();
// app.post();
// app.delete();
// app.patch();



router.get("/:url",(req,res)=>{
    console.log(req.params.url);
    res.json({"status": "ok" });    //or fail
})

router.param("url",(req,res,next,url)=>{
    //middleware
    console.log(url);
    next();
})
















module.exports = router;
