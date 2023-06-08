import { useState } from 'react';

import Card from './components/Card/Card';
import Dropdown from './components/Dropdown/Dropdown';
import Grid from './components/Grid/Grid';
import Pagination from './components/Pagination/Pagination';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div style={{ paddingBlock: '25px' }}></div>

      <section style={{ marginInline: '10%' }}>
        <Dropdown />
      </section>

      <div style={{ paddingBlock: '25px' }}></div>

      <Grid>
        <Card />
        <Card />

        <Card />
        <Card />

        <Card />
        <Card />

        <Card />
        <Card />

        <Card />
        <Card />

        <Card />
        <Card />
      </Grid>

      <div style={{ paddingBlock: '25px' }}></div>

      <div style={{ marginInline: '10%' }}>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={100}
          pageSize={16}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>

      <div style={{ paddingBlock: '25px' }}></div>
    </div>
  );
}

export default App;
