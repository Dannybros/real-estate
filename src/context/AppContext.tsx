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
  properties:string[];
  search:string;
  provinces:string | null;
  areas:string[];
  sort:string;
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
    properties:[],
    search: '',
    provinces:null,
    areas:[],
    sort:'Newest',
  });
  const updateFilters = (newFilters: Partial<FilterType>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };
  

  // map
  const map:MapType={
    Bokeo:['a', 'b', 'c'],
    Vientiane:['d', 'e', 'f'],
    Phonsaly:['g', 'h', 'i'],
    test:['dd', 'ee', 'ff'],
  }

  const contextValue: AppContextType = {
    isFilterModalOpen,
    toggleFilterModal,
    language,
    changeLang,
    map,
    propertyTypes:["Apartment", 'Villa', 'Condominium', 'House', 'Townhouse', 'Office / Building', 'Land', 'Industria'],
    propertyStatus:['All', 'Sale', 'Rent'],
    filters,
    updateFilters,
    sortList:['Newest', 'Price (Lowest to Highest)', 'Price (Highest to Lowest)', 'Square Meter']
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
