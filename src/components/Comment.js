import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getComments } from "../features/commentSlice";

const Comment = () => {
  const { comments, isLoading } = useSelector((state) => state.comment);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading.....</h1>
      ) : (
        comments.map((comment) => {
          return (
            <div
              style={{
                border: "1px solid black",
                margin: "10px",
                textAlign: "center",
              }}
              key={comment.id}
            >
              <h1>{comment.name}</h1>
              <h3>{comment.email}</h3>
            </div>
          );
        })
      )}
    </>
  );
};

export default Comment;
