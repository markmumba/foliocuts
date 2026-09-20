export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: {
    type: "paragraph" | "heading" | "list";
    text?: string;
    items?: string[];
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-manage-barbershop-commissions",
    title: "How to Manage Barbershop Commissions Without the Headache",
    excerpt:
      "Commission disputes are the number one source of tension in barbershops. Here's how to set up a system that pays everyone fairly — automatically.",
    date: "15 September, 2026",
    readTime: "5 min read",
    category: "Operations",
    image: "/blog/commissions.jpg",
    content: [
      {
        type: "paragraph",
        text: "If you run a barbershop with more than two chairs, you've probably had that end-of-day conversation. A barber thinks they're owed more. You pull out the notebook. The numbers don't add up. Sound familiar?",
      },
      {
        type: "heading",
        text: "Why manual commission tracking fails",
      },
      {
        type: "paragraph",
        text: "Most barbershops in Kenya still track commissions by hand — in a notebook, on a whiteboard, or in someone's head. The problem isn't the people, it's the process. When you're busy serving customers, it's easy to miss a service, forget a rate, or lose track of who did what.",
      },
      {
        type: "paragraph",
        text: "The result? At the end of the day, you're doing maths when you should be heading home. And when the numbers feel off, trust erodes — even among a tight-knit team.",
      },
      {
        type: "heading",
        text: "Set your rates once, calculate forever",
      },
      {
        type: "paragraph",
        text: "With a digital system like FolioCuts, you configure commission rates per staff member, per service, just once. Every time a service is completed and paid for, the commission is calculated automatically. No spreadsheet. No mental arithmetic.",
      },
      {
        type: "list",
        items: [
          "Set different rates for different staff and services",
          "Commissions calculated the moment payment is recorded",
          "Daily summary each barber can check themselves",
          "Clear breakdown prevents disputes before they start",
        ],
      },
      {
        type: "heading",
        text: "Transparency builds trust",
      },
      {
        type: "paragraph",
        text: "When every barber can see exactly what they earned and how it was calculated, there's nothing to argue about. The system becomes the source of truth — not the owner's memory. That's the kind of clarity that keeps good barbers coming back to your shop.",
      },
    ],
  },
  {
    slug: "mpesa-payments-for-barbershops",
    title: "M-Pesa Payments for Barbershops: A Complete Guide",
    excerpt:
      "Your customers already use M-Pesa for everything. Here's how to integrate it into your barbershop workflow without switching between apps.",
    date: "10 September, 2026",
    readTime: "4 min read",
    category: "Payments",
    image: "/blog/mpesa.jpg",
    content: [
      {
        type: "paragraph",
        text: "M-Pesa is the backbone of payments in Kenya. Your customers use it to pay for groceries, fuel, and rent. But in most barbershops, it's still a separate step — open the M-Pesa app, check for the notification, write it down somewhere. That workflow has gaps.",
      },
      {
        type: "heading",
        text: "The problem with manual M-Pesa tracking",
      },
      {
        type: "paragraph",
        text: "When payments come through M-Pesa but aren't tied to a service record, you lose visibility. Was that KES 800 for a haircut or a beard trim? Which barber served the customer? Did the commission get calculated? These are questions you shouldn't have to answer at the end of the day.",
      },
      {
        type: "heading",
        text: "Integrating M-Pesa into your workflow",
      },
      {
        type: "paragraph",
        text: "Modern barbershop tools let you send a payment request directly from the service record. The customer receives an STK push on their phone, pays, and the confirmation is automatically recorded against the service. No switching apps. No writing down transaction codes.",
      },
      {
        type: "list",
        items: [
          "Send STK push directly from the dashboard",
          "Payment confirmation recorded automatically",
          "Tied to the service record and the barber who did the work",
          "Cash payments handled in the same flow",
        ],
      },
      {
        type: "heading",
        text: "Cash and M-Pesa in one view",
      },
      {
        type: "paragraph",
        text: "Not every customer pays by M-Pesa, and that's fine. The key is having both payment methods recorded in one place so you can see exactly what came in today — by M-Pesa, by cash, and by barber.",
      },
    ],
  },
  {
    slug: "customer-loyalty-without-loyalty-cards",
    title: "Customer Loyalty Without Loyalty Cards",
    excerpt:
      "Your regulars don't need another card in their wallet. Here's how visit-based rewards keep them coming back — using just their phone number.",
    date: "5 September, 2026",
    readTime: "3 min read",
    category: "Growth",
    image: "/blog/loyalty.jpg",
    content: [
      {
        type: "paragraph",
        text: "Every barbershop owner knows: the regulars are the business. They come every two weeks, they bring their friends, and they don't haggle on price. But most loyalty programs are designed for coffee shops, not barbershops.",
      },
      {
        type: "heading",
        text: "Why traditional loyalty programs don't work",
      },
      {
        type: "paragraph",
        text: "Punch cards get lost. Apps require downloads. QR codes need printing. For a neighbourhood barbershop, these add friction to something that should be effortless. Your barber already knows James by name — the system should be just as natural.",
      },
      {
        type: "heading",
        text: "Visit-based rewards, zero friction",
      },
      {
        type: "paragraph",
        text: "With FolioCuts, you set a simple rule: every 6th haircut is free, or every 8th beard trim. The system tracks progress using the customer's phone number — the same number you already have from their payment. No card, no app, no extra step.",
      },
      {
        type: "list",
        items: [
          "Configure rewards per service type",
          "Tracked by phone number — nothing for the customer to carry",
          "Progress visible when you pull up a customer record",
          "Automatic notification when a reward is earned",
        ],
      },
      {
        type: "heading",
        text: "The result? They keep coming back",
      },
      {
        type: "paragraph",
        text: "When a customer knows they're two visits away from a free haircut, they're not trying the new shop down the road. That's the simplest kind of marketing — reward the people who already chose you.",
      },
    ],
  },
  {
    slug: "5-signs-your-barbershop-needs-digital-tools",
    title: "5 Signs Your Barbershop Needs Digital Tools",
    excerpt:
      "Still using a notebook? Here are five signs it's time to upgrade how you manage your barbershop.",
    date: "28 August, 2026",
    readTime: "4 min read",
    category: "Business",
    image: "/blog/digital-tools.jpg",
    content: [
      {
        type: "paragraph",
        text: "Not every barbershop needs a digital system. If you're a one-chair operation and you remember every customer by name, a notebook might be enough. But there's a point where the notebook starts costing you money.",
      },
      {
        type: "heading",
        text: "1. End-of-day takes longer than it should",
      },
      {
        type: "paragraph",
        text: "If you're spending 30 minutes every evening reconciling payments and calculating commissions, that's time you're working for free. A digital system does this in seconds.",
      },
      {
        type: "heading",
        text: "2. Commission disputes are getting frequent",
      },
      {
        type: "paragraph",
        text: "When barbers start questioning their pay, it's not a trust problem — it's a visibility problem. Automatic calculation removes the guesswork.",
      },
      {
        type: "heading",
        text: "3. You can't tell how the business is actually doing",
      },
      {
        type: "paragraph",
        text: "If someone asks you how much revenue you did last month, and you have to dig through a notebook to answer, you're flying blind. Real-time dashboards change this.",
      },
      {
        type: "heading",
        text: "4. You're losing regulars and don't know why",
      },
      {
        type: "paragraph",
        text: "Without customer visit history, you can't spot a regular who stopped coming. Digital records surface these patterns so you can act before they leave for good.",
      },
      {
        type: "heading",
        text: "5. Your team is growing",
      },
      {
        type: "paragraph",
        text: "Two barbers can coordinate over a WhatsApp group. Five barbers need a system. Once your team grows, manual processes break down — and the owner becomes the bottleneck.",
      },
    ],
  },
  {
    slug: "how-to-price-barbershop-services",
    title: "How to Price Your Barbershop Services in Kenya",
    excerpt:
      "Pricing too low and you're busy but broke. Too high and chairs are empty. Here's how to find the sweet spot.",
    date: "20 August, 2026",
    readTime: "6 min read",
    category: "Business",
    image: "/blog/pricing.jpg",
    content: [
      {
        type: "paragraph",
        text: "Pricing is one of the hardest decisions for barbershop owners. Charge too little and you're working long hours for thin margins. Charge too much and customers walk to the next shop. Getting it right requires understanding your costs, your market, and your value.",
      },
      {
        type: "heading",
        text: "Start with your costs",
      },
      {
        type: "paragraph",
        text: "Before you set prices, know what it costs you to deliver each service. Rent, electricity, products, staff commissions — add it all up and divide by the number of services you do in a month. That's your baseline.",
      },
      {
        type: "heading",
        text: "Know your neighbourhood",
      },
      {
        type: "paragraph",
        text: "Walk into three barbershops near you and check their prices. You don't need to be the cheapest, but you need to justify any premium. Better service, cleaner shop, faster turnaround — these are worth paying for.",
      },
      {
        type: "heading",
        text: "Use data to adjust",
      },
      {
        type: "paragraph",
        text: "Once you're tracking revenue digitally, you can see which services are popular and which are ignored. If everyone's getting the basic haircut but nobody orders the premium fade, your pricing might be telling customers something.",
      },
      {
        type: "list",
        items: [
          "Track revenue per service type over time",
          "Compare busy days vs slow days",
          "Test small price increases on premium services first",
          "Use loyalty rewards to offset perceived price increases",
        ],
      },
    ],
  },
  {
    slug: "building-a-barbershop-team-that-stays",
    title: "Building a Barbershop Team That Stays",
    excerpt:
      "High turnover kills barbershops. Here's how to build a team that grows with your business instead of leaving for the competition.",
    date: "12 August, 2026",
    readTime: "5 min read",
    category: "Team",
    image: "/blog/team.jpg",
    content: [
      {
        type: "paragraph",
        text: "The barbershop industry has a turnover problem. A barber builds a client base at your shop, then leaves to start their own — or joins a competitor who offers better terms. It's frustrating, but it's also predictable. And predictable problems have solutions.",
      },
      {
        type: "heading",
        text: "Pay transparently",
      },
      {
        type: "paragraph",
        text: "The fastest way to lose a barber is to make them feel underpaid. Not necessarily to pay them less — but to make them wonder if they're getting what they're owed. Transparent, automatic commission tracking removes that doubt entirely.",
      },
      {
        type: "heading",
        text: "Give them visibility into their performance",
      },
      {
        type: "paragraph",
        text: "Barbers who can see their own numbers — how many customers they served, how much they earned, how they compare to last week — are more engaged. They start thinking like business people, not just employees.",
      },
      {
        type: "heading",
        text: "Reward consistency",
      },
      {
        type: "paragraph",
        text: "Consider graduated commission rates. A barber who's been with you for a year gets a better rate than someone who started last month. It's a simple incentive that rewards loyalty.",
      },
      {
        type: "list",
        items: [
          "Automatic commission tracking builds trust",
          "Performance dashboards increase engagement",
          "Graduated rates reward tenure",
          "Clear systems make your shop the one they don't want to leave",
        ],
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
