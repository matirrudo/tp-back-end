const Empresa = require('../models/empresa'); 

const empresaCtrl = {}

empresaCtrl.getEmpresas = async (req, res) => {
    empresas = await Empresa.find();
    res.json(empresas);
}

empresaCtrl.createEmpresa = async (req, res) => {
    console.log("entro create empresa");
    console.log(req.body)
    const empresa = new Empresa (req.body);
    await empresa.save();
    res.json({
        'status': 'Empresa saved'
    });
}

empresaCtrl.getEmpresa = async (req, res) => {
    const empresa = await Empresa.findById(req.params.id);
    res.json(empresa);
}

empresaCtrl.editEmpresa = async (req, res) => {
    /*const sector = {
        nombre: req.body.nombre,
        mail: req.body.email,
        dependencia: req.body.dependencia,
    };*/
    const empresa =  new Empresa (req.body);
    await Empresa.findByIdAndUpdate(req.params.id, {$set: empresa}, {new: true});
    res.json({
        'status': 'Empresa updated'
    })
}
empresaCtrl.deleteEmpresa = async (req, res)=>{
    await Empresa.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Empresa removed'
    })
}
module.exports= empresaCtrl;