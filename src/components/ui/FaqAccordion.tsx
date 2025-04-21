// FaqAccordion.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'Este workshop é para qual nível de experiência?',
    answer: 'Todos níveis de experiência são bem-vindos!',
  },
  {
    question: 'O que é o Frontend Mentor?',
    answer: 'O Frontend Mentor é uma comunidade de desenvolvedores que compartilham suas experiências e conhecimentos para ajudar os iniciantes a crescer e alcançar seus objetivos.',
  },
  {
    question: 'Como eu posso participar desse workshop?',
    answer: 'Você pode participar desse workshop de forma gratuita ou pagar uma taxa mensal. A taxa paga é de R$ 99,99 mensais.',
  },
  {
    question: 'Qual o prazo para participar desse workshop?',
    answer: 'O prazo para participar desse workshop é de até o dia 19 de agosto de 2022.',
  },
  {
    question: 'Qual o horário para participar desse workshop?',
    answer: 'O horário para participar desse workshop é de das 10h às 18h.',
  },
  {
    question: 'Qual a diferença entre o Frontend Mentor e o Frontend Master?',
    answer: 'O Frontend Master é um curso de formação completa para desenvolvedores Frontend, enquanto o Frontend Mentor é uma comunidade de desenvolvedores que compartilham suas experiências e conhecimentos para ajudar os iniciantes a crescer e alcançar seus objetivos.',
  },
];

export default function FaqAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-4xl mx-auto text-left"
    >
      {
        faqs.map(({ question, answer }, index) => (
          <AccordionItem value={`accordion-question-${index}`} key={index}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))
      }
    </Accordion>
  );
}
