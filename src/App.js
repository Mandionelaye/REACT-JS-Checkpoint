import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <div className="container-fluid">
     <section className='App'>
      <div className="row">
      <div className="col" id='logo'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="App-link">
           page de connexion
        </h3>
      </header>
      </div>
        <div className="col" id='from'>
        <form action="">
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">login</label>
          <input type="text" className="form-control" id="login" name='login' placeholder="login"/>
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">mots de passe</label>
          <input type="password" className="form-control" id="mtp" name="mtp" placeholder="mots de passe"/>
        </div>
        <div className="mb-3">
           <input type="submit" className='btn btn-outline' id='btn' value="Connexion" />
        </div>
        </form>
        </div>
      </div> 
     </section> 
    </div>
  );
}

export default App;
