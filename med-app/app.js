var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    User            = require("./models/user");

mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use('/public', express.static('public'));
app.use(methodOverride("_method"));

//index page
app.get("/", function(req, res){
    res.render("pages/index");
});

//reg page
app.get("/registrieren", function(req, res){
    res.render("pages/registrieren");
});

//login page
app.get("/login", function(req, res){
    res.render("pages/login");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});
