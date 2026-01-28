const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Name */}
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-lg text-foreground">
              Yandala Raja Sekhar
            </p>
            <p className="text-sm text-muted-foreground">
              Frontend & Data Science Enthusiast
            </p>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
