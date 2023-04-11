import React from "react";
import botimage from "../../imgs/botimage.jpg";
import { DonutChart } from "./DonutChart";
import { BarChart } from "./BarChart";
import { BsPersonFill, BsPlugFill, BsHandThumbsUpFill, BsGridFill } from "react-icons/bs"

export const Bot = () => {
  return (
    <>
      <div className="text-center mb-3 mt-3">
        <img
          src={botimage}
          className="rounded-circle d-block mx-auto mb-2 border-2"
          style={{ width: "200px", height: "200px" }}
          alt="botimage"
        />
        <div className="d-flex justify-content-center my-2">
          <div>
            <span className="badge bg-danger">
              <BsPersonFill className="me-1" />
              Friendly
            </span>
          </div>
          <div className="ms-1">
            <span className="badge bg-success">
              <BsPlugFill className="me-1" /> Fast
            </span>
          </div>
          <div>
            <span className="badge bg-warning mx-1">
              <BsHandThumbsUpFill className="me-1" /> Reliable
            </span>
          </div>
          <div>
            <span className="badge bg-info">
              <BsGridFill className="me-1" /> Brilliant
            </span>
          </div>
        </div>
      </div>

      <p className="mb-2 text-muted">
        Colosal bots is a simple friendly, fast, reliable and brilliant bot
        created to serve as a orem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>

      <div className="p-3 shadow my-4">
        <DonutChart />
      </div>
      <div className="p-3 shadow my-4">
        <BarChart />
      </div>
    </>
  );
};
