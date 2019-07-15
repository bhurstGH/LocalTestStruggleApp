const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {
    res.end(`Every day I'm strugglin'`)
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})