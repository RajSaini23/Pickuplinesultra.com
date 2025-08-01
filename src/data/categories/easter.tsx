
import type { CategoryData } from '../types';

const EasterIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12,2 C6.477,2 2,6.477 2,12 C2,18.627 6.477,22 12,22 C17.523,22 22,18.627 22,12 C22,6.477 17.523,2 12,2 Z" />
    <path d="M8,14 Q12,16 16,14" />
    <path d="M9,10 Q10,8 12,10 Q14,8 15,10" />
  </svg>
);


export const data: CategoryData = {
  category: {
    name: 'Easter',
    slug: 'easter',
    color: '#A78BFA',
    description: 'Resurrection of Jesus',
    icon: EasterIcon,
  },
  quotes: [
    { id: 1, hinglish: 'Easter, nayi ummeedon ka tyohaar. Happy Easter!', english: 'Easter, the festival of new hopes. Happy Easter!', emoji: '🐰' },
    { id: 2, hinglish: 'Yeshu phir se jee uthe, humein nayi zindagi dene. Alleluia!', english: 'Jesus has risen again, to give us new life. Alleluia!', emoji: '✝️' },
    { id: 3, hinglish: 'Yeh Easter, aapke jeevan mein dher saari khushiyan laaye.', english: 'May this Easter bring lots of happiness into your life.', emoji: '🌷' },
    { id: 4, hinglish: 'Nayi shuruaat ka jashn. Happy Easter!', english: 'A celebration of new beginnings. Happy Easter!', emoji: '🎉' },
    { id: 5, hinglish: 'Easter eggs ki tarah, aapki life bhi rangon se bhari ho.', english: 'Like Easter eggs, may your life also be full of colors.', emoji: '🥚' },
    { id: 6, hinglish: 'Hope, love, and joy. Yahi hai Easter ka sandesh.', english: 'Hope, love, and joy. This is the message of Easter.', emoji: '💖' },
    { id: 7, hinglish: 'Prabhu Yeshu ka aashirwad aap par hamesha bana rahe.', english: 'May the blessings of Lord Jesus always be upon you.', emoji: '🙏' },
    { id: 8, hinglish: 'Andhkaar par prakash ki jeet. Happy Easter!', english: 'The victory of light over darkness. Happy Easter!', emoji: '☀️' },
    { id: 9, hinglish: 'Yeh din humein yaad dilata hai ki har raat ke baad savera hota hai.', english: 'This day reminds us that there is a dawn after every night.', emoji: '🌅' },
    { id: 10, hinglish: 'Easter bunny aapke liye dher saari chocolates laaye.', english: 'May the Easter bunny bring you lots of chocolates.', emoji: '🍫' },
    { id: 11, hinglish: 'Aao milkar manayein, yeh paavan din.', english: 'Let\'s celebrate together, this holy day.', emoji: '👨‍👩‍👧‍👦' },
    { id: 12, hinglish: 'Easter, kshama aur naye jeevan ka prateek.', english: 'Easter, a symbol of forgiveness and new life.', emoji: '🕊️' },
    { id: 13, hinglish: 'Aapka har din, Easter ki tarah aasha se bhara ho.', english: 'May your every day be as full of hope as Easter.', emoji: '✨' },
    { id: 14, hinglish: 'Yeshu ke punarutthan ka jashn manayein.', english: 'Celebrate the resurrection of Jesus.', emoji: '🙌' },
    { id: 15, hinglish: 'Easter ki subah, ek nayi shuruaat.', english: 'Easter morning, a new beginning.', emoji: '🌞' },
    { id: 16, hinglish: 'Aapke jeevan mein, Easter ki shanti bani rahe.', english: 'May the peace of Easter remain in your life.', emoji: '☮️' },
    { id: 17, hinglish: 'Har Easter egg ek nayi ummeed hai.', english: 'Every Easter egg is a new hope.', emoji: '🥚' },
    { id: 18, hinglish: 'Parivaar ke saath Easter ka anand lein.', english: 'Enjoy Easter with your family.', emoji: '🤗' },
    { id: 19, hinglish: 'Yeh Easter, aapke liye anand aur samriddhi laaye.', english: 'May this Easter bring you joy and prosperity.', emoji: '💰' },
    { id: 20, hinglish: 'Wishing you a very Happy Easter!', english: 'Wishing you a very Happy Easter!', emoji: '🎉' },
    { id: 21, hinglish: 'Yeshu ke pyaar mein, humein nayi taaqat milti hai.', english: 'In the love of Jesus, we find new strength.', emoji: '💪' },
    { id: 22, hinglish: 'Easter ka har rang, aapki life ko rangeen banaye.', english: 'May every color of Easter make your life colorful.', emoji: '🌈' },
    { id: 23, hinglish: 'Aao, is Easter naye rishton ki shuruaat karein.', english: 'Come, let\'s start new relationships this Easter.', emoji: '🤝' },
    { id: 24, hinglish: 'Yeshu zinda hai, aur humara vishwas bhi.', english: 'Jesus is alive, and so is our faith.', emoji: '💖' },
    { id: 25, hinglish: 'Easter ki mithaas, aapke jeevan mein ghul jaaye.', english: 'May the sweetness of Easter dissolve in your life.', emoji: '🍬' },
    { id: 26, hinglish: 'Har andheri raat ke baad, ek roshan subah hoti hai.', english: 'After every dark night, there is a bright morning.', emoji: '🌟' },
    { id: 27, hinglish: 'Yeh Easter, aapke saare dukh mita de.', english: 'May this Easter erase all your sorrows.', emoji: '😌' },
    { id: 28, hinglish: 'Aapki har dua, is paavan din par qubool ho.', english: 'May your every prayer be answered on this holy day.', emoji: '🤲' },
    { id: 29, hinglish: 'Easter, renewal aur rebirth ka samay.', english: 'Easter, a time for renewal and rebirth.', emoji: '🌱' },
    { id: 30, 'hinglish': 'Easter ki shubhkamnayein, aapko aur aapke parivaar ko.', 'english': 'Easter wishes to you and your family.', emoji: '👨‍👩‍👧‍👦' },
    { id: 31, hinglish: 'Yeshu ne humare paapon ke liye apni jaan di.', english: 'Jesus gave his life for our sins.', emoji: '✝️' },
    { id: 32, hinglish: 'Easter humein sikhata hai ki vishwas mein kitni shakti hai.', english: 'Easter teaches us how much power there is in faith.', emoji: '✨' },
    { id: 33, hinglish: 'Aapka dil, Easter ki khushiyon se bhar jaaye.', english: 'May your heart be filled with the joys of Easter.', emoji: '❤️' },
    { id: 34, hinglish: 'Nayi ummeed, naye sapne. Happy Easter!', english: 'New hope, new dreams. Happy Easter!', emoji: '🌠' },
    { id: 35, hinglish: 'Easter ka jashn, pyaar aur ekta ka jashn.', english: 'The celebration of Easter is a celebration of love and unity.', emoji: '💞' },
    { id: 36, hinglish: 'Yeshu ke punarutthan ki khushi manayein.', english: 'Celebrate the joy of Jesus\'s resurrection.', emoji: '🥳' },
    { id: 37, hinglish: 'Yeh Easter, aapke jeevan mein chamatkar laaye.', english: 'May this Easter bring miracles into your life.', emoji: '🪄' },
    { id: 38, hinglish: 'Har Easter egg hunt, ek nayi khushi ki khoj hai.', english: 'Every Easter egg hunt is a search for new happiness.', emoji: '🔍' },
    { id: 39, hinglish: 'Aapka har pal, Easter jaisa anandmay ho.', english: 'May your every moment be as joyful as Easter.', emoji: '😄' },
    { id: 40, hinglish: 'He has risen! Happy Easter!', english: 'He has risen! Happy Easter!', emoji: '🙌' },
    { id: 41, hinglish: 'Easter, a reminder that we can begin again.', english: 'Easter, a reminder that we can begin again.', emoji: '🔄' },
    { id: 42, hinglish: 'Aapka vishwas, aapko har mushkil se paar le jaaye.', english: 'May your faith take you through every difficulty.', emoji: '💪' },
    { id: 43, hinglish: 'Easter ki roshni, aapke jeevan ko roshan kare.', english: 'May the light of Easter illuminate your life.', emoji: '💡' },
    { id: 44, hinglish: 'Yeshu ka pyaar, humare liye sabse bada uphaar hai.', english: 'The love of Jesus is the greatest gift for us.', emoji: '🎁' },
    { id: 45, hinglish: 'Is Easter, aao pyaar aur shanti ka sandesh failayein.', english: 'This Easter, let\'s spread the message of love and peace.', emoji: '🕊️' },
    { id: 46, hinglish: 'Aapki har ichha, is paavan din par poori ho.', english: 'May your every wish be fulfilled on this holy day.', emoji: '💯' },
    { id: 47, hinglish: 'Easter ka har geet, aapke dil ko chhu le.', english: 'May every song of Easter touch your heart.', emoji: '🎶' },
    { id: 48, hinglish: 'Nirasha mein bhi aasha ki kiran. Yahi hai Easter.', english: 'A ray of hope even in despair. This is Easter.', emoji: '☀️' },
    { id: 49, hinglish: 'Aapka jeevan, Easter ke phoolon ki tarah khilta rahe.', english: 'May your life bloom like the flowers of Easter.', emoji: '💐' },
    { id: 50, hinglish: 'A blessed and peaceful Easter to you.', english: 'A blessed and peaceful Easter to you.', emoji: '🙏' },
    { id: 51, hinglish: 'Easter ka anand, saal bhar aapke saath rahe.', english: 'May the joy of Easter be with you throughout the year.', emoji: '😊' },
    { id: 52, hinglish: 'Maut par jeet ka tyohaar. Happy Easter!', english: 'The festival of victory over death. Happy Easter!', emoji: '🏆' },
    { id: 53, hinglish: 'Aapke parivaar ko Easter ki dher saari badhai.', english: 'Many congratulations on Easter to your family.', emoji: '👨‍👩‍👧‍👦' },
    { id: 54, hinglish: 'Yeshu ka balidaan, humare liye ek prerna.', english: 'The sacrifice of Jesus is an inspiration for us.', emoji: '✝️' },
    { id: 55, hinglish: 'Easter, humein doosra mauka deta hai.', english: 'Easter gives us a second chance.', emoji: '✨' },
    { id: 56, hinglish: 'Aao, is Easter ko dil se manayein.', english: 'Come, let\'s celebrate this Easter from the heart.', emoji: '❤️' },
    { id: 57, hinglish: 'Easter ki yeh subah, aapke liye nayi possibilities laaye.', english: 'May this Easter morning bring new possibilities for you.', emoji: '🚪' },
    { id: 58, hinglish: 'Aapka har sapna, Easter ki tarah sach ho.', english: 'May your every dream come true like Easter.', emoji: '🌠' },
    { id: 59, hinglish: 'Easter ki aashayein, aapke jeevan ko sarthak banayein.', english: 'May the hopes of Easter make your life meaningful.', emoji: '💖' },
    { id: 60, hinglish: 'Yeshu ke naam par, sabko maaf karein.', english: 'In the name of Jesus, forgive everyone.', emoji: '🤝' },
    { id: 61, hinglish: 'Easter ka har moment, cherish karein.', english: 'Cherish every moment of Easter.', emoji: '📸' },
    { id: 62, hinglish: 'Aapka jeevan, prabhu ke aashirwad se phale-phoole.', english: 'May your life flourish with the blessings of the Lord.', emoji: '🌱' },
    { id: 63, hinglish: 'Easter bunny se kehna, thodi khushiyan mere liye bhi laaye.', english: 'Tell the Easter bunny to bring some happiness for me too.', emoji: '🐰' },
    { id: 64, hinglish: 'Yeh Easter, aapki zindagi ka best Easter ho.', english: 'May this Easter be the best Easter of your life.', emoji: '🌟' },
    { id: 65, hinglish: 'Aapke chehre par, Easter ki muskaan hamesha rahe.', english: 'May the smile of Easter always be on your face.', emoji: '😁' },
    { id: 66, hinglish: 'Har andhera, ek nayi subah ka intezaar karta hai.', english: 'Every darkness waits for a new morning.', emoji: '⏳' },
    { id: 67, hinglish: 'Is Easter, aao naye rishte banayein.', english: 'This Easter, let\'s make new relationships.', emoji: '💞' },
    { id: 68, hinglish: 'Yeshu ka punarutthan, humare vishwas ko mazboot karta hai.', english: 'The resurrection of Jesus strengthens our faith.', emoji: '💪' },
    { id: 69, hinglish: 'Easter ki shubh kamnayein, aapke sabhi priyajanon ko.', english: 'Best wishes for Easter to all your loved ones.', emoji: '💌' },
    { id: 70, hinglish: 'A new beginning, a new hope. Happy Easter!', english: 'A new beginning, a new hope. Happy Easter!', emoji: '🎉' },
    { id: 71, hinglish: 'Easter ka jaadu, aapke jeevan ko jaadumayi bana de.', english: 'May the magic of Easter make your life magical.', emoji: '🪄' },
    { id: 72, hinglish: 'Har pal, Prabhu ka shukriya ada karein.', english: 'Thank the Lord every moment.', emoji: '🙏' },
    { id: 73, hinglish: 'Aapka dil, Easter ke geeton se goonj uthe.', english: 'May your heart resonate with the songs of Easter.', emoji: '🎶' },
    { id: 74, hinglish: 'Yeh Easter, aapke liye aashirwad laaye.', english: 'May this Easter bring you blessings.', emoji: '💖' },
    { id: 75, hinglish: 'Yeshu ne humein sikhaya hai, pyaar hi sabse bada dharm hai.', english: 'Jesus has taught us that love is the greatest religion.', emoji: '❤️' },
    { id: 76, hinglish: 'Aapki har mushkil, is paavan din par aasan ho jaaye.', english: 'May your every difficulty become easy on this holy day.', emoji: '😌' },
    { id: 77, hinglish: 'Easter, parivaar ke saath jashn manane ka din.', english: 'Easter, a day to celebrate with family.', emoji: '👨‍👩‍👧‍👦' },
    { id: 78, hinglish: 'Aapka har karya, prabhu ke naam se safal ho.', english: 'May your every work be successful in the name of the Lord.', emoji: '✅' },
    { id: 79, hinglish: 'Easter ki yeh bahaar, aapke jeevan mein hamesha rahe.', english: 'May this spring of Easter always remain in your life.', emoji: '🌸' },
    { id: 80, hinglish: 'Aao, is Easter ek doosre ke liye prarthana karein.', english: 'Come, let\'s pray for each other this Easter.', emoji: '🤲' },
    { id: 81, hinglish: 'Yeshu ki sharan mein, har dar mit jaata hai.', english: 'In the shelter of Jesus, every fear vanishes.', emoji: '🛡️' },
    { id: 82, hinglish: 'Aapka mann, Easter ki tarah pavitra ho.', english: 'May your mind be as pure as Easter.', emoji: '🕊️' },
    { id: 83, hinglish: 'Easter ka har rang, aapki zindagi mein khushi laaye.', english: 'May every color of Easter bring happiness to your life.', emoji: '🎨' },
    { id: 84, hinglish: 'Har din, ek nayi shuruaat hai. Happy Easter!', english: 'Every day is a new beginning. Happy Easter!', emoji: '🌅' },
    { id: 85, hinglish: 'Aapka swasthya, prabhu ke aashirwad se achha rahe.', english: 'May your health be good with the blessings of the Lord.', emoji: '🌿' },
    { id: 86, hinglish: 'Easter, humein yaad dilata hai ki ummeed kabhi nahi marta.', english: 'Easter reminds us that hope never dies.', emoji: '✨' },
    { id: 87, hinglish: 'Aapka har vichaar, prabhu ke aadarshon se prerit ho.', english: 'May your every thought be inspired by the ideals of the Lord.', emoji: '💭' },
    { id: 88, hinglish: 'Yeh Easter, aapke liye anant anand laaye.', english: 'May this Easter bring you infinite joy.', emoji: '😄' },
    { id: 89, hinglish: 'Aapki har yatra, Prabhu ke saath mangalmay ho.', english: 'May your every journey be auspicious with the Lord.', emoji: '✈️' },
    { id: 90, 'hinglish': 'Let the joy of resurrection fill your heart. Happy Easter!', 'english': 'Let the joy of resurrection fill your heart. Happy Easter!', emoji: '💖' },
    { id: 91, hinglish: 'Aapka ghar, prabhu ke prem se roshan rahe.', english: 'May your home be illuminated with the love of the Lord.', emoji: '🏠' },
    { id: 92, hinglish: 'Easter, kshama ka sabse bada tyohaar.', english: 'Easter, the biggest festival of forgiveness.', emoji: '🤝' },
    { id: 93, hinglish: 'Is paavan avsar par, aapko dher saari shubhkamnayein.', english: 'On this holy occasion, many best wishes to you.', emoji: '💌' },
    { id: 94, hinglish: 'Aapki har ichha, Prabhu poori karein.', english: 'May the Lord fulfill your every wish.', emoji: '🌠' },
    { id: 95, hinglish: 'Easter, bhakti aur shraddha ka anupam sangam.', english: 'Easter, a unique confluence of devotion and faith.', emoji: '💞' },
    { id: 96, hinglish: 'Aapka har din, Prabhu ke aashirwad se shuru ho.', english: 'May your every day start with the blessings of the Lord.', emoji: '☀️' },
    { id: 97, hinglish: 'Yeshu ke vachano par chalein, aur jeevan safal banayein.', english: 'Follow the words of Jesus, and make your life successful.', emoji: '💯' },
    { id: 98, hinglish: 'Easter ka yeh din, aapke liye yaadgaar ho.', english: 'May this day of Easter be memorable for you.', emoji: '📸' },
    { id: 99, hinglish: 'Prabhu ki kripa, aap par sadaiv bani rahe.', english: 'May the grace of the Lord always be upon you.', emoji: '🙏' },
    { id: 100, 'hinglish': 'Rejoice and be glad, for He has risen. Happy Easter!', 'english': 'Rejoice and be glad, for He has risen. Happy Easter!', emoji: '✝️' }
  ]
};
