const knex = require("../../config/database/knex")

module.exports = {
    async verTudo(req,res){
        try { 
            const lista = await knex('usuario').select("*")
            return res.json(lista)
        } catch (error) {
            return res.json(error)
        }
    }
}