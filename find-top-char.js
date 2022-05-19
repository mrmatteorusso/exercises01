function mostOccoredChar(string) {

    const stringArray = string.split('');

    const uniqueStringValue = new Set(stringArray)
    console.log(uniqueStringValue)
    const uniqueStringValueArray = [...uniqueStringValue]
    console.log(uniqueStringValueArray)
    counter = {}
    counters = 0

    for (let i = 0; i < uniqueStringValueArray.length; i++) {

        for (let j = i; j < stringArray.length; j++) {

            if (uniqueStringValueArray[i] === stringArray[j]) {
                console.log(uniqueStringValueArray[i] + " is found at position " + (j + 1) + " of " + string)

                // counter.push([uniqueStringValueArray[i], j])   

                continue
            }
        }

    }
    return uniqueStringValueArray
}

module.exports = mostOccoredChar