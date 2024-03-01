import Link from "next/link";

import { getAllPosts } from "../../lib/sanity/sanityApi";

const Post = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link href="/post/[slug]" as={`/post/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: { posts },
  };
}
