let productos = [
    {
        id: '1',
        title: 'Pc gamer',
        description: 'Megaport pc gamer amd fx-6100 gaming',
        price: 6000,
        stock: 5,
        pictureUrl: 'https://w7.pngwing.com/pngs/758/250/png-transparent-megaport-pc-gamer-amd-fx-6100-gaming-computer-desktop-computers-computer-cases-housings-computer-electronics-computer-laptop.png',
    },
    {
        id: '2',
        title: 'Pc gamer',
        description: 'Megaport pc gamer amd fx-6100 gaming',
        price: 9000,
        stock: 4,
        pictureUrl: 'https://img1.freepng.es/20180712/yux/kisspng-computer-cases-housings-rgb-color-model-atx-game-pc-gamer-5b476b343207f6.6579908415314071562049.jpg',
    },
    {
        id: '3',
        title: 'Pc gamer',
        description: 'Megaport pc gamer amd fx-6100 gaming',
        price: 10000,
        stock: 3,
        pictureUrl: 'https://img1.freepng.es/20180811/rlb/kisspng-computer-cases-housings-gabinete-gamer-bluecase-pc-gamer-rtw-imperiums-i5-347-gtx-1-5-ti-4gb-5b6f822e5646d9.1124849715340344783534.jpg',
    }
]

export const getInfo = () => new Promise(resolve => {
    setTimeout(() => resolve(productos), 1500);
});


