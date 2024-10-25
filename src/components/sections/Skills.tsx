import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'HTML', 'CSS', 'JavaScript', 'Sass', 'Less', 'Bootstrap', 'TailwindCSS', 'Material-UI', 'Ant Design', 
      'DaisyUI', 'Shadcn', 'Chakra-UI', 'React.js', 'React Router', 'Next.js', 'Redux', 'Redux-Toolkit', 
      'React-Query', 'React-Hook-Form', 'TypeScript', 'Axios', 'Firebase (auth)', 'Next-Auth (Google Auth)', 
      'Clerk'
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      'Git', 'GitHub', 'Docker', 'Xampp', 'Visual Studio Code', 'Atom', 'Geany', 'CodeBlocks', 'Notepad++', 
      'PyCharm', 'IntelliJ IDEA', 'Vercel', 'Netlify', 'Postman', 'Figma'
    ],
  },
  {
    title: 'Languages',
    skills: [
      'C', 'C++', 'C#', 'Python', 'JavaScript', 'TypeScript', 'Java', 'PHP', 'SQL', 'Data Structure', 'Algorithm', 'OOP'
    ],
  },
  {
    title: 'Graphics & Video Editing',
    skills: [
      'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Photopea', 'Sony Vegas', 'Filmora', 'CapCut', 
      'Adobe After Effects'
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js', 'Express.js', 'PHP', 'Mongoose (ODM)', 'RestAPI', 'JWT (jsonwebtoken)', 'Familiar with Prisma'
    ],
  },
  {
    title: 'Database',
    skills: [
      'MongoDB', 'MySQL', 'PostgreSQL'
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Leadership', 'Self-learning', 'Presentation', 'Adaptability', 'Fast Learning', 'Communication', 
      'Problem-solving'
    ],
  },
  {
    title: 'Mobile Development',
    skills: [
      'React Native', 'Android Studio (Front-End with Java & XML)'
    ],
  },
  {
    title: 'Operating Systems',
    skills: [
      'Linux', 'Mac', 'Windows 7', 'Windows 8', 'Windows 10', 'Windows 11'
    ],
  },
  {
    title: 'Office Software',
    skills: [
      'MS Word', 'MS PowerPoint', 'MS Excel'
    ],
  },
  {
    title: 'AI Technology',
    skills: [
      'Prompt Engineering (ChatGPT, Claude, Groq, Gemini)'
    ],
  },
  {
    title: 'Testing',
    skills: [
      'Vitest'
    ],
  },
];



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section id="skills" className="w-full">
      <div className="mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-3xl font-bold"
        >
          Skills
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={item}>
              <Card>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}