import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CollectionCard from "../components/CollectionCard";
import JournalCard from "../components/JournalCard";
import FaqAccordion from "../components/FaqAccordion";
import ProcessStep from "../components/ProcessStep";
import {
  hero, founderStory, philosophy, collections,
  processSteps, bespoke, journalArticles,
  legacyStories, faqs, finalMessage, brand,
} from "../data/content";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, inView, scaleIn } from "../utils/motion";

/* ─── 1. Hero ─────────────────────────────────────────────────── */
function HeroSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh" }}
    >
      {/* Full-screen video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/bannerVideo.mp4"
        autoPlay muted loop playsInline preload="auto"
      />

      {/* Persistent vignette — always dark at bottom so heading reads */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "55%",
          background: "linear-gradient(to top, rgba(10,8,4,0.88) 0%, rgba(10,8,4,0.45) 50%, transparent 100%)",
        }}
      />

      {/* ── Bottom anchor — heading + hover reveal ── */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center pb-12 px-4">

        {/* Hover trigger wraps heading + reveal block */}
        <div
          className="w-full flex flex-col items-center cursor-default"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >

          {/* ── Reveal block: subheading + buttons, clip-path curtain ── */}
          <motion.div
            initial={false}
            animate={hovered ? "open" : "closed"}
            variants={{
              open:   { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
              closed: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
            }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center mb-6 overflow-hidden"
            style={{ willChange: "clip-path, opacity" }}
          >
            {/* Gold ornament line */}
            <motion.div
              initial={false}
              animate={hovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0.3, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="ornament mb-5"
              style={{ width: "min(640px, 80vw)", transformOrigin: "center" }}
            />

            {/* Subheading — character stagger */}
            <motion.p
              initial={false}
              animate={hovered ? { y: 0, opacity: 1, filter: "blur(0px)" } : { y: 12, opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="text-cream/80 text-center whitespace-nowrap mb-7"
              style={{ fontSize: "clamp(0.72rem, 1.4vw, 1rem)", letterSpacing: "0.04em" }}
            >
              {hero.subheading}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={false}
              animate={hovered ? { y: 0, opacity: 1 } : { y: 18, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
              className="flex flex-row items-center gap-4"
            >
              <Link to={hero.cta1.href} className="btn-primary">
                {hero.cta1.label}
                <ArrowUpRight size={14} />
              </Link>
              <Link to={hero.cta2.href} className="btn-ghost">
                {hero.cta2.label}
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Heading — always visible, nudges up on hover ── */}
          <motion.h1
            initial={false}
            animate={hovered ? { y: -6, color: "#D3af37" } : { y: 0, color: "#faf8ed" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-center leading-none whitespace-nowrap select-none"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(1.6rem, 5.2vw, 5.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            {hero.heading}
          </motion.h1>

          {/* Hover hint line under heading */}
          <motion.div
            initial={false}
            animate={hovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 h-px bg-gold/60"
            style={{ width: "min(480px, 60vw)", transformOrigin: "center" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── 2. Founder Story ────────────────────────────────────────── */
function FounderSection() {
  return (
    <section className="shell py-20 sm:py-28">
      <div className="frame grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">

        {/* Left: image stack */}
        <motion.div
          variants={fadeLeft}
          {...inView}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-luxury">
            <img
              src={founderStory.image}
              alt="Founder"
              className="w-full h-[520px] sm:h-[600px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 img-overlay-dark opacity-30" />
          </div>
          {/* Floating accent card */}
          <div className="absolute -bottom-6 -right-4 sm:-right-8 card-parchment rounded-2xl p-5 max-w-[200px] shadow-luxury">
            <p className="script-brand text-crimson text-2xl leading-tight">
              {founderStory.blessingTamil}
            </p>
            <p className="mt-2 text-xs tracking-widest uppercase text-forest/50">
              {founderStory.blessingEnglish}
            </p>
          </div>
        </motion.div>

        {/* Right: text */}
        <motion.div
          variants={fadeRight}
          {...inView}
          className="pt-4 lg:pt-8"
        >
          <p className="eyebrow text-crimson mb-4">{founderStory.eyebrow}</p>
          <h2 className="display-lg text-forest" style={{ textWrap: "balance" }}>
            {founderStory.heading}
          </h2>
          <div className="ornament my-7" />
          <div className="space-y-5">
            {founderStory.body.map((para, i) => (
              <p key={i} className="text-base leading-8 text-forest/70">
                {para}
              </p>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gold/20">
            <p className="script-brand text-crimson text-2xl">{founderStory.founder}</p>
            <p className="mt-1 text-xs tracking-widest uppercase text-forest/50">{founderStory.role}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 3. Philosophy ───────────────────────────────────────────── */
function PhilosophySection() {
  return (
    <section className="shell py-20 sm:py-28 bg-crimson relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 50%, rgba(211,175,55,0.2) 0%, transparent 45%), radial-gradient(circle at 85% 30%, rgba(250,248,237,0.06) 0%, transparent 40%)",
        }}
      />

      <div className="frame relative z-10">
        <SectionHeading
          eyebrow={philosophy.eyebrow}
          heading={philosophy.heading}
          body="Three principles that guide every piece we create — from the first sketch to the final polish."
          align="center"
          light
        />

        <div className="ornament mt-10 mb-12 opacity-30" />

        <motion.div
          variants={staggerContainer}
          {...inView}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {philosophy.pillars.map((pillar) => (
            <motion.article
              key={pillar.number}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 img-overlay-forest opacity-70" />
                <span className="absolute top-5 left-5 font-display text-gold/50 text-5xl leading-none">
                  {pillar.number}
                </span>
              </div>
              {/* Text */}
              <div className="p-6 bg-crimson/80 border border-gold/10 rounded-b-3xl -mt-1">
                <h3 className="font-display text-cream text-2xl">{pillar.title}</h3>
                <div className="ornament-sm mt-3 mb-3 opacity-60" />
                <p className="text-sm leading-7 text-cream/65">{pillar.body}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 4. Collections ──────────────────────────────────────────── */
function CollectionsSection() {
  return (
    <section className="shell py-20 sm:py-28">
      <div className="frame">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Signature Collections"
            heading="Five Worlds of Heirloom Jewelry"
            body="Each collection is a distinct visual and emotional universe — not a catalogue, but a story."
          />
          <Link
            to="/collections"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-crimson hover:text-forest transition-colors duration-200"
          >
            View All <ChevronRight size={13} />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          {...inView}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {collections.map((col, i) => (
            <CollectionCard
              key={col.id}
              collection={col}
              featured={i === 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 5. Process ──────────────────────────────────────────────── */
function ProcessSection() {
  return (
    <section className="shell py-20 sm:py-28 bg-cream-dark">
      <div className="frame">
        <SectionHeading
          eyebrow="The Making of an Heirloom"
          heading="The Making of an Heirloom"
          body="From the first conversation to the moment the piece passes into your hands — five stages of slow, deliberate craft."
          align="center"
        />

        <div className="ornament mt-10 mb-12" />

        <motion.div
          variants={staggerContainer}
          {...inView}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {processSteps.map((step) => (
            <ProcessStep key={step.step} step={step} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 6. Bespoke ──────────────────────────────────────────────── */
function BespokeSection() {
  return (
    <section className="shell py-20 sm:py-28">
      <div className="frame grid gap-10 lg:grid-cols-[1fr_1fr] items-center">

        {/* Image */}
        <motion.div
          variants={scaleIn}
          {...inView}
          className="relative overflow-hidden rounded-3xl shadow-luxury order-2 lg:order-1"
        >
          <img
            src={bespoke.image}
            alt="Bespoke jewelry"
            className="w-full h-[480px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 img-overlay-dark opacity-25" />
          {/* Floating quote */}
          <div className="absolute bottom-6 left-6 right-6 card-parchment rounded-2xl p-5">
            <p className="font-display italic text-forest text-xl leading-snug">
              "Some things are not made — they are continued."
            </p>
            <p className="mt-2 eyebrow text-crimson text-[0.6rem]">Murthy Ateliers</p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeRight}
          {...inView}
          className="order-1 lg:order-2"
        >
          <p className="eyebrow text-crimson mb-4">{bespoke.eyebrow}</p>
          <h2 className="display-lg text-forest" style={{ textWrap: "balance" }}>
            {bespoke.heading}
          </h2>
          <div className="ornament my-7" />
          <p className="text-base leading-8 text-forest/70">{bespoke.body}</p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to={bespoke.cta1.href} className="btn-primary">
              {bespoke.cta1.label}
              <ArrowUpRight size={14} />
            </Link>
            <a href={bespoke.cta2.href} className="btn-outline">
              {bespoke.cta2.label}
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-gold/20">
            {[
              { label: "Generations", value: "3+" },
              { label: "Heirloom Pieces", value: "500+" },
              { label: "Families Served", value: "200+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-crimson text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs tracking-widest uppercase text-forest/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 7. Journal ──────────────────────────────────────────────── */
function JournalSection() {
  const featured = journalArticles.slice(0, 4);
  return (
    <section className="shell py-20 sm:py-28 bg-crimson relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(211,175,55,0.2) 0%, transparent 40%)",
        }}
      />
      <div className="frame relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Notes From the Atelier"
            heading="Notes From the Atelier"
            body="Heritage, craft, and the stories behind the jewels — an editorial space for deeper reading."
            light
          />
          <Link
            to="/journal"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-gold/70 hover:text-gold transition-colors duration-200"
          >
            Read the Journal <ChevronRight size={13} />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          {...inView}
          className="grid gap-5 sm:grid-cols-2"
        >
          {featured.map((article, i) => (
            <JournalCard key={article.slug} article={article} featured={i === 0} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 8. Legacy Stories ───────────────────────────────────────── */
function LegacyStoriesSection() {
  return (
    <section className="shell py-20 sm:py-28">
      <div className="frame">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] items-start">
          <SectionHeading
            eyebrow="Stories That Stay"
            heading="Stories That Stay"
            body="Not reviews — emotional narratives from families whose jewels carry names, dates, and memory."
          />

          <motion.div
            variants={staggerContainer}
            {...inView}
            className="space-y-5"
          >
            {legacyStories.map((story, i) => (
              <motion.blockquote
                key={i}
                variants={staggerItem}
                className="card-parchment rounded-3xl p-7 sm:p-8"
              >
                <div className="text-gold/40 font-display text-6xl leading-none mb-2">"</div>
                <p className="font-display text-forest text-2xl sm:text-3xl leading-snug">
                  {story.quote}
                </p>
                <footer className="mt-5 flex items-center gap-3">
                  <div className="ornament-sm" />
                  <div>
                    <p className="eyebrow text-crimson text-[0.6rem]">{story.byline}</p>
                    <p className="text-xs text-forest/40 mt-0.5">{story.detail}</p>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── 9. FAQ ──────────────────────────────────────────────────── */
function FaqSection() {
  return (
    <section className="shell py-20 sm:py-28 bg-cream-dark">
      <div className="frame">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] items-start">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            heading="Frequently Asked Questions"
            body="Clarity and gentle guidance for private commissions, heirloom redesigns, and bespoke work."
          />
          <FaqAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

/* ─── 10. Final Emotional Section ─────────────────────────────── */
function FinalSection() {
  return (
    <section className="shell py-20 sm:py-28">
      <div className="frame">
        <motion.div
          variants={scaleIn}
          {...inView}
          className="relative overflow-hidden rounded-[2.5rem] shadow-deep"
        >
          <img
            src={finalMessage.image}
            alt="Heirloom jewelry"
            className="w-full h-[520px] sm:h-[600px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/50 to-forest/20" />

          <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-14">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p variants={staggerItem} className="eyebrow text-gold/70 mb-5">
                Final Note
              </motion.p>
              <motion.h2
                variants={staggerItem}
                className="display-lg text-cream max-w-3xl"
                style={{ textWrap: "balance" }}
              >
                {finalMessage.heading}
              </motion.h2>
              <div className="mt-6 space-y-1">
                {finalMessage.lines.map((line, i) => (
                  <motion.p
                    key={i}
                    variants={staggerItem}
                    className="font-display italic text-cream/80 text-xl sm:text-2xl"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
              <motion.div variants={staggerItem} className="mt-8">
                <span className="script-brand text-gold whitespace-nowrap" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.8rem)" }}>{brand.fullName}</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Home Page ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <FounderSection />
      <PhilosophySection />
      <CollectionsSection />
      <ProcessSection />
      <BespokeSection />
      <JournalSection />
      <LegacyStoriesSection />
      <FaqSection />
      <FinalSection />
    </>
  );
}
