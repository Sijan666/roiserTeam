import { TbArrowNarrowRight } from "react-icons/tb";
import Images from "./components/Images";

const BlogCommon = ({
  blogImg,
  blogDate,
  blogCategory,
  blogTitle,
  blogBtn,
}) => {
  return (
    <div className="product rounded-md overflow-hidden shadow-newMade">
      <Images imgSrc={blogImg} className={"w-full"} />
      <div className="lg:p-10 p-5">
        <div className="flex gap-x-5">
          <p className="text-[12px] text-[#74787C]">{blogDate}</p>
          <p className="text-[12px] text-[#74787C]">{blogCategory}</p>
        </div>
        <h4 className="lg:py-6 py-3 font-semibold text-[20px] lg:w-[345px] text-[#121212] border-b border-[#EAEAEA] mb-[18px]">
          {blogTitle}
        </h4>
        <div className="flex gap-x-1 items-center  group">
          <button className="text-base text-[#E53E3E] cursor-pointer">
            {blogBtn}
          </button>
          <TbArrowNarrowRight className="text-[#E53E3E] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default BlogCommon;
