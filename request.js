const overlay=document.getElementById('overlay')

// Get location from local storage
let locations;
if(localStorage.getItem('locations')){
    locations = localStorage.getItem('locations')
}
else{
    localStorage.setItem('locations','Toshkent')
    locations = localStorage.getItem('locations')
}
const getData=async(location)=>{
    overlay.classList.remove('hide');
    const req= await fetch(`https://islomapi.uz/api/present/day?region=${location}`)
    const data= await req.json();
    overlay.classList.add('hide');
    return(data)
}