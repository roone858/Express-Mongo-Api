"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordValidator = void 0;
const passwordValidator = (password) => {
    if (password.length < 8 ||
        !containsUppercase(password) ||
        !containsNumbers(password))
        return false;
    return true;
};
exports.passwordValidator = passwordValidator;
function containsUppercase(str) {
    return /[A-Z]/.test(str);
}
function containsNumbers(str) {
    return /\d/.test(str);
}
