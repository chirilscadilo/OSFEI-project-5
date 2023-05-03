import React, {useRef} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { changeValue } from '../../state/searchSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';


export function SearchBar(){
    
    const dispatch = useAppDispatch();
    const searchInput = useRef<HTMLInputElement>(null);

    const handleSearch=(event: React.FormEvent)=>{
        event.preventDefault();

        const enteredText = searchInput.current?.value;

        if(enteredText?.trim().length === 0){
            return;
        }

        enteredText && dispatch(changeValue(enteredText));
    }
    
    return (
    <form onSubmit={handleSearch}>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginTop: 2,
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    >
      <TextField fullWidth label="Search Book..." id="fullWidth" inputRef={searchInput} sx={{backgroundColor:'#fff'}}/>
      <Button sx={{marginTop: 2, width: 500, maxWidth: '100%',marginRight: 'auto', marginLeft: 'auto', fontSize: 16}} type='submit'>Search</Button>
    </Box>
    </form>
    )
}