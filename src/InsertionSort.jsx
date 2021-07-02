




async function InsertionSort(inputArr) {

  const block = document.querySelectorAll(".array")
  var tem = [];

  console.log(block);
  function waitforme(t) {
    return new Promise(resolve => {
      setTimeout(() => { resolve('') }, t);
    })
  }



  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    // block[i].style.backgroundColor = "#00FF00"
    //let current = inputArr[i];
    let current = block[i].style.height;
    block[i].style.backgroundColor = "#00FF00"

    // The last element of our sorted subarray
    let j = i - 1;
    // let j = block[i-1].style.height;
    block[j].style.backgroundColor = "blue"
    //block[i].style.backgroundColor = "#00FF00"
    // while ((j > -1) && (current < inputArr[j])) {

    while ((j > -1) && (parseFloat(current) < parseFloat(block[j].style.height))) {
      block[j + 1].style.height = block[j].style.height
      inputArr[j + 1] = inputArr[j];
      j--;
      //block[j].style.height = block[j-1].style.height

      await waitforme(55);
      // 
    }
    block[i - 1].style.backgroundColor = "purple"
    inputArr[j + 1] = current;
    block[j + 1].style.height = current;
  }

  let i = n - 1;
  block[i].style.backgroundColor = "purple"

  for (let i = 0; i < inputArr.length; i++) {
    tem.push(inputArr[i]);
  }



  return (
    tem

    

  );

}
export default InsertionSort;