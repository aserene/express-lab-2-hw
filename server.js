const express = require('express')
const app = express()
const PORT = 3003
app.get('/greeting/:name', (request, response) => {
    response.send("Merhaba " + request.params.name + ". Nasilsin?")
})
app.listen(PORT, (request, response) =>{
    console.log(`Server is listening from port ${PORT}.`)
})