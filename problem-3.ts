const countWordOccurrences = (sentance : string , word: string): number =>{
    const wordsFromSentance = sentance.split(/\s+/)

    let numberOfTimesWordFound = 0

    for(let i = 0; i < wordsFromSentance.length ; i++){
        if(word === wordsFromSentance[i]){
            numberOfTimesWordFound++
        }
    }
    return numberOfTimesWordFound
}

console.log(countWordOccurrences("I love typescript", "typescript"))