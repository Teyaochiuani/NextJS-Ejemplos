import BlockContent from "@sanity/block-content-to-react";
import { useSession } from "next-auth/client";

import { getAllPosts, getPostBySlug } from "../../lib/sanity/sanityApi";

const Post = ({ post }) => {
  const [session, loading] = useSession();

  if (typeof window !== "undefined" && loading) return null;

  if (!session || post.isPremium && !session.user.isPremium) return <p>Vous devez être abonné pour voir ce contenu</p>;

  return (
    <>
      <h1>{post.title}</h1>
      <BlockContent blocks={post.body} />
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: { post },
  };
}
