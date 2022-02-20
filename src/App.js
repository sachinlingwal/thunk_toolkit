import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comment from "./components/Comment";
import Header from "./components/Header";
import Post from "./components/Post";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="comments" element={<Comment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
