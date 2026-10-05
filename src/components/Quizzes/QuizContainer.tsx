import React, { useState } from 'react';
import {
  DIAGNOSTIC_QUESTIONS,
  TRIVIA_QUESTIONS,
  POST_TEST_QUESTIONS
} from '../../data/quizData';
import { QuizQuestion, DiagnosticResult } from '../../types';
import { CertificateGenerator } from './CertificateGenerator';
import {
  Stethoscope,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Award,
  AlertTriangle,
  Lightbulb,
  Compass
} from 'lucide-react';
import confetti from 'canvas-confetti';

type QuizMode = 'diagnostic' | 'trivia' | 'posttest';

export const QuizContainer: React.FC = () => {
  const [activeMode, setActiveMode] = useState<QuizMode>('diagnostic');

  // Question navigation state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Student certificate modal
  const [showCertificate, setShowCertificate] = useState(false);
  const [studentName, setStudentName] = useState('');

  // Get active question set
  const getQuestions = (): QuizQuestion[] => {
    switch (activeMode) {
      case 'diagnostic':
        return DIAGNOSTIC_QUESTIONS;
      case 'trivia':
        return TRIVIA_QUESTIONS;
      case 'posttest':
      default:
        return POST_TEST_QUESTIONS;
    }
  };

  const questions = getQuestions();
  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswers({ ...selectedAnswers, [currentIndex]: optionIndex });
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswers[currentIndex] === undefined) return;
    setIsAnswerSubmitted(true);

    const isCorrect = selectedAnswers[currentIndex] === currentQuestion.correctAnswer;
    if (isCorrect) {
      setStreak((s) => s + 1);
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setIsAnswerSubmitted(false);
    } else {
      setIsCompleted(true);
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    }
  };

  const handleResetQuiz = (mode: QuizMode) => {
    setActiveMode(mode);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsAnswerSubmitted(false);
    setIsCompleted(false);
    setStreak(0);
  };

  // Calculations
  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  // Diagnostic Report Builder for Objetivo 1
  const getDiagnosticAnalysis = (): DiagnosticResult => {
    const difficulties: string[] = [];
    const recommendations: string[] = [];

    // Check specific question items
    if (selectedAnswers[0] !== DIAGNOSTIC_QUESTIONS[0].correctAnswer) {
      difficulties.push('Idea preconcebida errónea sobre el gradiente térmico (creer que a mayor altitud hace más calor por cercanía al sol).');
      recommendations.push('Revisar el simulador de pisos térmicos y experimentar con la elevación en el corte transversal.');
    }
    if (selectedAnswers[1] !== DIAGNOSTIC_QUESTIONS[1].correctAnswer) {
      difficulties.push('Confusión en la orientación y recorrido de las cordilleras occidentales.');
      recommendations.push('Navegar en el mapa interactivo activando únicamente la capa de Relieve sobre Sudamérica.');
    }
    if (selectedAnswers[3] !== DIAGNOSTIC_QUESTIONS[3].correctAnswer) {
      difficulties.push('Desconocimiento del efecto de sombra orográfica (barlovento vs sotavento).');
      recommendations.push('Activar la simulación de vientos en el Perfil Topográfico de Sudamérica (Atacama vs Amazonía).');
    }
    if (selectedAnswers[4] !== DIAGNOSTIC_QUESTIONS[4].correctAnswer) {
      difficulties.push('Dificultad para diferenciar cordilleras cenozoicas jóvenes de escudos precámbricos antiguos.');
      recommendations.push('Comparar la ficha del Escudo Guayanés con la de la Cordillera de los Andes.');
    }
    if (selectedAnswers[5] !== DIAGNOSTIC_QUESTIONS[5].correctAnswer) {
      difficulties.push('Falta de comprensión de la influencia de corrientes marinas frías en la aridez costera.');
      recommendations.push('Activar la capa de Corrientes Marinas y leer el impacto de la Corriente de Humboldt.');
    }

    let level: 'Nivel Inicial' | 'Nivel Básico' | 'Nivel Competente' = 'Nivel Inicial';
    if (percentage >= 80) level = 'Nivel Competente';
    else if (percentage >= 50) level = 'Nivel Básico';

    return {
      score,
      total: questions.length,
      percentage,
      level,
      diagnosedDifficulties: difficulties,
      recommendedActivities: recommendations
    };
  };

  return (
    <div className="space-y-6">
      {/* Mode Switcher Banner */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              Evaluación Dinámica y Formativa
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-1">
              Cuestionarios Dinámicos de Geografía
            </h2>
            <p className="text-sm text-slate-500">
              Alineados a los 3 objetivos de investigación pedagógica del 8vo Grado &ldquo;A&rdquo; (2026)
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-2xl">
            <button
              onClick={() => handleResetQuiz('diagnostic')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'diagnostic'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>Obj 1: Pre-test Diagnóstico</span>
            </button>

            <button
              onClick={() => handleResetQuiz('trivia')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'trivia'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Obj 2: Geo-Trivia Formativa</span>
            </button>

            <button
              onClick={() => handleResetQuiz('posttest')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'posttest'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Obj 3: Post-test Evaluativo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Quiz Area */}
      {!isCompleted ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
          {/* Header info */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center font-mono">
                {currentIndex + 1}
              </span>
              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                  Pregunta {currentIndex + 1} de {questions.length}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Eje: {currentQuestion.category}
                </span>
              </div>
            </div>

            {/* Streak & Difficulty */}
            <div className="flex items-center gap-2">
              {streak > 1 && (
                <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full text-xs font-black flex items-center gap-1">
                  🔥 Racha: {streak}
                </span>
              )}
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                Dificultad: {currentQuestion.difficulty}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Text */}
          <div className="py-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {currentQuestion.question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentIndex] === idx;
              const isCorrect = idx === currentQuestion.correctAnswer;

              let optionStyle = 'border-slate-200 bg-slate-50/70 hover:bg-slate-100 text-slate-800';

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/40 font-semibold';
                } else if (isSelected && !isCorrect) {
                  optionStyle = 'border-red-400 bg-red-50 text-red-950 ring-2 ring-red-400/40';
                } else {
                  optionStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                }
              } else if (isSelected) {
                optionStyle = 'border-emerald-600 bg-emerald-50/80 text-emerald-950 ring-2 ring-emerald-500/40 font-semibold';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 cursor-pointer ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm font-medium">{option}</span>
                  </div>

                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box after submission */}
          {isAnswerSubmitted && (
            <div className={`p-4 sm:p-5 rounded-2xl border ${
              selectedAnswers[currentIndex] === currentQuestion.correctAnswer
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-amber-50 border-amber-200 text-amber-950'
            }`}>
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider mb-1.5">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Explicación Científico-Pedagógica:</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-400 font-mono">
              Instituto Rosa Cerda Amador
            </span>

            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswers[currentIndex] === undefined}
                className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition cursor-pointer"
              >
                Comprobar Respuesta
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl flex items-center gap-2 transition cursor-pointer"
              >
                <span>{currentIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar y Ver Resultados'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Completion / Results View */
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-8">
          <div className="text-center space-y-2 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-inner">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              {activeMode === 'diagnostic' ? 'Diagnóstico Inicial Completado' : '¡Evaluación Finalizada con Éxito!'}
            </h3>
            <p className="text-sm text-slate-500">
              Estudiante de 8vo Grado &ldquo;A&rdquo; • Instituto Rosa Cerda Amador (II Semestre 2026)
            </p>
          </div>

          {/* Score card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
              <span className="text-xs text-slate-400 font-semibold block">Aciertos</span>
              <span className="text-2xl font-black text-slate-900">{score} / {questions.length}</span>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-center">
              <span className="text-xs text-emerald-700 font-semibold block">Porcentaje</span>
              <span className="text-2xl font-black text-emerald-800">{percentage}%</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
              <span className="text-xs text-slate-400 font-semibold block">Nivel Alcanzado</span>
              <span className="text-sm font-bold text-slate-800">
                {percentage >= 80 ? 'Nivel Avanzado' : percentage >= 60 ? 'Nivel Medio' : 'En Refuerzo'}
              </span>
            </div>
          </div>

          {/* Specific Diagnostic Feedback for Objetivo 1 */}
          {activeMode === 'diagnostic' && (
            <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h4 className="font-bold text-base text-slate-900">
                  Informe Diagnóstico de Dificultades Detectadas (Objetivo Específico 1)
                </h4>
              </div>

              {getDiagnosticAnalysis().diagnosedDifficulties.length > 0 ? (
                <div className="space-y-3">
                  <p className="text-xs text-slate-600 font-medium">
                    Se han identificado las siguientes oportunidades de mejora cognitiva en el grupo:
                  </p>
                  <ul className="space-y-2">
                    {getDiagnosticAnalysis().diagnosedDifficulties.map((diff, i) => (
                      <li key={i} className="text-xs text-amber-900 bg-amber-50 border border-amber-200 p-2.5 rounded-xl flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span>
                        <span>{diff}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <h5 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2">
                      Ruta Pedagógica Recomendada:
                    </h5>
                    <ul className="space-y-1 text-xs text-slate-700 list-disc list-inside">
                      {getDiagnosticAnalysis().recommendedActivities.map((act, i) => (
                        <li key={i}><strong className="text-slate-900">{act}</strong></li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4 text-emerald-800">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                  <p className="text-sm font-bold">¡Excelente base diagnóstica!</p>
                  <p className="text-xs text-slate-600">No se detectaron errores conceptuales graves en este módulo previo.</p>
                </div>
              )}
            </div>
          )}

          {/* Certificate Generation Prompt for Post-test (Objetivo 3) */}
          {activeMode === 'posttest' && (
            <div className="max-w-md mx-auto bg-gradient-to-br from-amber-50 to-emerald-50 p-6 rounded-3xl border border-amber-200/80 text-center space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 mx-auto flex items-center justify-center font-bold">
                🎓
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  Genera tu Certificado de Logro Estudiantil
                </h4>
                <p className="text-xs text-slate-600">
                  Ingresa tu nombre completo para emitir el certificado oficial del Instituto Rosa Cerda Amador
                </p>
              </div>

              <input
                type="text"
                placeholder="Nombre y Apellidos del Estudiante"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-white"
              />

              <button
                onClick={() => setShowCertificate(true)}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-xl transition shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>Ver y Descargar Certificado</span>
              </button>
            </div>
          )}

          {/* Reset Buttons */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={() => handleResetQuiz(activeMode)}
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reintentar este cuestionario</span>
            </button>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {showCertificate && (
        <CertificateGenerator
          studentName={studentName}
          score={score}
          totalQuestions={questions.length}
          percentage={percentage}
          completionDate="Septiembre de 2026"
          onClose={() => setShowCertificate(false)}
        />
      )}
    </div>
  );
};
