function rot13(str) {
    let newStr = ""
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] == " " || str[i] == "!" || str[i] == "?" || str[i] == "." ) {
        newStr = newStr + str[i];      
      } else {
        let temp = str.charCodeAt(i) + 13;
  
        if (temp > 90) {
          temp = (temp - 65) % 26 + 65;
        }
  
        newStr = newStr + String.fromCharCode(temp);
      }
    }
    
    return newStr;
  }
  
  rot13("SERR PBQR PNZC");