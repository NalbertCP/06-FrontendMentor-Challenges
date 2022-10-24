/*Selecionando elementos no DOM*/
const selectWeek = document.querySelector("#select-week")
const chartTitle = document.querySelector("h2")
const totalWeekSpent = document.querySelector(".total-week-spent > div")

fetchAndAppend ()

/*Buscando os dados em data.json*/
async function fetchAndAppend (){
    const data = await (await fetch("./data.json")).json()
    appendChart(data["1stweek"])
    setBarsHeight(data["1stweek"])
    createWeekFilter(data)
    addFilterListener(data)
}
/*Renderizando o gráfico no componente*/
function appendChart(data){
    let components = data.reduce((acc, value)=>{
        return acc+= `
        <div class="day" id="${value.day}">
            <div class="flex chart-data">
                <div class="chart-bar"></div>
                <div class="chart-label">$${value.amount}</div>
            </div>
            <span>${value.day}</span>
        </div>`
    },"")
    document.querySelector(".chart").innerHTML = components
}
/*Adicionando altura às colunas do gráfico e destaque para o maior valor*/
function setBarsHeight(data){
    let maxAmount = data.reduce((acc, value)=> {
        if (acc < value.amount) acc = value.amount
        return acc
    }, 0)
    for (let chartBar of document.querySelectorAll(".chart-bar")){
        let amount = chartBar.nextElementSibling.innerHTML.slice(1)
        chartBar.style.height = `${(amount*6/maxAmount).toFixed(1)}em`
        maxAmount === Number(amount) ? chartBar.classList.add("biggest-bar") : null
    }
}

/*Criando filtro de semanas e respectivo event listener*/
function createWeekFilter(data){
    const options = Object.keys(data).reduce((acc, week)=>{
        return acc+= `<option value="${week}">${week.slice(0,-4)} week</option>`
    }, "")
    selectWeek.innerHTML = options

}
function addFilterListener(data){
    selectWeek.addEventListener("change",()=>{
        const totalSpent = data[selectWeek.value].reduce((acc, value)=>acc+=value.amount, 0)
        chartTitle.innerHTML = `Spending - ${selectWeek.value.slice(0,-4)} week`
        totalWeekSpent.innerHTML = `$${totalSpent.toFixed(2)}`

        document.querySelectorAll(".day").forEach((weekday, index)=>{
            const chartBar = weekday.querySelector(".chart-bar")
            chartBar.style.height = `0rem`
            chartBar.classList.contains("biggest-bar")? chartBar.classList.remove("biggest-bar") : null
            weekday.querySelector(".chart-label").innerHTML = `$${data[selectWeek.value][index].amount}`
        })
        setBarsHeight(data[selectWeek.value])
    })  
}
