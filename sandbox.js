alert("hello, whats up");
console.log('Hello');

let age=30,year=2020;
console.log(age,year);

const x=5;
console.log(x);

var a=5;
a=7;
console.log(a);

let f="Hii";
let l="Whats up@";
let v=f+" "+l;
console.log(v);
console.log(f[2]);
console.log(v.length);
console.log(v.toUpperCase());
console.log(v.toLowerCase());
let index = v.indexOf('@');
console.log(index);

let email='chakradhar007007kc@gmail.com';
let r = email.slice(2,5);
console.log(r);
let re = email.substr(2,5);
console.log(re);
let res = email.replace('a','e');
console.log(res);

let r = 10;
let pi = 3.14;
console.log(r,pi);
console.log(10/3);
console.log(pi * r**2);

let likes=10;
console.log(--likes);
console.log(++likes);

console.log(5 / 'hii'); //NAN
console.log(5+'hii');


const title='Best Books';
const author = 'Mario';
let age = null;
age =3;
console.log(age,age+3,`hii ${age}`);

let name = "Simon"
// const age = 29
const profession = "Developer"
const favouriteAnimal = "dog"

console.log(`
  Welcome to my first JavaScript programme. 
  My name is ${name}. 
  I am ${age} years old. 
  I work as a ${profession}.
  My favourite animal is a ${favouriteAnimal}`
)

console.log(true,false,"true","false");
let email='chakradhar007007kc@gmail.com';
let n=['hii','hello','hey'];
console.log(email.includes('@'));
console.log(n.includes('hii'));

let age=25;
console.log(age == 25);
console.log(age != 50);
console.log(age == '25');
console.log(age === '25');

let name = 'hey';
console.log(name == 'hii');
console.log(name == 'hey');
console.log(name > 'Hey');

let score='100';
score=Number(score);
console.log(score+1);
console.log(typeof(score));

let score=100;
score=String(score);
console.log(score); 
console.log(typeof score);   

let  result = Boolean('0');
console.log(result);

let ninjas = ['chakri', 'roy','ravi','30','20'];
ninjas[2]='jami';
// let r= ninjas.join(',');
// let r= ninjas.concat(['sarath',"santosh"]);
// let r=ninjas.push("ajay");
let r= ninjas.pop();
console.log(ninjas);
console.log(r);



function greet()
{
    console .log('hello');
}
const speak = function(name='night')
{
    console.log(`good ${name}`);
};
greet();
speak('morning');


const area = (r) =>
{
    let a =3.14 * r**2;
    return a; 
};

let b=area(6);
console.log(b);


const my =(c)=>
{
    let v=10;
    c(v);
};
my( (value)=>
{
    console.log(value);
});

let ninjas = ['chakri', 'roy','ravi','30','20'];
const P = (i , index)=>
{
    console.log(i, index);
};

ninjas.forEach(P);
