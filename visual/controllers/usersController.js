const User = require('../models/user');

module.exports = {
    async getAll(req, res, next) {
        try {
            const data = await User.getAll();
            console.log(`Usuarios: ${data}`);
            return res.status(201).json(data);
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                succes: false,
                message: 'Error al obtener usuarios'
            });
            
        }
    },

    async register(req, res, next) {
        try {
            const user = req.body;
            const data = await User.create(user);
            return res.status(201).json({
                succes : true,
                message: 'El registro se realizo correctamente',
                data: data.id
            })
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                succes: false,
                message: 'Hubo un error al registrarse',
                error: error
            });
        }
    }
};