import React, { createContext, useContext, ReactNode, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

// Define price range
export interface NumberRange {
  min: number | null;
  max: number | null;
}

export type UserType = {
  given_name: string;
  family_name: string;
  email: string;
} | null;

// Modal Type
export type ModalType = 'Setting' | 'Map' | 'SignIn' | 'Request';

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
  user:UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  modalType:ModalType;
  isModalOpen: boolean;
  toggleModal: (type:ModalType) => void;
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

  // user
  // const [user, setUser]= useLocalStorage<UserType | null>(null);
  const [user, setUser]= useLocalStorage<UserType>('user', null);

  // filter modal open / close
  const [modalType, setModalType] = useState<ModalType>("Setting");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = (type:ModalType) => {
    type!==modalType && setModalType(type);
    setIsModalOpen((isModalOpen)=>!isModalOpen);
  };


  // change lang
  // const storedLang = localStorage.getItem('lang') || 'en';
  const [language, setLanguage] = useLocalStorage('lang', 'en');
  const changeLang = (newLang: string) => {
    setLanguage(newLang);
  };


  // filters
  const [filters, setFilters] = useLocalStorage<FilterType>('filter',{
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
    LuangPrabang:['Pak Seng', 'Ngoy', 'Xiengngeun', 'Phonxay', 'Chomphet', 'Nane', 'Luang Prabang', 'Nam Bak', 'Pak Ou', 'Phoukhoune', 'Phonthong', 'Viengkham'],
    Houaphan:["Viengxay", 'Houameuang', 'Xam Neua', 'Hiam', 'Xiengkho', 'Et', 'Samtay', 'Xon', 'Kone', 'Sop Bao'],
    Xayabury:['Sainyabuli', 'Khop', 'Hongsa', 'Ngeun', 'Xienghone', 'Phiang', 'Parklai', 'Kenethao', 'Botene', 'Thongmyxay', 'Xaisathan'],
    Xiengkhouang :['Nong Het', 'Kham', 'Phonsavan', 'Mok May', 'Khoune', 'Phaxay', 'Phou Kout'],
    VientianeProvince:['Vangvieng', 'Thoulakhom', 'Phonhong', 'Keo Oudom', 'Kasy', 'Hinhurp', 'Xanakharm', 'Feuang', 'Mad', 'Viengkham'],
    Xaysoumboun:["Thathom", 'Longxan', 'Anouvong', 'Longchaeng', 'Hom'],
    Bolikhamxai:["Khamkeut", 'Pakkading', 'Thaphabat', 'Viengthong', 'Borikhane', 'Pakxan', 'Xaichamphon'],
    Khammuane:["Nong Bok", "Thakhek", 'Mahaxay', 'Yommalath', 'Hineboune', 'Sebangphay', 'Boualapha', 'Nakai', 'Kounkham', 'Xaibouathong'],
    Savannakhet:["Atsaphangthong", 'Phine', 'Kaysone Phomvihane', 'Outhoumphone', 'Thapangthong', 'Songkhone', 'Seponh', 'Nong', 'Xayboury', 'Viraboury', 'Champhone', 'Xonaboury', 'Thaphalanxay', 'Assaphone', 'Xonboury'],
    Salavan:["Khongsedone", 'Lakhonepheng', 'Toumlane', 'Lao Ngam', 'Vapy', 'Salavan', 'Ta Oy', 'Sa Mouay'],
    Sekong:['Tha Teng', 'Kaleum', 'Dak Cheung', 'La Mam'],
    Champasak:['Parkse', 'Sanasomboun', 'Paksong', 'Khong','Batiengchaleunsouk', 'Pathouphone', 'Champassack', 'Phonthong', 'Soukhoumma', 'Mounlapamok'],
    Attapeu:['Samakhixay', 'Sanxay', 'Saysetha', 'Sanamxay', 'Phouvong']
  }

  const contextValue: AppContextType = {
    user,
    setUser,
    modalType,
    isModalOpen,
    toggleModal,
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
