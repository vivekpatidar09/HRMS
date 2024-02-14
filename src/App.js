import './App.css';
import ElemetHome from './Components/EssentialElements/ElemetHome';
import Home from './Components/Home/Home';
import Join from './Components/Join/Join';
import Demo from './Components/Demo/Demo';
import Logout from './Components/Logout/Logout';
import Graph from './Components/GraphAd/Graph';
import Details from './Components/Details/Details';
import Advertise from './Components/Advertise/Advertise';
import LogoMockup from './Components/Section/LogoMockup';
import TextArea from './Components/Section/TextArea';

function App() {
  return (
    <div>
      
      <Home></Home>
      <Graph></Graph>
      <Details></Details>
      <ElemetHome></ElemetHome>
      <Advertise></Advertise>
      <Join></Join>
      <LogoMockup></LogoMockup>
      <TextArea></TextArea>
      <Demo></Demo>
      <Logout></Logout>

    </div>
  );
}

export default App;
