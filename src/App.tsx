import React from 'react';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center lg:text-4xl text-xl font-bold mt-4">Project Tracker</h1>
      <p className='text-center lg:text-xl text-lg mt-2'>Organize your projects and tasks efficiently</p>
      <Projects />
    </div>
  );
};

export default App;
