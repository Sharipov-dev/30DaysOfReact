import reactImage from "../../assets/react-core-concepts.png";
import "./Header.css";
const myWords = ['Fundamental', 'Core', 'Crucial'];

function randomWord(max){
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){

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
