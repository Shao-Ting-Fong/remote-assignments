module.exports.requireLogin = (req, res, next) => {
  if (!req.session.user) {
    req.flash("error", "Log in to continue.");
    return res.redirect("/login");
  }
  next();
};
