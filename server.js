const express = require('express')
const app = express()
const PORT = 3003
app.get('/greeting/:name', (request, response) => {
    response.send("Good day " + request.params.name + ". What can I do for you today?")
})
app.listen(PORT, (request, response) =>{
    console.log(`Server is listening from port ${PORT}.`)
})
