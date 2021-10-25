//
// function changeTextColor(){
//     console.log('button clicked')
//     let pTag = document.getElementById('target')
//     console.log(pTag)
//     const red = Math.floor(Math.random()*255)
//     const green = Math.floor(Math.random()*255)
//     const blue = Math.floor(Math.random()*255)
//     pTag.style.color = `rgb(${red}, ${green}, ${blue})`
// }

// document.getElementById('change').onclick = changeTextColor;
//
// function changeTextColor() {
//     document.body.style.color = "purple";
//     return false;
// }

// This works to change button color onclick
function changeTextColor(){
    console.log('button clicked')
    document.getElementById('change').style.backgroundColor = 'Purple';
}
