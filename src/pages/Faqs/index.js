import FaqsHead from "./FaqsHead";
import AskedQuestions from "./askedQuestions";
import FindingHelp from "./findingHelp";
import WhatWeOffer from "./whatWeOffer";
const FaqsPages = () => {
    return (
        <div>
            <FaqsHead />
            <FindingHelp/>
            <WhatWeOffer/>
            <AskedQuestions/>
        </div>
    )
}
export default FaqsPages;