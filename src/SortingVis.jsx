//import React, { Component, useState } from 'react';
import React, { useState, useEffect } from 'react';
//import App from './App';
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
//import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './SortingVis.css'
//import { render } from '@testing-library/react';
import BubbleSort from './BubbleSort'
import InsertionSort from './InsertionSort';
import QuickSort from './QuickSort';
import MergeSort from './MergeSort';
import SelectionSort from './SelectonSort';


function SortingVis() {
  var ar = [];
  var d=170
  const [aus, setstate] = useState([ar])
  const[sizear,setSize]=useState(d)
  const[bo,setvar]=useState(false)        // party pop anim
  const[txt,settxt]=useState("Sorting Visualiser")    // text
  const[clr,setclr]=useState("white")           // color of text
 const[btnswitch,setswitch]=useState(false)         // for turning all buttons off while sorting button 




 // WHEN CHANGING TO LANDSCAPE MODE IN MOBILE
 var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
    window.location.reload()
}, false); 


 
  useEffect(() => {
    //  it's like componentWillMount
    resetAr();
    // eslint-disable-next-line
    }, [])

    
    
    var zb=document.getElementsByClassName(".zb")
    console.log(zb)

    /*async function colordef(){
      const block = document.querySelectorAll(".array")
      for(let i=0;i<sizear;i++){
        block[i].style.backgroundColor = "red"
        await waitforme(55)}
    }*/
  
  const resetAr = async() => {
    var arr=[]
   // const block = document.querySelectorAll(".array")
    for (let i = 0; i < sizear; i++) {
      arr.push(Math.floor(Math.random() * (430 - 5) + 5))
      
    }
    

    setstate(arr)

  }


  const { wid, hei } = useWindowSize()

 const comp="Completed Sorting"
  async function bubblesort() {
    setswitch(true)
    var aar = await BubbleSort(aus)
    console.log(aar)
    setstate(aar)
    setvar(true)
    settxt(comp)
    setclr("#00ffff")
    setswitch(false)
    
 
  }


  async function insertionsort() {
    setswitch(true)
    var ins =await  InsertionSort(aus)
    console.log(ins)
    setstate(ins)
    setvar(true)
    settxt(comp)
    setclr("#aaff00")
    
  }

  async function quicksort() {
    setswitch(true)
    console.log(aus)
    var inss =await QuickSort(aus,aus.length)
    console.log(inss)
    setstate(inss)
    setvar(true)
    settxt(comp)
    setclr("#39FF14")
    
  }
  async function selsort() {
    setswitch(true)
    console.log(aus)
    var inss =await SelectionSort(aus)
    console.log(inss)
    setstate(inss)
    setvar(true)
    settxt(comp)
    setclr("#39FF14")
    
  }


 async function mergesort() {
  setswitch(true)
    console.log(aus)
   var inss = await MergeSort(aus,aus.length)
   console.log(inss)
   setstate(inss)
    setvar(true)
    settxt(comp)
    setclr("#39FF14")
    
    
  }

  
 
  const slider=()=>{
  let d= document.getElementById('inn').value
  console.log(d)
  setSize(d)
  resetAr()
  
  
  }
  var ReactRotatingText = require('react-rotating-text');

  return (

    <>
    

     <Confetti 
      width={wid}
      height={hei} 
      run={bo}/>
      
      <div className='cont'>
     
        <h1 style={{ fontFamily: 'scriptina', color: clr, marginBottom: "2rem",marginTop:"-12rem",fontSize:"9rem" }}>{txt}
       </h1>
       <h3  style={{fontFamily: "Sofia",fontSize:"3rem",marginBottom: "4rem",marginTop:"-3rem",marginLeft:"9rem"}}>
<ReactRotatingText color="#989898" items={['🕒Bubble Sort : θ(n^2)','🕒Insertion Sort : θ(n^2)','🕒Merge Sort : θ(nLogn) ','🕒Quick Sort : θ(nLogn)','🕒Selection Sort : θ(n^2)']} />
</h3>
       
        
        
        {aus.map((value, id) => (

          <div className="array"
            key={id}
            
            style={{
            backgroundColor:"red",height: `${value/10}rem`       //or value px
            }}>
          </div>



        ))}
         
      
        <div className="setbtn">
       
          <button disabled={btnswitch} onClick={resetAr} >GENERATE NEWW ARRAY</button>
          <button disabled={btnswitch} onClick={bubblesort}>Bubble Sort</button>
          <button disabled={btnswitch} onClick={insertionsort}>Insertion Sort</button>
          <button disabled={btnswitch} onClick={quicksort}>Quick Sort</button>
          <button disabled={btnswitch} onClick={selsort}>Selection Sort</button>
          <button disabled={btnswitch} onClick={mergesort}>Merge Sort</button>
          <label  className="form-label" >Set Size</label>
          <input disabled={btnswitch} type="range" className="form-range" min="0" max="170"   id="inn"  onChange={slider}></input>
          
        </div>
        
        <div className="ftt"  class="font-effect-neon" style={{fontFamily: "hel"}}>
        <ReactRotatingText items={['A MINI PROJECT ON SORTING VISUALISER','DEVELOPED BY ZOHEB','FOLLOW ME ON :- ']} />
        </div>
        <div class="phone">
</div>
        <div class="message">
  Please rotate your device!
</div>
      </div>
     
      <ul> 
  <li>
    <a href="https://www.linkedin.com/in/zoheb-alam-6a5881212/" target="_blank" rel="noreferrer">
      <i class="fa fa-linkedin" aria-hidden="true"></i>
      <span> - Linkedin</span>
    </a>
  </li>
  <li>
    <a href="twitter.com">
      <i class="fa fa-twitter" aria-hidden="true"></i>
      <span> - Twitter</span>
    </a>
  </li>
  <li>
    <a href="mailto:zohebzob@gmail.com">
      <i class="fa fa-envelope" aria-hidden="true"></i>
      <span> - Mail</span>
    </a>
  </li>
  <li>
    <a href="instagram.com">
      <i class="fa fa-instagram" aria-hidden="true"></i>
      <span> - Instagram</span>
    </a>
  </li>
  <li>
    <a href="https://github.com/ali7979" target="_blank" rel="noreferrer">
      <i class="fa fa-github" aria-hidden="true"></i>
      <span> - Github</span>
    </a>
  </li>
  </ul>

  






  



  
              
    </>
  );


}

export default SortingVis;