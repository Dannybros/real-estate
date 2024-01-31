import { County, ProvinceProps } from "../Map"

const countiesData=[
    { 
        name: "Xaynoury", 
        points: `330.66,304.44 330.66,363.1 364.96,388.38 393.48,400.11 418.21,381.16 429.81,325.2 446.19,293.61 
        555.4,230.43 574.35,241.26 597.01,234.04 597.01,204.57 597.01,185.62 632.78,138.74 617.99,129.21 612.13,140.49 580.54,154.93 
        543.53,158.09 524.13,134.17 501.11,143.2 468.62,128.76 470.42,152.23 439.29,165.31 429.81,150.87 398.67,144.1 408.6,170.73 
        385.13,185.17 379.27,198.26 405.89,196.45 398.67,219.92 400.02,238.87 414.01,250.6 368.89,276.33 340.46,255.57 321.05,245.64` 
    },
    { 
        name: "Assaphone", 
        points: `628.95,278.26 626.47,305.57 769.75,361.07 839.93,361.07 864.3,344.83 902.52,319.67 925.9,285.94 
        929.28,273.07 983.43,232.46 955.55,182.91 922.61,179.75 888.76,154.93 832.35,133.72 811.59,151.77 764.21,158.99 746.16,158.99 
        746.16,169.37 722.24,173.89 710.5,169.37 706.44,185.62 690.2,173.44 655.9,173.44 638.3,142.3 632.78,138.74 597.01,185.62 
        597.01,204.57 632.78,254.12`
    },
    { 
        name: "Viraboury", 
        points: `1010.29,299.47 1014.35,378.9 1059.93,394.24 1091.97,412.29 1124.01,402.37 1138.9,381.16 
        1177.71,369.42 1216.52,340.99 1283.31,289.09 1327.08,267.43 1364.99,267.43 1449.36,195.75 1408.86,185.62 1340.49,140.27 
        1284.78,143.93 1289.72,168.02 1143.51,172.08 1098.83,170.05 1047.39,134.17 1006.09,127.41 976.31,108 955.55,148.16 
        955.55,182.91 983.43,232.46` 
    },
    { 
        name: "Seponh", 
        points: `1539.86,212.15 1567.62,227.04 1594.69,212.15 1594.69,436.89 1635.31,499.84 1662.39,510.67 
        1633.28,522.86 1521.59,525.57 1503.31,537.07 1460.66,544.52 1431.56,527.6 1353.03,535.04 1325.96,495.78 1298.88,494.43 
        1284.66,476.83 1264.36,461.93 1260.3,419.29 1224.42,371.23 1216.52,340.99 1283.31,289.09 1327.08,267.43 1364.99,267.43 
        1449.36,195.75 1475.88,204.57 1506.34,193.74` 
    },
    { 
        name: "Nong", 
        points: `1672.54,518.8 1662.39,568.89 1688.78,611.53 1738.88,624.4 1747,624.4 1747,661.63 1727.37,684.64 
        1699.62,700.89 1662.39,679.23 1642.75,714.43 1648.85,731.35 1642.75,788.21 1601.46,810.55 1577.09,800.39 1558.14,802.43 
        1541.22,799.04 1520.91,815.29 1482.32,828.83 1482.32,804.46 1468.79,767.23 1445.09,683.29 1411.92,678.55 1379.43,614.24 
        1379.43,572.95 1353.03,535.04 1431.56,527.6 1460.66,544.52 1503.31,537.07 1521.59,525.57 1633.28,522.86 1662.39,510.67` 
    },
    { 
        name: "Phine", 
        points: `978.02,450.43 992.23,497.81 1030.82,539.1 1030.82,553.32 1043,588.52 1047.74,665.69 
        1072.11,709.01 1057.9,716.46 1050.45,705.63 1039.62,716.46 1025.07,706.3 1021.34,723.9 1036.23,739.47 1087.68,728.64 
        1093.1,709.01 1120.17,736.09 1162.14,747.59 1188.54,765.19 1216.52,825.44 1279.25,898.55 1290.08,882.98 1279.93,855.22 
        1284.66,820.7 1304.29,817.32 1313.09,805.81 1325.96,814.61 1348.29,805.81 1365.89,816.64 1380.11,811.23 1402.45,857.26 
        1416.66,854.55 1422.76,837.62 1439.45,832.21 1449.36,841.69 1482.32,819.35 1482.32,804.46 1445.09,683.29 1411.92,678.55 
        1379.43,614.24 1379.43,572.95 1325.96,495.78 1298.88,494.43 1264.36,461.93 1260.3,419.29 1224.42,371.23 1216.52,340.99 
        1177.71,369.42 1138.9,381.16 1124.01,402.37 1091.97,412.29 1059.93,394.24 1014.35,378.9` 
    },
    { 
        name: "Kaysone Phomvihane", 
        points: `444.61,426.73 475.84,493.75 520.42,532.33 517.71,564.15 490.64,586.49 406.7,611.53 354.58,577.69 
        321.05,530.3 324.79,484.95 340.36,434.86 340.36,382.74 330.66,363.1 364.96,388.38 393.48,400.11 418.21,381.16 445.96,412.29` 
    },
    { 
        name: "Outhoumphone", 
        points: `664.61,447.04 647.01,427.41 639.56,385.44 632.78,351.6 625.34,327.23 644.98,312.73 626.47,305.57 
        632.78,254.12 597.01,204.57 597.01,234.04 574.35,241.26 555.4,230.43 446.19,293.61 429.81,325.2 418.21,381.16 445.96,412.29 
        444.61,426.73 475.84,493.75 520.42,532.33 520.42,516.09 550.21,487.32 582.7,487.32 614.51,453.81` 
    },
    { 
        name: "Atsaphangthong", 
        points: `864.97,368.45 822.67,473.1 785.44,522.52 770.54,524.89 727.22,504.24 708.61,497.47 680.51,477.17 
        664.61,447.04 647.01,427.41 632.78,351.6 625.34,327.23 644.98,312.73 769.75,361.07 839.93,361.07 867.36,342.81` 
    },
    { 
        name: "Xonboury", 
        points: `545.47,597.32 597.01,681.26 567.13,707.66 545.47,736.76 506.88,749.63 462.21,703.59 438.51,687.35 
        420.74,644.03 406.7,611.53 490.64,586.49 517.71,564.15` 
    },
    { 
        name: "Champhone", 
        points: `625.34,693.44 705.22,698.18 701.84,656.89 766.14,598.67 804.05,564.15 832.48,516.77 785.44,522.52 
        770.54,524.89 727.22,504.24 708.61,497.47 680.51,477.17 664.61,447.04 614.51,453.81 582.02,490.37 550.21,487.32 520.42,516.09 
        517.71,564.15 545.47,597.32 597.01,681.26` 
    },
    { 
        name: "Thaphalanxay", 
        points:`938.98,555.35 882.57,558.96 843.76,515.19 832.48,516.77 785.44,522.52 822.67,473.1 864.97,368.45 
        867.36,342.81 902.52,319.67 925.9,285.94 929.28,273.07 983.43,232.46 1010.29,299.47 1014.35,378.9 978.02,450.43 992.23,497.81 
        1030.82,539.1 1030.82,548.58 983.43,561.67` 
    },
    { 
        name: "Xonaboury", 
        points: `932.21,753.46 897.47,759.78 893.86,743.53 874.45,743.53 876.71,733.61 848.73,711.49 816.69,709.69 
        783.29,690.73 705.22,698.18 701.84,656.89 804.05,564.15 832.48,516.77 843.76,515.19 882.57,558.96 938.98,555.35 983.43,561.67 
        1030.82,548.58 1043,588.52 1047.74,665.69 1072.11,709.01 1057.9,716.46 1050.45,705.63 1039.62,716.46 1025.07,706.3 
        981.86,696.15 968.32,704.72 978.02,727.74 966.06,730.9 937.63,724.58` 
    },
    { 
        name: "Songkhone", 
        points: `868.58,786.86 858.2,831.08 861.36,869.89 895.66,915.02 895.66,964.21 872.19,955.63 851.89,958.34 
        842.86,940.29 811.27,944.35 799.09,935.33 709.28,912.31 661.45,906.9 632.11,892.91 571.19,875.53 540.96,852.74 515.68,798.59 
        515.68,763.39 506.88,749.63 545.47,736.76 567.13,707.66 597.01,681.26 625.34,693.44 705.22,698.18 783.29,690.73 816.69,709.69 
        848.73,711.49 876.71,733.61 874.45,743.53 877.61,753.91` 
    },
    { 
        name: "Thapangthong", 
        points: `935.83,976.84 984.56,1003.02 1011.64,998.05 1052.26,1027.84 1065.34,1027.84 1072.11,1016.56 
        1096.03,1014.75 1106.41,1027.84 1129.42,1024.68 1129.42,1002.34 1156.05,996.7 1198.02,964.21 1255.78,974.14 1262.55,957.89 
        1297.75,943 1297.75,928.56 1276.99,913.67 1279.25,898.55 1216.52,825.44 1188.54,765.19 1162.14,747.59 1120.17,736.09 
        1093.1,709.01 1087.68,728.64 1036.23,739.47 1021.34,723.9 1025.07,706.3 981.86,696.15 968.32,704.72 978.02,727.74 
        966.06,730.9 937.63,724.58 932.21,753.46 897.47,759.78 893.86,743.53 874.45,743.53 877.61,753.91 858.2,831.08 861.36,869.89 
        895.66,915.02 895.66,964.21 922.29,970.08` 
    }
]

function Savannakhet({handleClick, checkActiveArea}:ProvinceProps) {
  return (
    <svg className='county-map' version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 1080">
        <g id="Savannakhet-counties">
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
        <g id="Savannakhet-names">
            <text transform="matrix(1 0 0 1 650.7238 100.6463)" className="county-name">Atsaphangthong</text>
            <text transform="matrix(1 0 0 1 1181.6963 629.3173)" className="county-name">Phine</text>
            <text transform="matrix(1 0 0 1 123.2708 735.2408)" className="county-name">Kaysone Phomvihane</text>
            <text transform="matrix(1 5.151273e-04 -5.151273e-04 1 120.2278 193.1966)" className="county-name">Outhoumphone</text>
            <text transform="matrix(1 0 0 1 946.9499 889.108)" className="county-name">Thapangthong</text>
            <text transform="matrix(1 0 0 1 634.9224 823.7791)" className="county-name">Songkhone</text>
            <text transform="matrix(1 0 0 1 1382.4968 400.7026)" className="county-name">Seponh</text>
            <text transform="matrix(1 5.151273e-04 -5.151273e-04 1 1511.454 675.6584)" className="county-name">Nong</text>
            <text transform="matrix(1 0 0 1 425.95 210.1081)" className="county-name">Xayboury</text>
            <text transform="matrix(1 0 0 1 1091.9224 275.7791)" className="county-name">Viraboury</text>
            <text transform="matrix(1 0 0 1 576.4968 583.7026)" className="county-name">Champhone</text>
            <text transform="matrix(1 5.151273e-04 -5.151273e-04 1 819.4539 649.6584)" className="county-name">Xonaboury</text>
            <text transform="matrix(1 0 0 1 827.9497 488.1079)" className="county-name">Thaphalanxay</text>
            <text transform="matrix(1 0 0 1 770.4967 253.7025)" className="county-name">Assaphone</text>
            <text transform="matrix(1 5.151273e-04 -5.151273e-04 1 441.4538 688.6583)" className="county-name">Xonboury</text>
            <line className="county-indicator" x1="755.5" y1="111.5" x2="770.5" y2="424.5"/>
            <line className="county-indicator" x1="313.5" y1="200.5" x2="555.5" y2="376.5"/>
            <line className="county-indicator" x1="343.5" y1="710.5" x2="387.5" y2="524.5"/>
        </g>
    </svg>
  )
}

export default Savannakhet