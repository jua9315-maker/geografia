import React, { useRef } from 'react';
import { Award, Printer, Download, Sparkles, School, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CertificateProps {
  studentName: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  completionDate: string;
  onClose: () => void;
}

export const CertificateGenerator: React.FC<CertificateProps> = ({
  studentName,
  score,
  totalQuestions,
  percentage,
  completionDate,
  onClose
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    window.print();
  };

  const getMeritLevel = () => {
    if (percentage >= 90) return 'EXCELENCIA ACADÉMICA Y MAESTRÍA CARTOGRÁFICA';
    if (percentage >= 80) return 'DESTACADO DOMINIO GEOGRÁFICO';
    if (percentage >= 70) return 'LOGRO SATISFACTORIO DE COMPETENCIAS';
    return 'CERTIFICADO DE PARTICIPACIÓN FORMATIVA';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full border border-slate-300 overflow-hidden flex flex-col my-6">
        {/* Action Controls Header */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-sm">
              Certificado de Logro y Comprensión Geográfica
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar como PDF</span>
            </button>
            <button
              onClick={onClose}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-2 rounded-xl transition cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>

        {/* The Printable Certificate Design */}
        <div
          ref={certificateRef}
          className="p-8 sm:p-12 bg-gradient-to-br from-amber-50/40 via-white to-emerald-50/30 text-slate-900 relative border-8 border-double border-amber-600/30 m-4 rounded-2xl select-none"
        >
          {/* Subtle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <span className="text-[120px] font-black font-display text-slate-950">
              AMÉRICA
            </span>
          </div>

          {/* Institutional Top Header */}
          <div className="text-center space-y-1 pb-6 border-b-2 border-amber-600/20">
            <div className="inline-flex items-center gap-2 bg-emerald-900 text-emerald-100 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
              <School className="w-4 h-4 text-emerald-300" />
              <span>Instituto Rosa Cerda Amador</span>
            </div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500">
              Departamento de Ciencias Sociales • 8vo Grado &ldquo;A&rdquo; • II Semestre 2026
            </h2>
            <h1 className="text-2xl sm:text-4xl font-black font-display text-slate-900 tracking-tight pt-2">
              CERTIFICADO DE LOGRO FORMATIVO
            </h1>
            <p className="text-xs text-emerald-800 font-semibold italic">
              Estrategia Pedagógica Innovadora Mediante Mapas Interactivos
            </p>
          </div>

          {/* Certificate Body */}
          <div className="text-center py-8 space-y-4 max-w-2xl mx-auto">
            <p className="text-sm text-slate-600">
              Se otorga la presente constancia de aprovechamiento y aprendizaje significativo al estudiante:
            </p>

            <div className="border-b-2 border-slate-900 pb-2 inline-block min-w-[320px]">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 font-display tracking-wide uppercase">
                {studentName || 'Estudiante de 8vo Grado "A"'}
              </span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed pt-2">
              Por haber demostrado una comprensión sobresaliente en el análisis espacial, clasificación de macroformas del relieve (cordilleras, llanuras y escudos), lectura de zonas climáticas e identificación de relaciones de causalidad geográfica en el continente americano.
            </p>

            <div className="inline-block bg-amber-100/80 border border-amber-300/80 px-4 py-2 rounded-xl text-xs font-black text-amber-950 tracking-wider">
              {getMeritLevel()}
            </div>

            {/* Score Pill */}
            <div className="flex items-center justify-center gap-6 pt-3">
              <div className="text-center">
                <span className="text-xs text-slate-500 font-medium block">Puntuación Obtenida</span>
                <span className="text-xl font-black text-emerald-700">{score} / {totalQuestions}</span>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="text-center">
                <span className="text-xs text-slate-500 font-medium block">Calificación Final</span>
                <span className="text-xl font-black text-slate-900">{percentage}%</span>
              </div>
            </div>
          </div>

          {/* Signatures & Seal Section */}
          <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 items-end text-center">
            <div className="space-y-1">
              <div className="w-32 border-b border-slate-800 mx-auto"></div>
              <p className="text-[11px] font-bold text-slate-800">Coordinación Pedagógica</p>
              <p className="text-[10px] text-slate-500">Ciencias Sociales</p>
            </div>

            {/* Digital Emblem Seal */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-emerald-600 flex items-center justify-center bg-emerald-50 text-emerald-800 shadow-inner">
                <Award className="w-8 h-8 text-emerald-700" />
              </div>
              <span className="text-[9px] font-mono text-emerald-800 font-bold uppercase mt-1">
                SELLO PEDAGÓGICO 2026
              </span>
            </div>

            <div className="space-y-1">
              <div className="w-32 border-b border-slate-800 mx-auto"></div>
              <p className="text-[11px] font-bold text-slate-800">Docente de Aula</p>
              <p className="text-[10px] text-slate-500">8vo Grado &ldquo;A&rdquo;</p>
            </div>
          </div>

          <div className="mt-6 text-center text-[10px] font-mono text-slate-400">
            Emitido el {completionDate} • Instituto Rosa Cerda Amador • Folio Digital: RCA-2026-GEO-8A
          </div>
        </div>
      </div>
    </div>
  );
};
