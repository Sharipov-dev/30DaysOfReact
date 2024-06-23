import {dataCoreConcepts} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept 
            image={dataCoreConcepts[0].image}
            title={dataCoreConcepts[0].title}
            description={dataCoreConcepts[0].description}
            />
            <CoreConcept {...dataCoreConcepts[1]}/>
            <CoreConcept {...dataCoreConcepts[2]}/>
            <CoreConcept {...dataCoreConcepts[3]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

