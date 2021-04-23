const doubles = function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function (val) {
        newArr.push(val * 2);
    });
    return newArr;
}



const evens = function onlyEvens(arr) {
    let newArr = [];
    arr.forEach(function (val) {
        if (val % 2 == 0) {
            newArr.push(val);

        }


    });
    return newArr;

}

const firstLast = function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function (str) {
        newArr.push(str.charAt(0) + str.charAt(str.length - 1));
        // newArr.push(str.charAt(str.length - 1));
    })
    return newArr;


}

const doubles = function doubleValuesWithMap(arr) {
    let newArr = [];
    arr.map(function (val) {
        newArr.push(val * 2);
    })
    return newArr;
}

const timesIndex = function valTimesIndex(arr,) {

    return arr.map(function (val, idx) {

        return val * idx;

    });

}

const byValue = function filterByValue(arr, key) {

    return arr.filter(function (val) {
        return val[key] !== undefined;

    });


}

const find = function (arr, key) {

    return arr.filter(function (val) {
        return key === val;

    })
    [0];


}

const findIn = function (arr, key, searchValue) {

    return arr.filter(function (val) {
        return val[key] === searchValue;

    })[0];
}

const removeVowels = function (str) {

    let vowels = "aeiou";
    return str.filter(function (char) {
        return vowels.indexOf(char) === -1;

    });
}

function removeVowels(str) {
    const vowels = "aeiou";
    return str
        //   .toLowerCase()
        //   .split("")
        .filter(function (val) {
            return vowels.indexOf(val) === -1;
        })
        .join("");
}

const doubleOddNumbers = function (arr) {
    let newArr = [];

    arr.map(function (val) {

        if (val % 2 !== 0) {

            newArr.push(val * 2)
        }
    })
    return newArr;


}