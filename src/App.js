import ImageLoader from "./scripts/imageLoader/imageLoader.js";
import "./App.css";
function App() {
  return (
    <div className="center">
      <h1 className="title">React OCR Application</h1>
      <div>
        <ImageLoader />
      </div>
    </div>
  );
}

export default App;
