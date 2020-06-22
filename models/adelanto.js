const mongoose = require('mongoose');
const {Schema} = mongoose;

const MensajeSchema = new Schema({
    fecha:{type: Date, required:true},
    cobrador:{type: String, required:true},
    montoAdelanto:{type: Number, required:true}
})
module.exports =mongoose.model('Adelanto', MensajeSchema);