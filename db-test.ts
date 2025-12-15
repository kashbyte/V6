import 'dotenv/config'  // loads .env automatically
import { neon } from '@neondatabase/serverless'

// Print the DATABASE_URL to see what Node actually sees
console.log('DATABASE_URL:', process.env.DATABASE_URL)

// Make sure it exists
if (!process.env.DATABASE_URL) {
  console.error('No DATABASE_URL found in environment')
  process.exit(1)
}

// Create a Neon client
const client = neon(process.env.DATABASE_URL)

async function testDB() {
  try {
    const result = await client`SELECT NOW()`
    console.log('Database connected. Current time:', result[0].now)
  } catch (err) {
    console.error('Database connection failed:', err)
  }
}

testDB()
