import { ChangeEvent, useState, SyntheticEvent} from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';

function App() {
  const [search,setSearch] = useState<string>("");
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setSearch(e.target.value);
        console.log(e);
    };

    const onClick = (e:SyntheticEvent) =>{
        console.log(e);
    };
    
  return (
    <div className="App">
        <Search onClick={onClick} 
          search={search}
          handleChange={(e) => handleChange(e)}
        ></Search>
        <CardList></CardList>
    </div>
  );
}

export default App;
