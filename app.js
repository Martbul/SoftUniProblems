function validate() {
    const emailInput = document.getElementById('email')
    emailInput.addEventListener('change',onChange )

    function onChange(e) {
        const {target} = e
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if(pattern.test(target.value)) {
            target.classList.remove('error')
        }else{
            target.classList.add('error')
        }
    }
}