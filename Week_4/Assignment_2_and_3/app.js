const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const dotenv = require("dotenv");
const { getUserById, register, login, findArticleByUserID } = require("./models/database");

const app = express();
dotenv.config();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const sessionConfig = {
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
  res.locals.currentUser = req.session.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

const requireLogin = (req, res, next) => {
  if (!req.session.user) {
    req.flash("error", "Log in to continue.");
    return res.redirect("/login");
  }
  next();
};

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

app.get("/show", (req, res) => {
  res.render("show", { title: "All Items" });
});

app.get("/register", (req, res) => {
  res.render("users/register", { title: "Register" });
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const registeredUser = await register(email, password);
    req.session.user = registeredUser;
    req.flash("success", "Welcome!");
    res.redirect("/");
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/register");
  }
});

app.get("/login", (req, res) => {
  res.render("users/login", { title: "Login" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const loginUser = await login(email, password);
    req.flash("success", "Welcome Back!");
    req.session.user = loginUser;
    res.redirect(`/member/${loginUser.id}`);
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/login");
  }
});

app.get("/member/:id", requireLogin, async (req, res) => {
  const { id } = req.params;
  try {
    const foundUser = await getUserById(id);
    if (foundUser.id !== req.session.user.id) {
      throw new Error("Access denied.");
    }
    const articles = await findArticleByUserID(id);
    res.render("users/member", { articles, title: "Member Profile" });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect(`/member/${req.session.user.id}`);
  }
});

app.get("/logout", requireLogin, (req, res) => {
  req.session.user = null;
  req.flash("success", "GoodBye~");
  res.redirect("/");
});

app.all("*", (req, res, next) => {
  next(new Error("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = "Oh No! Something Went Wrong!";
  }
  res.status(statusCode).render("error", { err, title: "Oops!" });
});

app.listen(3000, () => {
  console.log("ON PORT 3000");
});
