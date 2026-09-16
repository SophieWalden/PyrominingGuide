import './App.css'
import { MinecraftPanel, MinecraftTooltip } from './components/MinecraftTooltip'

const vesselTooltips = [`&2Skylark's Dream&r

---[ &2Stats&r ]---
&2Required Level:&r 25
&2Maximum Vessel Level:&r 5
&2Zeta Cost:&r 150000
---[ &2Description&r ]---
&2Skylark's Dream&r makes all fluxes that you find sell for a higher price. Higher the level, the more fluxes will sell for.

&2Max Level Bonus:&r
20% Chance for a Bonus Flux&r`, `&6Valakas' Nightfall&r

---[ &6Stats&r ]---
&6Required Level:&r 22
&6Maximum Vessel Level:&r 4
&6Zeta Cost:&r 175000
---[ &6Description&r ]---
&6Valakas Nightfall&r gives you a chance to get Haste II from breaking an ore for 30-100 seconds

&6Max Level Bonus:&r
Gives Haste III instead of Haste II&r`, `&cAurora's Blaze&r

---[ &cStats&r ]---
&cRequired Level:&r 12
&cMaximum Vessel Level:&r 2
&cZeta Cost:&r 120000
---[ &cDescription&r ]---
&4Aurora's Blaze&r will automatically smelt iron and gold ores that you mine.

&4Max Level Bonus:&r
25% Chacne for a Bonus Ingot to Drop&r`, `&9Xostran's Glare&r

---[ &9Stats&r ]---
&9Required Level:&r 35
&9Maximum Vessel Level:&r 5
&9Zeta Cost:&r 162500
---[ &9Description&r ]---
&9Xostran's Glare&r gives you a higher chance to get Oracle drops when killing Oracles

&9Max Level Bonus:&r
20% Chance for Double Drops&r`, `&aSeraphs Grasp&r

---[ &aStats&r ]---
&aRequired Level:&r 8
&aMaximum Vessel Level:&r 7
&aZeta Cost:&r 145000
---[ &aDescription&r ]---
&aSeraphs' Grasp&r gives you bonus Zeta from all ores you mine with it.

&aMax Level Bonus:&r
15% Chance to Triple Zeta Gained&r`, `&dNagyns Tranquility&r

---[ &dStats&r ]---
&dRequired Level:&r 5
&dMaximum Vessel Level:&r 5
&dZeta Cost:&r 95000
---[ &dDescription&r ]---
&dNagyn's Tranquility&r gives you a higher change to get Mysterious Dust from mining ores. Higher level the better the chance.

&dMax Level Bonus:&r
20% Chance for 2x Mysterious Dust&r`, `&4Rezoth's Destruction&r

---[ &4Stats&r ]---
&4Required Level:&r 30
&4Maximum Vessel Level:&r 12
&4Zeta Cost:&r 200000
---[ &4Description&r ]---
&4Rezoth's Destruction&r gives you a chance when mining an ore for it to drop a mineral from another ore.

&4Max Level Bonus:&r
10% Chance to Double the bonus Mineral&r`, `&bNeptulus' Wave&r

---[ &bStats&r ]---
&bRequired Level:&r 5
&bMaximum Vessel Level:&r 10
&bZeta Cost:&r 75000
---[ &bDescription&r ]---
&bNeptulus' Wave&r gives you bonus XP to leveling up your PyroMining level. Higher the level, the more XP you get.

&bMax Level Bonus:&r
10% Chance to Triple XP&r`, `&3Mementos Stopwatch&r

---[ &3Stats&r ]---
&3Required Level:&r 40
&3Maximum Vessel Level:&r 20
&3Zeta Cost:&r 300000
---[ &3Description&r ]---
&3Mementos Stopwatch&r gives you a chance to get double drops from breaking an ore without silktouch

&3Max Level Bonus:&r
Small chance for triple drops&r`, `&8Necros Realm&r

---[ &8Stats&r ]---
&8Required Level:&r 5
&8Maximum Vessel Level:&r 3
&8Zeta Cost:&r 75000
---[ &8Description&r ]---
&8Necros' Realm&r gives bonus XP when unlocking Requiums and increases thrall spawn chance.

&8Max Level Bonus:&r
50% Reduced Thrall Spawn Cooldown&r`, `&eImperos's Winds&r

---[ &eStats&r ]---
&eRequired Level:&r 15
&eMaximum Vessel Level:&r 8
&eZeta Cost:&r 155000
---[ &eDescription&r ]---
&eImperos's Winds&r gives you a higher chance to find rarer Artifacts when mining ores.

&eMax Level Bonus:&r
5% Increased Fossil Chance when opening Artifacts&r`, `&7Nefaris Shadows&r

---[ &7Stats&r ]---
&7Required Level:&r 18
&7Maximum Vessel Level:&r 7
&7Zeta Cost:&r 140000
---[ &7Description&r ]---
&7Nefaris' Shadows&r gives you a higher chance to get runes from rune guardians.

&7Max Level Bonus:&r
60% Chacne to drop a bonus rune&r
(Pickaxe must be in hotbar when killing the guardian for the buff to apply)`]

const vesselImages = [
  '/green.webp',
  '/orange.webp',
  '/red_2.webp',
  '/blue.webp',
  '/lime_green.webp',
  '/pink.webp',
  '/red.webp',
  '/light_blue.webp',
  '/cyan.webp',
  '/dark_grey.webp',
  '/yellow.webp',
  '/light_grey.webp'
]


const sections = [
  {
    id: 'StartHere', eyebrow: '01 / INTRODUCTION', title: 'How do I interact with Pyromining?',
    description: "Mine ores, sell fluxes and gemstone, refine mysterious dust, identify artifacts, and assemble your first Vessel",
    steps: [['Mine Ores', 'Breaking unplaced ores gives you a chance to get a multitude of Pyromining resources. Resources dropped are for either one of two things: selling or progress towards an enchantment'], ['Sell Fluxes and Gemstones', 'Pyromining features Fluxes and Gemstones which are meant purely to be sold. This can be done in /mine shop'], ['Artifacts, Fossils, and Vessels', 'Artifacts have a chance to drop from mining ores. Identify these in /mine artifacts to get fossils. Assemble 8 fossils of the same type to get a Vessel, a living enchantment on your pickaxe'], ['Confused?', 'Pyromining can be a bit confusing at times. Check /mine journal for help, or refer to the sections below. The hardest part is the requium orb puzzle, but the easiest part is just understanding that you mine ores and get rewards']]
  },
  {
    id: 'Sellables', eyebrow: '02 / Sellables', title: 'How to start making money with Pyromining?',
    description: "The first two resources you encounter in Pyromining, will be purely used for profit",
    content: "&6&lFluxes\n\n&rFluxes are the most common drops from ores\nThey have no other interaction other then selling them in &7&l/mine shop&r\n - &2&lBasic Fluxes&r can be found when mining any overworld ore\n - &4&lBlazed Fluxes&r can be found when mining nether ores (Quartz/Gold). &4Blazed Fluxes&r sell for more then &2Basic Fluxes&r\n\n&6&lGemstones&r\n\nGemstones have a flat &e2%&r drop rate when mining any ore besides &7Iron&r and &6Gold&r\n\nEach ore has its own gemstone, with a specific value attached to it\n - &8Coal&r: &7Peridot&r (&6$500&r)\n - &4Redstone&r: &7Ruby&r (&6$750&r)\n - Nether Quartz: &7Topaz&r (&6$1000&r)\n - &1Lapis&r: &7Amethyst&r (&6$1500&r)\n - &2Emerald&r: &7Sapphire&r (&6$2000&r)\n - &bDiamond&r: &7Tiger's Eye&r (&6$2500&r)\n\nGemstones can be 'Identified' to get a sell price multiplier\nRight click with the gemstone in hand to figure out its quality\n\nPossible Qualities are:\n - Ruined: &70.70&r\n - Badly Damaged: &70.8&r\n - Damaged: &70.9&r\n - Worn: &71.2&r\n - Pristine: &71.5&r\n\n&4&lMaiden's Recommendation:&r The gemstone identification process leans very slightly in favor of profitting rather then losing money, but only slightly. If you care about short-term profit or have only a small amount of gemstones (less then 5) you're better off selling unidentified, but if you have either bulk gemstones stored or care more about long term profits always identify your gemstones before selling"
  },
  {
    id: "Artifacts", eyebrow: '03 / Artifacts', title: 'What are these Artifacts Im getting?',
    description: 'Artifacts are the key to all endgame Pyromining resources',
    content: `&6&lArtifacts\n\n&rArtifacts have a &e0.8%&r chance to drop when mining any ore\nThey look like firework stars and have 9 different tiers of rarity then can fall into\n\nAfter hitting the 0.8% chance it rolls rarity based on these rates:\n - &fBasic&r: &742%&r\n - &2Unusual&r: &721%&r\n - &5Epic&r: &714%&r\n - &9Exceptional&r: &710%&r\n - &6Legendary&r: &76%&r\n - &4Fabled&r: &74%&r\n - &5Mythic&5: &72.4%&r\n - &eCelestial&r: &70.5%&r\n - &3Divine&r: &70.1%&r\n\nThat means you have a &71/125000&r chance of getting a divine artifact when breaking an ore. These are the rarest collectibles in the plugin and give amazing rewards\n
    &6&lIdentification&r

    Artifacts can be identified in the &7&l/mine artifacts&r page
    
    Before &2identifying&r an artifact, you have to unseal it. Do this by right clicking on it
    
    &5Note:&r Artifacts drop sealed so that they stack neatly in your inventory. When they are identified they will no longer stack
    
    Take an unsealed artifact and open up the &7&l/mine artifacts&r page
    
    Place the artifact in one of the empty cells, designated by the &7iron bars&r. It will turn into a minecart. This means its being &2identified&r. From here you can see the time remaining and the possible drop table
    
    Once the artifact is done &2identifying&r it will turn into an enderchest and you can click on it in the menu to claim the rewards and open up that artifact slot again
    
    There is a myriad of rewards you can get from identifying artifacts, but the most important three are:
     - &5Mysterious dust (Needed for refining)&r
     - &7Fossils (Needed to create Vessels, the pickaxe enchantments)&r
     - &9Requium Orbs (Needed to summon boss fight)&r
     
     &4&lMaiden's Recommendation:&r Always have your identification slots full. The later sections require a ton of materials found in these artifacts. Especially focus on identifying tier 3 and above artifacts for the fossil chance, the most useful resource in the plugin. Artifacts do have a sell price. You can sell them if you have bulk amounts of low tier artifacts while you have higher tier ones identifying, but they're more useful getting their drops from the identification process.`
  },
  {
    id: "Refining", eyebrow: "04 / Refining", title: "What do I do with Mysterious Dust and Fossils?",
    description: "Mysterious dust? I hardly know her!",
    content: `&6&lMysterious Dust&r
    Mysterious dust, a gunpowder looking item, is the most basic resource put into the refinery

    &3Creating a Refinary: &rTo create a refinery you need to place an upwards facing &7dropper&r with a &7fence&r on top. To refine, place the needed items in the dropper and right click the fence

    Refineries are used to process two specific pyromining recipes:
     - &5Mysterious Dust&r -> Various Rewards
     - &8Fossils&r -> Vessels

    &5&lMysterious Dust Drops&r
      - &d75%: Rune Dust&r
      - &e4% (Requires Level 20): Oraclite&r
      - &37% (Requires Level 25): Ancient Relic&r
      - &410% (Requires Level 30): Shattered Requium Orbs
    
      &dRune Dust:&r Rune Dust is used to summon Rune Guardians, mini bosses that drop runes needed to upgrade the &bSingularity&r
      
      &eOraclite:&r Oraclite is used to summon Oracles, the most difficult late-game bosses that requires groups to defeat

      &3Ancient Relic:&r When used on a sealed artifact, it upgrades their tier by +1

      &4Shattered Requium Orbs:&r Collect 4 of the same type of Shattered Requium Orb and right click to get one Requium Orb of that kind

      More information can be found about &dRune Dust&r, &eOraclite&r, and &4Requium Orbs&r in their respective bosses sections below

      &6&lFossils and Vessels&r
      The other recipe that can be made in the refinery is the creation of Vessels, custom enchantments for your pickaxe

      When identifying tier 3 and above artifacts, you have a chance to get a Fossil

      Fossils have 2 unique parameters attached to each one:
       - &3Vessel&r: Each fossil is a piece of one of the twelve Vessels
       - &2Type&r: Each fossil is randomly either: Skull, Spine, Rib, Tail, Wing, Arm, Leg, or Foot

      Collect all 8 unique types of the same Vessel in a refinery, click the fence, and a Vessel should pop out
      
      &5Note&r: Each Vessel craft also has a Zeta (Pyromining currency) cost and a required Pyromining level before its created

      Vessels can be dragged and dropped on a pickaxe to activate the Vessel progression. The enchantment doesn't take effect yet, it first needs the Vessel boss killed

      Vessels have a primary effect that increases for every Vessel level, and powerful &6max level bonuses&r that activate when you've fully upgraded that Vessel. See all Vessels by hovering over the items in the container below
    
      &4&lMaiden's Recommendation: &rWait until you are level 25 or 30 and then refine all your stockpiled &5Mysterious Dust&r. &3Ancient relics&r and &4Shattered Requium Orbs&r are the two most important drops from there. Only refine for Rune Dust if you want to try out a Rune Guardian miniboss or two, but early game the &bSingularity&r upgrades you get from doing so arent massive. Save all the fossils you get, it can take a while before amassing an entire set for a Vessel. Don't be afraid to ask others and trade around for fossils, it can make it easier to complete a set
    `
  },
  {
    id: "VesselBoss", eyebrow: "05 / Vessel Boss", title: "How to turn a Vessel into an Enchantment",
    description: "The most confusing part of Pyromining",
    content: `&6&lVessel Bosses&r
    Once you put a &7Vessel&r onto a pickaxe, you should now see the Vessel's name in parenthesis on the pickaxe name
    
    This tells you that a &bVessel Progression&r is currently underway
    
    The Vessel Progression ends when the &4Vessel Boss&r is killed and then it will turn into just a normal enchantment on your pickaxe
    
    To summon the boss, you must first complete the &bRequium Orb Puzzle&r
    
    &6&lRequium Orb Puzzle&r
    The Requium Orb Puzzle can be found in the Vessels page. Access it using &7/mine Vessels&r

    First, you have to &7click&r on your pickaxe in your inventory to select it. If it has a valid Vessel Progression you should hear a noise

    In the middle of the GUI page, &e3 slots&r are present below iron bars. These three slots need to be filled with the right three Requium orbs in the correct order

    Each of the three slots can be &e1 of the 12&r Requium orbs, making for &e1320 unique combinations&r to the Requium orb puzzle (&5Note:&r you cant have two of the same orb present in a puzzle)

    The &e12 Requium orbs&r all have a name based on the Hebrew Alphabet/Counting System: Aleph, Bet, Gimel, Dalet, Heh, Vav, Zayin, Chet, Tet, Yut, Yut Aleph, Yut Bet

    You can get Requium Orbs from artifacts and Shattered Requium orbs (from refining mysterious dust after level 30)

    One example solution is: &bGimel Tet Chet&r. Another is &bBet Heh Vav&r. The orbs need to be in order and the three orbs chosen are randomized every time you start a new Vessel Progression.

    To figure out exactly which orbs go in which slots, you need to kill &4Thralls&r

    &6&lThralls&r
    When you have a Vessel Progression active, mining an ore will give a chance to spawn a &4Thrall&r

    These are small silverfish, that strength scale based on how many Vessels you have already added to your pickaxe

    There is a &e2 minute cooldown&r between getting a Thrall. Thrall spawn chance and cooldown can be upgraded by getting the &7Necros Realm&r Vessel, a perfect choice for a first Vessel

    Everytime you kill a Thrall, you gain a bit of anger. Once the anger level hits &e100%&r your anger is reset and a Requium orb placement is revealed to you in chat

    An example reveal is: &7You have unlocked &4Requium #1&r&7 which is &cChet&r

    You can hover over the green book in &7/mine vessels&r after clicking your pickaxe to see your anger progress

    Solve the Requium Orb for all &e3 slots&r, place them underneath the iron bars, and then mine an ore and the Vessel Boss should spawn

    &6&lVessel Boss&r
    Similar to the Thralls, the boss's strength and stats are based on how many Vessels are currently active on your pickaxe.

    This means that later Vessel progressions will likely &4require a group to fight&r, while your first Vessel can likely be &2done alone&r

    Vessel Bosses have a possibility to spawn in with one of &e6 quirks&r (or none at all). This can be viewed beforehand in the green book in &7/mine vessels&r:
     - &4Fire damage immunity&r
     - &4Projectile immunity&r
     - &4Slowness immunity&r
     - &4Life steal&r
     - &4Armor piercing&r
     - &4Enhanced speed&r

    To spawn the Vessel Boss, mine a piece of ore while all Requium Orbs are placed. If the Requium Orbs are placed in the &4wrong order&r, the boss will spawn for a short period (&e30-60 seconds&r), and then despawn. You can use this to check if you have the right order, but the more consistent method is &4killing thralls&r

    Killing a Vessel Boss removes the Vessel Progression and confirms it as an enchantment on your pickaxe. They also drop a shattered version of each of the Requium orbs used (4 Shattered Requium Orbs = 1 Requium Orb) 
    `
  },
  {
    id: "RuneDust", eyebrow: "06 / Rune Dust", title: "What do I do with Rune Dust?",
    description: "The first miniboss you can encounter, and a realization that these bosses hit hard",
    content: `&6&lRune Dust&r
      &5Rune dust&r is the most common drop you'll get from refining Mysterious dust

      It's needed to summon &5Rune Guardians&r which drop runes to upgrade the &3Singularity&r

      To summon a &5Rune Guardian&r simply right click on redstone ore with &5Rune Dust&r

      A menu should popup, asking which type of &5Rune Guardian&r you want to spawn for 3 &5Rune Dust&r or a random type for 1 &5Rune Dust&r

      These minibosses can be difficult. Make sure to have full netherrite armor and a good weapon before attempting them

      Each &5Rune Guardian&r has its own quirks too. For instance, the &eLightning Guardian&r repeatedly strikes with Lightning surrounding the miniboss

      Upon death &5Ruene Guardians&r drop a &5rune&r associated with their type

      All the &5Rune Guardians&r are:
       - &cFire Guardian&r
       - &8Ghost Guardian&r
       - &eLightning Guardian
       - &dFairy Guardian&r
       - &6Ground Guradian&r
       - &2Nature Guardian&r
       - &3Water Guardian&r

      &6&lSingularity&r

      &3Singularity&r is a collection of upgradeable skills for Pyromining

      Everytime you level up your &3Singularity&r you gain a point

      These levels are done by gathering an ever increasing amount of &5Runes&r of various elements

      The points can be spent on five separate &3Singularity&r skills:

       - Requium Progress: Every upgrade gives more Requium XP (Another name for &cAnger Level&r)

       - Rune Drop Chance: Every upgrade upgrades the drop chance of &5Runes&r from &5Rune Guardians&r

       - Oracle Damage: Every upgrade reduces your damage taken from &eOracles&r

       - Cheaper Upgrades: Every upgrade makes all menu upgrades cheaper (Present at the bottom of /mine artifacts)

       - More Zeta: Every upgrade gives more &eZeta&r from all sources
    `
  },
  {
    id: "Oracles", eyebrow: "07 / Oracles", title: "What do I do with Oraclite?",
    description: "Endgame bosses that need to be defeated by a group. Drops amazing rewards",
    content: `&6&lOracles&r

      Oracles are a set of &e3 high level bosses&r that drop useful Pyromining rewards

      To summon an Oracle, you first need to be &elevel 40&r and obtain &7Charged Oraclite&r

      Uncharged Oraclite is gotten from refining &7Mysterious Dust&r after level 20. 

      To charge it simply mine diamond ore with it in your offhand. It needs &e35 charges&r to become &7Charged Oraclite&r

      To summon Radalite, the first Oracle, &7right click&r Charged Oraclite on Emerald Ore. A menu will popup to confirm the summoning

      There is a &e1 hour cooldown&r between summoning the same Oracle

      &6&lRadalite&r
      &bLore:&r Radalite is a Fire Oracle, but that doesn't mean you should fight her in water. She actually does &4bonus damage&r when fought in water and will set the world on fire

      On death, an entire table of drops is rolled independently

      &9&lDrops:&r
       - &e1-10x Rune Dust&r (65% Chance) - Used for &5Rune Guardians&r
       - &e1-2x Zeta Tear&r (50% Chance) - Redeemed for &e10,000 Zeta&r
       - &e1x Fabled (Tier 6) Artifact&r (75% Chance)
       - &e1x Mythic (Tier 7) Artifact&r (60% Chance)
       - &e1-10x Radalite Claw&r (100% Chance) - Removes cooldown between summoning Rune Guardians
       - &e1x Fossil Transmuter&r (65% Chance) - Converts up to &e3&r stacked fossils into another fossil of the same body type. 
       - &eHell Rune&r (100% Chance) - Used to summon the next Oracle, Impulse

      &6&lImpulse&r
      &bLore:&r Impulse is a Lightning Oracle, he does &4massive AOE damage&r from far range throwing lightning all over the battlefield. Careful landing the final blow, as Impulse loves to explode

      Spawned when a &eHell Rune&r (dropped from Radalite) is used on an Emerald Ore. 

      &9&lDrops:&r
       - &e1-3x Zeta Tear&r (70% Chance) - Redeem for &e10,000 Zeta&r
       - &e1x Celestial (Tier 8) Artifact&r (75% Chance)
       - &e1x Divine (Tier 9) Artifact&r (60% Chance)
       - &e1-4x Ancient Relic&r (75% Chance) - Used on an artifact to upgrade it &e1 tier&r
       - &e1x Bone Marrow&r (50% chance) - Duplicates a fossil
       - &e1x Light Rune&r (100% Chance) - Used to summon the next Oracle, Tohka 

       &6&lTohka&r
       &bLore:&r She is literal Darkness. Swaps resistances every &e20 seconds&r and becomes immune to all types of damage except one at the time of the swap. She has &e3 phases&r and will require a &4massive party&r

      &4&lNot implemented:&r Using a Light Rune on Emerald Ore will not open a summoning menu. For now only Radalite and Impulse can be fought`

    }
]

function App() {
  return (
    <main className="guide-shell">
      <div className="guide-layout">
        <aside className="guide-sidebar">
          <h1 id="page-title">The <span>Maidens</span> Handbook</h1>
          <nav className="guide-index" aria-label="Guide sections">
            <div className="index-label"></div>
            {sections.map(({ id, title }) => <a href={`#${id}`} key={id}><span>{title}</span></a>)}
          </nav>
        </aside>
 
        <div className="guide-content">

          <div className="guide-sections">
            {sections.map(({ id, eyebrow, title, description, steps, content }) => <section className={`guide-section ${id === 'requium-order' ? 'requium-feature' : ''}`} id={id} key={id}><div className="section-heading"><span>{eyebrow}</span><h2>{title}</h2><p>{description}</p></div>{id === 'requium-order' && <div className="requium-rule"><strong>THE RULE</strong><span>You are not guessing three random orbs. You are collecting three clues, one at a time, until the order is complete.</span></div>}{steps ? <div className="step-grid">{steps.map(([label, copy], index) => <div className="step" key={label}><b>0{index + 1}</b><strong>{label}</strong><p>{copy}</p></div>)}</div> : <><MinecraftPanel content={content} />{id === 'Refining' && <><div className="vessel-subsection-heading"><h3>Vessels</h3><p>Hover over a vessel to view its stats and description</p></div><div className="vessel-inventory" aria-label="Vessel inventory">{Array.from({ length: 12 }, (_, index) => <MinecraftTooltip content={vesselTooltips[index] ?? vesselTooltips[0]} key={`vessel-${index}`} className="vessel-slot" place="top"><img src={vesselImages[index] ?? '/concrete.png'} alt={`Vessel ${index + 1}`} /></MinecraftTooltip>)}</div></>}</>}</section>)}
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
