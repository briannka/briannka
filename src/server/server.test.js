const request = require('supertest');
const app = require('./server');

describe('Hits city endpoint', () => {
  it('should find the searched city', async () => {
    const res = await request(app)
      .post('/city')
      .send({
        city: "Berlin",
      })
    expect(res.statusCode).toEqual(200);
  })
  it('should find the searched city if the city doesn\'t exists', async () => {
    const res = await request(app)
      .post('/city')
      .send({
        city: "jkl",
      })
    expect(res.statusCode).toEqual(404);
  })
})

describe('Hits weather endpoint', () => {
    it('should get weather response', async () => {
      const res = await request(app)
        .post('/weather')
        .send({
          lat: '44.46867',
          lon: '-71.18508',
        })
      expect(res.statusCode).toEqual(200)
    })
    it('should receive an error when fetching weather response', async () => {
        const res = await request(app)
          .post('/weather')
          .send({
            lat: '',
            lon: '',
          })
        expect(res.body).toEqual({data:{ code: 400, error: 'Poorly formatted request' }})
      })
  })