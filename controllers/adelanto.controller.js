const Adelanto = require('../models/adelanto'); 

const adelantoCtrl = {}

adelantoCtrl.getAdelantos = async (req, res) => {
    adelantos = await Adelanto.find().populate("adelanto");
    res.json(adelantos);
}

adelantoCtrl.createAdelanto = async (req, res) => {
    console.log("entro create adelanto");
    console.log(req.body);
    const adelanto = new Adelanto (req.body);
    await adelanto.save();
    res.json({
        'status': 'Adelanto saved'
    });
}

adelantoCtrl.getAdelanto = async (req, res) => {
    const mensaje = await Adelanto.findById(req.params.id).populate("adelanto");
    res.json(mensaje);
}

adelantoCtrl.editAdelanto = async (req, res) => {
    const adelanto =  new Adelanto (req.body);
    await Adelanto.findByIdAndUpdate(req.params.id, {$set: adelanto}, {new: true});
    res.json({
        'status': 'Adelanto updated'
    })
}
adelantoCtrl.deleteAdelanto = async (req, res)=>{
    await Adelanto.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Adelanto removed'
    })
}
module.exports= adelantoCtrl;