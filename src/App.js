
import './App.css';
import Navbar from './Navbar';
import Gallery from './Gallery';
import {Heading, Paragraph} from './components/Heading';
import Counter from './components/Counter';
import FuncCounter from './components/FuncCounter';
import HooksDemo from './components/HooksDemo';
import DataFetch from './components/DataFetch';
function App() {
  return (
    <div className="App">
      <h1>Hello Session 2</h1>
      {/* <Heading name= "Heading 1" subHeading= "I am subheading"/>
      <Paragraph />
      <Heading name= "New Heading"/>
      <Paragraph /> */}
      {/* <FuncCounter /> */}
      {/* <Counter />
       */}

       {/* <HooksDemo /> */}


       <DataFetch />
    </div>
  );
}

export default App;
