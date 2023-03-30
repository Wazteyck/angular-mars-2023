import express, { json } from "express"
import { Article, NewArticle } from "./interfaces/article"
const app = express.Router()

const generateId = () => {
  return Date.now() + "_" + Math.round(Math.random() * 1e12)
}

let articles: Article[] = [
  {
    id: "a1",
    name: "Tournevis",
    price: 3.99,
    qty: 15,
  },
  {
    id: "a2",
    name: "Pelle",
    price: 5.99,
    qty: 50,
  },

  {
    id: "a3",
    name: "Bêche",
    price: 15.99,
    qty: 30,
  },

  {
    id: "a4",
    name: "Marteau",
    price: 12.99,
    qty: 35,
  },
]

app.get("/date", (req, res) => {
  res.json({ date: new Date() })
})

app.get("/articles", (req, res) => {
  res.json(articles)
})

app.use(json())

app.post("/articles", (req, res) => {
  const newArticle: NewArticle = req.body
  const article = { ...newArticle, id: generateId() }
  articles.push(article)
  res.status(201).end
})

app.delete("/articles", (req, res) => {
  const ids: string[] = req.body
  articles = articles.filter((x) => !ids.includes(x.id))
  res.status(204).end
})

export default app
