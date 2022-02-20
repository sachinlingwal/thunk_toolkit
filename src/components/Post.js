import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../features/postSlice";
const Post = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.userPost);
  //   const { comments, isLoading } = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  //   useEffect(() => {
  //     dispatch(getComments());
  //   }, []);

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        textAlign: "center",
      }}
    >
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        posts.map((post) => {
          return <h1 key={post.id}>{post.title}</h1>;
        })
      )}
    </div>
  );
};

export default Post;
