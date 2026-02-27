import request from 'supertest';
import app from '../app.js';
import { pool } from '../db.js';

afterAll(async () => {
  // Close the database pool after tests to prevent hanging processes
  await pool.end();
});

describe('GET /users', () => {


  it('should return 500 on database error', async () => {
    // Mock the pool.query method to throw an error
    const originalQuery = pool.query;
    pool.query = jest.fn().mockRejectedValue(new Error('Database error'));
    const response = await request(app).get('/users');
    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Database error');
    // Restore the original query method
    pool.query = originalQuery;
  });
});

//test

// commenting 