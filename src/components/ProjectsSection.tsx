import { useInView } from '@/hooks/useInView';
import { ExternalLink, Github, Database, MessageSquare } from 'lucide-react';

const projects = [
  {
    icon: Database,
    title: 'Intelligent Database Query System',
    description: 'Natural language-based database querying with analytics and trend insights. Built with Python and integrated NLP for seamless data exploration.',
    tags: ['Python', 'NLP', 'SQL', 'Analytics'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: MessageSquare,
    title: 'Query Management System',
    description: 'Web application for managing and tracking student–faculty queries. Features real-time updates and comprehensive query tracking dashboard.',
    tags: ['Python', 'Django', 'REST API', 'Web App'],
    color: 'from-purple-500/20 to-pink-500/20',
  },
];

const ProjectsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="projects" className="bg-secondary/30 relative">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Projects</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Featured Work
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative card-elevated p-8 overflow-hidden ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient Background Decoration */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 transition-all duration-500 group-hover:scale-150`} />

              <div className="relative z-10">
                {/* Project Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <project.icon size={28} />
                </div>

                {/* Project Title */}
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={16} />
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
