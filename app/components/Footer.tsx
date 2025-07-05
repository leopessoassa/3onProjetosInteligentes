import { useEffect, useRef } from "react";
import { Link } from "react-router";

const Footer = () => {
  const backToTopBtn = useRef<HTMLButtonElement>(null);

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Initialize Back to Top Button visibility
    const handleScroll = () => {
      if (backToTopBtn.current) {
        if (window.pageYOffset > 300) {
          backToTopBtn.current.style.opacity = "1";
          backToTopBtn.current.style.visibility = "visible";
        } else {
          backToTopBtn.current.style.opacity = "0";
          backToTopBtn.current.style.visibility = "hidden";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*
    // Notification Function
    function showNotification(message, type = 'info') {
        const colors = {
            success: 'bg-green-500',
            error: 'bg-red-500',
            warning: 'bg-yellow-500',
            info: 'bg-blue-500'
        };

        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 ${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300`;
        notification.innerHTML = `
            <div class="flex items-center space-x-3">
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
*/

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <a href="/" className="text-3xl font-bold text-white">
                3on
              </a>
              <span className="block text-gray-300 mt-1">
                Projetos Inteligentes
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em automação residencial, segurança eletrônica, sonorização de ambientes, projetos elétricos e SPDA. Transformando ambientes com tecnologia de ponta há mais de 12 anos.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/3on.eng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram da 3on Projetos Inteligentes"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://wa.me/5583982078702"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp da 3on Projetos Inteligentes"
              >
                <i className="fab fa-whatsapp text-lg"></i>
              </a>
            </div>
          </div>

          {/* Services * /}
                <div>
                    <h3 className="text-lg font-bold mb-6">Nossos Serviços</h3>
                    <ul className="space-y-3">
                        <li>
                            <a href="/automacao-predial" 
                            className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                                <i className="fas fa-microchip mr-3 text-primary group-hover:text-secondary transition-colors"></i>
                                Automação Predial
                            </a>
                        </li>
                        <li>
                            <a href="/projetos-eletricos" 
                            className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                                <i className="fas fa-bolt mr-3 text-primary group-hover:text-secondary transition-colors"></i>
                                Projetos Elétricos
                            </a>
                        </li>
                        <li>
                            <a href="/seguranca-eletronica" 
                            className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                                <i className="fas fa-shield-alt mr-3 text-primary group-hover:text-secondary transition-colors"></i>
                                Segurança Eletrônica
                            </a>
                        </li>
                        <li>
                            <a href="/iluminacao-inteligente" 
                            className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                                <i className="fas fa-lightbulb mr-3 text-primary group-hover:text-secondary transition-colors"></i>
                                Iluminação Inteligente
                            </a>
                        </li>
                        <li>
                            <a href="/spda" 
                            className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                                <i className="fas fa-umbrella mr-3 text-primary group-hover:text-secondary transition-colors"></i>
                                SPDA
                            </a>
                        </li>
                        <li>
                            <a href="/eficiencia-energetica" 
                            className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                                <i className="fas fa-leaf mr-3 text-primary group-hover:text-secondary transition-colors"></i>
                                Eficiência Energética
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-6">Soluções</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/residencial"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <i className="fas fa-home mr-3 text-accent group-hover:text-secondary transition-colors"></i>
                  Residencial
                </Link>
              </li>
              {/** 
              <li>
                <Link
                  to="/corporativo"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <i className="fas fa-building mr-3 text-accent group-hover:text-secondary transition-colors"></i>
                  Corporativo
                </Link>
              </li>
              */}
              <li>
                <Link
                  to="/profissionais"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <i className="fas fa-handshake mr-3 text-accent group-hover:text-secondary transition-colors"></i>
                  Para Profissionais
                </Link>
              </li>
              {/** 
              <li>
                <Link
                  to="/sobre"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <i className="fas fa-users mr-3 text-accent group-hover:text-secondary transition-colors"></i>
                  Condomínios
                </Link>
              </li>*/}
              <li>
                <Link
                  to="/contato"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <i className="fas fa-phone mr-3 text-accent group-hover:text-secondary transition-colors"></i>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato & Recursos</h3>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-white mt-1"></i>
                <div>
                  <div className="font-semibold">Atendimento</div>
                  <div className="text-gray-300 text-sm">
                    João Pessoa
                    <br />
                    Região Metropolitada
                    <br />
                    Interior da Paraíba
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-white"></i>
                <div>
                  <div className="font-semibold">Telefone</div>
                  <a
                    href="tel:+5583982078702"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    (83) 98207-8702
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-white"></i>
                <div>
                  <div className="font-semibold">E-mail</div>
                  <a
                    href="mailto:contato@3on.eng.br"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    contato@3on.eng.br
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links * /}
                    <div>
                        <h4 className="font-semibold mb-3">Links Úteis</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/cases" 
                                className="text-gray-300 hover:text-white transition-colors">
                                    Cases de Sucesso
                                </a>
                            </li>
                            <li>
                                <a href="/blog" 
                                className="text-gray-300 hover:text-white transition-colors">
                                    Blog Técnico
                                </a>
                            </li>
                            <li>
                                <a href="/calculadora-roi" 
                                className="text-gray-300 hover:text-white transition-colors">
                                    Calculadora ROI
                                </a>
                            </li>
                            <li>
                                <a href="/portfolio" 
                                className="text-gray-300 hover:text-white transition-colors">
                                    Portfólio Completo
                                </a>
                            </li>
                            <li>
                                <a href="/certificacoes" 
                                className="text-gray-300 hover:text-white transition-colors">
                                    Certificações
                                </a>
                            </li>
                        </ul>
                    </div>
                    */}
          </div>
        </div>
      </div>

      {/* Newsletter Section * /}
        <div className="border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">
                            Fique por Dentro das Novidades
                        </h3>
                        <p className="text-gray-300">
                            Receba conteúdos exclusivos sobre automação predial, 
                            projetos elétricos e tendências do mercado.
                        </p>
                    </div>
                    <div>
                        <form className="flex flex-col sm:flex-row gap-3" id="newsletterForm">
                            <input type="email" 
                                placeholder="Seu melhor e-mail" 
                                required
                                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                            <button type="submit" 
                                    className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 whitespace-nowrap">
                                <i className="fas fa-paper-plane mr-2"></i>
                                Inscrever-se
                            </button>
                        </form>
                        <p className="text-xs text-gray-400 mt-2">
                            Não enviamos spam. Cancele a inscrição a qualquer momento.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Certifications & Partners */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4">
              Certificações e Parcerias
            </h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-60">
            {/* CREA */}
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <i className="fas fa-certificate text-2xl text-secondary mb-2"></i>
                <div className="text-xs font-semibold">CREA-PB</div>
              </div>
            </div>

            {/* KNX * /}
                    <div className="text-center">
                        <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <i className="fas fa-network-wired text-2xl text-accent mb-2"></i>
                            <div className="text-xs font-semibold">KNX Partner</div>
                        </div>
                    </div>
                    
                    {/* AutoCAD */}
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <i className="fas fa-drafting-compass text-2xl text-secondary mb-2"></i>
                <div className="text-xs font-semibold">AutoCAD</div>
              </div>
            </div>

            {/* Revit */}
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <i className="fas fa-cube text-2xl text-secondary mb-2"></i>
                <div className="text-xs font-semibold">Revit BIM</div>
              </div>
            </div>

            {/* ISO * /}
                    <div className="text-center">
                        <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <i className="fas fa-award text-2xl text-accent mb-2"></i>
                            <div className="text-xs font-semibold">ISO 9001</div>
                        </div>
                    </div>
                    
                    {/* ABNT * /}
                    <div className="text-center">
                        <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <i className="fas fa-shield-alt text-2xl text-secondary mb-2"></i>
                            <div className="text-xs font-semibold">ABNT</div>
                        </div>
                    </div>
                    */}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 3on Projetos Inteligentes. Todos os direitos reservados.
            </div>

            {/* Legal Links * /}
                    <div className="flex flex-wrap justify-center space-x-6 text-sm">
                        <a href="/politica-privacidade" 
                        className="text-gray-400 hover:text-white transition-colors">
                            Política de Privacidade
                        </a>
                        <a href="/termos-uso" 
                        className="text-gray-400 hover:text-white transition-colors">
                            Termos de Uso
                        </a>
                        <a href="/cookies" 
                        className="text-gray-400 hover:text-white transition-colors">
                            Política de Cookies
                        </a>
                        <a href="/lgpd" 
                        className="text-gray-400 hover:text-white transition-colors">
                            LGPD
                        </a>
                    </div>
                    
                    {/* Back to Top */}
            <button
              onClick={() => scrollToTop()}
              ref={backToTopBtn}
              className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full transition-colors duration-300"
              aria-label="Voltar ao topo"
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5583982078702?text=Olá! Gostaria de saber mais sobre os serviços da 3on Projetos Inteligentes."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          aria-label="Falar no WhatsApp"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
