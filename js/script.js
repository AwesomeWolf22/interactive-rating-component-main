var grades = document.querySelectorAll('.grade-wraper span');
var btn = document.querySelector('button');
var rating = 0;
var pre = document.querySelector('main .pre');
var pos = document.querySelector('.pos');
var rateSpan = document.querySelector('span#rate')
var voted = false;

for(let i = 0; i < grades.length; i++){
    grades[i].addEventListener('click',function(){

        for(let j = 0; j < grades.length; j++){
            grades[j].classList.remove('active');
        }

        grades[i].classList.add('active');

        voted = true;
        rating = i+1;

    });
}

btn.addEventListener('click',function(){

    if(voted){

        pre.style.display = 'none';
        pos.style.display = 'block';

        rateSpan.innerHTML = `You selected ${rating} out of 5`

    }

});