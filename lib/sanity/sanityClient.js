import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "o4tb68cy",
  dataset: "production",
  useCdn: true
});
