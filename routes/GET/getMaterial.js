const getMaterial = require("express").Router();
getMaterial.get("/get-material", (req,res) => { 
    res.json({
        mesg:"Úspěšně jsem získal suroviny",
        seznamSurovin:[
            {surovina:"Mrkev"},
            {surovina:"Celer"},
            {surovina:"Brambora"}
        ]
    })
 })

 module.exports = getMaterial;