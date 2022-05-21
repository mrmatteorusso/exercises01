function mostOccoredChar(string) {

    const stringArray = string.split('');

    const uniqueStringValue = new Set(stringArray)
    console.log(uniqueStringValue)
    const uniqueStringValueArray = [...uniqueStringValue]
    console.log(uniqueStringValueArray)
    counter = {}

    for (let i = 0; i < uniqueStringValueArray.length; i++) {

        for (let j = i; j < stringArray.length; j++) {

            if (uniqueStringValueArray[i] === stringArray[j]) {
                console.log(uniqueStringValueArray[i] + " is found at position " + (j + 1) + " of " + string)

                // counter.push([uniqueStringValueArray[i], j]) 
                let letter = uniqueStringValueArray[i]
                if (!counter[letter]) {
                    counter[letter] = 0
                }
                counter[letter] += 1

                continue
            }
        }

    }
    return counter
}

module.exports = mostOccoredChar