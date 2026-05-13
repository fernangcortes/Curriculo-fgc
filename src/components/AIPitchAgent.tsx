import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Check, Minimize2, Maximize2 } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

interface Message {
  role: "user" | "ai";
  content: string;
}

export default function AIPitchAgent({ contextData, onSearch }: { contextData: string, onSearch?: (q: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content: "Olá! Sou o assistente de IA do Fernando. Estou aqui para entender os seus desafios — seja em produção audiovisual, automação de estúdios ou integração de ferramentas web. Como posso te ajudar hoje?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const { GoogleGenAI } = await import("@google/genai");
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is missing.");
      }
      
      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `Você é o 'AI Pitch Agent', o consultor técnico exclusivo de Fernando Gomes Côrtes, e também atua como guia para este repositório de currículo White-Label (Open Source).
Sua missão é responder focando ESTRITAMENTE na necessidade específica do cliente, conectando à experiência do Fernando, ou explicar como usar este currículo.

Dados do Fernando:
${contextData}

Diretrizes OBRIGATÓRIAS:
1. FOCO TOTAL NO PEDIDO: Se o usuário pedir um serviço (ex: câmera, vMix, dev), busque no JSON APENAS as evidências relevantes em 'experience', trabalhos, programas ou 'courses'. NUNCA resuma o currículo inteiro. Mantenha respostas curtas.
2. WHITE LABEL E GITHUB: Se o usuário perguntar sobre como este site foi feito, ou como usar para si mesmo (White-label), explique que este é um template React/Vite com Tailwind. Mencione que há um README.md completo no repositório ensinando a configurar as variáveis em \`constants.ts\` e \`new_data.json\` para personalizar.
3. ESTILO DE ESCRITA: Extremamente direto, curto, amigável e focado. Sem enrolação.
4. NENHUMA FORMATAÇÃO MARCADA: Crie parágrafos normais. NÃO USE asteriscos (*), negrito, itálico, ou listas. Fale em texto puramente plano.
5. CONVERSE E QUALIFIQUE: Se for sobre trabalho, termine com breve pergunta sobre o projeto da pessoa.
6. AÇÃO: Incentive os contatos se for proposta de trabalho.
7. BOTÕES DE PROJETO: SEMPRE que citar um projeto, empresa ou curso, adicione um botão interativo NO FINAL DA MENSAGEM que filtra o portfólio. Use EXATAMENTE: [Ver Trabalho: Nome](search:Nome Exato).`;

      const formattedMessages = newMessages.map(msg => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: formattedMessages,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const responseText = response.text || "";

      setMessages((prev) => [...prev, { role: "ai", content: responseText }]);
    } catch (error: any) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: `Erro: ${error.message}` }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = (content: string) => {
    const parts = content.split(/\[(.*?)\]\(search:(.*?)\)/g);
    
    if (parts.length === 1) return content;

    const elements = [];
    let buttons = [];
    for (let i = 0; i < parts.length; i += 3) {
      if (parts[i]) {
        elements.push(<span key={`text-${i}`}>{parts[i]}</span>);
      }
      if (i + 1 < parts.length) {
        buttons.push(
          <button 
            key={`btn-${i}`}
            onClick={() => {
              if (onSearch) {
                onSearch(parts[i+2]);
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="inline-block mt-2 mb-1 px-3 py-1.5 bg-emerald-100/80 text-emerald-800 hover:bg-emerald-200 text-xs font-bold rounded-lg transition-colors border border-emerald-300 shadow-sm mr-2"
          >
            {parts[i+1]}
          </button>
        );
      }
    }
    
    return (
      <div className="flex flex-col">
        <div>{elements}</div>
        {buttons.length > 0 && <div className="mt-2 flex flex-wrap gap-2">{buttons}</div>}
      </div>
    );
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 print:hidden tour-step-ai">
        {isOpen ? (
          <div className="w-80 sm:w-96 bg-white dark:bg-zinc-900/60 backdrop-blur-md border border-stone-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 animate-in slide-in-from-bottom-5">
            <div className="bg-stone-900 dark:bg-zinc-950 text-white p-4 flex justify-between items-center relative overflow-hidden">
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 bg-white dark:bg-zinc-900/10 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">Assistente Consultivo</h3>
                  <p className="text-[10px] text-stone-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="relative z-10 text-stone-300 hover:text-white transition-colors p-1"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            <div className="h-96 md:h-[400px] bg-stone-50 dark:bg-zinc-800/50 p-4 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user" 
                        ? "bg-emerald-600 text-white rounded-br-sm" 
                        : "bg-white dark:bg-zinc-900/60 backdrop-blur-md border border-stone-200 dark:border-white/10 text-stone-700 dark:text-zinc-200 rounded-bl-sm shadow-sm"
                    }`}
                  >
                    {renderMessage(msg.content)}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-zinc-900/60 backdrop-blur-md border border-stone-200 dark:border-white/10 p-4 rounded-xl rounded-bl-sm shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {messages.length > 2 && (
               <div className="px-4 py-2 bg-stone-100 dark:bg-zinc-800/50 dark:bg-zinc-800/50 border-t border-stone-200 dark:border-white/10 flex gap-2">
                  <a 
                    href={`https://wa.me/5562981899522`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#25D366] hover:bg-[#20bd5c] text-white text-xs font-bold py-2 rounded-lg transition-colors"
                  >
                    Solicitar Orçamento
                  </a>
                 <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex-1 text-center bg-stone-200 dark:bg-zinc-700 hover:bg-stone-300 text-stone-800 dark:text-zinc-100 text-xs font-bold py-2 rounded-lg transition-colors"
                  >
                    Enviar Email
                  </a>
               </div>
            )}

            <form onSubmit={handleSend} className="p-3 bg-white dark:bg-zinc-900/60 backdrop-blur-md border-t border-stone-200 dark:border-white/10 flex gap-2 items-end">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Como posso melhorar..."
                className="w-full bg-stone-50 dark:bg-zinc-800/50 border border-stone-200 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-emerald-500 resize-none h-10 min-h-[40px] max-h-32"
                rows={1}
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 shrink-0 bg-stone-900 dark:bg-zinc-950 text-white rounded-xl flex items-center justify-center hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <button 
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-stone-900 dark:bg-zinc-950 hover:bg-black text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 group relative"
          >
            <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
          </button>
        )}
      </div>
    </>
  );
}
