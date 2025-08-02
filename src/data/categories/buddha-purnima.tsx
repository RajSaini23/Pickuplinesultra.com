
import type { CategoryData } from '../types';

const LotusIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <path d="M12 2v2" />
    <path d="M4.2 10.2s1.5-2 7.8-2 7.8 2 7.8 2" />
    <path d="M12 14v6" />
    <path d="M6.3 7.9A9.6 9.6 0 0 1 12 6c2 0 3.9.6 5.7 1.9" />
    <path d="M5 14s-1-2-1-4 2-4 4-4" />
    <path d="M19 14s1-2 1-4-2-4-4-4" />
  </svg>
);


export const data: CategoryData = {
  category: {
    name: 'Buddha Purnima',
    slug: 'buddha-purnima',
    color: '#F97316',
    description: 'Birth, enlightenment, and death of Buddha',
    icon: LotusIcon,
  },
  quotes: [
    { id: 1, hinglish: 'Hazaron khokhle shabdon se behtar woh ek shabd hai jo shanti laaye. Buddha Purnima ki shubhkamnayein.', english: 'Better than a thousand hollow words is one word that brings peace. Happy Buddha Purnima.', emoji: '🕊️' },
    { id: 2, hinglish: 'Aapka krodh, aapki saza hai. Krodh ko tyagein, shanti ko apnayein.', english: 'Your anger is your punishment. Renounce anger, embrace peace.', emoji: '😌' },
    { id: 3, hinglish: 'Teen cheezein zyada der tak chhip nahi sakti: suraj, chandrama aur satya.', english: 'Three things cannot be long hidden: the sun, the moon, and the truth.', emoji: '☀️' },
    { id: 4, hinglish: 'Aapke paas jo kuch bhi hai, uska abhaar manayein. Aapko aur milega.', english: 'Be grateful for what you have; you will end up having more.', emoji: '🙏' },
    { id: 5, hinglish: 'Jaise ek mombatti bina aag ke nahi jal sakti, waise hi insaan bina adhyatmik jeevan ke nahi jee sakta.', english: 'Just as a candle cannot burn without fire, men cannot live without a spiritual life.', emoji: '🕯️' },
    { id: 6, hinglish: 'Shanti andar se aati hai. Ise bahar mat dhoondo.', english: 'Peace comes from within. Do not seek it without.', emoji: '🧘' },
    { id: 7, hinglish: 'Aap apne vicharon se bante hain. Jaisa sochte hain, waisa ban jaate hain.', english: 'You become what you think. As you think, so you become.', emoji: '🧠' },
    { id: 8, hinglish: 'Har subah humara naya janam hota hai. Hum aaj kya karte hain, yahi sabse mayne rakhta hai.', english: 'Every morning we are born again. What we do today is what matters most.', emoji: '🌅' },
    { id: 9, hinglish: 'Bindu bindu se ghada bharta hai. Har prayas mayne rakhta hai.', english: 'A jug fills drop by drop. Every effort counts.', emoji: '💧' },
    { id: 10, hinglish: 'Aapke raaste par koi aur nahi chal sakta, aapko khud hi chalna hoga.', english: 'No one can walk your path for you, you must walk it yourself.', emoji: '👣' },
    { id: 11, hinglish: 'Swasthya sabse bada uphaar hai, santosh sabse bada dhan.', english: 'Health is the greatest gift, contentment the greatest wealth.', emoji: '🎁' },
    { id: 12, hinglish: 'Mann hi sab kuch hai. Jo aap sochte hain, woh aap bante hain.', english: 'The mind is everything. What you think you become.', emoji: '💖' },
    { id: 13, hinglish: 'Ek hazaar ladaiyan jeetne se behtar hai, khud par vijay prapt karna.', english: 'It is better to conquer yourself than to win a thousand battles.', emoji: '💪' },
    { id: 14, hinglish: 'Aapke uddhar ka raasta aapke apne andar hai.', english: 'The way to salvation is within yourself.', emoji: '✨' },
    { id: 15, hinglish: 'Krodh ko prem se jeeto, burai ko achhai se.', english: 'Conquer anger with love, evil with good.', emoji: '❤️' },
    { id: 16, hinglish: 'Jo guzar gaya, uspar dhyan mat do. Jo aane wala hai, uske sapne mat dekho. Vartmaan par dhyan do.', english: 'Do not dwell in the past, do not dream of the future. Concentrate the mind on the present moment.', emoji: '⏳' },
    { id: 17, hinglish: 'Sabse andheri raat agyaan hai.', english: 'The darkest night is ignorance.', emoji: '🌑' },
    { id: 18, hinglish: 'Aapka karya aapki pehchaan hai.', english: 'Your work is your identity.', emoji: '👷' },
    { id: 19, hinglish: 'Gyaan ka deep jalayein, agyaan ka andhera mitayein.', english: 'Light the lamp of knowledge, erase the darkness of ignorance.', emoji: '💡' },
    { id: 20, hinglish: 'Prem, karuna aur daya, yahi Buddha ka sandesh hai.', english: 'Love, compassion, and kindness, this is the message of Buddha.', emoji: '💕' },
    { id: 21, hinglish: 'Jeevan ek nadi ki tarah hai, hamesha behta rehta hai.', english: 'Life is like a river, always flowing.', emoji: '🌊' },
    { id: 22, hinglish: 'Sabhi jeevon par daya karein.', english: 'Have compassion for all living beings.', emoji: '🐾' },
    { id: 23, hinglish: 'Aapka mann hi aapka sabse achha dost aur sabse bada dushman hai.', english: 'Your mind is your best friend and your worst enemy.', emoji: '😇😈' },
    { id: 24, hinglish: 'Aapki khushi ka raasta, aapki soch mein hai.', english: 'The path to your happiness is in your thoughts.', emoji: '🛤️' },
    { id: 25, hinglish: 'Aapke krodh ke liye aapko dand nahi milega, aapka krodh hi aapka dand hai.', english: 'You will not be punished for your anger, your anger is the punishment.', emoji: '😠' },
    { id: 26, hinglish: 'Sacchai ke raaste par, sirf do galtiyan ho sakti hain: poora raasta na tay karna, aur shuruaat hi na karna.', english: 'On the path of truth, only two mistakes can be made: not going all the way, and not starting at all.', emoji: '🚶' },
    { id: 27, hinglish: 'Mann ko shant karo, aur aatma ko suno.', english: 'Calm the mind, and listen to the soul.', emoji: '🧘‍♀️' },
    { id: 28, hinglish: 'Duniya dukhon se bhari hai, par isse upar uthne ka raasta bhi hai.', english: 'The world is full of suffering, but there is also a way to rise above it.', emoji: ' ladder' },
    { id: 29, hinglish: 'Khushi baantne se badhti hai.', english: 'Happiness increases by sharing.', emoji: '😊' },
    { id: 30, 'hinglish': 'Ahimsa Paramo Dharma. Har jeev ka samman karein.', 'english': 'Non-violence is the highest dharma. Respect every living being.', emoji: '🕊️' },
    { id: 31, hinglish: 'Aapka sharir anmol hai. Iska samman karein.', english: 'Your body is precious. Respect it.', emoji: '💪' },
    { id: 32, hinglish: 'Ek shuddh mann hi, sabse bada mandir hai.', english: 'A pure mind is the greatest temple.', emoji: '🏛️' },
    { id: 33, hinglish: 'Samay ki keemat samjho, yeh laut kar nahi aata.', english: 'Understand the value of time, it does not return.', emoji: '⏳' },
    { id: 34, hinglish: 'Kisi bhi cheez par andhvishwas mat karo, chahe woh maine hi kyun na kaha ho.', english: 'Believe nothing, no matter where you read it, or who said it, unless it agrees with your own reason.', emoji: '🧐' },
    { id: 35, hinglish: 'Aapka har kadam, shanti ki or ho.', english: 'May your every step be towards peace.', emoji: '👣' },
    { id: 36, 'hinglish': 'Ichhayein hi dukh ka kaaran hain.', 'english': 'Desire is the root of all suffering.', emoji: '💔' },
    { id: 37, 'hinglish': 'Jo aap sochte hain, wahi aap aakarshit karte hain.', 'english': 'What you think, you attract.', emoji: '🧲' },
    { id: 38, 'hinglish': 'Ek muskaan, duniya badal sakti hai.', 'english': 'A smile can change the world.', emoji: '😄' },
    { id: 39, 'hinglish': 'Vartmaan mein jeena hi, asli jeena hai.', 'english': 'Living in the present is true living.', emoji: '🌟' },
    { id: 40, 'hinglish': 'Buddha Purnima, aatma-manthan ka din.', 'english': 'Buddha Purnima, a day for self-introspection.', emoji: '🧠' },
    { id: 41, 'hinglish': 'Prem ka maarg, hamesha shanti ki or le jaata hai.', 'english': 'The path of love always leads to peace.', emoji: '❤️' },
    { id: 42, 'hinglish': 'Jis tarah kamal keechad mein khilta hai, usi tarah gyaani is duniya mein.', 'english': 'As a lotus flower is born in water, grows in water and rises out of water to stand above it unsoiled, so I, born in the world, raised in the world, having overcome the world, live unsoiled by the world.', emoji: '🌸' },
    { id: 43, 'hinglish': 'Aapki soch hi aapki duniya banati hai.', 'english': 'Your thoughts create your world.', emoji: '🌍' },
    { id: 44, 'hinglish': 'Kshama karne se, aapka bojh halka hota hai.', 'english': 'Forgiving lightens your burden.', emoji: '😌' },
    { id: 45, 'hinglish': 'Aapki aatma, aapki sabse achhi guide hai.', 'english': 'Your soul is your best guide.', emoji: '🧭' },
    { id: 46, 'hinglish': 'Gyaan prapt karna, sabse badi jeet hai.', 'english': 'Attaining knowledge is the greatest victory.', emoji: '🏆' },
    { id: 47, 'hinglish': 'Har insaan mein, ek Buddha chhipa hai.', 'english': 'There is a hidden Buddha in every person.', emoji: '🧘‍♂️' },
    { id: 48, 'hinglish': 'Aapki saari pareshaniyon ka hal, aapke andar hi hai.', 'english': 'The solution to all your problems is within you.', emoji: '🔑' },
    { id: 49, 'hinglish': 'Is Buddha Purnima, mann ki shanti paayein.', 'english': 'This Buddha Purnima, attain peace of mind.', emoji: '💖' },
    { id: 50, 'hinglish': 'May the light of enlightenment guide your path.', 'english': 'May the light of enlightenment guide your path.', emoji: '✨' },
    { id: 51, hinglish: 'Aapka har shabd, soch samajh kar nikle.', english: 'May your every word come out thoughtfully.', emoji: '🗣️' },
    { id: 52, hinglish: 'Jeevan chota hai, ise prem se jiyo.', english: 'Life is short, live it with love.', emoji: '❤️' },
    { id: 53, hinglish: 'Aapki har saans, ek uphaar hai.', english: 'Your every breath is a gift.', emoji: '🎁' },
    { id: 54, hinglish: 'Nafrat se nafrat nahi, prem se nafrat khatam hoti hai.', english: 'Hatred is not ceased by hatred, but by love.', emoji: '💞' },
    { id: 55, 'hinglish': 'Aapki khushi aap par nirbhar karti hai.', 'english': 'Your happiness depends on you.', emoji: '😊' },
    { id: 56, 'hinglish': 'Sabse bada andhkaar agyaan hai.', 'english': 'The greatest darkness is ignorance.', emoji: '🌑' },
    { id: 57, 'hinglish': 'Khud par vijay paana, sabse badi vijay hai.', 'english': 'To conquer oneself is a greater task than conquering others.', emoji: '🎖️' },
    { id: 58, 'hinglish': 'Dhairya rakho, sab kuch sahi samay par hota hai.', 'english': 'Be patient, everything comes to you in the right moment.', emoji: '⏳' },
    { id: 59, 'hinglish': 'Apne mann ke maalik bano.', 'english': 'Be the master of your own mind.', emoji: '👑' },
    { id: 60, 'hinglish': 'Shabd talwar se bhi zyada gehra ghaav dete hain.', 'english': 'Words have the power to both destroy and heal.', emoji: '⚔️' },
    { id: 61, 'hinglish': 'Har cheez anitya hai. Kisi se moh mat rakho.', 'english': 'Everything is impermanent. Do not get attached to anything.', emoji: '🍂' },
    { id: 62, 'hinglish': 'Aapka sabse bada dushman aapke apne vichaar hain.', 'english': 'Your worst enemy cannot harm you as much as your own unguarded thoughts.', emoji: '💭' },
    { id: 63, 'hinglish': 'Sacchai ke raaste par chaliye, aap kabhi galat nahi honge.', 'english': 'Walk on the path of truth, you will never be wrong.', emoji: '🚶‍♀️' },
    { id: 64, 'hinglish': 'Karuna ka bhaav, sabse bada dharm hai.', 'english': 'The feeling of compassion is the greatest religion.', emoji: '💖' },
    { id: 65, 'hinglish': 'Aapka har din, ek nayi seekh hai.', 'english': 'Your every day is a new lesson.', emoji: '📚' },
    { id: 66, 'hinglish': 'Duniya ko badalne se pehle, khud ko badlo.', 'english': 'Before changing the world, change yourself.', emoji: '🔄' },
    { id: 67, 'hinglish': 'Aapki aatma, anant gyaan ka srot hai.', 'english': 'Your soul is a source of infinite knowledge.', emoji: '⛲' },
    { id: 68, 'hinglish': 'Mann ki shanti hi, asli daulat hai.', 'english': 'Peace of mind is the real wealth.', emoji: '💰' },
    { id: 69, 'hinglish': 'Aapke har karm ka phal aapko milta hai.', 'english': 'You get the fruit of your every action.', emoji: '🍎' },
    { id: 70, 'hinglish': 'Jeevan ka uddeshya, prem karna aur prem paana hai.', 'english': 'The purpose of life is to love and be loved.', emoji: '❤️' },
    { id: 71, 'hinglish': 'Aapki muskaan, aapki shakti hai.', 'english': 'Your smile is your strength.', emoji: '😄' },
    { id: 72, 'hinglish': 'Har jeev ke prati, samvedansheel raho.', 'english': 'Be sensitive to every living being.', emoji: '🐜' },
    { id: 73, 'hinglish': 'Aapka vartmaan, aapke ateet ke karmo ka parinaam hai.', 'english': 'Your present is the result of your past actions.', emoji: '🔁' },
    { id: 74, 'hinglish': 'Aapki khushi, kisi aur par nirbhar nahi honi chahiye.', 'english': 'Your happiness should not depend on anyone else.', emoji: '🧍' },
    { id: 75, 'hinglish': 'Mann ko jeetna, duniya ko jeetne ke barabar hai.', 'english': 'To conquer the mind is to conquer the world.', emoji: '🌍' },
    { id: 76, 'hinglish': 'Har pal ko, poori tarah se jiyo.', 'english': 'Live every moment to the fullest.', emoji: '💯' },
    { id: 77, 'hinglish': 'Aapka har vichaar, ek beej hai. Sakaratmak beej boyein.', 'english': 'Your every thought is a seed. Sow positive seeds.', emoji: '🌱' },
    { id: 78, 'hinglish': 'Aapki aatma, hamesha shant rahe.', 'english': 'May your soul always be at peace.', emoji: '🧘' },
    { id: 79, 'hinglish': 'Prem hi, har samasya ka samadhan hai.', 'english': 'Love is the solution to every problem.', emoji: '💡' },
    { id: 80, 'hinglish': 'Aapka har karya, prem se prerit ho.', 'english': 'May your every action be inspired by love.', emoji: '💖' },
    { id: 81, 'hinglish': 'Ek deepak se hazaaron deepak jalaye ja sakte hain, deepak ki roshni kam nahi hoti. Khushi baantne se badhti hai.', 'english': 'Thousands of candles can be lit from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.', emoji: '🕯️' },
    { id: 82, 'hinglish': 'Bhavishya ka koi rahasya nahi hai. Yeh aapke aaj ke karmo se banta hai.', 'english': 'The secret of the future is not a secret. It is created by your actions today.', emoji: '🛠️' },
    { id: 83, 'hinglish': 'Jisne apne aap ko samajh liya, usne poori duniya ko samajh liya.', 'english': 'He who has understood himself has understood the whole world.', emoji: '🌌' },
    { id: 84, 'hinglish': 'Aapki sabse badi galti, galti se na seekhna hai.', 'english': 'Your biggest mistake is not learning from your mistake.', emoji: '🤦' },
    { id: 85, 'hinglish': 'Aapki aatma, aapki sachi pehchaan hai.', 'english': 'Your soul is your true identity.', emoji: '👤' },
    { id: 86, 'hinglish': 'Shanti ki shuruaat, ek muskaan se hoti hai.', 'english': 'Peace begins with a smile.', emoji: '😊' },
    { id: 87, 'hinglish': 'Aapka har din, ek naya avsar hai.', 'english': 'Your every day is a new opportunity.', emoji: '🚪' },
    { id: 88, 'hinglish': 'Mann ki shanti ke bina, koi khushi sthayi nahi hai.', 'english': 'Without peace of mind, no happiness is permanent.', emoji: '😌' },
    { id: 89, 'hinglish': 'Aapka har pal, anmol hai. Ise vyarth na karein.', 'english': 'Your every moment is precious. Do not waste it.', emoji: '💎' },
    { id: 90, 'hinglish': 'Let your light shine. Happy Buddha Purnima.', 'english': 'Let your light shine. Happy Buddha Purnima.', emoji: '✨' },
    { id: 91, 'hinglish': 'Aapka jeevan, aapke vicharon ka pratibimb hai.', 'english': 'Your life is a reflection of your thoughts.', emoji: '🪞' },
    { id: 92, 'hinglish': 'Har jeev ko, khush rehne ka adhikar hai.', 'english': 'Every living being has the right to be happy.', emoji: '💖' },
    { id: 93, 'hinglish': 'Aapki karuna, aapki sabse badi shakti hai.', 'english': 'Your compassion is your greatest strength.', emoji: '💪' },
    { id: 94, 'hinglish': 'Aapka mann, ek upvan hai. Usmein acche vichaar ke phool lagayein.', 'english': 'Your mind is a garden. Plant flowers of good thoughts in it.', emoji: '🌸' },
    { id: 95, 'hinglish': 'Aapki har saans, ek chamatkar hai.', 'english': 'Your every breath is a miracle.', emoji: '🌬️' },
    { id: 96, 'hinglish': 'Satya ki khoj, sabse badi yatra hai.', 'english': 'The search for truth is the greatest journey.', emoji: '🗺️' },
    { id: 97, 'hinglish': 'Aapki aatma, hamesha aapko sahi raah dikhati hai.', 'english': 'Your soul always shows you the right path.', emoji: '🌟' },
    { id: 98, 'hinglish': 'Mann ko vash mein karna, sabse badi tapasya hai.', 'english': 'To control the mind is the greatest austerity.', emoji: '🧘‍♀️' },
    { id: 99, 'hinglish': 'Aapki har koshish, aapko aapke lakshya ke kareeb laati hai.', 'english': 'Your every effort brings you closer to your goal.', emoji: '🎯' },
    { id: 100, 'hinglish': 'Buddham Sharanam Gacchami. Shanti, shanti, shanti.', 'english': 'I go to the Buddha for refuge. Peace, peace, peace.', emoji: '🙏' }
  ]
};
