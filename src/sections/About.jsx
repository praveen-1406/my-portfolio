import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,

    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];


const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden lg:px-28">
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white"> 
                {' '}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-100">
              <p>
                I’m a Computer Science graduate from the Indian Institute of Information Technology Ranchi, with a strong foundation in software engineering, data structures, algorithms and backend development. I enjoy building reliable, scalable applications and solving complex engineering problems through clean, practical solutions.
              </p>
              <p>
                My technical experience spans TypeScript, JavaScript, Python, Node.js, Express.js, React, Next.js, MongoDB, MySQL, Redis and Docker. I’ve built full-stack applications involving real-time communication, secure authentication, payment integration, cloud storage and performance optimization, with a focus on creating systems that are both efficient and maintainable.
              </p>
              <p>
                Currently, I work on AI systems evaluation, where I design isolated testing environments and challenging command-line tasks to evaluate AI coding agents on real-world system interactions. Alongside this, I continue to strengthen my problem solving skills through competitive programming and have solved 700+ Data Structures and Algorithms problems.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Driven by curiosity, I aim to explore technology at every layer—from code to circuits, software to hardware."
              </p>
            </div>
            
            {/* Right Column- Hightlights */}
            <div className="grid sm:grid-cols-2 gap-6">
              {
                highlights.map((item,idx)=>(
                  <div 
                    key={idx} 
                    className="glass p-6 rounded-2xl animate-fade-in"
                    style={{
                      animationDelay: `${(idx+1)*100}ms`,
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20  "><item.icon className="w-6 h-6 text-primaty" /></div>
                    <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))
              }
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About