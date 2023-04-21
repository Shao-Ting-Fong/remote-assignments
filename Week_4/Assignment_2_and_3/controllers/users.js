const { getUserById, register, login, findArticleByUserID } = require("./database");

module.exports.renderRegister = (req, res) => {
  res.render("users/register", { title: "Register" });
};

module.exports.registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const registeredUser = await register(email, password);
    req.session.user = registeredUser;
    req.flash("success", "Welcome!");
    res.redirect("/index");
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/register");
  }
};

module.exports.renderLogin = (req, res) => {
  res.render("users/login", { title: "Login" });
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await login(email, password);
    req.flash("success", "Welcome Back!");
    req.session.user = foundUser;
    res.redirect(`/member/${foundUser.id}`);
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/login");
  }
};

module.exports.getUserInfo = async (req, res) => {
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
};

module.exports.logoutUser = (req, res) => {
  req.session.user = null;
  req.flash("success", "GoodBye~");
  res.redirect("/index");
};
