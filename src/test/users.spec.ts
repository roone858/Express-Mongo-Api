import request from 'supertest';
import app from '../app';

describe('User tests', () => {
  let userID = '';
  const user = {
    username: 'roone',
    email: 'roone858@gmail.com',
    password: '1234',
    address: 'Assiut - Egypt',
  };

  it('List Users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('Insert user ', async () => {
    const response = await request(app).post('/users').send(user);
    userID = response.body._id;
    expect(response.status).toBe(201);
    expect(response.body.username).toBe(user.username);
    expect(response.body.email).toBe(user.email);
    expect(response.body.password).toBe(user.password);
    expect(response.body.address).toBe(user.address);
  });

  it('Update user ', async () => {
    const updatedUser = {
      username: 'test',
      email: 'test',
      password: 'test',
      address: 'test',
    };
    const response = await request(app)
      .put('/users' + '/' + userID)
      .send(updatedUser);
    expect(response.status).toBe(201);
    expect(response.body.username).toBe(updatedUser.username);
    expect(response.body.email).toBe(updatedUser.email);
    expect(response.body.password).toBe(updatedUser.password);
    expect(response.body.address).toBe(updatedUser.address);
  });

  it('Delete user ', async () => {
    const response = await request(app).delete('/users' + '/' + userID);
    expect(response.status).toBe(204);
  });
});
