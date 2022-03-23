const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
    nomeCliente: {
            type:String,
            required: true,
            },
    sobrenomeCliente: {
            type:String,
            required: true,
            },
    cpfCliente: {
            type:Number,
            required: true,
            },
    nascimentoCliente: {
            type:Date,
            required: true,
            },
    idadeCliente: {
            type:Number,
            required: true,
            },
    enderecoCliente: {
            type:String,
            required: true
            },
    sexoCliente: {
            type:String,
            required: false,
            },
    situacaoCliente: {
            type:String,
            require: true,
            },
    senhaCliente: {
            type:String,
            requier: true
    },
});

const Cliente = mongoose.model("Cliente", ClienteSchema);
module.exports = Cliente;