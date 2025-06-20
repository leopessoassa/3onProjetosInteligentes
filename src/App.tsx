import React from 'react';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      {/**  Header/Navigation */}
      <header className="bg-charcoal text-white fixed w-full top-0 z-50 shadow-lg">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <img src="/images/marca-3on-projetos-inteligentes-transparente-site.png" alt="Marca 3on Projetos Inteligentes" className="h-12" />
            
            {/** Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
                <li><a href="#home" className="hover:text-gold transition duration-300">Início</a></li>
                <li><a href="#servicos" className="hover:text-gold transition duration-300">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-gold transition duration-300">Sobre Nós</a></li>
                <li><a href="#portfolio" className="hover:text-gold transition duration-300">Portfólio</a></li>
                <li><a href="#localizacao" className="hover:text-gold transition duration-300">Localização</a></li>
                <li><a href="#contato" className="hover:text-gold transition duration-300">Contato</a></li>
            </ul>
            
            {/** Mobile Menu Button */}
            <button id="mobile-menu-btn" className="md:hidden text-2xl">
                <i className="fas fa-bars"></i>
            </button>
        </nav>
        
        {/** Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-charcoal">
            <ul className="px-4 py-4 space-y-4">
                <li><a href="#home" className="block hover:text-gold transition duration-300">Início</a></li>
                <li><a href="#servicos" className="block hover:text-gold transition duration-300">Serviços</a></li>
                <li><a href="#sobre" className="block hover:text-gold transition duration-300">Sobre Nós</a></li>
                <li><a href="#portfolio" className="block hover:text-gold transition duration-300">Portfólio</a></li>
                <li><a href="#localizacao" className="block hover:text-gold transition duration-300">Localização</a></li>
                <li><a href="#contato" className="block hover:text-gold transition duration-300">Contato</a></li>
            </ul>
        </div>
    </header>

    {/** Hero Section */}
    <section id="home" className="bg-gradient-to-br from-charcoal to-gray-800 text-white pt-20 pb-16">
        <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Projetos <span className="text-gold">Inteligentes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transformamos sua residência em um ambiente inteligente e seguro com projetos elétricos de alta qualidade e automação residencial de ponta
            </p>
            
            {/** Primary CTA */}
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <a href="#contato" className="inline-block bg-gold text-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-dark-gold transition duration-300 transform hover:scale-105">
                    Solicitar Orçamento
                </a>
                <a href="#portfolio" className="inline-block border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold hover:text-charcoal transition duration-300">
                    Ver Projetos
                </a>
            </div>
        </div>
    </section>

    {/** Serviços Section */}
    <section id="servicos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                    Nossos Serviços
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Oferecemos soluções completas em engenharia elétrica e automação residencial para residências de alto padrão
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/** Serviço 1: Projetos Elétricos */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                    <div className="text-gold text-4xl mb-4">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Projetos Elétricos</h3>
                    <p className="text-gray-600 mb-6">
                        Projetos elétricos residenciais completos, desde instalações básicas até sistemas complexos de alta potência, seguindo todas as normas técnicas.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Projetos elétricos residenciais</li>
                        <li>• Dimensionamento de quadros</li>
                        <li>• Análise de cargas</li>
                        <li>• Adequação às normas ABNT</li>
                    </ul>
                </div>
                
                {/** Serviço 2: Automação Residencial */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                    <div className="text-gold text-4xl mb-4">
                        <i className="fas fa-home"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Automação Residencial</h3>
                    <p className="text-gray-600 mb-6">
                        Transforme sua casa em um ambiente inteligente com sistemas de automação integrados para conforto, segurança e economia.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Controle de iluminação</li>
                        <li>• Automação de persianas</li>
                        <li>• Sistemas de som ambiente</li>
                        <li>• Controle por aplicativo</li>
                    </ul>
                </div>
                
                {/** Serviço 3: Sistemas de Segurança */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                    <div className="text-gold text-4xl mb-4">
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Sistemas de Segurança</h3>
                    <p className="text-gray-600 mb-6">
                        Sistemas integrados de segurança eletrônica com monitoramento remoto e tecnologia de ponta para máxima proteção.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Circuito fechado de TV</li>
                        <li>• Alarmes inteligentes</li>
                        <li>• Controle de acesso</li>
                        <li>• Monitoramento remoto</li>
                    </ul>
                </div>
                
                {/** Serviço 4: Iluminação Inteligente */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                    <div className="text-gold text-4xl mb-4">
                        <i className="fas fa-lightbulb"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Iluminação Inteligente</h3>
                    <p className="text-gray-600 mb-6">
                        Projetos de iluminação com tecnologia LED e sistemas inteligentes para criar ambientes únicos e eficientes.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Iluminação LED personalizada</li>
                        <li>• Controle de intensidade</li>
                        <li>• Cenários programáveis</li>
                        <li>• Eficiência energética</li>
                    </ul>
                </div>
                
                {/** Serviço 5: Energia Solar */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                    <div className="text-gold text-4xl mb-4">
                        <i className="fas fa-solar-panel"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Energia Solar</h3>
                    <p className="text-gray-600 mb-6">
                        Projetos de energia solar fotovoltaica para redução de custos e sustentabilidade ambiental.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Dimensionamento de sistemas</li>
                        <li>• Análise de viabilidade</li>
                        <li>• Homologação junto à concessionária</li>
                        <li>• Monitoramento de geração</li>
                    </ul>
                </div>
                
                {/** Serviço 6: Consultoria Técnica */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                    <div className="text-gold text-4xl mb-4">
                        <i className="fas fa-cogs"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Consultoria Técnica</h3>
                    <p className="text-gray-600 mb-6">
                        Consultoria especializada para arquitetos, engenheiros e construtores em projetos elétricos e automação.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Análise técnica de projetos</li>
                        <li>• Especificação de materiais</li>
                        <li>• Suporte à execução</li>
                        <li>• Treinamento de equipes</li>
                    </ul>
                </div>
            </div>
            
            {/** CTA Section dentro de Serviços */}
            <div className="text-center mt-12">
                <a href="#contato" className="inline-block bg-gold text-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-dark-gold transition duration-300 transform hover:scale-105">
                    Solicite um Orçamento Personalizado
                </a>
            </div>
        </div>
    </section>

    {/** Sobre Nós Section */}
    <section id="sobre" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                        Sobre a 3on Projetos Inteligentes
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        A 3on Projetos Inteligentes nasceu da visão de transformar residências em ambientes verdadeiramente inteligentes, combinando engenharia elétrica de excelência com as mais modernas tecnologias de automação residencial.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        Fundada por Leonardo, engenheiro eletricista com especialização em automação e desenvolvedor full stack, a empresa une conhecimento técnico profundo com inovação tecnológica para entregar soluções personalizadas e de alta qualidade.
                    </p>
                    
                    {/** Diferenciais */}
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="text-gold text-xl mt-1">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-charcoal">Expertise Técnica</h4>
                                <p className="text-gray-600">Formação em Engenharia Elétrica e Desenvolvimento de Sistemas</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                            <div className="text-gold text-xl mt-1">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-charcoal">Inovação Constante</h4>
                                <p className="text-gray-600">Sempre atualizados com as últimas tecnologias do mercado</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                            <div className="text-gold text-xl mt-1">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-charcoal">Atendimento Personalizado</h4>
                                <p className="text-gray-600">Cada projeto é único e desenvolvido sob medida</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="text-center">
                    {/** Placeholder para foto do Leonardo ou da empresa */}
                    <div className="bg-gray-300 w-full h-96 rounded-lg flex items-center justify-center mb-6">
                        <img src="/images/equipamentos-eletricos-sobre-projeto-v3.png" alt="Leonardo Pessoa" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    
                    {/** Credenciais */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-charcoal mb-4">Leonardo - Fundador</h3>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• Engenheiro Eletricista (Automação)</li>
                            <li>• Analista de Sistemas</li>
                            <li>• MBA em Gestão Empresarial - FGV</li>
                            <li>• Desenvolvedor Full Stack</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/** Portfólio Section */}
    <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                    Nosso Portfólio
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Conheça alguns dos projetos que transformaram residências em ambientes inteligentes e seguros
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/** Projeto 1 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <div className="bg-gray-300 h-48 flex items-center justify-center">
                        <img src="/images/projeto-residencial-cond.-ville-cristal-gravata-pe.jpeg" alt="Residência Alto Padrão - Gravatá-PE" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-charcoal mb-2">Condomínio Ville Cristal - Gravatá</h3>
                        <p className="text-gray-600 mb-4">
                            Projeto completo de automação residencial com controle de iluminação, som ambiente e sistema de redes.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm">Projeto Elétrico</span>
                            <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm">Automação</span>
                            <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm">Iluminação</span>
                            <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm">Persianas</span>
                            <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm">Som Ambiente</span>
                            <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm">Climatização</span>
                        </div>
                    </div>
                </div>
                
                {/** Projeto 2 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <div className="bg-gray-300 h-48 flex items-center justify-center">
                        <img src="/images/projeto-residencial-cond.-alphaville-paraiba.png" alt="Residência Alto Padrão - Alphaville Paraíba" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-charcoal mb-2">Condomínio Alphaville Paraíba</h3>
                        <p className="text-gray-600 mb-4">
                            Projeto elétrico completo com sistema de iluminação personalizada e controle de ambientes por aplicativo, energia solar fotovoltaica e eficiência energética.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm">Projeto Elétrico</span>
                            <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm">Energia Solar</span>
                            <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm">Automação</span>
                            <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm">Iluminação</span>
                            <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm">Persianas</span>
                            <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm">Som Ambiente</span>
                            <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm">Climatização</span>
                            <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm">Aspiração Central</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/** CTA dentro do Portfólio */}
            <div className="text-center mt-12">
                <a href="#contato" className="inline-block bg-charcoal text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition duration-300">
                    Quero um Projeto Como Esses
                </a>
            </div>
        </div>
    </section>

    {/** Localização Section */}
    <section id="localizacao" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                    Nossa Localização
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Atendemos toda a região metropolitana de João Pessoa e interior da Paraíba
                </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-charcoal mb-6">Áreas de Atendimento</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="text-gold text-2xl mt-1">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-charcoal text-lg">João Pessoa - PB</h4>
                                <p className="text-gray-600">
                                    Atendimento completo em todos os bairros da capital.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <div className="text-gold text-2xl mt-1">
                                <i className="fas fa-city"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-charcoal text-lg">Região Metropolitana</h4>
                                <p className="text-gray-600">
                                    Bayeux, Santa Rita, Cabedelo e demais cidades da região metropolitana de João Pessoa.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <div className="text-gold text-2xl mt-1">
                                <i className="fas fa-road"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-charcoal text-lg">Interior da Paraíba</h4>
                                <p className="text-gray-600">
                                    Atendimento sob consulta para cidades do interior.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    {/** Placeholder para Mapa */}
                    <div className="bg-gray-300 w-full h-96 rounded-lg flex items-center justify-center mb-6">
                        <img src="/images/equipamentos-eletricos-sobre-projeto-v2.png" alt="Equipamentos Elétricos sobre Projeto" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/** Contato Section */}
    <section id="contato" className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Entre em Contato
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Pronto para transformar sua residência? Entre em contato conosco e solicite um orçamento personalizado
                </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
                {/** Formulário de Contato */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">Solicite seu Orçamento</h3>
                    
                    <ContactForm />
                </div>
                
                {/** Informações de Contato */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">Outras Formas de Contato</h3>
                    
                    <div className="space-y-6">
                        {/** WhatsApp - CTA Principal */}
                        <div className="bg-green-600 p-6 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <i className="fab fa-whatsapp text-3xl"></i>
                                <div>
                                    <h4 className="font-semibold text-lg">WhatsApp</h4>
                                    <p className="text-green-100">(83) 9 8207-8702</p>
                                </div>
                            </div>
                            <a href="https://wa.me/+5583982078702" target="_blank" className="inline-block mt-4 bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                                Conversar no WhatsApp
                            </a>
                        </div>
                        
                        {/** E-mail */}
                        <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                            <i className="fas fa-envelope text-gold text-2xl"></i>
                            <div>
                                <h4 className="font-semibold">E-mail</h4>
                                <p className="text-gray-300"><a href="mailto:contato@3on.eng.br">contato@3on.eng.br</a></p>
                            </div>
                        </div>
                        
                        {/** Horário de Atendimento */}
                        <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                            <i className="fas fa-clock text-gold text-2xl"></i>
                            <div>
                                <h4 className="font-semibold">Horário de Atendimento</h4>
                                <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
                                <p className="text-gray-300">Sábado: 8h às 12h</p>
                            </div>
                        </div>
                    </div>
                    
                    {/** Redes Sociais */}
                    <div className="mt-8">
                        <h4 className="font-semibold text-lg mb-4">Siga-nos nas Redes Sociais</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/3on.eng" target="_blank" className="bg-pink-600 p-3 rounded-lg hover:bg-pink-700 transition duration-300">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/** Footer */}
    <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <div className="text-2xl font-bold text-gold mb-4">
                        <img src="/images/marca-3on-projetos-inteligentes-transparente-vertical.png" alt="Marca 3on Projetos Inteligentes" className="h-24" />
                    </div>
                    <p className="text-gray-400">
                        Transformando residências em ambientes inteligentes com projetos elétricos e automação de alta qualidade.
                    </p>
                </div>
                
                <div>
                    <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
                    <ul className="space-y-2">
                        <li><a href="#servicos" className="hover:text-gold transition duration-300">Serviços</a></li>
                        <li><a href="#sobre" className="hover:text-gold transition duration-300">Sobre Nós</a></li>
                        <li><a href="#portfolio" className="hover:text-gold transition duration-300">Portfólio</a></li>
                        <li><a href="#contato" className="hover:text-gold transition duration-300">Contato</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-semibold text-white mb-4">Contato</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                            <i className="fas fa-map-marker-alt text-gold"></i>
                            <span>João Pessoa - PB</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <i className="fas fa-phone text-gold"></i>
                            <span>(83) 9 8207-8702</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <i className="fas fa-envelope text-gold"></i>
                            <span>contato@3on.eng.br</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                <p>&copy; 2024 3on Projetos Inteligentes. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
