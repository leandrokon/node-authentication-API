import { Pool } from 'pg';

const connectionString = 'your connection string here';

const db = new Pool({connectionString})


export default db;