import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import useTranslation from "next-translate/useTranslation";
import { absoluteUrl } from "../utils";

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
                background: "#0B0A0A",
                foreground: "#FAFAF9",
                primary: "#E9580C",
              },
            },
          },
        }}
      >
        <Body className="bg-background text-foreground font-sans">
          <Img
            src={absoluteUrl("logo.png")}
            width="184"
            height="75"
            alt="TubeMindSync"
            className="mx-auto my-20 border border-primary rounded-full"
          />
          <Container className="p-45">
            <Section>
              <Row>
                <Text className="text-center my-0 leading-8 text-2xl">
                  Welcome to Tube Mind Sync
                </Text>
                <Text className="text-base">
                  Congratulations! You are joining over 100+ users how want to
                  learn more from Youtube Videos.
                </Text>
              </Row>
            </Section>

            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt className="text-base font-extrabold leading-7">
                  {feature.name}
                </dt>
                <dd className="text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}

            <Section className="text-center my-5">
              <Link
                href={absoluteUrl("/")}
                className="text-foreground border border-primary p-2 rounded-md"
              >
                Go to your dashboard
              </Link>
            </Section>
          </Container>

          <Container>
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
