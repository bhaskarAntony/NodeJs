const products = [
    {
        id:1,
        title:'product-1',
        image:'https://picsum.photos/id/245/1200/600',
        price:1204.03,
        desc: "product-1 sample description"
    },
    {
        id:2,
        title:'product-2',
        image:'https://picsum.photos/id/144/1200/600',
        price:1204.03,
        desc: "product-2 sample description"
    },
    {
        id:3,
        title:'product-3',
        image:'https://picsum.photos/id/164/1200/600',
        price:1204.03,
        desc: "product-3 sample description"
    }
]

const users = [
    {
        id:1,
        name:'Bhaskar',
        email:'bhaskar@gmail.com'
    },
    {
        id:2,
        name:'babu',
        email:'babu@gmail.com'
    },
    {
        id:3,
        name:'Antony',
        email:'Antony@gmail.com'
    }
]
const courses = [
    {
        id:1,
        title:"javascript",
        duration:'2 months'
    },
    {
        id:2,
        title:"Node Js",
        duration:'1.5 months'
    },
    {
        id:1,
        title:"Express JS",
        duration:'1 month'
    }
]
module.exports = {products, courses, users}