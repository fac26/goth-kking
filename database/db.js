const { readFileSync } = require('fs');
const { join } = require('path');
const Database = require('better-sqlite3');

const db = new Database('db.sqlite');

const schemaPath = join('database', 'schema.sql');
const schema = readFileSync(schemaPath, 'utf-8');
db.exec(schema);

module.exports = db;