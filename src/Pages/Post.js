import React, { useState } from 'react';
import avatar from '../images/profileAvater.png'
import { BsThreeDots } from 'react-icons/bs';
import { GrLike } from 'react-icons/gr';
import { FaRegComments } from 'react-icons/fa';
import { FaShareSquare } from 'react-icons/fa';
// import postImage from '../images/postimage.png'

const Post = ({ postContent }) => {
    const { created_at, user, profile_images, post_contents, post_details, liked_posts_count, comments_count } = postContent;


    /*---------------Profile Photo Location + friend_profile_photo--------------*/
    const profileImg = `https://uviom-life.s3.amazonaws.com/images/personal/friend_profile_photo/${profile_images.friend_profile_photo}`;


    /*--------------Post Image Location + content_name------------*/
    const postImg = `https://uviom-life.s3.amazonaws.com/images/content/post_images/${post_contents[0].content_name}`;
 
    return (
        <div className='p-4 bg-[#F1F1F1] rounded-lg'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img src={profileImg} className="w-14 border-gray-600 border-2 rounded-full" alt="" />
                    <div className='ml-4'>
                        <h4>{user.first_name} ({user.last_name})</h4>
                        <h5>{created_at}</h5>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <BsThreeDots size={24} />
                </div>
            </div>
            <div className='py-4'>
                <img src={postImg} className="rounded-lg" alt="" />
                <p className='p-3'>{post_details}</p>
            </div>
            <div className='flex justify-between px-12'>
                <div className='flex justify-center items-center bg-white px-3 py-1 rounded-full cursor-pointer hover:bg-blue-100'>
                    <GrLike /> <span className='ml-1'>{liked_posts_count} Like</span>
                </div>
                <div className='flex justify-center items-center bg-white px-3 py-1 rounded-full cursor-pointer hover:bg-blue-100'>
                    <FaRegComments /> <span className='ml-1'>{comments_count} Comment</span>
                </div>
                <div className='flex justify-center items-center bg-white px-3 py-1 rounded-full cursor-pointer hover:bg-blue-100'>
                    <FaShareSquare /><span className='ml-1'>Share</span>
                </div>
            </div>
        </div>
    );
};

export default Post;