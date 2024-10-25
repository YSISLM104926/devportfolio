import { Github, Linkedin, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2024 Md. Likhon Mia. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/YSISLM104926"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/likhon15/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://leetcode.com/u/ysislm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Code2 className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}