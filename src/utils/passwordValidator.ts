export const passwordValidator = (password: string) :boolean=> {
  if (
    password.length < 8 ||
    !containsUppercase(password) ||
    !containsNumbers(password)
  )
    return false;

  return true;
};

function containsUppercase(str: string) {
  return /[A-Z]/.test(str);
}
function containsNumbers(str: string) {
  return /\d/.test(str);
}
