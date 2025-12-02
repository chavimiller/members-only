const pool = require("./pool");

// messageController.js :

// getMessageById() {}

async function insertMessage(title, message) {
  await pool.query(`INSERT INTO messages (title, message) VALUES ($1, $2)`, [
    title,
    message,
  ]);
}

// deleteMessage() {}

// indexController.js :

async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages ORDER BY id DESC");
  return result.rows;
}

// authController.js :

async function insertUser(firstName, lastName, username, password) {
  await pool.query(
    `INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)`,
    [firstName, lastName, username, password]
  );
}

async function getUserById(id) {
  const { rows } = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  return rows[0];
}

async function getUserByUsername(username) {
  const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return rows[0];
}

// updateMembershipStatus(userId) {}

// updateAdminStatus(userId) {}

module.exports = {
  getAllMessages,
  insertUser,
  insertMessage,
  getUserById,
  getUserByUsername,
};
