/* ============================================================================
   CCSS WEBSITE — CONTENT FILE
   ============================================================================
   This is the ONLY file you should need to touch to keep the site current.
   Everything below is plain data — add, remove, or edit entries and the page
   rebuilds itself automatically (open index.html, or run a local server, and
   refresh). You do not need to know HTML or CSS to update publications, team
   members, or programs.

   HOW TO ADD A NEW PUBLICATION
   -----------------------------
   Copy one of the objects in the `publications` array below, paste it at the
   TOP of the array (newest first), give it a unique `id`, and fill in the
   fields. `doc` is the dossier number shown on the card — just increment it.

   HOW TO ADD A NEW TEAM MEMBER
   -----------------------------
   Copy one of the objects in the `team` array, paste it in, fill in the
   fields. `rank` controls sort order on the page (lower = higher up).

   HOW TO CHANGE COLORS / FONTS
   -----------------------------
   Those live in styles.css at the top, inside the `:root { ... }` block,
   as CSS variables — change a value there and it updates everywhere.
   ============================================================================ */

const SITE = {

  // ---------------------------------------------------------------------
  // ORGANIZATION
  // ---------------------------------------------------------------------
  org: {
    name: "Canadian Center For Strategic Studies",
    shortName: "CCSS",
    tagline: "Empowering Minds and Promoting Initiative",
    address: "1455 De Maisonneuve Blvd. W, Montreal, Quebec, Canada H3G 1M8",
    coordinates: "45.4959° N, 73.5789° W",
    email: "catherinedemontigny.ccss@gmail.com",
    founded: "Montreal, Canada",
  },

  // ---------------------------------------------------------------------
  // NAVIGATION — order here is the order shown in the nav bar
  // ---------------------------------------------------------------------
  nav: [
    { label: "Publications", href: "#publications" },
    { label: "Interviews", href: "#programs" },
    { label: "Journal", href: "#programs" },
    { label: "Events", href: "#programs" },
    { label: "About", href: "#about" },
    { label: "Submissions", href: "#submissions" },
  ],

  // ---------------------------------------------------------------------
  // HERO
  // ---------------------------------------------------------------------
  hero: {
    eyebrow: "OPEN-SOURCE ANALYSIS · MONTREAL, CANADA",
    heading: "Empowering Minds and\nPromoting Initiative",
    subhead:
      "An independent, student-led research collective producing rigorous, non-partisan analysis on defence policy, strategy, and international security.",
    ctaPrimary: { label: "Read the latest research", href: "#publications" },
    ctaSecondary: { label: "Submit your work", href: "#submissions" },
  },

  // ---------------------------------------------------------------------
  // PUBLICATIONS — newest first. `doc` is just a display label.
  // ---------------------------------------------------------------------
  // NOTE ON `body`: each entry is an array of paragraph strings — this is
  // the full article, hosted on your own site (article.html renders it).
  // `sourceUrl` is kept only as an optional "originally published" credit
  // and is not required.
  //
  // NOTE ON IMAGES: `heroImage` and `imageCredit` are both optional. Leave
  // `heroImage` as "" for an article with no photo — the article page just
  // renders without one, nothing breaks. Set it to a direct image URL
  // (e.g. from Unsplash/Pexels) or a filename inside an /images folder in
  // your repo (e.g. "images/my-photo.jpg"). `imageCredit` is the small
  // caption line shown under the photo, e.g. "Photo: Jane Doe / Reuters".
  publications: [
    {
      id: "irrational-thinking",
      doc: "CCSS-05",
      title: "Irrational Thinking",
      author: "Alexandru Filip",
      authorBio: "International Relations student at Concordia University, Montreal. His research focuses on strategic and security studies, with a particular interest in naval, air, and nuclear capabilities. He has previously published in RealClearDefense, CIMSEC, National Interest, and Merion West.",
      topic: "IR Theory",
      date: "2023-10-19",
      excerpt:
        "The foundation of realism is that countries will act in a rational manner — an assumption that makes predictions seem simpler than reality allows. As seen at the outset of the Russia-Ukraine war, many analysts wrongly assumed Russia would be more successful; understanding how rationality differs across regimes helps explain seemingly incomprehensible decisions, including a possible Chinese move on Taiwan.",
      sourceUrl: "https://canadian-center-for-strategic-studies.webnode.page/l/this-is-a-blog-post-with-images4/",
      heroImage: "https://f308187579.cbaul-cdnwnd.com/ff7ffd2c4a52ea9ed8f444345ce69c0c/200000028-de9d9de9db/gettyimages-2152598650.webp?ph=f308187579",
      imageCredit: "Getty Images",
      body: [
        "The foundation of realism is that countries will act in a rational manner. This is an assumption that makes predictions seem simpler than reality allows us. Seen from this perspective, actions can seem incomprehensible, and predictions can be erroneous. As seen at the beginning of the Russia-Ukraine war (2022), many analysts wrongly assumed Russia would be more successful. Considering the differences in rational thinking from one regime to another can help better understand such seemingly irrational actions. Understanding the context of the decisions made is necessary and can inform future considerations, such as a Chinese attack on Taiwan.",
        "As Russia was starting to build up troops near the Ukrainian border in the fall of 2021, analysts were repeatedly asked if Putin would order an advance into Ukraine. Noting the significant amount of resources needed for a full-scale invasion, the possibility that Ukraine would benefit from the strong support of Western countries, and the implications of a possible strong Ukrainian resistance made the idea of a tentative full-scale invasion a quite risky and seemingly irrational choice for Putin.",
        "Early in the war, the grim reality started to set in for Russian soldiers that they would not reach Kyiv in three days. As the Russian performances started to unravel, explanations that Russia's invasion was expected to be such a failure began to surface. In a CSIS commentary from May 2022, M.F. Cancian criticizes such analyses and identifies five logical considerations Russia took to ultimately make the decision to invade Ukraine. Such considerations include the cultural division of Ukrainian society, the lack of experience of Zelenskyy, a reformed Russian military, a Ukrainian military lacking professional fighters and proper equipment, as well as past inefficiency from the US and NATO to provide quick and effective help to Afghanistan, for example.",
        "Cancian's explanation shows there were quite rational considerations that were not considered by many analysts. However, we seek to add to this idea that many also failed to consider that, from one regime to another, what seems rational differs.",
        "Some considerations that led up to the commitment to invasion were specifically sound and rational from an autocratic viewpoint; these countries have a higher perceived need to ensure their own security, since they are unlikely to trust neighbouring countries, because of their often-longstanding border disputes. As we have seen with China and Russia, Russia with its Baltic and Scandinavian neighbours, North Korea with South Korea, and Iran with Iraq. This objective insecurity must be understood as a factor in foreign and domestic policy. Thus, when looking at Russia, we must understand NATO expansionism as a legitimate concern for the regime. Furthermore, we must also not assume autocratic regimes are as prone to providing proper economic conditions for their populations as democracies. Democracies see people vote on what their concerns are; autocracies dictate concerns.",
        "These considerations would not have been considered if Russia were a democratic state; they were overlooked and minimized by the West. Autocratic countries and their leaders do, in fact, act in a \"rational\" manner, but we must consider the information they have access to, their considerations, and motivations. It is important to keep in mind that countries will not, in fact, abide by our own conceptions of rationality and that we must carefully consider the effect of regime type before making conclusions.",
        "This represents a crucial lesson to be considered when making predictions about future conflicts, such as a possible Chinese invasion of Taiwan.",
        "The implication of this is that it is unwise not to fully consider the worst-case scenario simply because a country's specified actions are seemingly irrational. The further consideration to make is that we cannot, to any degree of certainty, be sure that China is still actively interested in participating in the rules-based international order and determined to climb the economic ladder, rather than engaging in militaristic revisionist attempts. To that degree, attacks across the islands of Luzon, Okinawa, or even against South Korea and Australia are not totally out of the question; if China has determined its currently underperforming economy is no longer what will elevate its status in the world order, why would we consider its military actions restrained only to Taiwan? Unlike the Ukraine war, we must plan for the contingency in which a hostile state acts against our own value of rationality in favor of militaristic revisionism. Because this time, the failure to plan and consider the outcome ahead of time will directly and severely affect our democracies and way of life.",
      ],
    },
    {
      id: "egypt-2012",
      doc: "CCSS-04",
      title: "Why was the successful 2012 revolution in Egypt not conducive to long-term stability?",
      author: "Murad Sharaf",
      authorBio: "Fourth-year undergraduate political science and law & criminology student. Main areas of study, focus, and research are public policy, international and comparative politics, specifically democratization in Asia and the Middle East.",
      topic: "Political Science",
      date: "2023-09-20",
      excerpt:
        "Social movements have long been both successful and unsuccessful responses to domestic corruption. What remains an oddity is why successful revolutions and peaceful uprisings so often leave a negative or nonexistent long-term impact on the states they sought to reform.",
      sourceUrl: "https://canadian-center-for-strategic-studies.webnode.page/l/this-is-a-simple-blog-post6/",
      heroImage: "",
      imageCredit: "",
      body: [
        "Historically, social movements have been both successful and unsuccessful attempts to respond to domestic corruption. The purpose, strength, timing of social movements and the circumstances within which they take place are only some of the little factors that determine their success in the long run. What remains to be an oddity is why successful revolutions, peaceful protests, and collective responses to corruption left either a nonexistent or negative impact on regimes and states in the long term. Before diving in, it is important to realize that, as history has proven, social movements were often successful due to their organization, robust homogeneity, method of appeal, universal recognition, and much more. Nonetheless, such successes were often short-lived. Using examples from Egypt, this article will attempt to unravel why this is so.",
        "The 25 January Egyptian Revolution",
        "Arguably one of the most prosperous movements in history, the Egyptian Revolution was a forceful collective confrontation against the Egyptian regime. The revolution, which commenced on January 25, 2011, had lasted for seventeen days (Bakr, 2016). The two and a half weeks of revolt were a response to at least 30 years of oppression, instability and anti-democratic practices by the regime. The revolution was prompted by some key factors, two of which are named here.",
        "Technology. 2011 was a time when Facebook and Twitter were only starting to become more widely adopted in Egypt. The implementation of Arabic on such platforms opened a major door for Egyptians to unite in Tahrir Square. Through them, awareness was brought to domestic and international attention. Invitations to rally up were spread to people and organizations. The government made attempts to shut off communication and internet access across the country (Bakr, 2016), however, this was met with reactions of disapproval by some states globally. Egypt was classified as one of the more prominent powers in information technology, as by 2012, twenty million people, primarily youth, had access to the internet (Bakr, 2016).",
        "Tunisian revolution. Tunisia's revolution could not have been any more timely when it came to the kickoff of protests in Egypt. The Tunisian revolution on January 11, 2010, consisted of a sequence of street demonstrations after the death of Mohamed Bouazizi in December 2010 (Lotan, 2011). Though unlike Egypt, where the problems in question were social problems, Tunisia's protests were a result of ongoing economic adversities such as mass unemployment and increased food prices (Lotan, 2011). This event gave rise to the demonstrations in Egypt and spurred blogging and news spreading. It was an inspiration for Egyptian citizens to take a stand against the government.",
        "What went wrong after the January 25 Revolution?",
        "It is without question that the right time and opportunities presented themselves for Egyptian citizens to take matters into their own hands. The stage was totally set for success. It was a revolutionary moment in Egyptian history as rights-fighters won the battle for democracy. But did they win the war? Not quite.",
        "The very fact that Egypt is currently under the occupation of a personalist dictatorship (military) rule is a testament to the failure of this revolution in the long run. There is a need to backtrack, however. Egypt was initially framed as pro-regional stability by former president Hosny Mubarak, who was in rule until the famous revolution when he was ousted (Monier et al., 2013). This framing was contradicted by the undemocratic and despotic nature of the Egyptian regime, which he maintained. The type of Egypt that was led by Hosny Mubarak persisted both noticeably and quietly. On one hand, it was noticeable in the sense that the revolution of January 25th shed light on the decades of corruption and hardships endured.",
        "The revolution brought to attention the social and humanitarian issues which the movement was fighting in response to. On the other hand, it was quiet in the sense that a promising future seemed to be secured for Egypt during and shortly after the revolution (Monier, 2013). Yet, this was proven not to be the case. The high possibility of Egypt re-manifesting itself as dictatorial and undemocratic escaped many. As of 2016, activists of non-governmental organizations (NGOs) reveal that opponents to the regime have been vanishing. Countless suspects continue to be abducted from the streets and are incarcerated without any prior alert, court trials, or any of the necessary formal steps that are typically taken upon arrest of individuals in Canada and the United States (Springborg, 2022). Most of such people were suspected to belong to the Muslim Brotherhood — the organization that initially opposed Hosny Mubarak's authoritarian reign over Egypt in favour of democratization (Springborg, 2022). The failure of Egypt to properly democratize is more important than the triumph on the side of Egyptian citizens during January 25th, 2012. There are a few explanations why Egypt was unable to democratize.",
        "Muslim Brotherhood imperfection. The Muslim Brotherhood directly opposed authoritarian rule. This pro-democratic organization was widely believed to have originated from the United States. One of its primary focuses was drawing the line between legitimate and illegitimate violence. The vision for a renewed \"Political Islam\" was only of momentary success. Where the Muslim Brotherhood fell relatively short was in its ability to translate promises into action, including claims to challenge authoritarianism and to offer foreign independent policies (through the U.S.) to strengthen the Islamic world (Monier, 2013).",
        "The fall of Morsi. Morsi's rather faltering rule over Egypt was one of the main causes of Egypt's inability to become a recognized democracy. Morsi was heavily resented by many opponents and even his own supporters. Unlike Hosny Mubarak, who was elected out of leadership by the revolution, Morsi was elected out through free elections (Martin, 2016). His removal from office resulted in a vacuum whereby secular resistance towards Morsi and large remnants of the old regime conflicted (Martin, 2016). The rise of a military presence was great, and ultimately, it threw Morsi out of power. The same elites of Mubarak's time remained during Morsi's rule. These elites managed the most powerful institutional foundations of Egypt: the police and the military. Such opponents fostered an authoritarian style of ruling and were consistently ignored by Morsi. As such, the only way out of the resulting political gridlock was for a military takeover to occur (Martin, 2016). The failure of the Muslim Brotherhood to effectively appeal internationally, and the decision by Morsi to abstain from combating the large residue of elites from Hosny Mubarak's despotic rule, accounted for the ultimate failure of Egypt to democratize.",
        "Finally, Egypt withheld all of the tools needed at its disposal to transform into a democracy: the January 25th revolution, the emerging Muslim Brotherhood, and democratic leadership under Mohamed Morsi. I argue that the nation did all that it could do within its power. They seized the time and opportunity to rebel, and did so successfully. The downfall of Egypt, I believe, stems heavily from both poor decision-making and general apathy. Nonetheless, the key takeaway from this study is that a prevailing social movement does not automatically equate to long-term stability. Social movements must succeed, but they must also have proper follow-up by leaders and organizations to guarantee that the goals which the social movements fought for are reached. Social movements are often merely the light at the end of a tunnel, but what is beyond the tunnel is what truly counts more.",
      ],
    },
    {
      id: "political-front",
      doc: "CCSS-03",
      title: "The Political Front",
      author: "Alexandru Filip",
      authorBio: "International Relations student at Concordia University, Montreal. His research focuses on strategic and security studies, with a particular interest in naval, air, and nuclear capabilities. He has previously published in RealClearDefense, CIMSEC, National Interest, and Merion West.",
      topic: "Russia-Ukraine",
      date: "2023-10-13",
      excerpt:
        "The war in Ukraine is being fought by Russia on two distinct fronts. The first is physical — armour, artillery, and tactical decision-making. The second, waged at home, is a constant battle for political survival among those responsible for the war.",
      sourceUrl: "https://canadian-center-for-strategic-studies.webnode.page/l/this-is-a-simple-blog-post2/",
      heroImage: "",
      imageCredit: "",
      body: [
        "The War in Ukraine, from a Russian perspective, is being waged on two very distinct fronts. The first being the physical battle, which includes endless amounts of military equipment such as artillery, tanks, etc., as well as tactical decision making, morale and the many more aspects which determine a conflict. At home in Russia, however, there is also a constant battle for political survival being waged by all those involved in the war. We have seen the more successful and combat-tested generals such as Surovikin and Popov replaced because of their performances on the Ukrainian battlefield. This is because success on the battlefield directly attributable to generals in charge of the War in Ukraine becomes politically threatening, as it can show some leaders are more competent than others, and perhaps should have more power. This is threatening to individuals like Shoigu and Gerasimov because it could lead to a shifting political perception that the war could in fact generate greater successes if led by someone else.",
        "To the overwhelming benefit of Ukrainians, the Russian army has proven to be a very fragile institution predicated upon thievery, corruption, and a very low rate of combat effectiveness in general terms amongst its units due to its failure to properly reform. So why not replace the seemingly incompetent leaders with individuals better equipped to lead the war? Leaders such as Popov and Surovikin, who have had some measure of success in Ukraine, seem like the wiser choice. However, we must consider the reality that, while he is in fact not capable of leading a war, Shoigu is not incompetent. He remains an adept political operator who managed to acquire his position not by changing the current setting but by ensuring it. His presence as Defence Minister, while it offers no reassurances to competent generals or conscripts huddled in trenches, offers great stability and promise to individuals of the Siloviki that the army will not lead a revolution because it is too incompetent and poorly trained, while also offering corrupt and organised criminal actors, which pervade the institution, assurances that things will remain as they are.",
        "The reason this is important is that it allows us to understand a different perspective. Shoigu is not incompetent; while he is, in fact, not capable of leading a war, he does remain an adept political operator who managed to acquire his position not by changing the current setting but by ensuring it.",
        "The US Department of Justice cites \"corrupt generals, drug and arms trafficking officers, homeless military families, illegal diversions of huge financial and material resources, spontaneous explosions of munitions depots, the abuses of Russian peacekeeping and combat forces, and burgeoning military crime\" as influential pieces within the Russian armed forces.",
        "Replacing individuals like Shoigu with seemingly more competent actors can perhaps generate greater battlefield successes. Still, it threatens political stability in Russia, it jeopardizes the relationships organized crime has with the Ministry of Defence, and most of all, it leaves an open position for a boisterous personality whose growing popularity can go unchecked. Prigozhin is an example of this. Even with the perceived changes in the Russian Ministry of Defence, it remains very unlikely that any possible successor to Gerasimov will be willing or even capable of tackling the corruption and thievery that plague the army and are a detriment to combat effectiveness.",
        "Without first addressing those issues, which is likely impossible because of its widespread presence, the Russian forces in Ukraine remain in a position where they are very much required to make do with what they have. Despite heavy losses, Russia does still have a sizeable amount of equipment left; however, it is now in doubt, especially after Wagner's mutiny, if the Ministry of Defense still has any semblance of confidence or observed desire to launch large-scale offensives when its leaders will dually have to worry about their own political stability as well as that of the country which welcomed Prigozhin and his mercenaries in Voronezh, whom Putin labelled traitors, with open arms. If anything, this should be observed in the West as a weakness within the regime to exploit; Russia cannot commit to higher levels of combat effectiveness without undermining its own domestic security.",
      ],
    },
    {
      id: "argentina-immigration",
      doc: "CCSS-02",
      title: "The Argentine economy and the impacts of immigration",
      author: "Murad Sharaf",
      authorBio: "Fourth-year undergraduate political science and law & criminology student. Main areas of study, focus, and research are public policy, international and comparative politics, specifically democratization in Asia and the Middle East.",
      topic: "Economics",
      date: "2024-01-12",
      excerpt:
        "Argentina is the largest debtor to the IMF, owing the institution $43.4 billion — far beyond Egypt or Ukraine. Beyond the headline debt figures, this piece asks an under-examined question: does immigration improve or worsen Argentina's economic predicament, or is the effect closer to null?",
      sourceUrl: "https://canadian-center-for-strategic-studies.webnode.page/l/this-is-a-simple-blog-post5/",
      heroImage: "",
      imageCredit: "",
      body: [
        "Argentina currently stands as the largest debtor to the International Monetary Fund (Martin et al., 2023). It owes the institution $43.4 billion, leading far past Egypt and Ukraine. This is the first fact to be known about Argentina to begin understanding the depth of the financial crisis it faces. This analysis not only aims to articulate the causes and effects of Argentina's poor economy — as signified by the debt it currently owes to the IMF — but more particularly seeks to address the untouched factor of immigration. Does immigration improve or exacerbate the predicament in Argentina? Is the effect null?",
        "The extent of the Argentine economic crisis is so steep that Argentinian Economy Minister Sergio Massa requested a loan from China to mitigate what the country owes to the IMF — a first occurrence in the entire history of the IMF (Martin et al., 2023). The issue in question, however, is not that the IMF continues to lend money to Argentina. The issue, as one may deem obvious, is continuous unpaid debts. In 2018 and 2019, the highest-ever debt owed to the IMF was recorded at $56 billion.",
        "At some point before World War I and the Great Depression took place, Argentina fared quite well (Cachanosky et al., 2021). These two events, alongside the election of Juan Perón in 1946, resulted in the economic nosedive of Argentina. It was also during the post-World War II period and the rise of Juan Perón that Argentina became less economically interdependent and instead more sequestered. Its openness to trade did not increase after WWII, and even after Perón's time (Cachanosky et al., 2021). It is also important to note that Argentina's public spending has been extremely lopsided. Unlike OECD countries, Argentina has devoted very little spending towards health, education and infrastructure (OECD eBooks, 2018). Specifically, 4% of expenditures went to health, 6% to public debt, 7% to education and culture, 11% to public goods, and, most glaringly, 42% to social security payments (OECD eBooks, 2018).",
        "Argentina, remarkably, historically exceeded Australia, Canada and the United States in terms of immigration rates. Between 1870 and 1910, Argentina had a relatively much higher rate of foreign-to-native population worldwide. Within the period of WWI and the Great Depression, between 19% and 24% of Argentina's population was made up of immigrants; illiteracy rates fell as a result (Cachanosky et al., 2021). Cachanosky et al. searched for a causal relationship between mass immigration and support for Juan Perón, but did not find a link; instead, they found it was the aforementioned global events between 1930 and 1943 that gave rise to him. An important distinction must be made between domestic and foreign immigrants — it was domestic immigrants (those relocating from smaller towns to larger ones) who supported Perón and his domestic policies, whereas foreign immigrants were of minimal influence due to their absent political participation.",
        "A different study by the OECD Development Centre reveals that immigrants have neither a significantly positive nor a significantly negative influence, particularly when it comes to their contribution to the public budget — a relatively weaker contribution compared to Argentinian-born natives. However, akin to most parts of the world, immigrants in Argentina have a greater chance of being of working age than native-born people.",
        "It is perhaps interesting to note that there are more female immigrants than male immigrants in Argentina (OECD eBooks, 2018). Female immigrants are less likely to move to Argentina for work than for family reasons, which largely accounts for the possible explanation that immigrants have a more or less null economic impact in Argentina. Though women make up a large percentage of immigrants, they themselves experience challenges; for example, female immigrants from the Dominican Republic face illiteracy challenges, and most end up working in the sex industry due to their dire economic circumstances (Yofre, 2017).",
        "The last point to be touched on is Venezuelan immigrants in Argentina. Due to the death of Venezuelan president Hugo Chávez in 2013 and the election of Nicolás Maduro, a large number of people emigrated. Instabilities in human rights, crime, food security, and public health resulted in this mass emigration (Del Real, 2023). The Covid-19 pandemic exacerbated already feeble Latin American economies, including Argentina's, as unemployment rates skyrocketed. Argentina responded by establishing the Emergency Family Income to benefit informal, domestic, self-employed and jobless workers — but pre-existing residency requirements served as barriers, and many Venezuelan immigrants did not meet the criteria to receive public COVID-19 aid.",
        "Ultimately, the homogeneity of the analyses examined here determines that immigrants did not and do not worsen Argentina's economic dilemma. If anything, it is reversed: Argentina's economic dilemma is a major hindrance to immigrants, especially those from neighbouring Latin American regions, masking their potential to offset Argentina's unstable economic conditions. However, both Argentina's rigid policies (especially on immigration) and poor public spending choices contribute to the seemingly irreversible deterioration of its economy.",
      ],
    },
    {
      id: "wagner-mutiny",
      doc: "CCSS-01",
      title: "How a Mercenary Managed to Polarize the Russian War Narrative",
      author: "Alexandru Filip",
      authorBio: "International Relations student at Concordia University, Montreal. His research focuses on strategic and security studies, with a particular interest in naval, air, and nuclear capabilities. He has previously published in RealClearDefense, CIMSEC, National Interest, and Merion West.",
      topic: "Russia-Ukraine",
      date: "2023-10-23",
      excerpt:
        "Wagner's mutiny — which began in Rostov with the group encircling the Southern Military District headquarters under Prigozhin before advancing on Voronezh — was the culmination of months of jockeying between the Wagner leadership and the Russian Ministry of Defense.",
      sourceUrl: "https://canadian-center-for-strategic-studies.webnode.page/l/this-is-a-blog-post-with-images7/",
      heroImage: "",
      imageCredit: "",
      body: [
        "Wagner's mutiny, which began in Rostov with the group encircling and subsequently taking over the headquarters of Southern Military District under Prigozhin's command before proceeding to Voronezh, was the culmination of months of jabs and counter-positioning by the Wagner leader against the Russian Ministry of Defense. What Prigozhin illustrated first and foremost is that the biggest issue Russian soldiers and the general population observe is not simply their quality of life or even the conflict itself, but the seeming lack of competent leadership to generate battlefield successes.",
        "The mercenary leader's opposites, Minister of Defense Shoigu and Chief of Staff Gerasimov, have led the Ukraine war far from the front lines, only venturing close to contested territory for a few public appearances which failed to mention the considerable distance to the front lines. Prigozhin is guilty of the same attempts at boosting his legitimacy as a \"war fighter\" through public appearances and carefully crafted social media messages, aimed at garnering backing from Russian soldiers, war-bloggers, and common Russians supportive of the war.",
        "Prigozhin's constant counter-positioning should be understood not as a personal problem with Shoigu or Gerasimov, but as an intended attack on what is an objectively failing aspect of Russia's war machine in Ukraine — the Ministry of Defense. This distinction matters because it is a more adequate representation of the sentiment observed not only among soldiers but also the general Russian population.",
        "The Ministry of Defense is not an entity of the state observed with a high regard for competence, even by its own soldiers. Competent leaders in the Ukraine war such as Surovikin and Popov have been pushed aside in favor of less politically threatening leaders, and general discontent among Private Military Companies and better-trained regular soldiers is directed at the perceived incompetence of those leading the war. For Prigozhin, garnering support began by leveraging public complaints against the Ministry of Defense, such as equipment and ammunition shortages — something that struck a chord with the bulk of the Russian armed forces. His constant appearances in Ukraine, always in an assortment of military gearing, also elevated his image as a war fighter over that of Shoigu and Gerasimov.",
        "Wagner's very bloody, months-long campaign to capture Bakhmut also gave the group credentials — that they had achieved what the regular forces had failed to do, regardless of how they did it. Another very public display of counter-positioning against the Ministry of Defense was a widely circulated video in which Prigozhin, standing in front of dead Wagner soldiers, verbally berated Shoigu and Gerasimov for their incompetence.",
        "Furthermore, prior to Wagner's mutiny, certain Russian generals reportedly had knowledge of what Prigozhin was planning. Prigozhin did not necessarily position himself as successor to the current Defense Ministry generals in charge, but rather sought to point the blame for the war's inefficiencies and failures directly at certain individuals, thereby elevating himself and his organization. What this tells us about the sentiment of Russian soldiers in Ukraine — and even the general population, who praised Prigozhin in Voronezh before he left for exile in Belarus — is that they are perhaps more willing to deal with the consequences of the war if the competence of those leading it is reflected in battlefield successes, regardless of the impact it has on their own quality of life.",
      ],
    },
  ],

  // ---------------------------------------------------------------------
  // PROGRAMS — the four pillars grid
  // ---------------------------------------------------------------------
  programs: [
    {
      title: "Publications",
      subtitle: "Publication Pieces",
      description:
        "Short-form analysis on a broad range of topics, submitted by academics, students, and working professionals.",
      href: "#publications",
    },
    {
      title: "Interviews",
      subtitle: "Professional Development",
      description:
        "Conversations with seasoned professionals who have had a critical impact on their fields.",
      href: "#",
    },
    {
      title: "Journal",
      subtitle: "Print & Digital",
      description:
        "Our team is developing a journal that will publish contributors' work under a permanent DOI.",
      href: "#",
    },
    {
      title: "About Us",
      subtitle: "The Team",
      description:
        "CCSS is made up of scholars, professionals, and freelance contributors from a range of backgrounds.",
      href: "#about",
    },
  ],

  // ---------------------------------------------------------------------
  // MISSION
  // ---------------------------------------------------------------------
  mission: {
    heading: "Our Mission",
    paragraphs: [
      "The Canadian Center for Strategic Studies exists to give motivated researchers a place to publish work they can point to as they pursue their ambitions. We edit for clarity, check submissions against academic methodological standards, and hold every piece to our code of conduct before it goes live.",
      "We keep a small team of analysts tracking ongoing world events and producing our own assessments — but we built CCSS to publish beyond our own team. Whether you're a current student, a recent graduate, or a professional building a publication record, we'll read your work.",
      "We especially welcome strong papers written for coursework. Most well-researched student papers are read once, graded, and never seen again. We'd like to give them a second life.",
    ],
  },

  // ---------------------------------------------------------------------
  // TEAM — lower `rank` shows first
  // ---------------------------------------------------------------------
  team: [
    {
      name: "Athiththan Thilagaraj",
      role: "President",
      rank: 1,
      bio: "Pursuing a degree in International Relations at Concordia University, Montreal, with a research focus on strategic and security studies — specifically insurgency, counter-insurgency, and naval strategy.",
    },
    {
      name: "Julian Spencer-Churchill",
      role: "Chairman, Board of Directors",
      rank: 2,
      bio: "Associate Professor of International Relations at Concordia University; author of Militarization and War (2007) and Strategic Nuclear Sharing (2014). Published extensively on Pakistan security issues and arms control; formerly with the Office of Treaty Verification (Office of the Secretary of the Navy) and the Ballistic Missile Defense Office.",
    },
    {
      name: "Othon A. Leon",
      role: "Board Member",
      rank: 3,
      bio: "Teaches management, strategy, and political science at institutions including HEC Montréal and universities on four continents. Manages the day-to-day of CCSS while completing PhD studies in Political Science (war studies). Former Fortune 500 executive and military academy graduate.",
    },
    {
      name: "Alexandru Filip",
      role: "Board Member",
      rank: 4,
      bio: "International Relations student at Concordia University researching strategic and security studies, with a particular interest in naval, air, and nuclear capabilities. Previously published in RealClearDefense, CIMSEC, National Interest, and Merion West.",
    },
    {
      name: "Adryan DeSouza",
      role: "Vice-President of Operations",
      rank: 5,
      bio: "Political Science student at Concordia University, Montreal, focused on environmental affairs, business, and international relations.",
    },
    {
      name: "Catherine Demontigny",
      role: "Vice-President of External Affairs",
      rank: 6,
      bio: "Political Science student at Concordia University, Montreal, focused on international relations, gender as a category of political analysis, and an anthropological approach to the discipline.",
    },
    {
      name: "Julia Hillinski",
      role: "Vice-President of Marketing",
      rank: 7,
      bio: "Completing a degree in Political Science at Concordia University. Research interests include international relations and diplomacy, deterrence, and crisis decision-making.",
    },
  ],

  // ---------------------------------------------------------------------
  // SUBMISSIONS / GUIDELINES
  // ---------------------------------------------------------------------
  submissions: {
    heading: "Submission Guidelines",
    intro:
      "CCSS is not affiliated with any university, but we hold submissions to the same standard applied within academic institutions.",
    rules: [
      {
        title: "No hateful or discriminatory content",
        detail: "All submissions must conform to the Canadian Online Harms Act.",
      },
      {
        title: "No plagiarism",
        detail: "Chicago-style citation is encouraged; other citation styles are accepted if used consistently and properly.",
      },
      {
        title: "No AI-generated writing",
        detail: "Submissions written with ChatGPT or any other AI tool will not be accepted.",
      },
    ],
    note: "CCSS reserves the right to decline any submission judged partisan, or that falls short of our commitment to quality, neutrality, and professional standards — without further explanation.",
    contributorRights: [
      "You retain full copyright over your work — CCSS claims no ownership.",
      "You may request that your published work be removed at any time.",
      "You may list your CCSS work as a Contributing Analyst credential.",
    ],
  },
};
