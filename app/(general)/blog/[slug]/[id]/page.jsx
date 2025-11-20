import SingleBlog from "../../../../Components/SingleBlog";

export default async function Page({ params }) {
    const { slug, id } = await params;


  return (
    <div className="bg-[#F7F9FC] w-full p-4 sm:p-6 lg:p-8 space-y-8">
      <SingleBlog slug={slug} id={id} />
    </div>
  );
}
