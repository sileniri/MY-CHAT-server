const Database = require("better-sqlite3");
const db = new Database("database.db");

db.exec(
    `CREATE TABLE IF NOT EXISTS messages(id INTEGER PRIMARY KEY AUTOINCREMENT, user TEXT NOT NULL, message TEXT NOT NULL, userID)`
);

db.exec(
    `CREATE TABLE IF NOT EXISTS accounts(id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL)`
);

// db.exec(`DROP TABLE messages`);

// db.exec(`DROP TABLE accounts`);

module.exports = db;
