const NOC_REGIONS = {
  AFG: 'Afghanistan',
  AHO: 'Curacao',
  ALB: 'Albania',
  ALG: 'Algeria',
  AND: 'Andorra',
  ANG: 'Angola',
  ANT: 'Antigua',
  ANZ: 'Australia',
  ARG: 'Argentina',
  ARM: 'Armenia',
  ARU: 'Aruba',
  ASA: 'American Samoa',
  AUS: 'Australia',
  AUT: 'Austria',
  AZE: 'Azerbaijan',
  BAH: 'Bahamas',
  BAN: 'Bangladesh',
  BAR: 'Barbados',
  BDI: 'Burundi',
  BEL: 'Belgium',
  BEN: 'Benin',
  BER: 'Bermuda',
  BHU: 'Bhutan',
  BIH: 'Bosnia and Herzegovina',
  BIZ: 'Belize',
  BLR: 'Belarus',
  BOH: 'Czech Republic',
  BOL: 'Boliva',
  BOT: 'Botswana',
  BRA: 'Brazil',
  BRN: 'Bahrain',
  BRU: 'Brunei',
  BUL: 'Bulgaria',
  BUR: 'Burkina Faso',
  CAF: 'Central African Republic',
  CAM: 'Cambodia',
  CAN: 'Canada',
  CAY: 'Cayman Islands',
  CGO: 'Republic of Congo',
  CHA: 'Chad',
  CHI: 'Chile',
  CHN: 'China',
  CIV: 'Ivory Coast',
  CMR: 'Cameroon',
  COD: 'Democratic Republic of the Congo',
  COK: 'Cook Islands',
  COL: 'Colombia',
  COM: 'Comoros',
  CPV: 'Cape Verde',
  CRC: 'Costa Rica',
  CRO: 'Croatia',
  CRT: 'Greece',
  CUB: 'Cuba',
  CYP: 'Cyprus',
  CZE: 'Czech Republic',
  DEN: 'Denmark',
  DJI: 'Djibouti',
  DMA: 'Dominica',
  DOM: 'Dominican Republic',
  ECU: 'Ecuador',
  EGY: 'Egypt',
  ERI: 'Eritrea',
  ESA: 'El Salvador',
  ESP: 'Spain',
  EST: 'Estonia',
  ETH: 'Ethiopia',
  EUN: 'Russia',
  FIJ: 'Fiji',
  FIN: 'Finland',
  FRA: 'France',
  FRG: 'Germany',
  FSM: 'Micronesia',
  GAB: 'Gabon',
  GAM: 'Gambia',
  GBR: 'UK',
  GBS: 'Guinea-Bissau',
  GDR: 'Germany',
  GEO: 'Georgia',
  GEQ: 'Equatorial Guinea',
  GER: 'Germany',
  GHA: 'Ghana',
  GRE: 'Greece',
  GRN: 'Grenada',
  GUA: 'Guatemala',
  GUI: 'Guinea',
  GUM: 'Guam',
  GUY: 'Guyana',
  HAI: 'Haiti',
  HKG: 'China',
  HON: 'Honduras',
  HUN: 'Hungary',
  INA: 'Indonesia',
  IND: 'India',
  IOA: 'Individual Olympic Athletes',
  IRI: 'Iran',
  IRL: 'Ireland',
  IRQ: 'Iraq',
  ISL: 'Iceland',
  ISR: 'Israel',
  ISV: 'Virgin Islands, US',
  ITA: 'Italy',
  IVB: 'Virgin Islands, British',
  JAM: 'Jamaica',
  JOR: 'Jordan',
  JPN: 'Japan',
  KAZ: 'Kazakhstan',
  KEN: 'Kenya',
  KGZ: 'Kyrgyzstan',
  KIR: 'Kiribati',
  KOR: 'South Korea',
  KOS: 'Kosovo',
  KSA: 'Saudi Arabia',
  KUW: 'Kuwait',
  LAO: 'Laos',
  LAT: 'Latvia',
  LBA: 'Libya',
  LBR: 'Liberia',
  LCA: 'Saint Lucia',
  LES: 'Lesotho',
  LIB: 'Lebanon',
  LIE: 'Liechtenstein',
  LTU: 'Lithuania',
  LUX: 'Luxembourg',
  MAD: 'Madagascar',
  MAL: 'Malaysia',
  MAR: 'Morocco',
  MAS: 'Malaysia',
  MAW: 'Malawi',
  MDA: 'Moldova',
  MDV: 'Maldives',
  MEX: 'Mexico',
  MGL: 'Mongolia',
  MHL: 'Marshall Islands',
  MKD: 'Macedonia',
  MLI: 'Mali',
  MLT: 'Malta',
  MNE: 'Montenegro',
  MON: 'Monaco',
  MOZ: 'Mozambique',
  MRI: 'Mauritius',
  MTN: 'Mauritania',
  MYA: 'Myanmar',
  NAM: 'Namibia',
  NBO: 'Malaysia',
  NCA: 'Nicaragua',
  NED: 'Netherlands',
  NEP: 'Nepal',
  NFL: 'Canada',
  NGR: 'Nigeria',
  NIG: 'Niger',
  NOR: 'Norway',
  NRU: 'Nauru',
  NZL: 'New Zealand',
  OMA: 'Oman',
  PAK: 'Pakistan',
  PAN: 'Panama',
  PAR: 'Paraguay',
  PER: 'Peru',
  PHI: 'Philippines',
  PLE: 'Palestine',
  PLW: 'Palau',
  PNG: 'Papua New Guinea',
  POL: 'Poland',
  POR: 'Portugal',
  PRK: 'North Korea',
  PUR: 'Puerto Rico',
  QAT: 'Qatar',
  RHO: 'Zimbabwe',
  ROT: 'nan',
  ROU: 'Romania',
  RSA: 'South Africa',
  RUS: 'Russia',
  RWA: 'Rwanda',
  SAA: 'Germany',
  SAM: 'Samoa',
  SCG: 'Serbia',
  SEN: 'Senegal',
  SEY: 'Seychelles',
  SIN: 'Singapore',
  SKN: 'Saint Kitts',
  SLE: 'Sierra Leone',
  SLO: 'Slovenia',
  SMR: 'San Marino',
  SOL: 'Solomon Islands',
  SOM: 'Somalia',
  SRB: 'Serbia',
  SRI: 'Sri Lanka',
  SSD: 'South Sudan',
  STP: 'Sao Tome and Principe',
  SUD: 'Sudan',
  SUI: 'Switzerland',
  SUR: 'Suriname',
  SVK: 'Slovakia',
  SWE: 'Sweden',
  SWZ: 'Swaziland',
  SYR: 'Syria',
  TAN: 'Tanzania',
  TCH: 'Czech Republic',
  TGA: 'Tonga',
  THA: 'Thailand',
  TJK: 'Tajikistan',
  TKM: 'Turkmenistan',
  TLS: 'Timor-Leste',
  TOG: 'Togo',
  TPE: 'Taiwan',
  TTO: 'Trinidad',
  TUN: 'Tunisia',
  TUR: 'Turkey',
  TUV: 'nan',
  UAE: 'United Arab Emirates',
  UAR: 'Syria',
  UGA: 'Uganda',
  UKR: 'Ukraine',
  UNK: 'nan',
  URS: 'Russia',
  URU: 'Uruguay',
  USA: 'USA',
  UZB: 'Uzbekistan',
  VAN: 'Vanuatu',
  VEN: 'Venezuela',
  VIE: 'Vietnam',
  VIN: 'Saint Vincent',
  VNM: 'Vietnam',
  WIF: 'Trinidad',
  YAR: 'Yemen',
  YEM: 'Yemen',
  YMD: 'Yemen',
  YUG: 'Serbia',
  ZAM: 'Zambia',
  ZIM: 'Zimbabwe',
};

export const NOC_NAMES = new Map([
  ['AFG', 'Afghanistan'],
  ['AHO', 'Curacao'],
  ['ALB', 'Albania'],
  ['ALG', 'Algeria'],
  ['AND', 'Andorra'],
  ['ANG', 'Angola'],
  ['ANT', 'Antigua'],
  ['ANZ', 'Australia'],
  ['ARG', 'Argentina'],
  ['ARM', 'Armenia'],
  ['ARU', 'Aruba'],
  ['ASA', 'American Samoa'],
  ['AUS', 'Australia'],
  ['AUT', 'Austria'],
  ['AZE', 'Azerbaijan'],
  ['BAH', 'Bahamas'],
  ['BAN', 'Bangladesh'],
  ['BAR', 'Barbados'],
  ['BDI', 'Burundi'],
  ['BEL', 'Belgium'],
  ['BEN', 'Benin'],
  ['BER', 'Bermuda'],
  ['BHU', 'Bhutan'],
  ['BIH', 'Bosnia and Herzegovina'],
  ['BIZ', 'Belize'],
  ['BLR', 'Belarus'],
  ['BOH', 'Czech Republic'],
  ['BOL', 'Boliva'],
  ['BOT', 'Botswana'],
  ['BRA', 'Brazil'],
  ['BRN', 'Bahrain'],
  ['BRU', 'Brunei'],
  ['BUL', 'Bulgaria'],
  ['BUR', 'Burkina Faso'],
  ['CAF', 'Central African Republic'],
  ['CAM', 'Cambodia'],
  ['CAN', 'Canada'],
  ['CAY', 'Cayman Islands'],
  ['CGO', 'Republic of Congo'],
  ['CHA', 'Chad'],
  ['CHI', 'Chile'],
  ['CHN', 'China'],
  ['CIV', 'Ivory Coast'],
  ['CMR', 'Cameroon'],
  ['COD', 'Democratic Republic of the Congo'],
  ['COK', 'Cook Islands'],
  ['COL', 'Colombia'],
  ['COM', 'Comoros'],
  ['CPV', 'Cape Verde'],
  ['CRC', 'Costa Rica'],
  ['CRO', 'Croatia'],
  ['CRT', 'Greece'],
  ['CUB', 'Cuba'],
  ['CYP', 'Cyprus'],
  ['CZE', 'Czech Republic'],
  ['DEN', 'Denmark'],
  ['DJI', 'Djibouti'],
  ['DMA', 'Dominica'],
  ['DOM', 'Dominican Republic'],
  ['ECU', 'Ecuador'],
  ['EGY', 'Egypt'],
  ['ERI', 'Eritrea'],
  ['ESA', 'El Salvador'],
  ['ESP', 'Spain'],
  ['EST', 'Estonia'],
  ['ETH', 'Ethiopia'],
  ['EUN', 'Russia'],
  ['FIJ', 'Fiji'],
  ['FIN', 'Finland'],
  ['FRA', 'France'],
  ['FRG', 'Germany'],
  ['FSM', 'Micronesia'],
  ['GAB', 'Gabon'],
  ['GAM', 'Gambia'],
  ['GBR', 'UK'],
  ['GBS', 'Guinea-Bissau'],
  ['GDR', 'Germany'],
  ['GEO', 'Georgia'],
  ['GEQ', 'Equatorial Guinea'],
  ['GER', 'Germany'],
  ['GHA', 'Ghana'],
  ['GRE', 'Greece'],
  ['GRN', 'Grenada'],
  ['GUA', 'Guatemala'],
  ['GUI', 'Guinea'],
  ['GUM', 'Guam'],
  ['GUY', 'Guyana'],
  ['HAI', 'Haiti'],
  ['HKG', 'China'],
  ['HON', 'Honduras'],
  ['HUN', 'Hungary'],
  ['INA', 'Indonesia'],
  ['IND', 'India'],
  ['IOA', 'Individual Olympic Athletes'],
  ['IRI', 'Iran'],
  ['IRL', 'Ireland'],
  ['IRQ', 'Iraq'],
  ['ISL', 'Iceland'],
  ['ISR', 'Israel'],
  ['ISV', 'Virgin Islands, US'],
  ['ITA', 'Italy'],
  ['IVB', 'Virgin Islands, British'],
  ['JAM', 'Jamaica'],
  ['JOR', 'Jordan'],
  ['JPN', 'Japan'],
  ['KAZ', 'Kazakhstan'],
  ['KEN', 'Kenya'],
  ['KGZ', 'Kyrgyzstan'],
  ['KIR', 'Kiribati'],
  ['KOR', 'South Korea'],
  ['KOS', 'Kosovo'],
  ['KSA', 'Saudi Arabia'],
  ['KUW', 'Kuwait'],
  ['LAO', 'Laos'],
  ['LAT', 'Latvia'],
  ['LBA', 'Libya'],
  ['LBR', 'Liberia'],
  ['LCA', 'Saint Lucia'],
  ['LES', 'Lesotho'],
  ['LIB', 'Lebanon'],
  ['LIE', 'Liechtenstein'],
  ['LTU', 'Lithuania'],
  ['LUX', 'Luxembourg'],
  ['MAD', 'Madagascar'],
  ['MAL', 'Malaysia'],
  ['MAR', 'Morocco'],
  ['MAS', 'Malaysia'],
  ['MAW', 'Malawi'],
  ['MDA', 'Moldova'],
  ['MDV', 'Maldives'],
  ['MEX', 'Mexico'],
  ['MGL', 'Mongolia'],
  ['MHL', 'Marshall Islands'],
  ['MKD', 'Macedonia'],
  ['MLI', 'Mali'],
  ['MLT', 'Malta'],
  ['MNE', 'Montenegro'],
  ['MON', 'Monaco'],
  ['MOZ', 'Mozambique'],
  ['MRI', 'Mauritius'],
  ['MTN', 'Mauritania'],
  ['MYA', 'Myanmar'],
  ['NAM', 'Namibia'],
  ['NBO', 'Malaysia'],
  ['NCA', 'Nicaragua'],
  ['NED', 'Netherlands'],
  ['NEP', 'Nepal'],
  ['NFL', 'Canada'],
  ['NGR', 'Nigeria'],
  ['NIG', 'Niger'],
  ['NOR', 'Norway'],
  ['NRU', 'Nauru'],
  ['NZL', 'New Zealand'],
  ['OMA', 'Oman'],
  ['PAK', 'Pakistan'],
  ['PAN', 'Panama'],
  ['PAR', 'Paraguay'],
  ['PER', 'Peru'],
  ['PHI', 'Philippines'],
  ['PLE', 'Palestine'],
  ['PLW', 'Palau'],
  ['PNG', 'Papua New Guinea'],
  ['POL', 'Poland'],
  ['POR', 'Portugal'],
  ['PRK', 'North Korea'],
  ['PUR', 'Puerto Rico'],
  ['QAT', 'Qatar'],
  ['RHO', 'Zimbabwe'],
  ['ROT', 'nan'],
  ['ROU', 'Romania'],
  ['RSA', 'South Africa'],
  ['RUS', 'Russia'],
  ['RWA', 'Rwanda'],
  ['SAA', 'Germany'],
  ['SAM', 'Samoa'],
  ['SCG', 'Serbia'],
  ['SEN', 'Senegal'],
  ['SEY', 'Seychelles'],
  ['SIN', 'Singapore'],
  ['SKN', 'Saint Kitts'],
  ['SLE', 'Sierra Leone'],
  ['SLO', 'Slovenia'],
  ['SMR', 'San Marino'],
  ['SOL', 'Solomon Islands'],
  ['SOM', 'Somalia'],
  ['SRB', 'Serbia'],
  ['SRI', 'Sri Lanka'],
  ['SSD', 'South Sudan'],
  ['STP', 'Sao Tome and Principe'],
  ['SUD', 'Sudan'],
  ['SUI', 'Switzerland'],
  ['SUR', 'Suriname'],
  ['SVK', 'Slovakia'],
  ['SWE', 'Sweden'],
  ['SWZ', 'Swaziland'],
  ['SYR', 'Syria'],
  ['TAN', 'Tanzania'],
  ['TCH', 'Czech Republic'],
  ['TGA', 'Tonga'],
  ['THA', 'Thailand'],
  ['TJK', 'Tajikistan'],
  ['TKM', 'Turkmenistan'],
  ['TLS', 'Timor-Leste'],
  ['TOG', 'Togo'],
  ['TPE', 'Taiwan'],
  ['TTO', 'Trinidad'],
  ['TUN', 'Tunisia'],
  ['TUR', 'Turkey'],
  ['TUV', 'nan'],
  ['UAE', 'United Arab Emirates'],
  ['UAR', 'Syria'],
  ['UGA', 'Uganda'],
  ['UKR', 'Ukraine'],
  ['UNK', 'nan'],
  ['URS', 'Russia'],
  ['URU', 'Uruguay'],
  ['USA', 'USA'],
  ['UZB', 'Uzbekistan'],
  ['VAN', 'Vanuatu'],
  ['VEN', 'Venezuela'],
  ['VIE', 'Vietnam'],
  ['VIN', 'Saint Vincent'],
  ['VNM', 'Vietnam'],
  ['WIF', 'Trinidad'],
  ['YAR', 'Yemen'],
  ['YEM', 'Yemen'],
  ['YMD', 'Yemen'],
  ['YUG', 'Serbia'],
  ['ZAM', 'Zambia'],
  ['ZIM', 'Zimbabwe'],
]);

export const countryCodes: Map<string, string> = new Map([
  ['Aruba', 'ABW'],
  ['Afghanistan', 'AFG'],
  ['Angola', 'AGO'],
  ['Anguilla', 'AIA'],
  ['Åland Islands', 'ALA'],
  ['Albania', 'ALB'],
  ['Andorra', 'AND'],
  ['United Arab Emirates', 'ARE'],
  ['Argentina', 'ARG'],
  ['Armenia', 'ARM'],
  ['American Samoa', 'ASM'],
  ['Antarctica', 'ATA'],
  ['French Southern Territories', 'ATF'],
  ['Antigua and Barbuda', 'ATG'],
  ['Australia', 'AUS'],
  ['Austria', 'AUT'],
  ['Azerbaijan', 'AZE'],
  ['Burundi', 'BDI'],
  ['Belgium', 'BEL'],
  ['Benin', 'BEN'],
  ['Bonaire, Sint Eustatius and Saba', 'BES'],
  ['Burkina Faso', 'BFA'],
  ['Bangladesh', 'BGD'],
  ['Bulgaria', 'BGR'],
  ['Bahrain', 'BHR'],
  ['Bahamas', 'BHS'],
  ['Bosnia and Herzegovina', 'BIH'],
  ['Saint Barthélemy', 'BLM'],
  ['Belarus', 'BLR'],
  ['Belize', 'BLZ'],
  ['Bermuda', 'BMU'],
  ['Bolivia, Plurinational State of', 'BOL'],
  ['Brazil', 'BRA'],
  ['Barbados', 'BRB'],
  ['Brunei Darussalam', 'BRN'],
  ['Bhutan', 'BTN'],
  ['Bouvet Island', 'BVT'],
  ['Botswana', 'BWA'],
  ['Central African Republic', 'CAF'],
  ['Canada', 'CAN'],
  ['Cocos (Keeling) Islands', 'CCK'],
  ['Switzerland', 'CHE'],
  ['Chile', 'CHL'],
  ['China', 'CHN'],
  ['Ivory Coast', 'CIV'],
  ['Cameroon', 'CMR'],
  ['Congo, Democratic Republic of the', 'COD'],
  ['Congo', 'COG'],
  ['Cook Islands', 'COK'],
  ['Colombia', 'COL'],
  ['Comoros', 'COM'],
  ['Cabo Verde', 'CPV'],
  ['Costa Rica', 'CRI'],
  ['Cuba', 'CUB'],
  ['Curaçao', 'CUW'],
  ['Christmas Island', 'CXR'],
  ['Cayman Islands', 'CYM'],
  ['Cyprus', 'CYP'],
  ['Czech Republic', 'CZE'],
  ['Germany', 'DEU'],
  ['Djibouti', 'DJI'],
  ['Dominica', 'DMA'],
  ['Denmark', 'DNK'],
  ['Dominican Republic', 'DOM'],
  ['Algeria', 'DZA'],
  ['Ecuador', 'ECU'],
  ['Egypt', 'EGY'],
  ['Eritrea', 'ERI'],
  ['Western Sahara', 'ESH'],
  ['Spain', 'ESP'],
  ['Estonia', 'EST'],
  ['Ethiopia', 'ETH'],
  ['Finland', 'FIN'],
  ['Fiji', 'FJI'],
  ['Falkland Islands (Malvinas)', 'FLK'],
  ['France', 'FRA'],
  ['Faroe Islands', 'FRO'],
  ['Micronesia, Federated States of', 'FSM'],
  ['Gabon', 'GAB'],
  ['UK', 'GBR'],
  ['Georgia', 'GEO'],
  ['Guernsey', 'GGY'],
  ['Ghana', 'GHA'],
  ['Gibraltar', 'GIB'],
  ['Guinea', 'GIN'],
  ['Guadeloupe', 'GLP'],
  ['Gambia', 'GMB'],
  ['Guinea-Bissau', 'GNB'],
  ['Equatorial Guinea', 'GNQ'],
  ['Greece', 'GRC'],
  ['Grenada', 'GRD'],
  ['Greenland', 'GRL'],
  ['Guatemala', 'GTM'],
  ['French Guiana', 'GUF'],
  ['Guam', 'GUM'],
  ['Guyana', 'GUY'],
  ['Hong Kong', 'HKG'],
  ['Heard Island and McDonald Islands', 'HMD'],
  ['Honduras', 'HND'],
  ['Croatia', 'HRV'],
  ['Haiti', 'HTI'],
  ['Hungary', 'HUN'],
  ['Indonesia', 'IDN'],
  ['Isle of Man', 'IMN'],
  ['India', 'IND'],
  ['British Indian Ocean Territory', 'IOT'],
  ['Ireland', 'IRL'],
  ['Iran', 'IRN'],
  ['Iraq', 'IRQ'],
  ['Iceland', 'ISL'],
  ['Israel', 'ISR'],
  ['Italy', 'ITA'],
  ['Jamaica', 'JAM'],
  ['Jersey', 'JEY'],
  ['Jordan', 'JOR'],
  ['Japan', 'JPN'],
  ['Kazakhstan', 'KAZ'],
  ['Kenya', 'KEN'],
  ['Kyrgyzstan', 'KGZ'],
  ['Cambodia', 'KHM'],
  ['Kiribati', 'KIR'],
  ['Saint Kitts and Nevis', 'KNA'],
  ['South Korea', 'KOR'],
  ['Kuwait', 'KWT'],
  ["Lao People's Democratic Republic", 'LAO'],
  ['Lebanon', 'LBN'],
  ['Liberia', 'LBR'],
  ['Libya', 'LBY'],
  ['Saint Lucia', 'LCA'],
  ['Liechtenstein', 'LIE'],
  ['Sri Lanka', 'LKA'],
  ['Lesotho', 'LSO'],
  ['Lithuania', 'LTU'],
  ['Luxembourg', 'LUX'],
  ['Latvia', 'LVA'],
  ['Macao', 'MAC'],
  ['Saint Martin (French part)', 'MAF'],
  ['Morocco', 'MAR'],
  ['Monaco', 'MCO'],
  ['Moldova, Republic of', 'MDA'],
  ['Madagascar', 'MDG'],
  ['Maldives', 'MDV'],
  ['Mexico', 'MEX'],
  ['Marshall Islands', 'MHL'],
  ['North Macedonia', 'MKD'],
  ['Mali', 'MLI'],
  ['Malta', 'MLT'],
  ['Myanmar', 'MMR'],
  ['Montenegro', 'MNE'],
  ['Mongolia', 'MNG'],
  ['Northern Mariana Islands', 'MNP'],
  ['Mozambique', 'MOZ'],
  ['Mauritania', 'MRT'],
  ['Montserrat', 'MSR'],
  ['Martinique', 'MTQ'],
  ['Mauritius', 'MUS'],
  ['Malawi', 'MWI'],
  ['Malaysia', 'MYS'],
  ['Mayotte', 'MYT'],
  ['Namibia', 'NAM'],
  ['New Caledonia', 'NCL'],
  ['Niger', 'NER'],
  ['Norfolk Island', 'NFK'],
  ['Nigeria', 'NGA'],
  ['Nicaragua', 'NIC'],
  ['Niue', 'NIU'],
  ['Netherlands', 'NLD'],
  ['Norway', 'NOR'],
  ['Nepal', 'NPL'],
  ['Nauru', 'NRU'],
  ['New Zealand', 'NZL'],
  ['Oman', 'OMN'],
  ['Pakistan', 'PAK'],
  ['Panama', 'PAN'],
  ['Pitcairn', 'PCN'],
  ['Peru', 'PER'],
  ['Philippines', 'PHL'],
  ['Palau', 'PLW'],
  ['Papua New Guinea', 'PNG'],
  ['Poland', 'POL'],
  ['Puerto Rico', 'PRI'],
  ['North Korea', 'PRK'],
  ['Portugal', 'PRT'],
  ['Paraguay', 'PRY'],
  ['Palestine, State of', 'PSE'],
  ['French Polynesia', 'PYF'],
  ['Qatar', 'QAT'],
  ['Réunion', 'REU'],
  ['Romania', 'ROU'],
  ['Russia', 'RUS'],
  ['Rwanda', 'RWA'],
  ['Saudi Arabia', 'SAU'],
  ['Sudan', 'SDN'],
  ['Senegal', 'SEN'],
  ['Singapore', 'SGP'],
  ['South Georgia and the South Sandwich Islands', 'SGS'],
  ['Saint Helena, Ascension and Tristan da Cunha', 'SHN'],
  ['Svalbard and Jan Mayen', 'SJM'],
  ['Solomon Islands', 'SLB'],
  ['Sierra Leone', 'SLE'],
  ['El Salvador', 'SLV'],
  ['San Marino', 'SMR'],
  ['Somalia', 'SOM'],
  ['Saint Pierre and Miquelon', 'SPM'],
  ['Serbia', 'SRB'],
  ['South Sudan', 'SSD'],
  ['Sao Tome and Principe', 'STP'],
  ['Suriname', 'SUR'],
  ['Slovakia', 'SVK'],
  ['Slovenia', 'SVN'],
  ['Sweden', 'SWE'],
  ['Eswatini', 'SWZ'],
  ['Sint Maarten (Dutch part)', 'SXM'],
  ['Seychelles', 'SYC'],
  ['Syrian Arab Republic', 'SYR'],
  ['Turks and Caicos Islands', 'TCA'],
  ['Chad', 'TCD'],
  ['Togo', 'TGO'],
  ['Thailand', 'THA'],
  ['Tajikistan', 'TJK'],
  ['Tokelau', 'TKL'],
  ['Turkmenistan', 'TKM'],
  ['Timor-Leste', 'TLS'],
  ['Tonga', 'TON'],
  ['Trinidad', 'TTO'],
  ['Tunisia', 'TUN'],
  ['Turkey', 'TUR'],
  ['Tuvalu', 'TUV'],
  ['Taiwan', 'TWN'],
  ['Tanzania, United Republic of', 'TZA'],
  ['Uganda', 'UGA'],
  ['Ukraine', 'UKR'],
  ['United States Minor Outlying Islands', 'UMI'],
  ['Uruguay', 'URY'],
  ['USA', 'USA'],
  ['Uzbekistan', 'UZB'],
  ['Holy See', 'VAT'],
  ['Saint Vincent and the Grenadines', 'VCT'],
  ['Venezuela', 'VEN'],
  ['Virgin Islands (British)', 'VGB'],
  ['Virgin Islands (U.S.)', 'VIR'],
  ['Vietnam', 'VNM'],
  ['Vanuatu', 'VUT'],
  ['Wallis and Futuna', 'WLF'],
  ['Samoa', 'WSM'],
  ['Yemen', 'YEM'],
  ['South Africa', 'ZAF'],
  ['Zambia', 'ZMB'],
  ['Zimbabwe', 'ZWE'],
]);
