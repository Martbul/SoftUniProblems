window.addEventListener('load', solve);

function solve() {
   
    let firstNameInput =document.getElementById('first-name')
    let lastNameInput =document.getElementById('last-name')
    let numOfPeopleInput =document.getElementById('people-count')
    let dateInput =document.getElementById('from-date')
    let daysInput =document.getElementById('days-count')
    let nextStepBtn = document.getElementById('next-btn')
    let UL = document.querySelector('.ticket-info-list')
    let confirmTicketUL = document.querySelector('.confirm-ticket')


    nextStepBtn.addEventListener('click',onPreview)



    function onPreview(e) {

        e.preventDefault();
        let firstNameValue = firstNameInput.value
        let lastNameValue = lastNameInput.value
        let numOfPeopleValue = numOfPeopleInput.value
        let dateValue = dateInput.value
        let daysValue = daysInput.value


        if(firstNameValue == ''||lastNameValue == ''
        ||numOfPeopleValue == '' || dateValue == ''||daysValue == ''){

            return

        }else{

            let onPreview = createPreview(firstNameValue, lastNameValue, numOfPeopleValue,dateValue,daysValue)
            UL.appendChild(onPreview)
      

            firstNameInput.value = ''
            lastNameInput.value = ''
            numOfPeopleInput.value = ''
            dateInput.value = ''
            daysInput.value = ''
        }
    }



    function createPreview(firstNameValue,lastNameValue,numOfPeopleValue,dateValue,daysValue) {
        let liElement = document.createElement('li')
        liElement.classList.add('ticket')

        let article = document.createElement('article')

        let fullNameUnit = document.createElement('h3')
        fullNameUnit.textContent = `Name: ${firstNameValue} ${lastNameValue}`

        let dateUnit = document.createElement('p')
        dateUnit.textContent = `From date: ${dateValue}`

        let daysUnit = document.createElement('p')
        daysUnit.textContent = `For ${daysValue} days`

        let pepleUnit = document.createElement('p')
        pepleUnit.textContent = `For ${numOfPeopleValue} people`

        article.appendChild(fullNameUnit)
        article.appendChild(dateUnit)
        article.appendChild(daysUnit)
        article.appendChild(pepleUnit)


        let editBtn = document.createElement('button')
        editBtn.classList.add('edit-btn')
        editBtn.textContent = 'Edit'
        editBtn.addEventListener('click',onEdit)

        let continueBtn = document.createElement('button')
        continueBtn.classList.add('continue-btn')
        continueBtn.textContent = 'Continue'
        continueBtn.addEventListener('click',onContinue)

        liElement.appendChild(article)
        liElement.appendChild(editBtn)
        liElement.appendChild(continueBtn)

        nextStepBtn.disabled = true

        return liElement
    }


    function onEdit(e){
        let liElement = e.target.parentElement;
        liElement.remove()

        let h3fName = liElement.querySelector('h3')
        let flNme = h3fName.textContent.substring(6).split(' ')
        let fName = flNme[0]
        let lName = flNme[1]
        

        let paragraphs = liElement.querySelectorAll('p')
        let date = paragraphs[0].textContent.substring(11)
        let daysFake = paragraphs[1].textContent.substring(4).split(' ')
        let days = daysFake[0]
        let popleFake = paragraphs[2].textContent.substring(4).split(' ')
        let people = Number(popleFake[0])


        firstNameInput.value = fName
        lastNameInput.value = lName
        numOfPeopleInput.value = days
        dateInput.value = date
        daysInput.value = people

        nextStepBtn.disabled = false
        
    }
    

    function onContinue(e){
        let liElement = e.target.parentElement;
        liElement.remove()

        let buttons = Array.from(liElement.querySelectorAll('button'))
        buttons.forEach(b => b.remove());
    

        let cancelBtn = document.createElement('button')
        cancelBtn.classList.add('cancel-btn')
        cancelBtn.textContent = 'Cancel'
        cancelBtn.addEventListener('click',onCancel)

        let confirmBtn = document.createElement('button')
        confirmBtn.classList.add('confirm-btn')
        confirmBtn.textContent = 'Confirm'
        confirmBtn.addEventListener('click',onConfirm)

        confirmTicketUL.appendChild(liElement);
        confirmTicketUL.appendChild(cancelBtn);
        confirmTicketUL.appendChild(confirmBtn);
        nextStepBtn.disabled = true

    }

    function onCancel(e){
        let liElement = e.target.parentElement;
        liElement.remove()

        nextStepBtn.disabled = false
    }

    function onConfirm(e){
         let div = document.getElementById('main')
         let body = document.getElementById('body')
        div.remove()

       let finalText = document.createElement('h1')
       finalText.setAttribute('id','thank-you')
       finalText.textContent = 'Thank you, have a nice day!'

        let backBtn = document.createElement('button')
        backBtn.setAttribute('id','back-btn')
        backBtn.textContent = 'Back'
        backBtn.addEventListener('click',re)

        body.appendChild(finalText)
        body.appendChild(backBtn)
        
    }
   function re(e){
    location.reload()
   }
}


    
    
