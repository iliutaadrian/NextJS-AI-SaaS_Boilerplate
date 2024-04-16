import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";
import useTranslation from "next-translate/useTranslation";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

//   const features = [
//     {
//       name: t("dashboard:features.feature_1.title"),
//       description: t("dashboard:features.feature_1.description"),
//       icon: LockOpen1Icon,
//     },
//     {
//       name: t("dashboard:features.feature_2.title"),
//       description: t("dashboard:features.feature_2.description"),
//       icon: CloudIcon,
//     },
//     {
//       name: t("dashboard:features.feature_3.title"),
//       description: t("dashboard:features.feature_3.description"),
//       icon: Navigation,
//     },
//     {
//       name: t("dashboard:features.feature_4.title"),
//       description: t("dashboard:features.feature_4.description"),
//       icon: Clock,
//     },
//   ];
//
// };

export const WelcomeEmail = () => {
  const { t } = useTranslation();
  const features = [
    {
      name: t("dashboard:features.feature_1.title"),
      description: t("dashboard:features.feature_1.description"),
    },
    {
      name: t("dashboard:features.feature_2.title"),
      description: t("dashboard:features.feature_2.description"),
    },
    {
      name: t("dashboard:features.feature_3.title"),
      description: t("dashboard:features.feature_3.description"),
    },
    {
      name: t("dashboard:features.feature_4.title"),
      description: t("dashboard:features.feature_4.description"),
    },
  ];

  return (
    <Html>
      <Head />
      <Preview>Welcome</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                  DEFAULT: "hsl(var(--primary))",
                  foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                  DEFAULT: "hsl(var(--secondary))",
                  foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                  DEFAULT: "hsl(var(--destructive))",
                  foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                  DEFAULT: "hsl(var(--muted))",
                  foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                  DEFAULT: "hsl(var(--accent))",
                  foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                  DEFAULT: "hsl(var(--popover))",
                  foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                  DEFAULT: "hsl(var(--card))",
                  foreground: "hsl(var(--card-foreground))",
                },
              },
            },
          },
        }}
      >
        <Body className="text-base font-sans">
          <Img
            src={`${baseUrl}/logo.png`}
            width="184"
            height="75"
            alt="TubeMindSync"
            className="mx-auto my-20"
          />
          <Container className="p-45">
            <Heading className="text-center my-0 leading-8">
              Welcome to Tube Mind Sync
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Congratulations! You're joining over 100+ users how want to
                  learn more from Youtube Videos.
                </Text>
              </Row>
            </Section>

            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt className="text-base font-bold leading-7 pl-2">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}

            <Section className="text-center">
              <Button className="text-primary rounded-lg py-3 px-[18px]">
                Go to your dashboard
              </Button>
            </Section>
          </Container>

          <Container className="mt-20">
            <Section>
              <Row>
                <Column className="text-right px-20">
                  <Link>Unsubscribe</Link>
                </Column>
                <Column className="text-left">
                  <Link>Manage Preferences</Link>
                </Column>
              </Row>
            </Section>
            <Text className="text-center text-gray-400 mb-45">
              Tube Mind Sync, 47 Montgomery Street, CA
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
