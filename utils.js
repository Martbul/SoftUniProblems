
export const getUserData = () =>{
   if(sessionStorage.getItem('accessToken')){
       return {
           _id: sessionStorage.getItem('_id'),
           accessToken: sessionStorage.getItem('accessToken'),
       }
   }

   return null;
}



export const setUserData = (data) =>{
   sessionStorage.setItem('_id', data._id)
   sessionStorage.setItem('accessToken', data.accessToken)



}

export const clearUserData = () =>{
   sessionStorage.removeItem('_id')
   sessionStorage.removeItem('accessToken')

}
export const createSubmitHandler = (callback) =>{
   return function(e){
       e.preventDefault();

       const formData = new FormData(e.target);
       const data = Object.fromEntries(formData)

       callback(data, e.target)
   }
}

