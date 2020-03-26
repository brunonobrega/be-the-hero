const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { id } = request.body;

        const ngo = await connection('ngos')
            .where('id', id)
            .select('name')
            .first();

        if (!ngo) {
            return response.status(400).json({ error: 'Ong Não encontrada'});
        }

        return response.json(ngo);
    }
}