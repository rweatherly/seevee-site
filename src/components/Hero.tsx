import { MapPin, Linkedin, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';

interface HeroProps {
  onOpenChat: () => void;
}

export default function Hero({ onOpenChat }: HeroProps) {
  return (
    <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="success" className="gap-1">
                <CheckCircle className="h-3 w-3" />
                {profile.status}
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
              {profile.name}
            </h1>

            <h2 className="text-xl sm:text-2xl text-primary font-semibold mb-3">
              {profile.title}
            </h2>

            <p className="text-muted-foreground mb-4 max-w-2xl">
              {profile.subtitle}
            </p>

            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="h-4 w-4" />
              <span>{profile.location}</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button onClick={onOpenChat} size="lg">
                Ask Me Anything
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            {/* About */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">About</h3>
              <p className="text-muted-foreground leading-relaxed">
                {profile.about}
              </p>
            </div>

            {/* Key Highlights */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {profile.keyHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Target Roles Card */}
          <div className="lg:w-80 w-full bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Target Roles</h3>
            <div className="space-y-2">
              {profile.targetRoles.map((role, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{role}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-sm font-semibold mb-3">Education</h4>
              {profile.education.map((edu, index) => (
                <div key={index} className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">{edu.school}</p>
                  <p>{edu.degree}, {edu.field}</p>
                  <p>{edu.years}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-sm font-semibold mb-3">Certifications</h4>
              <div className="space-y-1">
                {profile.certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
