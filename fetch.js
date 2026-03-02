let button = document.querySelector("button")
let ol = document.querySelector("ol")

button.addEventListener("click",async ()=>{
    let url = "https://dummyjson.com/quotes"
    let url_show = await fetch(url);
    let response = await url_show.json()
    console.log(response);
    response.quotes.forEach(qoats =>{
        if(qoats.author !== "Rumi"){
            let li = document.createElement("li")
            li.textContent = `${qoats.author} - ${qoats.quote}`
            ol.appendChild(li)
        }
    })
})
