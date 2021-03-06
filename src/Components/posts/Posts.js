/* eslint-disable */
import { Button } from 'antd';
import React ,{useEffect,useState}from'react';
import classes from'./Posts.module.css';
import PostsList from './PostsList';
import {BackTop} from'antd';

const Posts =()=>{
    const[post,setPost]=useState([]);
    const[error,setError]=useState('');
    //state  to show loading text
    const[isLoading,setIsLoading]=useState(false);
    const[isError,setIsError]=useState(false);
     const[isValid,setIsValid]=useState(false);
 
      async function fetchData(){
        try{
           setIsLoading(true);
           const response =await fetch("https://jsonplaceholder.typicode.com/posts");
           if(!response.ok){
               setIsError(true);
               setIsValid(false);
               throw new Error('something went wrong');
            }
            const data =await response.json();
            //converting the results into desired object inorder to print
            const transformedPost=data.map((result)=>{
              return {
                id:result.id,
                title:result.title,
                openingText:result.body
              }
            });

            setIsLoading(false);
            setPost(transformedPost);
                     
            } catch (error){
                setError(error.message); 
                setIsError(true);
                setIsValid(false);
                setIsLoading(false);
              }
           } 
 //to fetch the  data conditionally only on isValid is true, without re rendering the component 
    useEffect(()=>{
         if(isValid){
             fetchData();
         }
    },[isValid]);

const fetchPostHandler= (event)=> {
    event.preventDefault();
    setIsValid(true);
}
  
const hidePostHandler=(event)=> {
    event.preventDefault();
    setIsValid(false);
    setIsLoading(false);
}
    return (
        <div>
            {/* backtop , to scroll up top automatically when pressed the button*/}
            <BackTop/>
            <div className={classes.div}><p>YOUR POSTS</p></div>
            <div className={classes.button}>
            {/* function to show buttons conditionally */}
           {!isValid && !isLoading && <Button type="primary"  onClick={fetchPostHandler} >Fetch Posts</Button>}
           {isValid && !isError && <Button type="primary" onClick={hidePostHandler}>Hide Posts</Button>}
           {!isValid && !isError && <h3>Click the button to get posts</h3>}
           {isLoading && <p style={{marginLeft:'10%'}}>Loading.....</p>}
            {isError &&  !isValid  && <h1 style={{color:"red",marginLeft:"3%"}}>{error}</h1>}
            </div>
     
      { isValid &&  !isError && <ul className={classes['post-list']}>
              {post.map((posts) => (
                <PostsList
                  key={posts.id}
                  title={posts.title}
                  openingText={posts.openingText}
                />
              ))}
            </ul> }
        </div>
            
    )
}
export default Posts;