import { dataCoreConcepts } from "./../data.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts(){

    return (        
        <section id="core-concepts">
          <ul>
            {dataCoreConcepts.map((dataCoreItem) => (
              <CoreConcept {...dataCoreItem}/>
            ))}
          </ul>
        </section>
    )
}