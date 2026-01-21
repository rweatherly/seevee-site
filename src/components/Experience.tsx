import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import { profile } from '@/data/profile';

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Experience</h2>
        </div>

        <div className="space-y-6">
          {profile.experience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>

        {/* Recommendations Section */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Recommendations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {profile.recommendations.map((rec, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="mb-4">
                  <p className="font-semibold text-foreground">{rec.name}</p>
                  <p className="text-sm text-muted-foreground">{rec.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{rec.relationship}</p>
                </div>
                <blockquote className="text-muted-foreground italic border-l-2 border-primary pl-4">
                  "{rec.text}"
                </blockquote>
                <p className="text-xs text-muted-foreground mt-3">{rec.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
