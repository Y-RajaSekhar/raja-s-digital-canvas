import { useInView } from '@/hooks/useInView';
import { Code, Globe, Brain, Cloud } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming',
    skills: ['Python', 'Java', 'C', 'SQL'],
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Globe,
    title: 'Web & Backend',
    skills: ['HTML', 'CSS', 'Django', 'REST APIs'],
    color: 'bg-green-500/10 text-green-600',
  },
  {
    icon: Brain,
    title: 'Data & AI',
    skills: ['Machine Learning', 'NLP', 'Data Analysis'],
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    icon: Cloud,
    title: 'Tools & Cloud',
    skills: ['Git', 'Pandas', 'NumPy', 'OpenCV', 'AWS', 'IBM Cloud'],
    color: 'bg-orange-500/10 text-orange-600',
  },
];

const SkillsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="relative">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Skills</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            What I Do Best
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`card-elevated p-6 group cursor-default ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Icon */}
              <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                <category.icon size={24} />
              </div>

              {/* Category Title */}
              <h3 className="font-display font-semibold text-foreground text-lg mb-4">
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
