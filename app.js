let user = prompt("Who is login?  ");
if (user !== "codecamp") {
  user = "guest";
} else {
  let password = prompt("Enter your password :");
  if (password == "123456") {
  } else {
    alert("Wrong password");
    prompt("Enter your password :");
  }
}

alert(`Welcome ${user}`);
