//To handle error 
//we execute function using this wrapper if 
//it executes succesffully then try block will be executed else catch block will be executed

// const asyncHandler=(fn)=>async(req,res,next)=>{
//      try{
//         await fn(req,res,next);
//      }catch(error){
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//      }
// }
//Using Promises
const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
    }
}

export default asyncHandler;