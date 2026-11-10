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
  title: "Self-serve shipping setup · Landon Skinner",
  description:
    "Turning an enterprise shipping platform into a self-serve flow that gets a small shipper to a first label in under five minutes.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Self-serve shipping setup",
    description:
      "A case study by Landon Skinner: getting a small shipper from sign-up to a first label in under five minutes.",
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const SHOTS: GalleryShot[] = [
  {
    src: "/work/self-serve/rates.webp",
    alt: "Choose a rate screen with the cheapest USPS rate preselected, cheapest and fastest tags, and a shipment summary",
    height: 1000,
    caption: "Choosing a rate.",
  },
  {
    src: "/work/self-serve/signup.webp",
    alt: "Sign-up page: a create-account form next to a short list of what happens after signing up",
    height: 1000,
    caption: "Sign-up, with a preview of what comes next.",
  },
  {
    src: "/work/self-serve/setup-checklist.webp",
    alt: "Home page setup checklist with four steps; connecting carriers is marked optional and printing a first label is locked",
    height: 1000,
    caption: "The setup checklist on a brand-new account.",
  },
  {
    src: "/work/self-serve/setup-bar.webp",
    alt: "Setup progress bar reading 0 of 4 done, with a link to add a ship-from address to unlock rates, above the Origins page",
    height: 304,
    caption: "The setup bar on the Origins page.",
  },
  {
    src: "/work/self-serve/ship-form.webp",
    alt: "New shipment form after pasting an address: six fields filled in, with an undo link and a postal database match",
    height: 1000,
    caption: "A pasted address, split into six fields.",
  },
  {
    src: "/work/self-serve/ready-to-print.webp",
    alt: "Shipment page showing a 4x6 shipping label ready to print, with order details beside it",
    height: 1096,
    caption: "A purchased label, ready to print.",
  },
  {
    src: "/work/self-serve/needs-attention.webp",
    alt: "Shipment page with a highlighted header reading Delivery needs your attention, above the carrier scan history",
    height: 1131,
    caption: "A shipment delayed by weather.",
  },
];

const CHECKLIST = [
  {
    title: "Add where you ship from",
    detail: "The warehouse or store address that goes on every label.",
  },
  {
    title: "Connect your carriers",
    detail:
      "Optional. Skip it and every label ships on each carrier’s standard rates.",
    optional: true,
  },
  {
    title: "Add a payment method",
    detail: "Nothing is charged until a label is bought.",
  },
  {
    title: "Print your first label",
    detail: "Unlocks once there’s an address and a payment method.",
  },
];

export default function SelfServeCaseStudy() {
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
          <Eyebrow>Case study · Product design &amp; frontend</Eyebrow>
          <h1 className="text-4xl sm:text-5xl font-bold text-copy text-balance leading-tight">
            Self-serve shipping setup for small shippers
          </h1>
          <p className="text-xl text-copy-light">
            Turning an enterprise shipping platform that needed hands-on
            onboarding into something a small business can set up alone and
            print a first label from in under five minutes.
          </p>
          <MetaList
            items={[
              ["Role", "Design and frontend"],
              ["Company", "Shipium"],
              ["Year", "2026"],
            ]}
          />
        </header>

        <Shot i={0} />

        <Section>
          <Eyebrow>The problem</Eyebrow>
          <H2>Enterprise setup didn’t fit small shippers</H2>
          <p>
            Shipium’s core product picks the best carrier and service for every
            shipment. For enterprise customers, getting there takes a lot of
            hand-holding: configuring many origins, many carrier accounts, and
            integrations with warehouse hardware and fulfillment centers, all
            tested before anything ships.
          </p>
          <p>
            Lower-volume shippers don’t need most of that, but they still had to
            wade through it to get anything working. The goal was a version of
            the product they could set up on their own, with no support call in
            between.
          </p>
          <Compare
            items={[
              [
                "Enterprise onboarding",
                "Many origins, many carrier accounts, hardware and fulfillment integrations, and a team guiding setup.",
              ],
              [
                "What a small shipper needs",
                "One origin, a way to get rates, a card on file, and a label.",
              ],
            ]}
          />
        </Section>

        <Section>
          <Eyebrow>Research</Eyebrow>
          <H2>Learning from Shippo and ShipStation</H2>
          <p>
            With no spec to work from, I started by studying how Shippo and
            ShipStation onboard small businesses. Both put a simple, guided
            sign-up first and keep everything else out of the way until it’s
            needed. I used that as the model for the overall flow.
          </p>
          <p>
            I also borrowed one specific pattern: pasting a full address and
            having it parsed into its fields automatically. For someone copying an address out of an order or an email, that saves retyping it one field at a time.
          </p>
        </Section>

        <Section>
          <Eyebrow>The flow</Eyebrow>
          <H2>Sign up, then four steps to a label</H2>
          <p>
            Sign-up asks for a name, company, email, and password, and says up
            front what comes next. After that, a short checklist on the home
            page is the whole setup.
          </p>
          <Shot i={1} />
          <ol className="rounded-3.5xl border-2 border-border bg-background overflow-hidden">
            {CHECKLIST.map((step, i) => (
              <li
                key={step.title}
                className={`grid grid-cols-[2.5rem_1fr] gap-3 px-5 py-4 border-t-2 border-border first:border-t-0 ${
                  i === CHECKLIST.length - 1 ? "bg-border" : ""
                }`}
              >
                <span className="font-bold tabular-nums text-copy-lighter">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <strong className="text-copy">{step.title}</strong>
                  {step.optional && (
                    <span className="ml-2 text-xs font-bold uppercase tracking-widest text-copy-lighter">
                      Optional
                    </span>
                  )}
                  <span className="block text-base">{step.detail}</span>
                </div>
              </li>
            ))}
          </ol>
          <Shot i={2} />
        </Section>

        <Section>
          <Eyebrow>Key decisions</Eyebrow>
          <H2>Deciding what belongs in setup</H2>
          <div className="flex flex-col gap-10">
            <Decision title="Keep setup to what’s required to ship">
              <p>
                Anything that wasn’t needed to print a first label moved out of
                the setup path. Users, shipment history, and extra origins all
                still exist, but people reach them after they’re shipping. A
                bar across the top of every setup page shows progress and names
                the one thing still blocking them, like “Add your ship-from
                address to unlock rates.”
              </p>
              <Shot i={3} />
            </Decision>

            <Decision title="Make connecting carriers optional">
              <p>
                Asking a small shipper to connect carrier accounts up front is a
                common place to stall. Every account can ship on each carrier’s
                standard rates from day one, so they can connect their own accounts later if they want to.
              </p>
            </Decision>

            <Decision title="Make the most repeated task the fastest">
              <p>
                Creating a label is what people do over and over. Pasting an
                address fills in every field it can find, says how many it
                filled, and offers an undo. Fields it couldn’t fill say “Not in the pasted text,” and the address is
                checked against the postal database before rates are fetched.
              </p>
              <Shot i={4} />
            </Decision>

            <Decision title="Hide complexity, but not what’s required">
              <p>
                At a previous job, an A/B test of progressive disclosure on lead
                forms showed that users disliked having required fields hidden
                from them. Here I kept every required step visible and used
                progressive disclosure only for choices most people don’t need.
                On the rates screen (shown at the top of this page), the cheapest
                option is preselected, the
                cheapest and fastest are labeled, and the rest sit behind “8
                more rates.” A summary of the shipment stays beside the rates so
                people can check it before they buy.
              </p>
            </Decision>

            <Decision title="Explain what’s happening">
              <p>
                Small shippers don’t have an account manager to ask, so the screens explain what’s going on as they go. “Nothing is charged until you pick a rate.” “Can’t be
                voided, already scanned by UPS.” Disabled buttons say what’s missing.
              </p>
            </Decision>
          </div>
        </Section>

        <Section>
          <Eyebrow>After the label</Eyebrow>
          <H2>After the label prints</H2>
          <p>
            Each shipment has a single page that follows it from label to
            doorstep. The header color and title change with its status, carrier
            scans read top to bottom with the newest first, and problems like a
            weather delay are called out at the top of the page.
          </p>
          <Shot i={5} />
          <Shot i={6} />
        </Section>

        <Section>
          <Eyebrow>Outcome</Eyebrow>
          <H2>A first label in under five minutes</H2>
          <p>
            The target I set was that a brand-new shipper could go from sign-up
            to a printed label in under five minutes. In internal testing, the
            flow hit that mark. The product hasn’t launched yet, so the next
            step is seeing whether real customers do the same.
          </p>
          {/* The outcome drawn as a shipping label: always black on white, in both themes */}
          <div
            role="img"
            aria-label="Shipping label graphic showing sign-up to first label in under five minutes"
            className="max-w-[26rem] rounded border-2 border-black bg-white text-black font-mono"
          >
            <div className="flex justify-between gap-3 px-4 py-2.5 text-sm">
              <span>FROM: SIGN-UP</span>
              <span>TO: FIRST LABEL</span>
            </div>
            <div className="border-t-2 border-black px-4 py-5 text-5xl font-bold leading-none">
              {"< 5 min"}
            </div>
            <div className="flex justify-between gap-3 px-4 py-2.5 text-sm border-t-2 border-black">
              <span>SETUP STEPS: 4</span>
              <span>SETUP: SELF-SERVE</span>
            </div>
            <div
              aria-hidden="true"
              className="h-12 mx-4 mb-4 bg-[repeating-linear-gradient(90deg,#000_0_2px,transparent_2px_4px,#000_4px_5px,transparent_5px_8px,#000_8px_11px,transparent_11px_12px)]"
            />
          </div>
        </Section>

        <NextCaseStudy
          href="/work/simulation-agent"
          title="Replacing a setup wizard with a simulation agent"
        />

        <footer className="pt-5 border-t-2 border-border text-sm text-copy-lighter">
          Screens use mock data; customer details and internal systems are left
          out.
        </footer>
      </main>
      </Gallery>
    </div>
  );
}
