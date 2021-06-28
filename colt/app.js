function same(arr1, arr2) {
  // check if arr len are same
  if (arr1.length !== arr2.length) return false;

  //iterate and check squares
  for (a1 of arr1) {
    let arrIndex = arr2.indexOf(a1 ** 2);
    if (arrIndex === -1) return false;
    arr2.splice(arrIndex, 1); // so that double things wont come
  }
  return true;
}

console.log(same([1, 2, 3], [1, 8, 6]));
