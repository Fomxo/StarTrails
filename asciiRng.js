const MoonArray = [
      _..._     
     .:::::::.    
    :::::::::::
    ::::::::::: 
    `:::::::::'  
      `':::'' 
,
       _..._     
     .::::. `.    
    :::::::.  :
    ::::::::  :  
    `::::::' .'  
      `'::'-' 
      
,

       _..._     
     .::::  `.    
    ::::::    :
    ::::::    :  
    `:::::   .'  
      `'::.-' 
,
       _..._     
     .::'   `.    
    :::       :
    :::       :  
    `::.     .'  
      `':..-'    
,
       _..._     
     .'     `.    
    :         :
    :         :  
    `.       .'  
      `-...-'  
,
       _..._     
     .'   `::.    
    :       :::
    :       :::  
    `.     .::'  
      `-..:'' 
,
       _..._     
     .'  ::::.    
    :    ::::::
    :    ::::::  
    `.   :::::'  
      `-.::''   
,
       _..._     
     .' .::::.    
    :  ::::::::
    :  ::::::::  
    `. '::::::'  
      `-.::'' 
,
       _..._     
     .:::::::.    
    :::::::::::
    :::::::::::  
    `:::::::::'  
      `':::''
];

totalMoons = moonArray.length;
function RandomizeMoons(){
  let result = moonArray[Math.floor((Math.random() * totalMoons))]
  document.getElementById("moonImage").innerText = result;
  return result;
}

window.onload = RandomizeMoons();
