async function MergeSort(array, n) {
   

   const block = document.querySelectorAll(".array")
   console.log(block)
   function waitforme(t) {
      return new Promise(resolve => {
         setTimeout(() => { resolve('') }, t);
      })
   }
   await mergeSort(block, 0, n-1);




   // l is for left index and r is
   // right index of the sub-array
   // of arr to be sorted */
   async function mergeSort(block, l, r) {
      if (l >= r) {
         return;//returns recursively
      }
      var m = l + parseInt((r - l) / 2);
      await mergeSort(block, l, m);
      await mergeSort(block, m + 1, r);
      await merge(block, l, m, r);
   }


   async function merge(block, l, m, r) {
      var n1 = m - l + 1;
      var n2 = r - m;

      // Create temp arrays
      var L = new Array(n1);
      var R = new Array(n2);

      // Copy data to temp arrays L[] and R[]
      for (var i = 0; i < n1; i++) {
        // L[i] = arr[l + i];
         block[l+i].style.backgroundColor ="#99ff33"
         L[i] = block[l+i].style.height
         await waitforme(55);
      }

      for (var j = 0; j < n2; j++) {
        // R[j] = arr[m + 1 + j];
         block[m+1+j].style.backgroundColor = "#cc0066";
         R[j] = block[m+1+j].style.height
         await waitforme(55);
      }
      // Merge the temp arrays back into arr[l..r]

      // Initial index of first subarray
       i = 0;

      // Initial index of second subarray
       j = 0;

      // Initial index of merged subarray
      var k = l;

      while (i < n1 && j < n2) {
         if (parseFloat(L[i]) <= parseFloat(R[j])) {

            //arr[k] = L[i];
            block[k].style.backgroundColor = "purple";
            block[k].style.height = L[i];
            i++;
            await waitforme(55);
         }
         else {
            //arr[k] = R[j];
            block[k].style.backgroundColor = "purple";
            block[k].style.height = R[j]
            await waitforme(55);
            j++;
         }
         k++;
      }

      // Copy the remaining elements of
      // L[], if there are any
      while (i < n1) {
        // arr[k] = L[i];
         block[k].style.height =L[i]
         block[k].style.backgroundColor = "purple"
         i++;
         k++;
         await waitforme(55);

      }

      // Copy the remaining elements of
      // R[], if there are any
      while (j < n2) {
         //arr[k] = R[j];
         block[k].style.height = R[j];
         block[k].style.backgroundColor = "purple"
         j++;
         k++;
         await waitforme(55);
      }
   }





   return (
      array
   );

}








export default MergeSort;
