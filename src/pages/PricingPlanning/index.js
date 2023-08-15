import PricingHead from "./pricingHead";
import PricingOne from "./pricingOne";
import PricingTwo from "./pricingTwo";
import PricingThree from "./pricingThree"
const PricingPages = () => {
    return (
        <div  className="overflow-auto">
            <PricingHead />
            <PricingOne />
            <PricingTwo />
            <PricingThree />
        </div>
    )
}
export default PricingPages;