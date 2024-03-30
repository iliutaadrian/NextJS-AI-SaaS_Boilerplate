"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useTranslation from "next-translate/useTranslation";

export function Faq() {
  const { t } = useTranslation();
  const faqs = [
    {
      question: t("dashboard:faq.questions.0.question"),
      answer: t("dashboard:faq.questions.0.answer"),
    },
    {
      question: t("dashboard:faq.questions.1.question"),
      answer: t("dashboard:faq.questions.1.answer"),
    },
    {
      question: t("dashboard:faq.questions.2.question"),
      answer: t("dashboard:faq.questions.2.answer"),
    },
    {
      question: t("dashboard:faq.questions.3.question"),
      answer: t("dashboard:faq.questions.3.answer"),
    },
    {
      question: t("dashboard:faq.questions.4.question"),
      answer: t("dashboard:faq.questions.4.answer"),
    },
  ];

  return (
    <div
      className="md:max-w-5xl mx-auto py-10 flex flex-col md:flex-row"
      id="faq"
    >
      <div className="basis-1/2">
        <h1 className="text-2xl md:text-4xl text-primary text-center">
          Frequently Asked Questions
        </h1>
        <h1 className=" font-medium text-center">
          Have another question? Contact US on Twitter or by email.
        </h1>
      </div>

      <div className="basis-1/2 px-10">
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={faq.question} className="my-5">
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
