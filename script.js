function firstNonRepeatedChar(str) {
 // Write your code here
	let arr={}
	for( let i=0;i<str.length;i++){
		if(arr[str.charAt(i)]===undefined){
			arr[str.charAt(i)]=1;
		}else{
			arr[str.charAt(i)]++;
		}

	}
	 for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
