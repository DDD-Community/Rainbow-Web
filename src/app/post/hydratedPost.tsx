import { dehydrate, Hydrate } from "@tanstack/react-query";
import { getPosts } from "@/src/api/posts/getPosts";
import getQueryClient from "@/src/queries/getQueryClient";
import Posts from "./post";

export default async function HydratedPosts() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(["posts"], getPosts);
  await queryClient.prefetchQuery(["posts2"], getPosts);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Posts />
    </Hydrate>
  );
}
