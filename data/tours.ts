import type { TourPackage } from "@/types/tour";

export const TOURS: TourPackage[] = [
  {
    slug: "bali-bliss-escape",
    name: "Bali Bliss Escape",
    destinationCountry: "Indonesia",
    tripCategory: "international",
    tagline: "Jungle villas, rice terraces, and a private slice of the coast.",
    heroImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531592937781-344ad608fabf?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1400&auto=format&fit=crop",
    ],
    badge: "Best Seller",
    rating: 4.9,
    reviewCount: 812,
    durationDays: 6,
    durationNights: 5,
    tripType: "Couple",
    startingPrice: 1299,
    currency: "USD",
    priceNote: "per person, twin sharing",
    cardVariant: "full",
    highlights: ["Luxury Hotel Stay", "Daily Breakfast & Dinner", "Private Transfers"],
    overview:
      "Six unhurried days across Bali's two faces — Ubud's terraced hills and Seminyak's private-pool coastline. Built for couples who want the postcard moments (Tegallalang, Nusa Penida, Jimbaran sunsets) without a bus-tour pace.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Ubud",
        description:
          "Land in Denpasar, private transfer to your Ubud jungle villa. Evening at leisure — welcome drink and orientation with your trip coordinator.",
        meals: ["Dinner"],
        overnightAt: "Ubud",
      },
      {
        day: 2,
        title: "Ubud sightseeing",
        description:
          "Tegallalang rice terraces at sunrise, Sacred Monkey Forest Sanctuary, and a purification ritual at Tirta Empul water temple.",
        meals: ["Breakfast", "Dinner"],
        overnightAt: "Ubud",
      },
      {
        day: 3,
        title: "Transfer to Seminyak",
        description:
          "Morning drive to the coast, check-in to your private-pool villa. Afternoon free for the beach clubs along Seminyak's shoreline.",
        meals: ["Breakfast", "Dinner"],
        overnightAt: "Seminyak",
      },
      {
        day: 4,
        title: "Nusa Penida day trip",
        description:
          "Speedboat to Nusa Penida for Kelingking viewpoint, Angel's Billabong, and Broken Beach. Full day, return by evening.",
        meals: ["Breakfast", "Lunch"],
        overnightAt: "Seminyak",
      },
      {
        day: 5,
        title: "Leisure and Jimbaran sunset",
        description:
          "Free morning — optional spa or surf lesson. Evening seafood dinner on Jimbaran beach as the sun goes down.",
        meals: ["Breakfast", "Dinner"],
        overnightAt: "Seminyak",
      },
      {
        day: 6,
        title: "Departure",
        description: "Private transfer to Denpasar airport for your flight home.",
        meals: ["Breakfast"],
      },
    ],
    inclusions: [
      "5 nights' accommodation (Ubud villa + Seminyak private-pool villa)",
      "Daily breakfast and dinner",
      "All private airport and inter-city transfers",
      "Nusa Penida speedboat and guided day trip",
      "English-speaking local coordinator throughout",
    ],
    exclusions: [
      "International and domestic flights",
      "Indonesia visa-on-arrival fee",
      "Lunches (except on the Nusa Penida day)",
      "Personal expenses, spa treatments, and travel insurance",
    ],
    thingsToCarry: [
      "Reef-safe sunscreen",
      "Light cotton clothing and a light rain jacket (afternoon showers are common)",
      "Comfortable walking sandals for temple visits",
      "Power adapter (Type C/F)",
    ],
    termsAndConditions: [
      "A valid passport with 6 months' validity from the date of return is mandatory.",
      "Rates are subject to change based on season and hotel availability at the time of booking.",
      "Itinerary sequence may be adjusted locally due to weather or ferry schedules, without reducing inclusions.",
      "Government-mandated visa or entry fees, if revised, are payable by the traveller.",
    ],
    cancellationPolicy: [
      "45+ days before departure: 10% of the package cost",
      "30–44 days before departure: 25% of the package cost",
      "15–29 days before departure: 50% of the package cost",
      "Under 15 days before departure: 100% of the package cost (non-refundable)",
    ],
    faqs: [
      {
        question: "Is this trip suitable for a honeymoon?",
        answer:
          "Yes — this is one of our most-booked honeymoon itineraries. Let us know at booking and we'll arrange a room upgrade and a private candlelight dinner where available.",
      },
      {
        question: "Do I need a visa for Bali?",
        answer:
          "Indian passport holders can get a visa-on-arrival in Bali, valid for 30 days. We'll share the current fee and document checklist closer to your travel date.",
      },
      {
        question: "Can the Nusa Penida day be swapped for something else?",
        answer:
          "Yes, it can be swapped for a Uluwatu temple and Kecak fire dance evening at no extra cost — just mention it while customizing your itinerary.",
      },
    ],
  },
  {
    slug: "dubai-skyline-luxury",
    name: "Dubai Skyline Luxury",
    destinationCountry: "UAE",
    tripCategory: "international",
    tagline: "Desert dunes by day, the world's tallest skyline by night.",
    heroImage:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518990177154-9d7dc78bfa39?q=80&w=1400&auto=format&fit=crop",
    ],
    rating: 4.8,
    reviewCount: 623,
    durationDays: 5,
    durationNights: 4,
    tripType: "Family",
    startingPrice: 1450,
    currency: "USD",
    priceNote: "per person, twin sharing",
    cardVariant: "full",
    highlights: ["Desert Safari Experience", "Burj Khalifa Entry"],
    overview:
      "A fast, glossy five days built around Dubai's headline moments — a dune-bashing desert safari with a Bedouin-camp dinner, the view from Burj Khalifa's 124th floor, and a day trip across the border to Abu Dhabi.",
    itinerary: [
      {
        day: 1,
        title: "Arrival and Marina cruise",
        description:
          "Arrive in Dubai, check in to your hotel. Evening dhow cruise along Dubai Marina with a seated dinner.",
        meals: ["Dinner"],
        overnightAt: "Dubai",
      },
      {
        day: 2,
        title: "Desert safari",
        description:
          "Afternoon pickup for dune bashing in a 4x4, camel photo stop, and a BBQ dinner with live entertainment at a desert camp.",
        meals: ["Breakfast", "Dinner"],
        overnightAt: "Dubai",
      },
      {
        day: 3,
        title: "Burj Khalifa and Downtown",
        description:
          "Timed entry to the Burj Khalifa's 124th-floor observation deck, followed by Dubai Mall and the Dubai Fountain show at dusk.",
        meals: ["Breakfast"],
        overnightAt: "Dubai",
      },
      {
        day: 4,
        title: "Abu Dhabi day trip",
        description:
          "Full-day trip to Abu Dhabi — Sheikh Zayed Grand Mosque, then a choice of Louvre Abu Dhabi or Ferrari World.",
        meals: ["Breakfast"],
        overnightAt: "Dubai",
      },
      {
        day: 5,
        title: "Departure",
        description: "Free morning for last-minute shopping, then transfer to Dubai International Airport.",
        meals: ["Breakfast"],
      },
    ],
    inclusions: [
      "4 nights in a 4-star Downtown or Marina hotel",
      "Daily breakfast",
      "Desert safari with BBQ dinner and dune bashing",
      "Burj Khalifa (124th floor) entry ticket",
      "Abu Dhabi day trip with Sheikh Zayed Mosque entry",
      "All transfers in an air-conditioned vehicle",
    ],
    exclusions: [
      "International flights",
      "UAE visa fee (arranged on request)",
      "Lunches and dinners except where mentioned",
      "Louvre Abu Dhabi / Ferrari World entry (optional, quoted separately)",
    ],
    thingsToCarry: [
      "Modest clothing for the Sheikh Zayed Mosque (shoulders and knees covered)",
      "Sunglasses and sunscreen",
      "A light jacket for air-conditioned malls and evening desert temperatures",
    ],
    termsAndConditions: [
      "UAE visa processing takes 3–5 working days; passport copies are needed at least 10 days before departure.",
      "Desert safari operates subject to weather; in rare cases it is rescheduled rather than refunded.",
      "Hotel check-in/check-out follows standard 3 PM / 12 PM timing unless upgraded.",
    ],
    cancellationPolicy: [
      "30+ days before departure: 15% of the package cost",
      "15–29 days before departure: 40% of the package cost",
      "7–14 days before departure: 75% of the package cost",
      "Under 7 days before departure: 100% of the package cost (non-refundable)",
    ],
    faqs: [
      {
        question: "Is the desert safari suitable for young children?",
        answer:
          "Dune bashing is best suited to children above 5. A gentler, non-bashing vehicle option is available on request for families with younger kids.",
      },
      {
        question: "Can we add Ferrari World for the kids?",
        answer:
          "Yes, it's an easy add-on to the Abu Dhabi day and we'll quote it separately based on the ages in your group.",
      },
    ],
  },
  {
    slug: "thai-island-hopping",
    name: "Thai Island Hopping",
    destinationCountry: "Thailand",
    tripCategory: "international",
    tagline: "Limestone cliffs, speedboats, and beach-hopping down the Andaman coast.",
    heroImage:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552550049-db097c9480d1?q=80&w=1400&auto=format&fit=crop",
    ],
    rating: 4.7,
    reviewCount: 549,
    durationDays: 7,
    durationNights: 6,
    tripType: "Group",
    startingPrice: 999,
    currency: "USD",
    priceNote: "per person, twin sharing",
    cardVariant: "full",
    highlights: ["Private Island Tour", "Full Board Meals"],
    overview:
      "A week down Thailand's Andaman coast — Phuket to Phi Phi to James Bond Island to the quieter cliffs of Railay — built for groups of friends who want a beach every day and a new view every other one.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Phuket",
        description: "Land in Phuket, transfer to your beachfront hotel. Evening free at Patong or Bangla Road.",
        meals: ["Dinner"],
        overnightAt: "Phuket",
      },
      {
        day: 2,
        title: "Phi Phi Islands",
        description:
          "Full-day speedboat tour to Phi Phi Leh's Maya Bay, Monkey Beach, and Pileh Lagoon, with lunch on Phi Phi Don.",
        meals: ["Breakfast", "Lunch"],
        overnightAt: "Phuket",
      },
      {
        day: 3,
        title: "James Bond Island",
        description:
          "Longtail boat tour through Phang Nga Bay, including James Bond Island and a sea-canoe through the mangrove caves.",
        meals: ["Breakfast", "Lunch"],
        overnightAt: "Phuket",
      },
      {
        day: 4,
        title: "Transfer to Krabi",
        description: "Road transfer to Krabi. Afternoon at Railay Beach, reachable only by boat.",
        meals: ["Breakfast"],
        overnightAt: "Krabi",
      },
      {
        day: 5,
        title: "Free day in Krabi",
        description: "Full day at leisure — optional rock climbing at Railay or a snorkeling trip to Koh Lanta.",
        meals: ["Breakfast"],
        overnightAt: "Krabi",
      },
      {
        day: 6,
        title: "Return to Phuket",
        description: "Transfer back to Phuket. Farewell dinner cruise along the coast.",
        meals: ["Breakfast", "Dinner"],
        overnightAt: "Phuket",
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer to Phuket International Airport.",
        meals: ["Breakfast"],
      },
    ],
    inclusions: [
      "6 nights' beachfront accommodation (Phuket + Krabi)",
      "Daily breakfast, plus lunch on all island-tour days",
      "Phi Phi Islands speedboat tour",
      "James Bond Island longtail boat tour with sea canoeing",
      "Farewell dinner cruise",
      "All transfers between Phuket and Krabi",
    ],
    exclusions: [
      "International flights",
      "Thailand visa (if applicable for your passport)",
      "Rock climbing / optional Koh Lanta trip on the free day",
      "Alcoholic beverages",
    ],
    thingsToCarry: [
      "Quick-dry swimwear and a rash guard",
      "Waterproof pouch for your phone on boat days",
      "Reef-safe sunscreen — several stops are marine protected areas",
      "Cash in Thai Baht for island vendors",
    ],
    termsAndConditions: [
      "Speedboat schedules are weather-dependent and may be re-routed to an alternative island group without notice.",
      "Group size for this package is capped at 16 travellers.",
      "Some island entry points levy a national park fee, payable locally and not included above.",
    ],
    cancellationPolicy: [
      "30+ days before departure: 10% of the package cost",
      "15–29 days before departure: 30% of the package cost",
      "7–14 days before departure: 60% of the package cost",
      "Under 7 days before departure: 100% of the package cost (non-refundable)",
    ],
    faqs: [
      {
        question: "Is this trip solo-traveller friendly?",
        answer:
          "Yes — a large share of this itinerary's travellers join solo and are paired into shared rooms or grouped with other solo travellers on request.",
      },
      {
        question: "How much swimming/snorkeling is involved?",
        answer:
          "Most days include time in the water, but it's all optional — several travellers each batch choose to stay on the boat or beach instead.",
      },
    ],
  },
  {
    slug: "maldives-private-villa",
    name: "Maldives Private Villa",
    destinationCountry: "Maldives",
    tripCategory: "international",
    tagline: "Overwater villas, house-reef snorkeling, and total quiet.",
    heroImage:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1400&auto=format&fit=crop",
    ],
    rating: 4.9,
    reviewCount: 401,
    durationDays: 4,
    durationNights: 3,
    tripType: "Honeymoon",
    startingPrice: 2100,
    currency: "USD",
    priceNote: "per villa, all-inclusive",
    cardVariant: "compact",
    highlights: ["Overwater Villa", "All-Inclusive Dining", "Seaplane Transfer"],
    overview:
      "Three nights in an overwater villa on a private atoll — no itinerary to keep, just the house reef, a butler on call, and a seaplane ride that's a highlight in itself.",
    itinerary: [
      {
        day: 1,
        title: "Arrival by seaplane",
        description:
          "Land in Male, scenic seaplane transfer to the resort atoll. Villa check-in with welcome refreshments.",
        meals: ["Lunch", "Dinner"],
        overnightAt: "Private atoll resort",
      },
      {
        day: 2,
        title: "Reef and relaxation",
        description:
          "Free day — snorkel the house reef, book a spa slot, or simply stay in the villa. Sunset dolphin cruise available on request.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnightAt: "Private atoll resort",
      },
      {
        day: 3,
        title: "Water sports and sandbank",
        description:
          "Optional kayaking or stand-up paddleboarding, followed by a private sandbank picnic lunch.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnightAt: "Private atoll resort",
      },
      {
        day: 4,
        title: "Departure",
        description: "Morning at leisure, seaplane transfer back to Male for your flight home.",
        meals: ["Breakfast"],
      },
    ],
    inclusions: [
      "3 nights in an overwater villa",
      "All meals and select beverages (all-inclusive plan)",
      "Return seaplane transfers",
      "One house-reef snorkeling session with equipment",
      "Daily housekeeping and butler service",
    ],
    exclusions: [
      "International flights to Male",
      "Spa treatments and motorized water sports",
      "Sandbank picnic (available as a paid add-on if not included in your plan)",
    ],
    thingsToCarry: [
      "Reef-safe sunscreen (mandatory at most resorts)",
      "A light cover-up for indoor dining areas",
      "Underwater camera for the house reef",
    ],
    termsAndConditions: [
      "Seaplane transfers do not operate after dark; late arrivals may require an overnight in Male at the traveller's cost.",
      "Villa allocation is subject to availability at the time of confirmation.",
      "All-inclusive plans vary by resort partner — final inclusions are confirmed at booking.",
    ],
    cancellationPolicy: [
      "45+ days before departure: 20% of the package cost",
      "20–44 days before departure: 50% of the package cost",
      "Under 20 days before departure: 100% of the package cost (non-refundable)",
    ],
    faqs: [
      {
        question: "Which resort will we stay at?",
        answer:
          "We match this package to one of our partner overwater-villa resorts based on your travel dates — we'll confirm the exact property before you pay the balance.",
      },
      {
        question: "Is the seaplane ride included both ways?",
        answer: "Yes, return seaplane transfers between Male and the resort are included in the price shown.",
      },
    ],
  },
  {
    slug: "kashmir-alpine-beauty",
    name: "Kashmir Alpine Beauty",
    destinationCountry: "India",
    tripCategory: "domestic",
    tagline: "Shikara rides on Dal Lake and pine-covered valleys in Gulmarg and Pahalgam.",
    heroImage:
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626621331169-5f34041f5f24?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601579112224-1c7e14b0e59f?q=80&w=1400&auto=format&fit=crop",
    ],
    rating: 4.8,
    reviewCount: 358,
    durationDays: 6,
    durationNights: 5,
    tripType: "Family",
    startingPrice: 750,
    currency: "USD",
    priceNote: "per person, twin sharing",
    cardVariant: "compact",
    highlights: ["Houseboat Stay on Dal Lake", "Gondola Ride in Gulmarg", "Private Cab Throughout"],
    overview:
      "Six days through Kashmir's classic triangle — Srinagar's houseboats, Gulmarg's gondola up Apharwat, and Pahalgam's Lidder valley — timed for the shoulder season when the crowds thin and the light is best.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description: "Land in Srinagar, transfer to a houseboat on Dal Lake. Evening Shikara ride at sunset.",
        meals: ["Dinner"],
        overnightAt: "Srinagar (Houseboat)",
      },
      {
        day: 2,
        title: "Srinagar to Gulmarg",
        description:
          "Drive to Gulmarg, ride the Gondola's first stage up to Kongdoori. Return to Srinagar by evening.",
        meals: ["Breakfast", "Dinner"],
        overnightAt: "Srinagar (Houseboat)",
      },
      {
        day: 3,
        title: "Srinagar to Pahalgam",
        description: "Drive to Pahalgam via saffron fields in Pampore. Evening walk along the Lidder river.",
        meals: ["Breakfast", "Dinner"],
        overnightAt: "Pahalgam",
      },
      {
        day: 4,
        title: "Pahalgam valleys",
        description:
          "Half-day visit to Betaab Valley and Aru Valley by local cab (included), rest of the day at leisure.",
        meals: ["Breakfast", "Dinner"],
        overnightAt: "Pahalgam",
      },
      {
        day: 5,
        title: "Return to Srinagar",
        description: "Drive back to Srinagar. Visit Mughal Gardens — Nishat Bagh and Shalimar Bagh.",
        meals: ["Breakfast", "Dinner"],
        overnightAt: "Srinagar (Houseboat)",
      },
      {
        day: 6,
        title: "Departure",
        description: "Transfer to Srinagar airport for your flight home.",
        meals: ["Breakfast"],
      },
    ],
    inclusions: [
      "2 nights on a houseboat in Srinagar + 3 nights in Pahalgam hotel",
      "Daily breakfast and dinner",
      "Private cab for all sightseeing and transfers",
      "Gondola (Phase 1) ticket in Gulmarg",
      "Shikara ride on Dal Lake",
    ],
    exclusions: [
      "Flights to and from Srinagar",
      "Gondola Phase 2 (to Apharwat peak) — optional, weather permitting",
      "Pony or sledge rides in Gulmarg and Pahalgam",
      "Lunches",
    ],
    thingsToCarry: [
      "Heavy woolens even in summer — evenings turn cold at altitude",
      "Sturdy walking shoes for Betaab and Aru valleys",
      "Valid photo ID for security checkpoints",
    ],
    termsAndConditions: [
      "Gulmarg Gondola Phase 2 operates subject to weather and may close without notice; no refund is applicable for closures.",
      "Sightseeing routes may be altered based on local security advisories.",
      "Houseboat categories are subject to availability during peak season (April–July).",
    ],
    cancellationPolicy: [
      "20+ days before departure: 10% of the package cost",
      "10–19 days before departure: 30% of the package cost",
      "Under 10 days before departure: 75% of the package cost",
    ],
    faqs: [
      {
        question: "Is Kashmir safe for family travel right now?",
        answer:
          "Yes, this route covers Srinagar, Gulmarg, and Pahalgam, which see regular domestic tourist traffic year-round. Our coordinator monitors local advisories and will flag any changes before departure.",
      },
      {
        question: "What's the best time of year for this trip?",
        answer:
          "April–June for gardens and mild weather, or December–February if you want snow in Gulmarg — let us know your preference and we'll adjust the dates.",
      },
    ],
  },
  {
    slug: "vibrant-goa-shores",
    name: "Vibrant Goa Shores",
    destinationCountry: "India",
    tripCategory: "domestic",
    tagline: "Beach shacks, sunset cruises, and North Goa's café-lined lanes.",
    heroImage:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1400&auto=format&fit=crop",
    ],
    rating: 4.5,
    reviewCount: 972,
    durationDays: 4,
    durationNights: 3,
    tripType: "Group",
    startingPrice: 499,
    currency: "USD",
    priceNote: "per person, twin sharing",
    cardVariant: "compact",
    highlights: ["Beach-Facing Stay", "Sunset Cruise", "North Goa Café Trail"],
    overview:
      "A short, easy four days built for a friends' trip — beach-facing stays, a sunset river cruise, and a self-paced café trail through Anjuna and Assagao, with plenty of unscheduled beach time.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        description: "Land in Goa, transfer to your beach-facing hotel in Candolim. Evening free to settle in.",
        overnightAt: "Candolim",
      },
      {
        day: 2,
        title: "North Goa sightseeing",
        description:
          "Fort Aguada, Chapora Fort, and the café trail through Anjuna and Assagao. Evening at a beach shack.",
        meals: ["Breakfast"],
        overnightAt: "Candolim",
      },
      {
        day: 3,
        title: "Sunset river cruise",
        description:
          "Free day at the beach, followed by an evening sunset cruise on the Mandovi river with live music.",
        meals: ["Breakfast"],
        overnightAt: "Candolim",
      },
      {
        day: 4,
        title: "Departure",
        description: "Morning at leisure, transfer to Goa airport.",
        meals: ["Breakfast"],
      },
    ],
    inclusions: [
      "3 nights in a beach-facing hotel in Candolim",
      "Daily breakfast",
      "North Goa sightseeing with private cab",
      "Mandovi river sunset cruise ticket",
      "Airport transfers",
    ],
    exclusions: [
      "Flights to and from Goa",
      "Lunches and dinners",
      "Water sports at Baga/Calangute beaches",
      "Entry fees at forts (nominal, paid locally)",
    ],
    thingsToCarry: [
      "Light breathable clothing and beachwear",
      "Sunscreen and sunglasses",
      "A light stole or cover-up for fort and church visits",
    ],
    termsAndConditions: [
      "Rates rise significantly during the December 20 – January 5 peak window; confirm early for these dates.",
      "The sunset cruise operates subject to weather and tide conditions.",
      "Check-in at most Goa properties is 12 PM / check-out 11 AM.",
    ],
    cancellationPolicy: [
      "15+ days before departure: 10% of the package cost",
      "7–14 days before departure: 25% of the package cost",
      "Under 7 days before departure: 50% of the package cost",
    ],
    faqs: [
      {
        question: "Is this a party-focused trip or more relaxed?",
        answer:
          "It's built as a flexible base — the itinerary covers the sightseeing and cruise, and you fill the rest with as much (or as little) nightlife as you like.",
      },
      {
        question: "Can we extend to South Goa instead?",
        answer:
          "Yes, we can swap the Candolim stay for a quieter South Goa base like Benaulim or Palolem at a small price difference.",
      },
    ],
  },
];

export function getTourBySlug(slug: string): TourPackage | undefined {
  return TOURS.find((tour) => tour.slug === slug);
}