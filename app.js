let isModalOpen = false
let contrastToggle = false;
const scaleFactor = 1/20;

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for(let i = 0; i<shapes.length; ++i){
        const isOdd = i%2 !== 0;
        const boolInt = isOdd ? -1:1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }

}


function toggleContrast(){
    contrastToggle = !contrastToggle
    if(contrastToggle){
    document.body.classList += " dark-theme"
    }
    else document.body.classList.remove("dark-theme")
    
}

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const succcess = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm('service_dcju9bq', 'template_itfhwdz', event.target,'5o763pJzwx85Dw-XA'
        ).then(() =>{
            loading.classList.remove("modal__overlay--visible");
            succcess.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable, please contact me directly at mjzimmerman19@gmail.com"
            )
        })
}

function toggleModal(){
    if(isModalOpen){
        isModalOpen = false
        return document.body.classList.remove("modal__open")
    }
    isModalOpen = true;
    document.body.classList += " modal__open"
}