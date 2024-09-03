export default function Blog() {
  return (
    <div className="grid place-content-center w-screen h-screen">
      <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-[40px] md:leading-[1.1] lg:col-span-2 lg:text-[64px] lg:leading-[1.125em]">
        Blog
      </h1>
      <div className="max-w-lg">
        <p className="mt-8 space-y-6 text-lg leading-[1.4] text-gray-300 md:max-w-xl lg:text-xl">
          This is a collection of my thoughts and experiences.
        </p>
      </div>
    </div>
  );
}
