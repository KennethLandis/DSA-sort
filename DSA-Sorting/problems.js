//3,5,7  - 2,4,9,11
function merge(arr1, arr2) {
    let arr1Idx = 0;
    let arr2Idx = 0;
    let result = [];
  
    while (arr1[arr1Idx] && arr2[arr2Idx]) {
      if (arr1[arr1Idx] < arr2[arr2Idx]) {
        result.push(arr1[arr1Idx]);
        arr1Idx++;
      } else {
        result.push(arr2[arr2Idx]);
        arr2Idx++;
      }
    }
  
    if (arr1[arr1Idx]) {
      result = result.concat(arr1.slice(arr1Idx));
    } else if (arr2[arr2Idx]) {
      result = result.concat(arr2.slice(arr2Idx));
    }
    return result;
  }
  
  //10,5,8,2,7
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
  
    return merge(left, right);
  }
  
  console.log(mergeSort([10,5,8,2,7]));
  
  function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  
  // 9,8,6,4,2,7,1,3
  function partition(arr, start, end) {
    // go until you find a value less than pivot
    // swap the value with the pivot pointer
    // increment the pivot pointer
    // at the end swap pivot with pivot pointer
    const pivot = arr[end-1];
    let pivotPtr = start;
    let num;
    for (let i=start; i<end-1; i++) {
      num = arr[i];
      if (num <= pivot) {
        swap(arr, pivotPtr, i);
        pivotPtr++;
      }
    }
    swap(arr, pivotPtr, end-1);
    return pivotPtr;
  }
  
  // console.log(partition([9,8,6,4,2,7,1,3]));
  
  function quickSort(arr, start=0, end=arr.length) {
    if (start >= end) {
      return arr;
    }
  
    let pivot = partition(arr, start, end);
    arr = quickSort(arr, start, pivot);
    arr = quickSort(arr, pivot+1, end);
    return arr;
  }
  
  // console.log(quickSort([9,8,6,4,2,7,1,3]));

  // ['a', 'ab', 'ccc'] - ['def', 'ace']
function mergeStrArrays(arr1, arr2) {
    let arr1Idx = 0;
    let arr2Idx = 0;
    let result = [];
  
    while (arr1[arr1Idx] && arr2[arr2Idx]) {
      let str1 = arr1[arr1Idx].toLowerCase();
      let str2 = arr2[arr2Idx].toLowerCase();
      let str1Ptr = 0;
      let str2Ptr = 0;
      let compare = 0;
      
      while (str1[str1Ptr] && str2[str2Ptr]) {
        compare = str1[str1Ptr].localeCompare(str2[str2Ptr]);
        if (compare !== 0) {
          break;
        } else {
          str1Ptr++;
          str2Ptr++;
        }
      }
  
      if (compare === -1) {
        result.push(arr1[arr1Idx]);
        arr1Idx++;
      } else if (compare === 1) {
        result.push(arr2[arr2Idx]);
        arr2Idx++;
      } else {
        if (!str1[str1Ptr]) { // strings were tied but this word is shorter
          result.push(arr1[arr1Idx]);
          arr1Idx++;
        } else {
          result.push(arr2[arr2Idx]);
          arr2Idx++;
        }
      }
    }

    if (arr1[arr1Idx]) {
        result = result.concat(arr1.slice(arr1Idx));
      } else if (arr2[arr2Idx]) {
        result = result.concat(arr2.slice(arr2Idx));
      }
      return result;
    }
    
    function bookSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
    
      let middle = Math.floor(arr.length/2);
      let left = bookSort(arr.slice(0, middle));
      let right = bookSort(arr.slice(middle));
    
      return mergeStrArrays(left, right);
    }

    // Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  
  function shuffle(arr) {
    let random;
  
    for (let i=0; i<arr.length; i++) {
      random = Math.floor(Math.random() * arr.length);
      swap(arr, i, random);
    }
    return arr;
  }
  