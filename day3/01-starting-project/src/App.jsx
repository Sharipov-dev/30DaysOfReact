
import Examples from "./components/Examples.jsx";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";

function App() {
  //hook Functions must be inside of App() and on top of the App() function


  return (
    <>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;

