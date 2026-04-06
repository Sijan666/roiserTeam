import Container from "../Container";
import Images from "../Images"; // Flex কম্পোনেন্ট আর লাগছে না, তাই বাদ দেওয়া হয়েছে
import mg from "/src/assets/mg.png";
import bg from "/src/assets/bg.png";
import img1 from "/src/assets/img1.png";
import img2 from "/src/assets/img2.png";
import img3 from "/src/assets/img3.png";
import img4 from "/src/assets/img4.png";
import img5 from "/src/assets/img5.png";
import img6 from "/src/assets/img6.png";
import img7 from "/src/assets/img7.png";
import img8 from "/src/assets/img8.png";

const CBrand = () => {
  const allImages = [mg, img1, img2, img3, img4, bg, img5, img6, img7, img8];

  return (
    <div className="py-24 lg:p-[100px]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l-2 border-t-2 border-[#EBEBEB] overflow-hidden">
          {allImages.map((img, index) => (
            <div key={index} className="group flex justify-center items-center py-[55px] px-4 border-r-2 border-b-2 border-[#EBEBEB] cursor-pointer">
              <div className="transition-transform duration-300 group-hover:scale-125">
                <Images imgSrc={img} className="w-full h-auto object-contain" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CBrand;