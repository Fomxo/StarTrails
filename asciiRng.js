const moonArray = [
`       _..._     
     .:::::::.    
    :::::::::::
    ::::::::::: 
    `:::::::::'  
      `':::'' 
`
,
          `       _..._     
               .::::. `.    
              :::::::.  :
              ::::::::  :  
              `::::::' .'  
                `'::'-' 
          `
,
`
       _..._     
     .::::  `.    
    ::::::    :
    ::::::    :  
    `:::::   .'  
      `'::.-' 
`
,
          `       _..._     
               .::'   `.    
              :::       :
              :::       :  
              `::.     .'  
                `':..-'    
          `
,
`       _..._     
     .'     `.    
    :         :
    :         :  
    `.       .'  
      `-...-'  
`
,
          `       _..._     
               .'   `::.    
              :       :::
              :       :::  
              `.     .::'  
                `-..:''  
          `
,
`       _..._     
     .'  ::::.    
    :    ::::::
    :    ::::::  
    `.   :::::'  
      `-.::''   
`
,
          `       _..._     
               .' .::::.    
              :  ::::::::
              :  ::::::::  
              `. '::::::'  
                `-.::''  
          `
,
`       _..._     
     .:::::::.    
    :::::::::::
    :::::::::::  
    `:::::::::'  
      `':::''  
`
`
];

//const moonArray = [`1`, `2`, `3`, `4`];

totalMoons = moonArray.length;
function RandomizeMoons(){
  let result = moonArray[Math.floor((Math.random() * totalMoons))]
  document.getElementById("moonImage").innerText = result;
  return result;
}

window.onload = RandomizeMoons();
