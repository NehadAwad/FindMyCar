const Car = require('../models/carModel');

exports.allCars = async (req, res) => {
    console.log('ok');
    
    res.status(200).json({ok: 'ok'});
}