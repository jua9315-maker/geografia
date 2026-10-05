import React, { useState, useRef } from 'react';
import { CountryGeography } from '../../types';
import { COUNTRIES_GEOGRAPHY } from '../../data/countriesAndVolcanoesData';
import {
  Search,
  Globe,
  Mountain,
  CloudSun,
  ChevronRight,
  ChevronLeft,
  Filter
} from 'lucide-react';

interface CountryExplorerBarProps {
  onSelectCountry: (country: CountryGeography) => void;
  selectedCountryId?: string;
}

export const CountryExplorerBar: React.FC<CountryExplorerBarProps> = ({
  onSelectCountry,
  selectedCountryId
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<'all' | 'Centro' | 'Norte' | 'Sur' | 'Caribe'>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredCountries = COUNTRIES_GEOGRAPHY.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.capital.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.highestPeak.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion =
      selectedRegionFilter === 'all' || c.region === selectedRegionFilter;
    return matchesSearch && matchesRegion;
  });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200 space-y-4">
      {/* Top Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-0.5">
          <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-600" />
            <span>Explorador Geográfico por Países: Relieve & Clima de América</span>
          </h3>
          <p className="text-xs text-slate-500">
            Fila continua interactiva • Selecciona cualquier país para analizar sus cordilleras, pisos térmicos y volcanes
          </p>
        </div>

        {/* Search input & Carousel arrows */}
        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar país, capital, relieve..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50"
            />
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={scrollLeft}
              title="Desplazar a la izquierda"
              className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-600 flex items-center justify-center transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              title="Desplazar a la derecha"
              className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-600 flex items-center justify-center transition cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Region filter chips */}
      <div className="flex items-center gap-1.5 flex-wrap text-xs">
        <span className="text-slate-400 font-semibold mr-1 flex items-center gap-1 text-[11px] uppercase tracking-wider">
          <Filter className="w-3 h-3" />
          Filtrar Región:
        </span>
        {[
          { key: 'all', label: 'Todos los Países' },
          { key: 'Centro', label: '🇳🇮 América Central' },
          { key: 'Norte', label: '🇲🇽 América del Norte' },
          { key: 'Sur', label: '🇨🇴 América del Sur' },
          { key: 'Caribe', label: '🇨🇺 Caribe' }
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setSelectedRegionFilter(item.key as any)}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer text-xs font-semibold ${
              selectedRegionFilter === item.key
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {item.label}
          </button>
        ))}
        <span className="text-[11px] text-slate-400 font-medium ml-auto hidden md:inline">
          {filteredCountries.length} países disponibles en una sola línea
        </span>
      </div>

      {/* Large Single-Line Horizontal Country Carousel */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-3.5 overflow-x-auto pb-3 pt-1 scroll-smooth scrollbar-thin select-none"
      >
        {filteredCountries.map((country) => {
          const isSelected = country.id === selectedCountryId;
          const isNicaragua = country.id === 'nicaragua';

          return (
            <button
              key={country.id}
              onClick={() => onSelectCountry(country)}
              className={`shrink-0 w-[240px] sm:w-[265px] min-w-[240px] p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 group hover:shadow-xl hover:-translate-y-1 ${
                isSelected
                  ? 'bg-emerald-50/90 border-emerald-500 ring-2 ring-emerald-400/50 shadow-md shadow-emerald-500/10'
                  : isNicaragua
                  ? 'bg-gradient-to-b from-amber-50/80 to-white border-amber-300 hover:border-amber-500 shadow-sm'
                  : 'bg-slate-50/60 border-slate-200 hover:bg-white hover:border-slate-300 shadow-xs'
              }`}
            >
              {/* Header: Large Flag & Code */}
              <div className="flex items-center justify-between gap-2 w-full">
                <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform drop-shadow-xs">
                  {country.flag}
                </span>
                <div className="flex items-center gap-1.5">
                  {isNicaragua && (
                    <span className="text-[10px] bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Sede
                    </span>
                  )}
                  <span className="text-xs font-mono font-bold bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded-lg">
                    {country.code}
                  </span>
                </div>
              </div>

              {/* Country Name & Capital */}
              <div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-emerald-700 leading-tight">
                  {country.name}
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Capital: <strong className="text-slate-700">{country.capital}</strong>
                </p>
              </div>

              {/* Geographic Highlights (Relief & Climate) */}
              <div className="space-y-1.5 w-full">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-xl">
                  <Mountain className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span className="truncate">{country.highestPeak}</span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-900 bg-emerald-50/90 border border-emerald-200/70 px-2.5 py-1 rounded-xl truncate">
                  <CloudSun className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{country.climateTypes[0] || 'Clima diverso'}</span>
                </div>
              </div>

              {/* Bottom Action Hint */}
              <div className="pt-2 border-t border-slate-200/70 w-full flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>Ver relieve y clima</span>
                <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
