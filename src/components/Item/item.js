let productos = [
    {
        id: '1',
        title: 'Zapatilla hombre',
        description: 'Zapatillas new balance verde. M   asculino',
        price: 6000,
        stock: 5,
        pictureUrl: 'https://www.newbalance.com.ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-hombre-new-balance-x-90-msx90crh_nb_02_i.jpg',
    },
    {
        id: '2',
        title: 'Zapatiila hombre',
        description: 'Zapatillas new balance negro. M   asculino',
        price: 9000,
        stock: 4,
        pictureUrl: 'https://www.newbalance.com.ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-hombre-new-balance-515v3-ml515rb3_nb_02_i_1.jpg',
    },
    {
        id: '3',
        title: 'Zapatiila hombre',
        description: 'Zapatillas new balance azul. M    asculino',
        price: 10000,
        stock: 3,
        pictureUrl: 'https://www.newbalance.com.ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-new-balance-hombre-ml373db2_nb_02_i_1.jpg',
    }
]

export const getInfo = () => new Promise(resolve => {
    setTimeout(() => resolve(productos), 1500);
});


