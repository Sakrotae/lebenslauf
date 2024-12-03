import React from 'react';
import Section from './Section';
import Event from './Event';

const educations = (lang) => [{
    title: lang === 'en' ? "Master of Science - Computer Science" : "Master of Science - Informatik",
    institution: "Universität Augsburg",
    start: lang === 'en' ? "April 2023" : "April 2023",
    end: lang === 'en' ? "present" : "heute",
    infoTexts: lang === 'en' ? [
      "Focus on Machine Learning / AI",
      "Example contents include working with Llama 3.2 for Conversational Agents, scientific discourse on Foundation Models, and challenges in the form of developing neural networks for Social Signal Processing"
    ] : [
      "Schwerpunkt auf Machinellem Lernen / KI",
      "Beispielinhalte sind die Arbeit mit Llama 3.2 für Conversational Agents, wissenschaftlicher Diskurs zu Foundation Models und Challenges in Form von Entwicklung neuronaler Netze für Social Signal Processing"
    ]
},
{
    title: lang === 'en' ? "Bachelor of Science - Computer Science" : "Bachelor of Science - Informatik",
    institution: "Technische Hochschule Ulm",
    start: lang === 'en' ? "October 2018" : "Oktober 2018",
    end: lang === 'en' ? "February 2022" : "Februar 2022",
    infoTexts: lang === 'en' ? [
      'Thesis: "Development of an internal funding call management system"',
      "Thesis grade: 1.5"
    ] : [
      'Abschlussarbeit: "Entwicklung eines internen Förderaufruf Managementsystems"',
      "Note Abschlussarbeit: 1,5"
    ],
  },{
    title: lang === 'en' ? "University Entrance Qualification" : "Fachhochschulreife",
    institution: "Berufsoberschule Augsburg",
    start: lang === 'en' ? "September 2017" : "September 2017",
    end: lang === 'en' ? "April 2018" : "April 2018",
    infoTexts: lang === 'en' ? [
      "Focus on Economics",
      "Final grade: 2.2"
    ] : [
      "Schwerpunkt Wirtschaft",
      "Abschlussnote: 2,2"
    ],
  }, {
    title: lang === 'en' ? "IHK Training" : "IHK-Ausbildung",
    institution: "BMK Group GmbH & Co. KG",
    start: lang === 'en' ? "September 2012" : "September 2012",
    end: lang === 'en' ? "June 2015" : "Juni 2015",
    freeText: lang === 'en' ? "IT Specialist for Application Development" : "Fachinformatiker für Anwendungsentwicklung",
    infoTexts: [],
  }];

const experiences = (lang) => [
  {
    title: lang === 'en' ? "Lecturer for IHK Trainees" : "Dozententätigkeit für IHK-Auszubildende",
    institution: "BBZ Augsburg gGmbH",
    start: lang === 'en' ? "June 2022" : "Juni 2022",
    end: lang === 'en' ? "present" : "heute",
    infoTexts: [],
    freeText: lang === 'en' ? "Specialization in Application Development" : "Fachrichtung Anwendungsentwicklung"
  },
  {
    title: lang === 'en' ? "Software Developer (Working Student)" : "Software-Entwickler (Werkstudent)",
    institution: "SWU Stadtwerke Ulm/Neu-Ulm GmbH",
    start: lang === 'en' ? "November 2018" : "November 2018",
    end: lang === 'en' ? "December 2021" : "Dezember 2021",
    infoTexts: lang === 'en' ? [
      "Planning, conception, and development of software solutions",
      "Automations and web applications in the field of business development",
      "Project management using SCRUM rules and OKR",
      "Support and further development of the SWU AlexaSkill",
      "Setup and use of CI pipelines for automated unit tests"
    ] : [
      "Planung, Konzeption und Entwicklung von Softwarelösungen",
      "Automatisierungen und Webanwendungen im Bereich Business Development",
      "Projektmanagement mithilfe von SCRUM Regeln und OKR",
      "Betreuung und Weiterentwicklung des AlexaSkills der SWU",
      "Aufbau und Nutzung von CI-Pipelines für automatisierte Unit-Tests"
    ],
    freeText: ""
  },
  {
    title: lang === 'en' ? "ASP.NET Developer" : "ASP.NET Entwickler",
    institution: "BMK Group GmbH & Co. KG",
    start: lang === 'en' ? "July 2015" : "Juli 2015",
    end: lang === 'en' ? "July 2017" : "Juli 2017",
    infoTexts: lang === 'en' ? [
      "Planning, conception, and development of web applications and tools for optimizing internal administrative and production processes"
    ] : [
      "Planung, Konzeption und Entwicklung von Webanwendungen und Tools für die Optimierung der internen Verwaltungs- und Produktionsprozesse"
    ],
    freeText: ""
  }
];

const MainContent = ({ lang = 'en' }) => {
  return (
    <div className="bg-white p-4 w-full">
      <div className='p-8'>
    
        <Section title={lang === 'en' ? "Education" : "Ausbildung"}>
          {educations(lang).map((education, index) => (
            <Event key={index} education={education} />
          ))}
      </Section>

      <Section title={lang === 'en' ? "Professional Experience" : "Berufliche Erfahrung"}>
        {experiences(lang).map((experience, index) => (
          <Event key={index} education={experience} />
        ))}
      </Section>

      <Section title={lang === 'en' ? "Technologies & Skills" : "Technologien & Skills"}>
        <div className="flex flex-wrap gap-2">
          {[
                "Python",
                "PyTorch",
                "Numpy",
                "HuggingFace Transformers",
                "Tensorflow",
                "Flask",
                "Docker",
                "Flutter",
                "JavaScript", "NestJS",
                "ASP.NET", "Apache Kafka",
                "C#",
                "MySQL", "Oracle", 
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
        </div>
        </Section>
        
        <Section title={lang === 'en' ? "Additional" : "Weiteres"}>
          <p className="text-gray-600 mb-4">
          {lang === 'en' ? "Over the last few years, I have developed a passion for the field of deep learning. This is one of the reasons why part of my free time is spent informing myself about this field and reading scientific papers in order to develop myself further in this area." : "In den letzten Jahren habe ich eine Leidenschaft für das Gebiet des Deep Learning entwickelt. Dies ist einer der Gründe, warum ich einen Teil meiner Freizeit damit verbringe, mich über diesen Bereich zu informieren und wissenschaftliche Arbeiten zu lesen, um mich in diesem Bereich weiterzuentwickeln."}
        </p>
        <p className="text-gray-600 mb-4">
          {lang === 'en' ? "Since February 2022, I have owned a small business for occasional IT services and software solutions in the immediate vicinity." : "Seit Februar 2022 besitze ich ein Kleingewerbe für gelegentliche IT Dienstleistungen und Software-Lösungen im näheren Umfeld."}
          </p>
          <p className="text-gray-600 mb-4">
          {lang === 'en' ? "My native language is German, I speak fluent English." : "Meine Muttersprache ist deutsch, ich spreche fließend englisch."}
        </p>

      </Section>

        </div>
    </div>
  );
};

export default MainContent;