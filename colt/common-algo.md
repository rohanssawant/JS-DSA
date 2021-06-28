# Frequency Counter

Write function same which accepts 2 arrays and return true if every value in an array has corresponding value squared in second array

```
same([1, 2, 3], [1, 4, 9])  //true
same([1, 2, 3], [4, 1, 9])  //true
same([1, 2, 3], [1, 4])  //false
```

###### Regular Approach O(n\*2)

```
function same(arr1, arr2) {
  // check if arr len are same
  if (arr1.length !== arr2.length) return false;

  //iterate and check squares
  for (a1 of arr1) {
    let arrIndex = arr2.indexOf(a1 ** 2);
    if (arrIndex === -1) return false;
    arr2.splice(arrIndex, 1);
  }
  return true;
}
```

_indexOf() takes o(n) to run_

###### Refracted Approach O(n)

```
function same (arr1, arr2){
    let freqArr1 = {}
    let freqArr2 = {}

    for(a of arr1){
    freqArr1[a] = (freqArr1[a] || 0) + 1
    }

    for(a of arr2){
       freqArr2[a] = (freqArr2[a] || 0) + 1
    }

    for(key in freqArr1){
        if(! (key**2 in freqArr2))
        return false
        if(freqArr1[key] !== freqArr2[key ** 2])
        return false;
    }
    return true

}
clear()
same([1, 2, 3, 3], [1, 4,9, 9])

```

```
    if(freqArr1[a]){
        freqArr1[a] += 1
    }
    else{
        freqArr1[a] = 1
    }
```
