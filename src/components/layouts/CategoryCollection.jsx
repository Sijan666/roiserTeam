
import ButtonforCC from "../ButtonforCC"
import Container from "../Container"
import Flex from "../Flex"



const CategoryCollection = () => {
  return (
    <>
    <Container className={'py-[100px]'}>
      <Flex className={'gap-x-4'}>
        <div className="bg-[#E8E8E8] px-10 py-10 rounded-[10px] w-1/2">
          <div className="shadow-newTwo bg-white inline-block px-5 py-3 rounded-[5px]">
            <p className="text-[#E53E3E] font-semibold text-[12px]">1500+ Products</p>
          </div>
          <h4 className="py-5 text-[#1A1A1A] font-semibold text-[24px] uppercase">Women Collections</h4>
          <p className="w-[390px] text-[#74787C] text-[14px] pb-10">This is genuinely the first theme i bought for which i did not had to write one line of code.</p>
          <div className="">
            <ButtonforCC btnTexts={'Blazer'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
            <ButtonforCC btnTexts={'Blouses & Shirts'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
            <ButtonforCC btnTexts={'Dresser'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
            <ButtonforCC btnTexts={'Jeans'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
            <ButtonforCC btnTexts={'Knits'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
            <ButtonforCC btnTexts={'Pants'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
            <ButtonforCC btnTexts={'Skirts'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
            <ButtonforCC btnTexts={'Suits'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
            <ButtonforCC btnTexts={'Sweatshirts & Hoodie'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
            <ButtonforCC btnTexts={'T-Shirts'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
            <ButtonforCC btnTexts={'Tops & Bodysuits'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
          </div>
        </div>
        <div className="w-1/2">
          <div className="bg-[url('/src/assets/cc2.png')] py-10 px-10 rounded-[10px] bg-center bg-cover bg-no-repeat">
            <div className="shadow-newTwo bg-white inline-block px-5 py-3 rounded-[5px]">
              <p className="text-[#E53E3E] font-semibold text-[12px]">1500+ Products</p>
            </div>
            <h4 className="py-5 text-[#1A1A1A] font-semibold text-[24px] uppercase">Men Collections</h4>
            <div className="">
              <ButtonforCC btnTexts={'Blazer'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
              <ButtonforCC btnTexts={'Blouses & Shirts'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
              <ButtonforCC btnTexts={'Dresser'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
              <ButtonforCC btnTexts={'Jeans'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
            </div>
          </div>
          <div className="bg-[url('/src/assets/cc3.png')] py-10 px-10 rounded-[10px] bg-center bg-cover bg-no-repeat mt-4">
            <div className="shadow-newTwo bg-white inline-block px-5 py-3 rounded-[5px]">
              <p className="text-[#E53E3E] font-semibold text-[12px]">1500+ Products</p>
            </div>
            <h4 className="py-5 text-[#1A1A1A] font-semibold text-[24px] uppercase">Top Accessories</h4>
            <div className="">
              <ButtonforCC btnTexts={'Blazer'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
              <ButtonforCC btnTexts={'Blouses & Shirts'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
              <ButtonforCC btnTexts={'Dresser'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
              <ButtonforCC btnTexts={'Jeans'} className={'block pb-5 text-base text-[#1A1A1A]'}/>
            </div>
          </div>
        </div>
      </Flex>
    </Container>
    </>
  )
}

export default CategoryCollection
