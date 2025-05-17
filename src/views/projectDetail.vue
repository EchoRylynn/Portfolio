<template>
    <section class="project-detail">

      <!-- Project Name -->
      <h1>{{ projectData.title }}</h1>

      <!-- Project Video -->
      <iframe 
        v-if="projectData.video" 
        :src="projectData.video" 
        class="w-[80vw] max-h-[98vh] h-auto object-contain object-left aspect-video mb-4"
        allowfullscreen>
      </iframe>

      <!-- Project Image -->
      <img 
        v-if="projectData.image"  
        :src="projectData.image" 
        alt="Project Image" 
        class="w-[80vw] max-h-[98vh] h-auto object-contain object-left mb-4"/>
      
      <!-- Project Group Member -->
      <div 
          v-if="projectData.members"
          class="mb-4">
        <h2>Group Members: </h2>    
        <p
          v-for="(para, index) in projectData.members" :key="index">
          {{ para }}
          </p>
      </div>

      <!-- Project Short Intro -->
      <h2 class="mb-4">Introduction</h2>
      <div class="space-y-4 mb-4">
        <p v-for="(para, index) in projectData.description" :key="index">
          {{ para }}
          </p>
        </div>

      <!-- Project Tools -->
      <h2 class="mb-4">Tools</h2>
      <div class="mb-4">  
        <p v-for="(para, index) in projectData.tool" :key="index">
          {{ para }}
          </p>
      </div>

      <!-- Project Work Details -->
      <h2 class="mb-4">Work</h2>
      <div class="space-y-4 mt-4 pl-[1rem]" >
        <div v-for="(block, index) in projectData.work" :key="index">
          <h3> {{ block.title }} </h3>

          <!-- img -->
          <figure v-if="block.type === 'image'"  @click="openFile(block.src)">
            <img 
            :src="block.src" 
            :alt="block.alt || ''" 
            class="w-[80vw] max-h-[98vh] h-auto object-contain object-left">
            <figcaption v-if="block.caption" class="text-sm text-gray-500 mt-1"> {{ block.caption }}</figcaption>
          </figure>

          <!-- Video -->
          <iframe
            v-else-if="block.type === 'video'"
            :src="block.src"
            class="w-[80vw] max-h-[98vh] h-auto object-contain object-left aspect-video mb-4"
            allowfullscreen
            ></iframe>

          <!-- PDF -->
          <div
            v-else-if="block.type === 'PDF'"
            class="w-[80vw] max-h-[98vh] h-auto overflow-auto"
            @click="openFile(block.src)"
            >
            <PdfEmbed
              :source="block.src"
              style="width: 100%; height: auto;"
              />
            </div>

          <!-- Text -->
            <div
              v-else-if="block.type === 'text'"
              class="space-y-2 ml-2 mr-4">
              <p v-for="(line, i) in block.value" :key="i">
                {{ line }}
              </p>
            </div>

          <!-- Links -->
            <div
              v-else-if="block.type === 'link'"
              class="ml-4 mr-4 underline hover:text-d2">
              <div v-for="(link, i) in block.value" :key="i">
                <a 
                  :href="link.url" 
                  target="_blank">
                  {{ link.text }}
                </a>
              </div>
            </div>


          <!-- Gallery / Multi Photos Section -->
            <div 
              v-else-if="block.type === 'gallery'"
              class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <img 
                  v-for="(image, i) in block.src"
                  :key="i"
                  :src="image"
                  :alt="'Gallery Image' + i"
                  class="w-full h-auto object-contain object-left" />
              </div>
            
            </div>

          <!-- Demo Video / Multi-videos Section -->
            <div 
              v-else-if="block.type === 'demoVideos'"
              class="space-y-4">    
                <iframe
                  v-for="(video, i) in block.src"
                  :key="i"
                  :src="video"
                  class="w-[60vw] aspect-video"
                  frameborder="0"
                  allowfullscreen>
                </iframe>              
            </div>

          <!-- Demo Video / Multi-videos Section -->
          <div>

          </div> 



        </div>
      </div>
      <BacktoTop />
      <ProjectNav />
    </section>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { computed, onMounted, onUnmounted, ref } from 'vue'
  import PdfEmbed from 'vue-pdf-embed'
  import BacktoTop from '../components/BacktoTop.vue'
  import ProjectNav from '../components/ProjectNav.vue'

  const route = useRoute()

  function openFile(url) {
    window.open(url,'_blank')
  }

  // Project Data 
  const projects = {
    // --------------------
    viviad: {
      title: ' Canon Experience plaza - Viviad',
      description: [
        'NOTE: Graduation Internship Project.',
        'Canon Production Printing (CPP) is an innovative company, creating exceptional technologies, products and services for the main markets in printing and workflow management. CPP clients range from Print Service Providers, Print Factory and Print Specialists.',
        'CPP R&D considers customers as the decision-making compass and promotes a customer mindset within the R&D organization.',
        'In order to develop useful and successful products, UX researchers in design department do research about the clients, users, market, printing applications, etc. The default deliverables are reports. One of the goals of Design Research is to communicate in multiple, more visual and storytelling ways.',
        'In the mission to promote a customer mindset within the organization, R&D created a permanent physical place to “experience” insights: The Experience Plaza. In this case, creating an interactive work / installation might be useful to show specific information instead of a report or current passive information presentation.',
        'Therefore, the project goal is come up with a solution to share internally (R&D), customer/ user/ market information, in an engaging, interactive, creative, tangible and storytelling way instead of reading reports.'
      ],
      tool: [
        'Software: Figma, JavaScript, Adobe Suite',
        'Hardware: Touchscreen, Webcam'

      ],
      video: 'https://www.youtube.com/embed/JzEWey25DSw?si=PLwVtmm9iJLIhpQs',
      work: [
        {
          title: 'On Location Implementation',
          type: 'image',
          src: '/img/projects/Viviad/IMG_1779.jpg'
        },

        {
          title: 'Presentation',
          type: 'image',
          src: '/img/projects/Viviad/IMG_1965.jpg'
        },

        {
          title: 'Research Questions & Methods',
          type: 'image',
          src: '/img/projects/Viviad/researchMethods.png'
        },

        {
          title: 'Timeline',
          type: 'PDF',
          name: 'Canon Viviad Project Timeline',
          src: '/img/projects/Viviad/Timeline.pdf'
        }
      ],
    },

    // --------------------

    eventix: {
      title: 'Eventix Wrapped-Up Summary Webpage',
      description: [
        'Eventix is an online ticketing and event management platform based in the Netherlands. The company was founded in 2017 and provides event organizers with tools to sell tickets, manage registrations, and promote events.',
        'While running an event through the Eventix platform, a lot of information is gathered. With the help of all this data, our project group is tasked with creating a “Spotify Wrapped”-like solution which can be shared by the Eventix Customer Success team with the organizer at the end of the year.',
        'The project results include the development of both the frontend and backend, rendering it fully prepared for real-world implementation.'
      ],
      image: '/public/img/projects/Eventix/mockup.jpg',
      members: [
        'Andrei Sava',
        'Gabriella Geboers',
        'Ruben van de Ven',
        'Stefan Popescu',
        'Xinru Bao'
      ],
      tool: [
        'Adobe XD, Adobe Illustrator, HTML, CSS,',
        'JavaScript, Python, Github'
      ],
      work: [
        {
          title: 'Research Methods',
          type: 'text',
          value: [
            'Desk Research',
            'Target User Research',
            'User Requirements Specification',
            '...'
          ]
        },
        {
          title: 'UX Flowchart',
          type: 'image',
          src: '/public/img/projects/Eventix/uxf.jpg'
        },
        {
          title: 'Prototypes Overview (cooperate with Gabriella & Ruben)',
          type: 'image',
          src: '/public/img/projects/Eventix/prototypes.png'
        },
        {
          title: 'Prototype Recommendation',
          type: 'image',
          src: '/public/img/projects/Eventix/prototypes2.png'
        },
        {
          title: 'Frontend Development',
          type: 'link',
          value: [
            {text: 'Link to Github Repository', url: 'https://github.com/Eventix-Spotify-Wrapped/EventixWebApp'}
          ]
        },
        {
          title: 'Usability Test & A/B Test',
          type: 'link',
          value: [
            {text: 'Link to Test Analysis Report', url: '/public/img/projects/Eventix/usabilityTestandABTest.pdf'}
          ]
        },
        {
          title: 'Test Photos',
          type: 'gallery',
          src: [
            '/public/img/projects/Eventix/v1.png',
            '/public/img/projects/Eventix/v2.png',
            '/public/img/projects/Eventix/v3.png',
            '/public/img/projects/Eventix/v4.png',
          ]
        }
      ],
    },

    // --------------------

    pinkpop: {
      title: 'Rayo - Pinkpop Interactive Landmark',
      description: [
        '"Move The Earth and Light the Sky"',
        'The challenge of this project is to design an interactive landmark for Pinkpop that is unique to its brand and image together with The Cre8ion.Lab.',
        'The Cre8ion.Lab is a full-service agency with over 22 years of experience in digital services, branding, and advertising. They create products that meet the real needs of the user. One of their clients is Pinkpop.',
        'Pinkpop is the longest existing outdoor festival and is in the Netherlands. Every year they have big acts and lots of audience. They aim to attract more audience through the interactive landmark, offering them an iconic, unique, and unforgettable experience.',
        'The final deliverable is an audio-visualization landmark that listens to live audio and generates visual displays on the landmark.'
      ],
      image: '/public/img/projects/Pinkpop/frontImg.jpg',
      members: [
        'Rachel Baerts',
        'Riangelo Christie',
        'Stefen Vienerius',
        'Xinru Bao'
      ],
      tool: [
        'Adobe Suit, Processing, P5.JS, Blender, Touch Designer, 3D printer'
      ],
      work: [
        // 4 Demo videos
        {
          title: 'Audio Visualization Demo Videos',
          type: 'video',
          src: 'https://www.youtube.com/embed/BJRov3QkddI',
        },
        {
          title: '',
          type: 'video',
          src: 'https://www.youtube.com/embed/fi9EbYU7Y88',
        },
        {
          title: '',
          type: 'video',
          src: 'https://www.youtube.com/embed/9u42IIXKoZM',
        },
        {
          title: '',
          type: 'video',
          src: 'https://www.youtube.com/embed/zfdkDDuNIbM'
        },

        // 2 prototype videos
        {
          title: 'Final Prototype',
          type: 'video',
          src:'https://www.youtube.com/embed/XmPW4rfL-TA',
        },
        {
          title: '',
          type: 'video',
          src:'https://www.youtube.com/embed/biq1z8rO28w'
        },
      ],
    },

   // --------------------
    reversePrompt: {
      title: 'Reverse Prompt',
      description: [
        '"The Echo of Human Artist"',
        'Before the advent of the earliest photographic process in 1839, the focus of painters is representing reality. Since photography could depict the world more accurately than painting, the latter had to reinvent itself. Consequently, artists redirected their focus towards conveying emotions and impressions, giving rise to pivotal movements such as Impressionism and Expressionism.',
        'Nowadays, artists have mixed feelings about Al generated works, with some viewing it as an innovative tool that expands creative possibilities, while others express concerns about authenticity, potential job displacement, and ethical considerations.',
        'The exhibition utilizes ChatGPT to craft descriptions of renowned paintings worldwide. These descriptions subsequently serve as prompts, guiding Adobe Firefly in the generation of corresponding visual artworks.',
        'In this exhibition, the Al generator, same as photography, is seen as the great drive for the reinvention.'
      ],
      video: 'https://www.youtube.com/embed/ApjlGmGWWsA',
      tool: [
        'AI, Adobe Suit, HTML, CSS, JavaScript (MindAR.JS), Processing'
      ],
      work: [
        {
          title: 'Exhibition Mockup',
          type: 'image',
          src: '/public/img/projects/ReversePrompt/RPIntroMU.jpg'
        },
        {
          title: '',
          type: 'image',
          src: '/public/img/projects/ReversePrompt/RPPosterInMU.jpg'
        },
        {
          title: '',
          type: 'image',
          src: '/public/img/projects/ReversePrompt/posters.jpg'
        },
        {
          title: '',
          type: 'image',
          src: '/public/img/projects/ReversePrompt/PXL_20220321_133710758-2.jpg'
        },
        {
          title: 'On-location Test',
          type: 'image',
          src: '/public/img/projects/ReversePrompt/IMG_2637.jpg'
        },
      ],
    },

    // --------------------
    Effenaar: {
      title: 'Effenaar AR Website',
      description: [
        'This is a personal individual project completed during my fifth-semester internship. I completed my internship at DriveMKB, which support local SMEs (Small and Medium-sized Enterprises) by offering help in the digital transformation of a company and by providing the necessary knowledge that this change entails.',
        'The client for this project is Effenaar. Effenaar is not only a multi-purpose music venue, but also dedicated to creating Smart Venue which provides space for innovative high-tech experiments in the fields of VR/AR, full-body scanning, 3D printing and big data, to the point of enhancing the musical experience of visitors as well as artists.',
        'In order to provide a new digital experience and modern loyalty system for Effenaar, I built an AR (Augmented Reality) website. The primary reason for using a website instead of a mobile application is that nowadays, people already have too many applications downloaded, and most of them have not been opened for a long time.',
        'Web AR is convenience to use, easy to share and also support cross-platform and multi-device, such as Android and iOS.',
      ],
      tool: [
        'Adobe Suit, HTML, CSS, JavaScript (AR.JS, MindAR.JS, Three.JS), Aframe',
      ],
      work: [
        {
          title: 'Version Control',
          type: 'image',
          src: '/public/img/projects/Effenaar/ARWebDevFlow.png'
        },
        {
          title: 'Web AR Development Tool Research and Analysis',
          type: 'link',
          value: [
            {text: 'Link to Analysis Report', url: '/public/img/projects/Effenaar/ARWebsiteDevelopmentToolResearch&Analysis.pdf'}
          ]
        },
        {
          title: 'Personas',
          type: 'gallery',
          src: [
            '/public/img/projects/Effenaar/persona1.jpeg',
            '/public/img/projects/Effenaar/persona2.jpeg',
            '/public/img/projects/Effenaar/persona3.jpeg'
          ]
        },
       
        // {
        //   title: 'User Stories',
        //   type: 'text',
        //   value: [
        //     'As an artist I would like to have some special merch so I can stand out from other artists',
        //     'As a fan of the artist / band who is going to perform at Effenaar, I would like to buy some special merch which only available at Effenaar and different from my other collections, in this case I purchase something value for money.',
        //     'As a staff member from Effenaar, I would like to have some memorable on-location experiences to attract people who come to Effenaar and stay longer.',
        //     'As a minor (age 18-) I would like to have a virtual experience at home / with friends so that I will not miss too much due to being inadmissible to the concert venue / bar.',
        //     'As a fan of Effenaar, I would like to have a platform to save my Effenaar memories so I can look back through them and share them with my friends easily.'

        //   ]
        // },
        {
          title: 'Mockups',
          type: 'image',
          src: '/public/img/projects/Effenaar/effenaarcard.jpg'
        },
        {
          title: '',
          type: 'image',
          src: '/public/img/projects/Effenaar/wristband.jpg'
        },

      ]
    },

    // --------------------
    WinstonBB: { 
      title: 'Winston B&B GLOW Festival 2022',
      description: [
        "This is a personal individual project but NOT an offical porject of GLOW 2022. Winston B&B combines a hotel and a restaurant, located Stratumseind, a street of 225 meters long that runs from the Catherine Church to the Dommelbrug and is known for its vibrant nightlife in Eindhoven. During GLOW Festival 2022, Winston B&B would like to standout from other buildings on the street to grab visitors' attention.",
        'The final product is a 5 minutes audio-visualization video projected on the building.',
      ],
      tool: [
        'Software: Touch Designer, Adobe Premiere Pro, Adobe After Effects',
        'Hardware: Projector'
      ],
      video: 'https://www.youtube.com/embed/Zl-K99akleg',
      work: [
        {
          title: 'On Location Implementation',
          type: 'video',
          src: 'https://www.youtube.com/embed/nkb-30qHjDA'
        },
        {
          title: 'Project Screenshot',
          type: 'image',
          src: '/public/img/projects/GLOW/td01.png'
        },
        {
          title: '',
          type: 'image',
          src: '/public/img/projects/GLOW/td02.png'
        },
        {
          title: '',
          type: 'image',
          src: '/public/img/projects/GLOW/td03.png'
        },
        {
          title: '',
          type: 'image',
          src: '/public/img/projects/GLOW/td04.png'
        },
        {
          title: '',
          type: 'image',
          src: '/public/img/projects/GLOW/td05.png'
        },
        {
          title: '',
          type: 'image',
          src: '/public/img/projects/GLOW/td06.png'
        },
      ],
    },

    // --------------------
    DDW22: {
      title: 'Dutch Design Week 2022: Dynamic Identity',
      video: 'https://www.youtube.com/embed/Ch9ADI5XjdY',
      description: [
        'Together with Fontys ICT teachaers, Delta students, Studio Krom and Hyperculture, I joined Dutch Design Week 2022 with my Dynamic Identity interaction installation. This time I combined my motion detective with visual elements created by Hyperculture in order to have the design consistency with other parts of the project.',
        'Furthermore, one of my goals in this project was to delve into how interactive methods can benefit the user experience. Therefore, I also observed visitors on site.',
        'Special thanks to FHICT, for giving me the opportunity to exhibit my work at DDW.',
        
      ],
      tool: [
        'Software: TouchDesigner',
        'Hardware: Camera, Projector'
      ],
      work: [
        {
          title: 'Concept Explanation',
          type: 'text',
          value: [
            '-',
            'Algorithm & Blues',
            'Algorithms are getting smarter and can increasingly help us in life. Do we also listen to those algorithms if that would be good for us?',
            "To answer this question, we look at how people interact with each other. In humans, emotions are very important. The things really important to us we do with a different emotional value than the things we do which don't matter as much.",
            "That's what Algorithm & Blues is all about: can we train algorithms to deal with emotion, making the interaction more human?",
            '-',
            'Dynamic identities: what if these could talk?',
            'We present research on the interaction between humans and the building. Not only how we experience the building, but also what the building thinks of us and what feedback it gives us in return.'
          ]
        },
        {
          title: 'On Location Video',
          type: 'video',
          src:'https://www.youtube.com/embed/dsl7oDXqy4Q',
        }
      ]
    },

    // --------------------
    DynamicIdentityFontys: {
      title: 'Dynamic Identity - Fontys InnovationLab',
      video: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6979726351419244544',
      image: '/public/img/projects/DDWDynamicIdentity/frontpageImage.png',
      description: [
        'This project is about the dynamic identity design of Fontys InnovationLab. ',
        'There is a hall which is about the person responsible for the innovation in the Fontys ICT InnovationLab. This person’s identity is reflected, warped and abstracted. This person is you. This hall is about you and your innovative dynamic identity.',
        'The building is happy that you are here today. No one is alone, no one is an island. Everyone has some connections with other people or things around the world. The first connection between you and Fontys innovation lab is done by the welcoming. Building and people accompany with each other, connect with each other, create together.'
      ],
      tool: [
        'Software: Adobe AE, Touch Designer',
        'Hardware: Camera, Projector'
      ],
      work: [
        {
          title: 'Rapid Prototype',
          type: 'image',
          src: '/public/img/projects/DyIdII/rapidprototype.jpg'
        },
        {
          title: '',
          type: 'video',
          src:'https://www.youtube.com/embed/L4y-YL14Mlc',
        },
        {
          title: 'Touch Designer Workflow',
          type: 'image',
          src: '/public/img/projects/DyIdII/tdfile.png'
        },
        {
          title: 'Prototype',
          type: 'video',
          src:'https://www.youtube.com/embed/PW143QBW_Uo',
        },
      ]
    },

    // --------------------
    name: {
      title: 'projectName',
      description: [
        'description',
        'Intro',
       
      ],
    },
  }
  
  // Get Project Data
  const projectData = computed(() => {
    return projects[route.params.id] || {
      title: 'Project Not Found',
      description: '',
      image: '',
    }
  })
  </script>
  

  <style scoped>
    .project-detail {
        padding: 2rem;
        padding-top: 6rem;
    }

    h1 {
      font-weight: 400;
      margin-bottom: 2rem;
    }

    p {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    
  </style>
