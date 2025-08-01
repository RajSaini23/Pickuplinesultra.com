
import type { CategoryData } from '../types';

const RingIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m4.93 19.07 1.41-1.41" />
    <path d="m17.66 6.34 1.41-1.41" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);


export const data: CategoryData = {
  category: {
    name: 'Teej',
    slug: 'teej',
    color: '#10B981',
    description: "Women's festival for marital bliss",
    icon: RingIcon,
  },
  quotes: [
    { id: 1, hinglish: 'Mehendi ka rang gehra, sajan ka pyaar usse bhi gehra. Happy Teej!', english: 'The color of henna is deep, my beloved\'s love is even deeper. Happy Teej!', emoji: '💃' },
    { id: 2, hinglish: 'Sawan ki boondein, jhule ki masti, aur aapka saath. Perfect Teej!', english: 'Raindrops of Sawan, fun on the swing, and your company. Perfect Teej!', emoji: '🌧️' },
    { id: 3, hinglish: 'Teej ka vrat rakha hai maine, bas ek hi kaamna ke saath, har janam mein aap hi milein.', english: 'I have kept the Teej fast with just one wish, that I get you in every life.', emoji: '🙏' },
    { id: 4, hinglish: 'Aaya re aaya Teej ka tyohaar, sang mein laaya khushiyan aur dher saara pyaar.', english: 'The festival of Teej has come, bringing happiness and lots of love.', emoji: '🎉' },
    { id: 5, hinglish: 'Shiv-Parvati jaisi jodi ho humari. Teej ki shubhkamnayein!', english: 'May our pair be like Shiva-Parvati. Best wishes for Teej!', emoji: '💞' },
    { id: 6, hinglish: 'Haathon mein mehendi, maang mein sindoor, aapke naam ka. Happy Hariyali Teej!', english: 'Henna in my hands, vermilion in my parting, in your name. Happy Hariyali Teej!', emoji: '❤️' },
    { id: 7, hinglish: 'Jhule ki peeng, aur saheliyon ka sang. Teej ka anand hi kuch aur hai.', english: 'The swing\'s flight, and the company of friends. The joy of Teej is something else.', emoji: '👩‍❤️‍👩' },
    { id: 8, hinglish: 'Yeh Teej, hamare rishte mein aur bhi mithaas laaye.', english: 'May this Teej bring even more sweetness to our relationship.', emoji: '🍬' },
    { id: 9, hinglish: 'Aapki lambi umar ki kaamna ke saath, yeh vrat aapko samarpit.', english: 'With the wish for your long life, this fast is dedicated to you.', emoji: '💖' },
    { id: 10, hinglish: 'Sawan ke geet, Teej ki bahaar. Aapko mubarak ho yeh tyohaar.', english: 'The songs of Sawan, the bloom of Teej. Congratulations to you on this festival.', emoji: '🎶' },
    { id: 11, hinglish: 'Leheriya ki shaan, Teej ki pehchaan.', english: 'The grandeur of Leheriya, the identity of Teej.', emoji: '🌈' },
    { id: 12, hinglish: 'Maa Parvati ka aashirwad aap par hamesha bana rahe.', english: 'May the blessings of Mother Parvati always be upon you.', emoji: '🙌' },
    { id: 13, hinglish: 'Is Teej, aapki har manokamna poori ho.', english: 'This Teej, may all your wishes be fulfilled.', emoji: '✨' },
    { id: 14, hinglish: 'Chand ki pooja, pati ka pyaar. Yahi hai Teej ka saar.', english: 'Worship of the moon, love of the husband. This is the essence of Teej.', emoji: '🌙' },
    { id: 15, hinglish: 'Aapke pyaar ka rang, mehendi se bhi gehra chadhe.', english: 'May the color of your love be deeper than henna.', emoji: '❤️‍🔥' },
    { id: 16, hinglish: 'Teej ka har pal, aapke liye khaas ho.', english: 'May every moment of Teej be special for you.', emoji: '🌟' },
    { id: 17, hinglish: 'Vrat, shringaar aur pyaar... Teej ka tyohaar.', english: 'Fast, adornment, and love... the festival of Teej.', emoji: '💅' },
    { id: 18, hinglish: 'Har saal, yeh din hamare pyaar ko aur mazboot banaye.', english: 'Every year, may this day make our love even stronger.', emoji: '🔗' },
    { id: 19, hinglish: 'Aapke saath, har din Teej jaisa hai.', english: 'With you, every day is like Teej.', emoji: '🥰' },
    { id: 20, hinglish: 'Happy Teej! May your marriage be blessed with happiness.', english: 'Happy Teej! May your marriage be blessed with happiness.', emoji: '💍' },
    { id: 21, hinglish: 'Ghevar ki mithaas, aapke jeevan mein bhi ho.', english: 'May you also have the sweetness of Ghevar in your life.', emoji: '😋' },
    { id: 22, hinglish: 'Hara-bhara sawan, rang-birangi Teej.', english: 'Green Sawan, colorful Teej.', emoji: '💚' },
    { id: 23, hinglish: 'Aapki har dua, is paavan din par qubool ho.', english: 'May your every prayer be answered on this holy day.', emoji: '🤲' },
    { id: 24, hinglish: 'Teej, patni ke prem aur tyag ka prateek.', english: 'Teej, a symbol of a wife\'s love and sacrifice.', emoji: '💖' },
    { id: 25, hinglish: 'Aapka aur mera saath, janmo janmo ka ho.', english: 'May our companionship be for many lifetimes.', emoji: '♾️' },
    { id: 26, hinglish: 'Sawan ki rimjhim, aur aapka pyaar. Teej Mubarak!', english: 'The drizzle of Sawan, and your love. Happy Teej!', emoji: '🌦️' },
    { id: 27, hinglish: 'Yeh tyohaar, hamare rishte ki khoobsurti ka jashn hai.', english: 'This festival is a celebration of the beauty of our relationship.', emoji: '🎉' },
    { id: 28, hinglish: 'Aapki salamati, meri sabse badi mannat.', english: 'Your well-being is my biggest wish.', emoji: '🙏' },
    { id: 29, hinglish: 'Teej ka har geet, aapke naam.', english: 'Every song of Teej is in your name.', emoji: '🎤' },
    { id: 30, hinglish: 'Is Teej, aao ek doosre se hamesha saath rehne ka wada karein.', english: 'This Teej, let\'s promise to always be with each other.', emoji: '🤞' },
    { id: 31, 'hinglish': 'Mehendi rache haathon mein, aapka naam likha hai.', 'english': 'In my henna-adorned hands, your name is written.', emoji: '✍️' },
    { id: 32, 'hinglish': 'Teej ka vrat, atoot vishwas ka prateek.', 'english': 'The fast of Teej is a symbol of unbreakable faith.', emoji: '💯' },
    { id: 33, 'hinglish': 'Aapki muskaan, meri Teej ko poora karti hai.', 'english': 'Your smile completes my Teej.', emoji: '😊' },
    { id: 34, 'hinglish': 'Yeh laal joda, aapke pyaar ka rang.', 'english': 'This red attire, the color of your love.', emoji: '❤️' },
    { id: 35, 'hinglish': 'Sawan ke jhule, aur aapke sang. Aur kya chahiye?', 'english': 'The swings of Sawan, and your company. What else is needed?', emoji: 'Swing' },
    { id: 36, 'hinglish': 'Har Teej, hamare pyaar ki nayi kahani likhti hai.', 'english': 'Every Teej writes a new story of our love.', emoji: '📖' },
    { id: 37, 'hinglish': 'Aapke liye yeh nirjala vrat, mere pyaar ki nishani.', 'english': 'This waterless fast for you is a sign of my love.', emoji: '💧' },
    { id: 38, 'hinglish': 'Teej, suhaag ki lambi umar ki kaamna.', 'english': 'Teej, a wish for the long life of the husband.', emoji: '⏳' },
    { id: 39, 'hinglish': 'Aapka pyaar, meri sabse badi daulat.', 'english': 'Your love is my biggest wealth.', emoji: '💰' },
    { id: 40, 'hinglish': 'Chand ko dekh kar vrat toda, par mera chand toh aap ho.', 'english': 'I broke the fast after seeing the moon, but my moon is you.', emoji: '😍' },
    { id: 41, 'hinglish': 'Maa Gauri ki tarah, mujhe bhi aap jaisa var mila.', 'english': 'Like Goddess Gauri, I also got a husband like you.', emoji: '😇' },
    { id: 42, 'hinglish': 'Yeh Teej, hamare rishte mein samriddhi laaye.', 'english': 'May this Teej bring prosperity to our relationship.', emoji: '🍀' },
    { id: 43, 'hinglish': 'Aapki har khushi mein, meri khushi hai.', 'english': 'My happiness is in your every happiness.', emoji: '😄' },
    { id: 44, 'hinglish': 'Teej ka har rang, aapki zindagi mein khushiyan bhare.', 'english': 'May every color of Teej fill your life with happiness.', emoji: '🎨' },
    { id: 45, 'hinglish': 'Aapka saath, meri har mushkil ka hal hai.', 'english': 'Your company is the solution to my every problem.', emoji: '💡' },
    { id: 46, 'hinglish': 'Is paavan din par, aapko dher saara pyaar.', 'english': 'On this holy day, lots of love to you.', emoji: '💌' },
    { id: 47, 'hinglish': 'Teej ka utsav, pyaar aur samarpan ka utsav.', 'english': 'The festival of Teej is a festival of love and dedication.', emoji: '💖' },
    { id: 48, 'hinglish': 'Aapki har baat, mere dil ko chhu jaati hai.', 'english': 'Your every word touches my heart.', emoji: '💘' },
    { id: 49, 'hinglish': 'Mera har shringaar, aapke liye.', 'english': 'My every adornment is for you.', emoji: '💍' },
    { id: 50, 'hinglish': 'Wishing you a very Happy Teej, my love.', 'english': 'Wishing you a very Happy Teej, my love.', emoji: '❤️' },
    { id: 51, 'hinglish': 'Teej ki pooja, hamare rishte ki mazbooti.', 'english': 'The worship of Teej is the strength of our relationship.', emoji: '💪' },
    { id: 52, 'hinglish': 'Barish ki boondein, pyaar ka sandesh laayi hain.', 'english': 'The raindrops have brought a message of love.', emoji: '🌧️' },
    { id: 53, 'hinglish': 'Aapka pyaar, meri zindagi ka sabse bada uphaar.', 'english': 'Your love is the biggest gift of my life.', emoji: '🎁' },
    { id: 54, 'hinglish': 'Har Teej, yeh ehsaas dilati hai ki main kitni lucky hoon.', 'english': 'Every Teej makes me realize how lucky I am.', emoji: '🍀' },
    { id: 55, 'hinglish': 'Sawan ki hariyali, aur aapke pyaar ki laali.', 'english': 'The greenery of Sawan, and the redness of your love.', emoji: '💚' },
    { id: 56, 'hinglish': 'Aapka chehra dekhe bina, vrat adhoora hai.', 'english': 'Without seeing your face, the fast is incomplete.', emoji: '🥰' },
    { id: 57, 'hinglish': 'Teej ka har pal, pyaar se bhara ho.', 'english': 'May every moment of Teej be filled with love.', emoji: '💞' },
    { id: 58, 'hinglish': 'Aapki har saans se, meri saans judi hai.', 'english': 'My breath is connected to your every breath.', emoji: '🔗' },
    { id: 59, 'hinglish': 'Yeh Teej, hamare pyaar ko ek nayi oonchai de.', 'english': 'May this Teej give our love a new height.', emoji: '🚀' },
    { id: 60, 'hinglish': 'Aapke liye, har vrat qubool hai.', 'english': 'For you, every fast is acceptable.', emoji: '😌' },
    { id: 61, 'hinglish': 'Mehendi ka design, hamare pyaar ki kahani.', 'english': 'The design of the henna is the story of our love.', emoji: '🎨' },
    { id: 62, 'hinglish': 'Is Teej, aao pyaar ke geet gaayein.', 'english': 'This Teej, let\'s sing songs of love.', emoji: '🎶' },
    { id: 63, 'hinglish': 'Aapki har muskurahat, mere vrat ka phal hai.', 'english': 'Your every smile is the fruit of my fast.', emoji: '😊' },
    { id: 64, 'hinglish': 'Teej, nari shakti aur prem ka prateek.', 'english': 'Teej, a symbol of woman power and love.', emoji: '♀️' },
    { id: 65, 'hinglish': 'Aapka saath, meri har dua ka asar.', 'english': 'Your company is the effect of my every prayer.', emoji: '🤲' },
    { id: 66, 'hinglish': 'Yeh pavitra bandhan, hamesha bana rahe.', 'english': 'May this sacred bond always remain.', emoji: '💖' },
    { id: 67, 'hinglish': 'Teej ki katha, hamare pyaar ki gatha.', 'english': 'The story of Teej is the saga of our love.', emoji: '📜' },
    { id: 68, 'hinglish': 'Aapki har jeet, meri jeet hai.', 'english': 'Your every victory is my victory.', emoji: '🏆' },
    { id: 69, 'hinglish': 'Is Teej, aapko duniya ki saari khushiyan milein.', 'english': 'This Teej, may you get all the happiness in the world.', emoji: '🌍' },
    { id: 70, 'hinglish': 'Mera chand, hamesha salamat rahe.', 'english': 'May my moon always be safe.', emoji: '🌙' },
    { id: 71, 'hinglish': 'Teej ka jashn, saheliyon ke sang.', 'english': 'The celebration of Teej, with friends.', emoji: '👭' },
    { id: 72, 'hinglish': 'Aapki har baat, mere liye amrit hai.', 'english': 'Your every word is nectar for me.', emoji: '🍯' },
    { id: 73, 'hinglish': 'Yeh Teej, hamare pyaar ko aur bhi pakka kar de.', 'english': 'May this Teej make our love even stronger.', emoji: '💪' },
    { id: 74, 'hinglish': 'Aapke naam ki mehendi, hamesha gehri chadhe.', 'english': 'May the henna of your name always be dark.', emoji: '❤️‍🔥' },
    { id: 75, 'hinglish': 'Teej, vishwas aur samarpan ka tyohaar.', 'english': 'Teej, a festival of trust and dedication.', emoji: '💯' },
    { id: 76, 'hinglish': 'Aapki har khwahish, meri prarthana.', 'english': 'Your every wish is my prayer.', emoji: '🙏' },
    { id: 77, 'hinglish': 'Sawan ki bahaar, Teej ka tyohaar, aur aapka pyaar.', 'english': 'The bloom of Sawan, the festival of Teej, and your love.', emoji: '💕' },
    { id: 78, 'hinglish': 'Yeh din, hamare pyaar ki taaqat ko darshata hai.', 'english': 'This day shows the strength of our love.', emoji: '💪' },
    { id: 79, 'hinglish': 'Aapka hona hi, mere liye Teej hai.', 'english': 'Your presence itself is Teej for me.', emoji: '🥰' },
    { id: 80, 'hinglish': 'Maa Parvati jaisi shraddha, aapke liye.', 'english': 'Devotion like Mother Parvati, for you.', emoji: '💖' },
    { id: 81, 'hinglish': 'Teej ki laal chunari, hamare pyaar ki nishani.', 'english': 'The red scarf of Teej is a sign of our love.', emoji: '❤️' },
    { id: 82, 'hinglish': 'Aapki har saans mein, meri umar judti jaaye.', 'english': 'May my age be added to your every breath.', emoji: '⏳' },
    { id: 83, 'hinglish': 'Yeh Teej, hamare jeevan mein nayi umang laaye.', 'english': 'May this Teej bring new zeal into our life.', emoji: '🌟' },
    { id: 84, 'hinglish': 'Aapka pyaar, meri sabse badi kamai.', 'english': 'Your love is my biggest earning.', emoji: '💸' },
    { id: 85, 'hinglish': 'Har Teej, main aapko hi maangti hoon.', 'english': 'Every Teej, I only ask for you.', emoji: '🙌' },
    { id: 86, 'hinglish': 'Aapki har muskurahat ke liye, yeh vrat bhi qubool.', 'english': 'For your every smile, even this fast is acceptable.', emoji: '😁' },
    { id: 87, 'hinglish': 'Teej ka har rang, hamare pyaar ka rang.', 'english': 'Every color of Teej is the color of our love.', emoji: '🎨' },
    { id: 88, 'hinglish': 'Aapke bina, har tyohaar adhoora hai.', 'english': 'Without you, every festival is incomplete.', emoji: '😔' },
    { id: 89, 'hinglish': 'Yeh pavitra din, hamare rishte ko aur bhi gehra banaye.', 'english': 'May this holy day make our relationship even deeper.', emoji: '🌊' },
    { id: 90, 'hinglish': 'May this Teej strengthen the bond of love between us.', 'english': 'May this Teej strengthen the bond of love between us.', emoji: '🔗' },
    { id: 91, 'hinglish': 'Mera saubhagya, aapse hai.', 'english': 'My good fortune is from you.', emoji: '🍀' },
    { id: 92, 'hinglish': 'Teej ka har riwaaz, hamare pyaar ko aur badhaye.', 'english': 'May every custom of Teej increase our love.', emoji: '💞' },
    { id: 93, 'hinglish': 'Aapki har safalta, meri khushi ka kaaran hai.', 'english': 'Your every success is the reason for my happiness.', emoji: '🏆' },
    { id: 94, 'hinglish': 'Yeh Teej, hamare pyaar ki amar kahani ka ek panna.', 'english': 'This Teej is a page from the immortal story of our love.', emoji: '📜' },
    { id: 95, 'hinglish': 'Aapka saath, meri har prarthana ka uttar hai.', 'english': 'Your company is the answer to my every prayer.', emoji: '🙏' },
    { id: 96, 'hinglish': 'Mera har pal, aapke pyaar se roshan hai.', 'english': 'My every moment is illuminated by your love.', emoji: '💡' },
    { id: 97, 'hinglish': 'Teej ka yeh din, sirf aapke naam.', 'english': 'This day of Teej is only in your name.', emoji: '❤️' },
    { id: 98, 'hinglish': 'Aapka pyaar, meri zindagi ka sabse meetha geet.', 'english': 'Your love is the sweetest song of my life.', emoji: '🎶' },
    { id: 99, 'hinglish': 'Har Teej, hum ek doosre ke aur kareeb aate hain.', 'english': 'Every Teej, we come closer to each other.', emoji: '🫂' },
    { id: 100, 'hinglish': 'Happy Teej to the king of my heart.', 'english': 'Happy Teej to the king of my heart.', emoji: '👑' }
  ]
};
