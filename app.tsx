import { Shield, TrendingUp, AlertTriangle, CheckCircle2, Lock, BarChart3, Users, FileCheck, Zap, Eye } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              Método <span className="block font-normal mt-2">Blindagem Empresarial</span>
            </h1>
            <p className="text-2xl text-gray-700 font-light">
              Modelo Piloto Oficial — Indústria Farmacêutica
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              De checklist a sistema de risco, evidência e crescimento seguro
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Ambiente farmacêutico controlado"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Declaração de Valor */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
              DECLARAÇÃO DE VALOR
            </span>
            <h2 className="text-4xl font-light text-gray-900">Propósito do Método</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">Nossa Missão</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Transformar obrigações legais, técnicas e de segurança em um ativo estratégico
                    que impulsiona o crescimento do seu negócio.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
                    Reduzimos risco real e desbloqueamos receita sustentável.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">O Que Entregamos</h3>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Redução de risco P0 (prioridade zero)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Continuidade operacional garantida</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Aumento mensurável de conversão</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Sistema integrado de evidências</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Proteção contra interdições e multas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnóstico Crítico */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-800 text-sm font-medium rounded-full mb-4">
              DIAGNÓSTICO CRÍTICO
            </span>
            <h2 className="text-4xl font-light text-gray-900">Por Que Este Piloto É Necessário</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-purple-50 p-8 rounded-xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">O Problema</h3>
              <p className="text-gray-700 leading-relaxed">
                Conformidade fragmentada em silos isolados: documentos, NRs, laudos e cursos
                gerenciados sem integração estratégica.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">O Ponto Cego</h3>
              <p className="text-gray-700 leading-relaxed">
                Custo oculto da não-integração: paradas operacionais não planejadas, multas evitáveis
                e contratos enterprise perdidos por gaps de conformidade.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Por Que Importa</h3>
              <p className="text-gray-700 leading-relaxed">
                Impacto direto em margem operacional, taxa de conversão e capacidade de escalar
                operações com segurança jurídica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Arquitetura do Método */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Arquitetura do Método</h2>
            <p className="text-xl text-gray-600">Visão Geral dos Núcleos Integrados</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Mapa de Risco</h3>
                <p className="text-gray-600">Priorização P0 / P1 / P2</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Trilhas por Risco</h3>
                <p className="text-gray-600">Estratégias específicas</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Plataforma</h3>
                <p className="text-gray-600">Dados e inteligência</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Capacitação</h3>
                <p className="text-gray-600">Treinamentos medidos</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Orquestração</h3>
                <p className="text-gray-600">Execução coordenada</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Governança</h3>
                <p className="text-gray-600">Evidências válidas</p>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Cada núcleo opera de forma interdependente, criando um sistema robusto de
                proteção e crescimento empresarial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lock className="w-5 h-5 text-amber-500" />
            <span className="text-lg font-medium text-white">Blindagem Empresarial</span>
          </div>
          <p className="text-sm">
            Método Piloto Oficial — Conformidade como Estratégia de Crescimento
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;