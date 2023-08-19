const express = require("express")
const uuid = require("uuid")

const port = 3000
const app = express()
app.use(express.json)

/*
 -Query params => meu site.com/users?nome=jean&age=32   //FILTROS
 -Route params => /users/2       //BUSACAR,DELETAR OU ATUALIZAR ALGO ESPECÍFICO
 -Request Body =>  {"name":"Rodolfo", "age":}

 -GEt          => Buscar informação no back-end
 -POST         => Criar infomação no back-end
 -PUT / PATCH  => Alterar/Atualizar informação no back-end
 -DELETE       => Dletar informação no back-end

*/

const users = {}



app.get("/users", (request, response) => {
                                                                         // Destructuring assignment
    return response.json({users})
})

app.post("/users", (request, response) => {
   
   const { name, age } = request.body
console.log(uuid.v4())
//    const user = { id:uuid.v4(), name, age }
    
return response.json({users})
})


















app.listen(port, () => {
    console.log(` 🧠Server started on port ${port}`)
}) 