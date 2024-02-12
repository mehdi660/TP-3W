const objectPrice = [
    
   { objet : "moto",
    price: 1200,
    id: 0}, 
    
    {objet : "stylo",
    price: 3,
    id: 1}, 

     {objet : "plante",
    price: 20,
    id: 2}, 
    
     {objet : "ecran",
    price: 200,
    id: 3}, 
    
     {objet : "visioPro",
    price: 4500,
    id: 4}, 
]


const ttcObject = {

    precision: 100,
    tva: 0.2,

    ttcSum: function (products) {
        let sum = 0;
        for(let product of products){
            if(product.hasOwnProperty('price') && !isNaN(parseFloat(product.price))){
                sum += product.price*(1+this.tva);
            }
        }
        return Math.round(sum*this.precision)/this.precision;
    },

    setPrecision: function (value){
        this.precision = value
    },

    setTva: function (value){
        this.tva = value
    },
};


console.log(ttcObject.ttcSum(objectPrice));