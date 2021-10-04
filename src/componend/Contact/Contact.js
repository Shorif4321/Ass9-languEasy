import React from 'react';

const Contact = () => {
    return (
        <div className="my-5 mx-5">
            <h1>Contact us</h1>
            <div className="w-50 m-auto">
                <div className="text-start mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label ">Your Name </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3 text-start">
                    <label for="exampleInputEmail1" className="form-label ">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="text-start mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label ">Course Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3 text-start">
                    <label for="exampleFormControlTextarea1" className="form-label">Write Your Feedback in Details</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="mb-3">
                    <input className="form-control" type="file" id="formFile" />
                </div>

                <div className="mb-3 form-check text-start">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

            </div>
        </div>
    );
};

export default Contact;