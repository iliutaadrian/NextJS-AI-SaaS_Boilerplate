import { LockOpen1Icon } from "@radix-ui/react-icons";
import { Clock, CloudIcon, Navigation } from "lucide-react";
import useTranslation from "next-translate/useTranslation";

export const Features = () => {
  const { t } = useTranslation();
  const features = [
    {
      name: t("dashboard:features.feature_1.title"),
      description: t("dashboard:features.feature_1.description"),
      icon: LockOpen1Icon,
    },
    {
      name: t("dashboard:features.feature_2.title"),
      description: t("dashboard:features.feature_2.description"),
      icon: CloudIcon,
    },
    {
      name: t("dashboard:features.feature_3.title"),
      description: t("dashboard:features.feature_3.description"),
      icon: Navigation,
    },
    {
      name: t("dashboard:features.feature_4.title"),
      description: t("dashboard:features.feature_4.description"),
      icon: Clock,
    },
  ];

  return (
    <div className=" py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h3 className=" font-semibold leading-7 text-primary">
            {t("dashboard:features.tagline")}
          </h3>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            {t("dashboard:features.title")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("dashboard:features.description")}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
