function loadcoupons()
{
    document.getElementById("coupon").style.visibility='visible';
}
function closecoupon()
{
    document.getElementById("coupon").style.visibility='hidden';
}
function changeMode()
{
  let mybody=document.body;
  mybody.classList.toggle("mydark");
}
// let x = document.getElementById('out');
// let y = document.getElementById('weatherOut');
// function geolocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition)
//     }else{
//         x.innerText = "Geo Not Supported"
//     }
// }

// function showPosition(data){
//     console.log(data)
//     let latitude = data.coords.latitude;
//     let longitude = data.coords.longitude;
//     const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
//     //api calling
//     fetch(url,{method:'GET'})
//     //return promise
//     .then((res) => res.json())
//     // resolve promise
//     .then((data) => {
//         console.log(data)
//         let cityName = data.city.name
//         let temp = data.list[0].temp.day
//         y.innerText = `Your City is ${cityName} and temp is ${temp} °C`
//     })
    
//     x.innerText = `Latitude is ${latitude} and Longitude is ${longitude}`;
// }