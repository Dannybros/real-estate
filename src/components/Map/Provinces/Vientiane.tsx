import { ProvinceProps } from "../Map"

function Vientiane({handleClick}:ProvinceProps) {
  return (
    <svg className='county-map' version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 1080">
        <g id="Vientiane-counties">
            <polygon name="Sangthong" onClick={handleClick} className="county" points="287.3,451.28 253.85,417.84 296.42,233.6 264.19,191.64 283.04,171.58 347.49,211.1 370.6,206.85 
                388.23,143 464.24,151.51 524.44,178.87 563.96,277.99 563.96,369.19 551.8,440.94 658.81,650.72 590.71,634.3 543.28,605.73 
                456.33,504.18 434.44,437.3 328.64,426.35 	"/>
            <polygon name="Naxaithong" onClick={handleClick} className="county" points="596.19,302.31 637.03,288.42 711.71,330.89 769.48,298.66 850.96,338.79 873.46,396.86 901.43,416.01 
                921.49,396.86 938.52,403.85 938.52,441.55 953.11,457.36 962.23,519.38 1006.01,583.23 967.7,677.47 731.78,662.27 700.77,683.56 
                658.81,650.72 551.8,440.94 564.16,370.41 563.35,275.76 	"/>
            <path name="Sikhottabong" onClick={handleClick} className="county" d="M925.2,674.74c1.01-1.14,56.85,79.19,40.48,77.93c-17.02-1.31-151.2,0-151.2,0l-112.41-70.01l29.71-20.39
                L925.2,674.74z"/>
            <path name="Chanthabuly" onClick={handleClick} className="county" d="M982.7,640.57l50.27,61.12c0.51,0.24,1.18,1.28,0.3,2.03c-6.59,5.65-20.27,39.86-24.34,43.21
                c-3.33,2.74-18.96,18.6-23.8,24.79c-10.4,13.34-18.34-28.73-18.34-28.73s-21.59-45-41.59-68.26l42.5,2.74L982.7,640.57z"/>
            <path name="Sisattanak" onClick={handleClick} className="county" d="M1011.23,743.29l14.03,25.59l23.92,2.03l3.24,47.43l-11.35,24.32h-57.97l2.03-70.94c0,0,5.51-6.28,11.45-13.23
                c7.74-9.04,16.3-19.1,15.21-17.02C1009.87,745.16,1011.23,743.29,1011.23,743.29z"/>
            <polygon name="Xaythany" onClick={handleClick} className="county" points="953.11,457.36 975.9,434.05 1006.01,445.71 1040.67,422.7 1034.99,379.19 1067.42,360.28 
                1108.77,382.98 1171.2,352.98 1183.36,310.82 1217.41,319.74 1249.84,612.41 1269.3,650.72 1264.43,693.49 1199.57,741.2 
                1159.85,690.24 1068.23,674.84 1034.49,701.59 982.7,640.57 1006.01,583.23 962.23,519.38 	"/>
            <path name="Mayparkngum" onClick={handleClick} className="county" d="M1360.1,310.82l77.02,52.7l21.08-13.78l34.05,85.94l187.28,17.84v17.03c0,0-62.43,70.42-78.64,55.48
                c-16.21-14.94-12.16,114.56-12.16,114.56s11.43,63.34-52.8,110.78c-49.25,36.38-75.09-70.53-161.23-34.35
                c-4.03,1.69-4.05,1.62-4.05,1.62l-106.21-25.13l4.86-42.77l-19.46-38.31l-32.43-292.67l47.83,4.05l34.05-23.51L1360.1,310.82z"/>
            <polygon name="Xaysetha" onClick={handleClick} className="county" points="1041.07,842.66 1098.23,842.66 1194.84,735.13 1159.85,690.24 1068.23,674.84 1033.57,702 
                1011.79,741.48 1025.27,768.88 1049.18,770.91 1052.42,818.34 	"/>
            <polygon name="Hadxayfong" onClick={handleClick} className="county" points="983.11,842.66 955.95,889.68 960.41,923.33 1063.77,974 1108.77,954.14 1101.07,921.3 1087.69,889.68 
                1194.84,840.23 1213.76,802.53 1370.64,718.62 1264.43,693.49 1199.57,741.2 1194.84,735.13 1098.23,842.66 	"/>
        </g>
        <g id="Vientiane-names">
            <text transform="matrix(1 0 0 1 1054.5977 534.8609)" className="county-name">Xaythany</text>
            <text transform="matrix(1 0 0 1 701.939 815.0306)" className="county-name">Chanthabuly</text>
            <text transform="matrix(1 5.151273e-04 -5.151273e-04 1 703.3178 522.2775)" className="county-name">Naxaithong</text>
            <text transform="matrix(1 0 0 1 350.0123 336.86)" className="county-name">Sangthong </text>
            <text transform="matrix(1 0 0 1 1037.8284 747.9863)" className="county-name">Xaysetha</text>
            <text transform="matrix(1 0 0 1 413.3805 723.2601)" className="county-name">Sikhottabong</text>
            <text transform="matrix(1 0 0 1 733.3805 924.26)" className="county-name">Sisattanak</text>
            <text transform="matrix(1 0 0 1 1311.1395 529.2598)" className="county-name">Mayparkngum</text>
            <text transform="matrix(1 0 0 1 1272.1395 866.2598)" className="county-name">Hadxayfong</text>
            <line className="county-indicator" x1="893.5" y1="785.5" x2="983.5" y2="708.5"/>
            <line className="county-indicator" x1="869.5" y1="877.5" x2="1014.5" y2="800.5"/>
            <line className="county-indicator" x1="1265.5" y1="845.5" x2="1166.5" y2="818.5"/>
            <line className="county-indicator" x1="635" y1="714" x2="833" y2="707"/>
        </g>
    </svg>
  )
}

export default Vientiane