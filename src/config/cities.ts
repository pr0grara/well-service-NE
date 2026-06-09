/**
 * cities.ts — where the business operates.
 *
 * EDIT HERE. Localization is the moat: each city's intro, neighborhoods, landmarks,
 * issues, and faqs should be genuinely specific to that place. `nearby` slugs MUST
 * exist in CITIES (else dropped silently). Array order = display order.
 */
import type { ImageMetadata } from 'astro';
import type { Faq } from './services';

export interface CityIssue {
  title: string;
  body: string;
}

export interface City {
  slug: string;
  name: string;
  state?: string;
  /** Localized intro, ~150–250 words for priority cities. */
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  issues: CityIssue[];
  /** 3 nearby city slugs (must exist in this list). */
  nearby: string[];
  faqs: Faq[]; // Faq reused from services.ts
  /** Optional per-city hero background; falls back to the site default. */
  heroImage?: ImageMetadata;
  /** Optional per-city service-photo overrides, keyed by service slug. */
  serviceImages?: Partial<Record<string, ImageMetadata>>;
}

export const CITIES: City[] = [
  {
    slug: 'augusta',
    name: 'Augusta',
    state: 'ME',
    intro:
      'Augusta sits on both banks of the Kennebec, and the homes around it run the full range of Maine well systems — older dug wells on the west side, deep drilled bedrock wells out toward North Augusta and the rural stretches off Route 3 and Route 17. The granite under the capital region is exactly the kind that puts arsenic and uranium into well water, so testing matters here as much as the mechanical repairs. We handle the whole spread: pumps that quit, pressure tanks that short-cycle, acidic water eating copper pipe, and the iron staining that shows up on so many central-Kennebec wells. Winters off the river valley get cold enough to freeze shallow lines in unheated basements, and we keep that work moving through the worst of it. Whether you are in a downtown neighborhood near the State House or on a back lot with a 500-foot drilled well, we diagnose the actual fault before quoting and fix it so it holds.',
    neighborhoods: ['Downtown / Capitol area', 'Sand Hill', 'North Augusta', 'West Side', 'Riverside Drive'],
    landmarks: ['Maine State House', 'Old Fort Western', 'Kennebec River', 'Viles Arboretum'],
    issues: [
      {
        title: 'Arsenic and uranium in bedrock wells',
        body: 'The granite around the Kennebec valley commonly leaches arsenic and uranium into drilled wells. You cannot taste or see it — testing is the only way to know, and many capital-area wells have never been checked.',
      },
      {
        title: 'Acidic water corroding copper pipe',
        body: 'Low-pH water is widespread here and shows up as blue-green staining and pinhole leaks in copper. An acid neutralizer protects the plumbing, pump, and fixtures from being eaten away.',
      },
      {
        title: 'Winter freeze-ups in river-valley basements',
        body: 'Cold air settling in the Kennebec valley freezes shallow lines and exposed pipe in unheated basements and crawlspaces. We thaw the freeze and fix the weak spot so it does not repeat.',
      },
    ],
    nearby: ['waterville', 'belfast', 'brunswick'],
    faqs: [
      {
        q: 'Do you service wells outside downtown Augusta?',
        a: 'Yes — we cover Augusta and the surrounding towns, including the rural drilled-well properties off Route 3, Route 17, and out toward North Augusta and Manchester.',
      },
      {
        q: 'Should I test my Augusta well for arsenic?',
        a: 'Yes. The bedrock around the capital region is a known source of arsenic and uranium in well water. If your well has never been tested for arsenic, that is the first test we recommend.',
      },
      {
        q: 'How fast can you get out for no water?',
        a: 'No-water and frozen-line calls get priority, and Augusta is central to our service area, so we can usually reach you quickly — call and we will give you a real time, not a runaround.',
      },
    ],
  },
  {
    slug: 'waterville',
    name: 'Waterville',
    state: 'ME',
    intro:
      'Waterville and the towns along this stretch of the Kennebec mix tight in-town neighborhoods with rural drilled-well properties out toward Oakland and Winslow across the river. Closer to downtown and the South End you still find older homes on dug wells and aging jet-pump setups; head out from Mayflower Hill and the lots open up to deep bedrock wells. That bedrock is the same arsenic- and uranium-bearing granite found across central Maine, so water testing is as important here as any pump repair. Hard water and iron staining are common complaints, and the acidic groundwater that chews through copper plumbing shows up on a lot of Waterville wells. In winter, lines freeze in the unheated basements and ells of the older housing stock, and we keep that work moving through cold snaps. From a no-water call on the North End to a short-cycling pressure tank near Colby, we find the real fault first and repair it to last.',
    neighborhoods: ['Downtown', 'South End', 'North End', 'Mayflower Hill', 'The Plains'],
    landmarks: ['Colby College', 'Head of Falls', 'Hathaway Creative Center', 'Kennebec River'],
    issues: [
      {
        title: 'Hard water and iron staining',
        body: 'Mineral-heavy bedrock water leaves orange-brown stains on fixtures and laundry, scales up water heaters, and shortens pump life. A test tells us how much iron and hardness are present so we can size the right filtration.',
      },
      {
        title: 'Aging jet pumps on older in-town homes',
        body: 'A lot of Waterville\'s older housing stock still runs on shallow-well jet pumps that are well past their prime. When they start losing prime or pressure, we repair or replace them and check whether the well can support an upgrade.',
      },
      {
        title: 'Frozen lines in unheated basements and ells',
        body: 'The older homes here have cold basements, crawlspaces, and attached ells where water lines freeze in a hard cold snap. We thaw safely and add insulation or heat tape so the same spot does not freeze again.',
      },
    ],
    nearby: ['augusta', 'belfast', 'brunswick'],
    faqs: [
      {
        q: 'Do you cover Winslow and Oakland too?',
        a: 'Yes — we service Waterville and the surrounding towns including Winslow, Oakland, and the rural drilled-well properties between them.',
      },
      {
        q: 'Why is my Waterville water staining everything orange?',
        a: 'That is almost always iron from the bedrock. It is more of a nuisance than a health emergency, but it wears pumps and clogs filters. A quick test tells us how much is present and which filter will clear it.',
      },
      {
        q: 'Can you replace an old jet pump with a submersible?',
        a: 'Often, yes — if the well is drilled deep enough to support a submersible. We check the well depth and water level and recommend the setup that fits, rather than just swapping like for like.',
      },
    ],
  },
  {
    slug: 'brunswick',
    name: 'Brunswick',
    state: 'ME',
    intro:
      'Brunswick spreads from the Androscoggin River out to the coast at Mere Point and Harpswell Neck, and its wells are just as varied. In-town neighborhoods around Maine Street and Bowdoin sit on a mix of older and newer systems, while the lots out toward Cooks Corner, Pleasant Hill, and the necks run on deep drilled bedrock wells. Being closer to the coast, some properties deal with harder water and the occasional concern about saltwater influence on shallow wells near the shore, but the bigger story is the same central-Maine bedrock chemistry: arsenic, uranium, iron, and acidic water that corrodes pipe. We service the full range — submersible and jet pumps, pressure tanks, switches, and water treatment — and we know the difference between a true pump failure and a low-yield well drawing down on one of the rockier necks. Whether you are near the old Navy base redevelopment or out on a quiet road toward Mere Point, we diagnose the actual problem and fix it so it holds through the season.',
    neighborhoods: ['Downtown / Maine Street', 'Cooks Corner', 'Pleasant Hill', 'Mere Point', 'Brunswick Landing'],
    landmarks: ['Bowdoin College', 'Brunswick Landing (former Naval Air Station)', 'Androscoggin River', 'Maine Street'],
    issues: [
      {
        title: 'Low-yield wells on rocky coastal lots',
        body: 'Some properties out toward the necks have wells that draw down faster than they recharge, which looks like a failing pump but is really a low-yield well. We measure water level to tell them apart and recommend storage or pacing fixes instead of a needless pump swap.',
      },
      {
        title: 'Arsenic and acidic water from bedrock',
        body: 'Brunswick sits on the same arsenic- and uranium-bearing granite as the rest of the region, with widespread low-pH water. Testing and the right treatment protect both your health and your plumbing.',
      },
      {
        title: 'Hard water near the coast',
        body: 'Coastal-area wells here often run hard and mineral-heavy, scaling fixtures and water heaters. A softener sized to the test results clears the scale and protects appliances.',
      },
    ],
    nearby: ['bath', 'augusta', 'rockland'],
    faqs: [
      {
        q: 'Do you service Harpswell and the necks?',
        a: 'Yes — we cover Brunswick proper plus the coastal stretches toward Mere Point and the Harpswell necks, where deep drilled wells are the norm.',
      },
      {
        q: 'My pressure drops after a few minutes of running water — is the pump dying?',
        a: 'Not necessarily. On the rockier coastal lots that pattern often means a low-yield well drawing down past the pump, not a bad pump. We measure the well\'s water level so you are not paying to replace a healthy pump.',
      },
      {
        q: 'Is saltwater a concern for wells near the shore?',
        a: 'For most deep drilled wells it is not, but shallow wells very close to the shore can occasionally show salt influence. If you are worried, a quick test for chloride and sodium settles it.',
      },
    ],
  },
  {
    slug: 'bath',
    name: 'Bath',
    state: 'ME',
    intro:
      'Bath, the City of Ships, packs tight neighborhoods along the Kennebec near Bath Iron Works and then opens to rural drilled-well properties out toward Phippsburg, Woolwich across the river, and the Georgetown road. The older South End and North End homes often run on aging well systems and shallow setups, while the outlying lots draw from deep bedrock wells into the same arsenic- and uranium-bearing granite found up the Kennebec valley. Acidic, low-pH water is common and shows up as green staining and pinhole leaks in copper, and iron staining is a frequent complaint. River-valley cold settles in hard here in winter, freezing shallow lines and exposed pipe in the older housing stock\'s cold basements. We handle the whole system — pumps, pressure tanks, switches, freeze-ups, and water treatment — and we diagnose before we quote, so the repair matches the actual fault rather than the easiest guess.',
    neighborhoods: ['Downtown', 'South End', 'North End', 'Whiskeag', 'Route 1 corridor'],
    landmarks: ['Bath Iron Works', 'Maine Maritime Museum', 'Kennebec River', 'Sagadahoc Bridge'],
    issues: [
      {
        title: 'Acidic water and pinhole copper leaks',
        body: 'Low-pH bedrock water is common around Bath and slowly eats copper plumbing — you see it as blue-green staining and surprise pinhole leaks. An acid neutralizer raises the pH and stops the corrosion.',
      },
      {
        title: 'Aging systems in the older South/North End homes',
        body: 'The dense older neighborhoods near the river have plenty of well systems well past their service life — tired pumps, waterlogged tanks, and corroded fittings. We repair or replace the worn parts and bring the system back to steady pressure.',
      },
      {
        title: 'Winter freeze-ups in cold riverfront basements',
        body: 'River-valley cold and unheated basements freeze shallow lines in the coldest stretches. We locate and thaw the freeze, then insulate or heat-tape the weak spot.',
      },
    ],
    nearby: ['brunswick', 'rockland', 'augusta'],
    faqs: [
      {
        q: 'Do you service Woolwich, Phippsburg, and Georgetown?',
        a: 'Yes — we cover Bath plus the surrounding towns across the river and down the peninsulas, where deep drilled wells and the occasional shallow well are both common.',
      },
      {
        q: 'I keep getting pinhole leaks in my copper pipes — why?',
        a: 'That is the signature of acidic, low-pH well water, which is common around Bath. Patching leaks does not stop it; an acid neutralizer treats the cause and protects the rest of your plumbing and pump.',
      },
      {
        q: 'Can you handle an emergency no-water call in winter?',
        a: 'Yes. Frozen-line and no-water calls get priority, and we carry the fittings to repair a burst section on the spot so you are not left without water through a cold snap.',
      },
    ],
  },
  {
    slug: 'rockland',
    name: 'Rockland',
    state: 'ME',
    intro:
      'Rockland anchors the Midcoast on Penobscot Bay, and its wells range from in-town systems near the harbor and downtown to deep drilled bedrock wells out the Old County Road and toward Owls Head and Thomaston. The granite here is the same arsenic- and uranium-bearing rock that runs through central Maine, so testing is just as important on the coast as inland. Hard, mineral-heavy water and iron staining are frequent complaints, and acidic groundwater corroding copper pipe shows up on plenty of Rockland-area wells. Some of the rockier lots have lower-yield wells that draw down under heavy use, which is easy to mistake for a failing pump. Coastal winters freeze shallow lines in unheated spaces during the cold snaps off the bay. We service the whole system — submersible and jet pumps, pressure tanks, switches, freeze-ups, and water treatment — and we measure before we quote so the fix matches the real fault.',
    neighborhoods: ['Downtown', 'South End', 'North End', 'Old County Road', 'The Highlands'],
    landmarks: ['Rockland Breakwater Lighthouse', 'Farnsworth Art Museum', 'Rockland Harbor', 'Owls Head'],
    issues: [
      {
        title: 'Low-yield wells on rocky Midcoast lots',
        body: 'Some properties on the rockier lots have wells that recharge slowly and draw down under heavy demand, mimicking a bad pump. We measure water level to confirm whether it is the well or the pump before recommending anything.',
      },
      {
        title: 'Hard water and iron staining',
        body: 'Mineral-heavy coastal bedrock water scales fixtures and water heaters and leaves orange staining. Testing tells us how much iron and hardness are present so we can size the right treatment.',
      },
      {
        title: 'Arsenic in coastal bedrock wells',
        body: 'The Midcoast granite leaches arsenic and uranium just like inland Maine. Many harbor-area wells have never been tested — it is the first test we recommend for a Rockland well.',
      },
    ],
    nearby: ['belfast', 'bath', 'brunswick'],
    faqs: [
      {
        q: 'Do you cover Thomaston, Owls Head, and Camden?',
        a: 'Yes — Rockland is central to our Midcoast coverage, and we service the surrounding towns including Thomaston, Owls Head, and up toward Camden.',
      },
      {
        q: 'My well runs out of water when we have guests — is the pump bad?',
        a: 'On the rockier Midcoast lots that usually points to a low-yield well drawing down under heavy use, not a failed pump. We measure the recovery rate and recommend storage or pacing fixes when that is the cause.',
      },
      {
        q: 'Is coastal well water more likely to be hard?',
        a: 'Many Rockland-area wells do run hard and mineral-heavy. A simple hardness and iron test tells us exactly what is in your water so a softener or filter is sized correctly.',
      },
    ],
  },
  {
    slug: 'belfast',
    name: 'Belfast',
    state: 'ME',
    intro:
      'Belfast sits at the head of its bay where the Passagassawakeag meets Penobscot Bay, and the homes around it run from in-town systems near the harbor and downtown to deep drilled bedrock wells out East Belfast, City Point, and the rural roads toward Searsmont and Northport. The bedrock here carries the same arsenic and uranium found across Maine, and acidic, low-pH water that corrodes copper plumbing is a common find on Belfast wells. Iron and manganese staining show up frequently, and hard water scales fixtures and heaters. Cold off the bay freezes shallow lines and exposed pipe in unheated basements during winter snaps. We service the full system — pumps, pressure tanks, switches, freeze-ups, and water treatment matched to your test results — and we always diagnose the actual fault before we quote, whether you are on a tight downtown lot or a long rural drilled well out toward the county roads.',
    neighborhoods: ['Downtown', 'East Belfast', 'City Point', 'Belmont Avenue corridor', 'The waterfront'],
    landmarks: ['Belfast Harbor', 'Passagassawakeag River', 'Belfast Rail Trail', 'Route 1'],
    issues: [
      {
        title: 'Acidic water eating copper pipe',
        body: 'Low-pH bedrock water around Belfast slowly corrodes copper plumbing, showing up as green staining and pinhole leaks. An acid neutralizer treats the cause and protects the whole system.',
      },
      {
        title: 'Iron and manganese staining',
        body: 'Orange-brown and black staining from iron and manganese is a common complaint on Belfast-area wells. We test the levels and size an oxidizing filter that actually clears it.',
      },
      {
        title: 'Freeze-ups in coastal cold snaps',
        body: 'Cold coming off the bay freezes shallow lines and exposed pipe in unheated basements and crawlspaces. We locate and thaw the freeze and protect the weak spot against the next cold stretch.',
      },
    ],
    nearby: ['rockland', 'waterville', 'augusta'],
    faqs: [
      {
        q: 'Do you service Searsport, Northport, and Searsmont?',
        a: 'Yes — we cover Belfast and the surrounding towns up and down Route 1 and out the rural roads, where deep drilled bedrock wells are the norm.',
      },
      {
        q: 'Why does my Belfast water smell like rotten eggs?',
        a: 'That sulfur smell usually comes from hydrogen sulfide or from manganese/iron bacteria in the well. A test pins down the source so we can treat it with the right filtration or disinfection rather than guessing.',
      },
      {
        q: 'How quickly can you respond to a no-water call?',
        a: 'No-water and frozen-line calls get priority, and Belfast is well within our Midcoast coverage. Call and we will give you a real arrival window.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
