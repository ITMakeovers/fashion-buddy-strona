"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      img: "/screen1.png",
      title: "Innowacyjna aplikacja mobilna",
      description:
        "Fashion Buddy to aplikacja mobilna, która łączy technologię z modą aby pomóc Ci w pełni wykorzystać potencjał Twojej garderoby.",
    },
    {
      img: "/screen3.png",
      title: "Wirtualna Garderoba",
      description:
        "Skanuj i digitalizuj swoje ubrania, tworząc kompletną cyfrową garderobę w jednym miejscu. Przeglądaj swoje elementy i zarządzaj nimi łatwiej niż kiedykolwiek.",
    },
    {
      img: "/screen4.png",
      title: "AI Stylista",
      description:
        "Inteligentne sugestie stylizacji dopasowane do pogody i Twoich preferencji. Otrzymuj propozycje zestawów, które idealnie pasują do okazji i twojego indywidualnego stylu.",
    },
    {
      img: "/screen6.png",
      title: "Planowanie Prania",
      description:
        "Inteligentny system przypomina o praniu ubrań i pomaga zaplanować pranie, aby ulubione elementy były zawsze gotowe",
    },
    {
      img: "/screen2.png",
      title: "Inspiruj się Inymi",
      description:
        "Przeglądaj ubrania i stylizacje innych użytkowników, aby czerpać pomysły i odkrywać nowe inspiracje.",
    },
    {
      img: "/screen5.png",
      title: "Pożyczanie i Wymiana",
      description:
        "Wypożyczaj ubrania od znajomych lub wymieniaj się garderobą w społeczności, oszczędzając i działając ekologicznie",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 scroll-m-2"
        id="wprowadzenie"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl sm:text-6xl font-light text-gray-900 mb-6">
              Co to jest{" "}
              <span className="font-normal text-[#264653]">Fashion</span>
              <span className="ml-1 text-[#264653] font-extrabold">Buddy</span>?
            </h1>
            <p className="md:text-xl text-gray-700 max-w-3xl mx-auto">
              Twój osobisty asystent mody, który pomaga tworzyć idealne
              stylizacje i organizować garderobę
            </p>
          </div>

          {/* Key Features - Carousel for Mobile, Star for Desktop */}

          {/* Mobile Carousel */}
          <div className=" relative mb-12  max-w-[500px] mx-auto">
            <div className="overflow-hidden ">
              <div
                className="flex items-stretch transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="w-full shrink-0 px-4 flex items-stretch"
                  >
                    <div className="bg-white rounded-xl border border-[#2a9d8f] p-8">
                      <Image
                        src={feature.img}
                        alt="Feature Icon"
                        width={300}
                        height={420}
                        className="mx-auto mb-4 rounded-[33px] shadow-md object-contain max-h-[420px] w-auto"
                      />
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-[#264653] w-8" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className=" bg-[#2a9d8f]  rounded-2xl shadow-xl p-8 sm:p-12 text-[white] text-center mb-12">
            <div className="flex items-center gap-2 justify-center mb-4">
              <Rocket />
              <h2 className="text-3xl font-bold ">Nasza Misja</h2>
            </div>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Fashion Buddy powstał z myślą o osobach, które chcą wyglądać
              stylowo każdego dnia, ale nie mają czasu ani pewności w dobieraniu
              strojów. Łączymy technologię z modą aby uczynić codzienne decyzje
              związane z ubiorem - prostymi i przyjemnymi.
            </p>
          </div>

          {/* How to Launch Section */}
          <section
            id="instrukcja"
            className="max-w-4xl mx-auto mt-20 scroll-m-4"
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Jak uruchomić aplikację?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Step 1 */}
              <div className="bg-white rounded-xl border border-[#2a9d8f] p-6 text-center">
                <div className="w-16 h-16 bg-[#264653] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Pobierz Expo Go
                </h3>
                <p className="text-gray-600 mb-4">
                  Zainstaluj aplikację Expo Go ze sklepu Google Play Store lub
                  Apple App Store na swoim urządzeniu mobilnym
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=host.exp.exponent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2a9d8f] hover:underline font-semibold"
                  >
                    Google Play
                  </a>
                  <span className="text-gray-400">|</span>
                  <a
                    href="https://apps.apple.com/app/expo-go/id982107779"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2a9d8f] hover:underline font-semibold"
                  >
                    App Store
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-[#2a9d8f] p-6 text-center">
                <div className="w-16 h-16 bg-[#264653] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Uruchom aplikację
                </h3>
                <p className="text-gray-600">
                  Zeskanuj kod QR poniżej za pomocą aparatu lub kliknij w link,
                  aby otworzyć Fashion Buddy.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Po pierwszym uruchomieniu aplikacja zostanie zapisana w Expo
                  Go i będziesz mógł uruchamiać ją bezpośrednio z aplikacji.
                </p>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-linear-to-br from-[#264653] to-[#2a9d8f] rounded-2xl shadow-xl p-8 sm:p-12 text-white text-center">
              <h3 className="text-2xl font-bold mb-6">Zeskanuj kod QR</h3>
              <div className="bg-white p-6 rounded-xl inline-block mb-6">
                <div className="w-52 h-52 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Image
                    src="/kodQR.svg"
                    alt="QR Code"
                    width={208}
                    height={208}
                    className="w-full"
                  />
                </div>
              </div>
              <p className="text-lg mb-4">lub</p>
              <a
                href="https://expo.dev/preview/update?message=2.1.0&updateRuntimeVersion=1.0.0&createdAt=2025-12-04T11%3A18%3A37.177Z&slug=exp&projectId=1e8c7ec1-ca05-4263-9139-5fdafd1b0314&group=b8274ca1-24dc-4949-b4c8-94092e5f6abf"
                className="bg-white block w-fit mx-auto text-[#264653] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Kliknij tutaj, aby uruchomić
              </a>
            </div>

            <div className="bg-white rounded-xl border border-[#2a9d8f] p-6 text-center mt-8">
              <div className="w-16 h-16 bg-[#264653] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Uzupełnij ankietę
              </h3>
              <p className="text-gray-600">
                Pomóż nam dostosować aplikację do Twoich potrzeb, wypełniając
                krótką ankietę którą otrzymasz na adres e-mail po paru dniach
                korzystania z aplikacji.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
