const Asistente = require('../models/asistente'); 

const asistenteCtrl = {}

asistenteCtrl.getAsistentes = async (req, res) => {
    asistentes = await Asistente.find();
    res.json(asistentes);
}

asistenteCtrl.createAsistente = async (req, res) => {
    console.log("entro create asistente");
    console.log(req.body)
    const asistente = new Asistente (req.body);
    await asistente.save();
    if(asistente){
        res.send("created")
    }else{
        res.send("error")
    }
    res.json({'status': 'Asistente saved'});
}

asistenteCtrl.getAsistente = async (req, res) => {
    const asistente = await Asistente.findById(req.params.id);
    res.json(asistente);
}

asistenteCtrl.editAsistente = async (req, res) => {
    /*const sector = {
        nombre: req.body.nombre,
        mail: req.body.email,
        dependencia: req.body.dependencia,
    };*/
    const vasistente =  new Asistente (req.body);
    await Asistente.findByIdAndUpdate(req.params.id, {$set: vasistente}, {new: true});
    res.json({
        'status': 'Asistente updated'
    })
}
asistenteCtrl.deleteAsistente = async (req, res)=>{
    await Asistente.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Asistente removed'
    })
}
module.exports= asistenteCtrl;