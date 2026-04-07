import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import blogGrid from "../../assets/blogGrid.png";
import BlogCommon from "../../BlogCommon";

const Bloggrid = () => {
  const gridApi = [
    {
      id: 1,
      blogImg: blogGrid,
      blogDate: "MARCH 15, 2022",
      blogCategory: "OIL CHANGE",
      blogTitle: "How to Decorate Your Car for Halloween",
      blogBtn: "Read More",
    },
    {
      id: 2,
      blogImg: blogGrid,
      blogDate: "MARCH 15, 2022",
      blogCategory: "OIL CHANGE",
      blogTitle: "How to Decorate Your Car for Halloween",
      blogBtn: "Read More",
    },
    {
      id: 3,
      blogImg: blogGrid,
      blogDate: "MARCH 15, 2022",
      blogCategory: "OIL CHANGE",
      blogTitle: "How to Decorate Your Car for Halloween",
      blogBtn: "Read More",
    },
    {
      id: 4,
      blogImg: blogGrid,
      blogDate: "MARCH 15, 2022",
      blogCategory: "OIL CHANGE",
      blogTitle: "How to Decorate Your Car for Halloween",
      blogBtn: "Read More",
    },
    {
      id: 5,
      blogImg: blogGrid,
      blogDate: "MARCH 15, 2022",
      blogCategory: "OIL CHANGE",
      blogTitle: "How to Decorate Your Car for Halloween",
      blogBtn: "Read More",
    },
    {
      id: 6,
      blogImg: blogGrid,
      blogDate: "MARCH 15, 2022",
      blogCategory: "OIL CHANGE",
      blogTitle: "How to Decorate Your Car for Halloween",
      blogBtn: "Read More",
    },
    {
      id: 7,
      blogImg: blogGrid,
      blogDate: "MARCH 15, 2022",
      blogCategory: "OIL CHANGE",
      blogTitle: "How to Decorate Your Car for Halloween",
      blogBtn: "Read More",
    },
    {
      id: 8,
      blogImg: blogGrid,
      blogDate: "MARCH 15, 2022",
      blogCategory: "OIL CHANGE",
      blogTitle: "How to Decorate Your Car for Halloween",
      blogBtn: "Read More",
    },
    {
      id: 9,
      blogImg: blogGrid,
      blogDate: "MARCH 15, 2022",
      blogCategory: "OIL CHANGE",
      blogTitle: "How to Decorate Your Car for Halloween",
      blogBtn: "Read More",
    },
  ];

  return (
    <>
      <div className="bg-[url('/src/assets/loginBg.png')] bg-cover bg-center bg-no-repeat lg:py-[150px] py-25">
        <Container>
          <Flex className={"justify-between flex-col lg:flex-row gap-y-3"}>
            <h3 className="text-[#1A1A1A] lg:text-6xl text-4xl font-semibold">
              Blog Grid
            </h3>
            <div className="flex gap-x-3 items-center">
              <p className="text-[#74787C] text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300">
                <Link to={"/"}>Home</Link>
              </p>
              <MdKeyboardArrowRight className="text-[#74787C]" />
              <p className="text-[#74787C] text-[18px] hover:text-[#1A1A1A] hover:font-semibold duration-300">
                Blog Grid
              </p>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="lg:py-25 py-10">
        <Container>
          <div className="grid lg:grid-cols-3 gap-5 grid-cols-1 sm:grid-cols-2 grid-rows-1">
            {gridApi.map((item) => (
              <div key={item.id} className="">
                <BlogCommon
                  blogImg={item.blogImg}
                  blogDate={item.blogDate}
                  blogCategory={item.blogCategory}
                  blogTitle={item.blogTitle}
                  blogBtn={item.blogBtn}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Bloggrid;
