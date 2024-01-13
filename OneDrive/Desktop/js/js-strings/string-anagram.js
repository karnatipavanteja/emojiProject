function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();
  
    // Sort the characters in the strings and compare them
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage
  const word1 = 'listen';
  const word2 = 'silent';
  console.log(isAnagram(word1, word2)); // Output: true
  