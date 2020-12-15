
const express=require('express');

const router=express.Router();



router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'OrderId is fetched'
    })
});

router.post('/',(req,res,next)=>{

    res.status(200).json({
        message:'OrderId of post is fetched'
    })

});

router.get('/:orderId',(req,res,next)=>{

    const id=req.params.orderId;
    res.status(200).json({

        message:'Specific orderID is fetched',
        id:id

    })
});


module.exports=router;