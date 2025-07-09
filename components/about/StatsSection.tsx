// Component: StatsSection.tsx
import {motion} from "framer-motion";

export function StatsSection() {
  const stats = [
    { value: "50,000+", label: "Patients Annually" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Emergency Services" },
    { value: "150+", label: "Medical Staff" }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container px-4 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center bg-white p-8 rounded-xl shadow-sm"
            >
              <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-onyx/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}