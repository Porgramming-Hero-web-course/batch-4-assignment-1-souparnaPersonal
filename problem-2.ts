const removeDuplicates = (arrayOfNumbers: number[]): number[] => {
    let arrayWithoutDuplicateNumber: number[] = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (!arrayWithoutDuplicateNumber.includes(arrayOfNumbers[i])) {
            arrayWithoutDuplicateNumber.push(arrayOfNumbers[i]);
        }
    }
    return arrayWithoutDuplicateNumber;
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5 ]));