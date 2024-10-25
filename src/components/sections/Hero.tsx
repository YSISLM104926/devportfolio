import { Button } from '@/components/ui/button';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex pt-[230px] pb-[50px] items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-4xl font-bold sm:text-6xl"
        >
          Md. Likhon Mia
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 text-lg text-muted-foreground sm:text-xl"
        >
          Software Engineer
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 flex justify-center gap-4"
        >
          <Button
            variant="outline"
            size="icon"
            asChild
          >
            <a
              href="https://github.com/YSISLM104926"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/likhon15/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
          >
            <a
              href="https://leetcode.com/u/ysislm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}