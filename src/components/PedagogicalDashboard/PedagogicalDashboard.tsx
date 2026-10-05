import React, { useState } from 'react';
import { PEDAGOGICAL_FRAMEWORK } from '../../data/geographyData';
import {
  School,
  Target,
  BarChart3,
  TrendingUp,
  Award,
  Users,
  Calendar,
  BookCheck,
  CheckCircle2,
  FileText,
  PieChart,
  Lightbulb,
  ArrowUpRight
} from 'lucide-react';

export const PedagogicalDashboard: React.FC = () => {
  const [selectedObjectiveTab, setSelectedObjectiveTab] = useState<number>(1);

  // Comparative Research Data (Instituto Rosa Cerda Amador - 8vo A)
  const comparisonMetrics = [
    {
      topic: 'Identificación de Cordilleras y Escudos',
      preTest: 42,
      postTest: 94,
      gain: '+52%'
    },
    {
      topic: 'Comprensión del Gradiente Térmico (Altitud vs Temp.)',
      preTest: 31,
      postTest: 88,
      gain: '+57%'
    },
    {
      topic: 'Efecto de Sombra Orográfica (Atacama / Rocosas)',
      preTest: 18,
      postTest: 85,
      gain: '+67%'
    },
    {
      topic: 'Relación Corrientes Marinas y Climas Costeros',
      preTest: 26,
      postTest: 82,
      gain: '+56%'
    },
    {
      topic: 'Lectura e Interpretación de Mapas Multicapa',
      preTest: 48,
      postTest: 96,
      gain: '+48%'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Institutional Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-emerald-800/40 relative overflow-hidden">
        <div className="relative z-10 space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <School className="w-3.5 h-3.5" />
              <span>{PEDAGOGICAL_FRAMEWORK.institution}</span>
            </span>
            <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-semibold">
              Población: {PEDAGOGICAL_FRAMEWORK.targetGrade}
            </span>
            <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-semibold">
              Período: {PEDAGOGICAL_FRAMEWORK.period}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white">
            Marco Metodológico y Evaluación de Efectividad del Proyecto
          </h2>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block mb-1">
              Objetivo General de la Propuesta de Innovación:
            </span>
            <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
              &ldquo;{PEDAGOGICAL_FRAMEWORK.generalObjective}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* The 3 Specific Objectives Interactive Navigation */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Estructura de los Objetivos Específicos
          </span>
          <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">
            Articulación Pedagógica del Proyecto
          </h3>
        </div>

        {/* Tab buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PEDAGOGICAL_FRAMEWORK.specificObjectives.map((obj) => (
            <button
              key={obj.num}
              onClick={() => setSelectedObjectiveTab(obj.num)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedObjectiveTab === obj.num
                  ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-500/30 shadow-xs'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center ${
                  selectedObjectiveTab === obj.num
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-300 text-slate-700'
                }`}>
                  Obj {obj.num}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {obj.num === 1 ? 'Diagnóstico' : obj.num === 2 ? 'Estrategia' : 'Evaluación'}
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                {obj.title}
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                {obj.description}
              </p>
            </button>
          ))}
        </div>

        {/* Active Objective Detail Panel */}
        {(() => {
          const activeObj = PEDAGOGICAL_FRAMEWORK.specificObjectives.find(
            (o) => o.num === selectedObjectiveTab
          )!;
          return (
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-black text-base text-slate-900">
                    Objetivo Específico N.° {activeObj.num}: {activeObj.title}
                  </h4>
                </div>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full self-start sm:self-auto">
                  Herramienta: {activeObj.associatedTool}
                </span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {activeObj.description}
              </p>

              <div>
                <h5 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  Indicadores de Logro y Evidencia Pedagógica:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {activeObj.indicators.map((ind, i) => (
                    <div
                      key={i}
                      className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700 font-medium flex items-start gap-2 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Effectiveness Analysis: Objective 3 Deep-Dive */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              Objetivo Específico 3: Evaluación de la Efectividad
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display mt-1">
              Resultados de Aprendizaje: Pre-test Diagnóstico vs Post-test Final
            </h3>
            <p className="text-xs text-slate-500">
              Muestra representativa de estudiantes del 8vo Grado &ldquo;A&rdquo; del Instituto Rosa Cerda Amador (II Semestre 2026)
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-200 self-start md:self-auto">
            <div className="text-center">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Promedio Inicial</span>
              <span className="text-lg font-black text-slate-700">33.0 / 100</span>
            </div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="text-center">
              <span className="text-[10px] text-emerald-600 uppercase font-bold block">Promedio Final</span>
              <span className="text-lg font-black text-emerald-700">89.0 / 100</span>
            </div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="text-center">
              <span className="text-[10px] text-amber-600 uppercase font-bold block">Ganancia Hake (g)</span>
              <span className="text-lg font-black text-amber-600">0.83 (Alta)</span>
            </div>
          </div>
        </div>

        {/* Progress Bars Comparative Table */}
        <div className="space-y-4">
          {comparisonMetrics.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 hover:border-slate-300 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-slate-800 text-sm">
                  {item.topic}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 font-mono">
                    Diagnóstico: <strong className="text-slate-700">{item.preTest}%</strong>
                  </span>
                  <span className="text-slate-400">➔</span>
                  <span className="text-emerald-700 font-mono">
                    Post-test: <strong className="text-emerald-800 font-black">{item.postTest}%</strong>
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold text-[11px] flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" />
                    {item.gain}
                  </span>
                </div>
              </div>

              {/* Double Visual Progress Bar */}
              <div className="space-y-1.5 pt-1">
                {/* Pre test bar */}
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden flex">
                  <div
                    className="bg-slate-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${item.preTest}%` }}
                    title={`Diagnóstico inicial: ${item.preTest}%`}
                  ></div>
                </div>
                {/* Post test bar */}
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-700"
                    style={{ width: `${item.postTest}%` }}
                    title={`Evaluación final: ${item.postTest}%`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Qualitative Conclusions Card */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
            <Lightbulb className="w-4 h-4 text-emerald-600" />
            <span>Conclusiones Pedagógicas del Estudio de Innovación:</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
            La integración de mapas digitales interactivos multicapa y el simulador de perfil topográfico eliminó las concepciones erróneas iniciales sobre la relación altitud-clima y la sombra orográfica. Los estudiantes de 8vo &ldquo;A&rdquo; lograron comprender el espacio geográfico de América no como datos aislados de memoria, sino como un sistema dinámico e interconectado.
          </p>
        </div>
      </div>
    </div>
  );
};
