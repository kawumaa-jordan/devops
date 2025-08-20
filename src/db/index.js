import express from 'express'
const app = express()
const port = 3000
app.use(express.json())

app.post('/',(req,res)=>{
    res.send('hello world')
})


app.get('/',(req,res)=>{
       res.send('POST request received')
})
app.listen(port,'0.0.0.0',()=>{
    console.log(`app is running on port ${port}`)
})
