const encodeDisplay = document.getElementById('encode');
const decodeDisplay = document.getElementById('decode');
const encodeButton = document.getElementById('btn-encode');
const decodeButton = document.getElementById('btn-decode');
const inputEncode = document.getElementById('encode-field');
const inputDecode = document.getElementById('decode-field');
const shiftAmount = 2;
const alphabetRange = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const encodeMode = shiftAmount - 65;
const decodeMode = 65 - shiftAmount;

function caesarCipher(word, mode, n = 0) {
  if (n >= word.length) {
    return word;
  } else {
    if (alphabetRange.includes(word[n])) {
      let code = word.charCodeAt(n);
      let newLetter = String.fromCharCode(((code + mode) % 26) + 65);
      word = word.substring(0, n) + newLetter + word.substring(n + 1);
    }
    return caesarCipher(word, mode, n + 1);
  }
}

encodeButton.addEventListener('click', () => {
  word = inputEncode.value.toUpperCase();
  encodeDisplay.innerText = caesarCipher(word, encodeMode);
});

decodeButton.addEventListener('click', () => {
  word = inputDecode.value.toUpperCase();
  decodeDisplay.innerText = caesarCipher(word, decodeMode);
});
