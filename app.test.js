const request = require('supertest');
const app = require('./app');

describe('App Routes', () => {
  test('GET / should return 200 and welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hello from CI/CD Pipeline');
  });

  test('GET /health should return healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  test('Basic math check', () => {
    expect(1 + 1).toBe(2);
  });
});