import { motion } from "framer-motion";
import { Zap, Shield, Headphones, Clock, Award } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Activación Inmediata", desc: "Recibe tu acceso en minutos después de confirmar tu pedido" },
  { icon: Shield, title: "Compra Segura", desc: "Transacciones protegidas y soporte garantizado" },
  { icon: Headphones, title: "Soporte WhatsApp", desc: "Atención personalizada y rápida por WhatsApp" },
  { icon: Clock, title: "Atención Rápida", desc: "Respuesta en menos de 30 minutos en horario laboral" },
  { icon: Award, title: "Catálogo Premium", desc: "Las mejores plataformas de streaming y productividad" },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 px-4 relative overflow-hidden">
      {/* Gold line separator top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-0 w-full h-px bg-primary" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-primary" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-primary" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            ¿Por qué <span className="text-gradient-gold">elegirnos</span>?
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Servicio confiable, rápido y premium para todos tus servicios digitales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-primary/10 bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-primary/20">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gold line separator bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default BenefitsSection;
