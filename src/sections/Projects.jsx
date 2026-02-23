import { ArrowUpRight, Github } from "lucide-react"
import AnimatedBorderButton from "@/components/AnimatedBorderButton"

const projects = [
  {
    title: "MERN Eats",
    description: "A Food Ordering and Delivery web application leveraging TypeScript, React, Node, Express, and MongoDB.",
    image: "/projects/Proj1.png",
    tages: ["React", "Typescript", "ExpressJS", "NodeJS", "Stripe", "ShadCN"],
    link: "https://mern-food-ordering-app-frontend-5xqt.onrender.com/",
    githb: "https://github.com/praveen-1406/Food-Ordering-Platform",
  },
  {
    title: "MERN Chats",
    description: "A real-time chat application supporting text and image messaging with Socket.io for communication.",
    image: "/projects/Proj2.png",
    tages: ["React", "ExpressJS", "NodeJS", "Zustand", "Socket.io"],
    link: "https://chat-application-t15y.onrender.com/",
    githb: "https://github.com/praveen-1406/Chat-Application",
  },
  {
    title: "CodeCast",
    description: "A collaborative coding platform that allow multiple developers to edit the same file simultaneously.",
    image: "/projects/Proj3.png",
    tages: ["React", "Bootstrap", "NodeJS"],
    link: "https://software-engineering-project-client-mmotlub8m.vercel.app/",
    githb: "https://github.com/praveen-1406/Software-Engineering-Project",
  },
  {
    title: "Paste App",
    description: "An application for storing and saving content.",
    image: "/projects/Proj4.png",
    tages: ["React", "NodeJS"],
    link: "https://github.com/praveen-1406/PasteApp",
    githb: "https://github.com/praveen-1406/PasteApp",
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden"
    >
      {/* BG glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/6 left-0  w-64 h-64 bg-highlight/20 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section -Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              I worked on.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {
            projects.map((project, idx) => (
              <div
                key={idx}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"
                  />
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.link} target="blanck" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <ArrowUpRight className="w-5 h-5 " />
                    </a>
                    <a href={project.githb} target="blanck" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <Github className="w-5 h-5 " />
                    </a>
                  </div>
                </div>


                {/* Content */}
                <div className="p-5 space-y-4 ">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {
                      project.tages.map((tag, tagIdx) => (
                        <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                          {tag}
                        </span>
                      ))
                    }
                  </div>
                </div>

              </div>
            ))
          }
        </div>

        {/* View All CTA (Call to action) */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/praveen-1406" target="blanck">
            <AnimatedBorderButton>
              View All Projects <Github />
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects