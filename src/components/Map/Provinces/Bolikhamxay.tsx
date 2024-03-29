import { ProvinceProps } from "../Map"

function Bolikhamxay({handleClick,checkActiveArea}:ProvinceProps) {
  return (
    <svg className='county-map' version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 1080">
        <g id="Bolikhamxay-counties">
            <polygon onClick={handleClick} name="Thaphabat" className={`county ${checkActiveArea("Thaphabat") && 'active'}`} points="575.94,598.74 558.28,603.37 528.02,589.49 463.28,596.43 423.76,641.62 453.19,686.6 365.75,722.06 
                362.38,760.59 265.28,751.34 247.62,706.78 236.69,713.93 196.75,686.6 202.22,634.9 163.12,599.58 145.47,548.3 178.26,532.32 
                196.75,548.3 227.02,534 345.57,543.25 359.02,528.96 548.19,520.55 584.9,530.24 576.78,560.91 	"/>
            <polygon onClick={handleClick} name="Pakxan" className={`county ${checkActiveArea("Pakxan") && 'active'}`} points="855.08,560.91 840.78,540.73 798.74,526.44 718.03,560.91 707.94,570.47 683.56,565.95 650.77,542.41 
                608.73,536.53 584.9,530.24 576.78,560.91 575.94,598.74 660.86,623.97 708.78,659.28 788.66,668.42 821.45,701.11 870.21,668.42 
                852.55,613.77 843.31,597.06 	"/>
            <polygon onClick={handleClick} name="Borikhane" className={`county ${checkActiveArea("Borikhane") && 'active'}`} points="757.55,329.7 801.27,299.43 838.26,294.38 917.29,324.65 941.68,342.31 953.45,381.82 975.31,416.3 
                951.76,449.93 955.97,463.38 938.31,487.76 945.04,504.58 948.4,532.32 917.29,560.91 887.03,560.91 870.21,576.88 855.08,560.91 
                840.78,540.73 798.74,526.44 718.03,560.91 707.94,570.47 683.56,565.95 650.77,542.41 608.73,536.53 624.7,520.55 613.77,496.59 
                583.93,467.58 594.44,386.03 573.42,374.26 575.94,347.35 566.69,332.22 573.42,317.92 604.53,332.22 604.53,309.52 588.55,301.95 
                578.46,243.1 604.53,250.66 617.14,232.17 638.16,239.76 644.04,255.71 660.86,263.27 691.13,299.43 727.28,304.47 	"/>
            <polygon onClick={handleClick} name="Pakkading" className={`county ${checkActiveArea("Pakkading") && 'active'}`} points="1040.89,626.49 1070.31,640.57 1111.51,633.53 1129.17,644.14 1172.89,648.35 1261.17,720.68 
                1261.17,742.51 1235.1,742.51 1219.13,766.06 1183.82,750.92 1164.48,782.03 1168.68,806.41 1078.72,967 975.31,818.18 
                889.55,666.84 870.21,668.42 843.31,597.06 855.08,560.91 870.21,576.88 887.03,560.91 917.29,560.91 948.4,532.32 945.04,504.58 
                1038.36,576.88 1046.77,598.74 	"/>
            <polygon onClick={handleClick} name="Viengthong" className={`county ${checkActiveArea("Viengthong") && 'active'}`} points="1085.45,138 1071.99,178.36 1078.72,214.51 1035.84,243.94 1045.93,279.25 1035.84,289.34 
                1021.55,283.45 975.31,350.71 941.68,342.31 953.45,381.82 975.31,416.3 951.76,449.93 955.97,463.38 938.31,487.76 945.04,504.58 
                1038.36,576.88 1046.77,598.74 1040.89,626.49 1070.31,640.57 1111.51,633.53 1129.17,644.14 1172.89,648.35 1261.17,720.68 
                1261.17,742.51 1268.74,746.72 1288.07,714.77 1261.17,671.05 1288.07,621.44 1314.14,607.15 1364.58,607.15 1364.58,591.18 
                1344.4,576.88 1348.61,451.61 1357.02,423.86 1336.84,365.01 1349.45,323.81 1256.12,226.28 1225.02,207.78 1203.16,224.6 
                1147.66,157.34 	"/>
            <polygon onClick={handleClick} name="Xaichamphon" className={`county ${checkActiveArea("Xaichamphon") && 'active'}`} points="1449.92,640.57 1466.32,655.7 1492.17,666.42 1505.41,687.86 1521.18,697.32 1554.6,691.65 
                1557.75,681.56 1551.44,666.42 1560.27,653.81 1576.67,643.09 1580.45,618.5 1625.85,576.88 1658.01,470.95 1690.17,450.14 
                1642.88,404.52 1527.48,378.25 1506.67,351.77 1349.45,323.81 1336.84,365.01 1357.02,423.86 1348.61,451.61 1344.4,576.88 
                1364.58,591.18 1364.58,607.15 1364.16,619.13 1375.51,617.24 1393.8,624.81 1419.02,638.68 	"/>
            <polygon onClick={handleClick} name="Khamkeut" className={`county ${checkActiveArea("Khamkeut") && 'active'}`} points="1716.03,785.39 1650.45,835 1643.72,877.88 1602.52,934.21 1558.8,914.03 1510.88,916.55 
                1473.04,874.52 1451.18,870.31 1400.74,811.46 1381.4,810.62 1346.93,779.51 1268.74,746.72 1288.07,714.77 1261.17,671.05 
                1288.07,621.44 1314.14,607.15 1364.58,607.15 1364.16,619.13 1375.51,617.24 1419.02,638.68 1449.92,640.57 1466.32,655.7 
                1492.17,666.42 1505.41,687.86 1521.18,697.32 1554.6,691.65 1557.75,681.56 1551.44,666.42 1560.27,653.81 1576.67,643.09 
                1580.45,618.5 1625.85,576.88 1661.38,623.97 1690.8,626.49 1683.24,662.64 1732,704.68 	"/>
        </g>
        <g id="Bolikhamxay-names">
            <text transform="matrix(1 0 0 1 1440.95 796.108)" className="county-name">Khamkeut</text>
            <text transform="matrix(1 0 0 1 985.9224 738.7791)" className="county-name">Pakkading </text>
            <text transform="matrix(1 0 0 1 250.4967 624.7025)" className="county-name">Thaphabat</text>
            <text transform="matrix(1 5.151273e-04 -5.151273e-04 1 1064.8755 435.9494)" className="county-name">Viengthong</text>
            <text transform="matrix(1 0 0 1 696.5977 443.8609)" className="county-name">Borikhane</text>
            <text transform="matrix(1 0 0 1 689.5701 617.5319)" className="county-name">Pakxan</text>
            <text transform="matrix(1 0 0 1 1386.1445 494.4553)" className="county-name">Xaichamphon</text>
        </g>
    </svg>
  )
}

export default Bolikhamxay