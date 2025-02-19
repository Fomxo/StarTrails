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
]

totalMoons = moonArray.length;

window.onload = function RandomizeMoons(){
  let result = moonArray[Math.floor((Math.random() * totalMoons))]
  //return result;
  document.getElementById("moonImage").innerText = result;
}
