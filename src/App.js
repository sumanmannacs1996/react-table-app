import './App.css';
import BasicTable from './components/BasicTable';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/filtering/FilteringTable';
import PaginationTable from './components/pagination/PaginationTable';

function App() {
  return (
    <div className="App">
      {/*<BasicTable/> */}
      {/*<SortingTable/> */}
      {/*<FilteringTable/> */}
      <PaginationTable/>
    </div>
  );
}

export default App;
