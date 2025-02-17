"use client"

import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
  Scale,
  CoreScaleOptions
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const AgentsSection = () => {
  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"bar">) => 
            `${context.raw as number}% de aumento`,
        },
        backgroundColor: "rgba(10, 22, 40, 0.9)",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        boxPadding: 8,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#fff",
          callback: function(this: Scale<CoreScaleOptions>, 
            tickValue: string | number
          ) {
            return `${tickValue}%`
          },
        },
        max: 60,
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#fff",
        },
      },
    },
  }

  const data = {
    labels: ["Diagnóstico Médico", "Atendimento ao Cliente (Hospitalidade)", "Análise Financeira"],
    datasets: [
      {
        data: [45, 40, 50],
        backgroundColor: [
          "#00A3FF",
          "rgba(0, 163, 255, 0.8)",
          "rgba(0, 163, 255, 0.6)",
        ],
        borderRadius: 4,
        barThickness: 30,
      },
    ],
  }

  return (
    <section className="w-full py-16 bg-[#0A1628]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Agentes Inteligentes: Revolucionando a Gestão
          </h2>
          <p className="text-gray-300">
            Descubra como os Agentes Inteligentes estão transformando diversos setores, 
            desde a saúde até a hospitalidade. Com CondominioIA, essa tecnologia chega 
            à gestão de condomínios, elevando a eficiência e a satisfação.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 mt-8 mb-4">
          <div className="h-[300px]">
            <Bar options={options} data={data} />
          </div>
        </div>
        
        <p className="text-sm text-gray-400 text-center italic mb-12">
          Este gráfico ilustra o aumento de eficiência observado em diferentes setores 
          com a implementação de Agentes Inteligentes. Dados baseados em estudos da McKinsey e Gartner.
        </p>
      </div>
    </section>
  )
}

export default AgentsSection 