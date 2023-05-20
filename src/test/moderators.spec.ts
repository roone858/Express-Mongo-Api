import request from 'supertest';
import app from '../app';

describe('Moderator tests : ', () => {
  let moderatorID = '';
  const moderator = {
    username: 'roone',
    email: 'roone858@gmail.com',
    password: 'Roone1234',
    role: 'admin',
  };

  it('List Moderators', async () => {
    const response = await request(app).get('/moderators');
    expect(response.status).toBe(201);
    expect(response.body).toEqual([]);
  });

  it('Insert moderator ', async () => {
    const response = await request(app).post('/moderators').send(moderator);
    moderatorID = response.body._id;
    expect(response.status).toBe(201);
    expect(response.body.username).toBe(moderator.username);
    expect(response.body.email).toBe(moderator.email);
  });

  it('Update moderator ', async () => {
    const updatedModerator = {
      username: 'Updated Username',
      email: 'Updated Email',
      password: 'Test1234',
      role: 'admin',
    };
    const response = await request(app)
      .put('/moderators' + '/' + moderatorID)
      .send(updatedModerator);
    expect(response.status).toBe(201);
    expect(response.body.username).toBe(updatedModerator.username);
    expect(response.body.email).toBe(updatedModerator.email);
  });

  it('Delete moderator', async () => {
    const response = await request(app).delete(
      '/moderators' + '/' + moderatorID,
    );
    expect(response.status).toBe(201);
  });
});
