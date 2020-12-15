
const  express=require('express');


const app=express();

// const  morgan=require('morgan')

const productRoutes=require('./rest/api/product');
const orderRoutes=require('./rest/api/order');

// app.use(margan('dev'));
app.use('/product',productRoutes);
app.use('/order',orderRoutes);

//   error  handling

app.use((req,res,next)=>
{
  const error=new Error('Not Found');
  error.status=404;
  next(error);
})

app.use((error,req,res,next)=>{

    res.status(error.status || 500);
    res.json({
        message:error.message
    })
})



module.exports=app;
