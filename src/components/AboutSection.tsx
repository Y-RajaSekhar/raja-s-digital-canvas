import { useInView } from '@/hooks/useInView';
import { GraduationCap, Lightbulb, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Languages',
    description: 'Python, Java, C, SQL',
  },
  {
    icon: Rocket,
    title: 'Frameworks',
    description: 'Django, REST APIs',
  },
  {
    icon: Lightbulb,
    title: 'Interests',
    description: 'UI Design, AI Apps, Animations',
  },
];

const AboutSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="bg-secondary/30 relative">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">final-year B.Tech Computer Science (Data Science)</span> student 
              with a solid foundation in programming, databases, and full-stack application development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building <span className="text-foreground font-medium">intuitive user interfaces powered by intelligent systems</span>. 
              My experience spans AI, NLP, data analysis, and modern web development—bridging design and data-driven functionality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A quick learner with a problem-solving mindset, I'm driven to explore new technologies 
              and craft solutions that create meaningful impact.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className={`grid gap-4 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-elevated p-6 flex items-start gap-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
