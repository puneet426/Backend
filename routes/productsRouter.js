const express = require('express');
const router = express.Router();
const upload = require("../config/multer-config")
const productModel = require("../models/product-model")
router.post("/create", upload.single("image"), async function(req,res){

 try{ let {
    name,
    discount,
    price,
    bgcolor,
    panelcolor,
    textcolor,
   } = req.body;

    let product = await productModel.create({
        image: req.file.buffer,
        discount,
        price,
        bgcolor,
        panelcolor,
        textcolor,
        name,
    })
    req.flash("success","Product Created Successfully")  // flash message
    res.redirect("/owners/admin");
   
}
catch(err){
    res.send(err.message)
}
})

module.exports = router;