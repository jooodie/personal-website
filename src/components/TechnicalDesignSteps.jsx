const steps = [
  {
    id: '0',
    label: 'Step 0',
    title: 'Input Data (Per Frame)',
    body: (
      <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-500 sm:text-[0.95rem]">
        <li>
          <span className="font-medium text-slate-700">
            Pre-existing Distance-based Gap Metrics:
          </span>{' '}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.8em] text-slate-800">
            GAP_DIST(t)
          </code>{' '}
          — original criteria for distance, 9-grid position, or shot
          reachability.
        </li>
        <li>
          <span className="font-medium text-slate-700">Center of Mass (CoM):</span>{' '}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.8em] text-slate-800">
            CoM_x(t)
          </code>
          ,{' '}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.8em] text-slate-800">
            CoM_y(t)
          </code>
          ,{' '}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.8em] text-slate-800">
            CoM_z(t)
          </code>
        </li>
        <li>
          <span className="font-medium text-slate-700">
            Left &amp; Right Foot Keypoints
          </span>
        </li>
      </ul>
    ),
  },
  {
    id: '1',
    label: 'Step 1',
    title: 'Base of Support (BoS) Midpoint Calculation',
    body: (
      <>
        <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-[0.95rem]">
          Calculated primarily on the horizontal plane (XZ) using the left and
          right foot positions:
        </p>
        <div className="mt-4 space-y-2 overflow-x-auto rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800">
          <p className="whitespace-nowrap">
            Mid<sub>x</sub>(t) = (L<sub>x</sub>(t) + R<sub>x</sub>(t)) / 2
          </p>
          <p className="whitespace-nowrap">
            Mid<sub>z</sub>(t) = (L<sub>z</sub>(t) + R<sub>z</sub>(t)) / 2
          </p>
        </div>
      </>
    ),
  },
  {
    id: '2',
    label: 'Step 2',
    title: 'Center of Mass (CoM) Displacement (Horizontal XZ Plane)',
    body: (
      <>
        <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-[0.95rem]">
          Extracted exclusively on the XZ plane to avoid artificial
          amplification of displacement metrics caused by vertical movements
          (such as squatting or recovering from a lunge):
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800">
          <p className="whitespace-nowrap">
            d<sub>com</sub>(t) = √[(CoM<sub>x</sub>(t) − Mid<sub>x</sub>(t))
            <sup>2</sup> + (CoM<sub>z</sub>(t) − Mid<sub>z</sub>(t))
            <sup>2</sup>]
          </p>
        </div>
        <p className="mt-3 rounded-lg border border-amber-200/70 bg-amber-50/60 px-3 py-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
          <span className="font-semibold text-slate-800">Note:</span> The Y-axis
          (squatting / extension) is deliberately excluded from the distance
          metric in this initial version; vertical analysis will be integrated
          into subsequent optimizations.
        </p>
      </>
    ),
  },
  {
    id: '2b',
    label: 'Step 2b',
    title: 'Displacement Direction (Angle Tagging Only)',
    body: (
      <>
        <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-[0.95rem]">
          Using the same directional vector{' '}
          <span className="font-mono text-slate-700">
            v = (CoM<sub>x</sub> − Mid<sub>x</sub>, CoM<sub>z</sub> − Mid
            <sub>z</sub>)
          </span>
          , the displacement angle is calculated as follows:
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800">
          <p className="whitespace-nowrap">
            θ(t) = atan2(CoM<sub>z</sub>(t) − Mid<sub>z</sub>(t), CoM
            <sub>x</sub>(t) − Mid<sub>x</sub>(t))
          </p>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-500 sm:text-[0.95rem]">
          <li>
            <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.8em] text-slate-800">
              d<sub>com</sub>
            </code>{' '}
            represents the{' '}
            <span className="font-medium text-slate-700">
              Displacement Magnitude
            </span>{' '}
            (used for threshold comparison).
          </li>
          <li>
            <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.8em] text-slate-800">
              θ
            </code>{' '}
            represents the{' '}
            <span className="font-medium text-slate-700">
              Displacement Direction
            </span>{' '}
            (used to tag movements as Left / Right / Front / Back for
            visualization and pattern analysis).
          </li>
        </ul>
        <p className="mt-3 rounded-lg border border-rose-200/70 bg-rose-50/50 px-3 py-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
          <span className="font-semibold text-slate-800">Caution:</span> The
          angle θ inherently does not contain information regarding the scale of
          displacement; therefore, it is not recommended as a primary threshold
          criterion in this baseline version.
        </p>
      </>
    ),
  },
]

export default function TechnicalDesignSteps() {
  return (
    <div className="mt-8">
      <ol className="relative mt-10 space-y-0">
        {/* Timeline axis */}
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-[15px] top-2 w-px bg-slate-300 sm:left-[19px]"
        />

        {steps.map((step, index) => (
          <li key={step.id} className="relative flex gap-4 pb-10 last:pb-0 sm:gap-6">
            <div className="relative z-10 flex shrink-0 flex-col items-center">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 bg-[#f7f5f1] font-display text-xs font-bold sm:h-10 sm:w-10 sm:text-sm ${
                  index === 0
                    ? 'border-slate-400 text-slate-600'
                    : 'border-teal-700 text-teal-800'
                }`}
              >
                {step.id}
              </span>
            </div>

            <div className="soft-card min-w-0 flex-1 p-4 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-800 sm:text-xs">
                {step.label}
              </p>
              <h4 className="mt-1.5 font-display text-base font-semibold leading-snug text-slate-800 sm:text-lg">
                {step.title}
              </h4>
              {step.body}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
