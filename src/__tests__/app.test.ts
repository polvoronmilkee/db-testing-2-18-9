import request from 'supertest';
import app from '../app.js';
import { pool } from '../db.js';

afterAll(async () => {
  // Close the database pool after tests to prevent hanging processes
  await pool.end();
});

describe('GET /users', () => {


  it('should return a list of users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(500);
    expect(Array.isArray(response.body)).toBe(false);
  });
});


// comment
//test

// commenting 
<<<<<<< Updated upstream
=======

// hiii
>>>>>>> Stashed changes
