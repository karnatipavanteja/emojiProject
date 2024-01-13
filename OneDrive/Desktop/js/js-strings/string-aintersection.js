function arrayIntersection(arr1, arr2) {
    
    const set1 = new Set(arr1);
    
   
    const intersection = arr2.filter(element => set1.has(element));
    
    return intersection;
  }

  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  console.log(arrayIntersection(array1, array2)); // Output: [3, 4, 5]
  