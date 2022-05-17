import React from 'react';

const FaqQuestion = () => {
    return (
        <div style={{ backgroundColor: "#000000de" }} >

            <div style={{ paddingBottom: "200px" }} className="container">
                <h1 style={{ color: "#f01695", fontSize: "60px" }} className="text-center pt-5">Frequently Asked Questions... </h1>
                <div className="row gx-5 pt-5">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong> What are the most important field I should know about filling the form?</strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>what you need to notice.</strong> It is the mostly thing and we have all field required though you can edit the information later but duroing the time of completions pease givr more importance to your registration number and also your name and your id information also remember your password and username.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <strong>How can i manage my information and image?</strong>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                        until the collapse plugin adds the appropriate classNamees that we use to style each
                                        element. These classNamees control the overall appearance, as well as the showing and hiding
                                        via CSS transitions. You can modify any of this with custom CSS or overriding our
                                        default variables. It's also worth noting that just about any.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <strong>I have problem on marks how can i handle?</strong>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until
                                        the collapse plugin adds the appropriate classNamees that we use to style each element.
                                        These classNamees control the overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or overriding our default
                                        variables.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <strong>Can i pay cost in our office?</strong>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until
                                        the collapse plugin adds the appropriate classNamees that we use to style each element.
                                        These classNamees control the overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or overriding our default
                                        variables.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>

        </div>
    );
};

export default FaqQuestion;