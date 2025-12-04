"use client"
import React, { useState } from 'react';

// PrivacyNotice — prosty, ładny komponent RODO do Next.js (Tailwind)
// Użycie:
// import PrivacyNotice from '@/components/RODO_PrivacyNotice_React';
// <PrivacyNotice appName="FashionBuddy" contactEmail="kontakt@fashionbuddy.online"/>

export default function PrivacyNotice({
  appName = 'FashionBuddy',
  contactEmail = 'kontakt@fashionbuddy.online',
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore — nie wszystkie przeglądarki pozwalają na clip API
    }
  };

  return (
    <div className="max-w-3xl py-32 mx-auto p-4">
      <div className="bg-white   rounded-2xl overflow-hidden">
        <div className="p-4 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Informacja o przetwarzaniu danych (RODO)</h3>
              
            </div>
           
          </div>

          
            <div id="rodo-panel" className="mt-4 border-t pt-4">
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Administrator danych:</strong> właściciel aplikacji <strong>{appName}</strong>.
                </p>

                <p>
                  <strong>Jakie dane przetwarzamy?</strong> Przetwarzamy jedynie dane niezbędne do korzystania z aplikacji — w szczególności <strong>adres e-mail</strong> używany do
                  logowania i komunikacji.
                </p>

                <p>
                  <strong>Cel przetwarzania:</strong> utworzenie i obsługa konta oraz komunikacja związana z działaniem aplikacji.
                </p>

                <p>
                  <strong>Podstawa prawna:</strong> art. 6 ust. 1 lit. b RODO — przetwarzanie jest niezbędne do wykonania umowy (świadczenia usługi).
                </p>

                <p>
                  <strong>Udostępnianie:</strong> Dane nie są przekazywane podmiotom trzecim, z wyjątkiem usług technicznych niezbędnych do działania aplikacji (np. hosting, dostawcy
                  usług e-mail).
                </p>

                <p>
                  <strong>Okres przechowywania:</strong> Dane są przechowywane przez czas posiadania konta. Po usunięciu konta dane zostaną trwale usunięte.
                </p>

                <p>
                  <strong>Prawa osoby, której dane dotyczą:</strong> prawo dostępu, sprostowania, usunięcia (bycia zapomnianym), ograniczenia przetwarzania, przenoszenia danych oraz wniesienia
                  skargi do organu nadzorczego (Prezesa UODO).
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-sm">Kontakt w sprawach danych osobowych:</p>
                    <div className="mt-1 flex items-center gap-2">
                      <code className="px-2 py-1 bg-gray-100 rounded text-xs">{contactEmail}</code>
                      <button
                        onClick={handleCopy}
                        className="text-xs px-2 py-1 border rounded shadow-sm hover:bg-gray-50"
                        aria-label="Skopiuj e-mail"
                      >
                        Kopiuj
                      </button>
                      {copied && <span className="text-xs text-green-600">Skopiowano!</span>}
                    </div>
                  </div>
                </div>

              
              </div>
            </div>
          
        </div>
      </div>

     
    </div>
  );
}
