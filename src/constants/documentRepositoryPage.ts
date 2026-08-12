import {
  FolderOpen,
  HardDrive,
  Link2,
  Search,
  Share2,
  Upload,
} from 'lucide-react'
import type { ShortFeaturePageContent } from './shortFeaturePage'
import { PRODUCT_ROUTES } from './productRoutes'
import documentsImage from '../documents.png'

export const DOCUMENT_REPOSITORY_ROUTE = PRODUCT_ROUTES['document-repository']

export const DOCUMENT_REPOSITORY_PAGE: ShortFeaturePageContent = {
  seo: {
    title: 'Document Repository | Avyro for AEC Firms',
    description:
      'Keep contracts, proposals, drawings, and project files in one secure place—organized by project and easy to find, without hunting through email or drives.',
  },

  hero: {
    eyebrow: 'Document Repository',
    headlineBefore: 'Keep every project document',
    headlineAccent: 'in one place',
    tagline: 'Stop searching emails, drives, and folders',
    supporting:
      'From signed contracts and proposals to drawings, reports, and project files—Avyro stores documents securely, keeps them organized, and ties them to the project so your team can find what they need.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
    visual: {
      src: documentsImage,
      alt: 'Avyro document repository folders for project files and agreements',
    },
  },

  overview: {
    eyebrow: 'Overview',
    heading: 'Centralize your project documents',
    body: 'Store and manage every project file through the life of the job. Contracts, proposals, and working files stay together—connected to the client and project, not scattered across inboxes.',
    audienceEyebrow: 'Who uses it',
    audienceHeading: 'Who this helps',
    audience: [
      {
        title: 'Project Managers',
        body: 'Keep project documentation organized and teams aligned on the latest files.',
      },
      {
        title: 'Architects & Engineers',
        body: 'Open drawings, specs, and project files whenever you need them.',
      },
      {
        title: 'Business Development',
        body: 'Pull signed proposals and client agreements in seconds.',
      },
      {
        title: 'Leadership & Operations',
        body: 'Maintain complete project records with visibility across the firm.',
      },
    ],
  },

  benefits: {
    eyebrow: 'Impact',
    heading: 'What this changes for your firm',
    supporting: 'Less hunting for files. More time doing the work.',
    items: [
      {
        title: 'Find documents instantly',
        body: 'Open the right file without searching across multiple systems.',
      },
      {
        title: 'Better collaboration',
        body: 'Everyone works from the latest project documents—not outdated copies.',
      },
      {
        title: 'Fewer information silos',
        body: 'Keep project information together in one secure place.',
      },
      {
        title: 'Clearer project organization',
        body: 'Maintain complete documentation from kickoff to closeout.',
      },
      {
        title: 'Faster decisions',
        body: 'Give teams immediate access to the files they need to keep work moving.',
      },
    ],
  },

  features: {
    eyebrow: 'What you can do',
    heading: 'One home for every project file',
    supporting: 'Organize documents by project, client, and phase—then find them fast.',
    items: [
      {
        icon: FolderOpen,
        title: 'Contracts & files together',
        body: 'Keep contracts, proposals, and project files in one place.',
      },
      {
        icon: HardDrive,
        title: 'Organized by project',
        body: 'Sort documents by project, client, and phase.',
      },
      {
        icon: Upload,
        title: 'Upload & access anywhere',
        body: 'Upload, view, and open files from wherever your team works.',
      },
      {
        icon: Search,
        title: 'Quick search',
        body: 'Find the document you need without digging through folders.',
      },
      {
        icon: Link2,
        title: 'Single source of truth',
        body: 'One trusted set of files for every project—not five conflicting copies.',
      },
      {
        icon: Share2,
        title: 'Share with the team',
        body: 'Give the right people access without emailing attachments again.',
      },
    ],
  },

  screenshot: {
    eyebrow: 'How it flows',
    heading: 'From contract to completion',
    body: 'One secure repository for every document across every project.',
    workflow: [
      'Store Contract',
      'Organize Project Files',
      'Share Documents',
      'Access Anytime',
      'Deliver with Confidence',
    ],
    visual: {
      src: documentsImage,
      alt: 'Avyro document repository folders for project files and agreements',
    },
  },

  finalCta: {
    heading: 'See project files on one record',
    supporting:
      'Bring a project folder mess you know well. We’ll show how contracts and working files stay findable—without another shared drive.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
  },
}
