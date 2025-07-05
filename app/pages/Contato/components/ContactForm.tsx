import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import PhoneInput from "~/components/form/PhoneInput";
import TextInput from "~/components/form/TextInput";
import emailjs from '@emailjs/browser';
import EmailInput from "~/components/form/EmailInput";

interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  empresa?: string;
  tipoProjeto: string;
  segmento: string;
  area?: number;
  orcamento?: string;
  prazo?: string;
  descricao: string;
  contatoPreferencia: string[];
  lgpdConsent: boolean;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
    watch,
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
        const form = document.getElementById('contact-form') as HTMLFormElement;
        if (!form) throw new Error('Não foi possível recuperar o formulário.');

        await emailjs
        .sendForm('service_w74bo07', 'template_ldhbw1b', form as HTMLFormElement , {
          publicKey: 'Hm7UaQdaVhNY7XQyc',
        })
        .then(
          () => {
            alert('Solicitação enviada com sucesso!');;
            reset(); // Limpa o formulário após envio
          },
          (error) => {
              alert('[1] Erro ao enviar solicitação. Tente novamente.');
              console.log('FAILED...', error);
          },
        );
      } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        alert('[2]Erro ao enviar solicitação. Tente novamente.');
      }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Dados Pessoais */}
      <div className="grid md:grid-cols-2 gap-6">
        <TextInput
          attribute="nome"
          label="Nome Completos"
          register={register}
          control={control}
          rules={{
            required: "Nome é obrigatório",
            minLength: {
              value: 3,
              message: "Nome deve ter pelo menos 3 caracteres",
            },
          }}
        />

        <EmailInput
          attribute="email"
          label="E-mail"
          register={register}
          control={control}
          rules={{
            required: "E-mail é obrigatório",
          }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <PhoneInput
          attribute="telefone"
          label="Telefone/WhatsApp"
          register={register}
          control={control}
          setValue={setValue}
          watch={watch}
          placeholder="(XX) XXXXX-XXXX"
          rules={{
            required: "Telefone é obrigatório",
          }}
        />

        <TextInput
          attribute="empresa"
          label="Empresa (opcional)"
          register={register}
          control={control}
        />

        
      </div>

      {/* Tipo de Projeto */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Tipo de Projeto *
        </label>
        <select
          {...register("tipoProjeto", {
            required: "Tipo de projeto é obrigatório",
          })}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
        >
          <option value="">Selecione o tipo de projeto</option>
          <option value="automacao">Automação (Projeto e/ou Instalação)</option>
          <option value="projeto-eletrico">Projeto Elétrico</option>
          <option value="seguranca-eletronica">Segurança Eletrônica</option>
          <option value="iluminacao-inteligente">Iluminação Inteligente</option>
          <option value="spda">SPDA</option>
          <option value="eficiencia-energetica">Eficiência Energética</option>
          <option value="projeto-completo">Projeto Completo</option>
          <option value="consultoria">Consultoria Técnica</option>
        </select>
        {errors.tipoProjeto && (
          <p className="text-red-500 text-sm mt-1">
            {errors.tipoProjeto.message}
          </p>
        )}
      </div>

      {/* Segmento */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Segmento *
        </label>
        <select
          {...register("segmento", { required: "Segmento é obrigatório" })}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
        >
          <option value="">Selecione o segmento</option>
          <option value="residencial">Residencial</option>
          <option value="condominio">Condomínio</option>
          <option value="comercial">Comercial</option>
          <option value="industrial">Industrial</option>
          <option value="hospitalar">Hospitalar</option>
          <option value="educacional">Educacional</option>
          <option value="hotelaria">Hotelaria</option>
          <option value="varejo">Varejo</option>
        </select>
        {errors.segmento && (
          <p className="text-red-500 text-sm mt-1">{errors.segmento.message}</p>
        )}
      </div>

      {/* Área e Orçamento */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Área Aproximada (m²)
          </label>
          <input
            type="number"
            {...register("area", { min: 0 })}
            placeholder="Ex: 500"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Orçamento Previsto
          </label>
          <select
            {...register("orcamento")}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
          >
            <option value="">Selecione a faixa</option>
            <option value="ate-20k">Até R$ 20.000</option>
            <option value="20k-50k">R$ 20.000 - R$ 50.000</option>
            <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
            <option value="100k-250k">R$ 100.000 - R$ 250.000</option>
            <option value="250k-500k">R$ 250.000 - R$ 500.000</option>
            <option value="acima-500k">Acima de R$ 500.000</option>
            <option value="nao-definido">Ainda não definido</option>
          </select>
        </div>
      </div>

      {/* Prazo */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Prazo Desejado
        </label>
        <select
          {...register("prazo")}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
        >
          <option value="">Selecione o prazo</option>
          <option value="urgente">Urgente (até 30 dias)</option>
          <option value="1-3-meses">1 a 3 meses</option>
          <option value="3-6-meses">3 a 6 meses</option>
          <option value="6-12-meses">6 a 12 meses</option>
          <option value="acima-12-meses">Acima de 12 meses</option>
          <option value="flexivel">Flexível</option>
        </select>
      </div>

      {/* Descrição */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Descrição do Projeto *
        </label>
        <textarea
          {...register("descricao", { required: "Descrição é obrigatória" })}
          rows={5}
          placeholder="Descreva detalhadamente seu projeto, necessidades específicas, objetivos e qualquer informação relevante..."
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
        />
        {errors.descricao && (
          <p className="text-red-500 text-sm mt-1">
            {errors.descricao.message}
          </p>
        )}
      </div>

      {/* Preferências de Contato */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Como prefere ser contatado?
        </label>
        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input
              type="checkbox"
              {...register("contatoPreferencia")}
              value="whatsapp"
              className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
            />
            <i className="fab fa-whatsapp text-green-500"></i>
            <span className="text-gray-700">WhatsApp</span>
          </label>
          <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input
              type="checkbox"
              {...register("contatoPreferencia")}
              value="telefone"
              className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
            />
            <i className="fas fa-phone text-primary"></i>
            <span className="text-gray-700">Telefone</span>
          </label>
          <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input
              type="checkbox"
              {...register("contatoPreferencia")}
              value="email"
              className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
            />
            <i className="fas fa-envelope text-secondary"></i>
            <span className="text-gray-700">E-mail</span>
          </label>
          <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input
              type="checkbox"
              {...register("contatoPreferencia")}
              value="visita"
              className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
            />
            <i className="fas fa-map-marker-alt text-purple-500"></i>
            <span className="text-gray-700">Visita Técnica</span>
          </label>
        </div>
      </div>

      {/* LGPD Consent */}
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("lgpdConsent", {
              required: "Consentimento LGPD é obrigatório",
            })}
            className="mt-1 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
          />
          <div className="text-sm text-gray-700">
            <span className="font-semibold">Consentimento LGPD:</span> Autorizo
            o uso dos meus dados pessoais pela 3on Projetos Inteligentes para
            fins de contato comercial e envio de propostas.{" "}
            <a
              href="/politica-privacidade"
              className="text-primary hover:underline"
              target="_blank"
            >
              Leia nossa Política de Privacidade
            </a>
            .
          </div>
        </label>
        {errors.lgpdConsent && (
          <p className="text-red-500 text-sm mt-1">
            {errors.lgpdConsent.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <i className="fas fa-paper-plane mr-2"></i>
          Enviar Solicitação
        </button>
        <p className="text-center text-sm text-gray-500 mt-3">
          Responderemos em até 24 horas úteis
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
