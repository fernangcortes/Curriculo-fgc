import React, { useState, useEffect } from 'react';
import { Joyride, CallBackProps, STATUS, Step } from 'react-joyride';

interface GuidedTourProps {
  run: boolean;
  onFinish: () => void;
}

export function GuidedTour({ run, onFinish }: GuidedTourProps) {
  const [tourKey, setTourKey] = useState(0);

  useEffect(() => {
    if (run) {
      setTourKey(prev => prev + 1);
    }
  }, [run]);

  const steps: Step[] = [
    {
      target: 'body',
      content: 'Bem-vindo ao meu currículo interativo! Vamos fazer um tour rápido?',
      placement: 'center',
      disableBeacon: true,
    },
    {
      target: '.tour-step-tabs',
      content: 'Navegue entre o modo Criador/Audiovisual e o modo Desenvolvedor do meu currículo aqui.',
    },
    {
      target: '.tour-step-search',
      content: 'Você pode buscar rapidamente por habilidades, projetos ou ferramentas em todo o portfólio.',
    },
    {
      target: '.tour-step-filters',
      content: 'Filtre as obras por tipos específicos, ou encontre agrupadamente por projeto nos botões de filtro e "Grupos ▾".',
    },
    {
      target: '.tour-step-ai',
      content: 'O Assistente de IA está à sua disposição! Ele usa este currículo como contexto e pode sugerir projetos exatos baseados na sua dúvida. Pergunte sobre minha experiência ou veja como usar este currículo white-label.',
    }
  ];

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];
    
    if (finishedStatuses.includes(status)) {
      onFinish();
    }
  };

  return (
    <Joyride
      key={tourKey}
      callback={handleJoyrideCallback}
      continuous
      hideCloseButton
      run={run}
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={steps}
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: '#059669', // text-emerald-600
        },
      }}
      locale={{
        back: 'Voltar',
        close: 'Fechar',
        last: 'Finalizar',
        next: 'Próximo',
        skip: 'Pular',
      }}
    />
  );
}
