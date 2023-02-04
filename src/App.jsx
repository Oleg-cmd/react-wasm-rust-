import React, { useState } from 'react';
// импортируем функцию инициализации и
// нашу функцию `greet`
import init, { greet } from '../pkg';

function App() {
  // состояние для имени
  const [name, setName] = useState('');

  // функция изменения имени
  const changeName = ({ target: { value } }) => setName(value);
  // функция приветствия
  const sayHello = async (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    // выполняем инициализацию
    await init();
    // вызываем нашу функцию
    greet(name);
  };

  return (
    <div className="app">
      <h1>React Rust</h1>

      <div className="container">
        <div className="container__item">
          <form className="form" onSubmit={sayHello}>
            <input
              className="form__field"
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={changeName}
            />
            <button
              type="button"
              className="btn btn--primary btn--inside uppercase"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
