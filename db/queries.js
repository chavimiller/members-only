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

// getAllMessages() {}

// authController.js :

async function insertUser(firstName, lastName, username, password) {
  await pool.query(
    `INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)`,
    [firstName, lastName, username, password]
  );
}

// getUserById(userId) {}

// getUserByUsername(username) {}

// updateMembershipStatus(userId) {}

// updateAdminStatus(userId) {}

module.exports = { insertUser, insertMessage };
