
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

function merge(arr1, m, arr2, n) {
   for (let i = m, j = 0; j < n; i++, j++) {
    arr1[i] = arr2[j];
   }
   nums1.sort((a, b) => a - b);
}


merge(nums1, 3, nums2, nums2.length);
console.log(nums1);
console.log(nums2);