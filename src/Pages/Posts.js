import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [postContents, setPostContents] = useState([]);

    useEffect(() => {
        const postData = async () => {
            await fetch('https://backend.uviom.com/frontend_api/test-data')
                .then(res => res.json())
                .then(data => setPostContents(data.data))
        }
        postData();
    }, []);
    return (
        <section className='w-[600px] w- mx-auto mt-12 px-10'>
            <h2 className='my-2'>post</h2>
            <div>
                <div className='grid lg:grid-cols-1 gap-5'>
                    {
                        postContents.map(postContent => <Post
                            key={postContent.id}
                            postContent={postContent}
                        ></Post>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Posts; <h2>This is posts page</h2>