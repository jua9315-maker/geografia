import React, { useState } from 'react';
import { TEACHER_RESOURCES } from '../../data/teacherResourcesData';
import { TeacherResourceItem } from '../../types';
import { downloadTextFile, printSection } from '../../utils/fileDownloader';
import {
  DownloadCloud,
  Printer,
  FileText,
  CalendarCheck,
  CheckSquare,
  FileSpreadsheet,
  HelpCircle,
  MapPin,
  ExternalLink,
  BookOpen,
  Copy,
  Check,
  Eye
} from 'lucide-react';

export const TeacherResourcesView: React.FC = () => {
  const [selectedResource, setSelectedResource] = useState<TeacherResourceItem>(TEACHER_RESOURCES[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showMuteMapModal, setShowMuteMapModal] = useState<boolean>(false);
  const [muteMapType, setMuteMapType] = useState<'relief' | 'climate'>('relief');

  const getIcon = (category: string) => {
    switch (category) {
      case 'Planificación':
        return <CalendarCheck className="w-5 h-5 text-emerald-600" />;
      case 'Rúbrica':
        return <CheckSquare className="w-5 h-5 text-amber-600" />;
      case 'Ficha de Aula':
        return <FileSpreadsheet className="w-5 h-5 text-blue-600" />;
      case 'Banco de Ítems':
        return <HelpCircle className="w-5 h-5 text-indigo-600" />;
      default:
        return <FileText className="w-5 h-5 text-slate-600" />;
    }
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrintResource = (res: TeacherResourceItem) => {
    printSection(res.title, `<pre>${res.content}</pre>`);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
              Área Exclusiva para Docentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-1">
              Recursos Didácticos Multimedia Descargables
            </h2>
            <p className="text-sm text-slate-600 max-w-3xl">
              Materiales pedagógicos estructurados para el profesorado del <strong>Instituto Rosa Cerda Amador</strong> (8vo Grado &ldquo;A&rdquo;, II Semestre 2026), listos para imprimir, editar o proyectar en clase.
            </p>
          </div>

          <button
            onClick={() => setShowMuteMapModal(true)}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-2xl text-xs font-bold transition shadow-md cursor-pointer self-start md:self-auto whitespace-nowrap"
          >
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Mapas Mudos Imprimibles</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Resource List + Preview Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Resource Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-1">
            Documentos Curriculares Disponibles
          </span>

          {TEACHER_RESOURCES.map((res) => {
            const isSelected = selectedResource.id === res.id;
            return (
              <div
                key={res.id}
                onClick={() => setSelectedResource(res)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-50/70 border-amber-300 ring-2 ring-amber-400/40 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 shrink-0">
                    {getIcon(res.category)}
                  </div>
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        {res.category}
                      </span>
                      {res.duration && (
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                          {res.duration.split('(')[0]}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 truncate">
                      {res.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {res.description}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 font-mono">
                    {res.downloadFilename}
                  </span>
                  <span className="text-amber-800 font-bold hover:underline">
                    Ver documento ➔
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Full Document Preview & Actions (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col h-[700px]">
          {/* Header of Preview */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider">
                  {selectedResource.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedResource.targetGrade}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-1">
                {selectedResource.title}
              </h3>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              <button
                onClick={() => handleCopyText(selectedResource.content, selectedResource.id)}
                title="Copiar texto"
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition cursor-pointer"
              >
                {copiedId === selectedResource.id ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => handlePrintResource(selectedResource)}
                title="Imprimir formato limpio"
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition cursor-pointer"
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                onClick={() =>
                  downloadTextFile(
                    selectedResource.downloadFilename,
                    selectedResource.content
                  )
                }
                className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
              >
                <DownloadCloud className="w-4 h-4" />
                <span>Descargar</span>
              </button>
            </div>
          </div>

          {/* Text Content Area */}
          <div className="flex-1 overflow-y-auto my-4 p-4 bg-slate-50/70 rounded-2xl border border-slate-200 text-xs sm:text-sm font-mono text-slate-800 leading-relaxed whitespace-pre-wrap select-text">
            {selectedResource.content}
          </div>

          {/* Preview Footer */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Instituto Rosa Cerda Amador • 8vo Grado &ldquo;A&rdquo;</span>
            <span>Uso docente exclusivo • II Semestre 2026</span>
          </div>
        </div>
      </div>

      {/* Modal: Mapas Mudos Imprimibles */}
      {showMuteMapModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-300 p-6 flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-0.5 rounded-full">
                  Ficha Cartográfica Imprimible
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Mapa Mudo de América para Evaluación y Trabajo en Aula
                </h3>
              </div>
              <button
                onClick={() => setShowMuteMapModal(false)}
                className="text-slate-400 hover:text-slate-700 text-xl font-bold cursor-pointer p-1"
              >
                ✕
              </button>
            </div>

            {/* Mute Map Type Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMuteMapType('relief')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  muteMapType === 'relief'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                1. Mapa Mudo: Macroformas del Relieve
              </button>
              <button
                onClick={() => setMuteMapType('climate')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  muteMapType === 'climate'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                2. Mapa Mudo: Zonas Climáticas & Biomas
              </button>
            </div>

            {/* Printable Frame with Student Details Header */}
            <div className="border-2 border-slate-300 rounded-2xl p-6 bg-white space-y-4 select-none">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 border-b border-slate-300 pb-3 text-xs">
                <div>
                  <strong>Estudiante:</strong> ____________________________
                </div>
                <div>
                  <strong>Grado y Sección:</strong> 8vo Grado &ldquo;A&rdquo;
                </div>
                <div>
                  <strong>Fecha:</strong> ____ / ____ / 2026
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-bold text-sm text-slate-900 uppercase">
                  {muteMapType === 'relief'
                    ? 'Práctica Cartográfica N.° 1: Ubicación y Rotulación del Relieve Americano'
                    : 'Práctica Cartográfica N.° 2: Delimitación de Zonas Climáticas de América'}
                </h4>
                <p className="text-xs text-slate-500 italic mt-0.5">
                  {muteMapType === 'relief'
                    ? 'Consigna: Rotula en el mapa las siguientes unidades: 1. Rocosas, 2. Apalaches, 3. Andes, 4. Llanura Amazónica, 5. Escudo Guayanés, 6. Grandes Llanuras.'
                    : 'Consigna: Colorea con los tonos de la clave: Verde (Cálidos), Azul/Celeste (Templados), Morado (Fríos) y Amarillo (Áridos).'}
                </p>
              </div>

              {/* Clean Black and White Printable Vector Outline */}
              <div className="w-full h-96 flex items-center justify-center bg-slate-50 rounded-xl border border-slate-200">
                <svg viewBox="100 50 600 1000" className="w-full h-full max-h-96">
                  {/* North America outline in clean print line */}
                  <path
                    d="M 140 100 Q 220 70 360 80 Q 480 60 580 80 Q 590 180 500 160 Q 480 230 520 280 Q 550 320 500 370 Q 450 420 400 420 Q 350 440 330 490 Q 280 470 260 390 Q 200 320 170 260 Q 140 170 140 100 Z"
                    fill="#ffffff"
                    stroke="#0f172a"
                    strokeWidth="2.5"
                  />

                  {/* Central America outline */}
                  <path
                    d="M 330 490 Q 360 510 390 530 Q 430 560 410 590 Q 380 580 350 550 Q 320 530 330 490 Z"
                    fill="#ffffff"
                    stroke="#0f172a"
                    strokeWidth="2.5"
                  />

                  {/* South America outline */}
                  <path
                    d="M 390 590 Q 460 590 540 600 Q 620 630 670 690 Q 710 740 660 820 Q 600 890 540 940 Q 470 1020 430 1070 Q 400 980 380 900 Q 360 740 370 660 Q 370 620 390 590 Z"
                    fill="#ffffff"
                    stroke="#0f172a"
                    strokeWidth="2.5"
                  />

                  {/* Dashed guide lines / boxes for students to write in */}
                  {muteMapType === 'relief' ? (
                    <g stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" fill="none">
                      {/* Rockies Box */}
                      <rect x="230" y="220" width="30" height="20" rx="3" fill="#ffffff" />
                      <text x="242" y="234" fill="#0f172a" fontSize="11" fontWeight="bold">1</text>

                      {/* Great Plains Box */}
                      <rect x="360" y="270" width="30" height="20" rx="3" fill="#ffffff" />
                      <text x="372" y="284" fill="#0f172a" fontSize="11" fontWeight="bold">2</text>

                      {/* Andes Box */}
                      <rect x="380" y="780" width="30" height="20" rx="3" fill="#ffffff" />
                      <text x="392" y="794" fill="#0f172a" fontSize="11" fontWeight="bold">3</text>

                      {/* Amazon Box */}
                      <rect x="490" y="710" width="30" height="20" rx="3" fill="#ffffff" />
                      <text x="502" y="724" fill="#0f172a" fontSize="11" fontWeight="bold">4</text>
                    </g>
                  ) : (
                    <g stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,4" fill="none">
                      <line x1="80" y1="410" x2="680" y2="410" />
                      <text x="500" y="405" fill="#64748b" fontSize="9">Trópico de Cáncer</text>
                      <line x1="80" y1="650" x2="680" y2="650" />
                      <text x="530" y="645" fill="#64748b" fontSize="9">Línea del Ecuador</text>
                      <line x1="80" y1="830" x2="680" y2="830" />
                      <text x="490" y="825" fill="#64748b" fontSize="9">Trópico de Capricornio</text>
                    </g>
                  )}
                </svg>
              </div>

              {/* Student Response Legend Lines */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                <div className="p-2 border border-slate-300 rounded-lg">1. ___________________</div>
                <div className="p-2 border border-slate-300 rounded-lg">2. ___________________</div>
                <div className="p-2 border border-slate-300 rounded-lg">3. ___________________</div>
                <div className="p-2 border border-slate-300 rounded-lg">4. ___________________</div>
              </div>
            </div>

            {/* Actions for Mute Map */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500 font-mono">
                Formato A4 estándar • Imprimible para 8vo Grado &ldquo;A&rdquo;
              </span>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir Hoja de Trabajo</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
