import { DATA } from "@/data/resume";

export default function ServicesSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <h2 className="text-xl font-bold">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {DATA.services.map((service) => (
          <div
            key={service.title}
            className="border rounded-xl p-5 bg-card flex flex-col gap-2 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">{service.emoji}</span>
              <h3 className="font-semibold text-sm leading-snug">{service.title}</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
