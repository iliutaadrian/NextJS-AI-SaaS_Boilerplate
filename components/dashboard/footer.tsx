"use client";

import useTranslation from "next-translate/useTranslation";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="bg-primary/5 text-white pt-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-4 gap-8">
          <div>
            <h1 className="text-3xl text-primary font-medium">
              {t("common:title")}
            </h1>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase">Links</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#">
                  Why Us?
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#">
                  Contact us
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Help center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="/legal/terms-conditions">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/legal/cookie-policy">
                  Cookies Statement
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/legal/privacy-policy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h1 className="text-center pt-10 text-sm font-thin">
          © 2023. All rights reserved.
        </h1>
      </footer>
    </>
  );
};
