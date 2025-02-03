const express = require("express")
const app = express()

const port = 8000

app.use(express.json())


app.get("/",(req,res)=>{
    return res.json("CHECK COMPLETE")
})


app.post("/Signup",(req,res)=>{
    const {username,email,password,DOB}=req.body

    if (!username){
        return res.json({status:"Username cannot be empty"})
    }

    if (!email){
        return res.json({status:"Username cannot be empty"})
    }

    if (password.length>8 && password.length<17){
        return res.json({status:"Password length should be greater than 8 or less than or equal to 16"})
    }

    return res.json({
        message:"Sign completed successfully"
    })

})

app.listen(port,()=>{
    console.log("Server running at port 8000")
})