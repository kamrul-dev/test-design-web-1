import React, { useEffect, useState } from 'react';
import Post from './Post';
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from './Loading';

const Posts = () => {
    const [postContents, setPostContents] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    const [page, setPage] = useState(2);



    useEffect(() => {
        const postData = async () => {
            await fetch(`https://backend.uviom.com/public/frontend_api/test-data?page=1&per_page=7`)
                .then(res => res.json())
                .then(data => setPostContents(data.data))
        }
        postData();
    }, []);

    const fethPosts = async () => {
        const res = await fetch(`https://backend.uviom.com/public/frontend_api/test-data?_page=${page}&per_page=7`)
        console.log(res);
        const data = await res.json();
        return data.data;
    }
    const fetchData = async () => {
        const newPost = await fethPosts();
        console.log(newPost);
        setPostContents([...postContents, ...newPost])
        if (newPost.length === 0 || newPost.length < 7) {
            sethasMore(false);
        }
        else {
            setPage(page + 1);
        }
    }

    return (
        <>
            <section className='w-[600px] w- mx-auto mt-12 px-10 mb-10'>
                <h2 className='my-2'>post {postContents.length}</h2>
                <div>
                    <InfiniteScroll
                        dataLength={postContents.length} //This is important field to render the next data
                        next={fetchData}
                        hasMore={hasMore}
                        loader={<Loading></Loading>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        <div className='grid lg:grid-cols-1 gap-5'>
                            {
                                postContents.map(postContent => <Post
                                    key={postContent.id}
                                    postContent={postContent}
                                ></Post>)
                            }
                        </div>
                    </InfiniteScroll>
                </div>
            </section>
        </>
    );
};

export default Posts;