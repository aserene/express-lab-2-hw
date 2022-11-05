const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 3003
app.get('/greeting/:name', (request, response) => {
    response.send("Good day " + request.params.name + ". What can I do for you today?")
})
app.get('/tip/:total/:tipPercentage', (request, response) => {
    const total = parseInt(request.params.total)
    const tipPercentage = parseInt(request.params.tipPercentage)
    const operation = request.query.operation
    if(operation === 'multiply') {
        response.send(`The tip will be  $${total*(tipPercentage/100)}.`)
}   else {
        response.send("Cannot calculate")
}
})
app.listen(PORT, (request, response) =>{
    console.log(`Server is listening from port ${PORT}.`)
})
