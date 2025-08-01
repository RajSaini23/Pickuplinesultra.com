
import type { Category, Quote, CategoryData } from './types';
import { data as romanticData } from './categories/romantic';
import { data as cuteData } from './categories/cute';
import { data as crushData } from './categories/crush';
import { data as proposalData } from './categories/proposal';
import { data as dreamyData } from './categories/dreamy';
import { data as poeticData } from './categories/poetic';
import { data as missData } from './categories/miss';
import { data as breakupData } from './categories/breakup';
import { data as toxicData } from './categories/toxic';
import { data as cleverData } from './categories/clever';
import { data as comedyData } from './categories/comedy';
import { data as birthdayData } from './categories/birthday';
import { data as flirtyData } from './categories/flirty';
import { data as boldData } from './categories/bold';
import { data as seductiveData } from './categories/seductive';
import { data as tinderReadyData } from './categories/tinder-ready';
import { data as apologyData } from './categories/apology';
import { data as commitmentData } from './categories/commitment';
import { data as longDistanceData } from './categories/long-distance';
import { data as jealousyData } from './categories/jealousy';
import { data as selfLoveData } from './categories/self-love';
import { data as sarcasmData } from './categories/sarcasm';
import { data as wordplayData } from './categories/wordplay';
import { data as worstLinesData } from './categories/worst-lines';
import { data as memeData } from './categories/meme';
import { data as darkHumorData } from './categories/dark-humor';
import { data as movieLinesData } from './categories/movie-lines';
import { data as songLyricsData } from './categories/song-lyrics';
import { data as anniversaryData } from './categories/anniversary';
import { data as valentinesDayData } from './categories/valentines-day';
import { data as goodMorningNightData } from './categories/good-morning-night';
// Hindu Festivals
import { data as diwaliData } from './categories/diwali';
import { data as holiData } from './categories/holi';
import { data as dussehraData } from './categories/dussehra';
import { data as navratriData } from './categories/navratri';
import { data as durgaPujaData } from './categories/durga-puja';
import { data as ramNavamiData } from './categories/ram-navami';
import { data as janmashtamiData } from './categories/janmashtami';
import { data as ganeshChaturthiData } from './categories/ganesh-chaturthi';
import { data as makarSankrantiData } from './categories/makar-sankranti';
import { data as basantPanchamiData } from './categories/basant-panchami';
import { data as mahashivratriData } from './categories/mahashivratri';
import { data as gudiPadwaData } from './categories/gudi-padwa';
import { data as ugadiData } from './categories/ugadi';
import { data as vishuData } from './categories/vishu';
import { data as rathYatraData } from './categories/rath-yatra';
import { data as kumbhMelaData } from './categories/kumbh-mela';
import { data as akshayaTritiyaData } from './categories/akshaya-tritiya';
import { data as karvaChauthData } from './categories/karva-chauth';
import { data as rakshaBandhanData } from './categories/raksha-bandhan';
import { data as bhagwatiJatraData } from './categories/bhagwati-jatra';
import { data as chhathPujaData } from './categories/chhath-puja';
import { data as bihuData } from './categories/bihu';
import { data as teejData } from './categories/teej.tsx';
import { data as govardhanPujaData } from './categories/govardhan-puja';
import { data as bhaiDoojData } from './categories/bhai-dooj';
import { data as hanumanJayantiData } from './categories/hanuman-jayanti';
import { data as skandaSashtiData } from './categories/skanda-sashti';
import { data as tulsiVivahData } from './categories/tulsi-vivah';

// Muslim Festivals
import { data as eidUlFitrData } from './categories/eid-ul-fitr';
import { data as eidUlAdhaData } from './categories/eid-ul-adha';
import { data as ramadanData } from './categories/ramadan';
import { data as shabEBaratData } from './categories/shab-e-barat';
import { data as muharramData } from './categories/muharram';
import { data as miladUnNabiData } from './categories/milad-un-nabi';

// Christian Festivals
import { data as christmasData } from './categories/christmas';
import { data as goodFridayData } from './categories/good-friday';
import { data as palmSundayData } from './categories/palm-sunday';
import { data as newYearData } from './categories/new-year';
import { data as easterData } from './categories/easter';


// Buddhist Festivals
import { data as buddhaPurnimaData } from './categories/buddha-purnima.tsx';
import { data as losarData } from './categories/losar';
import { data as kathinaData } from './categories/kathina';
import { data as asalhaPujaData } from './categories/asalha-puja';

// Sikh Festivals
import { data as guruNanakJayantiData } from './categories/guru-nanak-jayanti';
import { data as vaisakhiData } from './categories/vaisakhi';
import { data as guruGobindSinghJayantiData } from './categories/guru-gobind-singh-jayanti';
import { data as martyrdomOfGuruArjanDevJiData } from './categories/martyrdom-of-guru-arjan-dev-ji';
import { data as holaMohallaData } from './categories/hola-mohalla';

// Jain Festivals
import { data as mahavirJayantiData } from './categories/mahavir-jayanti';
import { data as paryushanaData } from './categories/paryushana';
import { data as kshamavaniData } from './categories/kshamavani';

// Parsi Festivals
import { data as navrozData } from './categories/navroz';
import { data as khordadSalData } from './categories/khordad-sal';
import { data as patetiData } from './categories/pateti';

// Regional & Harvest Festivals
import { data as lohriData } from './categories/lohri';
import { data as pongalData } from './categories/pongal';
import { data as onamData } from './categories/onam';

// National & Cultural Festivals
import { data as republicDayData } from './categories/republic-day';
import { data as independenceDayData } from './categories/independence-day';
import { data as gandhiJayantiData } from './categories/gandhi-jayanti';
import { data as childrensDayData } from './categories/childrens-day';
import { data as teachersDayData } from './categories/teachers-day';
import { data as hindiDiwasData } from './categories/hindi-diwas';
import { data as engineersDayData } from './categories/engineers-day';
import { data as armedForcesDayData } from './categories/armed-forces-day';


const allRawData: CategoryData[] = [
  // Existing Categories
  romanticData,
  cuteData,
  crushData,
  proposalData,
  dreamyData,
  poeticData,
  missData,
  breakupData,
  toxicData,
  cleverData,
  comedyData,
  birthdayData,
  flirtyData,
  boldData,
  seductiveData,
  tinderReadyData,
  apologyData,
  commitmentData,
  longDistanceData,
  jealousyData,
  selfLoveData,
  sarcasmData,
  wordplayData,
  worstLinesData,
  memeData,
  darkHumorData,
  movieLinesData,
  songLyricsData,
  anniversaryData,
  valentinesDayData,
  goodMorningNightData,

  // New Festival Categories
  diwaliData,
  holiData,
  dussehraData,
  navratriData,
  durgaPujaData,
  ramNavamiData,
  janmashtamiData,
  ganeshChaturthiData,
  makarSankrantiData,
  basantPanchamiData,
  mahashivratriData,
  gudiPadwaData,
  ugadiData,
  vishuData,
  rathYatraData,
  kumbhMelaData,
  akshayaTritiyaData,
  karvaChauthData,
  rakshaBandhanData,
  bhagwatiJatraData,
  chhathPujaData,
  bihuData,
  teejData,
  govardhanPujaData,
  bhaiDoojData,
  hanumanJayantiData,
  skandaSashtiData,
  tulsiVivahData,
  eidUlFitrData,
  eidUlAdhaData,
  ramadanData,
  shabEBaratData,
  muharramData,
  miladUnNabiData,
  christmasData,
  goodFridayData,
  palmSundayData,
  newYearData,
  easterData,
  buddhaPurnimaData,
  losarData,
  kathinaData,
  asalhaPujaData,
  guruNanakJayantiData,
  vaisakhiData,
  guruGobindSinghJayantiData,
  martyrdomOfGuruArjanDevJiData,
  holaMohallaData,
  mahavirJayantiData,
  paryushanaData,
  kshamavaniData,
  navrozData,
  khordadSalData,
  patetiData,
  lohriData,
  pongalData,
  onamData,
  republicDayData,
  independenceDayData,
  gandhiJayantiData,
  childrensDayData,
  teachersDayData,
  hindiDiwasData,
  engineersDayData,
  armedForcesDayData,
];

// Re-index all quotes to ensure global uniqueness
let globalId = 1;
const allData: CategoryData[] = allRawData.map(categoryData => ({
  ...categoryData,
  quotes: categoryData.quotes.map(quote => ({
    ...quote,
    id: globalId++,
  })),
}));


export const categories: Category[] = allData.map(d => d.category);

export const quotes: (Quote & { category: string })[] = allData.flatMap(d => 
  d.quotes.map(q => ({ ...q, category: d.category.slug }))
);

export const getCategory = (slug: string): Category | undefined => {
    return categories.find(c => c.slug === slug);
}

export const getQuotesForCategory = (slug: string): Quote[] => {
    const data = allData.find(d => d.category.slug === slug);
    return data ? data.quotes : [];
}
