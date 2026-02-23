import Button from '@/components/Button'
import { ArrowRight, ChevronDown, Download, Github, Instagram, Linkedin } from 'lucide-react'
import AnimatedBorderButton from '@/components/AnimatedBorderButton'

const skills = [
  "Docker",
  "Redis",
  "WebSocket",
  "Postman API",
  "TypeScript",
  "Mongoose ODM",
  "REST APIs",
  "Express.js",
  "React.js",
  "Redux Toolkit",
  "Auth0",
  "Tailwind CSS",
  "MongoDB",
  "SQL",
  "MySQL",
  "Node.js",
  "Python",
  "JavaScript",
  "GitHub",
  "Git",
  "CSS",
  "HTML5",
  "Standard Template Library (STL)",
  "C++",
  "C",
  "Engineering",
];


const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* bg */}
      <div className='absolute inset-0'>
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className='w-full h-full object-cover opacity-40'
        />
        <div className='absolute inset-0 bg-linear-to-b from-background/20 via-backgorund/80  to-background' />
      </div>

      {/* Green dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, i) => (
          <div
            className='absolute w-1.5 h-1.5 rounded-full opacity-60'
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
            key={i}
          />
        ))}
      </div>

      {/* Content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10 '>
        <div className='grid lg:grid-cols-2 gap-12 items-center '>
          {/* left column-Text Content */}
          <div className='space-y-8  md:pl-16'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />
                Software Engineer • DSA • Web Development
              </span>
            </div>

            {/* Headline */}
            <div className='space-y-4'>
              <h1 className='text-4xl md:text-5xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100'>
                SELECT * FROM
                <br />
                <span className='text-primary glow-text'>world</span> WHERE
                <br />
                <span className='font-serif italic font-normal text-white'>
                  somebody='likes me';
                </span>
              </h1>
              <p
                className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800'
              >
                Hi, I'm <span className='text-[#ff8153] glow-name'>Praveen Kumar Prajapati</span> - a software engineer specializing in
                Node, Express, React, MongoDB and Typescript. I build scalable web applications
                that users love.
              </p>
            </div>

            {/* call to action (CTA) */}
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>

              <a href="#contact">
                <Button size='lg'>
                Contact Me <ArrowRight className='w-5 h-5' />
              </Button>
              </a>

              <a href="/Praveen_Kumar_Prajapati_(Resume).pdf" download="Praveen_Kumar_Prajapati_(Resume).pdf">
                <AnimatedBorderButton >
                <Download className="w-5 h-5"/>
                Download Resume
              </AnimatedBorderButton>
              </a>

            </div>

            {/* Social links */}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
              <span className='text-sm text-muted-foreground '>Follow me: </span>
              {[
                { icon: Github, href: 'https://github.com/praveen-1406' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/praveen-298278257' },
                { icon: Instagram, href: 'https://www.instagram.com/praveen_prajapati2003' },
              ].map((social, idx) => (
                <a
                  href={social.href}
                  target='blank'
                  key={idx}
                  className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary  duration-300'
                >
                  {<social.icon className='w-5 h-5' />}
                </a>
              ))
              }
            </div>
          </div>

          {/* Right column-Profile Image */}
          <div className='relative animate-fade-in animation-delay-300'>
            {/* Profile Image */}
            <div className='relative max-w-md mx-auto'>
              <div className='absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse' />
              <div className='relative glass rounded-3xl p-2 glow-border'>

                <img src="/profilepic.png" alt="Praveen Kumar Pajapati" className='w-full aspect-4/5 object-cover rounded-2xl' />

                {/* Floating Badge */}
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                    <span className='text-sm font-medium'>
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-2xl font-bold text-primary'>
                    700+
                  </div>
                  <div className='text-xs text-muted-foreground'>
                    DSA Questions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-muted-foreground mb-6 text-center '>Technologies I work with</p>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
              {
                [...skills, ...skills].map((skill, idx) => (
                  <div key={idx} className='shrink-0 px-8 py-4'>
                    <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skill}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

    </section>
  )
}

export default Hero