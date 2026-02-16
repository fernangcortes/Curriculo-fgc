import { BuilderComponent, builder } from '@builder.io/react';
import { useEffect, useState } from 'react';

// Initialize Builder with your API Key
builder.init('d40faed8326a461da8c9e40d8f6e5703');

export default function BuilderPage() {
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get('page', {
          url: window.location.pathname
        })
        .promise();

      setContent(content);
      setNotFound(!content);
    }
    fetchContent();
  }, [window.location.pathname]);

  if (notFound && !content) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#faf9f6] text-stone-600">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="mb-4">Página não encontrada.</p>
          <a href="/" className="text-stone-800 underline hover:text-stone-500">Voltar para o início</a>
        </div>
      </div>
    );
  }

  return (
    <BuilderComponent model="page" content={content} />
  );
}
