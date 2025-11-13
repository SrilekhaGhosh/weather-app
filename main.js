
const output = document.querySelector("#output");
const input = document.querySelector("input");
const addBtn = document.querySelector(".btn");





const apiCall = async () => {
   

    const inputVal = input.value.trim()
    

    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${inputVal}&aqi=no`)
    const result = await data.json();
    console.log(result);
    if(result.error){
        alert("please enter a valid city name")
    }

    // output.innerHTML=result.current.temp_c
    //  output.innerHTML+=result.current.feelslike_c 

    const temp = document.createElement("p")
   
    temp.className = "tempt"
    temp.textContent = ` ${result.current.temp_c}°`
    const feelLike = document.createElement("p")
 
    feelLike.className = "feel"
    feelLike.textContent = `feels like ${result.current.feelslike_c}°`
    const div = document.createElement("div")
    div.append(temp, feelLike)
    const img = document.createElement("img")
   
    img.className = "logo"


    if (result.current.temp_c < 10) {
        img.src = "animated/snowy-1.svg"
    }

    if (result.current.temp_c > 20) {
        img.src = "animated/day.svg"
    }

    if (result.current?.condition.text === "Mist" || result.current?.condition.text === "Cloudy" || result.current?.condition.text.includes("cloudy")) {
        img.src = "animated/cloudy-day-1.svg"
    }

    if (result.current?.condition.text === "Clear") {
        img.src = "animated/night.svg"
    }

    const container = document.createElement("div")
    container.append(img, div)
    container.className = "wrapper"


    output.innerHTML = ""
    output.append(container)
       input.innerHTML=""
 



    // if(!result.ok){
    //     alert("please enter a proper city name")
    //     return;
    // }

    //    console.log(output);


}

   



// input.addEventListener("change", apiCall)
addBtn.addEventListener("click", apiCall)


input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') apiCall()
})



