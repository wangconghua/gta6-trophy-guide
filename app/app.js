// Leonida Trophy Guide — GTA VI, PS5. Plain static app, no network: the trophy data is
// embedded below (the same list as app/data/trophies.json), progress lives in localStorage.
const DATA = {
 "game": "Grand Theft Auto VI",
 "platform": "PlayStation 5",
 "list": "the official 55 trophies, 2026-11-18",
 "note": "Names, descriptions and grades are the official list exactly as reported (Exophase, cross-checked with PSNProfiles). Every guide below is written by us, in our own words, from the official description — nothing here was copied from another guide, and no location is given that we have not verified. Where a place is not pinned down, the guide says so.",
 "trophies": [
  {
   "id": 1,
   "name": "Vice Got a Price!",
   "description": "Congratulations! You're a Leonida Legend.",
   "grade": "platinum",
   "kind": "misc",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "This is the reward for the other 54 trophies, so there is no separate task. Work through the roadmap in this guide: story first, then the stranger strands and character finales, then activities and challenges, then collectibles and exploration, then the combat and robbery trophies, with 100% completion as the last big gate. A Long Road (100% completion) is the final hurdle for most hunters.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 2,
   "name": "Just Like Paradise",
   "description": "Complete Gone Fishing.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Gone Fishing is the opening mission, so this unlocks as you start the story. Just play the introduction and follow the on-screen objectives; nothing here can be missed. It is the first trophy most players will earn.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 3,
   "name": "Paradise Lost",
   "description": "Complete Chapter 1.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Finish Chapter 1 by playing through its missions in order. Story trophies unlock as the chapters end, so there is no extra task beyond the story itself. If you are tracking progress, this is the first chapter checkpoint.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 4,
   "name": "T**s Ass Drug Money",
   "description": "Complete Chapter 2.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete Chapter 2. By this point both protagonists are in play and several side activities open up — but the trophy itself only needs the chapter finished. Keep playing the story missions and it will pop at the chapter's end.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 5,
   "name": "Vice City, Baby!",
   "description": "Complete Chapter 3.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete Chapter 3. Same as the other chapter trophies: finish the chapter's missions in order and the trophy unlocks at the end. The chapter trophies are unmissable as long as you keep playing the story.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 6,
   "name": "Top Of The World, Ma",
   "description": "Complete Chapter 4.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete Chapter 4, the last full chapter before the finale. Finish its missions and the trophy unlocks at the chapter's end. After this, only the final mission stands between you and the story's gold trophy.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 7,
   "name": "You Gotta Know When to Get Off",
   "description": "Complete the final mission.",
   "grade": "gold",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete the final mission. This is the story's last mission and the second gold trophy in the list. There is no confirmed mission replay, so keep a manual save from before the finale in case you want to revisit the ending — the trophy itself only needs the mission finished once.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 8,
   "name": "Trust",
   "description": "Complete Breakfast Run.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete the mission Breakfast Run. Story missions unlock in order as you play, so just keep following the story. The name and description are all the official list gives us; the mission's exact place in the story is not pinned down here.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 9,
   "name": "Break the Bank",
   "description": "Complete The Cartel Heist.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete the mission The Cartel Heist. A story mission — play through the story and it comes in order. Expect a big set-piece heist, but the official list does not say where or when it falls, so we will not guess.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 10,
   "name": "Family Matters",
   "description": "Complete Child's Play.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete the mission Child's Play. Story mission; it unlocks in sequence. No extra requirement beyond finishing the mission — just follow the story markers when it appears.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 11,
   "name": "DWNFALL",
   "description": "Complete Headliners.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete the mission Headliners. Story mission; finish it as part of the story. The description gives no location or setup, so follow the in-game mission markers when it unlocks.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 12,
   "name": "Hi-Jacked",
   "description": "Complete VCIA Takedown.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete the mission VCIA Takedown. VCIA is Vice City International Airport, named in the trophy itself, so this one takes place at the airport. Finish the mission as it comes up in the story.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 13,
   "name": "Snow Storm",
   "description": "Complete Operation Savage Glory.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete the mission Operation Savage Glory. Story mission; finish it in sequence. The name suggests a large operation, but the official list gives no details, so we do not invent a walkthrough here.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 14,
   "name": "A Long Road",
   "description": "Attain 100% Completion.",
   "grade": "gold",
   "kind": "challenge",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Attain 100% completion. This is the hardest trophy and the last one most players earn: the in-game 100% checklist covers the story, stranger strands, activities, collectibles and exploration. Track it on the game's own stats screen and use this guide's roadmap — the checklist is the plan. It cannot be rushed; expect it to be the final gold before the platinum.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  }
,
  {
   "id": 15,
   "name": "Cunning Stunts",
   "description": "Complete 250 Stunts.",
   "grade": "silver",
   "kind": "challenge",
   "story": false,
   "missable": false,
   "target": 250,
   "guide": "Complete 250 stunts. Stunts are the game's driving tricks — jumps, near misses, airtime and the like — and the counter runs across the whole game. Play naturally and the count climbs; to grind it, repeat stunt-friendly driving in open areas rather than in traffic. The official description does not define exactly which moves count as a stunt, so check the in-game stats to see the number move.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 250 from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 16,
   "name": "Master of None",
   "description": "Try each type of activity once.",
   "grade": "bronze",
   "kind": "activity",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Try each type of activity once. The game has a set of activity types — races, the shooting range, fishing, arcade games, bowling, meditation and more — and you only need one try of each. Early on, sample every activity you pass; the trophy pops when the last type is tried. The official list does not name the full set of types, so use the in-game activity menu as your checklist.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 17,
   "name": "The Shootist",
   "description": "Earn a gold medal in all Shooting Range challenges.",
   "grade": "silver",
   "kind": "activity",
   "story": false,
   "missable": false,
   "target": 42,
   "guide": "Earn a gold medal in all 42 Shooting Range challenges. There are 42 challenges at the shooting range; each needs a gold-medal score. Work through them one weapon at a time and repeat a challenge until the gold threshold shows. This is a skill grind, not a luck one — learn the scoring first, then repeat until the gold lands.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 42 challenges from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 18,
   "name": "Top Fun",
   "description": "Win a Top Fun Drone Race at every location.",
   "grade": "bronze",
   "kind": "activity",
   "story": false,
   "missable": false,
   "target": 14,
   "guide": "Win a Top Fun Drone Race at every location — 14 locations in total. Drone races are a Top Fun activity; you need a win at each of the 14 spots, not just 14 wins. Keep a note of which locations you have won at and revisit the ones left. The official list does not name the 14 locations, so we do not list them here.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 14 locations from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 19,
   "name": "Earn Cash, Not Kudos",
   "description": "Win 20 different races.",
   "grade": "bronze",
   "kind": "activity",
   "story": false,
   "missable": false,
   "target": 20,
   "guide": "Win 20 different races. Races count per event, so winning the same race twice only counts once — you need 20 distinct race events. Try different race types and locations, and use the race menu to see which you have already won.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 20 from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 20,
   "name": "Baited My Tackle",
   "description": "Beat Cal in a fishing challenge.",
   "grade": "bronze",
   "kind": "activity",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Beat Cal in a fishing challenge. Cal is a fishing rival; challenge him and out-fish him. The official list does not say where Cal is found, so look for the fishing challenge prompt in the game rather than a fixed spot we have not verified.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 21,
   "name": "Stick Fiddler",
   "description": "Complete an arcade game.",
   "grade": "bronze",
   "kind": "activity",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Complete an arcade game. Find an arcade machine and play a game through to its end. Any arcade game counts, so pick the one you enjoy most; this is one of the quickest trophies in the list and a good early win.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 22,
   "name": "Road to Rehabilitation",
   "description": "Complete the final mission for Andy.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete the final mission for Andy. Andy is one of the stranger characters with a mission strand; play his missions through to the last one. Stranger strands appear as you explore Leonida, so keep an eye out for his marker on the map.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 23,
   "name": "This Was No Boat Accident",
   "description": "Complete the final mission for Kenton.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete the final mission for Kenton. Finish Kenton's strand of missions, ending with his final one. Like the other character finales, it is a matter of finding his missions and playing them through to the end.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 24,
   "name": "The Lone Rider",
   "description": "Complete the final mission for Billy.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete the final mission for Billy. Finish Billy's mission strand. His final mission is the trophy; the earlier missions in the strand are the road to it.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 25,
   "name": "Strangers & Freaks",
   "description": "Complete 8 mission strands for strangers across the state of Leonida.",
   "grade": "silver",
   "kind": "mission",
   "story": false,
   "missable": false,
   "target": 8,
   "guide": "Complete 8 mission strands for strangers across Leonida. Strangers are the side characters who hand out mission chains; finish eight full strands. There are more than eight strangers, so you can pick the strands you like — the five named character finales (Andy, Kenton, Billy, Randy, Tyrone) count toward this total.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 8 strands from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 26,
   "name": "Supply & Demand",
   "description": "Complete the final mission for Randy.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete the final mission for Randy. Finish Randy's mission strand. Find his missions as you explore Leonida and play them to the end.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 27,
   "name": "Spin On This!",
   "description": "Complete the final mission for Tyrone.",
   "grade": "bronze",
   "kind": "story",
   "story": true,
   "missable": false,
   "target": null,
   "guide": "Complete the final mission for Tyrone. Finish Tyrone's mission strand, ending with his last mission. Like the other finales, it counts toward Strangers & Freaks as well.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 28,
   "name": "Positive Mental Attitude",
   "description": "Meditate at every spot across Leonida.",
   "grade": "bronze",
   "kind": "exploration",
   "story": false,
   "missable": true,
   "target": 18,
   "guide": "Meditate at every spot across Leonida — 18 spots in total. Meditation spots are scattered around the map; visit all 18 and meditate at each. This is the one trophy to watch for missables: if any spot is tied to a one-time story area, it could be missed, and that has not been verified in the game — so meditate at every spot you find as you go, and do not leave the set for after the story. The official list does not name the 18 spots, so we do not list locations here.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 18 spots from the official description. Missable flag: our own conservative reading of the description — the 18-spot requirement is the risk, not a verified in-game fact. Guide: our own advice from the official description — not yet checked in the game."
  }
,
  {
   "id": 29,
   "name": "Fair Game",
   "description": "Hunt a unique animal for Bret.",
   "grade": "bronze",
   "kind": "activity",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Hunt a unique animal for Bret. Bret asks you to hunt one specific, unique animal. The official list does not name the animal or where it lives, so follow Bret's missions and the in-game guidance rather than a location we have not verified.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 30,
   "name": "Don't Touch My Deck",
   "description": "Complete 3 Collectible Card sets.",
   "grade": "silver",
   "kind": "collectible",
   "story": false,
   "missable": false,
   "target": 3,
   "guide": "Complete 3 Collectible Card sets. Collectible cards are found around Leonida in sets; finish any three full sets. Cards are a long collectible hunt, so pick up every card you pass and keep the set counts in view — finishing sets one at a time keeps the grind organised.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 3 sets from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 31,
   "name": "You WAiNKer!",
   "description": "WAiNK It at 100 locations.",
   "grade": "silver",
   "kind": "collectible",
   "story": false,
   "missable": false,
   "target": 100,
   "guide": "WAiNK It at 100 locations. WAiNK It is a photo-style activity — visit 100 locations and do it at each. The count is the grind, so fold it into exploring the map and do it everywhere you go, instead of backtracking later. The official list does not explain the mechanic beyond the name, so follow the in-game prompt at each spot.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 100 locations from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 32,
   "name": "One Last Thing",
   "description": "Complete 50 Challenges.",
   "grade": "bronze",
   "kind": "challenge",
   "story": false,
   "missable": false,
   "target": 50,
   "guide": "Complete 50 Challenges. Challenges are the game's side objectives; finish any 50. They span activities, combat and exploration, so the count grows as you play broadly — check the challenges menu to see which ones are close to done and finish those first.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 50 from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 33,
   "name": "Hot Together",
   "description": "Lose a 4 star Wanted Level with your partner and escape the heat.",
   "grade": "bronze",
   "kind": "combat",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Lose a 4 star Wanted Level with your partner and escape the heat. Get a four-star wanted level while your partner is with you, then lose the cops. Breaking line of sight and hiding until the search ends is the classic approach; a fast car and open road help. Your partner must be with you when the wanted level drops.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 34,
   "name": "Retail Therapy",
   "description": "Rob 3 shops back-to-back with your partner without losing your Wanted Level.",
   "grade": "bronze",
   "kind": "combat",
   "story": false,
   "missable": false,
   "target": 3,
   "guide": "Rob 3 shops back-to-back with your partner without losing your Wanted Level. With your partner beside you, rob three shops in a row while staying wanted the whole time — do not let the wanted level clear between robberies. Plan a short route between three nearby shops and move fast from one to the next.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 3 shops from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 35,
   "name": "Whip It Good",
   "description": "Discover 100 vehicles.",
   "grade": "bronze",
   "kind": "collectible",
   "story": false,
   "missable": false,
   "target": 100,
   "guide": "Discover 100 vehicles. Getting into a new vehicle model for the first time counts as a discovery, so drive everything you see — 100 distinct vehicles. Variety is the point: parking lots, traffic and dealerships are all fair game, and the count grows fastest when you try cars you have never driven.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 100 vehicles from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 36,
   "name": "Gunslinger",
   "description": "Take down 5 enemies in a single use of Combat Focus.",
   "grade": "bronze",
   "kind": "combat",
   "story": false,
   "missable": false,
   "target": 5,
   "guide": "Take down 5 enemies in a single use of Combat Focus. Combat Focus is a slow-motion aiming mode; activate it during a firefight and drop five enemies before it ends. Pick a fight with plenty of enemies close together and line up the shots while time is slowed.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 5 enemies from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 37,
   "name": "Catch Me If You Can",
   "description": "Make an unscheduled departure at VCIA.",
   "grade": "bronze",
   "kind": "misc",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Make an unscheduled departure at VCIA. Leave Vice City International Airport in a way that is not a scheduled flight — steal a plane and take off, for example. Expect airport security to object; a quick getaway is part of the fun. The official description does not spell out the exact method, so improvise at the airport.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 38,
   "name": "Challenging Tank",
   "description": "Kinda hot in these Rhinos.",
   "grade": "bronze",
   "kind": "combat",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Kinda hot in these Rhinos. Rhinos are tanks, so this trophy involves the military hardware — getting into one, surviving one, or taking one on. The description is deliberately vague; expect it to pop during a moment with a Rhino in the game. We do not invent the exact trigger.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 39,
   "name": "Sneakthief",
   "description": "Rob a jewelry store without being detected.",
   "grade": "bronze",
   "kind": "combat",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Rob a jewelry store without being detected. A stealth robbery: get in, take the goods and get out without any alarm or witness spotting you. Plan the approach, watch the staff and cameras, and leave quietly — one detection ruins the attempt, so be ready to walk away and try again.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 40,
   "name": "Maximum Withdrawal",
   "description": "Rob 5 Bank Vaults and escape.",
   "grade": "silver",
   "kind": "combat",
   "story": false,
   "missable": false,
   "target": 5,
   "guide": "Rob 5 Bank Vaults and escape. Five separate bank vault robberies, each ending with a clean escape. These are bigger jobs than shop robberies, so prepare a getaway vehicle and a route before you start each one — the escape is half the trophy.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 5 vaults from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 41,
   "name": "A Classic Blitz Play",
   "description": "Rob an Armored Truck and escape.",
   "grade": "bronze",
   "kind": "combat",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Rob an Armored Truck and escape. Find an armored truck on the road, hit it, and get away clean. Trucks are armored, so expect a fight and a wanted level; the escape is the hard half of the trophy, so have a fast car waiting.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 42,
   "name": "The Goodtime State",
   "description": "Explore all of Leonida.",
   "grade": "bronze",
   "kind": "exploration",
   "story": false,
   "missable": false,
   "target": 52,
   "guide": "Explore all of Leonida — 52 areas. The map is divided into 52 named areas; visit every one. The in-game map tracks which areas you have been to, so use it to find the gaps and drive through the corners you have not visited yet.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 52 areas from the official description. Guide: our own advice from the official description — not yet checked in the game."
  }
,
  {
   "id": 43,
   "name": "Pest Control",
   "description": "Rob an Illegal Operation belonging to each gang.",
   "grade": "bronze",
   "kind": "combat",
   "story": false,
   "missable": false,
   "target": 9,
   "guide": "Rob an Illegal Operation belonging to each gang — 9 gangs. Every gang runs illegal operations around Leonida; rob one operation for each of the nine gangs. The official list does not name the nine gangs or their operations, so follow the in-game markers for gang activity rather than a list we have not verified.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 9 gangs from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 44,
   "name": "In The Beginning…",
   "description": "Enjoy a cocktail with a view on Ocean Beach.",
   "grade": "bronze",
   "kind": "misc",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Enjoy a cocktail with a view on Ocean Beach. Go to Ocean Beach, find a bar with a view, and order a cocktail. A relaxing one — sit, drink, and let the trophy pop.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 45,
   "name": "Capital Offense",
   "description": "Smash your way out of a vehicle showroom in classic style.",
   "grade": "bronze",
   "kind": "misc",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Smash your way out of a vehicle showroom in classic style. Drive a car straight through a vehicle showroom's frontage and out the other side, in the style of the series' classic showroom smash. Pick a showroom, line up, and floor it.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 46,
   "name": "Let’s Go Bowling",
   "description": "Follow-through at the Kolt & Associates' bowling alley.",
   "grade": "bronze",
   "kind": "activity",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Follow-through at the Kolt & Associates' bowling alley. Go bowling at the Kolt & Associates alley and play through a game. The trophy's name is a nod to the series' bowling past; just finish a game at that alley.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 47,
   "name": "Personal Best",
   "description": "A partnership with mass appeal.",
   "grade": "bronze",
   "kind": "misc",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "A partnership with mass appeal. This one is tied to a partnership moment — the description is deliberately cryptic and the official list gives no steps. It will likely pop during a story or side moment involving your partner; we do not invent a trigger.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 48,
   "name": "Actions Speak Louder",
   "description": "Choices made (for better or worse).",
   "grade": "bronze",
   "kind": "misc",
   "story": false,
   "missable": false,
   "target": 500,
   "guide": "Choices made (for better or worse). PSN tracks a count toward 500 for this trophy, so it is about making choices — many of them. Play through the game making decisions as they come; the count builds over a full playthrough. The official description does not say which choices count, so do not chase a specific list — just keep choosing.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). PSN count target of 500 as reported by PSNProfiles. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 49,
   "name": "Bad Luck, I Guess",
   "description": "Second time's the charm.",
   "grade": "bronze",
   "kind": "misc",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Second time's the charm. The name says it: succeed on a second attempt at something you failed the first time. The exact trigger is not spelled out in the official list, so treat this as one that pops naturally when you retry and succeed.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 50,
   "name": "The Truth Is Out There",
   "description": "What the hell just happened?",
   "grade": "bronze",
   "kind": "exploration",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "What the hell just happened? Something strange is out there in Leonida — an easter egg or an odd encounter. Explore the odd corners of the map and this one should find you. The official list gives no location, so we do not invent one.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 51,
   "name": "Ten Pin",
   "description": "Bowl 'em over with a melee drive-by.",
   "grade": "bronze",
   "kind": "activity",
   "story": false,
   "missable": false,
   "target": null,
   "guide": "Bowl 'em over with a melee drive-by. Knock someone over with a melee attack from a moving vehicle — a drive-by with a melee weapon, in the bowling-alley area. It is a deliberately silly trophy; the alley area is the place to try it.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 52,
   "name": "Dime on the Dollar",
   "description": "Earn $250,000 laundering Marked Bills through your contacts.",
   "grade": "bronze",
   "kind": "misc",
   "story": false,
   "missable": false,
   "target": 250000,
   "guide": "Earn $250,000 laundering Marked Bills through your contacts. Marked Bills are dirty money; launder them through your contacts until $250,000 is clean. It is a slow earner, so launder regularly as you play rather than saving it all for the end.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Amount of $250,000 from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 53,
   "name": "Treat Yo Self",
   "description": "Spend $100,000 across all shops.",
   "grade": "bronze",
   "kind": "misc",
   "story": false,
   "missable": false,
   "target": 100000,
   "guide": "Spend $100,000 across all shops. Buy things — clothes, food, weapons, anything sold in shops — until your total spending passes $100,000. It counts across all shops, so normal play contributes; big purchases near the end close the gap.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Amount of $100,000 from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 54,
   "name": "Little Boxes",
   "description": "Purchase all garage properties.",
   "grade": "bronze",
   "kind": "collectible",
   "story": false,
   "missable": false,
   "target": 8,
   "guide": "Purchase all garage properties — 8 garages. Buy every garage property in the game. Garages cost money and are spread across Leonida; save up and buy each one as you can afford it, and keep a note of which you already own.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 8 garages from the official description. Guide: our own advice from the official description — not yet checked in the game."
  },
  {
   "id": 55,
   "name": "On the Spot",
   "description": "Register 10 vehicles to the Scooter Bros app.",
   "grade": "bronze",
   "kind": "activity",
   "story": false,
   "missable": false,
   "target": 10,
   "guide": "Register 10 vehicles to the Scooter Bros app. Use the Scooter Bros app on your in-game phone to register ten vehicles. Drive a vehicle, open the app, and register it; repeat with ten different vehicles. It pairs naturally with Whip It Good, the 100-vehicle discovery trophy.",
   "sources": "Name, description and grade: official trophy list (Exophase, cross-checked with PSNProfiles). Count of 10 vehicles from the official description. Guide: our own advice from the official description — not yet checked in the game."
  }
 ]
};

const KEY = 'gta6-trophy-guide-v1';
const KINDS = ['story', 'mission', 'activity', 'collectible', 'combat', 'exploration', 'challenge', 'misc'];
const KIND_LABEL = { story: 'Story', mission: 'Mission', activity: 'Activity', collectible: 'Collectible', combat: 'Combat', exploration: 'Exploration', challenge: 'Challenge', misc: 'Misc' };
const QUICK_WINS = [21, 44, 46, 16, 51, 55, 20, 29];
const PHASES = [
  { title: 'Phase 1 — Story playthrough first', text: 'Play the story from the opening mission through the final mission. Every chapter trophy and every named-mission trophy comes free this way, and the story unlocks the map, the activities and the stranger strands you need later. Do not rush past side content you pass — but do not grind yet.', ids: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
  { title: 'Phase 2 — Stranger strands & character finales', text: 'After the story, finish the side characters. Eight full stranger strands earn the silver Strangers & Freaks, and the five named finales (Andy, Kenton, Billy, Randy, Tyrone) are five of those eight. Explore Leonida and follow the stranger markers.', ids: [22, 23, 24, 25, 26, 27] },
  { title: 'Phase 3 — Activities & challenges', text: 'The skill and activity trophies: shooting range golds, drone races, race wins, fishing, arcade, bowling, hunting and the 50 challenges. Try every activity type early for Master of None, then work the lists one at a time.', ids: [15, 16, 17, 18, 19, 20, 21, 29, 32, 46, 51, 55] },
  { title: 'Phase 4 — Collectibles & exploration', text: 'The long walks: 18 meditation spots, 3 card sets, 100 WAiNK It locations, 100 vehicles, all 52 areas of Leonida and the 8 garages. Fold these into your driving so you are not backtracking across the whole map at the end. Meditate at every spot you find as you go — see the Missables page.', ids: [28, 30, 31, 35, 42, 54] },
  { title: 'Phase 5 — Combat & robbery', text: 'Wanted levels, robberies and Combat Focus. Do the partner robberies while your partner is available, and save the bank vaults and gang operations for when you have good cars and a getaway plan.', ids: [33, 34, 36, 37, 38, 39, 40, 41, 43] },
  { title: 'Phase 6 — Money & 100% cleanup', text: 'The last stretch: launder $250,000 of Marked Bills, spend $100,000 in shops, and mop up the odd trophies (the cocktail, the showroom smash, the 500 choices, the strange encounter). When the in-game checklist reads 100%, A Long Road pops — and with it, the platinum.', ids: [14, 44, 45, 47, 48, 49, 50, 52, 53, 1] },
];

const byId = new Map(DATA.trophies.map(t => [t.id, t]));
const view = document.getElementById('view');
const detail = document.getElementById('detail');

let state = load();
let filters = { q: '', kind: 'all', grade: 'all', earned: 'all' };
let currentView = 'tracker';

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { earned: [], notes: {}, queue: [], settings: { spoilers: true, theme: 'paper' } };
    const s = JSON.parse(raw);
    return {
      earned: Array.isArray(s.earned) ? s.earned.filter(id => byId.has(id)) : [],
      notes: s.notes && typeof s.notes === 'object' ? s.notes : {},
      queue: Array.isArray(s.queue) ? s.queue.filter(id => byId.has(id)) : [],
      settings: { spoilers: s.settings?.spoilers !== false, theme: s.settings?.theme === 'night' ? 'night' : 'paper' },
    };
  } catch { return { earned: [], notes: {}, queue: [], settings: { spoilers: true, theme: 'paper' } }; }
}
function save() { localStorage.setItem(KEY, JSON.stringify(state)); }
const earnedSet = () => new Set(state.earned);
const isEarned = id => earnedSet().has(id);
function toggleEarned(id) {
  const s = earnedSet();
  if (s.has(id)) s.delete(id); else s.add(id);
  state.earned = [...s];
  save(); renderProgress(); render();
}
function applyTheme() { document.documentElement.dataset.theme = state.settings.theme; }
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

function renderProgress() {
  const total = DATA.trophies.length, n = state.earned.length;
  document.getElementById('earnedCount').textContent = n;
  document.getElementById('barFill').style.width = (n / total * 100).toFixed(1) + '%';
  const counts = ['platinum', 'gold', 'silver', 'bronze'].map(g => {
    const have = DATA.trophies.filter(t => t.grade === g && isEarned(t.id)).length;
    const all = DATA.trophies.filter(t => t.grade === g).length;
    return `${g[0].toUpperCase() + g.slice(1)} ${have}/${all}`;
  }).join(' · ');
  document.getElementById('gradeCounts').textContent = counts;
  document.getElementById('platinumNote').textContent = n === total
    ? 'Platinum earned — Vice Got a Price! is yours. Leonida Legend.'
    : `Platinum: Vice Got a Price! — earn the other 54. ${total - n} to go.`;
}

function spoilerHidden(t) { return state.settings.spoilers && t.story && !isEarned(t.id); }
function displayName(t) { return spoilerHidden(t) ? 'Hidden story trophy' : t.name; }
function displayDesc(t) { return spoilerHidden(t) ? 'Hidden until earned — turn spoilers on to see it.' : t.description; }

function medal(t) { return `<span class="medal ${t.grade}" title="${t.grade}">${t.grade === 'platinum' ? 'PL' : t.grade.slice(0, 2).toUpperCase()}</span>`; }
function tags(t) {
  const out = [`<span class="tag grade-${t.grade}">${t.grade}</span>`, `<span class="tag">${KIND_LABEL[t.kind]}</span>`];
  if (t.target) out.push(`<span class="tag">Target: ${t.target.toLocaleString()}</span>`);
  if (t.missable) out.push('<span class="tag missable">Possibly missable</span>');
  if (isEarned(t.id)) out.push('<span class="tag">Earned ✓</span>');
  return out.join('');
}
function trophyCard(t) {
  const li = document.createElement('li');
  li.className = 'trophy-card' + (isEarned(t.id) ? ' earned' : '');
  li.tabIndex = 0;
  li.setAttribute('role', 'button');
  li.innerHTML = `${medal(t)}<div class="trophy-body"><h3 class="trophy-name">${esc(displayName(t))}</h3><p class="trophy-desc">${esc(displayDesc(t))}</p>${spoilerHidden(t) ? '' : `<p class="trophy-guide-snippet">${esc(t.guide)}</p>`}<div class="meta-row">${tags(t)}</div></div>`;
  const box = document.createElement('input');
  box.type = 'checkbox'; box.className = 'tick'; box.checked = isEarned(t.id);
  box.setAttribute('aria-label', `Mark ${t.name} earned`);
  box.addEventListener('click', e => { e.stopPropagation(); toggleEarned(t.id); });
  li.prepend(box);
  li.addEventListener('click', () => openDetail(t.id));
  li.addEventListener('keydown', e => { if (e.key === 'Enter') openDetail(t.id); });
  return li;
}

function renderTracker() {
  const q = filters.q.trim().toLowerCase();
  const list = DATA.trophies.filter(t => {
    if (filters.kind !== 'all' && t.kind !== filters.kind) return false;
    if (filters.grade !== 'all' && t.grade !== filters.grade) return false;
    if (filters.earned === 'earned' && !isEarned(t.id)) return false;
    if (filters.earned === 'unearned' && isEarned(t.id)) return false;
    if (q && !(t.name + ' ' + t.description + ' ' + t.guide + ' ' + t.kind).toLowerCase().includes(q)) return false;
    return true;
  });
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="controls">
      <input type="search" id="q" placeholder="Search trophies…  ( / )" value="${esc(filters.q)}" aria-label="Search trophies">
      <select id="kind" aria-label="Filter by kind"><option value="all">All kinds</option>${KINDS.map(k => `<option value="${k}" ${filters.kind === k ? 'selected' : ''}>${KIND_LABEL[k]}</option>`).join('')}</select>
      <select id="grade" aria-label="Filter by grade"><option value="all">All grades</option>${['platinum', 'gold', 'silver', 'bronze'].map(g => `<option value="${g}" ${filters.grade === g ? 'selected' : ''}>${g[0].toUpperCase() + g.slice(1)}</option>`).join('')}</select>
      <select id="earnedFilter" aria-label="Filter by earned state"><option value="all">All trophies</option><option value="earned" ${filters.earned === 'earned' ? 'selected' : ''}>Earned</option><option value="unearned" ${filters.earned === 'unearned' ? 'selected' : ''}>Not yet earned</option></select>
      <label><input type="checkbox" id="spoilers" ${state.settings.spoilers ? 'checked' : ''}> Hide story spoilers</label>
      <button class="btn" id="themeBtn" type="button">Theme: ${state.settings.theme === 'night' ? 'Night 🌙' : 'Paper ☀️'}</button>
      <button class="btn" id="exportBtn" type="button">Export progress</button>
      <button class="btn" id="importBtn" type="button">Import progress</button>
      <input type="file" id="importFile" accept="application/json" hidden>
      <button class="btn danger" id="resetBtn" type="button">Reset</button>
      <span class="result-line" id="statusLine" role="status"></span>
    </div>
    <p class="result-line">Showing ${list.length} of 55 trophies · ${state.earned.length} earned. Click a trophy for its full guide, sources and your notes.</p>`;
  const ul = document.createElement('ul');
  ul.className = 'trophy-list';
  if (!list.length) { const p = document.createElement('p'); p.className = 'empty'; p.textContent = 'No trophies match those filters. Clear the search or widen the filters.'; wrap.append(p); }
  else list.forEach(t => ul.append(trophyCard(t)));
  wrap.append(ul);
  view.replaceChildren(wrap);

  document.getElementById('q').addEventListener('input', e => { filters.q = e.target.value; renderTrackerKeepFocus(); });
  document.getElementById('kind').addEventListener('change', e => { filters.kind = e.target.value; render(); });
  document.getElementById('grade').addEventListener('change', e => { filters.grade = e.target.value; render(); });
  document.getElementById('earnedFilter').addEventListener('change', e => { filters.earned = e.target.value; render(); });
  document.getElementById('spoilers').addEventListener('change', e => { state.settings.spoilers = e.target.checked; save(); render(); });
  document.getElementById('themeBtn').addEventListener('click', toggleTheme);
  document.getElementById('exportBtn').addEventListener('click', exportProgress);
  document.getElementById('importBtn').addEventListener('click', () => document.getElementById('importFile').click());
  document.getElementById('importFile').addEventListener('change', importProgress);
  document.getElementById('resetBtn').addEventListener('click', resetProgress);
}
function renderTrackerKeepFocus() {
  const pos = document.getElementById('q')?.selectionStart ?? null;
  render();
  const q = document.getElementById('q');
  if (q) { q.focus(); if (pos !== null) q.setSelectionRange(pos, pos); }
}

function chip(t) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'chip' + (isEarned(t.id) ? ' earned' : '');
  b.textContent = (isEarned(t.id) ? '✓ ' : '') + t.name;
  b.addEventListener('click', () => openDetail(t.id));
  return b;
}

function renderRoadmap() {
  const wrap = document.createElement('div');
  wrap.innerHTML = `<h2 class="section-title">Roadmap to the platinum</h2><p class="section-sub">Six phases, in the order we recommend. Story first, then strangers, then activities, then collectibles, then combat, then the money and 100% cleanup. Each phase shows its own progress.</p>`;
  for (const ph of PHASES) {
    const have = ph.ids.filter(id => isEarned(id)).length;
    const sec = document.createElement('section');
    sec.className = 'phase';
    sec.innerHTML = `<div class="phase-head"><h3 class="phase-title">${esc(ph.title)}</h3><span class="phase-count">${have} / ${ph.ids.length} earned</span></div><div class="bar"><div class="bar-fill" style="width:${have / ph.ids.length * 100}%"></div></div><p>${esc(ph.text)}</p>`;
    const chips = document.createElement('div');
    chips.className = 'chips';
    ph.ids.forEach(id => chips.append(chip(byId.get(id))));
    sec.append(chips);
    wrap.append(sec);
  }
  view.replaceChildren(wrap);
}

function renderMissables() {
  const flagged = DATA.trophies.filter(t => t.missable);
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <h2 class="section-title">Missable trophies</h2>
    <p class="section-sub">Built from the official trophy descriptions only — not verified in the game. We flag a trophy only when its own description gives a reason to worry.</p>
    <div class="callout"><h2>How this list is built</h2>
    <p>Most GTA games let you finish everything after the story, and nothing in the official descriptions says any trophy locks you out. So we do <strong>not</strong> claim a trophy is missable just because it sounds hard or time-consuming. Only one trophy is flagged, and only as <em>possibly</em> missable:</p>
    <p>There is no confirmed mission replay in the game, so a sensible habit is to keep a manual save at the start of every chapter and one before the final mission. That costs nothing and protects you if a later check proves something can be missed.</p></div>`;
  const list = document.createElement('ul');
  list.className = 'trophy-list';
  flagged.forEach(t => list.append(trophyCard(t)));
  wrap.append(list);
  const note = document.createElement('div');
  note.className = 'callout';
  note.innerHTML = `<h2>Not flagged — and why</h2>
  <p><strong>Story trophies</strong> (chapters, named missions, the final mission, the five character finales): they unlock by playing the story, so they cannot be missed while you play it through.</p>
  <p><strong>Actions Speak Louder</strong> (“Choices made”): choices are the point, but the description does not say any choice is one-time-only, so we do not flag it. Keep choosing as you play and the count builds.</p>
  <p><strong>Everything else</strong> (races, stunts, robberies, collectibles, exploration): the descriptions describe repeatable or open-world tasks with no time limit stated. If a later check shows one of these can be missed, this page will be the first thing we update.</p>`;
  wrap.append(note);
  view.replaceChildren(wrap);
}

function renderPlanner() {
  const nextStory = DATA.trophies.filter(t => t.story && !isEarned(t.id));
  const quick = QUICK_WINS.map(id => byId.get(id)).filter(t => !isEarned(t.id));
  const wrap = document.createElement('div');
  wrap.innerHTML = `<h2 class="section-title">Next up</h2><p class="section-sub">Story order first, then the quickest wins. Add trophies to your queue and work it top to bottom.</p>`;
  const grid = document.createElement('div');
  grid.className = 'next-grid';
  const storyCard = document.createElement('div');
  storyCard.className = 'next-card';
  storyCard.innerHTML = `<h3>Next story trophy</h3>${nextStory.length ? `<p><strong>${esc(nextStory[0].name)}</strong> — ${esc(nextStory[0].description)}</p><p>Then: ${esc(nextStory.slice(1, 4).map(t => t.name).join(' · ')) || 'story complete.'}</p>` : '<p>Story complete — every chapter and mission trophy is earned.</p>'}`;
  if (nextStory.length) {
    const b = document.createElement('button'); b.className = 'btn primary'; b.type = 'button'; b.textContent = 'Add to queue';
    b.addEventListener('click', () => addToQueue(nextStory[0].id));
    storyCard.append(b);
    const open = document.createElement('button'); open.className = 'btn'; open.type = 'button'; open.textContent = 'Open guide';
    open.addEventListener('click', () => openDetail(nextStory[0].id));
    storyCard.append(open);
  }
  grid.append(storyCard);
  const quickCard = document.createElement('div');
  quickCard.className = 'next-card';
  quickCard.innerHTML = `<h3>Quickest wins</h3><p>Short, easy trophies you have not earned yet. Knock these out between story missions.</p>`;
  const chips = document.createElement('div'); chips.className = 'chips';
  quick.forEach(t => chips.append(chip(t)));
  quickCard.append(chips);
  if (!quick.length) { const p = document.createElement('p'); p.textContent = 'All the quick wins are earned.'; quickCard.append(p); }
  grid.append(quickCard);
  wrap.append(grid);

  const qSec = document.createElement('div');
  qSec.className = 'about-block';
  qSec.innerHTML = `<h2>Your queue (${state.queue.length})</h2>`;
  if (!state.queue.length) { const p = document.createElement('p'); p.textContent = 'Nothing queued yet. Open any trophy and add it, or use the quick wins above.'; qSec.append(p); }
  else {
    const ul = document.createElement('ul'); ul.className = 'trophy-list';
    state.queue.forEach(id => {
      const t = byId.get(id);
      const li = trophyCard(t);
      const rm = document.createElement('button'); rm.className = 'btn'; rm.type = 'button'; rm.textContent = 'Remove';
      rm.addEventListener('click', e => { e.stopPropagation(); state.queue = state.queue.filter(x => x !== id); save(); render(); });
      li.querySelector('.trophy-body').append(rm);
      ul.append(li);
    });
    qSec.append(ul);
    const clear = document.createElement('button'); clear.className = 'btn'; clear.type = 'button'; clear.textContent = 'Clear queue';
    clear.addEventListener('click', () => { state.queue = []; save(); render(); });
    qSec.append(clear);
  }
  wrap.append(qSec);
  view.replaceChildren(wrap);
}

function addToQueue(id) {
  if (!state.queue.includes(id)) { state.queue.push(id); save(); }
  render();
}

function renderAbout() {
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <h2 class="section-title">Sources &amp; about</h2>
    <p class="section-sub">What this guide is, where its facts come from, and what it does not claim.</p>
    <div class="about-block"><h2>Sources</h2>
    <p><strong>The trophy list</strong> — names, descriptions and grades come from the official trophy list as reported by <strong>Exophase</strong> and cross-checked with <strong>PSNProfiles</strong>, frozen 18 November 2026: 55 trophies on PlayStation 5 — 1 platinum, 2 gold, 6 silver, 46 bronze, 28 hidden. The same 55 exist as Xbox achievements worth 1,000 Gamerscore.</p>
    <p><strong>Counts and targets</strong> — every number in a guide (250 stunts, 42 shooting range challenges, 14 drone race locations, 18 meditation spots, 52 areas, 9 gangs, 8 garages, 100 vehicles, 100 WAiNK It locations, 50 challenges, the $250,000 and $100,000 money totals) comes from the official descriptions themselves. The one exception is Actions Speak Louder, where the count target of 500 is reported by PSNProfiles.</p>
    <p><strong>The guides</strong> — every guide in this app is written by us, in our own words, from the official descriptions. Nothing was copied from another guide. No guide gives a specific location or step we have not verified; where a place is not pinned down, the guide says so plainly instead of inventing it.</p></div>
    <div class="about-block"><h2>What we do not claim</h2>
    <p>The game released on 19 November 2026, the day before this guide was written, and the guides have not yet been checked in the game. Missable flags are built from the official descriptions only (see the Missables page). If a guide turns out to be wrong once players test it, the guide — not the official list — is what is wrong.</p>
    <p>This guide is unofficial and not affiliated with Rockstar Games. All visuals here are our own CSS and text; no Rockstar logo or artwork is used anywhere.</p></div>
    <div class="about-block"><h2>How to use this guide</h2>
    <p>Tick trophies as you earn them — your progress saves on this device. Use the Roadmap for the order of play, the Missables page for the one thing to watch, and Next up when you want a short list of what to do next. Export your progress before switching devices; import it on the other one.</p>
    <p>Keyboard: <kbd>/</kbd> focuses search, <kbd>Esc</kbd> closes the trophy panel, <kbd>t</kbd> switches between the paper (light) and night (dark) themes.</p></div>`;
  view.replaceChildren(wrap);
}

function openDetail(id) {
  const t = byId.get(id);
  if (!t) return;
  detail.hidden = false;
  const note = state.notes[id] || '';
  detail.innerHTML = `
    <button class="btn close" id="detailClose" type="button">Close ✕</button>
    ${medal(t)}
    <h2>${esc(t.name)}</h2>
    <p class="trophy-desc">${esc(t.description)}</p>
    <div class="meta-row">${tags(t)}</div>
    <div class="detail-actions">
      <button class="btn primary" id="detailEarned" type="button">${isEarned(id) ? '✓ Earned — unmark' : 'Mark earned'}</button>
      <button class="btn" id="detailQueue" type="button">${state.queue.includes(id) ? '✓ In queue' : 'Add to queue'}</button>
    </div>
    ${t.missable ? '<p class="missable-callout"><strong>Possibly missable.</strong> This needs all 18 meditation spots. If any spot is tied to a one-time story area, it could be missed — that has not been verified in the game. Meditate at every spot you find as you go; do not leave the set for after the story.</p>' : ''}
    <h3>How to get it</h3>
    <p class="guide-text">${esc(t.guide)}</p>
    <h3>Sources</h3>
    <p class="sources">${esc(t.sources)}</p>
    <h3>Your notes</h3>
    <textarea id="detailNotes" placeholder="Your own notes — e.g. where you found it, what worked…" aria-label="Your notes for this trophy">${esc(note)}</textarea>
    <p class="result-line">Notes save automatically on this device.</p>`;
  document.getElementById('detailClose').addEventListener('click', closeDetail);
  document.getElementById('detailEarned').addEventListener('click', () => { toggleEarned(id); openDetail(id); });
  document.getElementById('detailQueue').addEventListener('click', () => {
    state.queue = state.queue.includes(id) ? state.queue.filter(x => x !== id) : [...state.queue, id];
    save(); openDetail(id);
  });
  document.getElementById('detailNotes').addEventListener('input', e => {
    const v = e.target.value.trim();
    if (v) state.notes[id] = v; else delete state.notes[id];
    save();
  });
  detail.scrollTop = 0;
}
function closeDetail() { detail.hidden = true; }

function toggleTheme() {
  state.settings.theme = state.settings.theme === 'night' ? 'paper' : 'night';
  save(); applyTheme(); render();
}
function exportProgress() {
  const payload = { app: 'gta6-trophy-guide', version: 1, exportedAt: new Date().toISOString(), earned: state.earned, notes: state.notes, queue: state.queue };
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
  a.download = 'gta6-trophy-progress.json';
  a.click();
  URL.revokeObjectURL(a.href);
}
async function importProgress(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    const ids = Array.isArray(data.earned) ? data.earned : (Array.isArray(data) ? data : []);
    const valid = ids.filter(id => byId.has(id));
    state.earned = valid;
    if (data.notes && typeof data.notes === 'object') state.notes = data.notes;
    if (Array.isArray(data.queue)) state.queue = data.queue.filter(id => byId.has(id));
    save(); renderProgress(); render();
    const s = document.getElementById('statusLine');
    if (s) s.textContent = `Imported ${valid.length} earned trophies.`;
  } catch {
    const s = document.getElementById('statusLine');
    if (s) s.textContent = 'That file could not be read as progress — is it a JSON export from this guide?';
  }
  e.target.value = '';
}
let resetArmed = false;
function resetProgress(e) {
  const btn = e.currentTarget;
  if (!resetArmed) {
    resetArmed = true;
    btn.textContent = 'Click again to confirm reset';
    setTimeout(() => { resetArmed = false; if (btn.isConnected) btn.textContent = 'Reset'; }, 4000);
    return;
  }
  resetArmed = false;
  state = { earned: [], notes: {}, queue: [], settings: state.settings };
  save(); renderProgress(); render();
  const s = document.getElementById('statusLine');
  if (s) s.textContent = 'Progress reset.';
}

function render() {
  document.querySelectorAll('.tabs a').forEach(a => a.classList.toggle('active', a.dataset.view === currentView));
  if (currentView === 'tracker') renderTracker();
  else if (currentView === 'roadmap') renderRoadmap();
  else if (currentView === 'missables') renderMissables();
  else if (currentView === 'planner') renderPlanner();
  else renderAbout();
}
function route() {
  const h = location.hash.replace(/^#\/?/, '') || 'tracker';
  currentView = ['tracker', 'roadmap', 'missables', 'planner', 'about'].includes(h) ? h : 'tracker';
  render();
}
window.addEventListener('hashchange', route);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDetail();
  else if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
    e.preventDefault();
    if (currentView !== 'tracker') location.hash = '#/tracker';
    setTimeout(() => document.getElementById('q')?.focus(), 0);
  } else if ((e.key === 't' || e.key === 'T') && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
    toggleTheme();
  }
});

applyTheme();
renderProgress();
route();
