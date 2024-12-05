import footerImg from "../../assets/imgs/freshcart-logo.svg";
import amazionImg from "../../assets/imgs/amazon-pay.png";
import amaercianImg from "../../assets/imgs/American-Express-Color.png";
import paypalImg from "../../assets/imgs/paypal.png";
import mastercardImg from "../../assets/imgs/mastercard.webp";
import playStoreImg from "../../assets/imgs/get-google-play.png";
import appleStoreImg from "../../assets/imgs/get-apple-store.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* <!-- ========== FOOTER ========== --> */}
      <footer className="mt-auto bg-primary-200 w-full dark:bg-neutral-950">
        <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
              <Link
                to="/home"
                className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
                aria-label="Brand"
              >
                <img src={footerImg} alt="footer img " />
              </Link>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <h4 className="font-semibold text-black  dark:text-gray-100">
                Product
              </h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-black   hover:text-black/70 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Pricing
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-black   hover:text-black/70 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Changelog
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-black   hover:text-black/70 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Docs
                  </a>
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <h4 className="font-semibold text-black  dark:text-gray-100">
                Company
              </h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-black   hover:text-black/70 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    About us
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-black   hover:text-black/70 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Blog
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-black   hover:text-black/70 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Customers
                  </a>
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-2 mb-9">
              <h4 className="font-semibold text-black  dark:text-gray-100">
                Stay up to date
              </h4>

              <form>
                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
                  <div className="w-full">
                    <label htmlFor="hero-input" className="sr-only">
                      Subscribe
                    </label>
                    <input
                      type="email"
                      id="hero-input"
                      name="hero-input"
                      className="py-3 px-4 block w-full border-primary-900 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-primary-700 dark:text-black dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter your email"
                    />
                  </div>
                  <Link
                    to="/signup"
                    className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary-500 text-white hover:bg-primary-700 focus:outline-none  disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Share App Link
                  </Link>
                </div>
                <p className="mt-3 text-sm text-black  dark:text-gray-100">
                  welcome to the website write your own email
                </p>
              </form>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
          <div className="py-5 grid gap-6 border-y border-gray-500 md:grid-cols-2 md:items-center md:justify-between">
            <div className="footer-header flex gap-4 flex-wrap ">
              <h3 className="text-black  dark:text-white font-semibold mb-4 md:mb-0">
                Payment Partners
              </h3>
              <div className="flex flex-wrap justify-start md:flex-nowrap items-center gap-4">
                <img
                  src={amazionImg}
                  className="w-[70px] cursor-pointer"
                  alt="Amazon"
                />

                <img
                  src={amaercianImg}
                  className="w-[50px] cursor-pointer"
                  alt="American Express"
                />

                <img
                  src={paypalImg}
                  className="w-[60px] cursor-pointer"
                  alt="PayPal"
                />

                <img
                  src={mastercardImg}
                  className="w-[50px] cursor-pointer"
                  alt="MasterCard"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 items-start md:flex-row md:items-center md:ms-auto">
              <h3 className="text-black  font-semibold dark:text-white">
                Get Deliveries With Fresh Card
              </h3>
              <div className="flex items-center gap-4">
                <img
                  src={playStoreImg}
                  className="w-[100px] cursor-pointer"
                  alt="Play Store"
                />
                <img
                  src={appleStoreImg}
                  className="w-[89px] cursor-pointer"
                  alt="Apple Store"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
              <p className="text-sm text-black  dark:text-gray-100">
                © 2024 Fresh Cart <i className="fa-brands fa-opencart"></i>
              </p>
            </div>
            {/* <!-- End Col --> */}

            {/* <!-- Social Brands --> */}
            <div>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black dark:text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black dark:text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black dark:text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black dark:text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black dark:text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                </svg>
              </a>
            </div>
            {/* <!-- End Social Brands --> */}
          </div>
        </div>
      </footer>
      {/* <!-- ========== END FOOTER ========== --> */}
    </>
  );
}
