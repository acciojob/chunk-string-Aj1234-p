function stringChop(str, size) {
  let i =0, n = str.length;
   let res = [];
	if(n===0) return res;
   while(i<n){
	   let string = "";
	   if(i+size<=n)
	    string = str.substr(i,size);
	   else
		string = str.substr(i,n);
	   res.push(string);
	   i+=size;
   }
	return res;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
