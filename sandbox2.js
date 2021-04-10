const blogs = [
    {title: "yo,whats up", likes: 50},
    {title: "hey bro",likes:30}
]
console.log(blogs);

let user={
    name:"chakri",
    age:20,
    email:"chakri@gmail.com",
    blogs: [
        {title: "yo,whats up", likes: 50},
        {title: "hey bro",likes:30}
    ],
    login: ()=>
    {
        console.log('hii');
    },
    logout()
    {
        console.log("hey");
    }, 
    logBlogs: function()
    {
        this.blogs.forEach(blog => {
            console.log(blog.title,blog.likes);
        });
    }

}
console.log(user);
console.log(user.age);
console.log(user['age']);
let k='name';
console.log(user[k]);
console.log(typeof user);
user.login();
user.logBlogs();   


console.log(Math);
console.log(Math.PI);

const userone = {
     name: 'chakri',
    age: 30
}
console.log(userone);
const two=userone;
console.log(two);
userone.name='ravi';
console.log(two.name);

let a=10;
b=a;
b++; 
console.log(b);
