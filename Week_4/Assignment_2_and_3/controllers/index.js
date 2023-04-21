module.exports.renderIndex = (req, res) => {
  res.render("index", { title: "Home Page" });
};

module.exports.renderShow = (req, res) => {
  res.render("show", { title: "All Items" });
};
