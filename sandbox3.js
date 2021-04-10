// const para = document.querySelector('body > div:nth-child(2)');
// console.log(para);
// const p = document.querySelector('p');
// console.log(p);

// const q=document.querySelectorAll('p');
// q.forEach((para)=>{
//     console.log(para);
// })
// console.log(q);

// const p = document.getElementById('page');
// console.log(p);

// const errors = document.getElementsByClassName('error');
// console.log(errors);

// const pa= document.getElementsByTagName('p');
// console.log(pa);

// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText="hey bro";
// console.log(para.innerText);

// const parass = document.querySelectorAll('p');
// parass.forEach((para)=>
// {
//     console.log(para.innerText);
//     para.innerText += " wow";
// });
const content =document.querySelector('.content')
// console.log(content.innerHTML);
// console.log(content.innerText);

// content.innerHTML += "<h2>hey iam not here</h2>";

    const people = ['chakri', 'jami','sarath', 'santosh'];
        people.forEach((p)=>{
            content.innerHTML +=`<p>${p}</p>`;
        });
