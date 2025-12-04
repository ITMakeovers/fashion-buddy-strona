import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Fashion Buddy",
  description: "Twój osobisty asystent mody",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${poppins.variable} antialiased`}>
        <Navigation />
        {children}
        {/* Footer */}
        <footer className="bg-[#264653] text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Project Info */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Fashion Buddy</h3>
                <p className="text-gray-300 mb-4">
                  Praca inżynierska realizowana na Politechnice Gdańskiej
                </p>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="font-semibold">Autorzy:</span>
                  </p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Paweł Mroczek</li>
                    <li>• Vincenzo Piras</li>
                    <li>• Maciej Plec</li>
                    <li>• Wiktor Szulc</li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Kontakt</h3>
                <p className="text-gray-300 mb-4">
                  Masz pytania lub sugestie? Skontaktuj się z nami!
                </p>
                <a
                  href="mailto:fashion.buddy@onet.pl"
                  className="inline-flex items-center gap-2 text-[#2a9d8f] hover:text-[#21867a] font-semibold transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  fashion.buddy@onet.pl
                </a>
                <div className="mt-4">
                  <span className="font-semibold">Regulamin:</span>
                  <Link
                    href="/polityka-prywatnosci"
                    className="block mt-4 text-gray-300 hover:text-white underline"
                  >
                    Polityka Prywatności
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-600 pt-6 text-center text-gray-400">
              <p>
                &copy; 2025 Fashion Buddy. Politechnika Gdańska - Wydział
                Elektroniki Informatyki i Telekomunikacji.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
