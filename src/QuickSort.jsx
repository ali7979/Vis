import './App.css';
import './SortingVis.css'
import './index.css';


async function QuickSort(arr,n)
	{
		const block = document.querySelectorAll(".array")
		console.log(block)
		function waitforme(t) {
			return new Promise(resolve => {
			  setTimeout(() => { resolve('') }, t);
			})
		  }
		await qsort(arr,0,n-1);


		async function qsort(arr,low,high){
		if (low< high)
		{

			var pi =await partition(arr, low, high);
			console.log(high)
			console.log(low)

			await qsort(arr, low, pi - 1);
			await qsort(arr, pi + 1, high);
			for(let i=0;i<=high;i++){
				block[i].style.backgroundColor = "purple"}
		}
	
	 async function swap(arr,i, j)
	{
		block[i].style.backgroundColor = "white"
		block[j].style.backgroundColor = "white"
		var temp = arr[i];
		/*arr[i] = arr[j];
		arr[j] = temp;
		var temp = block[i].style.height*/
        block[i].style.height = block[j].style.height
        block[j].style.height = temp
		await waitforme(55)
		block[i].style.backgroundColor = "red"
		block[j].style.backgroundColor = "red"
	}
	 
	
	 async function partition(arr,low,high)
	{
		 
		// pivot
		var pivot = arr[high];
		block[high].style.backgroundColor = "#00FF00"
		console.log(pivot)
		var i = (low - 1);
	 
		for(let j = low; j <= high - 1; j++)
		{
			 
			// If current element is smaller
			// than the pivot
			if (arr[j] < pivot)
			{
				 
				// Increment index of
				// smaller element
				i++;
				await swap(arr, i, j);
			}
		}
		swap(arr, i + 1, high);
		 //block[i].style.backgroundColor = "red"
		 //block[i+1].style.backgroundColor = "red"
		 await waitforme(55)
		return (i + 1);
	}

}
	
	
	return(
		arr
	);
}
	
export default QuickSort;
