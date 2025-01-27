import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Can't find your answer?{" "}
          <a href="#" className="text-blue-600 underline">
            Drop us a line
          </a>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          <AccordionItem value="item-1">
            <AccordionTrigger>Can we use our existing backend?</AccordionTrigger>
            <AccordionContent>
              Yes, we can integrate with your existing backend systems while adding AI capabilities. We'll work with
              your team to ensure smooth integration.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How fast can you get started?</AccordionTrigger>
            <AccordionContent>
              We can typically begin within 1-2 business days after project approval and initial setup.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How do we communicate during the project?</AccordionTrigger>
            <AccordionContent>
              We use Discord for real-time communication and weekly sync calls to ensure alignment and quick feedback
              loops.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>What if I'm not satisfied with the deliverables?</AccordionTrigger>
            <AccordionContent>
              We work iteratively and maintain constant communication to ensure satisfaction. If issues arise, we'll
              work to address them promptly within the scope of our agreement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
            <AccordionContent>
              We offer a satisfaction guarantee and will work with you to resolve any concerns. Specific refund terms
              are outlined in our service agreement.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
