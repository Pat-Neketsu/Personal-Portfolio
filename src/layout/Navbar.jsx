import { Button } from "@/Components/Button";
//This is a Javascript list or a dictionary by Java??
//It is used for easy linking for the navigation bar
const NavLink = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonial", label: "Testimonial" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-transparent py-5 ">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          JA<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {NavLink.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div>
          <Button size="sm" className="hidden md:block">Contact Me</Button>
        </div>

        {/* Mobile Navigation */}
        <button className="md:hidden p-2 text-foreground">

        </button>
      </nav>
    </header>
  );
};
