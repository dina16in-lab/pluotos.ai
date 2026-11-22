import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Clock, TrendingUp, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenBooking: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenBooking }) => {
  const [teamSize, setTeamSize] = useState<number>(5);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(12);
  const [hourlyRate, setHourlyRate] = useState<number>(45);

  // Math: Hours saved = (teamSize * hoursPerWeek * 0.75 automation efficiency)
  const weeklyHoursSaved = Math.round(teamSize * hoursPerWeek * 0.75);
  const annualHoursSaved = weeklyHoursSaved * 50;
  const annualDollarSavings = annualHoursSaved * hourlyRate;

  return (
    <section id="calculator" className="py-24 bg-[#FBFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEF9] border border-[#9F7ACB]/30 text-xs font-semibold text-[#9F7ACB] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17151B] tracking-tight mb-4">
            Calculate Your Business{' '}
            <span className="text-[#9F7ACB]">Time & Revenue Recovery.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#68636D]">
            Repetitive copy-pasting, lead messaging, and appointment rescheduling silently drain hundreds of thousands of dollars every year. Estimate your savings below:
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E8E4EE] p-7 sm:p-10 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Sliders */}
            <div className="lg:col-span-7 space-y-7">
              {/* Slider 1: Team Size */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#17151B]">
                    Knowledge Workers / Staff Members
                  </label>
                  <span className="text-base font-extrabold text-[#9F7ACB]">
                    {teamSize} {teamSize === 1 ? 'person' : 'people'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-[#9F7ACB] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#68636D] mt-1">
                  <span>1 person</span>
                  <span>25 people</span>
                  <span>50+ people</span>
                </div>
              </div>

              {/* Slider 2: Hours spent on repetitive tasks per person */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#17151B]">
                    Repetitive Manual Hours / Week per Person
                  </label>
                  <span className="text-base font-extrabold text-[#9F7ACB]">
                    {hoursPerWeek} hrs / week
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="30"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-[#9F7ACB] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#68636D] mt-1">
                  <span>4 hrs (minimal)</span>
                  <span>15 hrs (average)</span>
                  <span>30 hrs (high overhead)</span>
                </div>
              </div>

              {/* Slider 3: Average Hourly Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#17151B]">
                    Average Staff Hourly Cost ($)
                  </label>
                  <span className="text-base font-extrabold text-[#9F7ACB]">
                    ${hourlyRate} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="150"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full accent-[#9F7ACB] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#68636D] mt-1">
                  <span>$20/hr</span>
                  <span>$80/hr</span>
                  <span>$150/hr</span>
                </div>
              </div>
            </div>

            {/* Right Column: Calculated Savings Card */}
            <div className="lg:col-span-5 bg-[#F6F4F8] rounded-3xl p-6 sm:p-7 border border-[#E8E4EE] text-center flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EEF9] text-[#9F7ACB] text-xs font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Estimated Annual Value</span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-[#17151B] tracking-tight mb-1">
                  ${annualDollarSavings.toLocaleString()}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#9F7ACB] mb-6">
                  Wasted Labor Cost Reclaimed
                </div>

                <div className="space-y-3 mb-6">
                  <div className="bg-white p-3.5 rounded-2xl border border-[#E8E4EE] flex items-center justify-between text-xs">
                    <span className="text-[#68636D] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#9F7ACB]" />
                      Annual Hours Reclaimed:
                    </span>
                    <span className="font-extrabold text-[#17151B]">
                      {annualHoursSaved.toLocaleString()} hrs
                    </span>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl border border-[#E8E4EE] flex items-center justify-between text-xs">
                    <span className="text-[#68636D] flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#9F7ACB]" />
                      Weekly Team Bandwidth:
                    </span>
                    <span className="font-extrabold text-[#9F7ACB]">
                      +{weeklyHoursSaved} hrs / wk
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-xl bg-[#9F7ACB] text-white text-xs sm:text-sm font-bold hover:bg-[#8F6AB9] shadow-premium transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Reclaim These Hours Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
