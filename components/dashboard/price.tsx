"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { CheckIcon, XIcon } from "lucide-react";
import axios from "axios";
import { toast } from "../ui/use-toast";
import { useUser } from "@clerk/nextjs";
import useTranslation from "next-translate/useTranslation";

export function Price() {
  const { isSignedIn } = useUser();
  const { t } = useTranslation("dashboard");

  const items = t("price", { returnObjects: true });
  console.log(items);
  const prices = [
    {
      name: "Starter",
      price: 7,
      initial_price: 15,
      popular: false,
      facilities_yes: [
        "100 Videos",
        t("price.facilities_yes.0"),
        t("price.facilities_yes.1"),
        t("price.facilities_yes.2"),
        t("price.facilities_yes.3"),
        t("price.facilities_yes.4"),
        t("price.facilities_yes.5"),
      ],
      facilities_no: [],
    },
    {
      name: "Pro",
      price: 20,
      initial_price: 35,
      popular: true,
      facilities_yes: [
        "1000 Videos",
        t("price.facilities_yes.0"),
        t("price.facilities_yes.1"),
        t("price.facilities_yes.2"),
        t("price.facilities_yes.3"),
        t("price.facilities_yes.4"),
        t("price.facilities_yes.5"),
      ],
      facilities_no: [],
    },
  ];

  const onStripeSubmit = async (object: any) => {
    if (!isSignedIn) {
      window.location.href = "/sign-in";
      return;
    }
    try {
      await axios
        .post("/api/stripe", {
          ...object,
        })
        .then((data) => {
          window.location.href = data.data.url;
        });
    } catch (error) {
      toast({
        variant: "destructive",
        // @ts-ignore
        description: error.response.data,
      });
    }
  };

  return (
    <div className=" md:max-w-5xl mx-auto flex flex-col items-center mb-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Pricing</h1>
      <h1 className="text-xl font-medium text-center text-muted-foreground">
        Conversations Redefined, Boundaries Unleashed
      </h1>
      <div className="mt-4 px-3 text-sm text-center">
        <ul className="flex flex-col md:flex-row gap-10">
          {prices.map((price, index) => (
            <li
              key={index}
              className={cn(
                "p-5 flex  flex-col gap-5 relative items-center rounded-lg shadow-neon bg-background/50 hover:bg-background group w-md max-w-md",
                price.popular ? "border-2 border-primary" : "",
              )}
            >
              {price.popular && (
                <span className="absolute px-3 top-[-10px] bg-primary rounded-lg">
                  Popular
                </span>
              )}
              <div className="text-4xl text-primary">{price.name}</div>
              <div className="flex items-center mb-2">
                <h3 className="text-3xl font-semibold group-hover:text-primary">
                  <span className="text-xl text-muted-foreground line-through mr-2">
                    ${price.initial_price}
                  </span>
                  ${price.price}
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                {price.facilities_yes.map((facility, index) => (
                  <p className="flex items-center" key={index}>
                    <CheckIcon className="w-6 h-6 text-primary mr-2" />
                    {facility}
                  </p>
                ))}
                {price.facilities_no.map((facility, index) => (
                  <p
                    className="flex items-center text-muted-foreground"
                    key={index}
                  >
                    <XIcon className="w-6 h-6 text-primary mr-2" />
                    {facility}
                  </p>
                ))}
              </div>
              <Button
                className="w-full cursor-pointer"
                onClick={() => onStripeSubmit(price)}
              >
                Get Started
              </Button>
              <div className="text-sm text-muted-foreground">
                Pay once. Build unlimited projects!
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
