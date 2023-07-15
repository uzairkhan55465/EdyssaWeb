import "./index.css"

const AskedQuestions = () => {
    return (
        <section className="faqs-area-area bgc-lighter py-130 rel z-1">
            <div className="container">
                <div className="row justify-content-between align-items-end pb-5">
                    <div className="col-xl-6 col-lg-8 wow fadeInUp delay-0-2s" >
                        <div className="section-title mb-35"><span className="sub-title style-two mb-15">Faqs</span>
                            <h2>Asked Questions about Website Design</h2></div></div>
                    <div className="col-lg-4 text-lg-end wow fadeInUp delay-0-4s" >
                        <a className="theme-btn style-three mb-55" href="/contact">Add Questions <i className="fas fa-angle-double-right">
                        </i></a></div></div>
                <div id="faq-accordion" className="accordion style-two accordion"><div className="row">
                    <div className="col-lg-6 rmb-20 wow fadeInUp delay-0-2s" ><div className="accordion-item">
                        <h5 className="accordion-header">
                            <button className="accordion-button " data-bs-toggle="collapse" type="button">Will you  provide website layout about design ?</button>
                        </h5>
                        <div data-bs-parent="#faq-accordion" className="accordion-collapse  collapse show">
                            <div className="accordion-body">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore</p></div>
                        </div>
                    </div>
                    </div>
                </div><div className="accordion-item"><h5 className="accordion-header"><button className="accordion-button collapsed" data-bs-toggle="collapse" type="button">How much does cost to design website ?</button></h5><div data-bs-parent="#fa-accordion" className="accordion-collapse collapse collapse"><div className="accordion-body"><p>Fortunately, we aren’t just designers and developers here we are writer strategists, techs and creatives working towards the same end goal our client’s success. As a full-service digital marketing agency</p></div></div></div>
                    <div className="accordion-item"><h5 className="accordion-header">
                        <button className="accordion-button collapsed" data-bs-toggle="collapse" type="button">How many revisions can i make the  design ?</button>
                    </h5><div data-bs-parent="#fb-accordion" className="accordion-collapse collapse collapse"><div className="accordion-body"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore</p></div></div></div><div className="accordion-item"><h5 className="accordion-header">
                        <button className="accordion-button collapsed" data-bs-toggle="collapse" type="button">Can i uplode this  design in my personal work?</button></h5><div data-bs-parent="#fc-accordion" className="accordion-collapse collapse collapse"><div className="accordion-body"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore</p></div></div>
                    </div></div>
                <div className="col-lg-6 wow fadeInUp delay-0-4s" ><div className="accordion-item"><h5 className="accordion-header"><button className="accordion-button collapsed" data-bs-toggle="collapse" type="button">How long will delivery take ?</button></h5><div data-bs-parent="#fd-accordion" className="accordion-collapse collapse collapse"><div className="accordion-body"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore</p></div></div></div>
                    <div className="accordion-item"><h5 className="accordion-header"><button className="accordion-button collapsed" data-bs-toggle="collapse" type="button">Do you have discounts for returning customers ?</button></h5><div data-bs-parent="#fe-accordion" className="accordion-collapse collapse collapse"><div className="accordion-body"><p>Fortunately, we aren’t just designers and developers here we are writer strategists, techs and creatives working towards the same end goal our client’s success. As a full-service digital marketing agency</p></div></div></div><div className="accordion-item">
                        <h5 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" type="button">Will you  provide website layout about design ?</button></h5><div data-bs-parent="#ff-accordion" className="accordion-collapse collapse collapse">
                            <div className="accordion-body"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore</p></div></div></div><div className="accordion-item">
                        <h5 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" type="button">What payment methods do you accept ?</button>
                        </h5><div data-bs-parent="#fg-accordion" className="accordion-collapse collapse collapse"><div className="accordion-body"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore</p></div></div></div><div className="accordion-item"><h5 className="accordion-header"><button className="accordion-button collapsed" data-bs-toggle="collapse" type="button">How do your referral program work ?</button></h5><div data-bs-parent="#faq-accordion" className="accordion-collapse collapse collapse"><div className="accordion-body"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore</p></div></div></div></div>
            </div></section>
    )
}
export default AskedQuestions;