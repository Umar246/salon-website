import { useParams } from "react-router-dom";
import blogs from "./BlogList";
import fullWidthBlog from "./SingleBlog";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { id } = useParams();
  const blogId = Number(id);

  // Check if the id matches the fullWidthBlog or any blog in blogs array
  const blog =
    blogId === fullWidthBlog.id
      ? fullWidthBlog
      : blogs.find((b) => b.id === blogId);

  if (!blog) {
    return <h2>Blog not found!</h2>;
  }

  return (
    <div className="w-[85%] mx-auto py-10 md:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div className="flex flex-col pt-4 md:p-4 gap-6 md:gap-8 rounded-2xl cursor-pointer w-full">
          <div className="w-full rounded-xl">
            <img
              src={blog?.image}
              alt="Blog_image"
              className="w-full rounded-md md:rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <h1 className="font-playfair font-bold text-2xl">
              {blog?.heading}
            </h1>
            <p className="font-mulish text-primary text-sm font-bold">
              {blog?.subHeading}
            </p>
            <p className="text-sm text-gray-400 w-full max-w-lg ">
              {blog?.date}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mt-7 md:mt-10">
        {blog?.questions.map((question) => (
          <div key={question.id} className="mb-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 3 }}
            >
              <h1 className="font-playfair font-bold text-xl mb-5 md:mb-8 font-mulish">
                {question.question}
              </h1>

              <p className="text-base font-mulish font-[600] leading-7">
                {question.answer}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
