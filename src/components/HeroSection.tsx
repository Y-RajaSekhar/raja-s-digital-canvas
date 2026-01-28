import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="floating-shape w-96 h-96 bg-primary/20 -top-48 -right-48" />
      <div className="floating-shape w-72 h-72 bg-accent/15 bottom-20 -left-36 animate-pulse-soft" style={{ animationDelay: '2s' }} />
      <div className="floating-shape w-48 h-48 bg-primary/10 top-1/3 right-1/4" style={{ animationDelay: '4s' }} />

      <div className="section-container relative z-10 text-center">
        {/* Status Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Open to opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="animate-text-reveal font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="text-gradient">Yandala Raja Sekhar</span>
        </h1>

        {/* Role */}
        <p className="animate-fade-up-delay-1 text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          Frontend & Data Science Enthusiast
        </p>

        {/* Tagline */}
        <p className="animate-fade-up-delay-2 text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Building clean interfaces and intelligent systems with code.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up-delay-3 flex flex-wrap items-center justify-center gap-4 mb-12">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="animate-fade-up-delay-3 flex items-center justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:yandalarajasekhar49@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={handleScrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
