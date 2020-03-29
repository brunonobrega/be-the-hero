const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const ngos = await connection('ngos').select('*');
    
        return response.json(ngos);
    },

    async create(request, response) {
        // const data = request.body;
        const { name, email, whatsapp, city, uf } = request.body;
    
        const id = generateUniqueId();
    
        await connection('ngos').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};