import './App.css';
import { people } from './database';
import { PeopleCard } from './components/PeopleCard';


function App() {


  return (
    <div className='container'> 
      {
        people.map( (person, index) => ((
            <PeopleCard key={index} img={person.img} name={person.name} role={person.role} />
          ))  )
      }
    </div>
  );
}


export default App;