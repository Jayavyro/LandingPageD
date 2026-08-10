export interface StoryBeat {
  id: string
  number: string
  label: string
  question: string
  body: string
  punch: string
}

export const THE_STORY_TAG = 'The Story'

export const THE_STORY_INTRO =
  'Every firm we talked to had the same Monday morning problem.'

export const THE_STORY_CLOSE =
  'One button. One line. One dashboard. One number.'

export const THE_STORY_CLOSE_MUTED =
  "That's not software. That's just how a well-run firm should already work."

export const THE_STORY_BEATS: StoryBeat[] = [
  {
    id: 'surprise',
    number: '01',
    label: 'The Surprise',
    question: "Most firms find out they blew the budget after it's already gone.",
    body: 'We moved the budget into the plan itself. Milestones, deliverables, and spend, side by side, updating as the work happens. Not a postmortem you read next month. A dashboard you can act on this afternoon.',
    punch: "That's Project Management, with the budget built in.",
  },
  {
    id: 'question',
    number: '02',
    label: 'The Question',
    question: '"Who\'s free?"',
    body: "Today, the answer lives in six inboxes, three spreadsheets, and one exhausted ops manager's memory. We thought that was ridiculous. So we built a button. Every person. Every project. Every hour — accounted for, right now, not by Friday.",
    punch: "That's Resource Allocation. At a click.",
  },
  {
    id: 'chore',
    number: '03',
    label: 'The Chore',
    question: 'Nobody trusts a timesheet.',
    body: 'Least of all the person filling one in at 6pm on a Friday, trying to remember what Tuesday looked like. So we moved it into the work itself. Log time where the work already lives. Seconds, not guesswork — and nothing to reconstruct later.',
    punch: "That's Smart Timesheets.",
  },
  {
    id: 'real-question',
    number: '04',
    label: 'The Real Question',
    question: 'How is the studio actually doing?',
    body: "Not last quarter's report. Not the deck someone assembles on the third of the month. The one number that decides whether this is a good year — and you can see it on any given Tuesday, live.",
    punch: "That's real-time productivity and utilization.",
  },
]
