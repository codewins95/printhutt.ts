import React, { useEffect, useRef } from "react";

const CategoryPopup = ({onClose}) => {
    const popupRef = useRef(null);

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);


  return (
    <>
      {/* Category Popup */}
      <div className="bb-category-sidebar transition-all duration-[0.3s] ease-in-out w-full h-full fixed top-[0] z-[17] ">
        <div className="bb-category-overlay  w-full h-screen fixed top-[0] left-[0] bg-[#00000080] z-[17]" />
        <div ref={popupRef} className="category-sidebar w-[calc(100%-30px)] max-[1199px]:h-[calc(100vh-60px)] max-w-[1200px] my-[15px] mx-[auto] py-[30px] px-[15px] text-[14px] font-normal transition-all duration-[0.5s] ease-in-out delay-[0s] bg-[#fff] overflow-auto rounded-[30px] z-[18] relative">
          <button
            type="button"
            className="bb-category-close transition-all duration-[0.3s] ease-in-out w-[16px] h-[20px] absolute top-[-5px] right-[27px] bg-[#e04e4eb3] rounded-[10px] cursor-pointer hover:bg-[#e04e4e]"
            title="Close"
            onClick={onClose}
          />
          <div className="w-full mx-auto">
            <div className="flex flex-wrap w-full mb-[-24px]">
              <div className="w-full px-[12px]">
                <div className="bb-category-tags mb-[24px]">
                  <div className="sub-title mb-[20px] flex justify-between">
                    <h4 className="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750] capitalize">
                      keywords
                    </h4>
                  </div>
                  <div className="bb-tags">
                    <ul className="flex flex-wrap m-[-5px]">
                      <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer">
                        <a
                          href="javascript:void(0)"
                          className="text-[13px] capitalize font-Poppins text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]"
                        >
                          Clothes
                        </a>
                      </li>
                      <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer">
                        <a
                          href="javascript:void(0)"
                          className="text-[13px] capitalize font-Poppins text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]"
                        >
                          Fruits
                        </a>
                      </li>
                      <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer">
                        <a
                          href="javascript:void(0)"
                          className="text-[13px] capitalize font-Poppins text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]"
                        >
                          Snacks
                        </a>
                      </li>
                      <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer">
                        <a
                          href="javascript:void(0)"
                          className="text-[13px] capitalize font-Poppins text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]"
                        >
                          Dairy
                        </a>
                      </li>
                      <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer">
                        <a
                          href="javascript:void(0)"
                          className="text-[13px] capitalize font-Poppins text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]"
                        >
                          Seafood
                        </a>
                      </li>
                      <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer">
                        <a
                          href="javascript:void(0)"
                          className="text-[13px] capitalize font-Poppins text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]"
                        >
                          Toys
                        </a>
                      </li>
                      <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer">
                        <a
                          href="javascript:void(0)"
                          className="text-[13px] capitalize font-Poppins text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]"
                        >
                          perfume
                        </a>
                      </li>
                      <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer">
                        <a
                          href="javascript:void(0)"
                          className="text-[13px] capitalize font-Poppins text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]"
                        >
                          jewelry
                        </a>
                      </li>
                      <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer">
                        <a
                          href="javascript:void(0)"
                          className="text-[13px] capitalize font-Poppins text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]"
                        >
                          Bags
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-wrap w-full">
                  <div className="w-full px-[12px]">
                    <div className="sub-title mb-[20px] flex justify-between">
                      <h4 className="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750] capitalize">
                        Explore Categories
                      </h4>
                    </div>
                  </div>
                  <div className="min-[1200px]:w-[16.66%] min-[768px]:w-[33.33%] min-[576px]:w-[50%] w-full px-[12px] mb-[24px]">
                    <div className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-1 bg-[#fef1f1]">
                      <div className="category-image mb-[12px]">
                        <img
                          src="https://printhutt.com/media/custom-name-lemp.png"
                          alt="category"
                          className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                        />
                      </div>
                      <div className="category-sub-contact">
                        <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize"
                          >
                            vegetables
                          </a>
                        </h5>
                        <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">
                          485 items
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="min-[1200px]:w-[16.66%] min-[768px]:w-[33.33%] min-[576px]:w-[50%] w-full px-[12px] mb-[24px]">
                    <div className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-2 bg-[#e1fcf2]">
                      <div className="category-image mb-[12px]">
                        <img
                          src="https://printhutt.com/media/custom-name-lemp.png"
                          alt="category"
                          className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                        />
                      </div>
                      <div className="category-sub-contact">
                        <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize"
                          >
                            Fruits
                          </a>
                        </h5>
                        <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">
                          291 items
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="min-[1200px]:w-[16.66%] min-[768px]:w-[33.33%] min-[576px]:w-[50%] w-full px-[12px] mb-[24px]">
                    <div className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-3 bg-[#f4f1fe]">
                      <div className="category-image mb-[12px]">
                        <img
                          src="https://printhutt.com/media/custom-name-lemp.png"
                          alt="category"
                          className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                        />
                      </div>
                      <div className="category-sub-contact">
                        <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize"
                          >
                            Cold Drinks
                          </a>
                        </h5>
                        <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">
                          49 items
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="min-[1200px]:w-[16.66%] min-[768px]:w-[33.33%] min-[576px]:w-[50%] w-full px-[12px] mb-[24px]">
                    <div className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-4 bg-[#fbf9e4]">
                      <div className="category-image mb-[12px]">
                        <img
                          src="https://printhutt.com/media/custom-name-lemp.png"
                          alt="category"
                          className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                        />
                      </div>
                      <div className="category-sub-contact">
                        <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize"
                          >
                            Bakery
                          </a>
                        </h5>
                        <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">
                          08 items
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="min-[1200px]:w-[16.66%] min-[768px]:w-[33.33%] min-[576px]:w-[50%] w-full px-[12px] mb-[24px]">
                    <div className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-2 bg-[#e1fcf2]">
                      <div className="category-image mb-[12px]">
                        <img
                          src="https://printhutt.com/media/custom-name-lemp.png"
                          alt="category"
                          className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                        />
                      </div>
                      <div className="category-sub-contact">
                        <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize"
                          >
                            Fast Food
                          </a>
                        </h5>
                        <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">
                          291 items
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="min-[1200px]:w-[16.66%] min-[768px]:w-[33.33%] min-[576px]:w-[50%] w-full px-[12px] mb-[24px]">
                    <div className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-3 bg-[#f4f1fe]">
                      <div className="category-image mb-[12px]">
                        <img
                          src="https://printhutt.com/media/custom-name-lemp.png"
                          alt="category"
                          className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                        />
                      </div>
                      <div className="category-sub-contact">
                        <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize"
                          >
                            Snacks
                          </a>
                        </h5>
                        <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">
                          49 items
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-wrap w-full">
                  <div className="w-full px-[12px]">
                    <div className="sub-title mb-[20px] flex justify-between">
                      <h4 className="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750] capitalize">
                        Related products
                      </h4>
                    </div>
                  </div>
                  <div className="min-[992px]:w-[33.33%] min-[576px]:w-[50%] w-full px-[12px] mb-[24px]">
                    <div className="bb-category-cart p-[15px] overflow-hidden bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[10px] flex max-[767px]:flex-col">
                      <a
                        href="javascript:void(0)"
                        className="pro-img mr-[12px] max-[767px]:mb-[15px] max-[767px]:mr-[0]"
                      >
                        <img
                          src="https://printhutt.com/media/custom-name-lemp.png"
                          alt="new-product-1"
                          className="w-[80px] rounded-[10px] border-[1px] border-solid border-[#eee] max-[767px]:w-full"
                        />
                      </a>
                      <div className="side-contact flex flex-col">
                        <h4 className="bb-pro-title text-[15px]">
                          <a
                            href="product-left-sidebar.html"
                            className="transition-all duration-[0.3s] ease-in-out flex font-Poppins text-[15px] leading-[28px] tracking-[0.03rem] font-medium text-[#3d4750]"
                          >
                            Ground Nuts Oil Pack
                          </a>
                        </h4>
                        <span className="bb-pro-rating">
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-line float-left text-[15px] mr-[3px] leading-[26px] text-[#777]" />
                        </span>
                        <div className="inner-price mx-[-3px]">
                          <span className="new-price px-[3px] text-[15px] text-[#686e7d] font-semibold">
                            ₹15
                          </span>
                          <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">
                            ₹22
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-[992px]:w-[33.33%] min-[576px]:w-[50%] w-full px-[12px] mb-[24px]">
                    <div className="bb-category-cart p-[15px] overflow-hidden bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[10px] flex max-[767px]:flex-col">
                      <a
                        href="javascript:void(0)"
                        className="pro-img mr-[12px] max-[767px]:mb-[15px] max-[767px]:mr-[0]"
                      >
                        <img
                          src="https://printhutt.com/media/custom-name-lemp.png"
                          alt="new-product-2"
                          className="w-[80px] rounded-[10px] border-[1px] border-solid border-[#eee] max-[767px]:w-full"
                        />
                      </a>
                      <div className="side-contact flex flex-col">
                        <h4 className="bb-pro-title text-[15px]">
                          <a
                            href="product-left-sidebar.html"
                            className="transition-all duration-[0.3s] ease-in-out flex font-Poppins text-[15px] leading-[28px] tracking-[0.03rem] font-medium text-[#3d4750]"
                          >
                            Organic Litchi Juice
                          </a>
                        </h4>
                        <span className="bb-pro-rating">
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-line float-left text-[15px] mr-[3px] leading-[26px] text-[#777]" />
                        </span>
                        <div className="inner-price mx-[-3px]">
                          <span className="new-price px-[3px] text-[15px] text-[#686e7d] font-semibold">
                            ₹25
                          </span>
                          <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">
                            ₹30
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-[992px]:w-[33.33%] min-[576px]:w-[50%] w-full px-[12px] mb-[24px]">
                    <div className="bb-category-cart p-[15px] overflow-hidden bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[10px] flex max-[767px]:flex-col">
                      <a
                        href="javascript:void(0)"
                        className="pro-img mr-[12px] max-[767px]:mb-[15px] max-[767px]:mr-[0]"
                      >
                        <img
                          src="https://printhutt.com/media/custom-name-lemp.png"
                          alt="new-product-3"
                          className="w-[80px] rounded-[10px] border-[1px] border-solid border-[#eee] max-[767px]:w-full"
                        />
                      </a>
                      <div className="side-contact flex flex-col">
                        <h4 className="bb-pro-title text-[15px]">
                          <a
                            href="product-left-sidebar.html"
                            className="transition-all duration-[0.3s] ease-in-out flex font-Poppins text-[15px] leading-[28px] tracking-[0.03rem] font-medium text-[#3d4750]"
                          >
                            Spicy Banana Chips
                          </a>
                        </h4>
                        <span className="bb-pro-rating">
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-line float-left text-[15px] mr-[3px] leading-[26px] text-[#777]" />
                        </span>
                        <div className="inner-price mx-[-3px]">
                          <span className="new-price px-[3px] text-[15px] text-[#686e7d] font-semibold">
                            ₹01
                          </span>
                          <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">
                            ₹02
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-[992px]:w-[33.33%] min-[576px]:w-[50%] w-full px-[12px] mb-[24px]">
                    <div className="bb-category-cart p-[15px] overflow-hidden bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[10px] flex max-[767px]:flex-col">
                      <a
                        href="javascript:void(0)"
                        className="pro-img mr-[12px] max-[767px]:mb-[15px] max-[767px]:mr-[0]"
                      >
                        <img
                          src="https://printhutt.com/media/custom-name-lemp.png"
                          alt="new-product-4"
                          className="w-[80px] rounded-[10px] border-[1px] border-solid border-[#eee] max-[767px]:w-full"
                        />
                      </a>
                      <div className="side-contact flex flex-col">
                        <h4 className="bb-pro-title text-[15px]">
                          <a
                            href="product-left-sidebar.html"
                            className="transition-all duration-[0.3s] ease-in-out flex font-Poppins text-[15px] leading-[28px] tracking-[0.03rem] font-medium text-[#3d4750]"
                          >
                            Spicy Potato Chips
                          </a>
                        </h4>
                        <span className="bb-pro-rating">
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-line float-left text-[15px] mr-[3px] leading-[26px] text-[#777]" />
                        </span>
                        <div className="inner-price mx-[-3px]">
                          <span className="new-price px-[3px] text-[15px] text-[#686e7d] font-semibold">
                            ₹25
                          </span>
                          <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">
                            ₹35
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-[992px]:w-[33.33%] min-[576px]:w-[50%] w-full px-[12px] mb-[24px]">
                    <div className="bb-category-cart p-[15px] overflow-hidden bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[10px] flex max-[767px]:flex-col">
                      <a
                        href="javascript:void(0)"
                        className="pro-img mr-[12px] max-[767px]:mb-[15px] max-[767px]:mr-[0]"
                      >
                        <img
                          src="https://printhutt.com/media/custom-name-lemp.png"
                          alt="new-product-5"
                          className="w-[80px] rounded-[10px] border-[1px] border-solid border-[#eee] max-[767px]:w-full"
                        />
                      </a>
                      <div className="side-contact flex flex-col">
                        <h4 className="bb-pro-title text-[15px]">
                          <a
                            href="product-left-sidebar.html"
                            className="transition-all duration-[0.3s] ease-in-out flex font-Poppins text-[15px] leading-[28px] tracking-[0.03rem] font-medium text-[#3d4750]"
                          >
                            Black Pepper Spice
                          </a>
                        </h4>
                        <span className="bb-pro-rating">
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-line float-left text-[15px] mr-[3px] leading-[26px] text-[#777]" />
                        </span>
                        <div className="inner-price mx-[-3px]">
                          <span className="new-price px-[3px] text-[15px] text-[#686e7d] font-semibold">
                            ₹32
                          </span>
                          <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">
                            ₹35
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-[992px]:w-[33.33%] min-[576px]:w-[50%] w-full px-[12px] mb-[24px]">
                    <div className="bb-category-cart p-[15px] overflow-hidden bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[10px] flex max-[767px]:flex-col">
                      <a
                        href="javascript:void(0)"
                        className="pro-img mr-[12px] max-[767px]:mb-[15px] max-[767px]:mr-[0]"
                      >
                        <img
                          src="https://printhutt.com/media/custom-name-lemp.png"
                          alt="new-product-6"
                          className="w-[80px] rounded-[10px] border-[1px] border-solid border-[#eee] max-[767px]:w-full"
                        />
                      </a>
                      <div className="side-contact flex flex-col">
                        <h4 className="bb-pro-title text-[15px]">
                          <a
                            href="product-left-sidebar.html"
                            className="transition-all duration-[0.3s] ease-in-out flex font-Poppins text-[15px] leading-[28px] tracking-[0.03rem] font-medium text-[#3d4750]"
                          >
                            Small Chili Spice
                          </a>
                        </h4>
                        <span className="bb-pro-rating">
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[26px] text-[#fea99a]" />
                          <i className="ri-star-line float-left text-[15px] mr-[3px] leading-[26px] text-[#777]" />
                        </span>
                        <div className="inner-price mx-[-3px]">
                          <span className="new-price px-[3px] text-[15px] text-[#686e7d] font-semibold">
                            ₹41
                          </span>
                          <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">
                            ₹45
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPopup;
