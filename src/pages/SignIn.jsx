import React from "react";

export const SignIn = () => {
  return (
    <section className="page-section pt-5 pb-5" id="about">
      <div className="container px-4 px-lg-5">
        <div className="d-flex justify-content-center">
          <div className="col-12 col-lg-6 col-md-6">
            <h3 className="text-muted mb-2">Sign-in to your account</h3>
            <label className="text-mute mb-1"> Email </label>
            <input className="form-control mb-4" />

            <label className="text-mute mb-1"> Password </label>
            <input type="password" className="form-control mb-4" />

            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" for="gridCheck1">
                Keep me signed in
              </label>
            </div>

            <a className="btn btn-secondary col-12 mb-2" href="dashboard.html">
              Login
            </a>

            <small className="text-xm text-muted mb-4">
              This document should contain a full description of your business,
              including location, services, customer service agents and every
              other possible information you know your clients will need
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};
