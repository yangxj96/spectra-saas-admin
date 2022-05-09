interface JsonAnalysis {
    type: string,
    properties: Properties,
    geometry: Geometry
}

interface Properties {
    Shape_Type: string,
    Name: string,
    Type: string
}

interface Geometry {
    type: string,
    coordinates: number[]
}

const obj: JsonAnalysis[] = [
    {
        "type": "Feature",
        "properties": {"Shape_Type": "取水口", "Name": "取水口", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [99.95709134220968, 26.881474146580846, 1823.496670591922]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "水源泵站", "Name": "水源泵站", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [99.93665695960716, 26.861232846627182, 1830.4723332860465]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "香炉山隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.046850716289796, 26.523571065251257, 3127.919581315131]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "积福村隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.185971052457688, 26.353362894796231, 2022.7981018810628]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "衍庆村隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.18604773323672, 26.344433151713808, 1997.7263555870204]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "芹河隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.178279218004533, 26.252508771471565, 2267.8785720809647]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "北衙隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.170079122409035, 26.144417867148849, 2333.867706333143]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "上果园隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.169175827082839, 26.091702480158038, 2460.0999042652516]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "下河坝隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.175357869711945, 26.046634663881228, 2161.0698722754046]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "玉石厂隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.183868057883387, 26.008239239616483, 2260.7102055829514]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "老马槽隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.190148906565199, 25.974770928524375, 2288.533834371846]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "长育村隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.215212631965784, 25.924030522880731, 2516.1808955794213]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "海东隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.296775741352818, 25.773137016290271, 2362.421036142418]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "狮子山隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.466729540159093, 25.649206165210121, 2536.1743205965568]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "洗窝帚山隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.557250737992661, 25.53550680027438, 2052.451380920323]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "品甸海隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.589360263826208, 25.531077134464173, 1985.1351622605448]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "磨盘山隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.670856843413759, 25.493782545937957, 2164.3504047423903]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "老青山隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.845635464719777, 25.42664387375757, 2250.3220289216047]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "板凳山隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.965976600412148, 25.403090503419065, 2279.17567691446]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "万家隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [101.081746286468302, 25.372280957770844, 2043.9115396910242]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "柳家村隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [101.229416463847187, 25.309778513932986, 2335.1532483519654]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "凤屯隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [101.300478788572264, 25.272198258620271, 2260.710014742148]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "伍庄村隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [101.429713841299133, 25.26717463341836, 1993.1607935234515]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "凤凰山隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [101.808294922806439, 25.265508642490708, 2123.6286236200795]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "九道河隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [101.977172019747641, 25.336005263748337, 2203.4803688697093]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "龙潭隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.153103529501834, 25.359727050226709, 2070.0622677000883]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "蔡家村隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.367812344565593, 25.283300777868568, 2223.380888788881]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "松林隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.482812823427494, 25.165172929596828, 2332.724773212252]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "盛家塘隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.527399994384666, 25.162716429679215, 1906.260605557061]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "龙庆河隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.60217322447113, 25.157700950088302, 2011.3225068980275]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "龙泉隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.689028596161776, 25.135165198714763, 1978.9011905665916]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "昆呈隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.870552646130548, 24.846907315423813, 1971.664631503756]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "小扑隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.688520751588783, 24.545788487671505, 1974.1083827242785]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "白马山隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.696691492213603, 24.370806054268741, 1867.7869696418563]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "黄草坝隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.676787153263177, 24.335734334505023, 1903.030414167234]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "老尖山隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.67958853453203, 24.310644343134364, 1894.3627162407406]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "扯那苴隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.675918894673444, 24.250126987031539, 1987.6650307783452]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "大塘子隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.649194436752751, 24.202884058028339, 2078.0989626414766]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "螺峰山隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.643455525977416, 24.111288871985661, 1975.5940915756769]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "鸡米冲隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.628175242385225, 23.999532943778963, 1800.9357496661207]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "乌兄隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.627039966905954, 23.947777505335509, 1636.407669862162]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "龙尾隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.641020087002232, 23.78595511391741, 1785.5387505816739]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "羊街隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.693282822388667, 23.757412976900874, 1609.0093950750484]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "龙树隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.767729524941302, 23.752150726579075, 1640.1279571950695]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "龙树山隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.856135451284715, 23.76800698182598, 1730.6010259686122]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "坝埂脚隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.931484813712672, 23.741353126510884, 1475.2175305217825]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "大路能山隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.944555029591569, 23.688882431619501, 1459.394359535147]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "地田坡隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.970654728498275, 23.623521961481838, 1589.1614373265545]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "大坡子隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [103.081005133134809, 23.560118790805735, 1739.2494456966592]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "大山隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [103.157814804168808, 23.496222776453497, 1580.3090386706058]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "乍甸隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [103.172400354340908, 23.487104332688428, 1423.8995908661996]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "小燕塘隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [103.196661827612871, 23.474260142607225, 1616.601111204975]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "大转弯隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [101.600777415305373, 25.219353295327746, 1952.5462310046196]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "鲁支河隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.055786782599938, 25.367242995213847, 2089.340774747185]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "下庄暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.782971536642989, 25.448207750609619, 1935.139688106465]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "观音山倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.242087384044524, 25.349947269741079, 1726.0842106448492]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "龙泉倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.7289494262087, 25.134430741564831, 1884.1516706519528]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "积福村渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.184440565316507, 26.36050327518268, 1996.0432872992346]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "衍庆村渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.186040117450148, 26.347438722947263, 1979.3327292724448]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "衍庆村暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.186060176211782, 26.339441333200391, 1976.0631861044371]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "下河坝暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.181076516880509, 26.036275806369229, 1976.3262587293518]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "玉石厂倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.185318300831696, 25.991992693081158, 1946.9817102153138]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "老马槽渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.196329281747154, 25.957336757377103, 1975.8302823760891]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "甸头倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.352030865400934, 25.714502713938373, 1943.2547191236897]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "牛驼子暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.553454022916981, 25.536275149662629, 1988.5695402944002]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "麻栗园暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.560030995814287, 25.535115323378136, 1965.402851055674]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "麻栗园倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.564714165388324, 25.533746567560829, 1949.1893196900285]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "周官所暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.598504100173656, 25.527421896011958, 1948.448735921393]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "小青坡暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.734191186445642, 25.469357284416731, 1943.0325567724103]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "下庄倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.756435284374234, 25.459773253412727, 1912.6494420737222]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "董家村渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [100.894141074698723, 25.410052321818007, 1940.1179881066314]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "板凳山渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [101.005362051387678, 25.408104646653332, 1926.2096400493508]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "万家暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [101.169765617928, 25.3408580101025, 1948.736004377433]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "柳家村渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [101.271562225692918, 25.279519484755724, 1894.3800314486841]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "凤屯渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [101.367669448914768, 25.275568261562206, 1954.8695655562678]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "伍庄村暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [101.475241858209287, 25.243867013338615, 1925.6070642729628]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "龙川江倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [101.695893718783765, 25.244040094478095, 1777.2817075364223]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "凤凰山倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [101.936734184714069, 25.318607310823527, 1901.7416928015828]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "九道河倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.027154542005093, 25.35287565676342, 1792.7788147315366]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "鲁支河渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.074570548639315, 25.365402424776221, 1867.4064983923163]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "小鱼坝倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.449041621932338, 25.179628814153265, 1955.5528337622454]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "松林渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.518731356572843, 25.161855298520141, 1891.1033185022216]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "盛家塘暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.533564148775412, 25.163412350588722, 1882.919666398614]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "龙庆河倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.639997944254674, 25.137122463503545, 1924.3771047082741]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "牧羊村倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.74401041337461, 24.681462052249678, 1870.4292447256005]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "阿斗村渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.69398104398438, 24.396589755079845, 1806.444934103631]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "阿斗村暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.694876356567548, 24.389544087748856, 1837.2482021434028]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "木瓦田渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.681246782719512, 24.350688840996259, 1825.7742061345875]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "老尖山暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.672491727884264, 24.323710147364316, 1832.3883372832279]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "小龙潭倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.680767342533414, 24.283948367232107, 1805.236520645359]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "矣文水库渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.668224265866257, 24.229959497380129, 1814.8365980906892]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "何官营倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.631153128062536, 24.177243716305505, 1778.04589892215]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "曲江倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.634995573620529, 24.032165850610841, 1538.919877254938]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "乌兄渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.62665761671839, 23.952319343007549, 1609.2878965355987]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "小路南倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.627102177621708, 23.938819453158683, 1550.4391219107456]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "龙尾渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.630265056803054, 23.803594500260303, 1603.2042241950014]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "大寨暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.671876844308002, 23.759358044833299, 1529.2164153897234]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "羊街渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.705968751188109, 23.752632419993795, 1524.4978622849055]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "钱家湾倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.82916497546195, 23.77100261640026, 1460.3456513922783]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "柴里冲倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.83281446560062, 23.769416023358765, 1441.4096816422077]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "龙树山渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.839433784461903, 23.767128757568425, 1480.1743739933172]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "阿子冲倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.871753391291122, 23.764932439804479, 1430.764241256322]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "阿子冲暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.875051558714802, 23.765311254917616, 1457.047703646936]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "土军寨倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.894347786471499, 23.7668505996972, 1406.4269014483934]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "桥头村倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.955443816653641, 23.677284060355145, 1423.8087854449873]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "长冲倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.937795226486486, 23.724791572329053, 1417.5195271513296]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "红白吉坎渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.999036500917896, 23.614880664469307, 1435.8235636769646]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "绿冲河倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [103.145793870048507, 23.511147618597285, 1396.440812877493]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "大河湾倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [103.169130097467956, 23.486532916720112, 1381.98685074096]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "倒虹吸", "Name": "乍甸倒虹吸", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [103.176814979435903, 23.487384555102913, 1302.4253477295072]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "阿斗村隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.69445013162516, 24.393135354972124, 1859.6118798954603]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "电站", "Name": "曲江消能电站", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.638140527563934, 24.042194649243228, 1649.9452873287767]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "电站", "Name": "跃进消能电站", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.670552446170007, 23.760767866227901, 1531.1617963801068]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "渡槽", "Name": "小路南渡槽", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.634456615529999, 23.9203375462364, 1599.3322734536757]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "电站", "Name": "阿子冲消能建筑物", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.867193288712826, 23.766259831234244, 1469.11216365009]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "小路南1#隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.629692545238001, 23.926, 1698.197732154597]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "小路南2#隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.632, 23.856, 1765.3597329240356]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "柴里冲1#隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.830924158064605, 23.770340213146085, 1518.477184336449]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "柴里冲2#隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.837, 23.767, 1524.7389822678488]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "阿子冲2#隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.885454346045009, 23.766465875639007, 1474.9410443747158]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "隧洞", "Name": "阿子冲1#隧洞", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.873690829415239, 23.765154957874856, 1501.94362812095]}
    },
    {
        "type": "Feature",
        "properties": {"Shape_Type": "暗涵", "Name": "柴里冲暗涵", "Type": "point"},
        "geometry": {"type": "Point", "coordinates": [102.834700920266812, 23.76839679823745, 1484.4461180608253]}
    }
]

export default obj;
