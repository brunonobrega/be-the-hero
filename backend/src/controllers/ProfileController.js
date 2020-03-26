const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ngo_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ngo_id', ngo_id)

        return response.json(incidents);
    }
}