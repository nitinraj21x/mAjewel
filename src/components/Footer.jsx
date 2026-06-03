import { Link } from "react-router-dom";
import { Share2, MessageCircle, Mail, MapPin, Calendar, BookOpen, Gem } from "lucide-react";
import { brand, navigation } from "../data/content";

const connectLinks = [
  { icon: Share2, label: "Instagram",          href: `https://instagram.com/${brand.instagram}`, external: true },
  { icon: MessageCircle, label: "WhatsApp Inquiry", href: brand.whatsapp, external: true },
  { icon: Mail, label: "Email",                   href: `mailto:${brand.email}`, external: true },
  { icon: Calendar, label: "Appointment Booking", href: "/consultation", external: false },
  { icon: MapPin, label: "Atelier Location",      href: brand.mapLink, external: true },
  { icon: BookOpen, label: "Care Guide",          href: "/journal", external: false },
  { icon: Gem, label: "Custom Orders",            href: "/consultation", external: false },
];

export default function Footer() {
  return (
    <footer className="relative mt-0 border-t border-gold/20 bg-crimson overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(211,175,55,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(250,248,237,0.06) 0%, transparent 40%)",
        }}
      />

      <div className="shell relative z-10 pt-16 pb-8">
        <div className="frame">

          {/* Top grid */}
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">

            {/* Brand column */}
            <div className="space-y-6">
              <div>
                <span
                  className="script-brand text-gold block whitespace-nowrap"
                  style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", lineHeight: 1.1 }}
                >
                  {brand.fullName}
                </span>
              </div>
              <p className="text-sm leading-7 text-cream/60 max-w-xs">
                A contemporary heirloom jewellery house rooted in the legacy of D.K. Murthy &amp; E.A. Swamy Jewelers, Mylapore, Chennai. Built on generations of trust, craftsmanship, and emotional permanence.
              </p>
              <p className="eyebrow text-gold/70">{brand.signature}</p>
            </div>

            {/* Explore */}
            <div>
              <p className="eyebrow text-gold/60 mb-5">Explore</p>
              <div className="space-y-3">
                <Link to="/" className="block text-sm text-cream/60 hover:text-gold transition-colors duration-200">
                  Home
                </Link>
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-sm text-cream/60 hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <p className="eyebrow text-gold/60 mb-5">Connect</p>
              <div className="space-y-3">
                {connectLinks.map(({ icon: Icon, label, href, external }) =>
                  external ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 text-sm text-cream/60 hover:text-gold transition-colors duration-200"
                    >
                      <Icon size={14} className="shrink-0 text-gold/50" />
                      {label}
                    </a>
                  ) : (
                    <Link
                      key={label}
                      to={href}
                      className="flex items-center gap-2.5 text-sm text-cream/60 hover:text-gold transition-colors duration-200"
                    >
                      <Icon size={14} className="shrink-0 text-gold/50" />
                      {label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Ornament */}
          <div className="ornament my-10 opacity-30" />

          {/* Bottom bar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-cream/40">
            <p className="flex items-center gap-1.5">
              <MapPin size={11} className="text-gold/40" />
              {brand.address}
            </p>
            <p className="font-display italic text-cream/50">
              {brand.fullName} — Heirloom Jewels Crafted to Endure
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
