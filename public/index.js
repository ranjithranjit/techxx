import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url';



const __dirname = dirname(fileURLToPath(import.meta.url));

// const port = 300;
const app = express();

app.use(express.static('public'));
app.set("views engine","ejs");




app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/public/index.html");
});


app.get("/home",(req, res)=>{
    res.render(__dirname+"/public/home.ejs",{})
});

app.get("/about",(req, res)=>{
    res.render(__dirname+"/public/about.ejs",{})
});


app.get("/services",(req, res)=>{
    res.render(__dirname+"/public/services.ejs");
})

app.get("/pre-projects",(req, res)=>{
    res.render(__dirname+"/public/pre-projects.ejs");
})

app.listen(3000, ()=>{
    console.log(`The Server is running in 3000`);
});


