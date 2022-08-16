
import './App.css';
import Name from './Component/Profile/FullName';
import Myaddress from './Component/Profile/Address';
import Photo from './Component/Profile/ProfilePhoto'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Photo/>
<Name/>
<Myaddress/>
</header>
</div>
  );
}

export default App;
