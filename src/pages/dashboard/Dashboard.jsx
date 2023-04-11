import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <section className="page-section pt-5 pb-5" id="about">
        <div className="d-flex justify-content-center">
          <div className="col-12 col-lg-6 col-md-8">
            <h3 className="text-muted mb-2">Dashboard</h3>
            <ul className="nav nav-tabs nav-tabs-bordered">
              <li className="nav-item" role="presentation">
                <Link to="/dashboard/bot" className="nav-link">
                  Bot
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link to="/dashboard/knowledge-bese" className="nav-link">
                  Knowledge Base
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link to="/dashboard/credentials" className="nav-link">
                  Credentials
                </Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
    </section>
  );
};
