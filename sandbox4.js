// const link = document.querySelector('a');
// console.log(link.getAttribute('href')); 
// link.setAttribute('href','www.yahoo.com');
// link.innerText='Yahoo';
// const k = document.querySelector('p');
// console.log(k.innerText);

// const t = document.querySelector('p');
// console.log(t.getAttribute('class'));
// t.setAttribute('class','success');
// t.setAttribute('style','color:red;')

// const k = document.querySelector('h1');
// k.setAttribute('style','margin:50px');
// console.log(k.getAttribute('style'));
// // console.log(k.style);
// console.log(k.style.color);
// k.style.color="yellow";
// k.style.fontSize="60px";
// k.style.foontsize='';


// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');

const k = document.querySelectorAll('p');
k.forEach((p)=>
{
//  console.log(p.textContent);
    if(p.textContent.includes('error'))
    {
        p.classList.add('error');
    }
    if(p.textContent.includes('success'))
    {
        p.classList.add('success');
    }

});


const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');