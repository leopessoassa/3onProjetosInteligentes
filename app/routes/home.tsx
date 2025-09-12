import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Leo Pessoa - Engenheiro Eletricista | Projetos Elétricos e Automação" },
    { name: "description", content: "Engenheiro eletricista especializado em projetos elétricos e automação residencial. Parceiro técnico para arquitetos em João Pessoa - PB." },
    { name: "keywords", content: "engenheiro eletricista, projetos elétricos, automação residencial, BIM, AutoCAD, João Pessoa, arquitetos" },
  ];
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Finalmente, um engenheiro que fala a sua língua
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Automação residencial que seus clientes vão entender (e aprovar no orçamento). 
            Parceria técnica descomplicada para arquitetos em João Pessoa.
          </p>
          <a 
            href="#contato" 
            className="gradient-cta hover:bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1"
          >
            Vamos conversar sobre seu próximo projeto
          </a>
        </div>
      </section>

      {/* Para Arquitetos */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Cansado de perder projetos por falta de expertise elétrica?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Sei como é frustrante quando o cliente quer automação mas você não tem o parceiro técnico certo. 
              Vamos resolver isso juntos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold mb-2 text-secondary-800">Orçamentos Realistas</h3>
              <p className="text-secondary-600">Automação que cabe no bolso do cliente</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold mb-2 text-secondary-800">Linguagem Simples</h3>
              <p className="text-secondary-600">Explicações que vendem o projeto</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold mb-2 text-secondary-800">ROI Comprovado</h3>
              <p className="text-secondary-600">Valorização patrimonial mensurável</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold mb-2 text-secondary-800">Suporte Comercial</h3>
              <p className="text-secondary-600">Te ajudo a convencer o cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Leo */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Sobre Leo Pessoa</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4">Credibilidade Técnica + Visão Comercial</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-3">🎓</span>
                    Engenheiro Eletricista + Analista de Sistemas
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-3">🏆</span>
                    MBA Gestão Empresarial (FGV)
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-3">💻</span>
                    Especialista em BIM e AutoCAD
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-3">🏠</span>
                    Automação Residencial Inteligente
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-3">📍</span>
                    João Pessoa - PB
                  </li>
                </ul>
              </div>
              <div className="bg-secondary-100 h-64 rounded-lg flex items-center justify-center shadow-elegant">
                <span className="text-secondary-500">Foto do Leo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Café na praia para falar do próximo projeto?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos trabalhar juntos. 
            Sem compromisso, só uma conversa entre profissionais.
          </p>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Seu nome"
                className="w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-transparent focus:border-accent-500 focus:outline-none transition-colors"
                required
              />
              <input 
                type="email" 
                placeholder="Seu email"
                className="w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-transparent focus:border-accent-500 focus:outline-none transition-colors"
                required
              />
              <input 
                type="tel" 
                placeholder="WhatsApp"
                className="w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-transparent focus:border-accent-500 focus:outline-none transition-colors"
                required
              />
              <textarea 
                placeholder="Conte sobre seu próximo projeto"
                rows={4}
                className="w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-transparent focus:border-accent-500 focus:outline-none transition-colors"
                required
              ></textarea>
              <button 
                type="submit"
                className="w-full gradient-cta hover:bg-accent-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Leo Pessoa - Engenheiro Eletricista. Todos os direitos reservados.</p>
          <p className="mt-2 text-secondary-400">João Pessoa - PB | CREA-PB</p>
        </div>
      </footer>
    </div>
  );
}