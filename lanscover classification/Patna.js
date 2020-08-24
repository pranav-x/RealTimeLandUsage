
var l8 = ee.ImageCollection("LANDSAT/LC08/C01/T1"),
    gaul = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level2"),
    barren_area =
        /* color: #d63000 */
        /* shown: false */
        ee.FeatureCollection(
            [ee.Feature(
                ee.Geometry.Point([84.9431283690603, 25.657059316852997]),
                {
                    "landcover": 0,
                    "system:index": "0"
                }),
            ee.Feature(
                ee.Geometry.Point([84.94508638164118, 25.657842664623566]),
                {
                    "landcover": 0,
                    "system:index": "1"
                }),
            ee.Feature(
                ee.Geometry.Point([84.94635774871423, 25.657673423256963]),
                {
                    "landcover": 0,
                    "system:index": "2"
                }),
            ee.Feature(
                ee.Geometry.Point([84.94174434920862, 25.657610562116755]),
                {
                    "landcover": 0,
                    "system:index": "3"
                }),
            ee.Feature(
                ee.Geometry.Point([84.94194283267572, 25.656556424214802]),
                {
                    "landcover": 0,
                    "system:index": "4"
                }),
            ee.Feature(
                ee.Geometry.Point([84.94274749538019, 25.65784750008764]),
                {
                    "landcover": 0,
                    "system:index": "5"
                }),
            ee.Feature(
                ee.Geometry.Point([84.9508012466577, 25.560556122972127]),
                {
                    "landcover": 0,
                    "system:index": "6"
                }),
            ee.Feature(
                ee.Geometry.Point([84.95280753900084, 25.561219119103477]),
                {
                    "landcover": 0,
                    "system:index": "7"
                }),
            ee.Feature(
                ee.Geometry.Point([84.95315086175475, 25.56108845592263]),
                {
                    "landcover": 0,
                    "system:index": "8"
                }),
            ee.Feature(
                ee.Geometry.Point([84.95485138227019, 25.56039158321794]),
                {
                    "landcover": 0,
                    "system:index": "9"
                }),
            ee.Feature(
                ee.Geometry.Point([84.9551410608438, 25.56097231075336]),
                {
                    "landcover": 0,
                    "system:index": "10"
                }),
            ee.Feature(
                ee.Geometry.Point([84.94906317521605, 25.560865844249285]),
                {
                    "landcover": 0,
                    "system:index": "11"
                }),
            ee.Feature(
                ee.Geometry.Point([84.94907926847014, 25.56009153955496]),
                {
                    "landcover": 0,
                    "system:index": "12"
                }),
            ee.Feature(
                ee.Geometry.Point([84.95002340604339, 25.559815692298585]),
                {
                    "landcover": 0,
                    "system:index": "13"
                }),
            ee.Feature(
                ee.Geometry.Point([84.9494869642404, 25.56120460097931]),
                {
                    "landcover": 0,
                    "system:index": "14"
                }),
            ee.Feature(
                ee.Geometry.Point([84.94665991593871, 25.55973342194124]),
                {
                    "landcover": 0,
                    "system:index": "15"
                }),
            ee.Feature(
                ee.Geometry.Point([84.93690895701796, 25.563743101537483]),
                {
                    "landcover": 0,
                    "system:index": "16"
                }),
            ee.Feature(
                ee.Geometry.Point([84.93872749473006, 25.563128512358244]),
                {
                    "landcover": 0,
                    "system:index": "17"
                }),
            ee.Feature(
                ee.Geometry.Point([84.94009542132765, 25.56343338769959]),
                {
                    "landcover": 0,
                    "system:index": "18"
                }),
            ee.Feature(
                ee.Geometry.Point([84.93953215743453, 25.56398990417873]),
                {
                    "landcover": 0,
                    "system:index": "19"
                })]),
    lake = /* color: #98ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([82.84375141052875, 24.14274974096945]),
            {
                "landcover": 1,
                "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([82.88392017273578, 24.154654284729073]),
            {
                "landcover": 1,
                "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([82.8571409979311, 24.129277472719753]),
            {
                "landcover": 1,
                "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([82.88975665955219, 24.13335063374228]),
            {
                "landcover": 1,
                "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([82.9179091253725, 24.17094291556364]),
            {
                "landcover": 1,
                "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([82.98554370789203, 24.188169013759037]),
            {
                "landcover": 1,
                "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([82.80117938904438, 24.10044831937498]),
            {
                "landcover": 1,
                "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([82.79431293396625, 24.075374214465864]),
            {
                "landcover": 1,
                "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([82.84649799256, 24.094180253088442]),
            {
                "landcover": 1,
                "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([82.7750868597475, 24.064089267164494]),
            {
                "landcover": 1,
                "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([82.30104779748892, 24.774702824669994]),
            {
                "landcover": 1,
                "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([82.30224942712759, 24.770962077728708]),
            {
                "landcover": 1,
                "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([82.32250546960806, 24.76597423982822]),
            {
                "landcover": 1,
                "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([82.30945920495962, 24.78124886059025]),
            {
                "landcover": 1,
                "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([82.31048917322134, 24.770494476436436]),
            {
                "landcover": 1,
                "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([82.31254910974478, 24.75973916074284]),
            {
                "landcover": 1,
                "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([82.29933118371939, 24.76862405365811]),
            {
                "landcover": 1,
                "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([82.27793586499074, 24.791206283294827]),
            {
                "landcover": 1,
                "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([82.27682006604054, 24.79163484635276]),
            {
                "landcover": 1,
                "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([82.2767771506963, 24.790037467429713]),
            {
                "landcover": 1,
                "system:index": "19"
            })]),
    settlement =
        /* color: #0b4a8b */
        /* shown: false */
        ee.FeatureCollection(
            [ee.Feature(
                ee.Geometry.Point([85.10281699395824, 25.616346816940677]),
                {
                    "landcover": 2,
                    "system:index": "0"
                }),
            ee.Feature(
                ee.Geometry.Point([85.10490911698986, 25.61690792446195]),
                {
                    "landcover": 2,
                    "system:index": "1"
                }),
            ee.Feature(
                ee.Geometry.Point([85.10470526910473, 25.61627909688924]),
                {
                    "landcover": 2,
                    "system:index": "2"
                }),
            ee.Feature(
                ee.Geometry.Point([85.10852473474193, 25.616878901723744]),
                {
                    "landcover": 2,
                    "system:index": "3"
                }),
            ee.Feature(
                ee.Geometry.Point([85.10706561303783, 25.614721525114234]),
                {
                    "landcover": 2,
                    "system:index": "4"
                }),
            ee.Feature(
                ee.Geometry.Point([85.10968344903637, 25.615185896463107]),
                {
                    "landcover": 2,
                    "system:index": "5"
                }),
            ee.Feature(
                ee.Geometry.Point([85.09954469896007, 25.615485802000215]),
                {
                    "landcover": 2,
                    "system:index": "6"
                }),
            ee.Feature(
                ee.Geometry.Point([85.10078924394298, 25.617149780339556]),
                {
                    "landcover": 2,
                    "system:index": "7"
                }),
            ee.Feature(
                ee.Geometry.Point([85.09916918969799, 25.615176222078407]),
                {
                    "landcover": 2,
                    "system:index": "8"
                }),
            ee.Feature(
                ee.Geometry.Point([85.17491983345325, 25.604665932726398]),
                {
                    "landcover": 2,
                    "system:index": "9"
                }),
            ee.Feature(
                ee.Geometry.Point([85.1762072937804, 25.604511128853748]),
                {
                    "landcover": 2,
                    "system:index": "10"
                }),
            ee.Feature(
                ee.Geometry.Point([85.17684029510791, 25.60519806950998]),
                {
                    "landcover": 2,
                    "system:index": "11"
                }),
            ee.Feature(
                ee.Geometry.Point([85.17622875145251, 25.602876000709376]),
                {
                    "landcover": 2,
                    "system:index": "12"
                }),
            ee.Feature(
                ee.Geometry.Point([85.1697056191283, 25.60305983279984]),
                {
                    "landcover": 2,
                    "system:index": "13"
                }),
            ee.Feature(
                ee.Geometry.Point([85.16833232811267, 25.604869112505103]),
                {
                    "landcover": 2,
                    "system:index": "14"
                }),
            ee.Feature(
                ee.Geometry.Point([85.16754912308032, 25.605294821397994]),
                {
                    "landcover": 2,
                    "system:index": "15"
                }),
            ee.Feature(
                ee.Geometry.Point([85.16799973419482, 25.602808273025854]),
                {
                    "landcover": 2,
                    "system:index": "16"
                }),
            ee.Feature(
                ee.Geometry.Point([85.17106818130786, 25.604801385950577]),
                {
                    "landcover": 2,
                    "system:index": "17"
                }),
            ee.Feature(
                ee.Geometry.Point([85.17527388504321, 25.60261476514725]),
                {
                    "landcover": 2,
                    "system:index": "18"
                }),
            ee.Feature(
                ee.Geometry.Point([85.17781661918933, 25.60457885557269]),
                {
                    "landcover": 2,
                    "system:index": "19"
                })]),
    forest = /* color: #ffc82d */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([84.92954005265071, 24.371526464194428]),
            {
                "landcover": 3,
                "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([84.93007649445369, 24.371951579282506]),
            {
                "landcover": 3,
                "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([84.9282955076678, 24.371218621342074]),
            {
                "landcover": 3,
                "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([84.92766250634028, 24.37067134331003]),
            {
                "landcover": 3,
                "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([84.92940594219996, 24.370466113437484]),
            {
                "landcover": 3,
                "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([84.93131031060054, 24.370817935872246]),
            {
                "landcover": 3,
                "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([84.93125666642024, 24.371306576519206]),
            {
                "landcover": 3,
                "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([84.93144442105128, 24.371873397304572]),
            {
                "landcover": 3,
                "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([84.92994238400294, 24.371326122105817]),
            {
                "landcover": 3,
                "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([84.93360091709926, 24.36998949850016]),
            {
                "landcover": 3,
                "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([84.9330322887881, 24.369129480743474]),
            {
                "landcover": 3,
                "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([84.92639113926722, 24.368494236600316]),
            {
                "landcover": 3,
                "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([84.92527534031703, 24.368455144548843]),
            {
                "landcover": 3,
                "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([84.9255757477267, 24.37036086799646]),
            {
                "landcover": 3,
                "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([84.92374111676051, 24.368318322273545]),
            {
                "landcover": 3,
                "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([84.9247393288856, 24.367896226638223]),
            {
                "landcover": 3,
                "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([84.9244872012382, 24.367089946819924]),
            {
                "landcover": 3,
                "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([84.92546888973764, 24.36762746726981]),
            {
                "landcover": 3,
                "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([84.92485734608225, 24.36713881240975]),
            {
                "landcover": 3,
                "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([84.92590202714382, 24.3677790631257]),
            {
                "landcover": 3,
                "system:index": "19"
            })]),
    crop =
        /* color: #00ffff */
        /* shown: false */
        ee.FeatureCollection(
            [ee.Feature(
                ee.Geometry.Point([84.96455911248793, 25.628701519935998]),
                {
                    "landcover": 4,
                    "system:index": "0"
                }),
            ee.Feature(
                ee.Geometry.Point([84.96559980958571, 25.628362954310056]),
                {
                    "landcover": 4,
                    "system:index": "1"
                }),
            ee.Feature(
                ee.Geometry.Point([84.97004154771437, 25.62703770248631]),
                {
                    "landcover": 4,
                    "system:index": "2"
                }),
            ee.Feature(
                ee.Geometry.Point([84.97227314561476, 25.627279537857557]),
                {
                    "landcover": 4,
                    "system:index": "3"
                }),
            ee.Feature(
                ee.Geometry.Point([84.97570637315383, 25.628817599358243]),
                {
                    "landcover": 4,
                    "system:index": "4"
                }),
            ee.Feature(
                ee.Geometry.Point([84.97069600671401, 25.62678619318081]),
                {
                    "landcover": 4,
                    "system:index": "5"
                }),
            ee.Feature(
                ee.Geometry.Point([84.96625426858535, 25.62691194789978]),
                {
                    "landcover": 4,
                    "system:index": "6"
                }),
            ee.Feature(
                ee.Geometry.Point([84.96353987306227, 25.627163456940483]),
                {
                    "landcover": 4,
                    "system:index": "7"
                }),
            ee.Feature(
                ee.Geometry.Point([84.96370080560317, 25.628420994199814]),
                {
                    "landcover": 4,
                    "system:index": "8"
                }),
            ee.Feature(
                ee.Geometry.Point([84.96358418441358, 25.559150501363977]),
                {
                    "landcover": 4,
                    "system:index": "9"
                }),
            ee.Feature(
                ee.Geometry.Point([84.96306920028272, 25.555414381541905]),
                {
                    "landcover": 4,
                    "system:index": "10"
                }),
            ee.Feature(
                ee.Geometry.Point([84.96905589080396, 25.55494977818669]),
                {
                    "landcover": 4,
                    "system:index": "11"
                }),
            ee.Feature(
                ee.Geometry.Point([84.9609234330708, 25.55984738128807]),
                {
                    "landcover": 4,
                    "system:index": "12"
                }),
            ee.Feature(
                ee.Geometry.Point([84.97817540145459, 25.557524432443728]),
                {
                    "landcover": 4,
                    "system:index": "13"
                }),
            ee.Feature(
                ee.Geometry.Point([84.97894787765088, 25.557872877641643]),
                {
                    "landcover": 4,
                    "system:index": "14"
                }),
            ee.Feature(
                ee.Geometry.Point([84.97789645171704, 25.555607965741583]),
                {
                    "landcover": 4,
                    "system:index": "15"
                }),
            ee.Feature(
                ee.Geometry.Point([84.96270441985669, 25.554388380062353]),
                {
                    "landcover": 4,
                    "system:index": "16"
                }),
            ee.Feature(
                ee.Geometry.Point([85.10505573384536, 25.561725546634875]),
                {
                    "landcover": 4,
                    "system:index": "17"
                }),
            ee.Feature(
                ee.Geometry.Point([85.1043959104277, 25.56165779566013]),
                {
                    "landcover": 4,
                    "system:index": "18"
                }),
            ee.Feature(
                ee.Geometry.Point([85.10320232741607, 25.561234351199882]),
                {
                    "landcover": 4,
                    "system:index": "19"
                })]),
    river =
        /* color: #bf04c2 */
        /* shown: false */
        ee.FeatureCollection(
            [ee.Feature(
                ee.Geometry.Point([84.96505241388094, 25.667750882376772]),
                {
                    "landcover": 5,
                    "system:index": "0"
                }),
            ee.Feature(
                ee.Geometry.Point([84.97144680017244, 25.671773586453387]),
                {
                    "landcover": 5,
                    "system:index": "1"
                }),
            ee.Feature(
                ee.Geometry.Point([84.97226219171297, 25.669298092316417]),
                {
                    "landcover": 5,
                    "system:index": "2"
                }),
            ee.Feature(
                ee.Geometry.Point([84.98595218652498, 25.673088671804273]),
                {
                    "landcover": 5,
                    "system:index": "3"
                }),
            ee.Feature(
                ee.Geometry.Point([84.9968526839615, 25.676724420499713]),
                {
                    "landcover": 5,
                    "system:index": "4"
                }),
            ee.Feature(
                ee.Geometry.Point([85.00534992212069, 25.677614001695755]),
                {
                    "landcover": 5,
                    "system:index": "5"
                }),
            ee.Feature(
                ee.Geometry.Point([85.02680759423983, 25.671696228039764]),
                {
                    "landcover": 5,
                    "system:index": "6"
                }),
            ee.Feature(
                ee.Geometry.Point([85.00848274225008, 25.680321381867092]),
                {
                    "landcover": 5,
                    "system:index": "7"
                }),
            ee.Feature(
                ee.Geometry.Point([85.03188164805147, 25.66962892943152]),
                {
                    "landcover": 5,
                    "system:index": "8"
                }),
            ee.Feature(
                ee.Geometry.Point([85.01458676432344, 25.66974496904551]),
                {
                    "landcover": 5,
                    "system:index": "9"
                }),
            ee.Feature(
                ee.Geometry.Point([84.94157918354375, 25.6646004376686]),
                {
                    "landcover": 5,
                    "system:index": "10"
                }),
            ee.Feature(
                ee.Geometry.Point([84.92913373371465, 25.662047429917163]),
                {
                    "landcover": 5,
                    "system:index": "11"
                }),
            ee.Feature(
                ee.Geometry.Point([84.91763242145879, 25.6632465767288]),
                {
                    "landcover": 5,
                    "system:index": "12"
                }),
            ee.Feature(
                ee.Geometry.Point([84.9459994640003, 25.664097576828194]),
                {
                    "landcover": 5,
                    "system:index": "13"
                }),
            ee.Feature(
                ee.Geometry.Point([84.91490880248851, 25.668718591720012]),
                {
                    "landcover": 5,
                    "system:index": "14"
                }),
            ee.Feature(
                ee.Geometry.Point([84.90847150085277, 25.6668619283582]),
                {
                    "landcover": 5,
                    "system:index": "15"
                }),
            ee.Feature(
                ee.Geometry.Point([84.89915887115306, 25.67014974999376]),
                {
                    "landcover": 5,
                    "system:index": "16"
                }),
            ee.Feature(
                ee.Geometry.Point([84.9122051358015, 25.66338060662624]),
                {
                    "landcover": 5,
                    "system:index": "17"
                }),
            ee.Feature(
                ee.Geometry.Point([84.90555325744457, 25.667248735609615]),
                {
                    "landcover": 5,
                    "system:index": "18"
                }),
            ee.Feature(
                ee.Geometry.Point([84.8937086224348, 25.674404443390404]),
                {
                    "landcover": 5,
                    "system:index": "19"
                })]);

 var center = ee.Geometry.Point([25.3932305454494, 86.42228272778313])
var colors = {'transparent': '#11ffee00', 'gray': '#F8F9FA'};



var TITLE_STYLE = {
  fontWeight: '100',
  fontSize: '32px',
  padding: '8px',
  color: '#616161',
  backgroundColor: colors.transparent,
};

var SUBTITLE_STYLE = {
  fontWeight: '350',
  fontSize: '16px',
  padding: '8px',
  color: '#616161',
  textAlign: 'center',
  //maxWidth: '450px',
  backgroundColor: colors.transparent,
};

var PARAGRAPH_STYLE = {
  fontSize: '14px',
  fontWeight: '50',
  color: '#616161',
  padding: '8px',
  maxWidth: '500px',
  backgroundColor: colors.transparent,
};

var BUTTON_STYLE = {
  fontSize: '14px',
  fontWeight: '100',
  color: '#616161',
  padding: '8px',
  backgroundColor: colors.transparent,
};

var SELECT_STYLE = {
  fontSize: '14px',
  fontWeight: '50',
  color: '#616161',
  padding: '2px',
  backgroundColor: colors.transparent,
  width: '80px'
};

var LABEL_STYLE = {
  fontWeight: '50',
  textAlign: 'center',
  fontSize: '14px',
  padding: '2px',
  backgroundColor: colors.transparent,
};





var infoPanel = ui.Panel({
    layout: ui.Panel.Layout.flow(), 
    style: {
      stretch: 'horizontal',
      height: '100%',
      width: '450px',
      backgroundColor: colors.gray
    }
});

var mappingPanel = ui.Map({
    center: {'lat': 25.3932305454494, 'lon': 86.42228272778313, 'zoom': 5}
   
  });


ui.root.clear() // This is important to do to remove the "normal" GEE map
ui.root.add(ui.SplitPanel(mappingPanel, infoPanel)); 

//ui.root.add() is where you are adding panels to the EE window 

var graphPanel = ui.Panel({style: {backgroundColor: colors.transparent}});


infoPanel.add(ui.Label('Real Time Land Usage Monitoring Tool(District Patna)', TITLE_STYLE));


var app_description = 'When working on Remote Sensing applications, many operations require calculating area. For example, one needs to calculate area covered by each class after supervised classification or find out how much area within a region is affected after a disaster.';

infoPanel.add(ui.Label(app_description, PARAGRAPH_STYLE));


infoPanel.insert(2, ui.Label('PARAMETERS :', SUBTITLE_STYLE))


var year_list = [
    {label: '2013', value: 2013},
    {label: '2014', value: 2014},
    {label: '2015', value: 2015},
    {label: '2016', value: 2016},
    {label: '2017', value: 2017},
    {label: '2018', value: 2018},
    {label: '2019', value: 2019}
  ];
  
  


  

var class_list = [
    {label: 'Barren Land', value: 0},
    {label: 'Lakes', value: 1},
    {label: 'Settlements', value: 2},
    {label: 'Forest', value: 3},
    {label: 'Crop Land', value: 4},
    {label: 'River', value: 5}
  ];



  

infoPanel.insert(3, ui.Label('Select a year :', SUBTITLE_STYLE))

var selectedYear = '2016';

var year = ui.Select({items: year_list, placeholder: 'Select a year', onChange: function(val){selectedYear=val}, value: 2016, style: SELECT_STYLE})

infoPanel.add(year);

var selectedState = 'Bihar';

var state = ui.Select({items: state_list, placeholder: 'Select a state', onChange: function(val){selectedState=val}, value: 'Bihar', style: SELECT_STYLE})

//infoPanel.add(state);




var runButton = ui.Button({label: 'Perform Classification', style: {width: '125px', maxWidth: '250px', color: '#616161'}});

infoPanel.add(runButton)





infoPanel.insert(9, ui.Label('Select a class type :', SUBTITLE_STYLE));

var selectedClass = 3;
var selectedClassName = 'Forest';

var classType = ui.Select({items: class_list, placeholder: 'Select a class type: ', onChange: function(val)
{
  selectedClass=val;
  
  if(val === 0)
    selectedClassName='Barren Land';
  else if(val== 1)
        selectedClassName='Lakes';
  else if(val== 2)
        selectedClassName='Settlements';
  else if(val== 3)
        selectedClassName='Forest';
  else if(val== 4)
        selectedClassName='Crop Land';
  else if(val== 5)
        selectedClassName='River';      


  // print(selectedClass);
  // print(selectedClassName);
  
}
, value: 3, style: SELECT_STYLE});

infoPanel.add(classType);



// OPACITY SLIDER

var opacity = 0.5;

var opacLabel = ui.Label('Opacity:', LABEL_STYLE)
var opacSlider = ui.Slider({min: 0, max: 1, value: 0.5, onChange : function(val){opacity=val;}  , style: {width: '125px', backgroundColor: colors.transparent}})
infoPanel.add(opacLabel).add(opacSlider)



var classButton = ui.Button({label: 'Show Area', style: {width: '125px', maxWidth: '250px', color: '#616161'}});

infoPanel.add(classButton);

var label = ui.Label('');
infoPanel.add(label);





infoPanel.insert(20, ui.Label('Calculate Difference', SUBTITLE_STYLE));

infoPanel.insert(22, ui.Label('Select a start year :', SUBTITLE_STYLE))

var startYear = '2018';
var endYear = '2019';


var syear = ui.Select({items: year_list, placeholder: 'Select a year', onChange: function(val){startYear=val}, value: 2018, style: SELECT_STYLE})

infoPanel.add(syear);

infoPanel.insert(24, ui.Label('Select an end year :', SUBTITLE_STYLE))


var eyear = ui.Select({items: year_list, placeholder: 'Select a year', onChange: function(val){endYear=val}, value: 2019, style: SELECT_STYLE})

infoPanel.add(eyear);

var calculateDiff = ui.Button({label: 'Calculate', style: {width: '125px', maxWidth: '250px', color: '#616161'}});

infoPanel.add(calculateDiff);



var labelDiff = ui.Label('');
infoPanel.add(labelDiff);









var selectedArea;
 var reqState;
 var indiaCollection

var showLand = runButton.onClick(function() {
  
   print("Clicked");
  label.setValue('');
  var layers = mappingPanel.layers()
  layers.forEach(function(x) {
    mappingPanel.remove(x) 
  })
  
  var startDate = selectedYear+'-01-01';
  var endDate = selectedYear+'-12-31';
  
var patna =  gaul.filter(
  ee.Filter.eq('ADM2_NAME', 'Patna'))
  reqState = patna;

// Remove the clouds
var cloud_free = ee.Algorithms.Landsat.simpleComposite({
  collection: l8.filterDate(startDate,endDate),
  asFloat: true
})

var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B10', 'B11'];



//  Merge those feature collections
var merged_collection = barren_area.merge(crop).merge(lake).merge(forest).merge(settlement).merge(river);


var training = cloud_free.select(bands).sampleRegions({
  collection: merged_collection,
  properties: ['landcover'],
  scale: 30
})



// Create the classifier and classify the image
var classifier = ee.Classifier.randomForest(10).train({
  features: training,
  classProperty: 'landcover',
  inputProperties: bands
});
// Create the classified image.
var classified = cloud_free.select(bands).classify(classifier);

//  Use a confusion matrix to test accuracy!
print("accuracy of classifier ",classifier.confusionMatrix().accuracy())


 indiaCollection = classified.clip(patna);
//print(classified);
//print(indiaCollection);
selectedArea = indiaCollection;

mappingPanel.centerObject(centert, 5)
mappingPanel.addLayer(indiaCollection, {min: 0, max: 5, palette: ['red','green', 'blue','yellow','purple','orange'],opacity:0.5},
'classified image');


});

 var dict1 = {
  0: ['red','white', 'white','white','white','white'],
   1: ['white','green', 'white','white','white','white'],
    2: ['white','white', 'blue','white','white','white'],
     3: ['white','white', 'white','yellow','white','white'],
      4: ['white','white', 'white','white','purple','white'],
       5: ['white','white', 'white','white','white','orange']
};
 
  var dict2 = {
  0: ['orange','white', 'white','white','white','white'],
   1: ['white','purple', 'white','white','white','white'],
    2: ['white','white', 'yellow','white','white','white'],
     3: ['white','white', 'white','blue','white','white'],
      4: ['white','white', 'white','white','red','white'],
       5: ['white','white', 'white','white','white','green']
};


var dlis = [dict1,dict2]


classButton.onClick(function() {
  var layers = mappingPanel.layers()
  layers.forEach(function(x) {
    mappingPanel.remove(x) 
  })
  label.setValue('Processing .....');
  var category = selectedArea.select('classification').eq(selectedClass);//vegetation has 1 value in your case

//Calculate the pixel area in square kilometer
var area_category = category.multiply(ee.Image.pixelArea()).divide(1000*1000);

//Reducing the statistics for your study area
var stat = area_category.reduceRegion ({
  reducer: ee.Reducer.sum(),
  geometry: reqState,
  scale: 500,
  maxPixels: 1e13
});


var calculatedArea = stat.get('classification');
//print(calculatedArea)
calculatedArea.evaluate(function(result) {

   var res = selectedClassName+' cover in Patna is: '+result+' SqKm.';
  label.setValue(res);
});

var shown = true;
//print(opacity);

mappingPanel.addLayer(indiaCollection, {min: 0, max: 5, palette: dict1[selectedClass]},
'classified image',shown,opacity);
});






 
 
function doclassification( year,op,pal)
{
  //print(year)
  var startDate = year+'-01-01';
  var endDate = year+'-12-31';
reqState = gaul.filter(
  ee.Filter.eq('ADM2_NAME', 'Patna'))
var cloud_free = ee.Algorithms.Landsat.simpleComposite({
  collection: l8.filterDate(startDate,endDate),
  asFloat: true
})


var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B10', 'B11'];



  
  var merged_collection = barren_area.merge(crop).merge(lake).merge(forest).merge(settlement).merge(river);


var training = cloud_free.select(bands).sampleRegions({
  collection: merged_collection,
  properties: ['landcover'],
  scale: 30
})

var classifier = ee.Classifier.randomForest(10).train({
  features: training,
  classProperty: 'landcover',
  inputProperties: bands
});
// Create the classified image.
var classified = cloud_free.select(bands).classify(classifier);


indiaCollection = classified.clip(reqState);
//print(classified);
//print(indiaCollection);
//print(selectedClass)
selectedArea = indiaCollection;


mappingPanel.addLayer(indiaCollection, {min: 0, max: 5, palette: dlis[pal][selectedClass],opacity:op},
'classified image' + year);
  
}







function AREA() {
  
 // label.setValue('');
  var category = selectedArea.select('classification').eq(selectedClass);//vegetation has 1 value in your case

//Calculate the pixel area in square kilometer
var area_category = category.multiply(ee.Image.pixelArea()).divide(1000*1000);

//Reducing the statistics for your study area
var stat = area_category.reduceRegion ({
  reducer: ee.Reducer.sum(),
  geometry: reqState,
  scale: 500,
  maxPixels: 1e13
});


var calculatedArea = stat.get('classification');
//print(calculatedArea)
return calculatedArea
}


infoPanel.add(graphPanel)

function clearMap()
{
   var layers = mappingPanel.layers()
  layers.forEach(function(x) {
    mappingPanel.remove(x) 
  })
  
}
calculateDiff.onClick(function(){
  

 mappingPanel.clear();
  
  labelDiff.setValue('Processing.....')
   
  graphPanel.clear()
  doclassification(startYear,0.6,0);
  var area1,area2,ans1,ans2;
  area1 = AREA();
   doclassification(endYear,0.4,1);

area2 = AREA()


   var d = area2 - area1;
    area1.evaluate(function(result1) {
  result1 = Number(result1)
  area2.evaluate(function(result2) {
  result2 = Number(result2);
  
  print(result2 - result1)
  if(result2 - result1 >=0)
  labelDiff.setValue(result2 - result1 + ' sq kms area of ' + selectedClassName + ' increased')
  else
  labelDiff.setValue(result1 - result2 + ' sq kms area of ' + selectedClassName + ' decreased')
 
    var dataTable = {
  cols: [{id: 'year', label: 'Year', type: 'number'},
         {id: 'area', label: 'Area', type: 'number'}],
  rows: [{c: [{v: Number(startYear)}, {v: result1}]},
         {c: [{v: Number(endYear)}, {v: result2}]}]
};
var options = {
  title: 'Area calculation',
  vAxis: {title: 'Year'},
  legend: {position: 'none'},
  hAxis: {
    title: 'Area',
    logScale: true
  }
};
    // Make a BarChart from the table and the options.
var chart =   ui.Chart(dataTable, 'BarChart', options);
 graphPanel.add(chart)
});
  
});
})