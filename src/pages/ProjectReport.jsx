import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import ChallengeFlipCards from '../components/ChallengeFlipCards'
import TechnicalDesignSteps from '../components/TechnicalDesignSteps'
import Latex from '../components/Latex'

const sections = [
  { id: 'introduction', label: '1. Introduction' },
  { id: 'objective', label: '2. Project Objective' },
  { id: 'technical-design', label: '3. Technical Design' },
  { id: 'algorithm', label: '4. Algorithm' },
  { id: 'behavioral-heatmap', label: '5. Behavioral Heatmap & Spatial Fusion' },
  { id: 'contribution', label: '6. My Contribution' },
  { id: 'challenges', label: '7. Challenges' },
  { id: 'learned', label: '8. What I Learned' },
  { id: 'conclusion', label: '9. Conclusion' },
]

export default function ProjectReport() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-stone-800">
      <div className="border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm transition-all duration-300 hover:border-teal-300 hover:text-teal-800 hover:shadow-md"
          >
            <ArrowLeft size={16} />
            <span>返回主頁 (Back to Home)</span>
          </Link>
          <p className="hidden text-xs font-medium uppercase tracking-[0.18em] text-stone-400 sm:block">
            Project Report
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-5xl px-6 pb-24 pt-12 sm:pt-16">
        <header className="mb-14 border-b border-stone-300 pb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-teal-800">
            Technical Report · Computer Vision &amp; Sports Science
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-[2.6rem]">
            Project Report: AI-Driven Badminton Defense Analysis using Pose
            Estimation
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-600">
            <p>
              <span className="font-medium text-stone-800">Author:</span> Yung-Ling
              Chu
            </p>
            <p>
              <span className="font-medium text-stone-800">Date:</span>{' '}
              January 2026 · Defensive gap detection · CoM offset analysis
            </p>
          </div>
        </header>

        <nav
          aria-label="Report sections"
          className="mb-14 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Table of Contents
          </p>
          <ol className="grid gap-2 sm:grid-cols-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block rounded-lg px-3 py-2 text-sm text-stone-600 transition-colors hover:bg-stone-50 hover:text-teal-800"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-16">
          <section id="introduction" className="scroll-mt-24">
            <SectionHeading number="01" title="Introduction" />
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_0.85fr]">
              <div className="space-y-4 text-[1.05rem] leading-relaxed text-stone-700">
                <p>
                  Defensive quality in badminton is often described qualitatively—
                  “good recovery,” “late on the shuttle,” or “balanced footwork”—
                  yet these impressions are difficult to quantify, compare across
                  sessions, or translate into actionable coaching cues. As
                  competitive play becomes faster and more data-driven, athletes
                  and coaches need objective signals that capture how a player
                  repositions after a stroke, how center of mass (CoM) shifts under
                  pressure, and whether distance-to-shuttle relationships remain
                  controllable across a rally.
                </p>
                <p>
                  This project explores an AI-assisted pipeline for badminton
                  defense analysis using human pose estimation. By extracting
                  skeletal keypoints from match or training footage, we estimate
                  body configuration over time and derive biomechanical proxies—
                  notably inter-joint distances and CoM displacement—that help
                  characterize defensive readiness and recovery patterns.
                </p>
              </div>
              <aside className="rounded-2xl border border-teal-100 bg-teal-50/50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-800">
                  Research Focus
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  Bridge sports science intuition with computer vision: turn raw
                  video into interpretable defensive metrics for coaching and
                  self-review.
                </p>
              </aside>
            </div>
          </section>

          <section id="objective" className="scroll-mt-24">
            <SectionHeading number="02" title="Project Objective" />
            <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-stone-700">
              <p>
                The primary objective is to build an analysis workflow that
                converts pose sequences into defensive indicators suitable for
                post-session review. Rather than classifying strokes alone, the
                system emphasizes continuous kinematic descriptors that reflect
                how a player prepares for, absorbs, and recovers from attacking
                pressure.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <ObjectiveCard
                title="Distance-based metrics"
                body="Compute spatial relationships among keypoints (e.g., stance width, reach envelopes, and relative distances between hips, knees, and ankles) to approximate base stability and readiness to move. Distance indicators help quantify whether the athlete maintains an effective defensive stance across successive exchanges."
              />
              <ObjectiveCard
                title="Center of Mass (CoM) displacement"
                body="Estimate CoM trajectories from weighted body segments derived from pose landmarks. Analyzing CoM displacement magnitude, direction, and timing reveals how balance shifts during defensive transitions—highlighting inefficient sway, delayed recovery, or controlled loading into the next movement."
              />
            </div>
            <p className="mt-8 text-[1.05rem] leading-relaxed text-stone-700">
              Combined, these signals aim to support coaches and athletes in
              comparing sessions, diagnosing recurring defensive weaknesses, and
              guiding targeted footwork or balance drills with clearer evidence
              than video inspection alone.
            </p>
          </section>

          <section id="technical-design" className="scroll-mt-24">
            <SectionHeading number="03" title="Technical Design" />
            <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-slate-500">
              <p>
                The technical stack centers on MediaPipe Pose for 3D world
                landmark extraction, followed by post-processing that cleans
                trajectories, estimates CoM using segmental weighting heuristics,
                and computes frame-wise distance features. To focus strictly on
                lateral and forward/backward court coverage, the 3D CoM is
                projected onto the horizontal ground plane (X-Z plane). A
                PyQt-based visualization layer presents time-series charts and
                overlays so analysts can inspect both the raw skeleton and
                derived metrics in the same review workflow.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-slate-800">
                  3D Pose Estimation Layer
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-500">
                  <li>
                    · MediaPipe Pose 3D landmarks provide a consistent skeletal graph (including depth estimation) 
                    across frames for stance and balance analysis.
                  </li>
                  <li>
                    · Confidence thresholds and temporal smoothing reduce jitter
                    that would otherwise inflate CoM noise.
                  </li>
                  <li>
                    · Skeleton topology informs which joints contribute most to
                    lower-body readiness and recovery.
                  </li>
                </ul>

                <figure className="mt-5 overflow-hidden rounded-xl border border-stone-100 bg-stone-50">
                  <div className="flex justify-center px-3 py-3">
                    <img
                      src="/images/mediapipe-pose.png"
                      alt="MediaPipe Pose skeleton and body-segment weighting diagram"
                      className="max-h-52 w-auto max-w-full object-contain"
                    />
                  </div>
                  <figcaption className="border-t border-stone-100 bg-white px-3 py-2.5 text-[11px] leading-relaxed text-slate-500 sm:text-xs">
                    <span className="font-medium text-slate-800">
                      Figure 1.
                    </span>{' '}
                    MediaPipe human pose skeleton with segmental structure used as
                    the basis for landmark tracking and CoM weighting.
                    <span className="mt-1 block text-[10px] text-slate-400 sm:text-[11px]">
                      Data source:{' '}
                      <a
                        href="https://developers.google.com/edge/mediapipe/solutions/vision/pose_landmarker#pose_landmarker_model"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-teal-800 underline decoration-teal-800/30 underline-offset-2 transition-colors hover:text-teal-900"
                      >
                        MediaPipe Pose Landmarker — Google AI Edge
                      </a>
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-slate-800">
                  Biomechanics Analytics & Validation
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-500">
                  <li>
                    · Distance metrics summarize stance geometry over rally
                    segments.
                  </li>
                  <li>
                    · CoM displacement time series (calculated on the X-Z plane) highlight delayed recovery or 
                    excessive lateral sway while ignoring vertical axis noise (e.g., jumping or squatting).
                  </li>
                  <li>
                    · Algorithm alignment cross-validates MediaPipe-derived trajectories against Vicon's gold-standard CoM calculation models.
                  </li>
                </ul>

                <figure className="mt-5 overflow-hidden rounded-xl border border-stone-100 bg-stone-50">
                  <div className="flex justify-center px-3 py-3">
                    <img
                      src="/images/gold-standard.png"
                      alt="Vicon segmental body-mass model table with CoM ratios and mass fractions"
                      className="max-h-52 w-auto max-w-full object-contain"
                    />
                  </div>
                  <figcaption className="border-t border-stone-100 bg-white px-3 py-2.5 text-[11px] leading-relaxed text-slate-500 sm:text-xs">
                    <span className="font-medium text-slate-800">
                      Figure 2.
                    </span>{' '}
                    Segmental CoM ratios and mass fractions adapted for
                    whole-body CoM estimation and algorithm validation.
                    <span className="mt-1 block text-[10px] text-slate-400 sm:text-[11px]">
                      Data source:{' '}
                      <a
                        href="https://help.vicon.com/space/Nexus216/11607066/Kinetic+modeling"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-teal-800 underline decoration-teal-800/30 underline-offset-2 transition-colors hover:text-teal-900"
                      >
                        Vicon Nexus — Kinetic modeling
                      </a>
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>

            <p className="mt-8 text-[1.05rem] leading-relaxed text-slate-500">
              To synthesize these vision-derived metrics into actionable coaching
              insights, the framework executes a deterministic 9-step pipeline
              that standardizes, filters, and correlates physical tracking data
              to map compound defensive gaps.
            </p>
          </section>

          <section id="algorithm" className="scroll-mt-24">
            <SectionHeading number="04" title="Algorithm" />
            <TechnicalDesignSteps />

            <div className="mt-6 flex justify-end">
              <a
                href="https://hackmd.io/@Jooo-notes/BJSnDk-BWe"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-teal-300 hover:text-teal-800 hover:shadow-md"
              >
                Read Full Engineering Logs (ZH)
                <ArrowUpRight size={14} />
              </a>
            </div>
          </section>

          <section id="behavioral-heatmap" className="scroll-mt-24">
            <SectionHeading
              number="05"
              title="Behavioral Heatmap & Spatial Fusion"
            />

            <div className="mt-8">
              <p className="text-[1.05rem] leading-relaxed tracking-wide text-slate-600">
                To validate the joint mechanics of spatial reachability and body
                balance, I engineered an interactive simulation dashboard using
                PyQt and Matplotlib. This interface visualizes how a
                player&apos;s current positioning and dynamic center of mass
                (CoM) trajectory interact to produce a compound defensive risk
                profile across a 25-cell court grid.
              </p>

              <ul className="mt-6 space-y-5 text-sm leading-relaxed tracking-wide text-slate-600 sm:text-[0.95rem]">
                <li>
                  <span className="font-semibold tracking-normal text-slate-800">
                    Gap (Distance) Scores:
                  </span>{' '}
                  Computes the baseline spatial vulnerability based on Euclidean
                  distance (
                  <Latex tex="d = \sqrt{\Delta x^2 + \Delta z^2}" />) from the
                  player&apos;s current coordinate (e.g., cell 13) to surrounding
                  court quadrants.
                </li>
                <li>
                  <span className="font-semibold tracking-normal text-slate-800">
                    Center of Mass Offset:
                  </span>{' '}
                  Models directional instability. When a player&apos;s CoM shifts
                  along a specific vector (e.g., <Latex tex="45^\circ" /> toward
                  cell 9), a directional penalty is applied, simulating the high
                  cognitive and physical cost of reversing momentum to cover
                  opposite corners.
                </li>
                <li>
                  <span className="font-semibold tracking-normal text-slate-800">
                    Combined Analysis (Weighted Fusion):
                  </span>{' '}
                  Executes a customizable synthesis layer:{' '}
                  <Latex
                    display
                    className="my-3 block overflow-x-auto rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-slate-800"
                    tex="\text{Combined Score} = (w_{gap} \times \text{Gap Score}) + (w_{com} \times \text{CoM Offset})"
                  />
                  This simulates prospective "Defensive Blindspots" under various scenario parameters, demonstrating how an unbalanced CoM creates severe tactical vulnerabilities even in nearby court cells.
                </li>
              </ul>

              <figure className="mt-8">
                <div className="overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-300/40">
                  <img
                    src="/images/Badminton-Movement-Analysis-Tool.png"
                    alt="PyQt simulation dashboard for defensive risk heatmap fusion"
                    className="w-full object-contain"
                  />
                </div>
                <figcaption className="mt-3 text-xs leading-relaxed tracking-wide text-slate-500 sm:text-sm">
                  <span className="font-semibold text-slate-800">
                    Figure 3.
                  </span>{' '}
                  PyQt simulation dashboard depicting the weighted fusion of
                  geometric court reachability (left) and directional CoM
                  displacement vectors (center) into a final compound defensive
                  risk matrix (right).
                </figcaption>
              </figure>
            </div>
          </section>

          <section id="contribution" className="scroll-mt-24">
            <SectionHeading number="06" title="My Contribution" />
            <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-stone-700">
              <p>
                Leveraging my competitive badminton background, I spearheaded both the domain framing 
                and the technical implementation of this project. On the domain side, I translated defensive 
                coaching intuition into measurable constructs—defining exactly how joint relationships and 
                CoM behaviors should be formalized to evaluate player recovery after deep clears, drives, 
                or smash pressure.
              </p>
              <p>
                On the engineering side, I architected and developed the complete feature pipeline that 
                processes raw pose landmarks into horizontal-plane distance indicators and CoM displacement 
                summaries. I also designed and built the PyQt visualization layer, iteratively refining the charts 
                so that data spikes and troughs map cleanly to defensive phases that coaches care about. 
                To validate the system, I evaluated early outputs against real training footage; 
                through discussions with my advisor and team members, I identified and mitigated critical tracking 
                failure modes, ensuring the outlier-filtering thresholds effectively handled net occlusions 
                and perspective bias without over-smoothing meaningful micro-adjustments in footwork.
              </p>
            </div>
          </section>

          <section id="challenges" className="scroll-mt-24">
            <SectionHeading number="07" title="Challenges" />
            <ChallengeFlipCards />
          </section>

          <section id="learned" className="scroll-mt-24">
            <SectionHeading number="08" title="What I Learned" />
            <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-stone-700">
              <p>
                This project reinforced that sports analytics is not only about building accurate 
                models, but about creating tools that are useful in real coaching environments. 
                I learned that pose estimation is only the starting point—the real challenge is 
                transforming noisy motion data into information that coaches and athletes can easily 
                understand and apply.  
              </p>
              <p>
                Beyond improving my technical skills with MediaPipe Pose, temporal data processing, 
                and PyQt development, I gained a deeper appreciation for the gap between research 
                prototypes and real-world deployment. Building an AI system that works outside 
                the lab requires continuous validation, iterative design, and close collaboration 
                with domain experts. A technically impressive metric has little value if it cannot 
                support better decisions on the court.
              </p>
              <p>
                One of the biggest lessons from this project was realizing that successful AI systems 
                are designed around people rather than algorithms. As someone with a coaching background, 
                I learned to constantly bridge technical implementation with practical usability. 
                Instead of asking "Can we calculate this?", I began asking "Would this actually help 
                an athlete improve?" That shift in perspective fundamentally changed how I approach 
                engineering problems.
              </p>
            </div>
          </section>

          <section id="conclusion" className="scroll-mt-24">
            <SectionHeading number="09" title="Conclusion" />
            <div className="mt-6 rounded-2xl border border-stone-300 bg-white p-8 shadow-sm sm:p-10">
              <div className="space-y-4 text-[1.05rem] leading-relaxed text-stone-700">
                <p>
                  This project demonstrates a practical path from 3D pose estimation to defense-oriented 
                  badminton analysis. By combining MediaPipe 3D landmarks with a VICON-inspired segmental 
                  mass model, CoM offset tracking on the horizontal ground plane, and temporal continuity 
                  constraints, the system converts video into interpretable signals for defensive gap detection 
                  and coaching review.
                </p>
                <p>
                  Designing this workflow helped me better understand the relationship between 
                  computational methods and real-world problems. It also further motivated me to 
                  continue studying computer science in a way that allows me to deepen my technical 
                  knowledge while building systems with practical value.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16 flex justify-center border-t border-stone-300 pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 shadow-sm transition-all duration-300 hover:border-teal-300 hover:text-teal-800 hover:shadow-md"
          >
            <ArrowLeft size={16} />
            返回主頁 (Back to Home)
          </Link>
        </div>
      </article>
    </div>
  )
}

function SectionHeading({ number, title }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-stone-200 pb-3">
      <span className="font-display text-sm font-semibold tracking-[0.2em] text-teal-800">
        {number}
      </span>
      <h2 className="font-display text-2xl font-bold text-stone-900 sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}

function ObjectiveCard({ title, body }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-stone-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">{body}</p>
    </div>
  )
}

