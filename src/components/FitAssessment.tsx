import { useState } from 'react';
import { Target, CheckCircle, AlertCircle, XCircle, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface FitResult {
  overall: 'strong' | 'moderate' | 'weak';
  score: number;
  strengths: string[];
  gaps: string[];
  summary: string;
}

const sampleJobDescriptions = [
  {
    title: "Senior Azure Architect",
    company: "Enterprise Tech Corp",
    requirements: "Azure, IaC, DevOps, Team Leadership"
  },
  {
    title: "Cloud Solutions Architect",
    company: "Digital Transformation Inc",
    requirements: "Multi-cloud, Migration, Security"
  },
  {
    title: "Frontend Developer",
    company: "Web Agency Co",
    requirements: "React, TypeScript, CSS, UX"
  }
];

const demoResults: Record<string, FitResult> = {
  "Senior Azure Architect": {
    overall: 'strong',
    score: 92,
    strengths: [
      "8+ years Azure cloud architecture experience",
      "Proven IaC expertise with Bicep and Terraform",
      "Strong DevOps and CI/CD pipeline experience",
      "Demonstrated technical team leadership",
      "Enterprise-scale migration experience (2000+ workloads)"
    ],
    gaps: [
      "Kubernetes experience is developing (Docker exposure)"
    ],
    summary: "Rob is an excellent fit for this role. His extensive Azure architecture experience, combined with IaC expertise and proven leadership, directly align with the core requirements."
  },
  "Cloud Solutions Architect": {
    overall: 'strong',
    score: 85,
    strengths: [
      "Deep Azure expertise transferable to multi-cloud discussions",
      "Extensive migration experience with 7R methodology",
      "Strong security architecture background (FedRAMP, Azure Gov)",
      "Enterprise solution design experience"
    ],
    gaps: [
      "AWS/GCP deep expertise would benefit multi-cloud projects",
      "May need time to develop non-Azure cloud certifications"
    ],
    summary: "Rob is a strong fit with excellent Azure expertise and migration experience. His security background and solution design skills are valuable assets."
  },
  "Frontend Developer": {
    overall: 'weak',
    score: 25,
    strengths: [
      "Understanding of full-stack architecture",
      "Experience with DevOps tooling that supports frontend workflows"
    ],
    gaps: [
      "Limited frontend development experience",
      "No production React/TypeScript portfolio",
      "UX design not a core competency"
    ],
    summary: "This role is not aligned with Rob's expertise. His skills are in infrastructure and cloud architecture rather than frontend development."
  }
};

export default function FitAssessment() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FitResult | null>(null);

  const handleAssess = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setLoading(true);
    setResult(null);

    // Simulate API call delay
    setTimeout(() => {
      setResult(demoResults[jobTitle]);
      setLoading(false);
    }, 1500);
  };

  const getOverallIcon = (overall: string) => {
    switch (overall) {
      case 'strong': return <CheckCircle className="h-6 w-6 text-green-400" />;
      case 'moderate': return <AlertCircle className="h-6 w-6 text-yellow-400" />;
      default: return <XCircle className="h-6 w-6 text-red-400" />;
    }
  };

  const getOverallColor = (overall: string) => {
    switch (overall) {
      case 'strong': return 'text-green-400';
      case 'moderate': return 'text-yellow-400';
      default: return 'text-red-400';
    }
  };

  return (
    <section id="fit" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Target className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Job Fit Assessment</h2>
        </div>
        <p className="text-muted-foreground mb-8">
          See how Rob's skills align with different role types (demo mode)
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Job Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sample Job Descriptions</h3>
            <div className="space-y-3">
              {sampleJobDescriptions.map((job) => (
                <Card
                  key={job.title}
                  className={`cursor-pointer transition-all hover:border-primary/50 ${
                    selectedJob === job.title ? 'border-primary' : ''
                  }`}
                  onClick={() => handleAssess(job.title)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleAssess(job.title);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={selectedJob === job.title}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Requirements: {job.requirements}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant={selectedJob === job.title ? "default" : "outline"}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAssess(job.title);
                        }}
                      >
                        Assess
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Assessment Results</h3>

            {!selectedJob && !loading && (
              <Card className="h-64 flex items-center justify-center">
                <p className="text-muted-foreground">
                  Select a job to see fit assessment
                </p>
              </Card>
            )}

            {loading && (
              <Card className="h-64 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-muted-foreground">Analyzing fit...</p>
                </div>
              </Card>
            )}

            {result && !loading && (
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      {getOverallIcon(result.overall)}
                      <span className={getOverallColor(result.overall)}>
                        {result.overall.charAt(0).toUpperCase() + result.overall.slice(1)} Fit
                      </span>
                    </CardTitle>
                    <Badge
                      variant={result.overall === 'strong' ? 'success' : result.overall === 'moderate' ? 'warning' : 'destructive'}
                      className="text-lg px-3 py-1"
                    >
                      {result.score}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{result.summary}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Strengths</h4>
                    <ul className="space-y-1">
                      {result.strengths.map((strength, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {result.gaps.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Gaps</h4>
                      <ul className="space-y-1">
                        {result.gaps.map((gap, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            {gap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
