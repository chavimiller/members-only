const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "chaviweisman",
  database: "members_only",
  password: "",
  port: 5432,
});
