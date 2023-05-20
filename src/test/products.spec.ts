import request from 'supertest';
import app from '../app';

describe('Product tests', () => {
  let productID = '';
  const product = {
    title: 'Product One',
    price: 50,
    description: 'test....',
  };

  it('List Products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(201);
    expect(response.body).toEqual([]);
  });

  it('Insert product ', async () => {
    const response = await request(app).post('/products').send(product);
    productID = response.body._id;
    expect(response.status).toBe(201);
    expect(response.body.title).toBe(product.title);
    expect(response.body.price).toBe(product.price);
    expect(response.body.description).toBe(product.description);
  });

  it('Update product ', async () => {
    const updateProduct = {
      title: 'Updated Product ',
      price: 40,
      description: 'Updated test....',
    };
    const response = await request(app)
      .put('/products' + '/' + productID)
      .send(updateProduct);
    expect(response.status).toBe(201);
    expect(response.body.title).toBe(updateProduct.title);
    expect(response.body.price).toBe(updateProduct.price);
    expect(response.body.description).toBe(updateProduct.description);
  });

  it('Delete product ', async () => {
    const response = await request(app).delete('/products' + '/' + productID);
    expect(response.status).toBe(201);
  });
});
