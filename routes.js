const express = require('express')
const routes = express.Router() // Express method that defines the const 'routes' as responsible for the routes 

routes.get('/', function(req, res){
    //return res.send("ok")
    return res.redirect("instructors")
})

routes.get('/instructors', function(req, res){
    //return res.send("ok")
    return res.render("instructors/index")
})

routes.get('/instructors/create', function(req, res){
    return res.render("instructors/create")
})

routes.post('/instructors', function(req, res){
    return res.send(req.body)
})

routes.get('/members', function(req, res){
    //return res.send("ok")
    return res.send("members")
})

module.exports = routes