import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import blogs from "./BlogList";
import fullWidthBlog from "./SingleBlog";
import { motion } from "framer-motion";

const BlogPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Adjust items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6); // Large Screen (2 rows × 3 columns)
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(4); // Medium Screen (3 rows × 2 columns)
      } else {
        setItemsPerPage(2); // Small Screen (6 rows × 1 column)
      }
    };

    updateItemsPerPage(); // Initial check
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  return (
    <div className="w-[85%] mx-auto py-10 md:py-20 flex flex-col gap-5 md:gap-10 lg:gap-16">
      {/* Blog 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div
          onClick={() => navigate(`/blog/${fullWidthBlog?.id}`)}
          className="flex flex-col items-center pt-4 shadow-[0px_8px_30px_0px_#0000000F] transition-shadow duration-300 hover:shadow-xl md:p-4 gap-6 rounded-2xl cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center gap-1.5">
            <h1 className="font-playfair font-bold text-xl">
              {fullWidthBlog?.heading}
            </h1>
            <p className="font-mulish text-primary text-xs font-bold">
              {fullWidthBlog?.subHeading}
            </p>
            <p className="text-justify md:text-center text-xs px-7 text-gray-400 w-full max-w-lg ">
              {fullWidthBlog?.date}
            </p>
          </div>
          <div>
            <img src={fullWidthBlog?.image} alt="Blog_image" />
          </div>
        </div>
      </motion.div>

      {/* Blog List Grid */}
      <div
        className="gap-6 mt-6 
        grid grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3"
      >
        {currentBlogs?.map((blog) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            key={blog.id}
          >
            <Card
              className="cursor-pointer pt-0 shadow-[0px_6px_20px_0px_#00000014] transition-shadow duration-300 hover:shadow-2xl"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <CardHeader className="w-full px-0 py-0">
                <img src={blog?.image} alt="Blog_card_image" />
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p className="font-mulish text-primary text-xs font-bold">
                  {blog?.subHeading}
                </p>

                <p className="text-xs text-gray-400 w-full max-w-lg ">
                  {blog?.date}
                </p>

                <h1 className="font-playfair font-bold text-md">
                  {blog?.heading}
                </h1>

                <p className="text-xs leading-5">{blog?.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <Pagination className="mt-6 flex justify-center">
          <PaginationContent className="flex gap-3">
            <PaginationItem>
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="border border-gray-400 rounded-full px-2.5 py-2.5 disabled:opacity-50"
              >
                <IoIosArrowRoundBack size={20} />
              </button>
            </PaginationItem>

            <div className="hidden md:flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <button
                    className={`px-3 py-1 mx-1 rounded 
                ${
                  currentPage === index + 1
                    ? "border border-secondary text-secondary rounded-full px-4 py-1.5 text-lg"
                    : "border border-gray-400 rounded-full px-4 py-1.5 text-lg"
                }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </PaginationItem>
              ))}
            </div>

            <PaginationItem>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="border border-gray-400 rounded-full px-2.5 py-2.5 disabled:opacity-50"
              >
                <IoIosArrowRoundForward size={20} />
              </button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </motion.div>
    </div>
  );
};

export default BlogPage;
