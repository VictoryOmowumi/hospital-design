
const Stats = () => (
  <div className="bg-primary shadow-lg -mt-48 mx-4 rounded-lg relative z-10">
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { value: "24/7", label: "Emergency Care" },
        { value: "50+", label: "Medical Staff" },
        { value: "10+", label: "Specialties" },
        { value: "95%", label: "Patient Satisfaction" },
      ].map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-3xl font-bold text-primary-500">{stat.value}</p>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Stats;