const experiences = [
  {
    period: "July-2026 — Present",
    role: "AI Systems Evaluation Intern",
    company: "AirDawg Labs",
    description:
      "Configured isolated testing environments using Docker sandboxes and Ubuntu to safely execute and evaluate AI coding agents. Engineered command-line evaluation tasks for Project Terminus, designing challenges modeled after the Terminal Bench 2.0 format to assess AI coding agents on real-world system interactions. Analyzed model failure modes and edge cases during agent workflows, documenting diagnostic feedback to support improvements in agent reasoning using the Harbor framework.",
    technologies: ["Docker", "Ubuntu", "Bash", "AI Agents", "AI Benchmarking"],
    current: true,
  },
  {
    period: "June-2026 — July-2026",
    role: "Intern",
    company: "Tata Motors Limited",
    description:
      "Contributed to an internal messaging prototype (Socket.io) as a self-hosted communication alternative. Collaborated to map workflows transitioning internal canteen ordering from manual to digital workflows. Gained exposure to industrial IT operations under the supervision of the Plant Lead (IT Operations). Explored enterprise manufacturing IT operations, observing how barcode scanning pipelines synchronize with SAP and IPMS 4.0 to track production and inventory on the shop floor.",
    technologies: ["IT Operations" ,"Workflow"],
    current: false,
  },
  

];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden md:px-7 lg:px-32">
      <div
        className="absolute top-1/2 left-1/4  w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 "
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 ">
          <span 
            className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My Development 
            <span className="font-serif italic font-normal text-white">
              {" "}
              Experience.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my Personal experiences and professional works.
          </p>
        </div>

        {/* TimeLine */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {
              experiences.map((exp,idx)=>(
                <div 
                  key={idx} 
                  className="relactive grid md:grid-cols-2 gap-8 animate-fade-in animation"
                  style={{animationDelay:`${(idx+1)*150}ms`}}
                >
                  {/* timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-4xl -translate-x-1/2 ring-4 ring-background z-10">
                    {exp.current && (<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>)}
                  </div>

                  {/* Content */}
                  <div className={`pl-8 md:pl-0 ${idx%2===0?"md:pr-16 md:text-right":"md:col-start-2 md:pl-16"}`}>
                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                      <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 mt-4 ${idx%2===0?"md:justify-end":""}`}>
                        {
                          exp.technologies.map((tech,techidx)=>(
                            <span key={techidx} className="px-3 py-1 bg-surface text-sm rounded-4xl text-muted-foreground">{tech}</span>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience