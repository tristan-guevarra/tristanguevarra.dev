export const siteConfig = {
  name: "Tristan Guevarra",
  fullName: "Tristan Guevarra",
  title: "Software Engineer & Builder",
  bio: "Building internal platforms and developer tooling at TD Bank. Passionate about full-stack systems, CI/CD infrastructure, and shipping ambitious products from zero to one.",
  location: "Kingston, ON",
  university: "Queen's University",
  email: "tristan.guevarra@queensu.ca",
  social: {
    github: "https://github.com/tristan-guevarra",
    linkedin: "https://www.linkedin.com/in/tristanguevarra",
    twitter: "https://x.com/tristan",
  },
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  year: string;
  category: "platform" | "saas" | "tooling" | "finance";
}

export const projects: Project[] = [
{
    title: "CI/CD Pipeline Recommendation Tool",
    description:
      "A FastAPI application that filters and scores six internal pipeline types based on developer inputs—helping teams select the right CI/CD path across CADP, Fenix, EDP-XL, EDP-GT, and more.",
    tags: ["FastAPI", "Python", "HTML", "Developer Experience"],
    year: "2025",
    category: "tooling",
  },
  {
    title: "KRATOS",
    description:
      "Institutional-grade portfolio management platform for Limestone Capital, featuring full trade lifecycle, pitch infrastructure, and real-time analytics dashboards.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Finance"],
    year: "2025",
    category: "finance",
  },
  {
    title: "DecisionOS",
    description:
      "AI-powered structured decision engine with Monte Carlo simulation, multi-criteria scoring, and interactive scenario modeling for high-stakes choices.",
    tags: ["Next.js", "FastAPI", "AI/ML", "Monte Carlo"],
    year: "2025",
    category: "saas",
  },
  {
    title: "URANYS",
    description:
      "Revenue leakage intelligence platform for B2B SaaS companies. Tracks churn risk, payment failures, and expansion opportunities across your customer base using ML scoring. Think \"Datadog for revenue health.\"",
    tags: ["Next.js", "FastAPI", "Machine Learning", "B2B"],
    year: "2025",
    category: "saas",
  },
  {
    title: "BrieflyAI",
    description:
      "AI meeting intelligence platform that captures, transcribes, and distills meetings into actionable summaries and follow-ups.",
    tags: ["Next.js", "AI", "NLP", "SaaS"],
    year: "2025",
    category: "saas",
  },
  {
    title: "CaseFlow",
    description:
      "AI-powered legal matter management. Upload contracts and legal docs, and GPT-4o-mini auto-extracts parties, deadlines, obligations, and risk flags, then generates tasks and timelines. Includes semantic search across all documents.",
    tags: ["Next.js", "FastAPI", "GPT-4o-mini", "AI"],
    year: "2025",
    category: "saas",
  },
  {
    title: "Erebys",
    description:
      "Analytics and dynamic pricing engine for sports academies. Gives academy owners real revenue intelligence and an ML-powered pricing engine that suggests optimal prices based on fill rates, coach ratings, and seasonality. Includes a what-if simulator.",
    tags: ["Next.js", "FastAPI", "Machine Learning", "Analytics"],
    year: "2025",
    category: "saas",
  },
{
    title: "Triacta Inspection Assistant",
    description:
      "WPF desktop application for SE04 certificate management and meter inspection at Metergy, handling PDF generation, SharePoint integration, and Dataverse queries.",
    tags: ["C#", "WPF", ".NET", "SharePoint"],
    year: "2024",
    category: "platform",
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  logo: string;
  href: string;
  rating?: string;
}

export const experiences: Experience[] = [
  {
    company: "TD Bank",
    role: "Software Engineer Intern — DevSecOps, Enabling Products & Pipelines and Platform Engineering",
    period: "2025 – 2026, 2x terms",
    logo: "/logos/tdlogo.png",
    href: "https://www.td.com/ca/en/personal-banking",
    rating: "Co-op Rating: Outstanding",
  },
  {
    company: "Metergy Solutions",
    role: "Software Engineer Intern — Information Technology, Applications and Development",
    period: "2025, 2x terms",
    logo: "/logos/metergylogo.jpg",
    href: "https://www.metergysolutions.com/",
    rating: "Co-op Rating: Outstanding",
  },
  {
    company: "Queen's University",
    role: "Undergraduate Teaching Assistant — Faculty of Engineering and Applied Science",
    period: "2024 – 2025, 2x terms",
    logo: "/logos/queenslogo.jpg",
    href: "https://smithengineering.queensu.ca/index.html",
  },
];

export interface WritingPost {
  title: string;
  description: string;
  date: string;
  tag: string;
  content: string[];
}

export const writing: WritingPost[] = [
  {
    title: "How I Landed My First Internship With Zero Connections",
    description:
      "No referrals, no family hookups, no LinkedIn clout. Just 614 applications, a lot of rejection, and the stubbornness to keep going.",
    date: "2025",
    tag: "Career",
    content: [
      "Let me paint you a picture. It's second year at Queen's. I'm sitting in my dorm room staring at a spreadsheet with 132 rows. Each one is a company I applied to. Each one has a status column. The vast majority say \"Rejected\" or \"No Response.\" A handful say \"Ghosted after OA.\" Two say \"Interviewed.\" Both of those end with \"Rejected.\" And those two hurt more than the other 130 combined.",
      "I didn't have a single connection in tech. No uncle at Google. No family friend who could forward my resume. No one in my contact list who had ever written a line of code professionally. My parents are immigrants who worked in completely different industries. The concept of \"networking your way into a job\" felt like a cheat code that everyone else had and I just... didn't.",
      "## Second Year: The First Attempt",
      "I applied to everything I could find. If a posting said \"Software Engineering Intern\" and didn't require 5 years of experience (some of them did, which is hilarious), I applied. I spent entire weekends customizing cover letters. I tailored my resume for each role. I did those silly HackerRank assessments where you solve two medium LeetCode problems in 90 minutes while your webcam watches you sweat.",
      "The rejection emails became routine. \"Thank you for your interest... after careful consideration... we will not be moving forward.\" I could recite them from memory. Some companies didn't even bother with an email. You'd just check the portal three months later and see \"Position Filled.\" Cool. Thanks for letting me know.",
      "I think the worst part wasn't the rejections themselves. It was watching people around me land interviews through referrals. Someone's older sibling worked at Shopify. Someone's dad knew a VP at RBC. Someone got a coffee chat through a family connection that turned into an interview that turned into an offer. And I'm not hating on them for that. You use what you have. But when you don't have it, it feels like you're playing the game on hard mode while everyone else got the tutorial.",
      "## The Two Interviews That Broke Me",
      "Out of 132 applications in second year, I got two interviews. Two. That's a 1.5% callback rate. I treated both of them like my life depended on it because honestly it kind of felt like it did.",
      "The first one, I prepped for a full week. I practiced system design. I drilled data structures. I researched the company so thoroughly I could have written their annual report. The interview itself went well. Like, really well. I walked out genuinely thinking I nailed it. I was already mentally picking out what I'd wear on day one. I told my friends I felt good about it. I let myself get excited.",
      "The rejection email came four days later. Generic template. No feedback. No explanation. Just \"we've decided to move forward with other candidates.\" I sat on my bed and stared at my phone for a while after that one.",
      "The second interview came a few weeks later. Same thing. Prepped like crazy, walked in confident, thought I crushed it. The interviewer even said \"great answers\" at one point. I replayed that comment in my head for days after. Then the rejection came. Same generic email. Same empty feeling.",
      "Those two rejections hit different from the hundreds of silent ones. Because with those, I could tell myself it was a numbers game, that my resume just got lost in a pile. But with the interviews, I showed up. I gave it everything I had. And it still wasn't enough. That's the part that makes you question yourself. Not \"did I apply to enough places\" but \"am I actually good enough to do this?\"",
      "Summer 2024 came and went without an internship. I watched my peers head off to their placements while I stayed behind. That was a tough pill to swallow.",
      "## What I Learned From Getting Destroyed",
      "It took me a while to process it, but those two failed interviews taught me more than any successful one could have. I started being brutally honest with myself about where I was weak. My projects at the time were decent but not impressive. My technical answers were correct but not deep. I was giving surface-level responses when they wanted someone who could think out loud and show their reasoning.",
      "So I changed my approach. I stopped studying for interviews and started building things that actually challenged me. I picked projects that forced me to learn new tech stacks under pressure. I started writing code every single day, not to prep for a coding assessment but because I genuinely wanted to get better. I treated the rejections as data, not as verdicts on my worth as a person.",
      "I also started cold messaging people on LinkedIn. Not the \"Hi, I'd love to pick your brain\" type of messages. I'd actually look at what the person worked on, find something genuinely interesting about their work, and ask a specific question. Most people didn't respond. But some did. And those conversations taught me more about what companies actually look for than any career advice article ever could.",
      "## Third Year: 614 Applications and a Different Mindset",
      "When third year started, I told myself this time would be different. Not because I was going to get lucky, but because I was going to outwork the odds. I opened a new spreadsheet. By the time I was done, it had 614 rows.",
      "614 applications. I'm not exaggerating. I applied to everything. Every job board, every company page, every obscure posting I could find. But this time, I wasn't just blindly sending resumes into the void. I was better. My projects were stronger. My GitHub was active. I could actually talk about real systems I'd built and real tradeoffs I'd made. The months of grinding after second year had quietly turned me into a different engineer.",
      "## Facing My Fears at the Queen's Tech Fair",
      "One of the turning points was the Queen's Tech Fair. If you've ever been to a career fair, you know the feeling. Hundreds of students in business casual, clutching resumes, forming lines at booths, trying to make small talk with recruiters who've already heard the same pitch 200 times that day. It's intimidating. For someone with zero connections and a track record of rejection, it felt terrifying.",
      "But I went anyway. I forced myself to walk up to booths, shake hands, and actually talk to people. Not the rehearsed elevator pitch I'd memorized. Real conversations. I spoke with recruiters and team members, asked them about the actual work, what their teams were building, what problems they were solving. I was nervous the entire time. My hands were probably sweating through every handshake. But I did it.",
      "That decision to show up and face my fears, to put myself out there in person instead of hiding behind online applications, changed everything. There's something about a face-to-face conversation that a resume can't replicate. People could see that I was genuinely passionate about the work, not just looking for any job I could get.",
      "## The Breakthrough",
      "The breakthrough came from the effort I put in both online and in person. 614 applications, countless cold messages, and the courage to show up at that tech fair all compounded. This time, when the interviews came, something was different. Not because they were easier, but because I was better. Those months of building and failing and learning had quietly made me a stronger engineer and a better communicator. I could talk about tradeoffs because I'd actually made them. I could explain my decisions because I'd actually thought about them. The failures of second year had forced me to level up in ways I wouldn't have if I'd gotten an offer the first time around.",
      "They gave me the offer. Summer 2025. Two years of grinding. 132 + 614 applications. 2 failed interviews. And finally, 1 yes.",
      "## The Part Nobody Talks About",
      "Getting the offer felt incredible for about 24 hours. Then the imposter syndrome hit like a truck. I kept thinking they made a mistake. That they'd realize I wasn't as good as the other candidates. That I'd show up on day one and immediately get exposed as someone who didn't belong there.",
      "None of that happened. I showed up, I worked hard, I asked a lot of questions (probably too many), and I figured things out. Turns out, that's kind of what internships are for. Nobody expects you to know everything. They expect you to learn fast and care about the work. And if you've spent two years grinding through 746 applications and teaching yourself things just to have a shot, you've already proven you can do both of those things.",
      "## What I'd Tell Someone Going Through It",
      "If you're reading this and you're in the middle of the grind, here's what I wish someone had told me: the process is broken and it's not your fault. The tech hiring pipeline is genuinely not designed for people without connections. It rewards referrals, brand-name schools, and prior internship experience (which is a wild catch-22 when you're looking for your first one).",
      "But here's what I'd add that I didn't know in second year: show up in person. Go to the career fairs. Talk to real people. It's scary, and your hands will shake, and you'll probably stumble over your words. Do it anyway. The worst that happens is you have an awkward conversation. The best that happens is someone remembers your face when your resume hits their desk.",
      "And if you got an interview and didn't get the offer, and you're sitting there wondering what went wrong when you thought you did everything right, I've been there. It's brutal. But it's also not the end of the story. Those failed interviews will teach you things that no prep course ever will. Let them make you better, not bitter.",
      "Build things. Put them online. Make your GitHub your resume. Apply to more places than feels reasonable. Send cold messages to strangers. Be specific and genuine when you reach out. Show up to events even when it terrifies you. And most importantly, don't let the rejections make you think you're not good enough. The system is noisy. Most rejections have nothing to do with your ability and everything to do with timing, luck, and whether a recruiter happened to open your application on a good day.",
      "You'll get there. It just might take 746 tries.",
    ],
  },
  {
    title: "From Zero to SaaS in a Weekend",
    description:
      "What actually happens when you try to build and ship a full-stack product in 48 hours. Spoiler: it involves a lot of coffee and questionable git commits.",
    date: "2025",
    tag: "Building",
    content: [
      "It started the way most bad ideas do: at 11pm on a Friday, sitting on my bed, thinking \"how hard could it be?\"",
      "I had this idea bouncing around my head for a week. A simple SaaS tool. Nothing crazy. Just a clean UI, a backend API, a database, auth, payments, and a landing page. You know, simple. (It was not simple.)",
      "I gave myself a rule: by Sunday night, this thing has to be live. Not \"almost done.\" Not \"just needs a few tweaks.\" Live. Deployed. A real URL that a real person could visit and use. I set a timer, opened VS Code, and started typing.",
      "## Friday Night: The Honeymoon Phase",
      "The first few hours are always the best. You're scaffolding the project. Everything is clean. Your file structure is pristine. Your git history is immaculate. You're making commits like \"init project structure\" and \"add base layout\" and feeling like an absolute architect.",
      "I spun up a Next.js app, set up Tailwind, created a FastAPI backend, and connected a PostgreSQL database. By 2am I had a working frontend that talked to a working API that read from a working database. I was on top of the world. I was a genius. This was going to be easy.",
      "I went to sleep at 2:30am. This was the last time I felt confident.",
      "## Saturday: The Reality Check",
      "Woke up at 8am because my brain wouldn't shut off. Opened my laptop. Immediately remembered that I hadn't done auth yet. Auth is the part of every project where you question every life decision that led you to become a software engineer.",
      "I spent three hours fighting with JWT tokens. Then I realized my database schema was wrong and I needed to migrate. Then the migration broke something in the API. Then I fixed the API but the frontend was sending the wrong payload format. Then I fixed the payload but the CORS config was blocking requests. It was like playing whack-a-mole except every mole spawns two more moles.",
      "By 4pm on Saturday I had: auth that mostly worked, an API with 12 endpoints (3 of which had bugs I was pretending didn't exist), a frontend that looked decent on desktop but horrifying on mobile, and a git history that included commits like \"fix fix\" and \"please work\" and \"WHY.\"",
      "I ordered pizza. I ate the entire thing. I kept coding.",
      "## Saturday Night: The Dark Hours",
      "This is the part of the weekend build that nobody puts in their Twitter thread. Between 9pm Saturday and 2am Sunday, you enter a state that's somewhere between flow state and delirium. You're making changes but you're not entirely sure what they do. You're copying code from Stack Overflow answers from 2019 and hoping for the best. Your console has 47 warnings and you've decided they're \"not critical.\"",
      "At midnight I tried to add Stripe integration. This was a mistake. Stripe's docs are actually pretty good but my brain was running on fumes and pizza grease. I spent an hour debugging a webhook that wasn't firing only to realize I had a typo in the endpoint URL. One character. One. I stared at my screen for a full minute after finding it.",
      "Went to bed at 3am. The app was ugly but functional. Good enough.",
      "## Sunday: Ship It Or Quit It",
      "Sunday morning I had a choice. I could spend the day polishing and perfecting, or I could ship. I chose to ship. Perfection is the enemy of actually putting things on the internet.",
      "I spent the morning fixing the three most embarrassing bugs, making the mobile layout not terrible, writing a landing page (this took way longer than it should have), and setting up deployment. I deployed to Vercel for the frontend and Railway for the backend.",
      "The first deploy failed. Of course it did. Environment variables. It's always environment variables. Fixed it. Deployed again. It worked. I had a live URL. I clicked around the app as a real user would. It worked. It actually worked.",
      "I posted it on Twitter at 7pm on Sunday. Total build time: roughly 40 hours across the weekend if you count the time I spent staring at my screen questioning my career choices.",
      "## What I Actually Learned",
      "The product itself isn't really the point of this story. What matters is what the process taught me. When you build something from zero to deployed in a weekend, you learn what actually matters and what doesn't.",
      "What matters: shipping. Getting it in front of people. Making the core feature work really well. Having auth that doesn't leak data. Having a landing page that explains what the thing does in 10 seconds.",
      "What doesn't matter: perfect code. Full test coverage. A component library. Pixel-perfect designs. That cool animation you saw on Dribbble. None of that matters if the thing never sees the light of day.",
      "I've done this a few more times since then. Each time I get a little faster, a little less panicked, and my Saturday night git commits get slightly less unhinged. The framework I've built in my head for rapid prototyping is genuinely one of the most useful skills I've developed as an engineer.",
      "My advice? Pick a weekend. Pick an idea. Set the deadline. And just build. It'll be messy, it'll be stressful, and you'll probably eat too much pizza. But you'll ship something real, and that feeling is worth every frustrating hour.",
    ],
  },
  {
    title: "An Engineer Walks Into a Trading Floor",
    description:
      "How I went from writing for loops to reading 10-Ks, and what it took to go from pure engineering to understanding finance well enough to work at TD Securities.",
    date: "2025",
    tag: "Finance",
    content: [
      "Six months ago, if you asked me what a DCF was, I would have guessed it was some kind of data format. Like JSON but worse. I was a pure engineering kid. I wrote code, I built systems, I thought in terms of APIs and databases and deployment pipelines. The stock market was something that existed in the background of my life, like weather or traffic.",
      "Then I decided I wanted to work at TD Securities. And I realized very quickly that I had a lot of learning to do.",
      "## Starting From Actually Zero",
      "I'm not exaggerating when I say I started from nothing. I didn't take a single finance or econ course in university. My background is computer engineering. The closest I got to finance was building KRATOS for Limestone Capital, which ironically taught me more about database schemas than about actual investing.",
      "So I did what any engineer would do when faced with a knowledge gap: I treated it like a new tech stack. I made a learning plan. I set up a Notion board. I found resources. I gave myself deadlines. The same way I'd learn a new framework, except instead of React docs I was reading Investopedia articles about EBITDA at 1am.",
      "## The Learning Curve is Steep (and Weird)",
      "Finance has this funny property where the concepts aren't individually that hard, but they all reference each other in circular ways. To understand valuation you need to understand financial statements. To understand financial statements you need to understand accounting. To understand why any of this matters you need to understand how markets price risk. And to understand how markets price risk you need to understand... valuation. It's like trying to learn a programming language where every function calls every other function.",
      "I started with the basics. What's a stock. What's a bond. What's the difference between debt and equity. How do you read a balance sheet, an income statement, a cash flow statement. This stuff took me about two weeks to get comfortable with, mostly because I kept drawing parallels to things I already knew. A balance sheet is basically a state snapshot. An income statement is like a log of transactions over a period. Cash flow is the actual runtime behavior vs. the theoretical model. Once I started mapping finance concepts to engineering concepts, things clicked faster.",
      "## The Three Things That Actually Helped",
      "First: reading 10-K filings. Actual SEC filings from real companies. This sounds incredibly boring and it kind of is, but it's also the single best way to understand how a business actually works. I started with companies I used every day. Apple. Netflix. Shopify. Reading their financials while already understanding their products gave me a bridge between \"I know what this company does\" and \"I know how this company makes money.\"",
      "Second: building financial models in spreadsheets. As an engineer, my instinct was to write Python scripts for everything. But forcing myself to use Excel and build DCF models by hand taught me the intuition behind the numbers in a way that writing code wouldn't have. When you manually link a revenue growth assumption to a five-year projection, you feel how sensitive the output is to your inputs. It's like the difference between using a library and implementing the algorithm yourself.",
      "Third: talking to people who actually work in finance. I cold messaged a bunch of analysts and associates on LinkedIn (sensing a pattern here) and asked them what they wish they'd known before starting. The most common answer was some version of: \"It's less about being a math genius and more about being able to tell a story with numbers.\" That resonated with me because engineering is the same way. The best engineers aren't the ones who write the most clever code. They're the ones who can explain why they built something the way they did.",
      "## Where Engineering Actually Helps",
      "Here's the thing nobody told me: having an engineering background is actually a huge advantage in finance. Not because you can build models faster (though you can). But because engineers think in systems, and finance is just a system.",
      "When I look at a company now, I don't just see numbers on a page. I see a system with inputs, outputs, feedback loops, and failure modes. Revenue is an input. Costs are an input. Margins are a derived metric. Growth is a rate of change. Risk is a probability distribution. I already knew how to think about all of these things. I just didn't know the finance vocabulary for them.",
      "The Python and data skills help too, obviously. Being able to pull market data, clean it, analyze it, and visualize it in the time it takes someone else to set up a VLOOKUP is a real superpower. I built a few internal tools during my work that automated analyses people were doing manually, and that was probably the fastest way to prove my value.",
      "## The Honest Truth",
      "I'm not going to pretend I'm now some finance wizard. I'm still learning. There are senior analysts who can glance at a set of financials and immediately spot the story, and I'm nowhere near that level. I still have to look things up. I still mix up terminology sometimes. I still feel like the engineering kid who wandered into the wrong building.",
      "But that's kind of the point. You don't need to master everything before you start. You just need to be curious enough to keep learning and humble enough to admit what you don't know. The intersection of engineering and finance is genuinely one of the most interesting places to be right now, and if you're an engineer who's been finance-curious but intimidated by the learning curve, I promise you it's more approachable than it looks.",
      "Just maybe don't start by reading a 10-K at 1am. That part was a bad idea.",
    ],
  },
];
