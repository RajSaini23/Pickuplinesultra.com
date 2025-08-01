
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
import { data as situationalLoveData } from './categories/situational-love';


const allRawData: CategoryData[] = [
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
  situationalLoveData,
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

    