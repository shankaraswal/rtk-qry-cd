import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-white w-full mb-10">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-6xl font-semibold text-red-800 mb-10 leading-[80px]">
                Summer styles are finally here
              </h1>
              <p>
                You can easily customize this template to create a homepage for
                a travel app. The design is simple and clean, with a header that
                shows a large image background and a unique trip search bar. It
                also includes sections for popular destinations, staff,
                testimonials, highlights, FAQs, and more.
              </p>

              <p>
                An eye catching design, perfect for companies in the IT sector,
                gadget companies or AI. It features a video background in the
                header guaranteed to draw attention, a special typeface as an
                accent as well as all of the sections you would need to present
                your product to the world.
              </p>
            </div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6  lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={`https://mdbcdn.b-cdn.net/img/new/slides/100.webp`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={`https://mdbcdn.b-cdn.net/img/new/slides/101.webp`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={`https://mdbcdn.b-cdn.net/img/new/slides/104.webp`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={`https://mdbcdn.b-cdn.net/img/new/slides/209.webp`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={`https://mdbcdn.b-cdn.net/img/new/slides/090.webp`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={`https://mdbcdn.b-cdn.net/img/new/slides/076.webp`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={`https://mdbcdn.b-cdn.net/img/new/slides/208.webp`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hero />
    </>
  );
};

export default HomePage;
