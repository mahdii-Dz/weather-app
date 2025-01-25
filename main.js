let search = document.getElementById('search');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('Pressure');
let form = document.querySelector('form');
let container = document.querySelector('.container')

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    if(search.value !== ''){
        searchweather();
    }
})

let id = '31e283b166efe1194a87cad9aaaedb17'
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const searchweather = () => {
    fetch(url + '&q=' + search.value)
    .then(respond => respond.json())
    .then(data => {
        console.log(data);
        if(data.cod == 200){
            city.querySelector('h4').innerText = data.name;
            city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/flat/32.png`;
            temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            temperature.querySelector('span').innerText = Math.round(data.main.temp);
            description.innerText = data.weather[0].description;
            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
        }
        else{
            container.classList.add('error');
            setTimeout(() =>{
                container.classList.remove('error'); 
            },1000)
        }
    })
    search.value = '';
}

const whenload = () =>{
    search.value = 'london';
    searchweather()
}
whenload();