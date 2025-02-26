const presentationContent = {
  header: {
    title: "The Steven Avery Case Analysis",
    subtitle: "Examining Chain of Custody Failures",
    background: "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
  },
  slides: [

    // Case Overview
    {
      type: "split-list",
      bgColor: "bg-white",
      title: "Case Overview",
      items: [
        {
          title: "Background",
          content: "Steven Avery, previously exonerated for a wrongful conviction, became the main suspect in the murder of Teresa Halbach."
        },
        {
          title: "Focus",
          content: "Examining breakdowns in the chain of custody and their impact on the investigation and trial."
        },
        {
          title: "Key Areas",
          content: "Case background, involved individuals, evidence handling failures, and legal impact"
        }
      ]
    },

    // Background & Key Individuals
    {
      type: "profiles",
      bgColor: "bg-gray-50",
      title: "Key Individuals",
      items: [
        {
          name: "Steven Avery",
          description: "Wrongfully convicted and exonerated, later prime suspect in Halbach's murder"
        },
        {
          name: "Teresa Halbach",
          description: "Victim found deceased on Avery's property"
        },
        {
          name: "Brendan Dassey",
          description: "Avery's nephew with controversial confession"
        },
        {
          name: "Law Enforcement",
          description: "Key players in evidence collection and trial proceedings"
        }
      ]
    },

    // The Crime Committed
    {
      type: "timeline",
      bgColor: "bg-white",
      title: "The Crime Committed",
      items: [
        { 
          date: "October 2005", 
          event: "Teresa Halbach found deceased on Avery's Wisconsin property" 
        },
        { 
          date: "Early Evidence", 
          event: "Forensic samples and controversial car key discovery" 
        }
      ]
    },

    // Chain of Custody Explanation
    {
      type: "definition",
      bgColor: "bg-blue-50",
      title: "Chain of Custody Essentials",
      items: [
        "Documents evidence collection, handling, and storage",
        "Ensures authenticity and prevents tampering",
        "Requires proper labeling and secure storage",
        "Critical for legal integrity and admissibility"
      ]
    },

    // Chain Breakdown
    {
      type: "split-list",
      bgColor: "bg-white",
      title: "Chain of Custody Failures",
      items: [
        {
          title: "Processing Delays",
          content: "Slow evidence securing and processing"
        },
        {
          title: "Documentation Issues",
          content: "Mislabeling and inadequate records"
        },
        {
          title: "Planting Allegations",
          content: "Questions about car key authenticity"
        }
      ]
    },

    // Evidence Mishandling
    {
      type: "comparison",
      bgColor: "bg-gray-50",
      title: "Evidence Mishandling Details",
      left: {
        title: "Car Key Issues",
        items: [
          "Alleged planting in Avery's room",
          "No prior DNA traces found",
          "Questionable discovery timeline"
        ]
      },
      right: {
        title: "Forensic Problems",
        items: [
          "Potential sample contamination",
          "Improper storage conditions",
          "Documentation gaps"
        ]
      }
    },

    // Investigation Impact
    {
      type: "impact",
      bgColor: "bg-white",
      title: "Legal Consequences",
      items: [
        "Significant doubts about evidence reliability",
        "Defense challenges to prosecution case",
        "Public opinion polarization",
        "Ongoing legal scrutiny"
      ]
    },

    // Forensic Analysis
    {
      type: "quote",
      bgColor: "bg-purple-50",
      quote: "Flaws in chain of custody created reasonable doubt and undermined forensic credibility.",
      author: "Legal Analysts",
      role: "Trial Assessment Report"
    },

    // Lessons Learned
    {
      type: "recommendations",
      bgColor: "bg-green-50",
      title: "Recommendations",
      items: [
        {
          icon: "fas fa-graduation-cap",
          title: "Enhanced Training",
          content: "Regular protocol updates and technology integration"
        },
        {
          icon: "fas fa-fingerprint",
          title: "Strict Adherence",
          content: "Mandatory chain of custody compliance"
        },
        {
          icon: "fas fa-balance-scale",
          title: "Future Standards",
          content: "Maintaining trust through transparency"
        }
      ]
    },

    // References
    {
      type: "references",
      bgColor: "bg-gray-100",
      title: "References",
      items: [
        "Making a Murderer (Netflix Documentary)",
        "Steven Avery: The Case Against by John Ferak",
        "The Steven Avery Case: A Legal Nightmare",
        "Various news articles and investigative reports"
      ]
    }
  ]
};

const slideTemplates = {
  // Title Slide
  "title": (slide) => `
    <div class="${slide.bgColor} min-h-screen flex items-center justify-center text-center text-white">
      <div class="max-w-4xl px-4">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">${slide.title}</h1>
        <p class="text-2xl text-gray-200">${slide.subtitle}</p>
      </div>
    </div>
  `,

  // Split List Layout
  "split-list": (slide) => `
    <div class="${slide.bgColor} rounded-2xl shadow-xl p-8">
      <h2 class="section-title text-4xl font-bold mb-12">${slide.title}</h2>
      <div class="grid md:grid-cols-2 gap-8">
        ${slide.items.map(item => `
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <h3 class="text-xl font-bold text-blue-600 mb-3">${item.title}</h3>
            <p class="text-gray-600">${item.content}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `,

  // Profile Grid
  "profiles": (slide) => `
    <div class="${slide.bgColor} rounded-2xl shadow-xl p-8">
      <h2 class="section-title text-4xl font-bold mb-12">${slide.title}</h2>
      <div class="grid md:grid-cols-2 gap-8">
        ${slide.items.map(item => `
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <h3 class="text-xl font-bold text-gray-800 mb-2">${item.name}</h3>
            <p class="text-gray-600">${item.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `,

  // Timeline
  "timeline": (slide) => `
    <div class="${slide.bgColor} rounded-2xl shadow-xl p-8">
      <h2 class="section-title text-4xl font-bold mb-12">${slide.title}</h2>
      <div class="border-l-4 border-purple-200 pl-8 space-y-12">
        ${slide.items.map(item => `
          <div class="relative">
            <div class="absolute w-6 h-6 bg-purple-600 rounded-full -left-[30px] top-2 border-4 border-white"></div>
            <div class="text-purple-600 font-bold mb-2">${item.date}</div>
            <p class="text-gray-700">${item.event}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `,

  // Definition List
  "definition": (slide) => `
    <div class="${slide.bgColor} rounded-2xl shadow-xl p-8">
      <h2 class="section-title text-4xl font-bold mb-12">${slide.title}</h2>
      <ul class="space-y-4 max-w-2xl mx-auto">
        ${slide.items.map(item => `
          <li class="flex items-start">
            <i class="fas fa-check-circle text-blue-500 mt-1 mr-3"></i>
            <span class="text-gray-700 text-lg">${item}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `,

  // Comparison Layout
  "comparison": (slide) => `
    <div class="${slide.bgColor} rounded-2xl shadow-xl p-8">
      <h2 class="section-title text-4xl font-bold mb-12">${slide.title}</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-red-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-red-600 mb-4">${slide.left.title}</h3>
          <ul class="space-y-3">
            ${slide.left.items.map(item => `
              <li class="flex items-center">
                <i class="fas fa-times-circle text-red-500 mr-2"></i>${item}
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-green-600 mb-4">${slide.right.title}</h3>
          <ul class="space-y-3">
            ${slide.right.items.map(item => `
              <li class="flex items-center">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>${item}
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `,

  // Impact List
  "impact": (slide) => `
    <div class="${slide.bgColor} rounded-2xl shadow-xl p-8">
      <h2 class="section-title text-4xl font-bold mb-12">${slide.title}</h2>
      <div class="grid md:grid-cols-2 gap-6">
        ${slide.items.map(item => `
          <div class="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <p class="text-gray-700">${item}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `,

  // Quote Slide
  "quote": (slide) => `
    <div class="${slide.bgColor} rounded-2xl shadow-xl p-8">
      <div class="max-w-3xl mx-auto text-center">
        <i class="fas fa-quote-left text-4xl text-blue-600 opacity-50 mb-6"></i>
        <blockquote class="text-2xl font-light leading-relaxed mb-6">
          ${slide.quote}
        </blockquote>
        <div class="font-bold text-lg">${slide.author}</div>
        <div class="text-gray-600">${slide.role}</div>
      </div>
    </div>
  `,

  // Recommendations
  "recommendations": (slide) => `
    <div class="${slide.bgColor} rounded-2xl shadow-xl p-8">
      <h2 class="section-title text-4xl font-bold mb-12">${slide.title}</h2>
      <div class="grid md:grid-cols-3 gap-8">
        ${slide.items.map(item => `
          <div class="text-center bg-white p-6 rounded-xl">
            <i class="${item.icon} text-4xl text-green-600 mb-4"></i>
            <h3 class="text-xl font-bold mb-2">${item.title}</h3>
            <p class="text-gray-600">${item.content}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `,

  // References
  "references": (slide) => `
    <div class="${slide.bgColor} rounded-2xl shadow-xl p-8">
      <h2 class="section-title text-4xl font-bold mb-12">${slide.title}</h2>
      <ul class="space-y-3 max-w-2xl mx-auto">
        ${slide.items.map(item => `
          <li class="flex items-start text-gray-700">
            <i class="fas fa-bookmark text-blue-500 mr-3 mt-1"></i>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `
};

function buildPresentation() {
  const container = document.getElementById('presentation-container');
  
  // Header Section
  container.innerHTML = `
    <header class="min-h-screen flex items-center justify-center text-white ${presentationContent.header.background}">
      <div class="text-center px-4 max-w-4xl">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">${presentationContent.header.title}</h1>
        <p class="text-xl md:text-2xl text-gray-200">${presentationContent.header.subtitle}</p>
        <div class="animate-bounce mt-16">
          <i class="fas fa-chevron-down text-3xl"></i>
        </div>
      </div>
    </header>
  `;

  // Add Slides
  presentationContent.slides.forEach(slide => {
    const slideElement = document.createElement('section');
    slideElement.className = 'slide';
    slideElement.innerHTML = `
      <div class="max-w-6xl mx-auto px-6">
        ${slideTemplates[slide.type](slide)}
      </div>
    `;
    container.appendChild(slideElement);
  });

  // Scroll Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('active', entry.isIntersecting);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.slide').forEach(slide => observer.observe(slide));
}

// Initialize Presentation
buildPresentation();