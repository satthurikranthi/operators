import logo from './logo.svg';
import './App.css';

function App() {
  let score =1;

  return (
    <div className="App">
      <button type="buttton" onClick={()=>{
        let a=10+2;
         a=10-2;
        a=10*2;
         a=10/2;
         a=10%2;
        
        console.log(a)
        
        


      }}>ArthemticOperators</button>
      <button type="button" onClick={()=>{
        score ++;
        console.log(score);

      }}>Increment</button>


<button type="button" onClick={()=>{
        score --;
        console.log(score);

      }}>decrement</button>



<button type="button" onClick={()=>{
   let a = 22;
   a =+ 22;
   a *= 3;
   a -= 6;
   console.log(a)

   
        


      }}>AssignmentOperators</button>

<button type="button" onClick={()=>{
  let englishMarks = 35;


  console.log(englishMarks == 35);
  console.log(englishMarks >= 40);
  console.log(englishMarks <= 64);
  console.log(englishMarks != 35);
  console.log(englishMarks < 55);
  console.log(englishMarks > 45);

   
        


      }}>ComparisionOperator</button>


<button type="button" onClick={()=>{
  let engmarks =35;
  if(engmarks >= 35){
  
    console.log("student is passed in english")
  }else{
    
  console.log("student is failed in english")

  }


}}>if-else</button>

  
   
        



    </div>
  );
}

export default App;
