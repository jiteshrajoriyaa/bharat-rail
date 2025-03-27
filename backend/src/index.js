const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const railRouter = require('./routes/railRouter')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use('/api/v1/user', userRouter);
app.use('/api/v1/railway', railRouter);

app.listen(3000, ()=>{
    console.log("Server listening on port: ", 3000)
})
