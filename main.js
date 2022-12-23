const header = document.querySelector('.main-header');
const listItem = document.querySelectorAll('.list-item')
const title = document.querySelector('.title');
console.log(title);

window.addEventListener("scroll", function(){
    if(window.scrollY==0){
        listItem.forEach(element => {
            element.style.paddingTop = "2em";
            element.style.paddingBottom = "2em";
            //title.style.fontSize = "2.3rem";
        });
    } else {
        listItem.forEach(element => {
            element.style.paddingTop = "1em";
            element.style.paddingBottom = "1em";
            //title.style.fontSize = "2rem";
        });
    }
});