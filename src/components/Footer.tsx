import { Linkedin, Github, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold text-foreground">{profile.name}</p>
            <p className="text-sm text-muted-foreground">{profile.title}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            This interactive resume features AI-powered Q&A (demo mode) and job fit assessment.
          </p>
        </div>
      </div>
    </footer>
  );
}
