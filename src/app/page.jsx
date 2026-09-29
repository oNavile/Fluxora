"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import {
  ChartLine,
  Globe,
  Layers,
  Shield,
  Workflow,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MAX_FEATURES = 12;

/* =====================================================
   HERO
===================================================== */

const defaultProps = {
  heading: "Assuma o controle total do seu estoque com a Fluxora",

  description:
    "Elimine perdas, simplifique processos e tenha visibilidade em tempo real de todas as mercadorias da sua empresa.",

  buttons: {
    primary: {
      text: "Acesse a Demo",
      url: "/demo",
    },

    secondary: {
      text: "Ver Recursos",
      url: "#recursos",
    },
  },

  image: {
    src: "/demo-fluxora.png",

    srcDark:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9-dark.png",

    alt: "Prévia do dashboard Fluxora",
  },
};

/* =====================================================
   FEATURES
===================================================== */

const defaultPropsFeature = {
  heading:
    "Tecnologia industrial para zerar paradas de produção e desperdícios",

  label: "Soluções da Plataforma",

  features: [
    {
      icon: <Zap className="size-5" />,

      title: "Alertas de Escassez Inteligentes",

      description:
        "Identifique antecipadamente as matérias-primas com nível crítico e receba avisos para evitar desabastecimentos na linha de produção.",
    },

    {
      icon: <Layers className="size-5" />,

      title: "Rastreio de Matéria-Prima",

      description:
        "Acompanhe o ciclo de vida completo dos insumos, do recebimento dos fornecedores ao consumo em cada etapa da manufatura.",
    },

    {
      icon: <ChartLine className="size-5" />,

      title: "Indicadores em Tempo Real",

      description:
        "Visualize dashboards claros sobre taxa de giro, ponto de pedido e histórico de consumo para tomar decisões baseadas em dados.",
    },

    {
      icon: <Shield className="size-5" />,

      title: "Continuidade Operacional",

      description:
        "Evite prejuízos operacionais reduzindo divergências entre o estoque físico e o sistema com checagens precisas.",
    },

    {
      icon: <Workflow className="size-5" />,

      title: "Fluxos de Reposição",

      description:
        "Conecte o setor de compras ao chão de fábrica de forma ágil, eliminando gargalos de comunicação na requisição de materiais.",
    },

    {
      icon: <Globe className="size-5" />,

      title: "SaaS 100% na Nuvem",

      description:
        "Acesse os indicadores da sua planta industrial de qualquer dispositivo e em qualquer lugar, com segurança de nível empresarial.",
    },
  ],
};

/* =====================================================
   HERO COMPONENT
===================================================== */

const Hero1 = (props) => {
  const {
    badge,
    heading,
    description,
    buttons,
    image,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 lg:py-28",
        className
      )}
    >
      {/* Luz decorativa esquerda */}
      <div className="pointer-events-none absolute -left-20 -top-24 -z-10 size-96 rounded-full bg-[#d87943]/15 blur-3xl" />

      {/* Luz decorativa direita */}
      <div className="pointer-events-none absolute -right-20 top-1/2 -z-10 size-96 rounded-full bg-[#527575]/15 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* TEXTO */}
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">

            {badge && (
              <Badge
                variant="outline"
                className="gap-1 border-[#d87943]/30 bg-[#d87943]/10 px-3 py-1 text-sm font-medium text-[#d87943]"
              >
                {badge.text}

                <ArrowUpRight className="size-4" />
              </Badge>
            )}

            <h1 className="max-w-xl text-pretty text-4xl font-bold tracking-tight md:text-5xl lg:max-w-3xl lg:text-6xl">
              {heading}
            </h1>

            <p className="max-w-xl text-balance text-muted-foreground lg:text-lg">
              {description}
            </p>

            {/* BOTÕES */}
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">

              {buttons?.primary && (
                <Button
                  nativeButton={false}
                  size="lg"
                  className="w-full bg-[#d87943] text-white shadow-lg shadow-[#d87943]/20 hover:bg-[#c26835] sm:w-auto"
                  render={
                    <a href={buttons.primary.url} />
                  }
                >
                  {buttons.primary.text}
                  <ArrowRight className="size-4" />
                </Button>
              )}

              {buttons?.secondary && (
                <Button
                  nativeButton={false}
                  variant="outline"
                  size="lg"
                  className="w-full border-[#527575]/40 text-[#527575] hover:bg-[#527575]/10 hover:text-[#527575] sm:w-auto"
                  render={
                    <a href={buttons.secondary.url} />
                  }
                >
                  {buttons.secondary.text}
                </Button>
              )}

            </div>
          </div>

          {/* IMAGEM */}
          <a
            href="/demo"
            className="group relative block"
            aria-label="Abrir demonstração da Fluxora"
          >
            <div className="absolute left-5 top-5 z-10 rounded-full border bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
              Demo interativa
            </div>

            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#d87943]/30 via-[#527575]/20 to-[#d87943]/20 opacity-60 blur-2xl transition duration-500 group-hover:opacity-90" />

            <div className="relative rounded-2xl bg-gradient-to-b from-[#d87943]/40 via-[#527575]/20 to-transparent p-2 shadow-2xl transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.01]">
              <div className="overflow-hidden rounded-xl border bg-background">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-video w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

{/*Feature */ }
const Feature17 = (props) => {
  const {
    heading,
    label,
    features,
    className,
  } = {
    ...defaultPropsFeature,
    ...props,
  };

  const items = (features ?? []).slice(
    0,
    MAX_FEATURES
  );

  return (
    <section
      id="recursos"
      className={cn(
        "relative border-t border-[#527575]/20 bg-gradient-to-b from-[#527575]/10 via-[#527575]/5 to-transparent py-24 lg:py-32",
        className
      )}
    >

      {/* Brilho suave de fundo */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 size-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d87943]/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4">

        {/* CABEÇALHO */}
        {(label || heading) && (
          <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center gap-4 text-center">

            {label && (
              <Badge
                variant="secondary"
                className="border border-[#527575]/30 bg-[#527575]/15 px-3 py-1 font-medium text-[#527575]"
              >
                {label}
              </Badge>
            )}

            <h2 className="text-pretty text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {heading}
            </h2>

          </div>
        )}

        {/* CARDS */}
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {items.map((feature, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-xl border border-[#527575]/20 bg-background/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d87943]/50 hover:shadow-lg hover:shadow-[#d87943]/10"
            >

              <div>

                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d87943] to-[#527575] text-white shadow-md shadow-[#d87943]/20 transition-transform group-hover:scale-105">
                  {feature.icon}
                </div>

                <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

{/* Dashboard Preview */ }

const DashboardPreview = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      {/* Fundo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d87943]/10 blur-3xl" />

      <div className="container mx-auto px-4">

        {/* TÍTULO */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <Badge
            variant="secondary"
            className="mb-4 border border-[#d87943]/20 bg-[#d87943]/10 text-[#d87943]"
          >
            Visão do sistema
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Seu estoque em uma única visão
          </h2>

          <p className="mt-4 text-muted-foreground">
            Acompanhe indicadores, materiais críticos e movimentações
            através de um painel simples e objetivo.
          </p>

        </div>

        {/* DASHBOARD */}
        <div className="relative mx-auto max-w-6xl rounded-2xl bg-gradient-to-b from-[#d87943]/30 via-[#527575]/20 to-transparent p-[1px] shadow-2xl">

          <div className="rounded-2xl bg-background p-4 sm:p-6">

            {/* TOPO */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-sm text-muted-foreground">
                  Visão geral
                </p>

                <h3 className="text-2xl font-semibold">
                  Controle de estoque
                </h3>
              </div>

              <Badge variant="outline">
                Dados demonstrativos
              </Badge>

            </div>

            {/* CARDS */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Materiais
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-3xl font-bold">
                    12
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Estoque normal
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-3xl font-bold text-emerald-500">
                    6
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Estoque baixo
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-3xl font-bold text-[#d87943]">
                    4
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Sem estoque
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-3xl font-bold text-destructive">
                    2
                  </p>
                </CardContent>
              </Card>

            </div>

            {/* PARTE INFERIOR */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2">

              {/* GRÁFICO FICTÍCIO */}
              <div className="rounded-xl border bg-card p-5">

                <p className="font-semibold">
                  Materiais por categoria
                </p>

                <p className="mb-6 text-sm text-muted-foreground">
                  Distribuição dos materiais cadastrados
                </p>

                <div className="flex h-52 items-end justify-around gap-4 border-b">

                  <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                    <div className="h-[55%] w-full max-w-14 rounded-t-md bg-[#d87943]" />

                    <span className="pb-2 text-xs text-muted-foreground">
                      Metais
                    </span>
                  </div>

                  <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                    <div className="h-[80%] w-full max-w-14 rounded-t-md bg-[#d87943]/80" />

                    <span className="pb-2 text-xs text-muted-foreground">
                      Polímeros
                    </span>
                  </div>

                  <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                    <div className="h-[45%] w-full max-w-14 rounded-t-md bg-[#527575]" />

                    <span className="pb-2 text-xs text-muted-foreground">
                      Madeiras
                    </span>
                  </div>

                  <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                    <div className="h-[65%] w-full max-w-14 rounded-t-md bg-[#527575]/70" />

                    <span className="pb-2 text-xs text-muted-foreground">
                      Minerais
                    </span>
                  </div>

                </div>
              </div>

              {/* MATERIAIS CRÍTICOS */}
              <div className="rounded-xl border bg-card p-5">

                <p className="font-semibold">
                  Materiais críticos
                </p>

                <p className="mb-5 text-sm text-muted-foreground">
                  Itens que precisam de atenção
                </p>

                <div className="space-y-3">

                  <div className="flex items-center justify-between gap-4 rounded-lg border p-4">

                    <div>
                      <p className="font-medium">
                        Chapa de aço
                      </p>

                      <p className="text-xs text-muted-foreground">
                        MP-001 · Metais
                      </p>
                    </div>

                    <Badge className="bg-[#d87943]/15 text-[#d87943] hover:bg-[#d87943]/15">
                      Estoque baixo
                    </Badge>

                  </div>

                  <div className="flex items-center justify-between gap-4 rounded-lg border p-4">

                    <div>
                      <p className="font-medium">
                        Cobre
                      </p>

                      <p className="text-xs text-muted-foreground">
                        MP-003 · Metais
                      </p>
                    </div>

                    <Badge variant="destructive">
                      Sem estoque
                    </Badge>

                  </div>

                  <div className="flex items-center justify-between gap-4 rounded-lg border p-4">

                    <div>
                      <p className="font-medium">
                        Sílica
                      </p>

                      <p className="text-xs text-muted-foreground">
                        MP-012 · Minerais
                      </p>
                    </div>

                    <Badge className="bg-[#d87943]/15 text-[#d87943] hover:bg-[#d87943]/15">
                      Estoque baixo
                    </Badge>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">

          <Button
            nativeButton={false}
            size="lg"
            className="bg-[#d87943] text-white hover:bg-[#c26835]"
            render={<a href="/demo" />}
          >
            Experimentar a demonstração
            <ArrowRight className="size-4" />
          </Button>

        </div>

      </div>
    </section>
  );
};

const LeadForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [interesse, setInteresse] = useState("Controle de estoque");
  const [enviado, setEnviado] = useState(false);

  function enviarFormulario(event) {
    event.preventDefault();

    if (!nome || !email || !empresa || !interesse) {
      alert("Preencha todos os campos.");
      return;
    }

    setEnviado(true);

    setNome("");
    setEmail("");
    setEmpresa("");
    setInteresse("Controle de estoque");
  }

  return (
    <section
      id="contato"
      className="relative border-t py-24 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">

          <div>
            <Badge
              variant="secondary"
              className="mb-4 border border-[#d87943]/20 bg-[#d87943]/10 text-[#d87943]"
            >
              Fale com a Fluxora
            </Badge>

            <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Leve mais controle para a sua operação
            </h2>

            <p className="mt-4 max-w-xl text-muted-foreground">
              Preencha seus dados e simule uma solicitação de contato com a equipe da Fluxora.
            </p>

            <div className="mt-8 space-y-4 text-sm text-muted-foreground">
              <p>✓ Conheça a plataforma</p>
              <p>✓ Entenda como reduzir faltas de matéria-prima</p>
              <p>✓ Veja como acompanhar seu estoque em tempo real</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Solicitar contato</CardTitle>
            </CardHeader>

            <CardContent>
              <form
                onSubmit={enviarFormulario}
                className="grid gap-5"
              >
                <div className="grid gap-2">
                  <label className="text-sm font-medium">
                    Nome
                  </label>

                  <Input
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium">
                    E-mail corporativo
                  </label>

                  <Input
                    type="email"
                    placeholder="nome@empresa.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium">
                    Empresa
                  </label>

                  <Input
                    placeholder="Nome da empresa"
                    value={empresa}
                    onChange={(event) => setEmpresa(event.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium">
                    Área de interesse
                  </label>

                  <select
                    value={interesse}
                    onChange={(event) => setInteresse(event.target.value)}
                    className="h-9 rounded-md border bg-background px-3 text-sm outline-none focus:border-primary"
                  >
                    <option value="Controle de estoque">
                      Controle de estoque
                    </option>

                    <option value="Indicadores">
                      Indicadores
                    </option>

                    <option value="Alertas de estoque">
                      Alertas de estoque
                    </option>

                    <option value="Movimentações">
                      Movimentações
                    </option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="mt-2 bg-[#d87943] text-white hover:bg-[#c26835]"
                >
                  Enviar solicitação
                </Button>

                {enviado && (
                  <p className="text-sm text-emerald-500">
                    Solicitação enviada com sucesso. Esta é uma simulação.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t bg-card/40">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div>
            <h3 className="text-lg font-semibold">
              Fluxora
            </h3>

            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Controle inteligente de matérias-primas para operações industriais.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm">
            <a
              href="#recursos"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Recursos
            </a>

            <a
              href="/demo"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Demonstração
            </a>

            <a
              href="#contato"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Contato
            </a>
          </div>

        </div>

        <div className="mt-8 border-t pt-6">
          <p className="text-sm text-muted-foreground">
            © 2026 Fluxora. Projeto demonstrativo desenvolvido para fins educacionais.
          </p>
        </div>
      </div>
    </footer>
  );
};

/* =====================================================
   PÁGINA
===================================================== */

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">

      <Hero1 />

      <Feature17 />

      <DashboardPreview />

      <LeadForm />

      <Footer />

    </main>
  );
}