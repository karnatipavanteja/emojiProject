function rotateArray(arr, k) {
    const n = arr.length;
    const splitIndex = n - k % n;
    const firstPart = arr.slice(0, splitIndex);
    const secondPart = arr.slice(splitIndex);
    const rotatedArray = secondPart.concat(firstPart);
    return rotatedArray;
  }
  
  
  const originalArray = [1, 2, 3, 4, 5, 6, 7];
  const rotated = rotateArray(originalArray, 3);
  console.log(rotated); 
  