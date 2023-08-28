window.addEventListener('DOMContentLoaded', () => {
    const animation = document.querySelector('.animationBanner')
    const container = document.querySelector('.container')
    setTimeout(() => {
        animation.style.opacity = '0'
        setTimeout(() => {
        animation.style.display = 'none'
        }, 1000)
    }, 2000)
})
let searcher = document.getElementsByClassName('searcher')[0]
let searchBtn = document.getElementsByClassName('searchBtn')[0]
let items = document.getElementsByClassName('items')[0]
// cars vars
let malibu2 = document.getElementsByClassName('malibu2')[0]
let gentra = document.getElementsByClassName('gentra')[0]
let lacetti = document.getElementsByClassName('lacetti')[0]
let captiva = document.getElementsByClassName('captiva')[0]
let malibu1 = document.getElementsByClassName('malibu1')[0]
let cobalt = document.getElementsByClassName('cobalt')[0]
let spark = document.getElementsByClassName('spark')[0]
let matiz = document.getElementsByClassName('matiz')[0]

// cars vars
let forBanner = document.getElementsByClassName('forBanner')[0]
let h1 = document.getElementsByTagName('h1')[0]
let spans = document.getElementsByTagName('span')[3]
let optionsBtn = document.getElementsByClassName('optionsBtn')[0]
let showBtn = document.getElementsByClassName('showBtn')[0]
let image1 = document.getElementsByTagName('img')[0]
let image2 = document.getElementsByTagName('img')[1]
let image3 = document.getElementsByTagName('img')[2]
let modal = document.getElementsByClassName('modal')[0]
let btnPrimary = document.getElementsByClassName('btn-primary')[0]
let btnPrimary2 = document.getElementsByClassName('primary2')[0]
let btnPrimary3 = document.getElementsByClassName('primary3')[0]
let modal2 = document.getElementsByClassName('modal2')[0]
let modal3 = document.getElementsByClassName('modal3')[0]
// another animation
let firstCar = document.getElementsByClassName('firstCar')[0],
    secondCar = document.getElementsByClassName('secondCar')[0],
    thirdCar = document.getElementsByClassName('thirdCar')[0],
    fourthCar = document.getElementsByClassName('fourthCar')[0],
    fivethCar = document.getElementsByClassName('fivethCar')[0],
    sixthCar = document.getElementsByClassName('sixthCar')[0],
    seventhCar = document.getElementsByClassName('seventhCar')[0],
    eighthCar = document.getElementsByClassName('eighthCar')[0]




// another animation





setInterval(function() {
    modal.style.display = 'block'
},60000)


btnPrimary.addEventListener('click', function() {
    setTimeout(function() {
    modal.style.display = 'none'
    }
    ),3000}
    )

function searchAuto() {
searchBtn.addEventListener('click' , function() {
    optionsBtn.style.height = '2rem'
    optionsBtn.style.marginTop = '7%'
if(searcher.value == 'Malibu2' || searcher.value == 'Malibu2'.toLowerCase() || searcher.value == 'Malibu 2' || searcher.value == 'Malibu 2'.toLowerCase()) {
    gentra.style.display = 'none'
    captiva.style.display = 'none'
    malibu1.style.display = 'none'
    cobalt.style.display = 'none'
    lacetti.style.display = 'none'
    spark.style.display = 'none'
    matiz.style.display = 'none'
    malibu2.style.display = 'block'
    firstCar.textContent = '1: Malibu 2'
    secondCar.textContent = '2: Gentra'
    thirdCar.textContent = '3: Cobalt'
    fourthCar.textContent = '4: Malibu'
    fivethCar.textContent = '5: Captiva'
    sixthCar.textContent = '6: Lacetti'
    seventhCar.textContent = '7: Spark'
    eighthCar.textContent = '8: Matiz'
    items.style.cursor = 'pointer'
    h1.style.cursor = 'text'
    showBtn.style.display = 'block'
    spans.style.cursor = 'text'
}
if(searcher.value == 'Gentra' || searcher.value == 'gentra'.toLowerCase() || searcher.value == 'gentra'.toUpperCase()) {
    malibu2.style.display = 'none'
    captiva.style.display = 'none'
    malibu1.style.display = 'none'
    cobalt.style.display = 'none'
    lacetti.style.display = 'none'
    spark.style.display = 'none'
    matiz.style.display = 'none'
    gentra.style.display = 'block'
    firstCar.textContent = '1: Gentra'
    secondCar.textContent = '2: Malibu 2'
    thirdCar.textContent = '3: Cobalt'
    fourthCar.textContent = '4: Malibu'
    fivethCar.textContent = '5: Captiva'
    sixthCar.textContent = '6: Lacetti'
    seventhCar.textContent = '7: Spark'
    eighthCar.textContent = '8: Matiz'
    items.style.cursor = 'pointer'
    h1.style.cursor = 'text'
    spans.style.cursor = 'text'
}
if(searcher.value == 'Lacetti' || searcher.value == 'lacetti' || searcher.value == 'lacetti'.toUpperCase()) {
    malibu2.style.display = 'none'
    gentra.style.display = 'none'
    malibu1.style.display = 'none'
    cobalt.style.display = 'none'
    captiva.style.display = 'none'
    spark.style.display = 'none'
    matiz.style.display = 'none'
    lacetti.style.display = 'block'
    firstCar.textContent = '1: Lacetti'
    secondCar.textContent = '2: Gentra'
    thirdCar.textContent = '3: Cobalt'
    fourthCar.textContent = '4: Malibu'
    fivethCar.textContent = '5: Captiva'
    sixthCar.textContent = '6: Malibu 2'
    seventhCar.textContent = '7: Spark'
    eighthCar.textContent = '8: Matiz'
    items.style.cursor = 'pointer'
    h1.style.cursor = 'text'
    spans.style.cursor = 'text'
}
if(searcher.value == 'Captiva' || searcher.value == 'captiva' || searcher.value == 'captiva'.toUpperCase()) {
    malibu2.style.display = 'none'
    gentra.style.display = 'none'
    malibu1.style.display = 'none'
    cobalt.style.display = 'none'
    lacetti.style.display = 'none'
    spark.style.display = 'none'
    matiz.style.display = 'none'
    captiva.style.display = 'block'
    firstCar.textContent = '1: Captiva'
    secondCar.textContent = '2: Gentra'
    thirdCar.textContent = '3: Cobalt'
    fourthCar.textContent = '4: Malibu'
    fivethCar.textContent = '5: Lacetti'
    sixthCar.textContent = '6: Malibu 2'
    seventhCar.textContent = '7: Spark'
    eighthCar.textContent = '8: Matiz'
    items.style.cursor = 'pointer'
    h1.style.cursor = 'text'
    spans.style.cursor = 'text'
}
if(searcher.value == 'Malibu' || searcher.value == 'malibu' || searcher.value == 'malibu'.toUpperCase()) {
    malibu2.style.display = 'none'
    gentra.style.display = 'none'
    captiva.style.display = 'none'
    cobalt.style.display = 'none'
    lacetti.style.display = 'none'
    spark.style.display = 'none'
    matiz.style.display = 'none'
    malibu1.style.display = 'block'
    firstCar.textContent = '1: Malibu'
    secondCar.textContent = '2: Gentra'
    thirdCar.textContent = '3: Cobalt'
    fourthCar.textContent = '4: Captiva'
    fivethCar.textContent = '5: Lacetti'
    sixthCar.textContent = '6: Malibu 2'
    seventhCar.textContent = '7: Spark'
    eighthCar.textContent = '8: Matiz'
    items.style.cursor = 'pointer'
    h1.style.cursor = 'text'
    spans.style.cursor = 'text'
}
if(searcher.value == 'Cobalt' || searcher.value == 'cobalt' || searcher.value == 'cobalt'.toUpperCase()) {
    malibu2.style.display = 'none'
    gentra.style.display = 'none'
    captiva.style.display = 'none'
    malibu1.style.display = 'none'
    lacetti.style.display = 'none'
    spark.style.display = 'none'
    matiz.style.display = 'none'
    cobalt.style.display = 'block'
    firstCar.textContent = '1: Cobalt'
    secondCar.textContent = '2: Gentra'
    thirdCar.textContent = '3: Malibu'
    fourthCar.textContent = '4: Captiva'
    fivethCar.textContent = '5: Lacetti'
    sixthCar.textContent = '6: Malibu 2'
    seventhCar.textContent = '7: Spark'
    eighthCar.textContent = '8: Matiz'
    items.style.cursor = 'pointer'
    h1.style.cursor = 'text'
    spans.style.cursor = 'text'
}
if(searcher.value == 'Spark' || searcher.value == 'spark' || searcher.value == 'spark'.toUpperCase()) {
    malibu2.style.display = 'none'
    gentra.style.display = 'none'
    captiva.style.display = 'none'
    malibu1.style.display = 'none'
    lacetti.style.display = 'none'
    cobalt.style.display = 'none'
    matiz.style.display = 'none'
    spark.style.display = 'block'
    firstCar.textContent = '1: Spark'
    secondCar.textContent = '2: Gentra'
    thirdCar.textContent = '3: Malibu'
    fourthCar.textContent = '4: Captiva'
    fivethCar.textContent = '5: Lacetti'
    sixthCar.textContent = '6: Malibu 2'
    seventhCar.textContent = '7: Cobalt'
    eighthCar.textContent = '8: Matiz'
    items.style.cursor = 'pointer'
    h1.style.cursor = 'text'
    spans.style.cursor = 'text'
}
if(searcher.value == 'Matiz' || searcher.value == 'matiz' || searcher.value == 'matiz'.toUpperCase()) {
    malibu2.style.display = 'none'
    gentra.style.display = 'none'
    captiva.style.display = 'none'
    malibu1.style.display = 'none'
    lacetti.style.display = 'none'
    cobalt.style.display = 'none'
    spark.style.display = 'none'
    matiz.style.display = 'block'
    firstCar.textContent = '1: Matiz'
    secondCar.textContent = '2: Gentra'
    thirdCar.textContent = '3: Malibu'
    fourthCar.textContent = '4: Captiva'
    fivethCar.textContent = '5: Lacetti'
    sixthCar.textContent = '6: Malibu 2'
    seventhCar.textContent = '7: Cobalt'
    eighthCar.textContent = '8: Spark'
    items.style.cursor = 'pointer'
    h1.style.cursor = 'text'
    spans.style.cursor = 'text'
}
if(searcher.value == '') {
    modal3.style.display = 'block'
    btnPrimary3.addEventListener('click', () => {
        modal3.style.display = 'none'
    })
    optionsBtn.style.display = 'block'
}






if(searcher.value != '' && searcher.value != 'Malibu2' && searcher.value != 'Malibu2'.toLowerCase() && searcher.value != 'Malibu 2' && searcher.value != 'Malibu 2'.toLowerCase() && searcher.value != 'Gentra' && searcher.value != 'gentra'.toLowerCase() && searcher.value != 'gentra'.toUpperCase() && searcher.value != 'Captiva' && searcher.value != 'captiva'.toLowerCase() && searcher.value != 'captiva'.toUpperCase() && searcher.value != 'Malibu' && searcher.value != 'malibu'.toLowerCase() && searcher.value != 'malibu'.toUpperCase() && searcher.value != 'Cobalt' && searcher.value != 'cobalt'.toLowerCase() && searcher.value != 'cobalt'.toUpperCase() && searcher.value != 'Lacetti' && searcher.value != 'lacetti' && searcher.value != 'lacetti'.toUpperCase() && searcher.value != 'Spark' && searcher.value != 'spark' && searcher.value != 'spark'.toUpperCase() && searcher.value != 'Matiz' && searcher.value != 'matiz' && searcher.value != 'matiz'.toUpperCase()){
    setTimeout(() => {
        modal2.style.display = 'block'
        btnPrimary2.addEventListener('click', () =>{
            modal2.style.display = 'none'
        })
        optionsBtn.style.display = 'block'
    }, 1000);
    
}

}
)
}
searchAuto()

optionsBtn.addEventListener('click', function() {
    optionsBtn.style.height = '18rem'
    optionsBtn.style.marginTop = '-0.47rem'
})