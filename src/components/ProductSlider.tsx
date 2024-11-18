import React from "react";
import Slider from "react-slick";

const ProductSlider = () => {
 

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

   
  };


  return (
    <>
      <Slider {...settings}>
        <div
          className="bb-deal-card p-[12px]"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={200}
        >
          <div className="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
            <div className="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
              <span className="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
                <span className="text-[14px] text-[#777] font-medium uppercase">
                  New
                </span>
              </span>
              <a href="javascript:void(0)">
                <div className="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                  <img
                    className="main-img transition-all duration-[0.3s] ease-in-out w-full"
                    src="https://printhutt.com/media/product/630226329_Wings-print.jpg"
                    alt="product-1"
                  />
                  <img
                    className="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full"
                    src="https://printhutt.com/media/product/630226329_Wings-print.jpg"
                    alt="product-1"
                  />
                </div>
              </a>
              <ul className="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="javascript:void(0)"
                    title="Wishlist"
                    className="w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="javascript:void(0)"
                    title="Quick View"
                    className="bb-modal-toggle w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="compare.html"
                    title="Compare"
                    className="w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-repeat-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="javascript:void(0)"
                    title="Add To Cart"
                    className="w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="bb-pro-contact p-[20px]">
              <div className="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
                <a
                  href="shop-left-sidebar-col-3.html"
                  className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]"
                >
                  Chocos
                </a>
                <span className="bb-pro-rating">
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-line float-left text-[15px] mr-[3px] leading-[18px] text-[#777]" />
                </span>
              </div>
              <h4 className="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
                <a
                  href="product-left-sidebar.html"
                  className="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]"
                >
                  Mixed Fruits Chocolates Pack
                </a>
              </h4>
              <div className="bb-price flex flex-wrap justify-between">
                <div className="inner-price mx-[-3px]">
                  <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">
                    ₹25
                  </span>
                  <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">
                    ₹30
                  </span>
                </div>
                <span className="last-items text-[14px] text-[#686e7d]">
                  1 Pack
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bb-deal-card p-[12px]"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={400}
        >
          <div className="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
            <div className="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
              <span className="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
                <span className="text-[14px] text-[#777] font-medium uppercase">
                  Hot
                </span>
              </span>
              <a href="javascript:void(0)">
                <div className="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                  <img
                    className="main-img transition-all duration-[0.3s] ease-in-out w-full"
                    src="https://printhutt.com/media/product/630226329_Wings-print.jpg"
                    alt="product-2"
                  />
                  <img
                    className="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full"
                    src="https://printhutt.com/media/product/630226329_Wings-print.jpg"
                    alt="product-2"
                  />
                </div>
              </a>
              <ul className="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="javascript:void(0)"
                    title="Wishlist"
                    className="w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="javascript:void(0)"
                    title="Quick View"
                    className="bb-modal-toggle w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="compare.html"
                    title="Compare"
                    className="w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-repeat-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="javascript:void(0)"
                    title="Add To Cart"
                    className="w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="bb-pro-contact p-[20px]">
              <div className="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
                <a
                  href="shop-left-sidebar-col-3.html"
                  className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]"
                >
                  Juice
                </a>
                <span className="bb-pro-rating">
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-line float-left text-[15px] mr-[3px] leading-[18px] text-[#777]" />
                </span>
              </div>
              <h4 className="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
                <a
                  href="product-left-sidebar.html"
                  className="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]"
                >
                  Organic Apple Juice Pack
                </a>
              </h4>
              <div className="bb-price flex flex-wrap justify-between">
                <div className="inner-price mx-[-3px]">
                  <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">
                    ₹15
                  </span>
                  <span className="item-left px-[3px] text-[14px] text-[#6c7fd8]">
                    3 Left
                  </span>
                </div>
                <span className="last-items text-[14px] text-[#686e7d]">
                  100 ml
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bb-deal-card p-[12px]"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={600}
        >
          <div className="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
            <div className="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
              <a href="javascript:void(0)">
                <div className="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                  <img
                    className="main-img transition-all duration-[0.3s] ease-in-out w-full"
                    src="https://printhutt.com/media/product/630226329_Wings-print.jpg"
                    alt="product-3"
                  />
                  <img
                    className="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full"
                    src="https://printhutt.com/media/product/630226329_Wings-print.jpg"
                    alt="product-3"
                  />
                </div>
              </a>
              <ul className="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="javascript:void(0)"
                    title="Wishlist"
                    className="w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="javascript:void(0)"
                    title="Quick View"
                    className="bb-modal-toggle w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="compare.html"
                    title="Compare"
                    className="w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-repeat-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="javascript:void(0)"
                    title="Add To Cart"
                    className="w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="bb-pro-contact p-[20px]">
              <div className="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
                <a
                  href="shop-left-sidebar-col-3.html"
                  className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]"
                >
                  Juice
                </a>
                <span className="bb-pro-rating">
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-line float-left text-[15px] mr-[3px] leading-[18px] text-[#777]" />
                </span>
              </div>
              <h4 className="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
                <a
                  href="product-left-sidebar.html"
                  className="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]"
                >
                  Mixed Almond nuts juice Pack
                </a>
              </h4>
              <div className="bb-price flex flex-wrap justify-between">
                <div className="inner-price mx-[-3px]">
                  <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">
                    ₹32
                  </span>
                  <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">
                    ₹39
                  </span>
                </div>
                <span className="last-items text-[14px] text-[#686e7d]">
                  250 g
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bb-deal-card p-[12px]"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={800}
        >
          <div className="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
            <div className="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
              <span className="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
                <span className="text-[14px] text-[#777] font-medium uppercase">
                  Sale
                </span>
              </span>
              <a href="javascript:void(0)">
                <div className="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                  <img
                    className="main-img transition-all duration-[0.3s] ease-in-out w-full"
                    src="https://printhutt.com/media/product/630226329_Wings-print.jpg"
                    alt="product-4"
                  />
                  <img
                    className="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full"
                    src="https://printhutt.com/media/product/630226329_Wings-print.jpg"
                    alt="product-4"
                  />
                </div>
              </a>
              <ul className="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="javascript:void(0)"
                    title="Wishlist"
                    className="w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="javascript:void(0)"
                    title="Quick View"
                    className="bb-modal-toggle w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="compare.html"
                    title="Compare"
                    className="w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-repeat-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
                <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                  <a
                    href="javascript:void(0)"
                    title="Add To Cart"
                    className="w-[35px] h-[35px] flex items-center justify-center"
                  >
                    <i className="ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="bb-pro-contact p-[20px]">
              <div className="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
                <a
                  href="shop-left-sidebar-col-3.html"
                  className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]"
                >
                  Fruits
                </a>
                <span className="bb-pro-rating">
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]" />
                  <i className="ri-star-line float-left text-[15px] mr-[3px] leading-[18px] text-[#777]" />
                </span>
              </div>
              <h4 className="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
                <a
                  href="product-left-sidebar.html"
                  className="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]"
                >
                  Fresh Mango Slice Juice
                </a>
              </h4>
              <div className="bb-price flex flex-wrap justify-between">
                <div className="inner-price mx-[-3px]">
                  <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">
                    ₹25
                  </span>
                  <span className="item-left px-[3px] text-[14px] text-[#6c7fd8]">
                    Out Of Stock
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default ProductSlider;