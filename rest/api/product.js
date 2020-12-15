
const   express=require('express');


const  router=express.Router();


router.get('/',(req,res,next)=>{
    res.status(200).json({
        massage:'Product Id is matched'
    })

});

router.post('/',(req,res,next)=>{

    res.status(200).json({
        message:'Productid post is fetched'
    })
});

router.get('/:productId',(req,res,next)=>{
    
    const id=req.params.productId;
    res.status(200).json({
        message:'Specific  product Id is  fetched',
        id:id
    })

});


module.exports=router;