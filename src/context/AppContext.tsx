import React, { createContext, useContext, ReactNode, useState } from 'react';

// Define price range
export interface NumberRange {
  min: number | null;
  max: number | null;
}

// Define Filter type
export interface FilterType {
  status:string;
  priceRange: NumberRange;
  sizeRange: NumberRange;
  yearRange: NumberRange;
  properties:string[];
  search:string;
  province:string | null;
  areas:string[];
  sort:string;
  beds:number | null;
  baths:number | null;
  parking:number | null;
  industry:string[];
  land:string[];
  features:string[];
}

interface MapType {
  [key: string]: string[];
};

// Define the context type
interface AppContextType {
  isFilterModalOpen: boolean;
  toggleFilterModal: () => void;
  language: string;
  changeLang: (newLang: string) => void;
  map:MapType;
  propertyTypes:string[];
  propertyStatus:string[];
  sortList:string[];
  filters:FilterType;
  updateFilters: (newFilters: Partial<FilterType>)=> void;
}

// Define a provider component
interface AppProviderProps {
  children: ReactNode;
}


// Create the context with an initial value
const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // filter modal open / close
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };


  // change lang
  const storedLang = localStorage.getItem('lang') || 'en';
  const [language, setLanguage] = useState(storedLang);
  const changeLang = (newLang: string) => {
    setLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };


  // filters
  const [filters, setFilters] = useState<FilterType>({
    status:"All",
    priceRange: { min: null, max: null },
    sizeRange: { min: null, max: null },
    yearRange: { min: null, max: null },
    properties:[],
    search: '',
    province:null,
    areas:[],
    beds:null,
    baths:null,
    parking:null,
    land:[],
    industry:[],
    features:[],
    sort:'Newest'
  });
  
  const updateFilters = (newFilters: Partial<FilterType>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };
  

  // map
  const map:MapType={
    Vientiane:['Chanthabuly', 'Sikhottabong', 'Xaythany', 'Naxaithong', 'Sangthong', 'Xaysetha', 'Sikhottabong', 'Sisattanak', 'Mayparkngum', 'Hadxayfong'],
    Phonsaly:['Khoua', 'Samphanh', 'Boun Neua', 'Phongsaly', 'May', 'Yot Ou', 'Boun Tay'],
    LuangNamtha:['Viengphoukha', 'Namtha', 'Sing', 'Long', 'Na Le'],
    Oudomxay:['Beng', 'Nga', 'Houne', 'Xay', 'Na Mo', 'La', 'Pak Beng'],
    Bokeo:['Pak Tha', 'Houayxay', 'Meung', 'Ton Pheung', 'Pha Oudom'],
    LuangPrabang:['Pak Seng', 'Ngoy', 'Xiengngeun', 'Phonxay', 'Chomphet', 'Luang Prabang', 'Nam Bak', 'Pak Ou', 'Phoukhoune', 'Phonthong', 'Viengkham'],
    Houaphan:["Viengxay", 'Houameuang', 'Xam Neua', 'Hiam', 'Xiengkho', 'Et', 'Samtay', 'Xon', 'Kone', 'Sop Bao'],
    Xayabury:['Sainyabuli', 'Khop', 'Hongsa', 'Ngeun', 'Xienghone', 'Phiang', 'Parklai', 'Kenethao', 'Botene', 'Thongmyxay', 'Xaisathan'],
    Xiengkhouang :['Nong Het', 'Kham', 'Phonsavan', 'Mok May', 'Khoune', 'Phaxay', 'Phou Kout'],
    VientianeProvince:['Vangvieng', 'Thoulakhom', 'Phonhong', 'Keo Oudom', 'Kasy', 'Hinhurp', 'Xanakharm', 'Feuang', 'Mad', 'Viengkham'],
    Bolikhamxai:["Khamkeut", 'Pakkading', 'Thaphabat', 'Viengthong', 'Borikhane', 'Pakxan', 'Xaichamphon'],
    Attapeu:['Samakhixay', 'Sanxay', 'Saysetha', 'Sanamxay', 'Phouvong']
  }

  const contextValue: AppContextType = {
    isFilterModalOpen,
    toggleFilterModal,
    language,
    changeLang,
    map,
    propertyTypes:['Villa', 'Condominium', 'House', 'Shop', 'Commercial Building', 'Land', 'Industry'],
    propertyStatus:['All', 'Sale', 'Rent'],
    filters,
    updateFilters,
    sortList:['Newest', 'Price Lowest', 'Price Highest', 'Square Meter']
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

// Define a custom hook for using the context
const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};

export { AppProvider, useAppContext };
