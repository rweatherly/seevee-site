import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Calendar, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Experience } from '@/data/profile';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="transition-all hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold text-foreground">
                {experience.title}
              </h3>
              <Badge variant="outline" className="text-xs">
                {experience.type}
              </Badge>
            </div>
            <p className="text-primary font-medium">{experience.company}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{experience.startDate} - {experience.endDate}</span>
            <span className="text-muted-foreground/60">({experience.duration})</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{experience.location}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground mb-4">{experience.description}</p>

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary" />
            Key Accomplishments
          </h4>
          <ul className="space-y-1">
            {experience.highlights.slice(0, expanded ? undefined : 3).map((highlight, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* AI Context - Expanded */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-border">
            <h4 className="text-sm font-semibold mb-2 text-primary">AI Context</h4>
            <p className="text-sm text-muted-foreground italic">
              {experience.aiContext}
            </p>
          </div>
        )}

        {/* Toggle Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-primary hover:text-primary/80"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" />
              Show More
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
