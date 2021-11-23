const path = require('path');

const productos = [

    {
        imgSrc : 'images/img-cafetera-moulinex.jpg',
        imgAlt : 'Cafetera',
        price : '$6470',
        discount : '40% off',
        description : 'Cafetera Moulinex'
    },
    {
        imgSrc : 'images/img-macbook-pro-2019.jpg',
        imgAlt : 'MacBook',
        price : '$230.000',
        discount : '20% off',
        description : 'MacBook Pro 2019'
    },
    {
        imgSrc : 'images/img-samsung-galaxy-s10.jpg',
        imgAlt : 'Teléfono Móvil Samsung Galaxy',
        price : '$70.500',
        discount : '10% off',
        description : 'Samsung Galaxy S10'
    },
    {
        imgSrc : 'images/img-tv-samsung-smart.jpg',
        imgAlt : 'SmartTv Samsung',
        price : '$23.200',
        discount : '5% off',
        description : 'SmartTv Samsung 43"'
    },
];

const mainController = {

    home: function(req, res) {
        res.render(path.join(__dirname, '../views/home'), {productos : productos});
    },

    register: function(req, res) {
        res.render(path.join(__dirname, '../views/register'));
    },

    login: function(req, res) {
        res.render(path.join(__dirname, '../views/login'));
    }

};

module.exports = mainController;