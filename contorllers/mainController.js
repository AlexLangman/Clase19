const controlador = {
    index: function(req,res){res.sendFile(path.resolve(__dirname,"./views/home.html"))}
}

module.exports = controlador