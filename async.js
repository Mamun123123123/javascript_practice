let button = document.querySelector("button")
let ol = document.querySelector("ol")
button.addEventListener("click", async ()=>{
    let url = "https://dummyjson.com/todos"
    try {
        let response = await fetch(url)
        let data = await response.json()
        console.log(data);
        data.todos.forEach(item => {
            if(item.completed === true){
                let li = document.createElement("li")
                li.textContent = `id : ${item.id} - ${item.todo}`
                ol.appendChild(li)
            }
        })
        
    } catch (error) {
        console.log(error);
        
    }
})