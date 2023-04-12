const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index");
});

const sumFromOne = (number, isBigInt) => {
    if (isBigInt) {
        return ((BigInt(number) * (BigInt(number) + 1n)) / 2n).toString();
    } else {
        return 0.5 * parseInt(number) * (parseInt(number) + 1);
    }
};

app.get("/data", (req, res) => {
    const { number } = req.query;
    const responseData = {
        isValid: false,
        message: "",
        value: 0,
    };

    if (!number) {
        responseData.message = "Lack of Parameter";
    } else if (isNaN(number) || parseInt(number) <= 0) {
        responseData.message = "Wrong Parameter";
    } else {
        responseData.isValid = true;
        responseData.message = "Success";

        const isBigInt = parseInt(number) > (Number.MAX_SAFE_INTEGER ^ 0.5);
        responseData.value = sumFromOne(number, isBigInt);
    }
    res.json(responseData);
});

app.get("/sum", (req, res) => {
    res.sendFile(path.join(__dirname, "public/sum.html"));
});

app.get("/myName", (req, res) => {
    const { name } = req.cookies;
    if (!name) {
        res.redirect("/trackName");
    } else {
        res.render("myName", { name });
    }
});

app.get("/trackName", (req, res) => {
    const { name } = req.query;
    if (!name) {
        res.render("new");
        // res.sendFile("/public/new.html", { root: __dirname });
    } else {
        res.cookie("name", name);
        res.redirect("/myName");
    }
});

app.listen("3000", () => {
    console.log("ON PORT 3000!");
});
