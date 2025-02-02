import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqList = [
  {
    value: "value-1",
    question: "Can we use our existing backend?",
    answer:
      "Yes, we can integrate with your existing backend systems while adding AI capabilities. We'll work with your team to ensure smooth integration.",
  },
  {
    value: "value-2",
    question: "How fast can you get started?",
    answer:
      "We can typically begin within 1-2 business days after project approval and initial setup.",
  },
  {
    value: "value-3",
    question: "How do we communicate during the project?",
    answer:
      "We use Discord for real-time communication and weekly sync calls to ensure alignment and quick feedback loops.",
  },
  {
    value: "value-4",
    question: "What if I'm not satisfied with the deliverables?",
    answer:
      "We work iteratively and maintain constant communication to ensure satisfaction. If issues arise, we'll work to address them promptly within the scope of our agreement.",
  },
  {
    value: "value-5",
    question: "Do you offer refunds?",
    answer:
      "We offer a satisfaction guarantee and will work with you to resolve any concerns. Specific refund terms are outlined in our service agreement.",
  },
];

export default function FAQ() {
  return (
    <section className="pt-20 pb-16 dark:bg-black bg-white dark:text-white text-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">
          Frequently asked questions
        </h2>
        <div className="text-sm dark:text-gray-400 text-gray-600 mb-6">
          Can't find your answer?{" "}
          <a href="#" className="dark:text-blue-400 text-blue-600 underline hover:opacity-80">
            Drop us a line
          </a>
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >
          {FaqList.map((item) => (
            <AccordionItem 
              key={item.value} 
              value={item.value}
              className="dark:border-gray-800 border-gray-200"
            >
              <AccordionTrigger className="dark:text-[#e4e4e4] text-gray-800 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="dark:text-[#828282] text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
