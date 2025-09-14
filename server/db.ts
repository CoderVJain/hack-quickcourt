import { Agent, setGlobalDispatcher } from 'undici';
import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Fix SSL certificate issue for Replit environment
if (process.env.NODE_ENV === 'development') {
  const agent = new Agent({ connect: { rejectUnauthorized: false } });
  setGlobalDispatcher(agent);
  (neonConfig as any).fetch = (input: any, init: any) => fetch(input, { ...init, dispatcher: agent });
  console.log('SSL certificate validation disabled for development');
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });