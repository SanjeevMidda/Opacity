let container = document.querySelector('.container');

for(i=0; i < 100; i++){
    let letter = document.createElement("p");
    letter.innerHTML = "A";
    letter.style.left = `${randomLength()}px`;
    letter.style.right = `${randomLength()}px`;
    letter.style.top = `${randomLength()}px`;
    letter.style.bottom = `${randomLength()}px`;
    
    container.appendChild(letter);

}

function randomLength(){
    return Math.floor(Math.random() * 700);
}