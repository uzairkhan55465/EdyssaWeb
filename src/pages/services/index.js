import ServicesHead from "./servciesHead/index"
import CompanyStatistics from "./companyStatistics"
import WorkingProcess from "./workingProcess"
import ServicesWEProvide from "./servicesWeProvide"
import PricingPlan from "./pricingPlan"
const ServicesPages = () => {
    return (
        <>
        <div  style={{ overflow: 'hidden' }}>
            <ServicesHead />
            <CompanyStatistics />
            <WorkingProcess />
            <ServicesWEProvide />
            <PricingPlan/>
            </div>
        </>

    )
}
export default ServicesPages