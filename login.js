console.log('TODO:// Implement Login functionality');

function login(){
    const accessToken = sessionStorage.getItem('accessToken');
    
    if(accessToken){
    
        document.getElementById('logout').style.display = 'inline';
    }else{
     
        document.getElementById('logout').style.display = 'none';
    }


    const BtnElem = document.querySelector('button')
    const formElement = document.querySelector('form') 
    const notificationParagraphElement = document.getElementsByClassName('notification')[0]

    BtnElem.addEventListener('click', onLogin)


    async function onLogin(){
        const formData = new FormData(formElement)
        const email = formData.get('email')
        const password = formData.get('password')


        if(!email){
            notificationParagraphElement.textContent = 'Email is required!'
          }else if(!password){
            notificationParagraphElement.textContent = 'Password is required!'
        }
           
        
        if(email && password && rePass){

            try{
                const response = await fetch('http://localhost:3030/users/login',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        email ,password
                    })
                })
                if(!response.ok){
                    const err = new Error(response.statusText)
                    throw err;
                }
    
                const data = await response.json()
                
                sessionStorage.setItem('accessToken', data.accessToken)
                sessionStorage.setItem('loggedUser', data.email)
                sessionStorage.setItem('id', data._id)
    
                window.location = 'index.html'
                
            }catch(err){
                notificationParagraphElement.textContent = err.message
            }
          }
    }
}

login()