import request from 'supertest';
import app from '../app';

describe('Order Tests : ', () => {
  let orderID = '';
  let productId = '';
  let userId = '';
  let order = { productId, userId };
  let updateOrder = {
    productId,
    userId,
  };

  it('Create user and Product for test Order ', async () => {
    const user = await request(app).post('/users').send({
      username: 'roone',
      email: 'roone858@gmail.com',
      password: '1234',
      address: 'Assiut - Egypt',
    });
    const product = await request(app).post('/products').send({
      title: 'Product One',
      price: 50,
      description: 'test....',
    });
    userId = user.body._id;
    productId = product.body._id;
    order = { productId, userId };
    expect(user.status).toBe(201);
    expect(product.status).toBe(201);
  });

  it('List Orders', async () => {
    const response = await request(app).get('/orders');
    orderID = response.body._id;
    expect(response.status).toBe(201);
    expect(response.body).toEqual([]);
  });

  it('Insert order ', async () => {
    const response = await request(app).post('/orders').send(order);
    orderID = response.body._id;
    expect(response.status).toBe(201);
    expect(response.body.userId).toBe(order.userId);
  });

  it('Update order ', async () => {
    updateOrder = order;
    const response = await request(app)
      .put('/orders' + '/' + orderID)
      .send(updateOrder);
    expect(response.status).toBe(201);
  });

  it('Delete order ', async () => {
    const response = await request(app).delete('/orders' + '/' + orderID);
    expect(response.status).toBe(201);
  });

  it('Delete user and Product for test Order ', async () => {
    const productResponse = await request(app).delete(
      '/products' + '/' + productId,
    );
    expect(productResponse.status).toBe(201);
    const userResponse = await request(app).delete('/users' + '/' + userId);
    expect(userResponse.status).toBe(204);
  });
});
