import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Links from './components/Links';
import linksData from './components/LinksData'
import Footer from './components/Footer';

function App() {
  const eachLink = linksData.map( data => {
        return  <Links 
                  {...data} 
                  key={data.id} 
                />
  })

  return (
    <div className="container mt-md-5 mt-4">
      <Profile />
      <div className="d-grid gap-3 pt-2">
        {eachLink}
      </div>
      <Footer />
    </div>
  );
}

export default App;
