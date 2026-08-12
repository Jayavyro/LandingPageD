import manasPhoto from '../Manas.png'
import sugandhaPhoto from '../Sughandha.jfif'

export const COMPANY_BADGE = 'Company'

export const COMPANY_HEADLINE = 'About Us'

export const COMPANY_INTRO =
  'Avyro was incorporated in October 2025, built on a simple observation: mid-market AEC firms were managing multi-million-dollar projects on spreadsheets and disconnected tools, while the category leader\'s aging stack was heading into a forced migration. We started Avyro to build the connected front office that AEC firms actually need.'

export interface CompanyFounder {
  id: string
  initials: string
  name: string
  role: string
  photo: string
  photoAlt: string
  bio: readonly string[]
}

export const COMPANY_FOUNDERS: CompanyFounder[] = [
  {
    id: 'sugandha-goyal',
    initials: 'SG',
    name: 'Sugandha Goyal',
    role: 'Co-Founder & CEO',
    photo: sugandhaPhoto,
    photoAlt: 'Portrait of Sugandha Goyal',
    bio: [
      'Sugandha Goyal has spent her career at the heart of the AEC industry. She spent more than a decade at HKS, one of the world\'s leading architecture firms, working across global teams, markets, and some of the industry\'s most complex projects. From inside the industry, she saw a problem that became increasingly difficult to ignore: as firms grow, the work becomes more complex, but the technology supporting them often becomes more fragmented.',
      'That experience led to a fundamental belief: AEC firms shouldn\'t have to change the way they work to fit their software. The software should be built around the way they work. Sugandha co-founded FivD to begin solving that problem from within the industry. At Avyro, she is taking that idea further—building a platform designed around the realities of modern AEC firms, rather than adapting old enterprise software to fit them.',
      'As Co-Founder and CEO, Sugandha brings the perspective of an industry insider with a clear ambition: to fundamentally change how AEC firms operate. Avyro brings together the people, projects, proposals, contracts, and operational workflows that keep a firm moving, creating a single system around the business. The goal is not to give AEC firms more software. It is to give them a better way to run.',
    ],
  },
  {
    id: 'manas-mehrotra',
    initials: 'MM',
    name: 'Manas Mehrotra',
    role: 'Co-Founder & Chief Product Officer',
    photo: manasPhoto,
    photoAlt: 'Portrait of Manas Mehrotra',
    bio: [
      'Manas Mehrotra has spent his career building products and leading operations in complex, fast-moving businesses. He began at Johnson & Johnson, where he was selected for its highly selective ITLDP program, and went on to build and scale products and operations across hospitality and vacation rentals in the US, Europe, and India. At OYO, he worked at the intersection of product and operations as the company scaled across markets and operating models. Following OYO\'s acquisition of G6 Hospitality, he continued working with the G6 business and its iconic Motel 6 and Studio 6 brands in the US.',
      'Those experiences shaped a fundamental belief: software should adapt to the way people work, not force people to adapt to software. Too often, technology adds layers of complexity to businesses that are already complex. Manas believes the opposite should be true—great software should understand the work deeply enough to make it simpler. That philosophy is at the heart of Avyro.',
      'At Avyro, Manas leads the product vision with a singular focus: rethink how an AEC firm should operate in a software-driven world. His ambition is to bring people, projects, proposals, contracts, time, and operations together in one intelligent system—technology built around the way firms actually work. Not another tool to manage, but a system that makes the entire business work better.',
    ],
  },
]

