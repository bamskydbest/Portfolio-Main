const skills = [
  { skill: "React", level: 95 },
  { skill: "Vanilla Javascript", level: 85 },
  { skill: "Tailwind CSS", level: 90 },
];

export default function Skills() {
  return (
    <section className="px-6 md:px-20 py-16">
      <h2 className="text-yellow-400 text-xl font-semibold mb-6 text-center">
        MY SKILLS
      </h2>
      <p className="text-gray-400 mb-8">
        All the skills that I have in the field of work mentioned above.
      </p>
      <div className="space-y-6">
        {skills.map(({ skill, level }) => (
          <div key={skill}>
            <div className="flex justify-between mb-1">
              <span>{skill}</span>
              <span>{level}%</span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-full">
              <div
                className="bg-yellow-400 h-2 rounded-full"
                style={{ width: `${level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
