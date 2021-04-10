const ul = document.querySelector('.people');
const people = ['chakri', 'roy','ravi','30','20'];
let html='';
people.forEach( (person)=>{
    html += `<li style="color: purple"> ${person}</li>`;
});
console.log(html);
ul.innerHTML=html;