function FaqContato() {
  const toggleFAQ = (id:number) => {
      const content = document.getElementById(`faq-${id}`);
      const icon = document.getElementById(`icon-${id}`);

      if (!content || !icon) return;
      
      if (content.classList.contains('hidden')) {
          content.classList.remove('hidden');
          icon.style.transform = 'rotate(180deg)';
      } else {
          content.classList.add('hidden');
          icon.style.transform = 'rotate(0deg)';
      }
      /*
      // Track FAQ interaction
      if (typeof gtag !== 'undefined') {
          gtag('event', 'faq_toggle', {
              'event_category': 'engagement',
              'event_label': `faq_${id}`
          });
      }*/
  }

  return (
    <section className="py-20 bg-gray-custom">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas principais dúvidas antes de entrar em contato
          </p>
        </div>

        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(1)}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Qual o prazo médio para entrega de um projeto?
              </h3>
              <i
                className="fas fa-chevron-down text-gray-400 transform transition-transform duration-300"
                id="icon-1"
              ></i>
            </button>
            <div id="faq-1" className="hidden px-8 pb-6">
              <p className="text-gray-600 leading-relaxed">
                O prazo varia conforme a complexidade do projeto. Projetos
                residenciais simples: 15-30 dias. Projetos corporativos
                complexos: 45-90 dias. Sempre fornecemos cronograma detalhado na
                proposta.
              </p>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(2)}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                A consultoria inicial é realmente gratuita?
              </h3>
              <i
                className="fas fa-chevron-down text-gray-400 transform transition-transform duration-300"
                id="icon-2"
              ></i>
            </button>
            <div id="faq-2" className="hidden px-8 pb-6">
              <p className="text-gray-600 leading-relaxed">
                Sim, oferecemos consultoria inicial gratuita para todos os
                projetos. Inclui análise das necessidades, viabilidade técnica e
                orçamento preliminar. Visitas técnicas em João Pessoa e região
                também são gratuitas.
              </p>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(3)}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Vocês atendem projetos fora de João Pessoa?
              </h3>
              <i
                className="fas fa-chevron-down text-gray-400 transform transition-transform duration-300"
                id="icon-3"
              ></i>
            </button>
            <div id="faq-3" className="hidden px-8 pb-6">
              <p className="text-gray-600 leading-relaxed">
                Sim, atendemos toda a Paraíba e estados vizinhos. Para projetos
                distantes, oferecemos consultoria remota e parcerias locais para
                execução e suporte.
              </p>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(4)}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Que documentos preciso para solicitar um orçamento?
              </h3>
              <i
                className="fas fa-chevron-down text-gray-400 transform transition-transform duration-300"
                id="icon-4"
              ></i>
            </button>
            <div id="faq-4" className="hidden px-8 pb-6">
              <p className="text-gray-600 leading-relaxed">
                Para orçamento inicial: plantas baixas (se disponível) e
                descrição das necessidades. Para projetos detalhados: plantas
                arquitetônicas, memorial descritivo e especificações técnicas.
              </p>
            </div>
          </div>

          {/* FAQ Item 5 * /}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(5)}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Vocês oferecem manutenção dos sistemas instalados?
              </h3>
              <i
                className="fas fa-chevron-down text-gray-400 transform transition-transform duration-300"
                id="icon-5"
              ></i>
            </button>
            <div id="faq-5" className="hidden px-8 pb-6">
              <p className="text-gray-600 leading-relaxed">
                Sim, oferecemos contratos de manutenção preventiva e corretiva.
                Incluem monitoramento remoto, atualizações de software e suporte
                técnico prioritário.
              </p>
            </div>
          </div>

          {/* FAQ Item 6 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(6)}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Como funciona a garantia dos projetos?
              </h3>
              <i
                className="fas fa-chevron-down text-gray-400 transform transition-transform duration-300"
                id="icon-6"
              ></i>
            </button>
            <div id="faq-6" className="hidden px-8 pb-6">
              <p className="text-gray-600 leading-relaxed">
                Oferecemos 3 anos de garantia para projetos e 1 anos para
                equipamentos. A garantia cobre defeitos de projeto, instalação e
                funcionamento dos sistemas.
              </p>
            </div>
          </div>

          {/* FAQ Item 7 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(7)}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                É possível integrar sistemas já existentes?
              </h3>
              <i
                className="fas fa-chevron-down text-gray-400 transform transition-transform duration-300"
                id="icon-7"
              ></i>
            </button>
            <div id="faq-7" className="hidden px-8 pb-6">
              <p className="text-gray-600 leading-relaxed">
                Sim, nossa especialidade é integrar sistemas existentes com
                novas tecnologias. Fazemos análise de compatibilidade e
                desenvolvemos soluções personalizadas de integração.
              </p>
            </div>
          </div>

          {/* FAQ Item 8 * /}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(8)}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Qual o investimento mínimo para automação predial?
              </h3>
              <i
                className="fas fa-chevron-down text-gray-400 transform transition-transform duration-300"
                id="icon-8"
              ></i>
            </button>
            <div id="faq-8" className="hidden px-8 pb-6">
              <p className="text-gray-600 leading-relaxed">
                O investimento varia conforme o escopo. Projetos residenciais
                básicos começam em R$ 15.000. Projetos corporativos a partir de
                R$ 50.000. Oferecemos soluções escaláveis para todos os
                orçamentos.
              </p>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
}

export default FaqContato;
