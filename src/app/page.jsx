import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Blocks,
  ChartLine,
  Globe,
  Layers,
  Lock,
  Palette,
  Rocket,
  Settings,
  Shield,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const MAX_FEATURES = 12;

const defaultProps = {
  heading: "Assuma o controle total do seu estoque com a Fluxora",
  description:
    "Elimine perdas, simplifique processos e tenha visibilidade em tempo real de todas as mercadorias da sua empresa.",
  buttons: {
    primary: {
      text: "Acesse a Demo",
      url: "https://shadcnblocks.com",
    },
    secondary: {
      text: "Ver Recursos",
      url: "https://shadcnblocks.com",
    },
  },
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9.png",
    srcDark:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9-dark.png",
    alt: "Hero Image Placeholder",
  },
};

const defaultPropsFeature = {
  heading: "Tecnologia industrial para zerar paradas de produção e desperdícios",
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
  ]
};

const Hero1 = (props) => {
  const { badge, heading, description, buttons, image, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("relative overflow-hidden py-20 lg:py-28", className)}>
      {/* Luzes decorativas em segundo plano */}
      <div className="pointer-events-none absolute -left-20 -top-24 -z-10 size-96 rounded-full bg-[#d87943]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 -z-10 size-96 rounded-full bg-[#527575]/15 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
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
            <h1 className="max-w-xl text-4xl font-bold tracking-tight text-pretty md:text-5xl lg:max-w-3xl lg:text-6xl">
              {heading}
            </h1>
            <p className="max-w-xl text-balance text-muted-foreground lg:text-lg">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              {buttons?.primary && (
                <Button
                  aschild="true"
                  size="lg"
                  className="w-full bg-[#d87943] text-white shadow-lg shadow-[#d87943]/20 hover:bg-[#c26835] sm:w-auto"
                >
                  <a href={buttons.primary.url} className="flex items-center gap-2">
                    {buttons.primary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
              {buttons?.secondary && (
                <Button
                  aschild="true"
                  variant="outline"
                  size="lg"
                  className="w-full border-[#527575]/40 text-[#527575] hover:bg-[#527575]/10 hover:text-[#527575] sm:w-auto"
                >
                  <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                </Button>
              )}
            </div>
          </div>

          {/* Moldura destacada com degradê ao redor da imagem do Hero */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#d87943]/30 via-[#527575]/20 to-transparent p-2 shadow-2xl">
            <div className="overflow-hidden rounded-xl bg-background">
              {image.srcDark ? (
                <>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-video w-full object-cover object-top dark:hidden"
                  />
                  <img
                    src={image.srcDark}
                    alt={image.alt}
                    className="hidden aspect-video w-full object-cover object-top dark:block"
                  />
                </>
              ) : (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-video w-full object-cover object-top"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

{/* Feature */}

const Feature17 = (props) => {
  const { heading, label, features, buttons, className } = {
    ...defaultPropsFeature,
    ...props,
  };
  const items = (features ?? []).slice(0, MAX_FEATURES);

  return (
    <section
      className={cn(
        "relative border-t border-[#527575]/20 bg-gradient-to-b from-[#527575]/10 via-[#527575]/5 to-transparent py-24 lg:py-32",
        className
      )}
    >
      {/* Brilho suave central de fundo */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 size-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d87943]/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4">
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
            <h2 className="text-3xl font-bold tracking-tight text-pretty md:text-4xl lg:text-5xl">
              {heading}
            </h2>
          </div>
        )}

        {/* Grid transformado em Cards estruturados */}
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

        {buttons?.primary?.url && (
          <div className="mt-16 flex justify-center">
            <Button
              size="lg"
              aschild="true"
              className="bg-[#527575] text-white shadow-md shadow-[#527575]/20 hover:bg-[#436161]"
            >
              <a href={buttons.primary.url}>{buttons.primary.text}</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Hero1 />
      <Feature17 />
    </main>
  );
}