import { ArrowDown, ArrowRight } from 'lucide-react';
import { DiagramNode } from '../data/portfolioData';

interface ProjectArchitectureVisualProps {
  nodes: DiagramNode[];
  footer: string;
  projectTitle: string;
}

export function ProjectArchitectureVisual({
  nodes,
  footer,
  projectTitle,
}: ProjectArchitectureVisualProps) {
  return (
    <div
      className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5"
      role="region"
      aria-label={`Schéma d'architecture : ${projectTitle}`}
    >
      <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center lg:justify-between">
        {nodes.map((node, idx) => {
          const boxClasses =
            node.emphasis === 'primary'
              ? 'border-[#93C5FD] bg-[#EFF6FF] text-[#0F172A]'
              : node.emphasis === 'secondary'
                ? 'border-[#CBD5E1] bg-white text-[#0F172A]'
                : 'border-[#E2E8F0] bg-white text-[#0F172A]';

          const stepColor =
            node.emphasis === 'primary' ? 'text-[#1E40AF]' : 'text-[#64748B]';

          return (
            <div key={node.id} className="flex flex-col items-center lg:flex-1 lg:flex-row">
              <div
                className={`w-full rounded-md border px-3.5 py-3 text-left transition-colors ${boxClasses}`}
              >
                <p className={`font-mono text-[11px] font-semibold tabular-nums ${stepColor}`}>
                  0{idx + 1}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-[#0F172A]">
                  {node.label}
                </p>
                <p className="mt-1 text-xs leading-snug text-[#475569]">
                  {node.sublabel}
                </p>
              </div>

              {idx < nodes.length - 1 && (
                <div className="flex shrink-0 items-center justify-center py-1 text-[#94A3B8] lg:px-2 lg:py-0">
                  <ArrowDown className="h-4 w-4 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 lg:block" aria-hidden="true" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-3 border-t border-[#E2E8F0] pt-2.5 text-xs text-[#64748B]">
        {footer}
      </p>
    </div>
  );
}
