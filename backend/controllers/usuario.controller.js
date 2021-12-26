var database = require("../config/database.config");




var UsuarioController = (function () {
    function UsuarioController() {

        this.get_all = function (req, res) {

            var query = "SELECT * FROM Usuario "

            database.query(query, function (err, data) {
                if (err) {
                    res.json([]);
                } else {
                    res.json(data);
                }
            });
        };

        this.get_one = function (req, res) {

            var query = "SELECT * FROM Usuario WHERE id = ?"
            var id = req.params.id
            database.query(query, [id], function (err, data) {
                if (err) {
                    res.json({
                        estado: false,
                        status: 400,
                        error: err
                    });
                } else {
                    res.json(data[0]);
                }
            });
        };

       

        this.auth = function (req, res) {
            var query = "SELECT * FROM Usuario  WHERE nombre = ? AND contrasena = ?"

            var body = {
                nombre: req.body.nombre,
                contrasena: req.body.contrasena
            };

            database.query(query, [body.nombre, body.contrasena], function (err, data) {
                if (err) {
                    res.status(400).json({
                        estado: false,
                        status: 400,
                        error: err
                    });
                } else {
                    if (data.length == 0) {
                        res.json({
                            estado: false,
                            status: 404,
                            mensaje: "Usuario no encontrado"
                        });
                    } else {
                        res.json({ 
                            estado: true, 
                            data: data[0],
                            mensaje: "Bienvenido"
                        });
                    }

                }
            });
        };


        




    }
    UsuarioController.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    return UsuarioController;
}());
exports.default = UsuarioController;