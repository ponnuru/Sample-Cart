module.exports = {
  init: function(){
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
        {
         name: 'smartPhone',
         description: 'MOTOROLA MOBILE PHONE ',
       
          variants: [
            {
              name: 'smartPhone',
              image: 'chivas.jpg',
              description: 'MOTOROLA MOBILE PHONE ',
              sku: '113355',
              type: '1',
              price: 4.99,
              inventory: 10
            },
            {
              name: 'NOKIA',
              image: 'images.jpeg',
              description: 'SAMSUNG MOBILE PHONE',
              sku: '224466',
              type: '2',
              price: 12.99,
              inventory: 15
            },
            {
              name: 'LG',
              image: 'LG.jpg',
              description: 'IPHONE MOBILE PHONE',
              sku: '779900',
              type: '3',
              price: 34.99,
              inventory: 30
            },
            {
              name: 'SUMSUNG',
              image: 'samsung.jpg',
              description: 'HOLAS MOBILE PHONE',
              sku: '123123',
              type: '4',
              price: 21.99,
              inventory: 17
            },
            {
              name: 'Digit',
              image: 'chivas.jpg',
              description: 'MOTOROLA MOBILE PHONE',
              sku: '123456',
              type: '5',
              price: 60.99,
              inventory: 30
            },
            {
              name: 'LG',
              image: 'LG.jpg',
              description: 'IPHONE MOBILE PHONE',
              sku: '779900',
              type: '6',
              price: 34.99,
              inventory: 13
            },
          ]
        }
      ]));
  }
}