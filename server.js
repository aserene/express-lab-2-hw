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
app.get('/magic/:phrase', (request, response) => {
    // spaces in url is indicated as %20
    const magicAnswer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    // console.log(magicAnswer)
    const randomAnswer = magicAnswer[Math.floor(Math.random() * (magicAnswer.length))]
    // console.log(randomAnswer)
    const phrase = request.params.phrase
    response.send(`${phrase}?` + `<h1>${randomAnswer}</h1>`)
})
app.listen(PORT, (request, response) =>{
    console.log(`Server is listening from port ${PORT}.`)
})
