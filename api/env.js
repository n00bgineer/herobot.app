import dotenv from 'dotenv'
dotenv.config({ path: "/home/asxyzp/Documents/Projects/Hackathon Projects/HeroBot.site/Repo/main/app/api/.env" })

export default {
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL
}