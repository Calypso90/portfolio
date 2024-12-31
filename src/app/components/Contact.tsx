import {
  Github,
  Linkedin,
  Twitter,
  MessageSquareCode,
  Mail,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/Calypso90"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/calypso-hernandez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://x.com/Calypso_coding"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Twitter size={32} />
          </a>
          <a
            href="https://medium.com/@calypso_coding"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <MessageSquareCode size={32} />
          </a>
          <a
            href="mailto:calypsohernandez.dev@gmail.com"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Mail size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
