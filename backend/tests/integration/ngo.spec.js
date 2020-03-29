const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('NGO', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  })

  it('should be able to create a new NGO', async () => {
    const response = await request(app)
    .post('/ngos')
    // .set('Authorization', 'validID') // Exemplo de autorização caso a rota exija alguma autorização por header.
    .send({
      name: "AADP4",
      email: "contato@aadp.com.br",
      whatsapp: "1100009999",
      city: "Guarulhos",
      uf: "SP",
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});