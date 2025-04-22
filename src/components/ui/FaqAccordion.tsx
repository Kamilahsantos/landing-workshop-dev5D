// FaqAccordion.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Este workshop é para qual nível de experiência?',
    answer:
      'Para desenvolvedores que já atuam na área no mínimo como desenvolvedor júnior e que já tenham experiência em desenvolvimento',
  },
  {
    question: 'E se eu não puder estar presente no workshop?',
    answer:
      'Você terá como assistir a gravação se estiver incluso no seu tipo de ingresso. Porém a gravação da imersão só será disponibilizada durante 60 dias. Por isso, é de extrema importância que esteja ao vivo..',
  },
  {
    question: 'Quando e onde será a imersão?',
    answer:
      'Acontecerá ao vivo, online em uma sala exclusiva no Meet ao qual enviaremos o link de acesso para todos os inscritos, dia 10 de maio , sábado das 10h às 18h no horário de Brasília.',
  },
  {
    question: 'Vai ficar gravado?',
    answer:
      'Apenas se você comprar o ingresso VIP - Dev estratégico, assim você terá acesso a 60 dias da gravação.',
  },
  {
    question: 'Como posso garantir meu ingresso então?',
    answer:
      'Você irá clicar em um dos botões na nossa página de “Quero o ingresso” que você será direcionado a uma página segura de pagamento e pode comprar seu ingresso. Estou te esperando do outro lado, animada para acelerar sua carreira!',
  },
];

export default function FaqAccordion() {
  return (
    <Accordion type='single' collapsible className='w-full max-w-4xl mx-auto text-left'>
      {faqs.map(({ question, answer }, index) => (
        <AccordionItem value={`accordion-question-${index}`} key={index}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
