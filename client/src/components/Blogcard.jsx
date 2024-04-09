
const Blogcard = (props) => {
  let blogdata = props.blogdata;
  return (
    <div className="bg-gray shadow-md overflow-hidden rounded-xl">
    <div className="flex flex-col w-full">
      <img src={blogdata.image} alt="" />
      <div className="p-2">
        <h2 className="mt-1 text-xl text-left">{blogdata.title}</h2>
        <p className="text-sm text-left opacity-70">{blogdata.description}</p>
      </div>
    </div>
    </div>
  );
}

export default Blogcard;
