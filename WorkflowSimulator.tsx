import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Clock, 
  ArrowRight,
  Database,
  Instagram,
  HeartPulse,
  Building2,
  CalendarCheck,
  Send,
  Code2,
  Share2
} from 'lucide-react';
import { WORKFLOW_SCENARIOS } from '../../data/mockData';
import { WorkflowScenario } from '../../types';

export const WorkflowSimulator: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<WorkflowScenario>(WORKFLOW_SCENARIOS[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(-1);
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'visual' | 'payload' | 'logs'>('visual');

  // Reset simulator state when switching scenario
  useEffect(() => {
    setIsSimulating(false);
    setActiveNodeIndex(-1);
    setCompletedNodes([]);
    setExecutionLogs([
      `[${new Date().toLocaleTimeString()}] Pipeline ready: ${selectedScenario.title}`,
      `[${new Date().toLocaleTimeString()}] Target category: ${selectedScenario.category}`,
      `[${new Date().toLocaleTimeString()}] Click "Run Live Simulation" to trace data through n8n nodes.`
    ]);
  }, [selectedScenario]);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveNodeIndex(0);
    setCompletedNodes([]);
    setExecutionLogs([
      `[${new Date().toLocaleTimeString()}] EXECUTION STARTED: Scenario "${selectedScenario.title}"`,
      `[${new Date().toLocaleTimeString()}] Node 0: Initializing trigger listener...`
    ]);

    const stepInterval = 1100;

    selectedScenario.nodes.forEach((node, index) => {
      setTimeout(() => {
        setActiveNodeIndex(index);
        setCompletedNodes((prev) => [...prev, index]);

        const timestamp = new Date().toLocaleTimeString();
        setExecutionLogs((prev) => [
          ...prev,
          `[${timestamp}] Node ${index + 1} (${node.label}): ${node.sublabel} [SUCCESS 200 OK - ${(Math.random() * 80 + 20).toFixed(1)}ms]`
        ]);

        if (index === selectedScenario.nodes.length - 1) {
          setTimeout(() => {
            setIsSimulating(false);
            setExecutionLogs((prev) => [
              ...prev,
              `[${new Date().toLocaleTimeString()}] PIPELINE COMPLETED: Total execution time 1.42s. All handoffs verified.`
            ]);
          }, 800);
        }
      }, (index + 1) * stepInterval);
    });
  };

  const getScenarioIcon = (id: string) => {
    switch (id) {
      case 'instagram-creator':
        return Instagram;
      case 'dental-clinic':
        return HeartPulse;
      case 'real-estate':
        return Building2;
      default:
        return Share2;
    }
  };

  return (
    <section id="simulator" className="py-24 bg-[#F6F4F8]/60 border-y border-[#E8E4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEF9] border border-[#9F7ACB]/30 text-xs font-semibold text-[#9F7ACB] mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>Interactive Workflow Canvas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17151B] tracking-tight mb-4">
            Experience n8n Automation{' '}
            <span className="text-[#9F7ACB]">In Real Time.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#68636D]">
            Watch how our intelligent pipelines eliminate manual bottlenecks. Select a scenario from our primary client verticals and run a simulated live execution.
          </p>
        </div>

        {/* Scenario Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {WORKFLOW_SCENARIOS.map((scenario) => {
            const Icon = getScenarioIcon(scenario.id);
            const isSelected = selectedScenario.id === scenario.id;

            return (
              <button
                key={scenario.id}
                onClick={() => setSelectedScenario(scenario)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#9F7ACB] text-white border-[#9F7ACB] shadow-premium scale-102'
                    : 'bg-white text-[#68636D] border-[#E8E4EE] hover:border-[#9F7ACB]/40 hover:text-[#17151B] shadow-subtle'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{scenario.category}</span>
              </button>
            );
          })}
        </div>

        {/* Main Simulator Canvas Container */}
        <div className="bg-white rounded-3xl border border-[#E8E4EE] shadow-elevated overflow-hidden">
          {/* Canvas Top Bar */}
          <div className="bg-[#FBFBF9] px-6 py-4 border-b border-[#E8E4EE] flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs text-[#9F7ACB] font-semibold uppercase tracking-wider">
                Active Scenario
              </div>
              <h3 className="text-base font-bold text-[#17151B]">
                {selectedScenario.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              {/* Tab Switcher */}
              <div className="flex rounded-xl bg-[#F6F4F8] p-1 border border-[#E8E4EE]">
                <button
                  onClick={() => setActiveTab('visual')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                    activeTab === 'visual'
                      ? 'bg-white text-[#17151B] shadow-xs'
                      : 'text-[#68636D] hover:text-[#17151B]'
                  }`}
                >
                  Visual Canvas
                </button>
                <button
                  onClick={() => setActiveTab('payload')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                    activeTab === 'payload'
                      ? 'bg-white text-[#17151B] shadow-xs'
                      : 'text-[#68636D] hover:text-[#17151B]'
                  }`}
                >
                  Sample JSON
                </button>
                <button
                  onClick={() => setActiveTab('logs')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                    activeTab === 'logs'
                      ? 'bg-white text-[#17151B] shadow-xs'
                      : 'text-[#68636D] hover:text-[#17151B]'
                  }`}
                >
                  Live Logs
                </button>
              </div>

              {/* Trigger Button */}
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-subtle ${
                  isSimulating
                    ? 'bg-[#B99FDF] text-white cursor-not-allowed'
                    : 'bg-[#9F7ACB] text-white hover:bg-[#8F6AB9] hover:shadow-premium'
                }`}
              >
                {isSimulating ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    <span>Processing Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Run Live Simulation</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Description line */}
          <div className="px-6 py-3 bg-[#F3EEF9]/40 border-b border-[#E8E4EE] text-xs text-[#68636D] flex items-center justify-between">
            <span className="leading-snug">
              <strong>Workflow Objective:</strong> {selectedScenario.description}
            </span>
            <span className="hidden md:inline font-mono text-[11px] text-[#9F7ACB] font-semibold">
              Frontend Simulation Mode
            </span>
          </div>

          {/* Canvas Content */}
          <div className="p-6 sm:p-10 min-h-[380px] flex flex-col justify-center bg-radial-pattern">
            {activeTab === 'visual' && (
              <div className="relative">
                {/* Horizontal Node Flow */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                  {selectedScenario.nodes.map((node, index) => {
                    const isActive = activeNodeIndex === index;
                    const isCompleted = completedNodes.includes(index);

                    return (
                      <div
                        key={node.id}
                        className={`relative rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                          isActive
                            ? 'bg-[#F3EEF9] border-[#9F7ACB] shadow-glow scale-102 ring-2 ring-[#9F7ACB]/30'
                            : isCompleted
                            ? 'bg-white border-[#9F7ACB]/40 shadow-sm'
                            : 'bg-white/70 border-[#E8E4EE] opacity-75'
                        }`}
                      >
                        {/* Step Index Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                              isActive
                                ? 'bg-[#9F7ACB] text-white'
                                : isCompleted
                                ? 'bg-[#F3EEF9] text-[#9F7ACB]'
                                : 'bg-[#F6F4F8] text-[#68636D]'
                            }`}
                          >
                            Node 0{index + 1}
                          </span>

                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-[#9F7ACB]" />
                          ) : isActive ? (
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9F7ACB] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#9F7ACB]"></span>
                            </span>
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-[#E8E4EE]" />
                          )}
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-[#17151B] mb-1">
                            {node.label}
                          </h4>
                          <div className="text-xs font-semibold text-[#9F7ACB] mb-2">
                            {node.sublabel}
                          </div>
                          <p className="text-xs text-[#68636D] leading-relaxed">
                            {node.details}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-[#E8E4EE] flex items-center justify-between text-[11px] font-mono">
                          <span className="text-[#68636D]">Type</span>
                          <span className="text-[#17151B] font-medium capitalize">
                            {node.type}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Status Result Summary Card */}
                <div className="mt-8 p-4 rounded-2xl bg-[#FBFBF9] border border-[#E8E4EE] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F3EEF9] flex items-center justify-center text-[#9F7ACB] shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#17151B]">
                        Automated Execution Outcome
                      </div>
                      <div className="text-xs text-[#68636D]">
                        {selectedScenario.resultSummary}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#9F7ACB] font-semibold bg-white px-3 py-1.5 rounded-xl border border-[#E8E4EE] shrink-0">
                    {completedNodes.length === selectedScenario.nodes.length
                      ? '✓ Execution Complete (1.4s)'
                      : isSimulating
                      ? 'Executing Steps...'
                      : 'Idle — Click Run'}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'payload' && (
              <div className="bg-[#17151B] text-[#F3EEF9] rounded-2xl p-5 font-mono text-xs overflow-x-auto shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-700 text-gray-400">
                  <span>webhook_inbound_payload.json</span>
                  <span className="text-[#9F7ACB]">HTTP POST 200</span>
                </div>
                <pre>{JSON.stringify(selectedScenario.samplePayload, null, 2)}</pre>
              </div>
            )}

            {activeTab === 'logs' && (
              <div className="bg-[#17151B] text-[#F3EEF9] rounded-2xl p-5 font-mono text-xs h-64 overflow-y-auto space-y-2 shadow-inner">
                <div className="text-gray-500 pb-2 border-b border-gray-800">
                  // n8n worker thread log stream
                </div>
                {executionLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`leading-relaxed ${
                      log.includes('SUCCESS')
                        ? 'text-emerald-400'
                        : log.includes('COMPLETED')
                        ? 'text-[#B99FDF] font-bold'
                        : log.includes('STARTED')
                        ? 'text-amber-300'
                        : 'text-gray-300'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
