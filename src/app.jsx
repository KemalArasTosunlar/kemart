import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center">
          <Home className="w-6 h-6 text-blue-600" />
          <span className="ml-2 text-xl font-semibold">My App</span>
        </div>
      </nav>
      
      <main className="container mx-auto mt-8 px-4">
        <Switch>
          <Route exact path="/">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
              <p>Your React application is set up with:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Redux & Redux Thunk</li>
                <li>React Router v5</li>
                <li>Tailwind CSS</li>
                <li>Axios</li>
                <li>Toastify</li>
                <li>Lucide React Icons</li>
              </ul>
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;