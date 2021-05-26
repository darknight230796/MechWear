import bcrypt from 'bcryptjs';
const data = {
    users:[
        {
            name:'Rachit',
            email:'admin@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:true
        },{
            name:'John',
            email:'user@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:false
        }
    ],
    products:[
        {
            _id:'1',
            name:'MechWear Automaton',
            category:'Shoes',
            image:'/images/p1.jpg',
            price:1200,
            rating: 4.5,
            numReviews : 80,
            description : 'Perfect for gym.',
            countInStock : 45
        },
        {
            _id:'2',
            name:'MechWear Combustion',
            category:'Shoes',
            image:'/images/p2.jpg',
            price:1300,
            rating: 4.5,
            numReviews : 134,
            description : 'Perfect for gym.',
            countInStock : 45
        },
        {
            _id:'3',
            name:'MechWear Gear',
            category:'Shoes',
            image:'/images/p3.jpg',
            price:1150,
            rating: 4.5,
            numReviews : 167,
            description : 'Perfect for gym.',
            countInStock : 45
        },
        {
            _id:'4',
            name:'MechWear Velocity',
            category:'Shoes',
            image:'/images/p4.jpg',
            price:1520,
            rating: 5,
            numReviews : 180,
            description : 'Perfect for gym.',
            countInStock : 45
        },
        {
            _id:'5',
            name:'MechWear Vector',
            category:'Shoes',
            image:'/images/p5.jpg',
            price:1250,
            rating: 4.5,
            numReviews : 189,
            description : 'Perfect for gym.',
            countInStock : 45
        },
        {
            _id:'6',
            name:'MechWear Torque',
            category:'Shoes',
            image:'/images/p6.jpg',
            price:1600,
            rating: 5,
            numReviews : 156,
            description : 'Perfect for gym.',
            countInStock : 0
        },
    ]
}

export default data;