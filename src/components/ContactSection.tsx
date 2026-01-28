import { useInView } from '@/hooks/useInView';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const ContactSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="bg-secondary/30 relative">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-8 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently looking for new opportunities and would be excited to discuss 
                how I can contribute to your team.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href="mailto:yandalarajasekhar49@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">yandalarajasekhar49@gmail.com</p>
                </div>
              </a>

              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  <Linkedin size={22} className="text-primary" />
                  <span className="font-medium text-foreground">LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  <Github size={22} className="text-primary" />
                  <span className="font-medium text-foreground">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-5 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
