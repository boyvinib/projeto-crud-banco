const express = require("express");
const mongoose = require("mongoose"); 
const cors = require("cors");
const app = express();

const ClienteModel = require("./Cliente");

app.use(express.json());
app.use(cors());


mongoose.connect(
    "mongodb+srv://boyvinib:crud@crud.vhwid.mongodb.net/banco?retryWrites=true&w=majority",
    {useNewUrlParser: true,}
);

app.post("/insert", async(req, res) => {

    const nomeCliente = req.body.nomeCliente;
    const sobrenomeCliente = req.body.sobrenomeCliente;
    const cpfCliente = req.body.cpfCliente;
    const nascimentoCliente = req.body.nascimentoCliente;
    const idadeCliente = req.body.idadeCliente;
    const enderecoCliente = req.body.enderecoCliente;
    const sexoCliente = req.body.sexoCliente;
    const situacaoCliente = req.body.situacaoCliente;
    const senhaCliente = req.body.senhaCliente;

    const cliente = new ClienteModel ({ nomeCliente: nomeCliente, sobrenomeCliente: sobrenomeCliente, cpfCliente: cpfCliente, nascimentoCliente: nascimentoCliente, idadeCliente: idadeCliente, enderecoCliente: enderecoCliente, sexoCliente: sexoCliente, situacaoCliente: situacaoCliente, senhaCliente: senhaCliente});
    
    try{
        await cliente.save();
        res.send("Dado Inserido");
    } catch(err){
        console.log(err);
    }

});

app.get("/read", async(req, res) => {

    ClienteModel.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    });

});

app.put("/update", async(req, res) => {

    const id = req.body.id;
    //const nomeCliente = req.body.nomeCliente;
    //const sobrenomeCliente = req.body.sobrenomeCliente;
    //const cpfCliente = req.body.cpfCliente;
    //const nascimentoCliente = req.body.nascimentoCliente;
    //const idadeCliente = req.body.idadeCliente; 
    const newEnderecoCliente = req.body.newEnderecoCliente;
    //const sexoCliente = req.body.sexoCliente;
    //const situacaoCliente = req.body.situacaoCliente;
    //const senhaCliente = req.body.senhaCliente;
    // o updateFood dele é o meu atualizarEndereco / o newFoodName dele é o meu novoEnderecoCliente

    try{

        await ClienteModel.findById(id,(err, updateEndereco)=>{
            updateEndereco.enderecoCliente = newEnderecoCliente;
            updateEndereco.save();
            res.send("update");
        });
    } catch(err){
        console.log(err);
    }

});


app.delete("/delete/:id", async (req, res)=>{
    const id = req.params.id;
    
    await ClienteModel.findByIdAndRemove(id).exec();
    res.send("delete");

});

app.listen(3001, () => {
console.log("Servidor esta rodando na porta 3001");

});