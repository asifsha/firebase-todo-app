// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import { Provider } from 'react-redux'

// import store from './store'
// import saga from './sagas/'
// import Main from './layouts/main'
// import { sagaMiddleware } from './middleware'

// const App = () => (
//   <Provider store={store}>
//     <Main />
//   </Provider>
// )

// export default App

// sagaMiddleware.run(saga)

import React, {Component} from 'react';
import List from './components/List';
class App extends Component {
  render() {
    return (
      <div>
        <List/>
      </div>
    );
  }
}
export default App;
