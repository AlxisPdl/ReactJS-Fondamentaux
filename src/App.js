import './App.css';
import Card from './components/card';

function App() {
  const cardsContent = [
    { title: "Chat pas très beau", image: "chatmoche.jpeg", description: "Ce chat n'est pas très joli" },
    { title: "Chat moyen", image: "chatnormal.jpeg", description: "Ce chat est cool mais je préfère Cute Kitty" },
    { title: "Chat rigolo", image: "chatrigolo.jpg", description: "Ce chat est rigolo" },
    { },
  ]
  return (
    <>
      {cardsContent.map((card, index) => {
        return <Card key={index} title={card.title} image={card.image} description={card.description} />
      })}
    </>
  );
}

export default App;
