import TabButton from './TabButton';
import { useState } from 'react';
import { EXAMPLES } from './../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
export default function Examples() {
  //Inside of the useState() we can specify initial displayed value
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton) {
    //selectedButton => "components", 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        //We would use ButtonsContainer={Section} in order to use custom components
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              onClick={() => handleSelect('components')}
              isSelected={selectedTopic === 'components'}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
