import { Box, Card, CardContent, Stack, TextareaAutosize, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import api from '../Api/Api'


const Posts = ({ post, posts, setPosts }) => {

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const newPosts = posts.filter((post) => post._id !== id)
            setPosts(newPosts)
        }
        catch {
            console.log("error")
        }
    }
    return (
        <Card sx={{ wordBreak: "break-word", Width: "95vw", margin: '10px' }}>
            <CardContent>
                <Stack direction='row' justifyContent='space-between'>
                    <Typography variant='h4'>{post.title}</Typography>
                    <span onClick={() => handleDelete(post._id)} ><DeleteIcon /></span>

                </Stack>

                <p>{post.body}</p>
            </CardContent>
        </Card>
    )
}

export default Posts
