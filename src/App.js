  import './App.css';
  import Card from './Card';

  const products = [
    {
        pID: 1,
        pName: 'White Traditional Long dress',
        // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        // isAvailable: true,
        image: ('https://assets.ajio.com/medias/sys_master/root/20220516/V7zG/62823db6f997dd03e2d3f0e2/-473Wx593H-464333541-green-MODEL.jpg'),
        // price: 12
    },
    {
        pID: 2,
        pName: 'Long Sleve Denim Jacket',
        // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        // isAvailable: false,
        image: ("https://m.media-amazon.com/images/I/81iiPvmfJvL._SY550._SX._UX._SY._UY_.jpg"),
        // price: 10
    },
    {
        pID: 3,
        pName: 'Hush puppies',
        // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        // isAvailable: true,
        image: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXy_l34dvJT7gqT8ikG6R5jZE8JyeoT-NFdowrinOJA7Q-rk6y3yX3N85GQux5aZYFiQ&usqp=CAU"),
        // price: 15
    },
    {
        pID: 4,
        pName: 'Athens Skirt',
        // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        // isAvailable: true,
        image: ("https://cdn.shopify.com/s/files/1/0075/0419/9777/products/image_fb5264dc-a8b2-4a4c-942c-b168158c591e_620x.jpg?v=1626685348"),
        // price: 20
    },
    
  ];
  function App() {
    return (<div className="App">
        <Card pId={products[0].pID} pName={products[0].pName} image={products[0].image}/>
        <Card pId={products[1].pID} pName={products[1].pName} image={products[1].image}/>
        <Card pId={products[2].pID} pName={products[2].pName} image={products[2].image}/>
        <Card pId={products[3].pID} pName={products[3].pName} image={products[3].image}/>
        
      </div>
    );
  }

  export default App;