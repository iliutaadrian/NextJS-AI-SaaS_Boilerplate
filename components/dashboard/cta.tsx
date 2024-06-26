import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export const Cta = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-primary/10 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("dashboard:cta.title")}
              <br />
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t("dashboard:cta.description")}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link href="#" className="text-sm font-semibold leading-6">
                {t("common:buttons.get-started")}
              </Link>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-primary"
              >
                {t("common:buttons.learn-more")}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="/app1.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
