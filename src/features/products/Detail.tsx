import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "./productService";
import { MoreInfo, Rating, Reviews } from "../../components";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { pid } = useParams();
  const { data, error, isLoading } = useGetProductQuery(pid!);
  console.log(data);

  return (
    <>
      {isLoading && <div>Product detail loading...</div>}
      {error && <div className="text-red-700">Product detail error</div>}
      {data && (
        <>
          <h2 className="text-3xl text-red-900 mb-6 font-semibold capitalize">
            Product Detail
          </h2>
          <div className="">
            <section className="relative ">
              <div className="flex flex-row gap-10 mb-10">
                <div className="w-[100%] relative">
                  <img src={data.image} alt={data.title} />
                </div>
                <div className="">
                  <p className="text-lg font-medium leading-8 text-red-500 mb-4 capitalize">
                    {data.category}
                  </p>
                  <h2 className="text-2xl text-red-700 mb-6 capitalize">
                    {data.title}
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                    <h6 className="font-semibold text-3xl text-red-700 pr-5 sm:border-r border-gray-200 mr-5">
                      £{data.price.toFixed(2)}
                    </h6>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Rating prodRating={data?.rating} />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-base font-normal mb-5">
                    {data.description}
                  </p>
                  <ul className="grid gap-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="26" height="26" rx="13" fill="#991b1b" />
                        <path
                          d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="font-normal text-base text-gray-900 ">
                        Branded shirt
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="26" height="26" rx="13" fill="#991b1b" />
                        <path
                          d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="font-normal text-base text-gray-900 ">
                        3 color shirt
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="26" height="26" rx="13" fill="#991b1b" />
                        <path
                          d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="font-normal text-base text-gray-900 ">
                        Pure Cotton Shirt with 60% as 40%
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="26" height="26" rx="13" fill="#991b1b" />
                        <path
                          d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="font-normal text-base text-gray-900 ">
                        all size is available
                      </span>
                    </li>
                  </ul>
                  <p className="text-gray-900 text-lg leading-8 font-medium mb-4">
                    Size
                  </p>
                  <div className="w-full pb-8 border-b border-gray-100 flex-wrap">
                    <div className="grid grid-cols-3 min-[400px]:grid-cols-5 gap-3 max-w-md">
                      <button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                        S
                      </button>
                      <button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                        M
                      </button>
                      <button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                        L
                      </button>
                      <button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                        XL
                      </button>
                      <button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">
                        XXL
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                    <div className="flex sm:items-center sm:justify-center w-full">
                      <button className="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                        <svg
                          className="stroke-gray-900 group-hover:stroke-black"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            strokeOpacity="0.2"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            strokeOpacity="0.2"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        className="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
                        placeholder="1"
                      />
                      <button className="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                        <svg
                          className="stroke-gray-900 group-hover:stroke-black"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke="#9CA3AF"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke="black"
                            strokeOpacity="0.2"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke="black"
                            strokeOpacity="0.2"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <button className="group py-4 px-5 rounded-full bg-red-50 text-red-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-red-100">
                      <svg
                        className="stroke-red-600 "
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                      Add to cart
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="group transition-all duration-500 p-4 rounded-full bg-red-50 hover:bg-red-100 hover:shadow-sm hover:shadow-red-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M4.47084 14.3196L13.0281 22.7501L21.9599 13.9506M13.0034 5.07888C15.4786 2.64037 19.5008 2.64037 21.976 5.07888C24.4511 7.5254 24.4511 11.4799 21.9841 13.9265M12.9956 5.07888C10.5204 2.64037 6.49824 2.64037 4.02307 5.07888C1.54789 7.51738 1.54789 11.4799 4.02307 13.9184M4.02307 13.9184L4.04407 13.939M4.02307 13.9184L4.46274 14.3115"
                          stroke="#991b1b"
                          strokeWidth="1.6"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button className="text-center w-2/5 px-5 py-4 rounded-[100px] bg-red-800 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-red-700 hover:shadow-red-400">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-10">
              <h3 className="mb-4 text-3xl font-semibold">More Information</h3>
              <MoreInfo />
            </section>
            <section className="mt-10">
              <h3 className="mb-4 text-3xl font-semibold">
                Reviews & Feedback
              </h3>
              <Reviews />
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
