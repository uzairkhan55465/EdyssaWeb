import "./index.css"
import Shape1 from "../../assets/images/shapes/hero-shape1.png"
import Shape2 from "../../assets/images/shapes/hero-shape2.png"
const PageHeader = ({Title,page}) => {
    return (
        <section className="page-banner-area pt-245 rpt-150 pb-170 rpb-100 rel z-1 bgc-lighter text-center maintain-div">
            <div className="container">
                <div className="banner-inner rpt-10">
                    <h1
                        className="page-title wow fadeInUp delay-0-2s pb-3"

                    >   {Title}</h1>
                    <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s ">
                            <li className="breadcrumb-item">
                               
                                    <a className="mt-3">Home </a>
                             
                            </li>
                            <li className="breadcrumb-item active">{page}</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="banner-shapes">
                <div
                    className="circle wow zoomInLeft delay-0-2s"
                    data-wow-duration="2s"
                />
                <img
                    className="shape-one"
                    src={Shape1}
                    alt="Shape"
                />
                <img
                    className="shape-two"
                    src={Shape2}
                    alt="Shape"
                />
            </div>
        </section>
    )
}
export default PageHeader;