// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
    // Write your code here
    if(array.length==1) return array[0]
    else if(array.length==0) return -1;
    let first = array[0];
    let second = -1;
    for (let i of array) {
      if (i > first) {
        second = first;
        first = i;
      } else if (i > second && i != first) {
        second = i;
      }
    }
    return second;
  }
  
  // Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
  function calculateFrequency(string) {
    // Write your code here
    let freq = new Array(26).fill(0);
    let result = {};
    for (let i = 0; i < string.length; i++) freq[string.charCodeAt(i) - 97]++;
    for (let i = 0; i < freq.length; i++) {
      if (freq[i] > 0) {
        let key = String.fromCharCode(i + 97);
        result[key] = freq[i];
      }
    }
    return result;
  }
  
  // Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
  function flatten(unflatObject) {
    // Write your code here
    let result = {};
    for (let i in unflatObject)
      if (typeof unflatObject[i] == "object" && unflatObject[i] !== null) {
        var flat = flatten(unflatObject[i]);
        for (var x in flat) result[i + "." + x] = flat[x];
      } else result[i] = unflatObject[i];
    return result;
    
  //   let stringObj = JSON.stringfy(unflatObject)
  //   let result = {}
  //   for(let i = 0;i<stringObj.length;i++){
  //     if(stringObj.charAt(i)=='"'){
  //        i++
  //        let key = ""
  //        while(stringObj.charAt(i)!='"') key+=stringObj.charAt(i++)
  //        i+=2
  //        if(!result.hasOwn(key)) {
  //           result[key] = 
  //        }
  //     } else if(stringObj.charAt(i)==':'){
        
  //     } else if()
  //   }
  }
  
  // Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
  function unflatten(flatObj) {
    // Write your code here
    const result = {};
    for (const key in flatObj) {
      const value = flatObj[key];
      const keyParts = key.split(".");
      let current = result;
      for (let i = 0; i < keyParts.length; i++) {
        const part = keyParts[i];
        if (i === keyParts.length - 1) {
            current[part] = value;
        } else {
          if (keyParts[i + 1].match(/^\d+$/)) {
            if (!current[part]) {
              current[part] = [];
            }
          } else {
            if (!current[part]) {
              current[part] = {};
            }
          }
          current = current[part];
        }
      }
    }
    return result;
  }
  