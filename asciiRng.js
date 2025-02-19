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

window.onload = RandomizeMoons()
function RandomizeMoons(){
  let result = moonArray[Math.floor((Math.random() * totalMoons))]
  document.getElementById("moonImage").innerText = result;
  return result;
}
