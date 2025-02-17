"use client"

import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Page() {
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
          label: (context: any) => `${context.raw}% de aumento`,
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
          callback: (value: any) => `${value}%`,
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
          "#00A3FF", // Primary blue
          "rgba(0, 163, 255, 0.8)", // Slightly transparent
          "rgba(0, 163, 255, 0.6)", // More transparent
        ],
        borderRadius: 4,
        barThickness: 30,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#0A1628]">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Agentes Inteligentes: Revolucionando a Gestão
          </h1>
          <p className="text-gray-300">
            Descubra como os Agentes Inteligentes estão transformando diversos setores, desde a saúde até a
            hospitalidade. Com CondominioIA, essa tecnologia chega à gestão de condomínios, elevando a eficiência e a
            satisfação.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
          <div className="h-[300px] w-full">
            <Bar options={options} data={data} />
          </div>
        </div>

        <p className="text-sm text-gray-400 text-center italic">
          Este gráfico ilustra o aumento de eficiência observado em diferentes setores com a implementação de Agentes
          Inteligentes. Dados baseados em estudos da McKinsey e Gartner.
        </p>

        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 space-y-4">
          <h2 className="text-2xl font-bold text-white">Dashboard Inteligente: Potencialize sua Gestão</h2>
          <p className="text-gray-300">
            Visualize o poder dos dados com o Dashboard Inteligente do CondominioIA. Este painel customizável apresenta
            informações detalhadas sobre os condôminos, obtidas pelo Agente ConciergeAI, permitindo uma tomada de
            decisões mais assertiva e aprimorando a qualidade dos serviços prestados.
          </p>
        </div>
      </div>
    </div>
  )
}

