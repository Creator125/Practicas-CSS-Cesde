const $portfolio =  document.querySelector(".sec-portafolio");
const $modalImgPorfolio = document.querySelector(".img-modal");

$portfolio.addEventListener('click', (e)=>{
    // console.log(e.target);

    if (e.target.classList.contains('img-btn-modal')) {
        //SRC
        // console.log(e);
        // console.log(e.target.attributes[0].nodeValue);
        let img_url = e.target.attributes[0].nodeValue
        
        //Agregar modal
        $modalImgPorfolio.src = img_url;
    }
})