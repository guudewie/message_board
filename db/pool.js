const { Pool } = require("pg");

module.exports = new Pool({
  connectionString:
    process.env.NODE_ENV === "production"
      ? process.env.DATABASE_URL
      : process.env.DATABASE_PUBLIC_URL,
});
