/*Selecionando elementos do DOM*/
const ownerInput = document.querySelector("#owner-name")
const numberInput = document.querySelector("#card-number")
const mounthInput = document.querySelector("#exp-mounth")
const yearInput = document.querySelector("#exp-year")
const cvcInput = document.querySelector("#cvc-code")
const mainForm = document.querySelector(".before-send")
const formSent = document.querySelector(".form-sent")

/*Criando manipulares de eventos*/
const cardsEvents = cardEventsHandler()
const formEventHandler = formHandler()

/*Atribuindo event listeners aos elementos*/
ownerInput.addEventListener("input", cardsEvents.changeOwnerName)
numberInput.addEventListener("input", cardsEvents.changeCardNumber)
mounthInput.addEventListener("input", cardsEvents.changeExpMouth)
yearInput.addEventListener("input", cardsEvents.changeExpMouth)
cvcInput.addEventListener("input", cardsEvents.changeCvcCode)
mainForm.addEventListener("submit", (event) => {
    formEventHandler.main(event)
})
formSent.addEventListener("submit", (event) => {
    event.preventDefault()
    formEventHandler.isFlagTrue() ? mainForm.submit() : null
})

/*Função: manipulando enventos do formulário*/
function formHandler() {
    let flag = false
    return {
        main(event) {
            flag = true
            event.preventDefault()
            this.clearErrors()
            this.validadeOwnerName()
            this.validateCardNumber()
            this.validateEmptyInputs()
            if (flag === true) {
                mainForm.classList.add("hide")
                formSent.classList.add("show")
            }
        },
        isFlagTrue() {
            return flag
        },
        //Removendo todos os erros do formulário (reset do formulário)
        clearErrors() {
            for (let error of document.querySelectorAll(".input-error")) {
                error.remove()
            }
            for (let input of document.querySelectorAll("input")) {
                input.classList.remove("invalid-input")
            }
        },
        //Criando span de error em caso de entradas invalidas no formulário
        createError(message) {
            const error = document.createElement("span")
            error.setAttribute("class", "input-error")
            error.innerHTML = message
            return error
        },
        //Validando entradas vazias em todos os campos do formulário
        validateEmptyInputs() {
            const expDate = document.querySelector(".exp-date-form")
            const fields = document.querySelectorAll(".field")
            for (let field of fields) {
                const input = field.querySelector("input")
                if (input.value === "") {
                    field.appendChild(this.createError("can't be blank."))
                    input.classList.add("invalid-input")
                    flag = false
                }
            }
            if (yearInput.value === "" || mounthInput.value === "") {
                expDate.appendChild(this.createError("can't be blank"))
                yearInput.value === "" ? yearInput.classList.add("invalid-input") : null
                mounthInput.value === "" ? mounthInput.classList.add("invalid-input") : null
                flag = false
            }
        },
        //Validando o campo de ownername em caso de entrada invalida
        validadeOwnerName() {
            if (ownerInput.value.length < 6) {
                ownerInput.parentElement.appendChild(this.createError("must have at leats 6 caracters."))
                flag = false
                ownerInput.classList.add("invalid-input")
            }
        },
        //Validando o campo de vencimento do cartão em caso de entrada inválida
        validateCardNumber() {
            if (numberInput.value.length < 19) {
                numberInput.parentElement.appendChild(this.createError("must have 16 caracters."))
                flag = false
                numberInput.classList.add("invalid-input")
            }
        }
    }
}
/*Função: adicionando dados aos cartões interativos*/
function cardEventsHandler() {
    const cardNumber = document.querySelector(".card-number")
    const ownerName = document.querySelector(".owner-name")
    const expiringDate = document.querySelector(".exp-date-card")
    const cvcCode = document.querySelector(".card-code")
    return {
        changeOwnerName() {
            try {
                ownerInput.value = ownerInput.value
                    .toUpperCase()
                    .match(/[a-zA-Z\s]/g)
                    .join("")
            } catch (error) {
                ownerInput.value = ""
            }
            ownerName.innerHTML = ownerInput.value.toUpperCase()
        },
        changeCardNumber() {
            numberInput.value = numberInput.value.replace(/\D+/g, "")
            numberInput.value = numberInput.value.replace(/([0-9]{4})/g, "$1 ").trimEnd()
            cardNumber.innerHTML = numberInput.value
        },
        changeExpMouth() {
            mounthInput.value = mounthInput.value.replace(/\D+/g, "").slice(0, 2)
            if (Number(mounthInput.value) > 12) mounthInput.value = 12
            yearInput.value = yearInput.value.replace(/\D+/g, "").slice(0, 2)
            const mounth = `0${mounthInput.value}`.slice(-2)
            const year = `0${yearInput.value}`.slice(-2)
            expiringDate.innerHTML = `${mounth}/${year}`
        },
        changeCvcCode() {
            cvcInput.value = cvcInput.value.slice(0, 3).replace(/\D+/g, "")
            cvcCode.innerHTML = `000${cvcInput.value}`.slice(-3)
        }
    }
}
