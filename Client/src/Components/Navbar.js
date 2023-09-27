
import React from 'react'
import { AppBar, Box, Container, InputBase, Modal, Toolbar, Typography, styled } from "@mui/material"
import CreateIcon from '@mui/icons-material/Create';
import SearchInput from './SearchInput';


const Navbar = ({ setOpen, search, setSearch }) => {

  const handleOpen = () => {
    setOpen(true)
  }

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  })

  const Search = styled('div')({
    backgroundColor: "white",
    padding: "0 10px",
    width: "40%",
  })
  return (
    <Box >
      <AppBar position='sticky'>
        <StyledToolbar >
          <Typography variant='h6'>MUI_NotesApp</Typography>
          <Search>
            <SearchInput search={search} setSearch={setSearch} />
          </Search>
          <Box sx={{ display: 'flex' }}>
            <CreateIcon onClick={handleOpen} fontSize='small' />
          </Box>

        </StyledToolbar>
      </AppBar>

    </Box>
  )
}

export default Navbar


