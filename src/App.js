import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card
        name="Garfield"
        phone="111-111-1111"
        email="bonin@gmail.com"
        image={{
          url: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'cute cat',
        }}
        favoured={false}
      />
    </div>
  );
}

export default App;
