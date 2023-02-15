/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect }  from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   // arrows:false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //         slideToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //   ],
  // };
  return (
    <div>
      <section class="roadmap" id="roadMap">
        
        <div class="cstm-container container">
          
          <div class="roadmap_main">
            <div class="row text-center mb-5">
              <div class="col-lg-8 mx-auto">
                <p className="text-[#374574] text-4xl font-bold"  data-aos="fade-up"  data-aos-duration="1200">RoadMap</p>
                <p className="text-[#637097] text-l mt-5"  data-aos="fade-up"  data-aos-duration="1200">
                  Problem & Solution We are creating tokens to solve the world’s
                  biggest blockchain <br />
                  issues surrounding cross-border payments, data accessibility
                  and payment.
                </p>
              </div>
            </div>
            <div class="roadmap_wrap"  data-aos="fade-up"  data-aos-duration="1200">
              <div class="roadmap_item">
                <span class="roadmap_title">MID of Q1 2021</span>
                <div class="roadmap_content">
                  <span class="dot"></span>
                  <h4>Concept</h4>
                  <span>EVM support for parthians</span>
                  <span>SubQuery Academy</span>
                  <span>Proof of indexing</span>
                </div>
              </div>
              <div class="roadmap_item">
                <span class="roadmap_title">MID of Q1 2021</span>
                <div class="roadmap_content">
                  <span class="dot"></span>
                  <h4>Concept</h4>
                  <span>EVM support for parthians</span>
                  <span>SubQuery Academy</span>
                  <span>Proof of indexing</span>
                </div>
              </div>
              <div class="roadmap_item">
                <span class="roadmap_title">MID of Q1 2021</span>
                <div class="roadmap_content">
                  <span class="dot"></span>
                  <h4>Concept</h4>
                  <span>EVM support for parthians</span>
                  <span>SubQuery Academy</span>
                  <span>Proof of indexing</span>
                </div>
              </div>
              <div class="roadmap_item">
                <span class="roadmap_title">MID of Q1 2021</span>
                <div class="roadmap_content">
                  <span class="dot"></span>
                  <h4>Concept</h4>
                  <span>EVM support for parthians</span>
                  <span>SubQuery Academy</span>
                  <span>Proof of indexing</span>
                </div>
              </div>
              <div class="roadmap_item">
                <span class="roadmap_title">MID of Q1 2021</span>
                <div class="roadmap_content">
                  <span class="dot"></span>
                  <h4>Concept</h4>
                  <span>EVM support for parthians</span>
                  <span>SubQuery Academy</span>
                  <span>Proof of indexing</span>
                </div>
              </div>
              <div class="roadmap_item">
                <span class="roadmap_title">MID of Q1 2021</span>
                <div class="roadmap_content">
                  <span class="dot"></span>
                  <h4>Concept</h4>
                  <span>EVM support for parthians</span>
                  <span>SubQuery Academy</span>
                  <span>Proof of indexing</span>
                </div>
              </div>
              <div class="roadmap_item">
                <span class="roadmap_title">MID of Q1 2021</span>
                <div class="roadmap_content">
                  <span class="dot"></span>
                  <h4>Concept</h4>
                  <span>EVM support for parthians</span>
                  <span>SubQuery Academy</span>
                  <span>Proof of indexing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="whitepaper">
            <div class="row">
              <div class="col-md-7 order-2 order-md-0 mt-5 mt-md-0">
                <div class="right text-center">
                  <img
                    src="./images/document_img.png"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
