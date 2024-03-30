"use client";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export function Testimonial() {
  const { t } = useTranslation();
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 sm:py-20 lg:px-8">
      <div className="absolute inset-0 -z-10 opacity-20" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center  font-semibold leading-8 sm:text-xl sm:leading-9">
            <p>{t("dashboard:testimonials.first.text")}</p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              className="mx-auto h-10 w-10 rounded-full"
              src={
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              }
              width={50}
              height={59}
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold">
                {t("dashboard:testimonials.first.name")}
              </div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-primary"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="">{t("dashboard:testimonials.first.role")}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
