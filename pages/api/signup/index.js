import db from "../../../lib/db";
import { passwordHash } from "../../../lib/passwordHelpers";
const escape = require("sql-template-strings");

export default async (req, res) => {
  const { name, email, password } = JSON.parse(req.body);

  const hashedPassword = await passwordHash(password);

  try {
    const newUser = await db.query(escape`
      INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${hashedPassword})
    `);

    res.status(201).json(newUser);
  } catch (e) {
    res.status(404).json(e);
  }
};
