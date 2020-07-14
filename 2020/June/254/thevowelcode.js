// Daily challenge form Dev.To
// https://dev.to/thepracticaldev/daily-challenge-254-the-vowel-code-1046

{
    const vowels = ["a", "e", "i", "o", "u"];

    const encode = stringToEncode => {
        if (!isNaN(stringToEncode)) return;
        for (let i = 0; i < stringToEncode.length; i++) {
            if (vowels.includes(stringToEncode[i])) {
                vowels.indexOf(stringToEncode[i]);
                stringToEncode = stringToEncode.replace(stringToEncode[i], vowels.indexOf(stringToEncode[i]) + 1);
            }
        }
        return stringToEncode;
    };

    const decode = stringToDecode => {
        for (let i = 0; i < stringToDecode.length; i++) {
            if (!isNaN(stringToDecode[i])) {
                stringToDecode = stringToDecode.replace(stringToDecode[i], vowels[stringToDecode[i] - 1]);
            }
        }
        return stringToDecode.replace("undefined", " ");
    };

    // decode("R1j3v Y1n1m1ndr1");
    // encode("Rajiv Yanamandra");
    // decode('h2ll4')
    // encode('This is an encoding test.')
    // encode('How are you today?')
    // encode('This is an encoding test.')
}