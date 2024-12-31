import {
  Code,
  Palette,
  Lightbulb,
  Server,
  Layout,
  PenTool,
} from "lucide-react";

const skills = [
  { name: "JavaScript", icon: Code },
  { name: "React", icon: Code },
  { name: "HTML/CSS", icon: Layout },
  { name: "Node.js", icon: Server },
  { name: "UI/UX Design", icon: Palette },
  { name: "Creative Problem Solving", icon: Lightbulb },
  { name: "Responsive Web Design", icon: Layout },
  { name: "Version Control (Git)", icon: Code },
  { name: "Adobe Creative Suite", icon: PenTool },
  { name: "Agile Methodologies", icon: Lightbulb },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
            >
              <skill.icon className="w-8 h-8 mb-2 text-blue-600" />
              <span className="text-center font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
