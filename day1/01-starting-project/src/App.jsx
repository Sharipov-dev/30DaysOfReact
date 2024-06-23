import {dataCoreConcepts} from "./data.js";
import reactImage from "./assets/react-core-concepts.png";

const myWords = ['Fundamental', 'Core', 'Crucial'];

function randomWord(max){
  return Math.floor(Math.random() * (max + 1));
}

function Header(){

  const myRandomWord = myWords[randomWord(myWords.length - 1)];

  return( 
    <header>
    <img src={reactImage} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {myRandomWord} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>);
}

function CoreConcept(props){
  return (
    <div>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <CoreConcept 
          img={dataCoreConcepts[0].image}
          title={dataCoreConcepts[0].title}
          description={dataCoreConcepts[0].description}
          />
          <CoreConcept
            img={dataCoreConcepts[1].image}
            title={dataCoreConcepts[1].title}
            description={dataCoreConcepts[1].description}/>
          <CoreConcept/>
          <CoreConcept
            img={dataCoreConcepts[2].image}
            title={dataCoreConcepts[2].title}
            description={dataCoreConcepts[2].description}
          />

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

