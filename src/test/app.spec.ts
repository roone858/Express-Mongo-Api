import request from 'supertest';
import app from '../app';

describe('App', () => {
  it('should return "Hello, World!" when accessing the root path', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });

//   it('should create a new user when sending a POST request to /users', async () => {
//     const response = await request(app)
//       .post('/users')
//       .send({ name: 'John Doe', email: 'john@example.com' });

//     expect(response.status).toBe(200);
//     expect(response.text).toBe('User created successfully');
//     // Add additional assertions for user creation logic if needed
//   });
});
