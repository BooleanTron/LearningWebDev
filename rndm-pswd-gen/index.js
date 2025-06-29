function genPswd(length, incUpperCase, incLowerCase, incNumbers, incSymbols) {
  if (length <= 0) {
    return "password must be atleast one character long!";
  }
  if (!incUpperCase && !incLowerCase && !incNumbers && !incSymbols) {
    return "please select atleast one set of characters";
  }

  let allowedChars = "";
  let pswd = "";
  const LowerChars = "abcdefghijklmnopqrstuvwxyz";
  const UpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "1234567890";
  const symbols = "!@#$%^&*()_+-=<>,.;:[{}/|]";

  allowedChars += incUpperCase ? UpperChars : "";
  allowedChars += incLowerCase ? LowerChars : "";
  allowedChars += incNumbers ? nums : "";
  allowedChars += incSymbols ? symbols : "";

  for (let i = 0; i < length; i++) {
    pswd += allowedChars[Math.floor(Math.random() * allowedChars.length)];
  }
  return pswd;
}

const pswd_len = 12;
const incUpperCase = true;
const incLowerCase = true;
const incNumbers = true;
const incSymbols = true;

const pswd = genPswd(pswd_len, incUpperCase, incLowerCase, incNumbers, incSymbols);

console.log(`generated password: ${pswd}`);

