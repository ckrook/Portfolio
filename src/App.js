import "./App.css";
import todo from "./assets/todo.png";
import weather from "./assets/weatherapp.png";

function App() {
  return (
    <div>
      <header className="header">
        <div className="wrap">
          <span className="header__logo">Charles Krook</span>
          <h1>Frontend Developer & Designer</h1>
        </div>
      </header>
      <main>
        <div className="wrap">
          <div className="project">
            <div className="project__img relative p-5 bg-green-300">
              <img width="400px" src={todo} alt="Todo App" />
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold">Todo App</h2>
                <span>Simple todo app built with vanilla js</span>
              </div>
              <div className="flex flex-col text-right">
                <span>Live site</span>
                <span>View Github repo</span>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project__img bg-red-200">
              <img width="400px" src={weather} alt="Todo App" />
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold">Weather App</h2>
                <span>Weather app that showcases current & historic data</span>
              </div>
              <div className="flex flex-col text-right">
                <span>Live site</span>
                <span>View Github repo</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
