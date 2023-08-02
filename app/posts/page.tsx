import HydratedPosts from "./hydratedPosts";

export default function Page() {
  return (
    <main className="flex w-full">
      {/* @ts-expect-error Server Component */}
      <HydratedPosts />
    </main>
  );
}
