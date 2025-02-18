"use client"
import { motion } from "framer-motion"
import { MagicCard } from "../ui/magic-card"
import { 
  Wrench, 
  Droplet,
  Zap,
  Key,
  Paintbrush,
  Wind,
  Hammer,
  Trash2,
  Home,
  ShoppingCart,
  Car,
  Utensils,
  Wine,
  Heart,
  Dog,
  Recycle,
  Cpu,
  Users,
  Building,
  Briefcase,
  Settings,
  Smartphone
} from "lucide-react"
import Container from "../global/container"

const services = [
  {
    category: "🛠 Manutenção e Reparos",
    description: "Agendamento direto via app, com histórico de serviços e avaliações",
    items: [
      { name: "Encanador", icon: Droplet },
      { name: "Eletricista", icon: Zap },
      { name: "Chaveiro", icon: Key },
      { name: "Pintor", icon: Paintbrush },
      { name: "Desentupidor", icon: Wrench },
      { name: "Técnico de Ar Condicionado", icon: Wind },
      { name: "Marceneiro", icon: Hammer },
    ]
  },
  {
    category: "🧹 Limpeza e Organização",
    description: "Pacotes personalizados por frequência e necessidade",
    items: [
      { name: "Limpeza doméstica", icon: Home },
      { name: "Lavanderia", icon: Trash2 },
      { name: "Organização de espaços", icon: Settings },
      { name: "Limpeza de estofados", icon: Home },
    ]
  },
  {
    category: "🚗 Mobilidade e Alimentação",
    description: "Pedidos rápidos com entrega no hall ou porta",
    items: [
      { name: "Uber", icon: Car },
      { name: "iFood", icon: Utensils },
      { name: "Rappi", icon: ShoppingCart },
      { name: "Zé Delivery", icon: Wine },
      { name: "Supermercados parceiros", icon: ShoppingCart },
      { name: "Farmácias", icon: Heart },
    ]
  },
  {
    category: "💡 Bem-Estar e Conveniência",
    description: "Serviços sob demanda, adaptados à rotina dos moradores",
    items: [
      { name: "Wellhub (academias)", icon: Heart },
      { name: "Personal Trainer", icon: Users },
      { name: "Massagista", icon: Heart },
      { name: "Babá/Cuidador", icon: Users },
      { name: "Dog Walker", icon: Dog },
      { name: "Cursos e aulas", icon: Users },
    ]
  }
]

const newFeatures = [
  {
    category: "🌱 Sustentabilidade",
    items: ["Coleta seletiva", "Reciclagem", "Energia solar"],
    icon: Recycle
  },
  {
    category: "💻 Tecnologia",
    items: ["Integração com Alexa/Google Home", "Controle de acesso biométrico"],
    icon: Cpu
  },
  {
    category: "👥 Comunidade",
    items: ["Plataforma de caronas", "Grupos de troca/doação", "Espaços compartilhados"],
    icon: Users
  }
]

const customization = [
  {
    type: "Condomínios pequenos",
    description: "Foco em serviços essenciais",
    icon: Building
  },
  {
    type: "Condomínios grandes",
    description: "Integração de serviços premium",
    icon: Building
  },
  {
    type: "Condomínios corporativos",
    description: "Opções como salas de reunião sob demanda",
    icon: Briefcase
  }
]

const ServiceIntegration = () => {
  return (
    <section className="w-full py-20">
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Principais Integrações
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Integrando vários serviços essenciais em uma plataforma única e acessível. 
              O agente ConciergeAI está sempre ativo, vai conhecer cada morador e suas preferências, oferecendo uma experiência personalizada em um só lugar.
            </p>
          </motion.div>

          {/* Serviços Principais */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((category) => (
              <div key={category.category} className="rounded-2xl bg-background/40 relative border border-border/50">
                <MagicCard
                  gradientFrom="#38bdf8"
                  gradientTo="#3b82f6"
                  gradientColor="rgba(59,130,246,0.1)"
                  className="p-6 w-full overflow-hidden"
                >
                  <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                  <h3 className="text-xl font-semibold mb-2">{category.category}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {category.items.map((service) => (
                      <div
                        key={service.name}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background/60 hover:bg-background/80 transition-colors"
                      >
                        <service.icon className="w-5 h-5 text-primary" />
                        <span className="text-sm">{service.name}</span>
                      </div>
                    ))}
                  </div>
                </MagicCard>
              </div>
            ))}
          </div>

          {/* Novas Possibilidades */}
          <div className="rounded-2xl bg-background/40 relative border border-border/50 mb-16">
            <MagicCard
              gradientFrom="#38bdf8"
              gradientTo="#3b82f6"
              gradientColor="rgba(59,130,246,0.1)"
              className="p-8 w-full overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 bg-sky-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
              <h3 className="text-2xl font-semibold mb-8">Novas Possibilidades</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {newFeatures.map(feature => (
                  <div key={feature.category} className="space-y-4">
                    <h4 className="text-lg font-medium flex items-center gap-2">
                      <feature.icon className="w-5 h-5 text-primary" />
                      {feature.category}
                    </h4>
                    <ul className="space-y-2">
                      {feature.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </MagicCard>
          </div>

          {/* Personalização */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center mb-8">Personalização Total</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {customization.map((type) => (
                <div key={type.type} className="rounded-2xl bg-background/40 relative border border-border/50">
                  <MagicCard
                    gradientFrom="#38bdf8"
                    gradientTo="#3b82f6"
                    gradientColor="rgba(59,130,246,0.1)"
                    className="p-6 w-full overflow-hidden"
                  >
                    <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                    <type.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h4 className="font-medium mb-2 text-center">{type.type}</h4>
                    <p className="text-sm text-muted-foreground text-center">{type.description}</p>
                  </MagicCard>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-2 text-xl font-medium text-primary">
              <Smartphone className="w-6 h-6" />
              Tudo integrado. Tudo sob medida.
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ServiceIntegration 