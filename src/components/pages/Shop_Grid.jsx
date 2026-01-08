// import React from "react";
// import Container from "../Container";
// import Flex from "../Flex";
// import { RiArrowRightSLine } from "react-icons/ri";
// import Product from "../Product";
// import Proimg from "/src/assets/Car.png";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// const Shop_Grid = () => {
//   return (
//     <>
//       <div className="bg-[url(/src/assets/shopGrid.png)] py-25">
//         <Container>
//           <Flex className={"justify-between"}>
//             <h3 className="text-[#1A1A1A] text-[60px] font-semibold">
//               Shop Grid
//             </h3>
//             <Flex className={"gap-x-4"}>
//               <p className="text-[#74787C] text-[18px]">Home</p>
//               <RiArrowRightSLine className="text-[#74787C] text-xl" />
//               <p className="text-[#1A1A1A] text-[18px] font-semibold">
//                 Shop Grid
//               </p>
//             </Flex>
//           </Flex>
//         </Container>
//       </div>
//       <Container className={"my-25"}>
//         <Flex className={"flex-wrap gap-y-6"}>
//           <Product
//             prductImg={Proimg}
//             productType={"Levi’s Cotton"}
//             productTitle={"Monica Diara Party Dress"}
//             productPrice={"$893.00"}
//             badgeText={"New"}
//           />
//           <Product
//             prductImg={Proimg}
//             productType={"Levi’s Cotton"}
//             productTitle={"Monica Diara Party Dress"}
//             productPrice={"$893.00"}
//           />
//           <Product
//             prductImg={Proimg}
//             productType={"Levi’s Cotton"}
//             productTitle={"Monica Diara Party Dress"}
//             productPrice={"$893.00"}
//           />
//           <Product
//             prductImg={Proimg}
//             productType={"Levi’s Cotton"}
//             productTitle={"Monica Diara Party Dress"}
//             productPrice={"$893.00"}
//           />
//           <Product
//             prductImg={Proimg}
//             productType={"Levi’s Cotton"}
//             productTitle={"Monica Diara Party Dress"}
//             productPrice={"$893.00"}
//           />
//           <Product
//             prductImg={Proimg}
//             productType={"Levi’s Cotton"}
//             productTitle={"Monica Diara Party Dress"}
//             productPrice={"$893.00"}
//           />
//           <Product
//             prductImg={Proimg}
//             productType={"Levi’s Cotton"}
//             productTitle={"Monica Diara Party Dress"}
//             productPrice={"$893.00"}
//           />
//           <Product
//             prductImg={Proimg}
//             productType={"Levi’s Cotton"}
//             productTitle={"Monica Diara Party Dress"}
//             productPrice={"$893.00"}
//           />
//         </Flex>
//         <Flex className="gap-x-[7px] mt-[50px] justify-center">
//           <div className="bg-[#E53E3E] text-white rounded-sm py-4.5 px-5 text-sm font-semibold">
//             01
//           </div>
//           <div className="bg-[#F6F6F7] text-[#1A1A1A] rounded-sm py-4.5 px-5 text-sm font-semibold">
//             02
//           </div>
//           <div className="bg-[#F6F6F7] text-[#1A1A1A] rounded-sm py-4.5 px-5 text-sm font-semibold">
//             03
//           </div>
//           <div className="bg-[#F6F6F7] text-[#1A1A1A] rounded-sm py-4.5 px-5 text-sm font-semibold">
//             04
//           </div>
//           <div className="bg-[#F6F6F7] text-[#1A1A1A] rounded-sm py-4.5 px-5 text-xl font-semibold">
//             <MdKeyboardDoubleArrowRight />
//           </div>
//         </Flex>
//       </Container>
//     </>
//   );
// };

// export default Shop_Grid;





import React from "react";
// আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী পাথ ঠিক করে নিন
import Container from "../Container"; 
import Flex from "../Flex"; 
import Product from "../Product"; 
import Proimg from "/src/assets/Car.png"; // পাথ চেক করুন

// Icons
import { RiArrowRightSLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Shop_Grid = () => {
  return (
    <>
      {/* Header Section */}
      {/* py-25 কাজ করে না, তাই py-24 (96px) বা py-[100px] ব্যবহার করুন */}
      <div className="bg-[#F5F5F3] py-24 w-full"> 
        <Container>
          <Flex className="justify-between items-center w-full">
            <h3 className="text-[#1A1A1A] text-3xl md:text-[49px] font-semibold">
              Shop Grid
            </h3>
            <Flex className="gap-x-2 items-center">
              <p className="text-[#74787C] text-sm md:text-[18px]">Home</p>
              <RiArrowRightSLine className="text-[#74787C] text-xl" />
              <p className="text-[#1A1A1A] text-sm md:text-[18px] font-semibold">
                Shop Grid
              </p>
            </Flex>
          </Flex>
        </Container>
      </div>

      {/* Product Grid Section */}
      <Container className="my-24">
        {/* Flex এর বদলে Grid ব্যবহার করা অনেক বেশি নিরাপদ এবং রেস্পন্সিভ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {/* এখানে আমি লুপ ব্যবহার করার পরামর্শ দিব, কোড ক্লিন রাখার জন্য */}
          {[...Array(8)].map((_, index) => (
            <Product
              key={index}
              className="w-full" // প্রোডাক্ট যেন পুরো বক্স নেয়
              prductImg={Proimg}
              productType={"Levi’s Cotton"}
              productTitle={"Monica Diara Party Dress"}
              productPrice={"$893.00"}
              badgeText={index === 0 ? "New" : null} // উদাহরণস্বরূপ প্রথমটাতে ব্যাজ দিলাম
            />
          ))}
        </div>

        {/* Pagination */}
        <Flex className="gap-x-[15px] mt-[50px] justify-between md:justify-end items-center">
          <p className="text-[#767676] text-sm font-normal leading-[30px]">
            Products from 1 to 8 of 80
          </p>
          <Flex className="gap-x-4">
            <div className="bg-[#1A1A1A] text-white border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] cursor-pointer duration-300 w-9 h-9 flex justify-center items-center text-sm font-semibold">
              1
            </div>
            <div className="bg-white text-[#767676] border border-[#F0F0F0] hover:bg-[#1A1A1A] hover:text-white cursor-pointer duration-300 w-9 h-9 flex justify-center items-center text-sm font-semibold">
              2
            </div>
            <div className="bg-white text-[#767676] border border-[#F0F0F0] hover:bg-[#1A1A1A] hover:text-white cursor-pointer duration-300 w-9 h-9 flex justify-center items-center text-sm font-semibold">
              3
            </div>
            <div className="bg-white text-[#767676] border border-[#F0F0F0] hover:bg-[#1A1A1A] hover:text-white cursor-pointer duration-300 w-9 h-9 flex justify-center items-center text-sm font-semibold">
              4
            </div>
            <div className="bg-white text-[#767676] border border-[#F0F0F0] hover:bg-[#1A1A1A] hover:text-white cursor-pointer duration-300 w-9 h-9 flex justify-center items-center text-xl font-semibold">
              <MdKeyboardDoubleArrowRight />
            </div>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Shop_Grid;
