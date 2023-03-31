console.log("The server is running...")

import express, { Request, Response, NextFunction } from "express"
import serveIndex from "serve-index"
import api from "./api"

const app = express()
const port = 3000
const publicDir = "."

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.path)
  next()
}

app.use(logger)

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "*")
  res.setHeader("Access-Control-Allow-Methods", "*")
  next()
})

app.use("/api", api)

app.use(express.static(publicDir))
app.use(serveIndex(publicDir, { icons: true }))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
