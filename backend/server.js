const express = require("express");
const cors = require("cors"); 
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Arjun@2003",
    database: "student"
});

// Connect to the database and log the status
db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err.message);
    } else {
        console.log("Connected to the database successfully");
    }
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.post('/create',(req,res)=>{
    const sql="INSERT INTO student (`name`,`email`) VALUES (?)"
    const values=[
        req.body.name,
        req.body.mail
    ]
    db.query(sql,[values],(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);
    })
})


app.put('/update/:id',(req,res)=>{
    const sql="update student set `name`=?, `email`=? where id=?";
    const id = req.params.id;
    const values=[
        req.body.name,
        req.body.mail
    ]
    db.query(sql,[...values,id],(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);
    })
})


app.delete('/student/:id',(req,res)=>{
    const sql="DELETE FROM student WHERE id=?";
    const id = req.params.id;
    const values=[
        req.body.name,
        req.body.mail
    ]
    db.query(sql,[id],(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);
    })
})



app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
