import { db } from "../database/db"
import { user } from "../database/schemas"
import { defineEventHandler } from "h3"

export default defineEventHandler(async (event) => {
  return await db.select().from(user);
})
