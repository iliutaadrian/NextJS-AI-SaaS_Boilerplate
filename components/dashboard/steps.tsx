import React from "react";

import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export const Steps = (props: {}) => {
  const { t } = useTranslation();
  return (
    <section id="works" className="relative py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl text-white font-bold mx-auto md:text-4xl lg:text-4xl">
            {t("dashboard:steps.title")}
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
            {t("dashboard:steps.description")}
          </p>
        </div>
        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <Image
              className="w-full"
              src={
                "https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              }
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary border-2 rounded-full shadow">
                <span className="text-xl font-semibold ">1</span>
              </div>
              <h3 className="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">
                {t("dashboard:steps.step_1.title")}
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground">
                {t("dashboard:steps.step_1.text")}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary border-2  rounded-full shadow">
                <span className="text-xl font-semibold ">2</span>
              </div>
              <h3 className="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">
                {t("dashboard:steps.step_2.title")}
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground">
                {t("dashboard:steps.step_2.text")}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary border-2 rounded-full shadow">
                <span className="text-xl font-semibold ">3</span>
              </div>
              <h3 className="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">
                {t("dashboard:steps.step_3.title")}
              </h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground">
                {t("dashboard:steps.step_3.text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
