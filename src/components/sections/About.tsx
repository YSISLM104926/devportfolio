import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto w-full">
        <h2 className="mb-8 text-center text-3xl font-bold">About Me</h2>
        <Card>
          <CardContent className="space-y-6 p-6">
            <p className="leading-relaxed">
              With strong analytical and problem-solving skills, I am a software engineer
              seeking to leverage technical expertise and excellent communication abilities.
              I am eager to learn and contribute to the efficiency of operations in a
              dynamic work environment, with a passion for IT, Software Development,
              and various technical fields.
            </p>
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <Briefcase className="h-5 w-5" />
                Work Experience
              </h3>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">Junior Software Engineer</h4>
                      <p className="text-sm text-muted-foreground">SkillersZone LLC</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Present</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently working as a Junior Software Engineer, contributing to various projects
                    and developing solutions using modern technologies.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">Software Engineer Intern</h4>
                      <p className="text-sm text-muted-foreground">Itransition</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Sept - Oct 2024</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Focused on software development and gaining hands-on
                    experience with industry practices and technologies.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold">Education</h3>
              <p className="text-muted-foreground">
                Bachelor of Science in Computer Science and Engineering
                <br />
                Daffodil International University
                <br />
                CGPA – 3.61/4.00 (August 2020 – July 2024)
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold">Achievements</h3>
              <ul className="list-inside list-disc text-muted-foreground">
                <li>Campus Boi Programming Contest – 2nd position</li>
                <li>Unlock Algorithm Programming Contest - 13th Place</li>
                <li>376+ problems solved on CodeForces</li>
                <li>162+ problems solved on Beecrowd</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}