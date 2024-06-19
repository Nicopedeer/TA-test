import Express from 'express'
import 'dotenv/config'
import axios from 'axios'

const app = Express()
const PORT = process.env.PORT
const URL = process.env.API_URL

app.get("/soyTA", async function(req, res){
    const {data} = await axios.get("https://ajoaquinlizarraga.github.io/apipublic/mydata/people/people.json")
    try{
        res.status(200).send(data)
    }
    catch{
        res.status(500).send("algo salio mal")
    }
})

app.listen(PORT,() =>{
    console.log("servidor inicializado")
})