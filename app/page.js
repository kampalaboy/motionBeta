"use client";

import NavMenu from "./components/navmenu";
import Link from "next/link";
import Head from "next/head";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-500">
      <Suspense fallback={<Loading />}>
        <NavMenu quantity={0} cartItems={[]} />
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Calligraffitti|Montserrat:400,700&display=swap"
          />
        </Head>

        {/* Featured Categories */}
        <div className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <Link href="/auction">
                <div className="relative h-96">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <img
                    src="/assets/images/M.png"
                    alt="Paintings"
                    className="w-[200px] h-[200px] transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Paintings
                    </h3>
                    <p className="text-white/80 mb-4">
                      Discover unique artworks that speak to your soul
                    </p>
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium">
                      View Collection
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <Link href="/accessories">
                <div className="relative h-96">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <img
                    src="/assets/images/accessories.png"
                    alt="Accessories"
                    className="w-[200px] h-[200px] object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Accessories
                    </h3>
                    <p className="text-white/80 mb-4">
                      Elevate your style with our curated accessories
                    </p>
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium">
                      Shop Now
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Calligraffitti" }}
                >
                  MoTioN
                </h2>
                <p className="text-gray-400 mt-2">Elevate Your Life</p>
              </div>

              <div className="flex gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Explore</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/auction"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Art Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/accessories"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Accessories
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Connect</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} MoTioN Inc. All rights
                reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Suspense>
    </main>
  );
}
