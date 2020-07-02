console.log("Hello");

const uniq = (str, chr) => str.indexOf(chr) === str.lastIndexOf(chr);

const encodeDuplicate = str => [...str].map(chr => uniq(str.toLowerCase(), chr) ? "(" : ")").join``;

