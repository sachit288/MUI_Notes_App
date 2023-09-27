import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import api from '../Api/Api'

const Form = ({ setOpen }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const handleClick = async () => {
        try {
            // const id =  posts.length? posts[posts.length-1].id+1 : 1;
            const obj = {
                title, body
            }
            const response = await api.post('/posts', obj)
            console.log(response.data);
            setOpen(false);

        }
        catch {
            console.log("error");
        }
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '48ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    id="outlined-multiline-flexible"
                    label="Title"
                    multiline
                    maxRows={4}
                />

                <TextField
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    id="outlined-multiline-flexible"
                    label="Note"
                    multiline
                    rows={4}
                />
            </div>
            <div style={{ display: "flex", justifyContent: 'center' }}>
                <Button variant="outlined" onClick={() => handleClick()}>Create Note</Button>
            </div>
        </Box>
    )
}

export default Form
