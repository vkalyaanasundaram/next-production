import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Header  */}
      <Header />
      <section>
        <div className="rounded-lg overflow-hidden">
          <img
            alt="content"
            className="w-full"
            height="auto"
            src="./HeroImages_secondarypage_salespartners.jpg"
          />
        </div>
      </section>
      <section>
        <div className="container px-5 py-24 mx-auto">
          <h3 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-6 mb-6 text-center">
            Explore by Popular Topics
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <button className="text-black bg-gray-100 border-0 py-8 px-8 uppercase focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg">
              LEADERSHIP
            </button>
            <button className="text-black bg-gray-100 border-0 py-8 px-8 uppercase focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg">
              GETTING CUSTOMERS
            </button>
            <button className="text-black bg-gray-100 border-0 py-8 px-8 uppercase focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg">
              Upcoming Events
            </button>
            <button className="text-black bg-gray-100 border-0 py-8 px-8 uppercase focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg">
              Managing Money
            </button>
            <button className="text-black bg-gray-100 border-0 py-8 px-8 uppercase focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg">
              Office Hours
            </button>
            <button className="text-black bg-gray-100 border-0 py-8 px-8 uppercase focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg">
              Cash Flow
            </button>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h3 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
            What's New This Week
          </h3>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Saving Money
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Money Saving Tips and Ideas for Small Businesses{" "}
                </h2>
                <p className="leading-relaxed text-base">Annie Mueller.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/721x401"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Colosseum Roma
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/722x402"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Great Pyramid of Giza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font text-center">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-full md:w-full md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
        </div>
      </section>
      {/* Footer  */}
      <Footer />
    </>
  );
}
