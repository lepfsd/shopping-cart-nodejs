var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopappnode');

var products = [
    new Product({
        imagePath: 'http://cdn.akamai.steamstatic.com/steam/apps/480490/header.jpg?t=1502903479',
        title: 'Prey',
        description: 'An atmospheric masterclass of tension and terror, that’ll leave you looking twice at every innocent piece of furniture',
        price: 42
    }),
    new Product({
        imagePath: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/H2x1_WiiU_TheLegendOfZeldaBreathOfTheWild_Alt02_image800w.jpg',
        title: 'The Legend of Zelda',
        description: 'Probably the best Zelda of all time, this is the first time Link ',
        price: 15
    }),
    new Product({
        imagePath: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/HU/en/999/EP9000-CUSA01021_00-HRZ0000000000000/1507191513000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100',
        title: 'Horizon: Zero Dawn',
        description: 'The mechanical animals might be the bait, but it’s the story that will get you hooked on this brilliant, beautiful open-world adventure ',
        price: 50
    }),
    new Product({
        imagePath: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/GB/en/999/EP1018-CUSA05459_00-INJUSTICE2000000/1505461897000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100',
        title: 'Injustice 2',
        description: 'A comprehensive update that’s big on story for single player fans, and bulging with content to keep multiplayer addicts coming back for more',
        price: 45
    }),
    new Product({
        imagePath: 'http://cdn.edgecast.steamstatic.com/steam/apps/389730/extras/T7_PC_Custom_Deluxe.PNG?t=1504179967',
        title: 'Tekken 7',
        description: 'The Mishima clan continues to settle their differences with fists and kicks - not much has changed',
        price: 50
    })
];
var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if( done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

