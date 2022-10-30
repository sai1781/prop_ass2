import './App.css';
import Card2 from './Components/Card2';


function App() {
  const itemData = [
    {
      name: "Bright",
      poster:"https://wallpapercave.com/wp/wp2354003.jpg",
      img: 'https://i0.wp.com/www.ourmovielife.com/wp-content/uploads/2017/12/Bright-movie-banner.jpg?fit=1280%2C640&ssl=1',
      title: 'Collection',
      about: 'Most Popular around the World',
      featured: true,
      year:2017,
      actor_name:"shreyas Iyer",
      time:"112 min",
      text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like."

    },
    {
      name: "Bright",
      poster:"https://m.media-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg",
      img: 'https://c4.wallpaperflare.com/wallpaper/532/570/514/movie-tomb-raider-2018-alicia-vikander-lara-croft-wallpaper-preview.jpg',
      title: 'Collection',
      about: 'Great for team building',
      year:2017,
      actor_name:"shreyas Iyer",
      time:"105 min",
      text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like."
     
    },
    {
      name: "Bright",
      poster:"http://static.hd-trailers.net/images/AVG-Payoff-1-Sht-v13-jpg_050023.jpg",
      img: 'https://wallpapercave.com/wp/wp2547005.jpg',
      title: 'Collection',
      about: 'Fun for the family',
      year:2017,
      actor_name:"shreyas Iyer",
      time:"150 min",
      text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like."

    }
  ];

  return (
    <div className="App">
      <Card2 data={itemData} />

    </div>
  );
}

export default App;
