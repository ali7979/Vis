


async function BubbleSort(arr) {
  var temparr = [];
  const block = document.querySelectorAll(".array")
  // document.querySelector
  console.log(block)


  function waitforme(t) {
    return new Promise(resolve => {
      setTimeout(() => { resolve('') }, t);
    })
  }

  let n=arr.length
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < (arr.length - i - 1); j++) {
      block[j].style.backgroundColor = "#00FF00"
      block[j + 1].style.backgroundColor = "#00FF00"

      // Checking if the item at present iteration 
      // is greater than the next iteration
      if (parseFloat(block[j].style.height) > parseFloat(block[j + 1].style.height)) {
        // block.item(j).style.backgroundColor = "green"
        //block.item(j+1).style.backgroundColor = "green"
        // block[j].style.height=block[j+1].style.height
       /* var temp = arr[j]
         arr[j] = arr[j + 1]
         arr[j +1] = temp*/

        var temp = block[j].style.height
        block[j].style.height = block[j + 1].style.height
        block[j + 1].style.height = temp
        await waitforme(55);
        // console.log(block[j].height)
        // block.style.height ="20px"
        //block[j].style.height





        // If the condition is true then swap them
         
      }
      block[j].style.backgroundColor = "red"
      block[j + 1].style.backgroundColor = "red"
    }
    block[n-1].style.backgroundColor = "purple"
    n=n-1;
  }

  // Print the sorted array
  //console.log("zb");
  for (i = 0; i < arr.length; i++) {
    temparr.push(arr[i]);
  }
  


  return (
    (temparr)



  );

}
export default BubbleSort;
