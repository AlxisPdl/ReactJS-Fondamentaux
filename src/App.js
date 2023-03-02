import './App.css';
import Card from './components/card';

function App() {
  const cardsContent = [
    { title: "Chat pas très beau", image: "chatmoche.jpeg", description: "Ce chat n'est pas très joli" },
    { title: "Chat pas très beau", image: "chatmoche.jpeg", description: "Ce chat n'est pas très joli" },
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
