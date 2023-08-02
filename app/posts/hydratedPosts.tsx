import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../queries/getQueryClient";
import { getPosts } from "../../api/posts/getPosts";
import Posts from "./posts";

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
