require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon = require("./models/pokemon");
const { connect, connection } = require("mongoose");

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connection.once("open", () => {
  console.log("connected to mongo");
});

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connection.once("open", () => {
  console.log("connected to mongo");
});

const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set("view engine", "jsx");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log("Middleware running...");
  next();
});

// I.N.D.U.C.E.S
// ==============

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// Index
app.get("/pokemon", async (req, res) => {
  console.log("Index Controller Func. running...");
  try {
    const foundPokemon = await Pokemon.find({});
    res.status(200).render("Index", { pokemon: foundPokemon });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

// Create
app.post("/pokemon", async (req, res) => {
  try {
    const newPokemon = await Pokemon.create(req.body);
    console.log(newPokemon);
    res.redirect("/pokemon");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show
app.get("/pokemon/:id", async (req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);
    res.render("Show", {
      pokemon: foundPokemon,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
