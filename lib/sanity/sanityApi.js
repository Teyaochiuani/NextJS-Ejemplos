import client from "./sanityClient";

export async function getAllPosts() {
  const data = await client.fetch(
    `*[_type == "post"] {
      _id,
      title,
      'slug': slug.current,
    }`
  );

  return data;
}

export async function getPostBySlug(slug) {
  const data = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug] {
      _id,
      title,
      body,
      isPremium,
      'slug': slug.current,
      'author': author->name
    }[0]
  `,
    { slug }
  );

  return data;
}
