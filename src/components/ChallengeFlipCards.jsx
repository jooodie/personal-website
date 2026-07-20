import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

/** Wrap words with **like this** to render bold. */
function renderWithBold(text) {
  if (!text) return null
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-stone-800">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

const CHALLENGE_CARDS = [
  {
    id: 'defense-convergence',
    title: 'Open-Ended Defense Convergence',
    summary:
      'Kinematic data alone struggles to converge into a universal definition of a "defensive gap" due to unobservable tactical variables.',
    back: 'While integrating center-of-mass (CoM) dynamics provided rich biomechanical insights, establishing a universal threshold proved highly challenging. First, **Biomechanical Heterogeneity** makes normalization difficult; variations in individual core strength mean that a CoM shift indicating instability for one athlete might represent a controlled recovery for another. Second, the **Dynamic Game Context** (such as the quality of one\'s own previous shot or the opponent\'s offensive/defensive posture) heavily dictates positioning, making pure geometric features strategically incomplete without factoring in match context.',
  },
  {
    id: 'occlusion-camera',
    title: 'Occlusion & Camera Geometry',
    summary:
      'Court environments introduce severe limb occlusions and perspective distortion that warp coordinate metrics.',
    back: 'High-speed badminton footage frequently causes tracking dropouts when limbs are occluded by the net or the player\'s own torso during rapid rotations. Furthermore, monocular video feeds suffer from **perspective bias** (near-to-camera vs. far-to-camera scale differences). Mitigating these spatial distortions required implementing strict **outlier-filtering** and **temporal consistency** constraints to ensure distance metrics remained stable.',
  },
  {
    id: 'noise-signal',
    title: 'Noise vs. Signal Dilemma',
    summary:
      'Finding the engineering balance between stabilizing chaotic pose tracking and retaining authentic athletic micro-movements.',
    back: 'Pose estimation in explosive sports is inherently noisy, demanding aggressive smoothing filters to present readable charts for coaching review. However, over-smoothing risks erasing critical, high-frequency athletic data, such as micro-adjustments in footwork and split-step split seconds. Balancing these denoise settings required repeated empirical tuning to stabilize trajectories without smoothing out the true timing of player recovery.',
  },
]

export default function ChallengeFlipCards() {
  return (
    <div className="mt-6">
      <p className="w-full text-[1.05rem] leading-relaxed text-stone-700">
      Deploying computer vision in elite sports transforms a standard video pipeline into a complex measurement and convergence challenge. The analytical workflow must successfully navigate a multi-layered technical hurdle: converting noisy monocular 3D tracking data into biomechanically valid signals. This required mitigating persistent limb occlusions and perspective geometry bias, balancing aggressive denoising filters against high-frequency footwork micro-movements, and ultimately contextualizing the metrics to account for individual core strength variations and dynamic tactical pressure.
      </p>

      <div className="mt-8 grid items-start gap-6 md:grid-cols-3">
        {CHALLENGE_CARDS.map((card) => (
          <FlipCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  )
}

function FlipCard({ title, summary, back }) {
  const [flipped, setFlipped] = useState(false)
  const [height, setHeight] = useState('auto')
  const frontRef = useRef(null)
  const backRef = useRef(null)

  const updateHeight = useCallback(() => {
    const active = flipped ? backRef.current : frontRef.current
    if (!active) return
    setHeight(active.scrollHeight)
  }, [flipped])

  useLayoutEffect(() => {
    updateHeight()
  }, [updateHeight, title, summary, back])

  useEffect(() => {
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [updateHeight])

  return (
    <div
      className="perspective-card transition-[height] duration-500 ease-in-out"
      style={{ height }}
    >
      <div className="h-full transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:shadow-stone-300/60">
        <button
          type="button"
          aria-pressed={flipped}
          onClick={() => setFlipped((prev) => !prev)}
          className={`preserve-3d relative w-full cursor-pointer rounded-2xl text-left outline-none transition-transform duration-500 ease-in-out focus-visible:ring-2 focus-visible:ring-teal-500/40 ${
            flipped ? 'rotate-y-180' : ''
          }`}
          style={{ height }}
        >
          <div
            ref={frontRef}
            className="backface-hidden absolute inset-x-0 top-0 rounded-2xl border border-slate-900/[0.08] bg-white p-5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03),0_0_30px_rgba(51,65,85,0.08)] transition-all duration-300"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-800">
                Challenge
              </span>
              <span className="text-[10px] text-stone-400">Flip →</span>
            </div>
            <h3 className="font-display text-base font-semibold leading-snug text-stone-900">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">{summary}</p>
          </div>

          <div
            ref={backRef}
            className="backface-hidden rotate-y-180 absolute inset-x-0 top-0 rounded-2xl border border-slate-900/[0.08] bg-white p-5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03),0_0_30px_rgba(51,65,85,0.08)] transition-all duration-300"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-800">
                Detail
              </span>
              <span className="text-[10px] text-stone-400">← Front</span>
            </div>
            <h3 className="font-display text-base font-semibold leading-snug text-stone-900">
              {title}
            </h3>
            {back ? (
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {renderWithBold(back)}
              </p>
            ) : (
              <div className="mt-3 min-h-[4.5rem]" aria-hidden="true" />
            )}
          </div>
        </button>
      </div>
    </div>
  )
}
