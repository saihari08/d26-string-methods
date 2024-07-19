import logo from './logo.svg';
import './App.css';

function App() {
  
  
  let indWorldCup="Team India brings home T20 World Cup trophy after 17 years"


  return (
<div className="App">
    
  <button onClick={()=>{
  console.log(indWorldCup.toLocaleUpperCase());
  console.log(indWorldCup.toLocaleLowerCase());
  }}>UpperCase/LowerCase</button>

  <button onClick={()=>{
  
  let firstName="Rohit"
  let lastName="Sharma"

  let fullName=firstName.concat(lastName)
  console.log(fullName)
  let fullName2=`${firstName}${lastName}`;
  console.log(fullName2)
    }}>Concat</button>

  <button onClick={()=>{

  let msg= "     indWorldCupSquad       ";
  console.log(`==>${msg}<==`);
  console.log(`==>${msg.trimStart()}<==`);
  console.log(`==>${msg.trimEnd()}<==`);
  console.log(`==>${msg.trim()}<==`);

  }}>Trim/TrimStart/TrimEnd</button>

  <button onClick={()=>{
  let msg="india win t20 world cup 2024"
  console.log(msg)
  console.log(msg.padStart(100,"@")) 
  console.log(msg.padEnd(100,"*"))       
  }}>pasStart/padEnd</button>


  <button onClick={()=>{
  
  let slogan= "Jai SriRam";
  console.log(slogan.repeat(100));
  }}>Repeat</button>

  <button onClick={()=>{
  let msg="India is ranked 5th in the world's GDP rankings in 2024.India ranks no.1 in most populated countries in world 2024";

  console.log(msg.replace("India","Bharat"))
  console.log(msg.replaceAll("India","Bharat"))
  }}>Replace</button>

  <button onClick={()=>{
  let msg="India is ranked 5th in the world's GDP rankings in 2024.India ranks no.1 in most populated countries in world 2024";

  console.log(msg.split("a"))
  }}>Split</button>

 <button onClick={()=>{

let kalki2898AD="Kalki 2898 AD  is a 2024 Indian Telugu-language epic science fiction film directed by Nag Ashwin and produced by Vyjayanthi Movies."
console.log(kalki2898AD.slice(0,60))
console.log(kalki2898AD.substring(0,60))
console.log(kalki2898AD.substr(0,60))

 }}>slice/substring/substr</button>

<button onClick={()=>{
  
  let indWorldCup="Team India brings home T20 World Cup trophy after 17 years"
  console.log(indWorldCup.length)
  console.log(indWorldCup.at(0))
  console.log(indWorldCup[1])
  console.log(indWorldCup.charAt[0])
}}>length</button>


      <button onClick={()=>{
      let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      for(let i=0; i<indWorldCup.length;i++)
        console.log(`${alphabets.charAt(i)}---->${alphabets.charCodeAt(i)}`);
      }}>CharCodeAt</button>
      
      <button onClick={()=>{
        for(let i=100;i<4000;i++){
          console.log(`${i}--->${String.fromCharCode(i)}`)
        }
      }}>fromCharcode</button>



      <button onClick={()=>{
        let mobileNumber="+917013224115";
        console.log(mobileNumber.startsWith("+91"));
      
      let mailid="bsaihari08@gmail.com";
      console.log(mailid.endsWith("gmail.com"))
      }}>startWith/endsWith</button>



<button onClick={()=>{
  let indcaptain="RohitSharma";
console.log(indcaptain.indexOf("t"))
console.log(indcaptain.lastIndexOf("S"))

}}>indexof/lastindexof</button>
      
    <button onClick={()=>{
    let indWorldCup="Team India brings home T20 World Cup trophy after 17 years"
    console.log(indWorldCup.search(/t20/i))
    }}>search</button>


    
      <button onClick={()=>{}}></button>
      <button onClick={()=>{}}></button>
    </div>
  );
}

export default App;
