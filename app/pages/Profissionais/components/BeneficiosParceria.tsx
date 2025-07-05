function BeneficiosParceria() {
  return (
    <section className="py-20 bg-gray-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Benefícios Exclusivos para Parceiros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais que uma parceria técnica, oferecemos um ecossistema completo de
            suporte para o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Suporte Técnico */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-headset text-3xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Suporte Técnico 24/7
            </h3>
            <p className="text-gray-600 mb-6">
              Equipe técnica especializada disponível para esclarecer dúvidas e
              dar suporte em todas as fases do projeto.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <div>• WhatsApp direto com engenheiros</div>
              <div>• Videoconferências técnicas</div>
              <div>• Suporte em apresentações</div>
              <div>• Revisões de projeto</div>
            </div>
          </div>

          {/* Material Comercial * /}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-presentation text-3xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Material Comercial
            </h3>
            <p className="text-gray-600 mb-6">
              Catálogos, apresentações e materiais técnicos personalizados para
              suas apresentações comerciais.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <div>• Catálogos técnicos atualizados</div>
              <div>• Apresentações PowerPoint</div>
              <div>• Cases de sucesso</div>
              <div>• Calculadoras de ROI</div>
            </div>
          </div>*/}

          {/* Treinamentos * /}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-graduation-cap text-3xl text-accent"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Treinamentos Técnicos
            </h3>
            <p className="text-gray-600 mb-6">
              Capacitação contínua em novas tecnologias e tendências do mercado
              de automação predial.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <div>• Workshops mensais</div>
              <div>• Certificações técnicas</div>
              <div>• Visitas técnicas</div>
              <div>• Webinars especializados</div>
            </div>
          </div>*/}

          {/* Comissões */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-percentage text-3xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Comissões Atrativas
            </h3>
            <p className="text-gray-600 mb-6">
              Sistema de comissionamento transparente e competitivo para
              projetos indicados e desenvolvidos em parceria.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              {/** <div>• Comissões de 5% a 15%</div>*/}
              <div>• Pagamento pontual</div>
              <div>• Bônus por volume</div>
              <div>• Contratos transparentes</div>
            </div>
          </div>

          {/* Prioridade */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-star text-3xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Atendimento Prioritário
            </h3>
            <p className="text-gray-600 mb-6">
              Parceiros têm prioridade no atendimento e prazos diferenciados
              para entrega de projetos.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <div>• Prazos reduzidos</div>
              <div>• Atendimento exclusivo</div>
              <div>• Flexibilidade comercial</div>
              <div>• Suporte personalizado</div>
            </div>
          </div>

          {/* Co-marketing */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-bullhorn text-3xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Co-marketing
            </h3>
            <p className="text-gray-600 mb-6">
              Ações conjuntas de marketing para fortalecer ambas as marcas e
              gerar mais oportunidades de negócio.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <div>• Posts em redes sociais</div>
              <div>• Cases em conjunto</div>
              <div>• Eventos técnicos</div>
              <div>• Indicações mútuas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeneficiosParceria;
