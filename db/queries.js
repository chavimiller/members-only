const pool = require("./pool");

// messageController.js :

// getMessageById() {}

async function insertMessage(title, message, userId) {
  await pool.query(
    `INSERT INTO messages (title, message, user_id) VALUES ($1, $2, $3)`,
    [title, message, userId]
  );
}

async function deleteMessage(id) {
  await pool.query(`DELETE FROM messages WHERE id = $1`, [id]);
}

// indexController.js :

async function getAllMessages() {
  const result = await pool.query(`
  SELECT 
    messages.id,
    messages.title,
    messages.message,
    messages.user_id,
    messages.created_at,
    users.username,
    users.first_name,
    users.last_name
  FROM messages
  JOIN users ON messages.user_id = users.id
  ORDER BY messages.id DESC
`);

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

async function updateMembershipStatus(userId, status) {
  await pool.query(`UPDATE users SET is_member = $1 WHERE id = $2`, [
    status,
    userId,
  ]);
}

async function updateAdminStatus(userId, status) {
  await pool.query(`UPDATE users SET is_admin = $1 WHERE id = $2`, [
    status,
    userId,
  ]);
}

module.exports = {
  getAllMessages,
  insertUser,
  insertMessage,
  getUserById,
  getUserByUsername,
  updateAdminStatus,
  updateMembershipStatus,
};
