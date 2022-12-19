import React from "react";
import "./ReviewHome.css";
import SwipperCard from "./SwipperCard";

const ReviewHome = () => {
  return (
    <>
      <section className="review-home">
        <div className="recent-review">
          <div className="heading">
            <p class="pre_heading">What student says</p>
            <p class="section_heading ">Recent Reviews</p>
          </div>
          <div className="heading_button">
            <button class="button1"><i class="fa-solid fa-arrow-left"></i></button>
            <button className="button2"><i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="feature-content">
          <div className="feature-card row">
            <SwipperCard desc="It is completely beginner friendly, no need of hesitation if you have no knowledge of code. From nothing to a confident coder, it is all you need. I highly recommend this to every fresher and also to someone who has even the smallest doubt." title="Bhoomi Vaswani"></SwipperCard>
            <SwipperCard desc="During entire session it is mandatory that we should Practice more questions rather than theory so that work is superbly done by Babbar bhaiya" title="Swastik Vasistha"></SwipperCard>
            <SwipperCard desc="This is the best course out there to learn recursion and backtracking concepts intuitively from scratch, Bhaiya is a wonderfully teacher and teaches from the basics, explaining every problem in detail including Leetcode Hard problems, highly recommend" title="Akhil Sharma"></SwipperCard>
            <SwipperCard desc="This is the best course out there to learn recursion and backtracking concepts intuitively from scratch, Bhaiya is a wonderfully teacher and teaches from the basics, explaining every problem in detail including Leetcode Hard problems, highly recommend" title="Anagh Kanungo"></SwipperCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewHome;
