// Your code here
function mapToNegativize(sourceArray){
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element*-1)
    })
    return newArray
}

function mapToNoChange(sourceArray){
    let newArray = sourceArray
    return newArray
}

function mapToDouble(sourceArray){
    let newArray = []
    sourceArray.forEach(element => {newArray.push(element*2)})
    return newArray
}

function mapToSquare(sourceArray){
    let newArray = []
    sourceArray.forEach(element => {newArray.push(element**2)})
    return newArray
}

function reduceToTotal(sourceArray, startingPoint){
    let sum = 0
    sourceArray.forEach(element => {
        (typeof(startingPoint) === "number") ? (sum = startingPoint += element) : (sum += element)
    })
    return sum
}

function reduceToAllTrue(sourceArray){
    let value;
    sourceArray.forEach(element => {
        switch (!!element){
            case false: 
                value = false 
                break;
                default: 
                value = true
                break;
            }
        })
    return value
}

function reduceToAnyTrue(sourceArray){
    let value;
    sourceArray.forEach(element => {
        switch (!!element){
            case true: 
                value = true 
                break;
                default: 
                value = false
                break;
            }
        })
    return value
}
