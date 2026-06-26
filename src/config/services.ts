/**
 * services.ts — what the business does.
 *
 * EDIT HERE. Keep ~1 broad catch-all marked `hubOnly: true` (no per-city combo pages).
 * Flag urgent services `emergency: true`. Slugs are kebab-case join keys — keep them stable.
 */
import type { ImageMetadata } from 'astro';

import wellRepairImg from '../assets/services/well-repair.png';
import wellPumpRepairImg from '../assets/services/well-pump-repair.png';
import pressureTankImg from '../assets/services/pressure-tank-replacement.png';
import waterTestingImg from '../assets/services/well-water-testing.png';
import frozenLineImg from '../assets/services/frozen-line-thaw.png';

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceSection {
  h: string;
  body: string;
}

export interface Service {
  slug: string;
  name: string; // Full service name, e.g. "Well Pump Repair"
  short: string; // Short label for nav, cards, breadcrumbs
  blurb: string; // One-line summary
  description: string; // Intro paragraph (hub + city combo pages)
  sections: ServiceSection[]; // Deeper authority sections, rendered on the hub page
  points: string[]; // What's included / bullet points
  faqs: Faq[]; // Service-level FAQs (rendered + FAQ schema on the hub)
  image: ImageMetadata;
  imageAlt: string;
  hubOnly?: boolean; // do not generate per-city combo pages
  emergency?: boolean; // flagged as emergency/urgent (affects copy)
}

export const SERVICES: Service[] = [
  {
    slug: 'well-repair',
    // EXP-002 (see analytics/analysis/ONPAGE-EXPERIMENTS.md): renamed from "Well & Pump Repair"
    // to "Well Repair & Service" to stop this broad hub from competing head-to-head with the
    // dedicated /well-pump-repair/ page on the query "well pump repair" (keyword cannibalization).
    // The name drives the <title>, <h1>, and breadcrumb, so this hands the exact term to the
    // dedicated page. Slug kept stable (it is a join key).
    name: 'Well Repair & Service',
    short: 'Well Repair',
    blurb: 'Whole-system well repair and service for drilled and dug wells across Central Maine.',
    description:
      'When the water stops — or starts running dirty, weak, or short — we track the problem from the faucet back to the well and fix the actual cause, not just the symptom. Pine State Well & Pump services submersible and jet pumps, pressure tanks, switches, wiring, pitless adapters, and the controls in between. Most Central Maine homes run on drilled bedrock wells, and we know how they behave: low-yield wells that pump down, iron and sediment that chew up impellers, and pressure problems that get blamed on the pump when the tank is the real issue. We diagnose before we quote, and we explain what we found in plain terms.',
    sections: [
      {
        h: 'We diagnose the whole system, not just the pump',
        body: 'A drop in water pressure can come from a failing pump, a waterlogged pressure tank, a bad pressure switch, a pinhole leak in the drop pipe, a clogged sediment filter, or a well that is simply running low. Swapping the pump when the tank is the problem wastes your money and does not fix anything. We test pressure, amperage, and well drawdown so the repair matches the fault. On bedrock wells we also check static and pumping water levels to tell a pump problem apart from a low-yield well.',
      },
      {
        h: 'Built for Maine wells and Maine winters',
        body: 'Most homes here draw from drilled wells 200 to 600+ feet into granite, with a submersible pump hanging on poly or galvanized drop pipe and a pitless adapter through the casing below frost line. We carry the fittings, wire, torque arrestors, and pump sizes those systems actually use, and we account for our water chemistry — iron, manganese, and grit that shorten pump life. In winter we also deal with frozen lines and freeze-prone pressure tanks in unheated basements and crawlspaces.',
      },
      {
        h: 'Straight pricing and clean work',
        body: 'You get a diagnosis and an up-front price before we start the repair. We pull and reset pumps, replace tanks and switches, repair wiring and torque issues, and disinfect the well after any open-system work. Licensed and insured, and we leave the well cap, wellhead, and your basement the way a careful homeowner would want them left.',
      },
    ],
    points: [
      'Submersible and jet pump repair and replacement',
      'Pressure tank, pressure switch, and gauge service',
      'Low water pressure, no-water, and short-cycling diagnosis',
      'Wiring, control box, and pitless adapter repair',
      'Well disinfection after open-system work',
      'Licensed, insured, and up-front on price',
    ],
    faqs: [
      {
        q: 'My water stopped completely — what should I check first?',
        a: 'Check the breaker for the well pump and the pressure switch; a tripped breaker or a switch stuck open is a common, cheap cause. If the breaker holds and you still have no water, do not keep resetting it — that can burn out the pump. Shut it off and call us. We will test whether the pump, the switch, the tank, or the well itself is the problem.',
      },
      {
        q: 'How do I know if it is the pump or the pressure tank?',
        a: 'Rapid on-off cycling (the pump kicking every few seconds when a tap is open) almost always points to a waterlogged pressure tank, not the pump. Weak pressure that builds slowly, or no water at all, points more toward the pump, switch, or wiring. We test both so you are not paying to replace a healthy pump.',
      },
      {
        q: 'Do you repair both drilled and dug wells?',
        a: 'Yes. Most Central Maine homes are on drilled bedrock wells with submersible pumps, but we also service shallow dug wells with jet pumps and the older systems still common on camps and farmhouses.',
      },
      {
        q: 'Are you licensed and insured?',
        a: 'Yes — we are a licensed, insured Maine well and pump contractor, and we disinfect the well any time the system has been opened.',
      },
    ],
    image: wellRepairImg,
    imageAlt: 'Technician servicing a residential well and pump system in Central Maine',
    hubOnly: true,
  },
  {
    slug: 'well-pump-repair',
    name: 'Well Pump Repair',
    short: 'Pump Repair',
    blurb: 'Submersible and jet pump repair and replacement when pressure drops or the water quits.',
    description:
      'The pump is the heart of your well system, and when it fails you usually find out the hard way — no water, brown water, or pressure that limps along. We diagnose and repair both submersible pumps (down in the well) and jet pumps (at the surface), test the motor, wiring, and water level, and replace the pump when it has truly failed. On Central Maine bedrock wells we pull, inspect, and reset pumps on poly or galvanized drop pipe, replace torque arrestors and check valves, and size the new pump to your well depth and yield so it does not short-cycle or run dry.',
    sections: [
      {
        h: 'What pump failure actually looks like',
        body: 'Pumps rarely die all at once. The warning signs are sputtering or air in the lines, pressure that no longer reaches the top of its range, the pump running far longer than it used to, tripped breakers, or a sudden jump in your electric bill. Sand or grit in the water can mean a worn pump or a well drawing down past the pump intake. We measure amperage draw and water level to tell a worn pump apart from a wiring fault, a stuck check valve, or a low-yield well.',
      },
      {
        h: 'Repair first, replace when it makes sense',
        body: 'Not every pump problem is a dead pump. We repair wiring, splices, control boxes, check valves, and torque issues, and we replace the pressure switch or relay when that is the real fault. When the pump itself is gone, we pull it, inspect the drop pipe and wire on the way up, and install a correctly sized replacement — then disinfect the well before we put it back in service.',
      },
    ],
    points: [
      'Submersible and jet pump diagnosis and repair',
      'Motor, wiring, splice, and control-box testing',
      'Check valve, torque arrestor, and drop-pipe service',
      'Correctly sized pump replacement for your well depth and yield',
      'Well disinfection before the system goes back in service',
    ],
    faqs: [
      {
        q: 'How long does a well pump last in Maine?',
        a: 'A good submersible pump typically lasts 10 to 15 years, but iron, sediment, and frequent short-cycling shorten that. Hard, mineral-heavy water — common on Central Maine bedrock wells — is one of the biggest reasons pumps wear early.',
      },
      {
        q: 'Can you reuse my old drop pipe and wire when replacing the pump?',
        a: 'We inspect both when we pull the pump. If the poly pipe, wire, and splices are sound we reuse them; if they are brittle, corroded, or undersized we recommend replacing them while the well is open, since pulling the pump again later is the expensive part.',
      },
      {
        q: 'Why does my pump keep tripping the breaker?',
        a: 'Common causes are a failing motor, a damaged or shorted wire splice down the well, a stuck check valve, or an overloaded pump fighting a clog. Do not keep resetting it — repeated resets can finish off a struggling motor. We will find the fault before it costs you the whole pump.',
      },
    ],
    image: wellPumpRepairImg,
    imageAlt: 'Submersible well pump pulled from a drilled bedrock well for repair',
    emergency: true,
  },
  {
    slug: 'pressure-tank-replacement',
    name: 'Pressure Tank Replacement',
    short: 'Pressure Tanks',
    blurb: 'Fix rapid cycling and pressure swings with the right-sized pressure tank and switch.',
    description:
      'A waterlogged or undersized pressure tank is one of the most common — and most misdiagnosed — well problems in Central Maine. When the tank loses its air charge, the pump kicks on and off every few seconds (short-cycling), which wears the pump out fast and gives you fluttering, inconsistent pressure. We test the tank, the air charge, and the pressure switch together, then replace a failed tank with a correctly sized one and set the switch and pre-charge so your pump runs the way it should.',
    sections: [
      {
        h: 'Why short-cycling destroys pumps',
        body: 'The pressure tank exists to store water under pressure so your pump is not forced to start every time you open a tap. When the tank\'s internal bladder fails or it loses its air charge, the pump cycles on and off constantly. Each start is hard on the motor, so a $30 problem with the tank quietly becomes a $1,000 problem with the pump. If you hear the pump clicking on and off rapidly, get it checked before it takes the pump down with it.',
      },
      {
        h: 'Right-sized tank, properly set up',
        body: 'We size the replacement tank to your pump and household demand, set the pre-charge a couple of psi below the pump cut-in, and replace the pressure switch and gauge while we are in there if they are worn. The result is fewer pump starts, steadier pressure at the fixtures, and a system that lasts.',
      },
    ],
    points: [
      'Diagnose short-cycling and pressure-swing complaints',
      'Test tank air charge, bladder, and pressure switch together',
      'Correctly sized replacement tank for your pump and demand',
      'Pressure switch, gauge, and fitting replacement',
      'Pre-charge and cut-in/cut-out set to spec',
    ],
    faqs: [
      {
        q: 'How do I know my pressure tank is bad?',
        a: 'The classic sign is the pump rapidly cycling on and off when a faucet is running, plus pressure that surges and drops. A tank that feels heavy/full of water when you rock it, or one that reads no air charge at the top valve, is waterlogged and needs replacement.',
      },
      {
        q: 'How long do pressure tanks last?',
        a: 'A quality bladder tank usually lasts 8 to 12 years. They tend to fail sooner in unheated basements and on systems that already short-cycle. Replacing the tank is far cheaper than replacing the pump it can damage.',
      },
      {
        q: 'Will a bigger tank help my low water pressure?',
        a: 'A correctly sized tank stops short-cycling and steadies pressure, but it will not raise your overall pressure if the real issue is the pump, switch setting, or a low-yield well. We test the whole system so the fix matches the cause.',
      },
    ],
    image: pressureTankImg,
    imageAlt: 'Replacement well pressure tank and pressure switch installed in a basement',
  },
  {
    slug: 'well-water-testing',
    name: 'Well Water Testing & Treatment',
    short: 'Water Testing',
    blurb: 'Test for arsenic, bacteria, iron, and hardness — then treat what your well actually has.',
    description:
      'Maine has some of the highest naturally occurring arsenic in well water in the country, and private wells are not tested by anyone unless the owner does it. If your water has never been tested — or you have iron staining, rotten-egg odor, or hard-water scale — testing tells you exactly what you are drinking and what to treat. We sample for arsenic, bacteria (coliform/E. coli), nitrates, uranium, radon-in-water, iron, manganese, and hardness, then recommend treatment sized to your results: arsenic and uranium reduction, neutralizers for acidic water, iron/manganese filtration, softeners, and UV disinfection.',
    sections: [
      {
        h: 'Why Central Maine wells need testing',
        body: 'Bedrock wells in Maine commonly pull arsenic, uranium, and radon out of the granite — contaminants you cannot see, taste, or smell. The Maine CDC recommends testing private wells for arsenic and bacteria regularly, yet most homes have never been tested or were last tested when the well was drilled. Add the iron, manganese, and low pH (acidic, corrosive water) that are widespread here, and a single test tells you a lot about both your health and why your fixtures, pumps, and pipes wear out.',
      },
      {
        h: 'Treat what the test finds — nothing you do not need',
        body: 'We do not sell one box that "fixes everything." We match treatment to your results: arsenic and uranium reduction systems, acid neutralizers for low-pH water that is eating copper pipe, oxidizing iron and manganese filters for staining and odor, water softeners for hardness, and UV systems for bacteria. We size and place each stage in the right order so they actually work together, and we retest after install to confirm the numbers came down.',
      },
    ],
    points: [
      'Sampling for arsenic, uranium, and radon-in-water',
      'Bacteria (coliform / E. coli) and nitrate testing',
      'Iron, manganese, hardness, and pH analysis',
      'Treatment sized to your results — not a one-size box',
      'Post-install retest to confirm the fix',
    ],
    faqs: [
      {
        q: 'How often should I test my well water in Maine?',
        a: 'The Maine CDC recommends testing for bacteria and nitrates every year, and for arsenic, uranium, and other minerals at least every few years (and after any pump or well work). If your well has never been tested for arsenic, do it now — it is the single most important test for Maine wells.',
      },
      {
        q: 'My water leaves orange/brown stains — is that dangerous?',
        a: 'Orange-brown staining is usually iron, and black specks or staining is often manganese. They are mostly a nuisance (laundry, fixtures, taste) rather than a health emergency, but they also wear pumps and clog filters. A test tells us how much is present so we can size the right filtration.',
      },
      {
        q: 'Can you fix acidic water that is turning my pipes green?',
        a: 'Yes. Blue-green staining and pinhole leaks in copper come from low-pH, acidic water — very common on Maine bedrock wells. An acid neutralizer raises the pH and protects your plumbing, pump, and fixtures.',
      },
    ],
    image: waterTestingImg,
    imageAlt: 'Well water sample bottles for arsenic and bacteria testing in Maine',
  },
  {
    slug: 'frozen-line-thaw',
    name: 'Frozen Well Line Thawing',
    short: 'Frozen Lines',
    blurb: 'Lost water in a cold snap? We thaw frozen well lines and fix what froze — fast.',
    description:
      'When the temperature drops below zero and the water quits, a frozen line is the usual culprit — most often a water line in an unheated basement, crawlspace, garage, or a shallow run between the wellhead and the house. We locate the freeze, thaw it safely without cracking pipe, restore water, and then deal with the reason it froze so you are not calling again next cold snap. Burst pipe? We repair the damage and get you back online.',
    sections: [
      {
        h: 'Where Maine well lines freeze',
        body: 'Freeze-ups happen where the line loses its heat: exposed pipe in an unheated basement or crawlspace, the run through a cold garage or mudroom, a pressure tank in a freezing utility space, or a service line buried too shallow to clear frost depth. Pitless adapters set below frost line rarely freeze, but the plumbing above the slab does. We find the frozen section instead of guessing, because thawing the wrong spot wastes the cold hours you do not have.',
      },
      {
        h: 'Thaw it safely, then stop the next one',
        body: 'We thaw frozen lines with controlled heat — never an open flame on your pipes — and check for splits as the water comes back. Once you have water again we fix the cause: insulating or heat-taping vulnerable runs, sealing cold-air drafts at the rim joist, relocating a freeze-prone tank, or advising on burying a shallow line deeper. The goal is one visit, not a repeat every January.',
      },
    ],
    points: [
      'Locate the frozen section before thawing — no guesswork',
      'Safe, controlled thawing (no open flame on your pipes)',
      'Burst-pipe and split-fitting repair',
      'Heat tape, insulation, and draft-sealing to prevent re-freeze',
      'Priority response during cold snaps',
    ],
    faqs: [
      {
        q: 'My water stopped on a sub-zero morning — is it frozen or the pump?',
        a: 'If it happened during a hard freeze and the pump still hums or the breaker is fine, a frozen line is the most likely cause. Do not pour boiling water on pipes or use a torch — both can crack pipe or start a fire. Open a faucet to the lowest position, keep the breaker off if the pump is straining, and call us.',
      },
      {
        q: 'Will the pipe burst when it thaws?',
        a: 'It can — ice expansion may have already split the pipe, and you only see the leak once water flows again. We thaw slowly and watch for splits, and we carry the fittings to repair a burst section on the spot so you are not left without water.',
      },
      {
        q: 'How do I keep my well line from freezing again?',
        a: 'The fixes are usually simple: heat tape and insulation on exposed runs, sealing cold drafts at the foundation, keeping the pump and tank in a heated space, and burying shallow service lines below frost depth. We will point out the weak spot that froze and how to protect it.',
      },
    ],
    image: frozenLineImg,
    imageAlt: 'Insulated and heat-taped well water line in a Maine basement to prevent freezing',
    emergency: true,
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const MATRIX_SERVICES: Service[] = SERVICES.filter((s) => !s.hubOnly);
