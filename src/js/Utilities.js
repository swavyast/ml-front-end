export function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9]+$/;
    console.log('isValidUsername has been called');
    return username !== '' && username.length >= 8 && regex.test(username);
}

export function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

export function generateRandomString(length) {

    console.log('generateRandomString() being called');

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}