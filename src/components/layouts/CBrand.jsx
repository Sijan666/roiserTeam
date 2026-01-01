import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
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
  return (
    <div className="p-[100px]">
      <Container>
        <div className="border-2 border-[#EBEBEB]">
          <Flex>
            <div className="px-[72px] py-[55px] border-r-2 border-r-[#EBEBEB] hover:border-0 hover:scale-125">
              <Images imgSrc={mg} />
            </div>
            <div className="px-[72px] py-[55px] border-r-2 border-r-[#EBEBEB] hover:border-0 hover:scale-125">
              <Images imgSrc={img1} />
            </div>
            <div className="px-[72px] py-[55px] border-r-2 border-r-[#EBEBEB] hover:border-0 hover:scale-125">
              <Images imgSrc={img2} />
            </div>
            <div className="px-[72px] py-[55px] border-r-2 border-r-[#EBEBEB] hover:border-0 hover:scale-125">
              <Images imgSrc={img3} />
            </div>
            <div className="px-[72px] py-[55px] border-r-2 border-r-[#EBEBEB] hover:border-0 hover:scale-125">
              <Images imgSrc={img4} />
            </div>
          </Flex>
          <div className="border-t-2 border-t-[#EBEBEB]">
            <Flex>
              <div className="px-[72px] py-[55px] border-r-2 border-r-[#EBEBEB] hover:border-0 hover:scale-125">
                <Images imgSrc={bg} />
              </div>
              <div className="px-[72px] py-[55px] border-r-2 border-r-[#EBEBEB] hover:border-0 hover:scale-125">
                <Images imgSrc={img5} />
              </div>
              <div className="px-[72px] py-[55px] border-r-2 border-r-[#EBEBEB] hover:border-0 hover:scale-125">
                <Images imgSrc={img6} />
              </div>
              <div className="px-[72px] py-[55px] border-r-2 border-r-[#EBEBEB] hover:border-0 hover:scale-125">
                <Images imgSrc={img7} />
              </div>
              <div className="px-[72px] py-[55px] border-r-2 border-r-[#EBEBEB] hover:border-0 hover:scale-125">
                <Images imgSrc={img8} />
              </div>
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CBrand;
