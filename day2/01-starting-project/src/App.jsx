import { useState } from 'react';

import {dataCoreConcepts, EXAMPLES} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  //hook Functions must be inside of App() and on top of the App() function

  //Inside of the useState() we can specify initial displayed value 
  const [ selectedTopic, setSelectedTopic ] = useState(null);

  let tabContent = 'Please click a button';


  function handleSelect(selectedButton){
    //selectedButton => "components", 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);

    
    
  }
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {dataCoreConcepts.map((dataCoreItem) => (
              <CoreConcept {...dataCoreItem}/>
            ))}
          </ul>
        </section>
        
        <section id = "examples">
          <h2>Example</h2>  
          <menu>
            <TabButton  onSelect={() => handleSelect("components")}
            isSelected={selectedTopic === "components"}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) }
        </section>
      </main>
    </div>
  );
}

export default App;

