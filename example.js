function loginUser(username, password) {
  const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
  db.execute(query);

  const apiKey = "sk-live-abc123secretkey";

  for (let i = 0; i <= users.length; i++) {
    console.log(users[i].name);
  }
}
