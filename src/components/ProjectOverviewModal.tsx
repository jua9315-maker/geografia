import React from 'react';
import { PEDAGOGICAL_FRAMEWORK } from '../data/geographyData';
import { X, School, Target, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';

interface ProjectOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectOverviewModal: React.FC<ProjectOverviewModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <School className="w-3.5 h-3.5" />
              <span>Proyecto Educativo de Innovación</span>
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black font-display text-white">
            {PEDAGOGICAL_FRAMEWORK.institution}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-200 mt-1">
            {PEDAGOGICAL_FRAMEWORK.targetGrade} • {PEDAGOGICAL_FRAMEWORK.period}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-slate-700">
          {/* General Objective */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-emerald-600" />
              <span>Objetivo General:</span>
            </span>
            <p className="text-sm font-bold text-emerald-950 leading-relaxed">
              {PEDAGOGICAL_FRAMEWORK.generalObjective}
            </p>
          </div>

          {/* Specific Objectives */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Objetivos Específicos del Proyecto:
            </h4>
            <div className="space-y-3">
              {PEDAGOGICAL_FRAMEWORK.specificObjectives.map((obj) => (
                <div
                  key={obj.num}
                  className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 uppercase">
                      Objetivo Específico N.° {obj.num}
                    </span>
                    <span className="text-[11px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono">
                      {obj.associatedTool}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    {obj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Justification & Educational Significance */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Justificación del Uso de Mapas Interactivos:</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              La enseñanza del relieve y el clima en la educación secundaria a menudo adolece de abstracción y memorización mecánica de accidentes geográficos. Esta plataforma digital permite a los estudiantes de 8vo grado &ldquo;A&rdquo; manipular capas cartográficas, contrastar variables en tiempo real y experimentar con simuladores de sombra orográfica, garantizando una experiencia de aprendizaje significativa, colaborativa y constructivista.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
          >
            Cerrar Ficha
          </button>
        </div>
      </div>
    </div>
  );
};
