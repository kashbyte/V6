import { neon } from '@neondatabase/serverless'

const url = 'postgresql://neondb_owner:npg_fkFJO9a8udAE@ep-muddy-dust-a1thxa8g-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

const client = neon(url)

async function testDB() {
  try {
    const result = await client`SELECT NOW() AS now`
    console.log('Database connected. Current time:', result[0].now)
  } catch (err) {
    console.error('Database connection failed:', err)
  }
}

testDB()
