import { PrismaPg } from "@prisma/adapter-pg";
import { Prisma, PrismaClient } from "@prisma/client";
import "dotenv/config" 
import pg from "pg";


//this is connect your code engine to your neon datbase
const connectionString = process.env.DATABASE_URL!;


const pool = new pg.Pool({connectionString});
const adapter = new PrismaPg({connectionString});
export const prisma = new PrismaClient({adapter});
