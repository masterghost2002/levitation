import dotenv from 'dotenv';
dotenv.config();
require('./utils/db');
import express from 'express';
const server = express();
server.get('/api/health', (req, res) => res.send('Server is up and running 🚀'));