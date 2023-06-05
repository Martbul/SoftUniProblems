function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', hoverHandler)
    let result = document.getElementById("result")

    function hoverHandler(e){
        let offsetX = e.offsetX;
        let element = e.target;
        let elementX = element.clientWidth;
        let percent = Math.trunc((offsetX / elementX) * 100);
        result.textContent = `${percent}%`;
    }





 
}