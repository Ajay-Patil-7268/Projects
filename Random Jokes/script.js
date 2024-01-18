
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const getjoke=()=>{
    jokeContainer.classList.remove("fade");
    const url = 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f97061c2amsh2e70774e6d6acadp10fac6jsnfec30cde07bc',
		'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
	}
};
    
    fetch(url,options).then(response=>response.json()).then((data)=>{
    console.log(data)
    joke.innerHTML=data[0].joke
    jokeContainer.classList.add("fade");
    }).catch(err => console.error(err));
}
    
    btn.addEventListener("click",getjoke);
    //getjoke();


    
