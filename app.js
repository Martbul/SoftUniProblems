window.addEventListener('load', solve);

function solve() {

        let carModelInput = document.getElementById("car-model")
        let carYearInput = document.getElementById("car-year")
        let partNameInput = document.getElementById("part-name")
        let partNumberInput = document.getElementById("part-number")
        let carCondotionInput = document.getElementById("condition")
        let nextBtn = document.getElementById("next-btn")
        let ul = document.querySelector('.info-list')
        let newUL = document.querySelector('.confirm-list')
        let img = document.getElementById('complete-img')
        let par = document.getElementById('complete-text')

        nextBtn.addEventListener("click", onInfo);


        function onInfo(e) {
                e.preventDefault();
                img.style.visibility = "hidden"

                let carModelValue = carModelInput.value
                let carYearValue = carYearInput.value
                let partNameValue = partNameInput.value
                let partNumberValue = partNumberInput.value
                let carCondotionValue = carCondotionInput.value

                if(carModelValue ===""|| carYearValue ===""|| partNameValue ===""|| partNumberValue ===""|| carCondotionValue ===""|| carYearValue < 1980 || carYearValue >2023){
                        return
                }
                else{
                        let info = createInfo(carModelValue,carYearValue,partNameValue,partNumberValue,carCondotionValue)
                        ul.appendChild(info)

                        carModelInput.value = ''
                        carYearInput.value = ''
                        partNameInput.value = ''
                        partNumberInput.value = ''
                        carCondotionInput.value = ''
                         nextBtn.disabled = true
                }
                
       
        }

        function createInfo(carModelValue,carYearValue,partNameValue,partNumberValue,carCondotionValue){
                let liElement = document.createElement("li");
                liElement.classList.add('part-content')
            
            
                let article = document.createElement("article")

                let carModelUnit =  document.createElement("p");
                carModelUnit.textContent = `Car Model: ${carModelValue}`

                let carYearUnit =  document.createElement("p");
                carYearUnit.textContent = `Car Year: ${carYearValue}`

                let partNameUnit =  document.createElement("p");
                partNameUnit.textContent = `Part Name: ${partNameValue}`

                let partNumberUnit =  document.createElement("p");
                partNumberUnit.textContent = `Part Number: ${partNumberValue}`

                let carConditionUnit =  document.createElement("p");
                carConditionUnit.textContent = `Condition: ${carCondotionValue}`

                article.appendChild(carModelUnit)
                article.appendChild(carYearUnit)
                article.appendChild(partNameUnit)
                article.appendChild(partNumberUnit)
                article.appendChild(carConditionUnit)

                let editBtn = document.createElement("button")
                editBtn.classList.add('edit-btn')
                editBtn.textContent = 'Edit'
                editBtn.addEventListener("click",onEdit)


                
                let continueBtn = document.createElement("button")
                continueBtn.classList.add('continue-btn')
                continueBtn.textContent = 'Continue'
                continueBtn.addEventListener("click",onContinue)

                liElement.appendChild(article)
                liElement.appendChild(editBtn)
                liElement.appendChild(continueBtn)

                

                return liElement
        }


        function onEdit(e){
                let liElement = e.target.parentElement;
                liElement.remove()

                let paragraphs = liElement.querySelectorAll('p')
                let model = paragraphs[0].textContent.substring(11)
                let year = paragraphs[1].textContent.substring(10)
                let name = paragraphs[2].textContent.substring(11)
                let num = paragraphs[3].textContent.substring(13)
                let condition = paragraphs[4].textContent.substring(11)


                carModelInput.value = model
                carYearInput.value = year
                partNameInput.value = name
                partNumberInput.value = num
                carCondotionInput.value = condition

                nextBtn.disabled = false
            
        }


        function onContinue(e){
                let liElement = e.target.parentElement;
                liElement.remove()

                let buttons = Array.from(liElement.querySelectorAll('button'))
                buttons.forEach(b => b.remove());
            
                newUL.appendChild(liElement);

                let cofirmBtn = document.createElement('button')
                cofirmBtn.classList.add('confirm-btn')
                cofirmBtn.textContent = 'Confirm'
                cofirmBtn.addEventListener('click', onConfirm)


                let cancelBtn = document.createElement('button')
                cancelBtn.classList.add('cancel-btn')
                cancelBtn.textContent = 'Cancel'
                cancelBtn.addEventListener('click', onCancel)


                newUL.appendChild(cofirmBtn);

                newUL.appendChild(cancelBtn);

                nextBtn.disabled = true
            
        }


        function onConfirm(e){
                let liElement = e.target.parentElement;
                liElement.remove()

                img.style.visibility = "visible"
                
                let text = "Part is Ordered!" 
                par.textContent = text
                nextBtn.disabled = false
        }

        function onCancel(e){
                let liElement = e.target.parentElement;
                liElement.remove()

                nextBtn.disabled = false
        }


        

}


    
    
