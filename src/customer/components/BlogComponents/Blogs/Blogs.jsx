import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import blogImage from "../../../../assets/Images/bloglistimage.png";
import blogCardImage from "../../../../assets/Images/blogCardImage.png";

const blogs = [
  {
    id: 2,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  {
    id: 3,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  {
    id: 4,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  {
    id: 5,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  {
    id: 6,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  {
    id: 7,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  {
    id: 8,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  {
    id: 9,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  {
    id: 10,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  {
    id: 11,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  {
    id: 12,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  {
    id: 13,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  {
    id: 14,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  {
    id: 15,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  {
    id: 16,
    image: blogCardImage,
    subHeading: " EXPLORE, OTHER, TATTOO,",
    date: " April 12, 2022",
    heading: " What Is A Lash Lift And Why You Should Get It",
    description:
      " Most of us dream of full, dark lashes. Those of us that feel that mascara is not enough, or are simply tired of the everyday routine, often go for eyelash extensions. But even though extensions can provide a spectacular effect, they can be costly and require a bit too much time and maintenance. If you’re […]",
  },
  
];

const fullWidthBlog = {
  id: 1,
  image: blogImage,
  title: "First Tattoo Guide",
  description: "EXPLORE, OTHER, TATTOO,",
  date: "April 12, 2022",
};

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
      <div
        onClick={() => navigate(`/blog/${fullWidthBlog?.id}`)}
        className="flex flex-col items-center shadow-lg pt-4 md:p-4 gap-6 rounded-2xl cursor-pointer"
      >
        <div className="flex flex-col items-center justify-center gap-1.5">
          <h1 className="font-playfair font-bold text-xl">
            {fullWidthBlog?.title}
          </h1>
          <p className="font-mulish text-primary text-xs font-bold">
            {fullWidthBlog?.description}
          </p>
          <p className="text-justify md:text-center text-xs px-7 text-gray-400 w-full max-w-lg ">
            {fullWidthBlog?.date}
          </p>
        </div>
        <div>
          <img src={fullWidthBlog?.image} alt="Blog_image" />
        </div>
      </div>

      {/* Blog List Grid */}
      <div
        className="gap-6 mt-6 
        grid grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3"
      >
        {currentBlogs?.map((blog) => (
          <Card
            key={blog.id}
            className="cursor-pointer hover:shadow-lg pt-0"
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

              <p className="text-xs leading-5">
                {blog?.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
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
    </div>
  );
};

export default BlogPage;
