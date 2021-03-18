import image1 from "./image1.jpg"
import './style.css';

function App() {
  return (
<div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">ayoub mejri</h1>
    <br />
    <img src="/image.jpg" alt="momo"/>
    <br />
    <img src={image1} alt="mimi" />
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
     </div>
    
  );
}

export default App;
