import { Github, Linkedin, Heart, Instagram } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/praveen-1406", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/praveen-298278257", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/praveen_prajapati2003", label: "Instagram" },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-wider hover:text-primary italic">
                            <span className="text-primary">&lt;</span>praveen<span className="text-primary">/&gt;</span>
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Praveen Kumar Prajapati. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                target="blanck"
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};