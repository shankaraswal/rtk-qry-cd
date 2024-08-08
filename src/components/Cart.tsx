import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ProductType } from "../features/products/productService";

const Cart = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const cartSubTotal = items.reduce(
    (acc: number, item: ProductType) => acc + item.qty! * item.price,
    0
  );
  return (
    <section className="bg-neutral-100">
      <div className="border-2 border-neutral-300">
        {items.length === 0 ? (
          <>
            <div className="flex border border-neutral-200 text-red-500 flex-col items-center justify-center min-h-[100px]">
              Your cart is empty
            </div>
          </>
        ) : (
          <>
            <div className="p-5 max-h-[500px] overflow-y-auto ">
              <ul role="list" className="-my-6 divide-y divide-neutral-200">
                {items?.map((item: ProductType, index) => (
                  <li className="flex py-6" key={index}>
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-neutral-200">
                      <img
                        alt={item.title}
                        src={item.image}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-neutral-900">
                          <h3>{item.title}</h3>
                          <p className="ml-4">
                            ${(item.qty! * item.price).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-neutral-500">Qty: {item.qty!}</p>

                        <div className="flex">
                          <button
                            type="button"
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
            <div className="p-2 py-6 bg-neutral-300">
              <div className="flex justify-between font-semibold text-neutral-900">
                <p className="text-lg">Subtotal</p>
                <p className="text-2xl">${cartSubTotal.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-lg text-neutral-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6 flex justify-center">
                <button className="rounded-md bg-green-800 hover:bg-green-600 text-white w-3/5 py-3 font-semibold">
                  Checkout
                </button>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-neutral-500">
                <p>
                  or{" "}
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      ></path>
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
