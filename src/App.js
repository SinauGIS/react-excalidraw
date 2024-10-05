import { Excalidraw } from "@excalidraw/excalidraw";
import './App.css';

function App() {
	return (
		<div className="App">
				<div style={{ height: "100%" }}>
					<h2 className="App-title">
						PAPAN TULIS
					</h2>
					<Excalidraw />
				</div>
		</div>
	);
}

export default App;
