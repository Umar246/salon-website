import { useState } from "react";
import { CiCamera } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui
import { IoArrowBack } from "react-icons/io5";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export default function Workspace({ next, prev, updateData }) {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  const openPreview = (index) => {
    setSelectedIndex(index);
    setPreviewOpen(true);
  };

  const navigatePreview = (direction) => {
    if (direction === "prev" && selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1);
    } else if (direction === "next" && selectedIndex < images.length - 1) {
      setSelectedIndex((prev) => prev + 1);
    }
  };

  const isValid = () => images.length > 0;

  const handleNext = () => {
    if (!isValid()) return toast.error("Upload at least one image");
    updateData(images);
    next();
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-base text-center w-full md:text-xl text-primary font-mulish font-bold">
            Upload Workplace Images
          </h2>
          <button
            onClick={next}
            className="text-gray-400 underline hover:text-secondary text-sm"
          >
            Skip
          </button>
        </div>

        {/* Upload Box */}
        <label className="border border-gray-300 mt-7 mb-4 w-full max-w-xs mx-auto h-50 rounded-xl cursor-pointer flex flex-col justify-center items-center text-gray-500 hover:border-secondary hover:text-secondary">
          <CiCamera size={48} />
          <span className="text-sm w-full px-10  text-center mt-3">
            Click to upload pictures your workspace
          </span>
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>

        {/* Thumbnails */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => openPreview(index)}
              className={`relative w-50 h-35 rounded-xl overflow-hidden border-2 cursor-pointer ${
                selectedIndex === index
                  ? "border-secondary"
                  : "border-transparent"
              }`}
            >
              <img
                src={img.url}
                alt="Uploaded"
                className="object-cover w-full h-full"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage(index);
                }}
                className="absolute top-1 right-1 text-white bg-black/50 hover:bg-black/70 rounded-full"
              >
                <RxCrossCircled size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full mt-10">
        <Button
          onClick={prev}
          variant="outline"
          className="text-[#939393] font-normal px-8 md:px-12 rounded-sm"
        >
          Back
        </Button>
        <Button
          disabled={!isValid()}
          onClick={handleNext}
          className="bg-secondary hover:bg-amber-600 font-normal px-8 md:px-12 rounded-sm"
        >
          Next
        </Button>
      </div>

      {/* Image Preview Modal */}
      {previewOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center">
          {/* Overlay */}
          <div
            className="absolute inset-0"
            onClick={() => setPreviewOpen(false)}
          />

          {/* Preview Container */}
          <div className="relative bg-white rounded-lg p-4 max-w-[90%] max-h-[90%] flex flex-col items-center justify-center">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-primary text-white rounded-t-lg">
              <button
                onClick={() => setPreviewOpen(false)}
                className="text-white hover:text-gray-300"
              >
                <IoArrowBack />
              </button>
              <span className="text-sm font-medium">Image Viewer</span>
              <div style={{ width: 24 }} /> {/* spacer for alignment */}
            </div>

            {/* Image */}
            <img
              src={images[selectedIndex]?.url}
              alt="Preview"
              className="max-h-[75vh] max-w-[90vw] mt-10 object-contain rounded"
            />

            {/* Navigation Arrows */}
            {selectedIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePreview("prev");
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-700/80 hover:bg-gray-600 p-2 rounded-full"
              >
                <FaChevronLeft size={24} />
              </button>
            )}

            {selectedIndex < images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePreview("next");
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-700/80 hover:bg-gray-600 p-2 rounded-full"
              >
                <FaChevronRight size={24} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

Workspace.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
};
