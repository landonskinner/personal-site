import type { Metadata } from "next";
import Link from "next/link";
import PageButtons from "../../components/page-buttons";
import {
  Gallery,
  Shot,
  type GalleryShot,
} from "../../components/case-study-gallery";
import {
  Compare,
  Decision,
  Eyebrow,
  H2,
  MetaList,
  NextCaseStudy,
  Section,
} from "../../components/case-study";

export const metadata: Metadata = {
  title: "Simulation agent · Landon Skinner",
  description:
    "Replacing a seven-step simulation setup wizard with a chat agent that only asks what a run needs.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Replacing a setup wizard with a simulation agent",
    description:
      "A case study by Landon Skinner: a chat agent with small widgets for the answers that have structure.",
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const W = 838;
const SHOTS: GalleryShot[] = [
  {
    src: "/work/simulation-agent/summary-hero.webp",
    width: W,
    height: 406,
    alt: "Simulation summary card listing engine, name, shipment source, file, time-in-transit setting and shipment count, with Create simulation and Edit buttons",
    caption: "The summary shown before a simulation is created.",
  },
  {
    src: "/work/simulation-agent/empty-state.webp",
    width: W,
    height: 740,
    alt: "Empty chat with the heading Configure a simulation, conversationally, and four suggested starting prompts",
    caption: "The starting screen, with suggested prompts.",
  },
  {
    src: "/work/simulation-agent/engine-choice.webp",
    width: W,
    height: 473,
    alt: "Agent asks which simulation engine to use, with two option cards: Legacy runner and New runner marked Recommended",
    caption: "Choosing an engine.",
  },
  {
    src: "/work/simulation-agent/namespace-picker.webp",
    width: W,
    height: 721,
    alt: "Agent asks whether to run against production or a sandbox, with three sandbox options and a Production option tagged Live",
    caption: "Choosing where to run: a sandbox or live production.",
  },
  {
    src: "/work/simulation-agent/overrides.webp",
    width: W,
    height: 389,
    alt: "Time-in-transit widget with source preferences tapped in priority order, a weekends toggle, a four-way setting, and Apply overrides or Keep partner defaults buttons",
    caption:
      "Time-in-transit settings in a single widget.",
  },
  {
    src: "/work/simulation-agent/file-picker.webp",
    width: W,
    height: 527,
    alt: "File picker listing uploaded shipment files with row counts, dates and a Valid badge, plus Select files and Upload new buttons",
    caption: "Choosing an uploaded file.",
  },
  {
    src: "/work/simulation-agent/dead-end.webp",
    width: W,
    height: 529,
    alt: "Agent explains that the chosen date range returned zero shipments and offers two ways forward",
    caption: "A date range with no shipments, and the options the agent offers.",
  },
];

export default function SimulationAgentCaseStudy() {
  return (
    <div className="relative min-h-screen bg-foreground text-copy-light text-lg leading-relaxed">
      <PageButtons className="-mb-[118px] sm:-mb-[102px]" />
      <Gallery shots={SHOTS}>
        <main className="mx-auto max-w-[760px] px-4 sm:px-8 py-14 sm:py-20 flex flex-col gap-14">
          <Link
            href="/"
            className="text-sm text-copy-lighter hover:text-copy-light transition-colors duration-300 w-fit"
          >
            ← Landon Skinner
          </Link>

          <header className="flex flex-col gap-5">
            <Eyebrow>Case study · Interaction design &amp; full stack</Eyebrow>
            <h1 className="text-4xl sm:text-5xl font-bold text-copy text-balance leading-tight">
              Replacing a setup wizard with a simulation agent
            </h1>
            <p className="text-xl text-copy-light">
              Setting up a shipment simulation meant a six- or seven-step
              wizard full of advanced inputs most runs didn’t need. I designed
              and built a chat agent that asks only what a run needs, with
              small widgets for the answers that have structure.
            </p>
            <MetaList
              items={[
                ["Role", "Design, frontend and backend"],
                ["Company", "Shipium"],
                ["Year", "2026"],
              ]}
            />
          </header>

          <Shot i={0} />

          <Section>
            <Eyebrow>The problem</Eyebrow>
            <H2>The wizard asked for everything</H2>
            <p>
              A simulation answers one question: if a shipper ran their
              shipments through Shipium with a given set of settings, what would
              the carrier choices, costs and delivery times look like? Reps run
              them for prospects to show what Shipium would save them, and for
              existing customers to test a configuration change before it goes
              live.
            </p>
            <p>
              Each run takes a set of shipments, either a recent range of real
              ones or an uploaded file, plus the settings to test. The people
              setting them up were mostly customer service reps and managers,
              with some outside users.
            </p>
            <p>
              The wizard asked for everything up front, across six or seven
              screens, including advanced settings most simulations left at
              their defaults. Someone who wanted a quick run still had to step
              through all of it.
            </p>
            <Compare
              items={[
                [
                  "The wizard",
                  "Six or seven screens, with every advanced input shown to everyone.",
                ],
                [
                  "The agent",
                  "One conversation that asks for what’s needed and offers defaults for the rest.",
                ],
              ]}
            />
          </Section>

          <Section>
            <Eyebrow>The approach</Eyebrow>
            <H2>One question at a time, with defaults</H2>
            <p>
              The agent walks through setup one question at a time and offers a
              sensible default wherever there is one: a recommended engine, the
              last 30 days of shipments, the partner’s existing transit
              settings. Most runs just accept them. The advanced settings are
              still there for anyone who asks for them.
            </p>
            <p>
              The starting screen suggests a few prompts so it’s clear what the agent can do before typing anything.
            </p>
            <Shot i={1} />
          </Section>

          <Section>
            <Eyebrow>Key decisions</Eyebrow>
            <H2>When to use a widget, and when to just type</H2>
            <p>
              The risk with widgets in a chat is rebuilding the wizard inside
              it. I used one rule to decide: if the answer has structure, it
              gets a widget. That means several values at once, or a choice
              between options that each need explaining. A simulation’s name and
              any free-form request stay as typed text.
            </p>
            <div className="flex flex-col gap-10 pt-4">
              <Decision title="Choices that need explaining get option cards">
                <p>
                  Picking an engine or an environment depends on details most
                  people don’t carry around in their heads. (An environment is
                  either live production or a namespace: a sandbox copy of a
                  customer’s setup that’s safe to experiment on.) Each option says
                  what it does in a line, the agent marks the one it
                  recommends, and environments are tagged Sandbox or Live which makes production easy to tell apart.
                </p>
                <Shot i={2} />
                <Shot i={3} />
              </Decision>

              <Decision title="Several values at once get a single widget">
                <p>
                  Time-in-transit is how long a delivery is expected to take,
                  and it drives which carrier and service get picked. Its
                  settings are three related choices: which data
                  sources to trust and in what order, whether weekends count,
                  and how aggressive the estimate should be. Typed out, that’s a long sentence that’s easy to get wrong, for both the person and the agent. The widget turns it into a few taps, with a button to keep the partner’s defaults.
                </p>
                <Shot i={4} />
              </Decision>

              <Decision title="Show the details that tell files apart">
                <p>
                  Picking an uploaded file means telling apart similar names.
                  The picker shows each file’s row count, upload date and
                  whether it passed validation, with an option to upload a new
                  one right there.
                </p>
                <Shot i={5} />
              </Decision>

              <Decision title="Confirm before anything runs">
                <p>
                  The last step is a summary card of every setting, shown at
                  the top of this page, with buttons to create the simulation
                  or go back and edit. It’s the same idea as the shipment
                  summary next to the rates in{" "}
                  <Link
                    href="/work/self-serve"
                    className="underline decoration-copy-lighter underline-offset-4 hover:text-copy"
                  >
                    my other case study
                  </Link>
                  .
                </p>
              </Decision>

              <Decision title="Explain dead ends">
                <p>
                  If a choice leads nowhere, like a date range with no
                  shipments, the agent says what happened and offers ways forward.
                </p>
                <Shot i={6} />
              </Decision>
            </div>
          </Section>

          <Section>
            <Eyebrow>Building it</Eyebrow>
            <H2>My role</H2>
            <p>
              I designed the conversation and the widgets, built the frontend
              agent, and implemented the MCP tooling the agent uses and the
              backend behind it.
            </p>
          </Section>

          <NextCaseStudy
            href="/work/self-serve"
            title="Self-serve shipping setup for small shippers"
          />

          <footer className="pt-5 border-t-2 border-border text-sm text-copy-lighter">
            Screens use test data; customer details and internal systems are
            left out.
          </footer>
        </main>
      </Gallery>
    </div>
  );
}
