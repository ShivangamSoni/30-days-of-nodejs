const email = "test_user@gmail.com";
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const emailMatched = email.match(email);
if (emailMatched) {
  console.log(`Email: ${email} is Valid`);
} else {
  console.log(`Email: ${email} is In-Valid`);
}

const password = "Qwerty@1234";
const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const passwordMatched = password.match(passwordPattern);
if (passwordMatched) {
  console.log(`Password: ${password} is Valid`);
} else {
  console.log(`Password: ${password} is In-Valid`);
}
