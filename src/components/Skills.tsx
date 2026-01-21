import { Code2, TrendingUp, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { profile } from '@/data/profile';

const levelIcons = {
  strong: <TrendingUp className="h-5 w-5 text-green-400" />,
  moderate: <Code2 className="h-5 w-5 text-yellow-400" />,
  learning: <BookOpen className="h-5 w-5 text-blue-400" />,
};

const levelColors = {
  strong: 'border-green-500/30 bg-green-500/5',
  moderate: 'border-yellow-500/30 bg-yellow-500/5',
  learning: 'border-blue-500/30 bg-blue-500/5',
};

const levelLabels = {
  strong: 'Strong',
  moderate: 'Moderate',
  learning: 'Learning',
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Code2 className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.skillCategories.map((category, index) => (
            <Card key={index} className={`transition-all hover:border-primary/50 ${levelColors[category.level]}`}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  {levelIcons[category.level]}
                  {category.name}
                </CardTitle>
                <Badge
                  variant={category.level === 'strong' ? 'success' : category.level === 'moderate' ? 'warning' : 'secondary'}
                  className="w-fit"
                >
                  {levelLabels[category.level]}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
