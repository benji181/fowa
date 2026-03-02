interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export function PageHeader({ title, subtitle, imageSrc }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary">
      {/* Background Image / Overlay */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <img src={imageSrc} alt="Header background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
      )}
      
      {/* Geometric accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 tracking-tight drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
