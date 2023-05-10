import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { changeValue } from '../../state/searchSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import useDebounce from '../../hooks/useDebounce';

export function SearchBar(){
    const dispatch = useAppDispatch();
    const [searchInput, setSearchInput] = useState('');
    const debounceSearchInput = useDebounce(searchInput, 500);

    useEffect(()=>{
      searchInput && dispatch(changeValue(debounceSearchInput))

    }, [debounceSearchInput, searchInput, dispatch])
    
    return (
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
          marginTop: 2,
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <TextField fullWidth label="Search Book..." id="fullWidth" value={searchInput} sx={{backgroundColor:'#fff'}} onChange={(e)=>setSearchInput(e.target.value)}/>
      </Box>
    )
}
