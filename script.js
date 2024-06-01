function firstNonRepeatedChar(str) {
 // Write your code here
	 let charCount = {};
    for (let i=0;i<str.length;i++) {
        if (charCount[str.charAt(i)] === undefined) {
            charCount[str.charAt(i)] = 1;
        } else {
            charCount[str.charAt(i)]++;
        }
    }
	 for (let char of str) {
        if (charCount[char] === 1) {
            return char;
		
        }
    }
	return null;
}
/*const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
