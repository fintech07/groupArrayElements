function groupArrayElements(inputArray, N){
    // get length of the input array
    const lenOfArray = inputArray.length;

    // calculate the minimum size in groups
    const minSize = Math.floor(lenOfArray / N);

    // remained count of the groups with not minSize.
    const remainedCount = lenOfArray % N;

    let results = [];
    
    while (inputArray.length) {
        const chunkSize = remainedCount > 0 ? minSize + 1 : minSize;

        if (chunkSize < 1) 
          break;
      
        results.push(inputArray.splice(0, chunkSize));
    }
    
    return results;
    
}

const result = groupArrayElements([1,2,3,4,5], 3);
console.log(result);