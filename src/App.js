// import logo from './logo.svg';
import './App.css';
import Operating from './components/mobile-operating';
import Manufacturers from './components/mobile-manufacturers';

import OperatingSys from './components/operatingSys';
import Manufacture from './components/Manufacturer';
function App() {

  let info = [
    {name: "Android"},
    {name: "Blackberry"},
    {name: "iphone"},
    {name: "Windows Phone"},
    
  ]

  let comp = [
    {name: "Samsung"},
    {name: "HTC"},
    {name: "Micromax"},
    {name: "Apple"},
    
  ]
  

  return (
    <div className="App">
      <Operating></Operating>
     

      {info.map((user) =>(
        <div  key={user.name}> 
          <OperatingSys {...user} />

        </div>
      )
      )}
    <Manufacturers></Manufacturers>

    {comp.map((user) =>(
        <div key={user.name}> 
          <Manufacture {...user} />

        </div>
      )
      )}

    </div>
  );
}

export default App;
