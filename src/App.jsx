import React, { useId, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Clock3,
  CreditCard,
  FileCheck2,
  FileText,
  Gift,
  Heart,
  HeartPulse,
  Image,
  Landmark,
  Mail,
  MapPinned,
  Menu,
  MessageCircle,
  Package,
  Palette,
  Pen,
  PhoneCall,
  Printer,
  Receipt,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sprout,
  Star,
  Tag,
  Ticket,
  TrendingUp,
  X,
} from 'lucide-react';

const whatsappUrl =
  'https://wa.me/918082590076?text=Hello%20Kashmir%20Expertise%2C%20I%20want%20to%20book%20a%20service.%20Please%20share%20availability.';

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Palpora+Sonwar+Srinagar+190001';

const services = [
  // CSC / Government Services
  { title: 'Aadhaar Services', text: 'Enrollment and update support for identity-related needs.', icon: BadgeCheck },
  { title: 'PAN Card Services', text: 'Application help and document guidance for PAN services.', icon: CreditCard },
  { title: 'Banking & AEPS', text: 'Access basic banking workflows and Aadhaar-enabled transactions.', icon: Banknote },
  { title: 'Insurance Services', text: 'Assistance for common insurance access and support requests.', icon: ShieldCheck },
  { title: 'Utility Bill Payments', text: 'Bill payment help for everyday household and utility needs.', icon: Receipt },
  { title: 'PM-Kisan Registration', text: 'Registration support for eligible farmers and beneficiaries.', icon: Sprout },
  { title: 'Ayushman Bharat Services', text: 'Guidance around healthcare scheme access and related support.', icon: HeartPulse },
  { title: 'Passport Assistance', text: 'Basic help with passport process preparation and requests.', icon: Ticket },
  { title: 'Govt Certificate Services', text: 'Support for certificate applications and document workflows.', icon: FileCheck2 },
  { title: 'Mobile Recharge & DTH', text: 'Fast mobile recharge and DTH support from one counter.', icon: Smartphone },
  // Printing Services
  { title: 'Digital Printing', text: 'High-quality digital printing for all your personal and business needs.', icon: Printer },
  { title: 'Bill Book Printing', text: 'A5 size bill books in 1+1, 1+2, and 1+3 formats.', icon: BookOpen },
  { title: 'Letterhead Printing', text: 'Professional letterhead printing for offices and businesses.', icon: FileText },
  { title: 'Visiting Card Printing', text: 'Premium visiting card design and printing services.', icon: CreditCard },
  { title: 'Plastic Card Printing', text: 'Durable plastic card printing for ID cards and more.', icon: CreditCard },
  { title: 'Stamp Making', text: 'Custom stamp making for official and business use.', icon: Pen },
  // Advertising Services
  { title: 'Outdoor Advertising', text: 'Strategic outdoor advertising solutions for brand visibility.', icon: Image },
  { title: 'Advertising Agency', text: 'Full-service advertising agency support for your campaigns.', icon: Sparkles },
  { title: 'Sign Board Design & Installation', text: 'Custom sign board design, fabrication, and installation.', icon: Palette },
  { title: 'Flex Banner Design & Printing', text: 'Eye-catching flex banner design and large-format printing.', icon: Image },
  { title: 'Acrylic Board Design & Manufacturing', text: 'Premium acrylic board design and custom manufacturing.', icon: Package },
  // Branding & Design
  { title: 'Branding', text: 'Complete branding solutions to build your identity.', icon: Palette },
  { title: 'Graphic Designing', text: 'Creative graphic design for print and digital media.', icon: Pen },
  { title: 'Marketing Strategy', text: 'Strategic marketing planning to grow your business.', icon: TrendingUp },
  // Event & Gift Services
  { title: 'Event Printing & Branding', text: 'Complete event-related printing and branding solutions.', icon: Sparkles },
  { title: 'Customized Gifts', text: 'Personalized gifts including photo frames, prayer mats, and more.', icon: Gift },
  { title: 'Customized Photo Frames', text: 'Beautiful custom photo frames for memories and occasions.', icon: Heart },
  { title: 'Prayer / Velvet Mats', text: 'Customized prayer and velvet mats with personal designs.', icon: Heart },
  { title: 'Decorative Name Tags & Hangings', text: 'Personalized name tags, hangings, and decorative items.', icon: Tag },
  { title: 'Printed Labels & Stickers', text: 'Custom printed labels and stickers for all purposes.', icon: Ticket },
];

const processSteps = [
  {
    title: 'Share your requirement',
    text: 'Message on WhatsApp with your need — CSC service, printing job, advertising order, or gift customization.',
    icon: MessageCircle,
  },
  {
    title: 'Confirm details and timing',
    text: 'Get a confirmation on service availability, required documents or files, and the best time to visit.',
    icon: MapPinned,
  },
  {
    title: 'Get it done locally',
    text: 'Visit Kashmir Expertise in Sonwar with your requirements and receive fast, reliable local service.',
    icon: BriefcaseBusiness,
  },
];

const testimonials = [
  {
    name: 'Malik Momin',
    text: 'Best place for printing and advertising in Srinagar. Got my bill books and flex banners done in one day — great quality and very professional.',
    initials: 'MM',
    color: '#1A56DB',
  },
  {
    name: 'Arham Gulzar',
    text: 'My Aadhaar update was done smoothly and quickly. Also ordered customized photo frames for my wedding — came out beautiful!',
    initials: 'AG',
    color: '#059669',
  },
  {
    name: 'Noor e Faiz',
    text: 'I regularly use their printing and sign board services. Reliable, affordable, and the team is always helpful with design suggestions.',
    initials: 'NF',
    color: '#7C3AED',
  },
];

const faqs = [
  { q: 'Which services do you offer beyond CSC digital services?', a: 'We offer a full range of printing (bill books, letterheads, visiting cards, banners, acrylic boards), advertising (outdoor ads, sign boards, flex banners), branding (graphic design, marketing strategy), and customized gifts (photo frames, prayer mats, name tags, stickers).' },
  { q: 'What documents do I need for Aadhaar or PAN services?', a: 'For Aadhaar enrollment or update, bring your existing Aadhaar (if any), proof of identity (passport/voter ID), and proof of address. For PAN, you\'ll need identity proof, address proof, and a recent photograph. Contact us before visiting for the exact requirements.' },
  { q: 'Do you deliver printing orders?', a: 'We primarily serve walk-in customers at our Sonwar location. Delivery options can be discussed depending on the order size and your location near Srinagar.' },
  { q: 'How can I place a customized gift order?', a: 'WhatsApp us your requirements — item type (photo frame, prayer mat, name tag, etc.), design preferences, and any images/text you\'d like included. We\'ll confirm pricing and turnaround time.' },
  { q: 'What is your turnaround time for printing jobs?', a: 'Most small printing jobs (visiting cards, bill books, letterheads) are completed within 1-2 business days. Larger orders like flex banners or acrylic boards may take 2-4 days depending on complexity.' },
  { q: 'Where exactly is Kashmir Expertise located?', a: 'We are located near IC Advertisers, Palpora Sonwar, Srinagar (South), Jammu and Kashmir — PIN 190001. Use the Google Maps link on this page for exact directions.' },
];

const locations = [
  ['State', 'Jammu and Kashmir'],
  ['District', 'Srinagar'],
  ['Pin Code', '190001'],
  ['Area', 'Palpora Sonwar'],
];

export default function App() {
  const nameId = useId();
  const phoneId = useId();
  const serviceId = useId();
  const messageId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const [reviews, setReviews] = useState(testimonials);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const scrollToSection = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (event) => {
    event?.preventDefault();
    const text = `Hi Kashmir Expertise!%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService needed: ${encodeURIComponent(form.service)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/918082590076?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      {/* ─── NAV ─── */}
      <nav className="nav" aria-label="Primary navigation">
        <button className="nav-logo" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="logo-mark"><Building2 size={16} /></div>
          <span>Kashmir <em>Expertise</em></span>
        </button>
        <div className={`nav-links${menuOpen ? ' open' : ''}`} id="primary-nav-links">
          <button type="button" className="nav-link-btn" onClick={() => scrollToSection('services')}>Services</button>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Location</a>
          <button type="button" className="nav-link-btn" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
        <div className="nav-right">
          <a className="btn-green" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} />
            Book on WhatsApp
          </a>
          <button className="nav-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="primary-nav-links">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <main>
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg-circle" style={{ width: '600px', height: '600px', right: '-200px', top: '-200px' }} />
        <div className="hero-bg-circle" style={{ width: '300px', height: '300px', left: '-100px', bottom: '-80px', background: 'rgba(255,153,51,0.06)' }} />
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-tag">
              <Sparkles size={14} />
              CSC Centre & Printing Agency • Sonwar, Srinagar
            </div>
            <h1 className="hero-h1">Your one-stop for<br />CSC services, printing<br />&amp; <span className="hl">branding</span></h1>
            <p className="hero-desc">
              Kashmir Expertise in Sonwar offers CSC digital services, printing, advertising, branding, and customized gifts from one trusted local counter near PIN 190001.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" type="button" onClick={() => scrollToSection('services')}>
                View Services
                <ArrowRight size={18} />
              </button>
              <a className="btn-outline-white" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars">
                <div className="avatar" style={{ background: '#1A56DB', marginLeft: 0 }}>MM</div>
                <div className="avatar" style={{ background: '#7C3AED' }}>AG</div>
                <div className="avatar" style={{ background: '#059669' }}>NF</div>
                <div className="avatar" style={{ background: '#DC2626' }}>RZ</div>
              </div>
              <div className="trust-text"><strong>Trusted</strong> by customers across Srinagar</div>
            </div>
          </div>
          <div className="hero-right">
            <img
              className="hero-img"
              src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=900&q=90&auto=format&fit=crop"
              alt="Kashmir Expertise — printing, advertising and design studio"
              width="900"
              height="675"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
        <div className="hero-stats">
          <div className="hstat"><div className="hstat-n"><em>30</em>+</div><div className="hstat-l">Services offered</div></div>
          <div className="hstat"><div className="hstat-n"><em>500</em>+</div><div className="hstat-l">Happy customers</div></div>
          <div className="hstat"><div className="hstat-n"><em>5.0</em><em>/5</em></div><div className="hstat-l">Customer rating</div></div>
          <div className="hstat"><div className="hstat-n"><em>190001</em></div><div className="hstat-l">Local PIN coverage</div></div>
        </div>
      </section>

      {/* ─── TRUSTED BY ─── */}
      <div className="logos-bar">
        <div className="logos-label">Trusted services across Srinagar</div>
        <div className="logos-row">
          <div className="logo-pill"><BadgeCheck size={20} /> CSC Digital Services</div>
          <div className="logo-pill"><Printer size={20} /> Professional Printing</div>
          <div className="logo-pill"><Image size={20} /> Advertising Agency</div>
          <div className="logo-pill"><Palette size={20} /> Branding & Design</div>
          <div className="logo-pill"><Gift size={20} /> Customized Gifts</div>
        </div>
      </div>

      {/* ─── HOW IT WORKS ─── */}
      <section className="sec sec-slate" id="how-it-works">
        <div className="eyebrow eyebrow-saffron centered">How it works</div>
        <h2 className="sec-h centered">Simple. Fast. Local.</h2>
        <p className="sec-p centered">From inquiry to delivery in three easy steps.</p>
        <div className="steps-grid">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div className="step-card" key={step.title}>
                <div className="step-num">0{i + 1}</div>
                <div className="step-icon"><Icon size={22} /></div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="sec sec-white" id="services">
        <div className="eyebrow eyebrow-saffron">Our services</div>
        <h2 className="sec-h">Complete range of<br />CSC &amp; commercial services</h2>
        <p className="sec-p">From government CSC services to printing, advertising, branding, and customized gifts — all in one place.</p>
        <div className="features-grid">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div className="feat" key={srv.title}>
                <div className="feat-ico feat-ico-saffron"><Icon size={20} /></div>
                <h3 className="feat-t">{srv.title}</h3>
                <p className="feat-d">{srv.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="sec sec-slate">
        <div className="eyebrow eyebrow-saffron centered">Testimonials</div>
        <h2 className="sec-h centered">What our customers say</h2>
        <p className="sec-p centered">Real feedback from real people in Srinagar.</p>
        <div className="tgrid">
          {reviews.map((t) => (
            <div className="tcard" key={t.name}>
              <div className="tcard-stars">
                <Star size={14} /><Star size={14} /><Star size={14} /><Star size={14} /><Star size={14} />
              </div>
              <blockquote className="tcard-text">"{t.text}"</blockquote>
              <div className="tcard-user">
                <div className="t-avatar" style={{ background: t.color }}>{t.initials}</div>
                <cite className="t-name">{t.name}</cite>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="sec sec-white" id="faq">
        <div className="eyebrow eyebrow-saffron centered">FAQ</div>
        <h2 className="sec-h centered">Common questions</h2>
        <p className="sec-p centered" style={{ marginBottom: 40 }}>Everything you need to know before visiting.</p>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item${faqOpen === i ? ' open' : ''}`} key={i}>
              <button
                className="faq-q"
                type="button"
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                aria-expanded={faqOpen === i}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
              >
                {f.q}
                <ChevronDown size={18} />
              </button>
              <div className="faq-a" id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-trigger-${i}`} hidden={faqOpen !== i}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section className="sec sec-navy" id="contact">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-h">Get in touch</h2>
            <p className="contact-p">Have a question or need a service? Reach out and we'll guide you through the process.</p>
            <div className="cinfo-row">
              <div className="cinfo-ico"><MapPinned size={18} /></div>
              <div>
                <div className="cinfo-k">Address</div>
                <div className="cinfo-v">Near IC Advertisers, Palpora Sonwar, Srinagar 190001</div>
              </div>
            </div>
            <div className="cinfo-row">
              <div className="cinfo-ico"><PhoneCall size={18} /></div>
              <div>
                <div className="cinfo-k">WhatsApp</div>
                <div className="cinfo-v">+91 80825 90076</div>
              </div>
            </div>
            <div className="cinfo-row">
              <div className="cinfo-ico"><Mail size={18} /></div>
              <div>
                <div className="cinfo-k">Email</div>
                <div className="cinfo-v">kashmirexpertise@gmail.com</div>
              </div>
            </div>
            <div className="cinfo-row">
              <div className="cinfo-ico"><Clock3 size={18} /></div>
              <div>
                <div className="cinfo-k">Service promise</div>
                <div className="cinfo-v">Clear communication, reliable timelines, and quality work for every CSC request, print order, and branding project.</div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <h3 className="form-h">Send us a message</h3>
            <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 22, lineHeight: 1.6 }}>
              Prefer WhatsApp? Use the button above for the fastest response. Or fill this form and we will prepare the WhatsApp message for you.
            </p>
            <div className="form-row">
              <div className="form-group"><label className="form-label" htmlFor={nameId}>Name</label><input className="form-input" id={nameId} name="name" autoComplete="name" placeholder="Your full name" type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
              <div className="form-group"><label className="form-label" htmlFor={phoneId}>Phone</label><input className="form-input" id={phoneId} name="phone" autoComplete="tel" placeholder="+91 xxxx xxx xxx" type="tel" inputMode="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></div>
            </div>
            <div className="form-group"><label className="form-label" htmlFor={serviceId}>Service needed</label>
              <input className="form-input" id={serviceId} name="service" placeholder="e.g. Aadhaar update, bill book printing, flex banner..." type="text" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} />
            </div>
            <div className="form-group"><label className="form-label" htmlFor={messageId}>Message</label>
              <textarea className="form-textarea" id={messageId} name="message" placeholder="Tell us what you need and when you'd like to visit..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            </div>
            <button className="submit-btn" type="submit"><Send size={16} /> Send Message</button>
          </form>
        </div>
      </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="logo-mark"><Building2 size={16} /></div>
              Kashmir <em>Expertise</em>
            </div>
            <div className="footer-tagline">Your local Sonwar hub for CSC digital services, printing, advertising, branding, and customized gifts in Srinagar.</div>
            <div className="footer-socials">
              <a className="fsoc" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={16} /></a>
              <a className="fsoc" href="mailto:kashmirexpertise@gmail.com" aria-label="Email"><Mail size={16} /></a>
               <a className="fsoc" href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Google Maps"><MapPinned size={16} /></a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
             <div className="footer-links"><button type="button" className="footer-link-btn" onClick={() => scrollToSection('services')}>CSC digital services</button><button type="button" className="footer-link-btn" onClick={() => scrollToSection('services')}>Printing</button><button type="button" className="footer-link-btn" onClick={() => scrollToSection('services')}>Advertising</button><button type="button" className="footer-link-btn" onClick={() => scrollToSection('services')}>Branding</button><button type="button" className="footer-link-btn" onClick={() => scrollToSection('services')}>Customized gifts</button></div>
          </div>
          <div>
            <div className="footer-col-title">Location</div>
            <div className="footer-links">
              {locations.map(([k, v]) => <p key={k} className="footer-meta"><strong style={{ color: 'rgba(255,255,255,0.4)' }}>{k}:</strong> {v}</p>)}
            </div>
          </div>
          <div>
             <div className="footer-col-title">Quick Links</div>
             <div className="footer-links">
               <button type="button" className="footer-link-btn" onClick={() => scrollToSection('how-it-works')}>How it works</button>
               <button type="button" className="footer-link-btn" onClick={() => scrollToSection('faq')}>FAQs</button>
               <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp booking</a>
               <a href={mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps</a>
              </div>
            </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 Kashmir Expertise CSC Centre. All rights reserved.</div>
          <div className="footer-legal">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
