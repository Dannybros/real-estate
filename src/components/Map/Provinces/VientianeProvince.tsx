import { County, ProvinceProps } from "../Map"

const countiesData=[
    { 
        name: "Xanakharm", 
        points: `914.71,773.85 844.28,867.78 774.79,848.02 757.08,929.78 660.34,993.48 648.75,954.98 579.94,925.01 
        579.94,829.63 567,793.52 613.33,710.4 643.3,702.91 667.83,661.35 740.86,679.06 802.04,679.06 823.16,657.26 870.52,661.6 
        905,664.76 918.54,682.38 900.66,759.8` 
    },
    { 
        name: "Mad", 
        points: `704.62,620.47 737.32,616.39 810.9,453.56 806.13,421.54 787.74,406.55 801.36,379.3 878.35,359.54 
        915.82,328.2 946.48,335.01 946.48,379.3 825.55,653.86 802.04,679.06 740.86,679.06 667.83,661.35`
    },
    { 
        name: "Feuang", 
        points: `914.8,451.22 1016.65,382.7 1016.65,434.48 952.61,604.12 912.92,656.33 905,664.76 823.16,657.26` 
    },
    { 
        name: "Viengkham", 
        points: `1121.27,514.87 1089.58,465.4 1067.06,429.71 1016.65,382.7 1016.65,434.48 952.61,604.12 
        912.92,656.33 940,672.93 949.71,671.14 957.12,644.32 989.06,647.89 1014.35,659.39 1074.56,600.03` 
    },
    { 
        name: "Phonhong", 
        points: `1135.19,608.21 1116.8,593.9 1121.27,514.87 1074.56,600.03 1014.35,659.39 1030.7,700.1 
        1044.5,711.25 1061.65,705.42 1093.04,723.26 1117.31,709.72 1151.54,726.58 1148.82,686.56 1121.27,664.76 1121.27,627.97` 
    },
    { 
        name: "Hinhurp", 
        points: `1182.74,620.73 1135.19,608.21 1121.27,627.97 1121.27,664.76 1148.82,686.56 1178.79,644.32` 
    },
    { 
        name: "Keo Oudom", 
        points: `1161.08,527.82 1144.99,495.8 1131.78,495.8 1121.27,514.87 1116.8,593.9 1135.19,608.21 
        1182.74,620.73 1212.18,625.92 1242.68,618.49 1265.32,612.98 1240.11,568.7 1205.53,544.17 1182.74,536.68 1163.8,535.99` 
    },
    { 
        name: "Thoulakhom", 
        points: `1323.91,602.76 1338.21,644.32 1369.89,672.93 1365.47,714.83 1339.92,710.4 1325.61,720.28 
        1305.51,718.58 1291.21,714.83 1286.1,732.54 1259.87,745.15 1242.49,735.61 1228.87,743.56 1231.25,761.84 1216.69,771.51 
        1204.04,766.61 1194.46,776.4 1188.33,769.76 1188.33,753.92 1181.18,750.98 1172.75,759.03 1160.99,750.98 1151.54,726.58 
        1148.82,686.56 1178.79,644.32 1182.74,620.73 1212.18,625.92 1265.32,612.98` 
    },
    { 
        name: "Vangvieng", 
        points: `1045.94,352.73 1056.16,251.22 1086.14,228.73 1135.87,241 1148.82,261.44 1166.53,260.76 
        1175.39,279.83 1164.49,290.73 1182.74,328.2 1176.75,335.01 1185.61,352.73 1238.06,345.23 1232.61,388.16 1225.8,407.23 
        1223.76,438.57 1191.06,495.8 1161.08,527.82 1144.99,495.8 1131.78,495.8 1121.27,514.87 1067.06,429.71 1016.65,382.7` 
    },
    { 
        name: "Kay", 
        points: `785.69,295.5 816.35,291.41 823.16,274.38 850.41,274.38 872.22,243.72 887.2,200.12 881.07,187.86 
        893.34,173.55 905.6,181.73 946.48,142.89 932.85,121.09 946.48,101.33 971.68,110.19 994.85,101.33 1022.78,127.9 1039.81,115.64 
        1058.21,128.59 1077.96,117.69 1105.21,131.99 1127.36,125.86 1159.72,170.83 1164.49,192.63 1186.29,198.42 1182.74,232.82 
        1160.4,237.59 1166.53,260.76 1148.82,261.44 1135.87,241 1086.14,228.73 1055.8,254.86 1045.94,352.73 1016.65,382.7 
        914.8,451.22 946.48,379.3 946.48,335.01 915.82,328.2 878.35,359.54 801.36,379.3 787.74,406.55 781.6,386.11 790.46,348.64 
        781.6,314.58` 
    }
]


function VientianeProvince({handleClick, checkActiveArea}:ProvinceProps) {
  return (
    <svg className='county-map' version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 1080">
       {/* <g id="VientianeProvince-counties">
            <polygon onClick={handleClick} name="Xanakharm" className="county" points="914.71,773.85 844.28,867.78 774.79,848.02 757.08,929.78 660.34,993.48 648.75,954.98 579.94,925.01 
                579.94,829.63 567,793.52 613.33,710.4 643.3,702.91 667.83,661.35 740.86,679.06 802.04,679.06 823.16,657.26 870.52,661.6 
                905,664.76 918.54,682.38 900.66,759.8 	"/>
            <polygon onClick={handleClick} name="Mad" className="county" points="704.62,620.47 737.32,616.39 810.9,453.56 806.13,421.54 787.74,406.55 801.36,379.3 878.35,359.54 
                915.82,328.2 946.48,335.01 946.48,379.3 825.55,653.86 802.04,679.06 740.86,679.06 667.83,661.35 	"/>
            <polygon onClick={handleClick} name="Feuang" className="county" points="914.8,451.22 1016.65,382.7 1016.65,434.48 952.61,604.12 912.92,656.33 905,664.76 823.16,657.26"/>
            <polygon onClick={handleClick} name="Viengkham" className="county" points="1121.27,514.87 1089.58,465.4 1067.06,429.71 1016.65,382.7 1016.65,434.48 952.61,604.12 
                912.92,656.33 940,672.93 949.71,671.14 957.12,644.32 989.06,647.89 1014.35,659.39 1074.56,600.03 	"/>
            <polygon onClick={handleClick} name="Phonhong" className="county" points="1135.19,608.21 1116.8,593.9 1121.27,514.87 1074.56,600.03 1014.35,659.39 1030.7,700.1 
                1044.5,711.25 1061.65,705.42 1093.04,723.26 1117.31,709.72 1151.54,726.58 1148.82,686.56 1121.27,664.76 1121.27,627.97 	"/>
            <polygon onClick={handleClick} name="Hinhurp" className="county" points="1182.74,620.73 1135.19,608.21 1121.27,627.97 1121.27,664.76 1148.82,686.56 1178.79,644.32 	"/>
            <polygon onClick={handleClick} name="Keo Oudom" className="county" points="1161.08,527.82 1144.99,495.8 1131.78,495.8 1121.27,514.87 1116.8,593.9 1135.19,608.21 
                1182.74,620.73 1212.18,625.92 1242.68,618.49 1265.32,612.98 1240.11,568.7 1205.53,544.17 1182.74,536.68 1163.8,535.99 	"/>
            <polygon onClick={handleClick} name="Thoulakhom" className="county" points="1323.91,602.76 1338.21,644.32 1369.89,672.93 1365.47,714.83 1339.92,710.4 1325.61,720.28 
                1305.51,718.58 1291.21,714.83 1286.1,732.54 1259.87,745.15 1242.49,735.61 1228.87,743.56 1231.25,761.84 1216.69,771.51 
                1204.04,766.61 1194.46,776.4 1188.33,769.76 1188.33,753.92 1181.18,750.98 1172.75,759.03 1160.99,750.98 1151.54,726.58 
                1148.82,686.56 1178.79,644.32 1182.74,620.73 1212.18,625.92 1265.32,612.98 	"/>
            <polygon onClick={handleClick} name="Vangvieng" className="county" points="1045.94,352.73 1056.16,251.22 1086.14,228.73 1135.87,241 1148.82,261.44 1166.53,260.76 
                1175.39,279.83 1164.49,290.73 1182.74,328.2 1176.75,335.01 1185.61,352.73 1238.06,345.23 1232.61,388.16 1225.8,407.23 
                1223.76,438.57 1191.06,495.8 1161.08,527.82 1144.99,495.8 1131.78,495.8 1121.27,514.87 1067.06,429.71 1016.65,382.7 	"/>
            <polygon onClick={handleClick} name="Kay" className="county" points="785.69,295.5 816.35,291.41 823.16,274.38 850.41,274.38 872.22,243.72 887.2,200.12 881.07,187.86 
                893.34,173.55 905.6,181.73 946.48,142.89 932.85,121.09 946.48,101.33 971.68,110.19 994.85,101.33 1022.78,127.9 1039.81,115.64 
                1058.21,128.59 1077.96,117.69 1105.21,131.99 1127.36,125.86 1159.72,170.83 1164.49,192.63 1186.29,198.42 1182.74,232.82 
                1160.4,237.59 1166.53,260.76 1148.82,261.44 1135.87,241 1086.14,228.73 1055.8,254.86 1045.94,352.73 1016.65,382.7 
                914.8,451.22 946.48,379.3 946.48,335.01 915.82,328.2 878.35,359.54 801.36,379.3 787.74,406.55 781.6,386.11 790.46,348.64 
                781.6,314.58 	"/>
        </g> */}
        <g id="VientianeProvince-counties">
            {countiesData.map((item) => (
                <County
                    key={item.name}
                    name={item.name}
                    handleClick={handleClick}
                    checkActiveArea={checkActiveArea}
                    points={item.points}
                />
            ))}
        </g>
        <g id="VientianeProvince-names">
            <text transform="matrix(1 0 0 1 1063.5977 400.8609)" className="county-name">Vangvieng</text>
            <text transform="matrix(1 5.151273e-04 -5.151273e-04 1 1168.3177 696.2775)" className="county-name">Thoulakhom</text>
            <text transform="matrix(1 0 0 1 1030.0123 796.86)" className="county-name">Phonhong</text>
            <text transform="matrix(1 0 0 1 1260.3805 484.2601)" className="county-name">Keo Oudom</text>
            <text transform="matrix(1 0 0 1 945.1395 254.2598)" className="county-name">Kasy</text>
            <text transform="matrix(1 0 0 1 1416.4357 636.7603)" className="county-name">Hinhurp</text>
            <text transform="matrix(1 5.151273e-04 -5.151273e-04 1 643.1558 794.1769)" className="county-name">Xanakharm</text>
            <text transform="matrix(1 0 0 1 554.8503 569.7594)" className="county-name">Feuang</text>
            <text transform="matrix(1 0 0 1 588.2185 456.1595)" className="county-name">Mad</text>
            <text transform="matrix(1 0 0 1 922.9775 900.1592)" className="county-name">Viengkham</text>
            <line className="county-indicator" x1="1102.5" y1="750.5" x2="1076.5" y2="658.5"/>
            <line className="county-indicator" x1="1284.5" y1="506.5" x2="1189" y2="585"/>
            <line className="county-indicator" x1="676" y1="560.5" x2="913.5" y2="554.5"/>
            <line className="county-indicator" x1="669.5" y1="447.5" x2="836.5" y2="493.5"/>
            <line className="county-indicator" x1="990.5" y1="858.5" x2="1001.5" y2="585.5"/>
            <line className="county-indicator" x1="1410.5" y1="625.5" x2="1146.5" y2="640.5"/>
        </g>
    </svg>
  )
}

export default VientianeProvince