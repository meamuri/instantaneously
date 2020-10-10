import React from 'react';
import './App.css';

function App() {
    let instant = new Date()
    let forRender = []
    for (let i = 0; i < 100; i++) {
        let info = {
            date: instant.toISOString(),
            unix: instant.getTime(),
            zone: "Europe/Moscow"
        }
        forRender.push(info)
        instant = new Date(info.unix - 86400 * 1000)
    }
  return (
    <div className="App">
      <header className="App-header">
          {forRender.map(e =>
              <p>
                  Time: {e.date}; Unix: {e.unix}
              </p>
          )}
      </header>
    </div>
  );
}

export default App;
