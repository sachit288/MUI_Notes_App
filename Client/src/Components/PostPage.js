import { Box, Card, CardContent, Modal, Stack, Typography } from '@mui/material'
import Form from './Form';
import Posts from './Posts';

const PostPage = ({ posts, open, setOpen, setPosts }) => {
    const handleClose = () => {
        setOpen(false)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,

        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Form setOpen={setOpen} posts={posts} />
                </Box>

            </Modal>
            <Stack direction="row" justifyContent="center">
                <Stack direction='column' width="45vw">
                    {
                        posts.map((post, index) => (
                            (index % 2 === 0) && <>
                                <Posts key={post.id} post={post} posts={posts} setPosts={setPosts} />
                            </>
                        ))
                    }

                </Stack>
                <Stack direction='column' width="45vw">
                    {
                        posts.map((post, index) => (
                            (index % 2 === 1) && <>
                                <Posts key={post.id} post={post} posts={posts} setPosts={setPosts} />
                            </>
                        ))
                    }
                </Stack>
            </Stack>
        </>
    )
}

export default PostPage
