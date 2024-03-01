const bcrypt = require("bcrypt");

export async function passwordHash(password) {
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return hashedPassword;
}

export async function passwordVerify(password, hashedPassword) {
  const isValid = await bcrypt.compare(password, hashedPassword);

  return isValid;
}
