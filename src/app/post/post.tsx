"use client";

import { useQuery } from "@tanstack/react-query";

// api
import { getPosts } from "@/src/api/posts/getPosts";
import * as queryKeys from "queries/queryKeys";

export default function Posts() {
  // This useQuery could just as well happen in some deeper child to
  // the "HydratedPosts"-component, data will be available immediately either way
  const { data: ssrData } = useQuery({
    queryKey: queryKeys.POSTS_DATA,
    queryFn: getPosts
  });

  // This query was not prefetched on the server and will not start
  // fetching until on the client, both patterns are fine to mix
  const { data: csrData } = useQuery({
    queryKey: queryKeys.POSTS_PARAMS_DATA("test"),
    queryFn: getPosts
  });

  return (
    <div className="flex">
      <div>
        <h2 className="text-lg text-center font-bold mb-6">React Query SSR 적용</h2>
        <ul>
          {ssrData?.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg text-center font-bold mb-6">React Query SSR 적용 안함</h2>
        <ul>
          {csrData?.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
