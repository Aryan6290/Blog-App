import dotenv from "dotenv";

import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });

if (process.env.ENV_NAME === undefined) {
  dotenv.config();
}
export const Data = {
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_NAME: process.env.DATABASE_NAME,
  PORT: process.env.PORT,
  JWT_SECRET_TOKEN: process.env.JWT_SECRET_TOKEN,
};
