import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-full">
        <h2 className="mb-8 text-center text-3xl font-bold">Contact</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:likhonmia254@gmail.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  likhonmia254@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <a
                  href="tel:+8801967469726"
                  className="text-muted-foreground hover:text-foreground"
                >
                  +880 1967 469726
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span className="text-muted-foreground">Dhaka, Bangladesh</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}