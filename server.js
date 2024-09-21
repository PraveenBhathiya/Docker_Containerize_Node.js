const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

//define endpoint to fech posts
app.get("/posts", async(req,res) => {
    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=25"
        );
        const data = await response.json();
        res.json(data);
    }catch (error) {
        console.error("Error fetching posts:",error);
        res.status(500).json({error: "Error fetching posts" });
    }
});

// define endpoint to fetch posts by id as query parameter
app.get("/posts/:id" , async(req,res) => {

    const{id} = req.params;
    try{ 
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await response.json();
        res.json(data);
    }catch (error){
        console.error("Error fetching posts by id:",error);
        res.status(500).json({error: "Error fetching posts by id" }); 
    }
});

app.listen(PORT , ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})