import { useState } from "react";

export default function App() {
  const [projects] = useState([
    {
      title: "OlaCab Booking Platform",
      tech: "Java, Redis, Strategy Pattern",
      description:
        "Designed scalable cab allocation logic with Redis and design patterns.",
      link: "https://github.com/hrithikchandok/OlaCab-Booking",
    },
    {
      title: "BankingPortal API",
      tech: "Java, Spring Boot, JPA",
      description:
        "Backend APIs for managing user banking operations, account creation, and transactions.",
      link: "https://github.com/hrithikchandok/BankingPortal-API",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-gray-200 text-gray-900 px-6 py-10 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Hrithik Chandok</h1>
        <p className="text-gray-600 mb-4">
          Java Full Stack Developer | Spring Boot | React | Kafka | Azure | MySQL
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/hrithik-chandok-7b2202192/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/hrithikchandok"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-center">Experience</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="border p-4 rounded bg-white shadow-sm">
            <h3 className="font-semibold">Accenture</h3>
            <p className="text-sm text-gray-600">Software Engineer (Client: UnitedHealth Group)</p>
            <p className="text-sm mt-2">
              Built scalable backend systems for healthcare data processing using Spring Boot and Kafka. Worked on Azure Functions for real-time event processing.
            </p>
          </div>
          <div className="border p-4 rounded bg-white shadow-sm">
            <h3 className="font-semibold">Yellow.ai</h3>
            <p className="text-sm text-gray-600">Software Developer</p>
            <p className="text-sm mt-2">
              Developed backend features for AI-driven customer engagement platform. Integrated Redis, optimized code performance, and maintained production-grade systems.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded bg-white hover:shadow transition">
              <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{project.tech}</p>
              <p className="text-sm text-gray-700 mb-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm underline hover:text-blue-800"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-center">Contact</h2>
        <div className="text-center space-y-2 text-sm">
          <p>📞 +91 707262926</p>
          <p>📧 hrithikchandok00@gmail.com</p>
        </div>
      </section>
    </div>
  );
}
