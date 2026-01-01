
import Banner from "../layouts/Banner"
import Blog from "../layouts/Blog"
import CategoryCollection from "../layouts/CategoryCollection"
import CategorySlider from "../layouts/CategorySlider"
import CBrand from "../layouts/CBrand"
import CtaandBrand from "../layouts/CtaandBrand"
import Deal from "../layouts/Deal"
import Discount from "../layouts/Discount"
import Getyourfashion from "../layouts/Getyourfashion"



const Home = () => {
        return (
                <>
                <Banner/>
                <CategorySlider/>
                <Discount/>
                <Getyourfashion/>
                <CategoryCollection/>
                <CtaandBrand/>
                <CBrand/>
                <Deal/>
                <Blog/>
                </>
        )
}

export default Home;
