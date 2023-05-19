import fastify from 'fastify'
import cors from "@fastify/cors"
import { memoriesRoutes } from './routes/memories.routes'

const app = fastify()

app.register(cors, {
  //colocar quais são as urls front que podem acessar e 
  origin: true
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
