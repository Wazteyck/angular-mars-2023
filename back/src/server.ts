console.log("The server is running...")

import express, { Request, Response, NextFunction, json } from "express"
import serveIndex from "serve-index"
import api from "./api"
import { NewArticle } from "./interfaces/article"

const app = express()
const port = 3000

const publicDir = "."

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.path)
  next()
}

app.use(logger)

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200")
  res.setHeader("Access-Control-Allow-Headers", "http://localhost:4200")
  res.setHeader("Access-Control-Allow-Methods", "http://localhost:4200")
  next()
})

app.use("/api", api)

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.use(express.static(publicDir))
app.use(serveIndex(publicDir, { icons: true }))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
