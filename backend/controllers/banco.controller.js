var database = require("../config/database.config");




var BancoController = (function () {
    function BancoController() {

        this.get_primer_semestre = function(req,res){
            var query = "select nombre, noviembre, diciembre, "+
            "enero,febrero,marzo,abril from "+
            "( "+
            "SELECT  "+
            "t1.id_banco as id,  "+
            "t1.rankin as noviembre,  "+
            "t2.rankin as diciembre,  "+
            "t3.rankin as enero,  "+
            "t4.rankin as febrero,  "+
            "t5.rankin as marzo,  "+
            "t6.rankin as abril "+
            " "+
            "FROM  "+
            "(SELECT * FROM noviembre) t1,  "+
            "(SELECT * FROM diciembre) t2, "+
            "(SELECT * FROM enero) t3, "+
            "(SELECT * FROM febrero) t4, "+
            "(SELECT * FROM marzo) t5, "+
            "(SELECT * FROM abril) t6 "+
            " "+
            "WHERE  "+
            "t1.id_banco = t2.id_banco  "+
            "AND  "+
            "t1.id_banco = t3.id_banco "+
            "AND  "+
            "t1.id_banco = t4.id_banco "+
            "AND  "+
            "t1.id_banco = t5.id_banco "+
            "AND  "+
            "t1.id_banco = t6.id_banco)as ps, banco "+
            "where banco.id_banco = ps.id "+
            "order by noviembre;"

            database.query(query, function(err,data){
                if(err){
                    res.json({
                        estado: false,
                        status: 400,
                        error: err
                    });
                }else{
                    res.json(data);
                }
            })
        }

        this.get_segundo_semestre = function(req,res){
            var query = "select nombre, mayo,junio, "+
            "julio, agosto, septiembre, "+
            "octubre from  "+
            "( "+
            "SELECT  "+
            "t7.id_banco as id,  "+
            "t7.rankin as mayo,  "+
            "t8.rankin as junio,  "+
            "t9.rankin as julio,  "+
            "t10.rankin as agosto,  "+
            "t11.rankin as septiembre,  "+
            "t12.rankin as octubre "+
            " "+
            "FROM  "+
            "(SELECT * FROM mayo) t7, "+
            "(SELECT * FROM junio) t8, "+
            "(SELECT * FROM julio) t9, "+
            "(SELECT * FROM agosto) t10, "+
            "(SELECT * FROM septiembre) t11, "+
            "(SELECT * FROM octubre) t12 "+
            " "+
            "WHERE  "+
            "t7.id_banco = t8.id_banco "+
            "AND  "+
            "t7.id_banco = t9.id_banco "+
            "AND  "+
            "t7.id_banco = t10.id_banco "+
            "AND  "+
            "t7.id_banco = t11.id_banco "+
            "AND  "+
            "t7.id_banco = t12.id_banco)as ss, "+
            "banco  "+
            "where banco.id_banco = ss.id "+
            "order by mayo;"

            database.query(query, function(err,data){
                if(err){
                    res.json({
                        estado: false,
                        status: 400,
                        error: err
                    });
                }else{
                    res.json(data);
                }
            })
        }

       

    }
    BancoController.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    return BancoController;
}());
exports.default = BancoController;