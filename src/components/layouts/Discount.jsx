import bg1 from "../../assets/bg1.png"
import Button from "../Button";
import Badges from "../Badges";
import Flex from "../Flex";
import Images from "../Images";
import sign from '../../assets/sign.png'

const Discount = () => {
    return (
    <>
    <section id="discount">
        <Flex className={'flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-x-4 pt-10'}>
            {/* Card 1 */}
            <div
                className="p-6 md:p-10 border border-gray-100 h-[250px] bg-cover bg-center bg-no-repeat flex flex-col justify-center w-full md:w-1/3 group"
                style={{ backgroundImage: `url(${bg1})` }}
            >
                <Badges badgesText="Special 50% Discount" className={'group-hover:bg-[#ef5350] group-hover:text-white text-[#ef5350] text-[10px] duration-300'}/>
                <h2 className="text-xl font-bold mb-4 md:mb-6 w-full max-w-[260px] text-gray-800 leading-tight mt-3">
                    The Latest Men's Trends This Season
                </h2>
                <p className="text-[#74787C] text-base opacity-0 group-hover:opacity-100 duration-300 mb-2">
                    Don’t miss the special offer this week
                </p>
                <Flex className={'items-center gap-x-2'}>
                    <Images imgSrc={sign}/>
                    <Button btnText="View Collections" className={'font-semibold text-[#1A1A1A] text-base'} />
                </Flex>
            </div>
            {/* Card 2 */}
            <div
                className="p-6 md:p-10 border border-gray-100 h-[250px] bg-cover bg-center bg-no-repeat flex flex-col justify-center w-full md:w-1/3 group"
                style={{ backgroundImage: `url(${bg1})` }}
            >
                <Badges badgesText="WEEKEND DISCOUNT" className={'group-hover:bg-[#ef5350] group-hover:text-white text-[#ef5350] text-[10px] duration-300'} />
                <h2 className="text-lg font-bold mb-2 uppercase text-gray-800 w-full max-w-[260px] mt-3">
                    Latest Kids Trends This Season
                </h2>
                <p className="text-[#74787C] text-base opacity-0 group-hover:opacity-100 duration-300 mb-2">
                    Don’t miss the special offer this week
                </p>
                <Flex className={'items-center gap-x-2'}>
                    <Images imgSrc={sign}/>
                    <Button btnText="Shop Now" className={'font-semibold text-[#1A1A1A] text-base'} />
                </Flex>
            </div>
            {/* Card 3 */}
            <div
                className="p-6 md:p-10 border border-gray-100 h-[250px] bg-cover bg-center bg-no-repeat flex flex-col justify-center w-full md:w-1/3 group"
                style={{ backgroundImage: `url(${bg1})` }}
            >
                <Badges badgesText="Special 50% Discount" className={'group-hover:bg-[#ef5350] group-hover:text-white text-[#ef5350] text-[10px] duration-300'}/>
                <h2 className="text-xl font-bold mb-4 md:mb-6 w-full max-w-[260px] text-gray-800 leading-tight mt-3">
                    Latest Women's Trends This Season
                </h2>
                <p className="text-[#74787C] text-base opacity-0 group-hover:opacity-100 duration-300 mb-2">
                    Don’t miss the special offer this week
                </p>
                <Flex className={'items-center gap-x-2'}>
                    <Images imgSrc={sign}/>
                    <Button btnText="View Collections" className={'font-semibold text-[#1A1A1A] text-base'} />
                </Flex>
            </div>
        </Flex>
    </section>
    </>
    );
};

export default Discount;