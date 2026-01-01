// import women from "../../assets/bg.png";
// import men from "../../assets/bg1.png"
import bg1 from "../../assets/bg1.png"
// import about from "../../assets/bg.png"
import Button from "../Button";
import Badges from "../Badges";
// import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import sign from '../../assets/sign.png'



const Discount = () => {
    return (
    <>
        <Flex className={'justify-between items-center w-full gap-x-4 pt-10'}>
            <div
                className="p-10 border border-gray-100 h-[250px] bg-cover bg-center bg-no-repeat flex flex-col justify-center w-1/3 group"
                style={{ backgroundImage: `url(${bg1})` }}
            >
                {/* <p className="text-red-400 text-xs mb-2 font-medium">
                Special 50% Discount
                </p> */}
                <Badges badgesText="Special 50% Discount" className={'group-hover:bg-[#ef5350] group-hover:text-white text-[#ef5350] text-[10px] duration-300'}/>
                <h2 className="text-xl font-bold mb-6 w-[260px] text-gray-800 leading-tight">
                The Latest Men's Trends This Season
                </h2>
                <p className="text-[#74787C] text-base opacity-0 group-hover:opacity-100 duration-300">Don’t miss the special offer this week</p>
                <Flex>
                    <Images imgSrc={sign}/>
                    <Button btnText="View Collections" className={'font-semibold text-[#1A1A1A] text-base'} />
                </Flex>
            </div>
            <div
                className="p-10 border border-gray-100 h-[250px] bg-cover bg-center bg-no-repeat flex flex-col justify-center w-1/3 group"
                style={{ backgroundImage: `url(${bg1})` }}
            >
                <Badges badgesText="WEEKEND DISCOUNT" className={'group-hover:bg-[#ef5350] group-hover:text-white text-[#ef5350] text-[10px] duration-300'} />
                <h2 className="text-lg font-bold mb-2 uppercase text-gray-800 w-[260px]">
                Latest Kids Trends This Season
                </h2>
                {/* <Button btnText="Shop Now" /> */}
                <p className="text-[#74787C] text-base opacity-0 group-hover:opacity-100 duration-300">Don’t miss the special offer this week</p>
                <Flex>
                    <Images imgSrc={sign}/>
                    <Button btnText="Shop Now" className={'font-semibold text-[#1A1A1A] text-base'} />
                </Flex>
            </div>
            <div
                className="p-10 border border-gray-100 h-[250px] bg-cover bg-center bg-no-repeat flex flex-col justify-center w-1/3 group"
                style={{ backgroundImage: `url(${bg1})` }}
            >
                {/* <p className="text-red-400 text-xs mb-2 font-medium">
                Special 50% Discount
                </p> */}
                <Badges badgesText="Special 50% Discount" className={'group-hover:bg-[#ef5350] group-hover:text-white text-[#ef5350] text-[10px] duration-300'}/>
                <h2 className="text-xl font-bold mb-6 w-[260px] text-gray-800 leading-tight">
                Latest Women's Trends This Season
                </h2>
                {/* <Button btnText="View Collections" /> */}
                <p className="text-[#74787C] text-base opacity-0 group-hover:opacity-100 duration-300">Don’t miss the special offer this week</p>
                <Flex>
                    <Images imgSrc={sign}/>
                    <Button btnText="View Collections" className={'font-semibold text-[#1A1A1A] text-base'} />
                </Flex>
            </div>
        </Flex>
    </>
    );
};

export default Discount;
