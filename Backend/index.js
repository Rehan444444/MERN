import express from 'express'
import cors from 'cors'
import mongoose  from 'mongoose'


//configure our app with express
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//connect with mongoose
mongoose.connect('mongodb://127.0.0.1:27017/NewLogin',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

//Creating a schema 
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    
})

//Creating Model for schema 
const user= new mongoose.model("user", userSchema)

//Routes
app.post("/Login1", async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser = await user.findOne({ email: email });
      if (existingUser) {
        // Retrieve the user's password from the database
        const storedPassword = existingUser.password;
        if (password === storedPassword) {
          res.send({ message: "Login successfully", user: existingUser });
        } else {
          res.send({ message: "Password was Incorrect" });
        }
      } else {
        res.send({ message: "User Not Registered" });
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
app.post("/Signup1", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await user.findOne({ email: email });
        if (existingUser) {
            res.send({ message: "Already Registered" });
        } else {
            const newUser = new user({
                name,
                email,
                password,
            });
            await newUser.save();
            res.send({ message: "Successfully Registered" });
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.listen(9002,()=>{
    console.log("Database started at 9002")
})


