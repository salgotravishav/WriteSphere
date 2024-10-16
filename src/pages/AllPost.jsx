import appwriteService from "../appwrite/config";
import { Postcard, Container } from "../components";
import { useState, useEffect } from "react";

const AllPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        {posts && posts.length > 0 ? (
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <Postcard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-2xl font-bold hover:text-gray-500">
            No Post is available
          </h1>
        )}
      </Container>
    </div>
  );
};

export default AllPost;
