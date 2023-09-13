
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];


// using the simpler way STL: Standard Template Library
function merge(arr1, m, arr2, n) {
   for (let i = m, j = 0; j < n; i++, j++) {
    arr1[i] = arr2[j];
   }
   nums1.sort((a, b) => a - b);
}

// using the two pointer technique
function merge1(arr1, m, arr2, n) {
   let i = m - 1;
   let j = n -1;
   let k = m + n - 1;

   while(j >= 0) {
      if ( i >= 0 && arr1[i] > arr2[j]) arr1[k--] = arr1[i--];
      else arr1[k--] = arr2[j--];
   }
}

merge1(nums1, 3, nums2, nums2.length);
console.log(nums1);
console.log(nums2);