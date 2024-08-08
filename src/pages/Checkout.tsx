import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ProductType } from "../features/products/productService";
import { removeItem } from "../features/cart/cartActions";

const Checkout = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state: RootState) => state.cart);
  const cartSubTotal = items.reduce(
    (acc: number, item: ProductType) => acc + item.qty! * item.price,
    0
  );

  const orderSummaryCalculation = ({
    cartSubTotal,
    taxper,
    taxableAmt,
  }: {
    cartSubTotal: number;
    taxper: number;
    taxableAmt: number;
  }) => {
    return {
      originalPrice: cartSubTotal.toFixed(2),
      discountPer: cartSubTotal > 2000 ? 20 : 10,
      discount: (
        cartSubTotal *
        ((cartSubTotal > 2000 ? 20 : 10) / 100)
      ).toFixed(2),
      pickup: (0).toFixed(2),
      promo: (0).toFixed(2),
      taxableAmt,
      taxper,
      tax: (taxableAmt * (taxper / 100)).toFixed(2),
      total: (taxableAmt + taxableAmt * (taxper / 100)).toFixed(2),
    };
  };

  const orderSummaryCalc = orderSummaryCalculation({
    cartSubTotal,
    taxper: 10,
    taxableAmt:
      cartSubTotal - cartSubTotal * ((cartSubTotal > 2000 ? 20 : 10) / 100),
  });

  const handleRemoveItem = (id: string | number) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <h2 className="font-bold text-3xl text-red-900 mb-6 text-left w-full">
        Shopping Cart
      </h2>
      {items.length === 0 ? (
        <div className="flex border border-neutral-300 w-full h-[700px] text-red-500  items-center justify-center min-h-full">
          Your cart is empty
        </div>
      ) : (
        <>
          <section className="w-full flex flex-row gap-4 ">
            <div className="border border-neutral-300 p-5 flex-grow">
              <ul role="list" className="-my-6 divide-y divide-neutral-200">
                {items?.map((item: ProductType, index: number) => (
                  <li className="flex py-6" key={index}>
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-neutral-200">
                      <img
                        alt={item.title}
                        src={item.image}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between font-medium text-neutral-900">
                          <p className="text-lg">{item.title}</p>
                          <p className="ml-4 text-lg font-bold">
                            £{(item.qty! * item.price).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p>
                          Qty:{" "}
                          <span className="text-bold text-md ">
                            {item.qty!}
                          </span>
                        </p>

                        <div className="flex">
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(item.id)}
                            className="font-medium text-red-600 hover:text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t py-1 px-4 w-1/3 border border-neutral-300">
              <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <p className="text-xl font-semibold text-red-900 dark:text-white">
                    Order summary
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-6">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="font-normal text-gray-500 dark:text-gray-400">
                          Original price
                        </dt>
                        <dd className="font-medium text-gray-900 dark:text-white">
                          £{orderSummaryCalc.originalPrice}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="font-normal text-gray-500 dark:text-gray-400">
                          Discount {orderSummaryCalc.discountPer}%
                        </dt>

                        <dd className="font-medium text-green-600">
                          £{orderSummaryCalc.discount}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="font-normal text-gray-500 dark:text-gray-400">
                          Store Pickup
                        </dt>
                        <dd className="font-medium text-gray-900 dark:text-white">
                          £{orderSummaryCalc.pickup}
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="font-normal text-gray-500 dark:text-gray-400 w-3/5">
                          Promo Code Applied
                        </dt>
                        <dd className="font-medium text-gray-900 dark:text-white">
                          £{orderSummaryCalc.promo}
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="font-normal text-gray-500 dark:text-gray-400">
                          Tax 12%
                        </dt>
                        <dd className="font-medium text-gray-900 dark:text-white">
                          £{orderSummaryCalc.tax}
                        </dd>
                      </dl>
                    </div>

                    <dl className="flex text-xl items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="font-bold text-gray-900 dark:text-white">
                        Total
                      </dt>
                      <dd className="font-bold text-gray-900 dark:text-white">
                        £{orderSummaryCalc.total}
                      </dd>
                    </dl>
                  </div>

                  <button className="bg-green-800 text-white py-2 px-8 rounded hover:bg-green-600 w-full ">
                    Proceed to Checkout
                  </button>
                  <ul className="ml-5 text-xs list-disc font-medium text-gray-500 dark:text-gray-400 space-y-2">
                    <li>
                      10% DISCOUNT applied if cart subtotal is more than £500.00
                    </li>
                    <li>
                      {orderSummaryCalc.discountPer}% DISCOUNT applied if cart
                      subtotal is more than £2000.00
                    </li>
                  </ul>

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {" "}
                      or{" "}
                    </span>
                    <a
                      title=""
                      className="inline-flex items-center gap-2 text-sm font-medium text-red-800 underline hover:no-underline dark:text-neutral-600"
                    >
                      Continue Shopping
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="voucher"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Do you have a voucher or gift card?{" "}
                      </label>
                      <input
                        type="text"
                        id="voucher"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder=""
                        required
                      />
                    </div>
                    <button className="bg-neutral-800 text-white py-2 px-8 rounded hover:bg-neutral-600 w-full ">
                      Apply Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Checkout;
