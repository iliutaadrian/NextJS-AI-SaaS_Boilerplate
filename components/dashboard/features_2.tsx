import { LockOpen1Icon } from "@radix-ui/react-icons";
import { Clock, CloudIcon, Navigation } from "lucide-react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export const Features2 = () => {
  const { t } = useTranslation();
  const features = [
    {
      name: t("dashboard:features_2.feature_1.title"),
      description: t("dashboard:features_2.feature_1.description"),
      icon: LockOpen1Icon,
    },
    {
      name: t("dashboard:features_2.feature_2.title"),
      description: t("dashboard:features_2.feature_2.description"),
      icon: CloudIcon,
    },
    {
      name: t("dashboard:features_2.feature_3.title"),
      description: t("dashboard:features_2.feature_3.description"),
      icon: Navigation,
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h3 className="font-semibold leading-7 text-primary">
                {t("dashboard:features_2.tagline")}
              </h3>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {t("dashboard:features_2.title")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t("dashboard:features_2.description")}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-primary leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-primary">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline text-muted-foreground">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/app2.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
};
