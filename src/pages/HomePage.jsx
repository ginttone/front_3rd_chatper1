/** @jsx createVNode */
import { createVNode } from "../lib";
import { globalStore } from "../stores";
import { Footer, Header, Navigation } from "../components/templates";
import { Post, PostForm } from "../components/posts";

export const HomePage = () => {
  const { loggedIn, posts } = globalStore.getState();
  return (
    <div>
      <div className="max-w-md w-full">
        {<Header />}
        {<Navigation loggedIn={loggedIn} />}

        <main className="p-4">
          {loggedIn && <PostForm />}
          <div id="posts-container" className="space-y-4">
            {posts.map((post) => (
              <Post
                key={post.id}
                author={post.author}
                time={post.time}
                content={post.content}
                id={post.id}
              />
            ))}
          </div>
        </main>
        {<Footer />}
      </div>
    </div>
  );
};
