
import './App.css';


async function SelectionSort(Arr) {
    var inputArr=Arr;
    const block = document.querySelectorAll(".array")
    // function selectionSort(inputArr) { 
    let n = inputArr.length;


    function waitforme(t) {
        return new Promise(resolve => {
          setTimeout(() => { resolve('') }, t);
        })
      }

    for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        block[min].style.backgroundColor = "purple";
        for (let j = i + 1; j < n; j++) {
            
            block[j].style.backgroundColor = "white"
            await waitforme(55);
          //  if (inputArr[j] < inputArr[min]) {
            if(parseFloat( block[j].style.height)<parseFloat( block[min].style.height)){
                min = j;
                block[min].style.backgroundColor = "#cc0066";
                await waitforme(55);
            }
            block[j].style.backgroundColor = "red"
           await waitforme(55);
        }
        if (min !== i) {
            // Swapping the elements
            /*let tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;*/
        var temp = block[i].style.height
        block[i].style.height = block[min].style.height
        block[min].style.height = temp
        await waitforme(55);

        }
       

    }




    return (
        inputArr

    );

}








export default SelectionSort;
