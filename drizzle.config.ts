import { defineConfig } from "drizzle-kit";
import path from "node:path";


export default defineConfig({
  dialect: "postgresql",
  schema: path.resolve(__dirname, "./server/database/schemas/auth-schemas.ts"),
  out: path.resolve(__dirname, "./server/database/migrations"),
  verbose: true,
  driver: "pglite",
  strict: true,
  dbCredentials: {
    // pglite specific
    url: path.resolve(__dirname, "./.data")
  }
});