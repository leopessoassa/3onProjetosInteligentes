import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import PhoneInput from "~/components/form/PhoneInput";
import TextInput from "~/components/form/TextInput";
import emailjs from "@emailjs/browser";
import EmailInput from "~/components/form/EmailInput";
import ErrorInput from "~/components/form/ErrorInput";

interface PartnershipFormData {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  profissao: string;
  experiencia: string;
  empresa?: string;
  crea?: string;
  interesseParceria: string[];
  volumeProjetos?: string;
  ticketMedio?: string;
  ferramentas: string[];
  mensagem?: string;
  partnerConsent: boolean;
}

const PartnershipForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
    watch,
  } = useForm<PartnershipFormData>();

  const onSubmit: SubmitHandler<PartnershipFormData> = async (data) => {
    try {
      console.log("Dados do formulário:", data);
      const form = document.getElementById(
        "partnership-form"
      ) as HTMLFormElement;
      if (!form) throw new Error("Não foi possível recuperar o formulário.");

      await emailjs
        .sendForm(
          "service_w74bo07",
          "template_ldhbw1b",
          form as HTMLFormElement,
          {
            publicKey: "Hm7UaQdaVhNY7XQyc",
          }
        )
        .then(
          () => {
            alert("Solicitação enviada com sucesso!");
            reset(); // Limpa o formulário após envio
          },
          (error) => {
            alert("[1] Erro ao enviar solicitação. Tente novamente.");
            console.log("FAILED...", error);
          }
        );
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("[2]Erro ao enviar solicitação. Tente novamente.");
    }
  };

  return (
    <form
      id="partnership-form"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
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
          label="E-mail Profissional"
          register={register}
          control={control}
          rules={{
            required: "E-mail Profissional é obrigatório",
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
          attribute="cidade"
          label="Cidade/Estado"
          register={register}
          control={control}
          rules={{
            required: "Cidade/Estado é obrigatório",
            minLength: {
              value: 3,
              message: "Cidade/Estado deve ter pelo menos 3 caracteres",
            },
          }}
        />
      </div>

      {/* Dados Profissionais */}
      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <i className="fas fa-user-tie text-primary mr-2"></i>
          Informações Profissionais
        </h4>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Profissão *
            </label>
            <select
              {...register("profissao", {
                required: "Profissão é obrigatório",
              })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
            >
              <option value="">Selecione sua profissão</option>
              <option value="arquiteto">Arquiteto</option>
              <option value="engenheiro-eletrico">Engenheiro Elétrico</option>
              <option value="engenheiro-civil">Engenheiro Civil</option>
              <option value="designer-interiores">
                Designer de Interiores
              </option>
              <option value="engenheiro-automacao">
                Engenheiro de Automação
              </option>
              <option value="tecnico-eletrico">Técnico Elétrico</option>
              <option value="outro">Outro</option>
            </select>
            <ErrorInput error={errors.profissao} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tempo de Experiência *
            </label>
            <select
              {...register("experiencia", {
                required: "Tempo de Experiência é obrigatório",
              })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
            >
              <option value="">Selecione o tempo</option>
              <option value="1-3-anos">1 a 3 anos</option>
              <option value="3-5-anos">3 a 5 anos</option>
              <option value="5-10-anos">5 a 10 anos</option>
              <option value="10-anos-mais">Mais de 10 anos</option>
            </select>
            <ErrorInput error={errors.experiencia} />
          </div>
        </div>

        <div className="mt-4">
          <TextInput
            attribute="empresa"
            label="Empresa/Escritório"
            register={register}
            control={control}
            placeholder="Nome da empresa ou escritório"
          />
        </div>

        <div className="mt-4">
          <TextInput
            attribute="crea"
            label="Número CREA/CAU (se aplicável)"
            register={register}
            control={control}
            placeholder="Ex: CREA-PB 123456"
          />
        </div>
      </div>

      {/* Áreas de Interesse */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">
          <i className="fas fa-star text-secondary mr-2"></i>
          Áreas de Interesse para Parceria *
        </label>
        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer group">
            <input
              type="checkbox"
              {...register("interesseParceria")}
              value="automacao-predial"
              className="mt-1 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <i className="fas fa-microchip text-primary"></i>
                <span className="font-semibold text-gray-900">
                  Automação Predial
                </span>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Projetos KNX, BACnet, sistemas inteligentes
              </div>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors cursor-pointer group">
            <input
              type="checkbox"
              {...register("interesseParceria")}
              value="projetos-eletricos"
              className="mt-1 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <i className="fas fa-bolt text-secondary"></i>
                <span className="font-semibold text-gray-900">
                  Projetos Elétricos
                </span>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                AutoCAD 2D, BIM, baixa e média tensão
              </div>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors cursor-pointer group">
            <input
              type="checkbox"
              {...register("interesseParceria")}
              value="seguranca-eletronica"
              className="mt-1 rounded border-gray-300 text-red-500 focus:ring-red-500 focus:ring-offset-0"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <i className="fas fa-shield-alt text-red-500"></i>
                <span className="font-semibold text-gray-900">
                  Segurança Eletrônica
                </span>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                CFTV, controle de acesso, alarmes
              </div>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors cursor-pointer group">
            <input
              type="checkbox"
              {...register("interesseParceria")}
              value="iluminacao"
              className="mt-1 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500 focus:ring-offset-0"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <i className="fas fa-lightbulb text-yellow-500"></i>
                <span className="font-semibold text-gray-900">
                  Iluminação Inteligente
                </span>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                LED, automação, projetos luminotécnicos
              </div>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer group">
            <input
              type="checkbox"
              {...register("interesseParceria")}
              value="spda"
              className="mt-1 rounded border-gray-300 text-purple-500 focus:ring-purple-500 focus:ring-offset-0"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <i className="fas fa-umbrella text-purple-500"></i>
                <span className="font-semibold text-gray-900">SPDA</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Proteção contra descargas atmosféricas
              </div>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer group">
            <input
              type="checkbox"
              {...register("interesseParceria")}
              value="consultoria"
              className="mt-1 rounded border-gray-300 text-green-500 focus:ring-green-500 focus:ring-offset-0"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <i className="fas fa-handshake text-green-500"></i>
                <span className="font-semibold text-gray-900">
                  Consultoria Técnica
                </span>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Suporte técnico e desenvolvimento conjunto
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Volume de Projetos */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Volume Mensal de Projetos
          </label>
          <select
            {...register("volumeProjetos")}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
          >
            <option value="">Selecione o volume</option>
            <option value="1-3">1 a 3 projetos</option>
            <option value="4-10">4 a 10 projetos</option>
            <option value="11-20">11 a 20 projetos</option>
            <option value="20-mais">Mais de 20 projetos</option>
            <option value="variavel">Volume variável</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Ticket Médio dos Projetos
          </label>
          <select
            {...register("ticketMedio")}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
          >
            <option value="">Selecione a faixa</option>
            <option value="ate-25k">Até R$ 25.000</option>
            <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
            <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
            <option value="100k-250k">R$ 100.000 - R$ 250.000</option>
            <option value="250k-mais">Acima de R$ 250.000</option>
          </select>
        </div>
      </div>

      {/* Ferramentas Utilizadas */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">
          <i className="fas fa-tools text-purple-500 mr-2"></i>
          Ferramentas que Utiliza
        </label>
        <div className="grid md:grid-cols-3 gap-4">
          <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input
              type="checkbox"
              {...register("ferramentas")}
              value="autocad"
              className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
            />
            <span className="text-gray-700">AutoCAD</span>
          </label>
          <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input
              type="checkbox"
              {...register("ferramentas")}
              value="revit"
              className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
            />
            <span className="text-gray-700">Revit (BIM)</span>
          </label>
          <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input
              type="checkbox"
              {...register("ferramentas")}
              value="sketchup"
              className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
            />
            <span className="text-gray-700">SketchUp</span>
          </label>
          <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input
              type="checkbox"
              {...register("ferramentas")}
              value="archicad"
              className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
            />
            <span className="text-gray-700">ArchiCAD</span>
          </label>
          <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input
              type="checkbox"
              {...register("ferramentas")}
              value="lumion"
              className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
            />
            <span className="text-gray-700">Lumion</span>
          </label>
          <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input
              type="checkbox"
              {...register("ferramentas")}
              value="outros"
              className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
            />
            <span className="text-gray-700">Outros</span>
          </label>
        </div>
      </div>

      {/* Mensagem */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Mensagem Adicional
        </label>
        <textarea
          {...register("mensagem")}
          rows={4}
          placeholder="Conte-nos mais sobre seus objetivos com a parceria, experiências anteriores ou qualquer informação relevante..."
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
        ></textarea>
      </div>

      {/* Termos e Condições */}
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("partnerConsent", {
              required: "Consentimento LGPD é obrigatório",
            })}
            className="mt-1 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
          />
          <div className="text-sm text-gray-700">
            <span className="font-semibold">Aceito os termos:</span> Autorizo o
            uso dos meus dados para análise de parceria e contato comercial.
            Estou ciente de que a parceria está sujeita à aprovação técnica e
            comercial.
            <a
              href="/politica-privacidade"
              className="text-primary hover:underline"
              target="_blank"
            >
              Política de Privacidade
            </a>
            .
          </div>
        </label>
        <ErrorInput error={errors.partnerConsent} />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <i className="fas fa-handshake mr-2"></i>
          Solicitar Parceria
        </button>
        <p className="text-center text-sm text-gray-500 mt-3">
          Analisaremos sua solicitação e retornaremos em até 48 horas
        </p>
      </div>
    </form>
  );
};

export default PartnershipForm;
