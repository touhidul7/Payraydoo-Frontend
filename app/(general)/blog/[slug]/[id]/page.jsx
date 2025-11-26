import SingleBlog from "../../../../Components/SingleBlog";

export async function generateStaticParams() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; // backend-use only

  try {
    const res = await fetch(`${BASE_URL}/api/blogs`);
    const blogs = await res.json();

    return blogs.map((blog) => ({
      slug: blog.slug,
      id: blog.id.toString(),
    }));
  } catch (err) {
    console.error("Failed to fetch blogs for static params:", err);
    return [];
  }
}

export default function Page({ params }) {
  const { slug, id } = params;

  return (
    <div className="bg-[#F7F9FC] w-full p-4 sm:p-6 lg:p-8 space-y-8">
      <SingleBlog slug={slug} id={id} />
    </div>
  );
}
