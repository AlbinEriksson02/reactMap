import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import { InfoBox } from './components/InfoBox'

export const SampleMap = () => {
  const data = [
  {position: [	42.546245	,	1.601554	], name: '	Andorra	'}, 
  {position: [	23.424076	,	53.847818	], name: '	United Arab Emirates	'}, 
  {position: [	33.93911	,	67.709953	], name: '	Afghanistan	'}, 
  {position: [	17.060816	,	-61.796428	], name: '	Antigua and Barbuda	'}, 
  {position: [	18.220554	,	-63.068615	], name: '	Anguilla	'}, 
  {position: [	41.153332	,	20.168331	], name: '	Albania	'}, 
  {position: [	40.069099	,	45.038189	], name: '	Armenia	'}, 
  {position: [	12.226079	,	-69.060087	], name: '	Netherlands Antilles	'}, 
  {position: [	-11.202692	,	17.873887	], name: '	Angola	'}, 
  {position: [	-75.250973	,	-0.071389	], name: '	Antarctica	'}, 
  {position: [	-38.416097	,	-63.616672	], name: '	Argentina	'}, 
  {position: [	-14.270972	,	-170.132217	], name: '	American Samoa	'}, 
  {position: [	47.516231	,	14.550072	], name: '	Austria	'}, 
  {position: [	-25.274398	,	133.775136	], name: '	Australia	'}, 
  {position: [	12.52111	,	-69.968338	], name: '	Aruba	'}, 
  {position: [	40.143105	,	47.576927	], name: '	Azerbaijan	'}, 
  {position: [	43.915886	,	17.679076	], name: '	Bosnia and Herzegovina	'}, 
  {position: [	13.193887	,	-59.543198	], name: '	Barbados	'}, 
  {position: [	23.684994	,	90.356331	], name: '	Bangladesh	'}, 
  {position: [	50.503887	,	4.469936	], name: '	Belgium	'}, 
  {position: [	12.238333	,	-1.561593	], name: '	Burkina Faso	'}, 
  {position: [	42.733883	,	25.48583	], name: '	Bulgaria	'}, 
  {position: [	25.930414	,	50.637772	], name: '	Bahrain	'}, 
  {position: [	-3.373056	,	29.918886	], name: '	Burundi	'}, 
  {position: [	9.30769	,	2.315834	], name: '	Benin	'}, 
  {position: [	32.321384	,	-64.75737	], name: '	Bermuda	'}, 
  {position: [	4.535277	,	114.727669	], name: '	Brunei	'}, 
  {position: [	-16.290154	,	-63.588653	], name: '	Bolivia	'}, 
  {position: [	-14.235004	,	-51.92528	], name: '	Brazil	'}, 
  {position: [	25.03428	,	-77.39628	], name: '	Bahamas	'}, 
  {position: [	27.514162	,	90.433601	], name: '	Bhutan	'}, 
  {position: [	-54.423199	,	3.413194	], name: '	Bouvet Island	'}, 
  {position: [	-22.328474	,	24.684866	], name: '	Botswana	'}, 
  {position: [	53.709807	,	27.953389	], name: '	Belarus	'}, 
  {position: [	17.189877	,	-88.49765	], name: '	Belize	'}, 
  {position: [	56.130366	,	-106.346771	], name: '	Canada	'}, 
  {position: [	-12.164165	,	96.870956	], name: '	Cocos [Keeling] Islands	'}, 
  {position: [	-4.038333	,	21.758664	], name: '	Congo [DRC]	'}, 
  {position: [	6.611111	,	20.939444	], name: '	Central African Republic	'}, 
  {position: [	-0.228021	,	15.827659	], name: '	Congo [Republic]	'}, 
  {position: [	46.818188	,	8.227512	], name: '	Switzerland	'}, 
  {position: [	7.539989	,	-5.54708	], name: '	Côte d Ivoire	'}, 
  {position: [	-21.236736	,	-159.777671	], name: '	Cook Islands	'}, 
  {position: [	-35.675147	,	-71.542969	], name: '	Chile	'}, 
  {position: [	7.369722	,	12.354722	], name: '	Cameroon	'}, 
  {position: [	35.86166	,	104.195397	], name: '	China	'}, 
  {position: [	4.570868	,	-74.297333	], name: '	Colombia	'}, 
  {position: [	9.748917	,	-83.753428	], name: '	Costa Rica	'}, 
  {position: [	21.521757	,	-77.781167	], name: '	Cuba	'}, 
  {position: [	16.002082	,	-24.013197	], name: '	Cape Verde	'}, 
  {position: [	-10.447525	,	105.690449	], name: '	Christmas Island	'}, 
  {position: [	35.126413	,	33.429859	], name: '	Cyprus	'}, 
  {position: [	49.817492	,	15.472962	], name: '	Czech Republic	'}, 
  {position: [	51.165691	,	10.451526	], name: '	Germany	'}, 
  {position: [	11.825138	,	42.590275	], name: '	Djibouti	'}, 
  {position: [	56.26392	,	9.501785	], name: '	Denmark	'}, 
  {position: [	15.414999	,	-61.370976	], name: '	Dominica	'}, 
  {position: [	18.735693	,	-70.162651	], name: '	Dominican Republic	'}, 
  {position: [	28.033886	,	1.659626	], name: '	Algeria	'}, 
  {position: [	-1.831239	,	-78.183406	], name: '	Ecuador	'}, 
  {position: [	58.595272	,	25.013607	], name: '	Estonia	'}, 
  {position: [	26.820553	,	30.802498	], name: '	Egypt	'}, 
  {position: [	24.215527	,	-12.885834	], name: '	Western Sahara	'}, 
  {position: [	15.179384	,	39.782334	], name: '	Eritrea	'}, 
  {position: [	40.463667	,	-3.74922	], name: '	Spain	'}, 
  {position: [	9.145	,	40.489673	], name: '	Ethiopia	'}, 
  {position: [	61.92411	,	25.748151	], name: '	Finland	'}, 
  {position: [	-16.578193	,	179.414413	], name: '	Fiji	'}, 
  {position: [	-51.796253	,	-59.523613	], name: '	Falkland Islands [Islas Malvinas]	'}, 
  {position: [	7.425554	,	150.550812	], name: '	Micronesia	'}, 
  {position: [	61.892635	,	-6.911806	], name: '	Faroe Islands	'}, 
  {position: [	46.227638	,	2.213749	], name: '	France	'}, 
  {position: [	-0.803689	,	11.609444	], name: '	Gabon	'}, 
  {position: [	55.378051	,	-3.435973	], name: '	United Kingdom	'}, 
  {position: [	12.262776	,	-61.604171	], name: '	Grenada	'}, 
  {position: [	42.315407	,	43.356892	], name: '	Georgia	'}, 
  {position: [	3.933889	,	-53.125782	], name: '	French Guiana	'}, 
  {position: [	49.465691	,	-2.585278	], name: '	Guernsey	'}, 
  {position: [	7.946527	,	-1.023194	], name: '	Ghana	'}, 
  {position: [	36.137741	,	-5.345374	], name: '	Gibraltar	'}, 
  {position: [	71.706936	,	-42.604303	], name: '	Greenland	'}, 
  {position: [	13.443182	,	-15.310139	], name: '	Gambia	'}, 
  {position: [	9.945587	,	-9.696645	], name: '	Guinea	'}, 
  {position: [	16.995971	,	-62.067641	], name: '	Guadeloupe	'}, 
  {position: [	1.650801	,	10.267895	], name: '	Equatorial Guinea	'}, 
  {position: [	39.074208	,	21.824312	], name: '	Greece	'}, 
  {position: [	-54.429579	,	-36.587909	], name: '	South Georgia and the South Sandwich Islands	'}, 
  {position: [	15.783471	,	-90.230759	], name: '	Guatemala	'}, 
  {position: [	13.444304	,	144.793731	], name: '	Guam	'}, 
  {position: [	11.803749	,	-15.180413	], name: '	Guinea-Bissau	'}, 
  {position: [	4.860416	,	-58.93018	], name: '	Guyana	'}, 
  {position: [	31.354676	,	34.308825	], name: '	Gaza Strip	'}, 
  {position: [	22.396428	,	114.109497	], name: '	Hong Kong	'}, 
  {position: [	-53.08181	,	73.504158	], name: '	Heard Island and McDonald Islands	'}, 
  {position: [	15.199999	,	-86.241905	], name: '	Honduras	'}, 
  {position: [	45.1	,	15.2	], name: '	Croatia	'}, 
  {position: [	18.971187	,	-72.285215	], name: '	Haiti	'}, 
  {position: [	47.162494	,	19.503304	], name: '	Hungary	'}, 
  {position: [	-0.789275	,	113.921327	], name: '	Indonesia	'}, 
  {position: [	53.41291	,	-8.24389	], name: '	Ireland	'}, 
  {position: [	31.046051	,	34.851612	], name: '	Israel	'}, 
  {position: [	54.236107	,	-4.548056	], name: '	Isle of Man	'}, 
  {position: [	20.593684	,	78.96288	], name: '	India	'}, 
  {position: [	-6.343194	,	71.876519	], name: '	British Indian Ocean Territory	'}, 
  {position: [	33.223191	,	43.679291	], name: '	Iraq	'}, 
  {position: [	32.427908	,	53.688046	], name: '	Iran	'}, 
  {position: [	64.963051	,	-19.020835	], name: '	Iceland	'}, 
  {position: [	41.87194	,	12.56738	], name: '	Italy	'}, 
  {position: [	49.214439	,	-2.13125	], name: '	Jersey	'}, 
  {position: [	18.109581	,	-77.297508	], name: '	Jamaica	'}, 
  {position: [	30.585164	,	36.238414	], name: '	Jordan	'}, 
  {position: [	36.204824	,	138.252924	], name: '	Japan	'}, 
  {position: [	-0.023559	,	37.906193	], name: '	Kenya	'}, 
  {position: [	41.20438	,	74.766098	], name: '	Kyrgyzstan	'}, 
  {position: [	12.565679	,	104.990963	], name: '	Cambodia	'}, 
  {position: [	-3.370417	,	-168.734039	], name: '	Kiribati	'}, 
  {position: [	-11.875001	,	43.872219	], name: '	Comoros	'}, 
  {position: [	17.357822	,	-62.782998	], name: '	Saint Kitts and Nevis	'}, 
  {position: [	40.339852	,	127.510093	], name: '	North Korea	'}, 
  {position: [	35.907757	,	127.766922	], name: '	South Korea	'}, 
  {position: [	29.31166	,	47.481766	], name: '	Kuwait	'}, 
  {position: [	19.513469	,	-80.566956	], name: '	Cayman Islands	'}, 
  {position: [	48.019573	,	66.923684	], name: '	Kazakhstan	'}, 
  {position: [	19.85627	,	102.495496	], name: '	Laos	'}, 
  {position: [	33.854721	,	35.862285	], name: '	Lebanon	'}, 
  {position: [	13.909444	,	-60.978893	], name: '	Saint Lucia	'}, 
  {position: [	47.166	,	9.555373	], name: '	Liechtenstein	'}, 
  {position: [	7.873054	,	80.771797	], name: '	Sri Lanka	'}, 
  {position: [	6.428055	,	-9.429499	], name: '	Liberia	'}, 
  {position: [	-29.609988	,	28.233608	], name: '	Lesotho	'}, 
  {position: [	55.169438	,	23.881275	], name: '	Lithuania	'}, 
  {position: [	49.815273	,	6.129583	], name: '	Luxembourg	'}, 
  {position: [	56.879635	,	24.603189	], name: '	Latvia	'}, 
  {position: [	26.3351	,	17.228331	], name: '	Libya	'}, 
  {position: [	31.791702	,	-7.09262	], name: '	Morocco	'}, 
  {position: [	43.750298	,	7.412841	], name: '	Monaco	'}, 
  {position: [	47.411631	,	28.369885	], name: '	Moldova	'}, 
  {position: [	42.708678	,	19.37439	], name: '	Montenegro	'}, 
  {position: [	-18.766947	,	46.869107	], name: '	Madagascar	'}, 
  {position: [	7.131474	,	171.184478	], name: '	Marshall Islands	'}, 
  {position: [	41.608635	,	21.745275	], name: '	Macedonia [FYROM]	'}, 
  {position: [	17.570692	,	-3.996166	], name: '	Mali	'}, 
  {position: [	21.913965	,	95.956223	], name: '	Myanmar [Burma]	'}, 
  {position: [	46.862496	,	103.846656	], name: '	Mongolia	'}, 
  {position: [	22.198745	,	113.543873	], name: '	Macau	'}, 
  {position: [	17.33083	,	145.38469	], name: '	Northern Mariana Islands	'}, 
  {position: [	14.641528	,	-61.024174	], name: '	Martinique	'}, 
  {position: [	21.00789	,	-10.940835	], name: '	Mauritania	'}, 
  {position: [	16.742498	,	-62.187366	], name: '	Montserrat	'}, 
  {position: [	35.937496	,	14.375416	], name: '	Malta	'}, 
  {position: [	-20.348404	,	57.552152	], name: '	Mauritius	'}, 
  {position: [	3.202778	,	73.22068	], name: '	Maldives	'}, 
  {position: [	-13.254308	,	34.301525	], name: '	Malawi	'}, 
  {position: [	23.634501	,	-102.552784	], name: '	Mexico	'}, 
  {position: [	4.210484	,	101.975766	], name: '	Malaysia	'}, 
  {position: [	-18.665695	,	35.529562	], name: '	Mozambique	'}, 
  {position: [	-22.95764	,	18.49041	], name: '	Namibia	'}, 
  {position: [	-20.904305	,	165.618042	], name: '	New Caledonia	'}, 
  {position: [	17.607789	,	8.081666	], name: '	Niger	'}, 
  {position: [	-29.040835	,	167.954712	], name: '	Norfolk Island	'}, 
  {position: [	9.081999	,	8.675277	], name: '	Nigeria	'}, 
  {position: [	12.865416	,	-85.207229	], name: '	Nicaragua	'}, 
  {position: [	52.132633	,	5.291266	], name: '	Netherlands	'}, 
  {position: [	60.472024	,	8.468946	], name: '	Norway	'}, 
  {position: [	28.394857	,	84.124008	], name: '	Nepal	'}, 
  {position: [	-0.522778	,	166.931503	], name: '	Nauru	'}, 
  {position: [	-19.054445	,	-169.867233	], name: '	Niue	'}, 
  {position: [	-40.900557	,	174.885971	], name: '	New Zealand	'}, 
  {position: [	21.512583	,	55.923255	], name: '	Oman	'}, 
  {position: [	8.537981	,	-80.782127	], name: '	Panama	'}, 
  {position: [	-9.189967	,	-75.015152	], name: '	Peru	'}, 
  {position: [	-17.679742	,	-149.406843	], name: '	French Polynesia	'}, 
  {position: [	-6.314993	,	143.95555	], name: '	Papua New Guinea	'}, 
  {position: [	12.879721	,	121.774017	], name: '	Philippines	'}, 
  {position: [	30.375321	,	69.345116	], name: '	Pakistan	'}, 
  {position: [	51.919438	,	19.145136	], name: '	Poland	'}, 
  {position: [	46.941936	,	-56.27111	], name: '	Saint Pierre and Miquelon	'}, 
  {position: [	-24.703615	,	-127.439308	], name: '	Pitcairn Islands	'}, 
  {position: [	18.220833	,	-66.590149	], name: '	Puerto Rico	'}, 
  {position: [	31.952162	,	35.233154	], name: '	Palestinian Territories	'}, 
  {position: [	39.399872	,	-8.224454	], name: '	Portugal	'}, 
  {position: [	7.51498	,	134.58252	], name: '	Palau	'}, 
  {position: [	-23.442503	,	-58.443832	], name: '	Paraguay	'}, 
  {position: [	25.354826	,	51.183884	], name: '	Qatar	'}, 
  {position: [	-21.115141	,	55.536384	], name: '	Réunion	'}, 
  {position: [	45.943161	,	24.96676	], name: '	Romania	'}, 
  {position: [	44.016521	,	21.005859	], name: '	Serbia	'}, 
  {position: [	61.52401	,	105.318756	], name: '	Russia	'}, 
  {position: [	-1.940278	,	29.873888	], name: '	Rwanda	'}, 
  {position: [	23.885942	,	45.079162	], name: '	Saudi Arabia	'}, 
  {position: [	-9.64571	,	160.156194	], name: '	Solomon Islands	'}, 
  {position: [	-4.679574	,	55.491977	], name: '	Seychelles	'}, 
  {position: [	12.862807	,	30.217636	], name: '	Sudan	'}, 
  {position: [	60.128161	,	18.643501	], name: '	Sweden	'}, 
  {position: [	1.352083	,	103.819836	], name: '	Singapore	'}, 
  {position: [	-24.143474	,	-10.030696	], name: '	Saint Helena	'}, 
  {position: [	46.151241	,	14.995463	], name: '	Slovenia	'}, 
  {position: [	77.553604	,	23.670272	], name: '	Svalbard and Jan Mayen	'}, 
  {position: [	48.669026	,	19.699024	], name: '	Slovakia	'}, 
  {position: [	8.460555	,	-11.779889	], name: '	Sierra Leone	'}, 
  {position: [	43.94236	,	12.457777	], name: '	San Marino	'}, 
  {position: [	14.497401	,	-14.452362	], name: '	Senegal	'}, 
  {position: [	5.152149	,	46.199616	], name: '	Somalia	'}, 
  {position: [	3.919305	,	-56.027783	], name: '	Suriname	'}, 
  {position: [	0.18636	,	6.613081	], name: '	São Tomé and Príncipe	'}, 
  {position: [	13.794185	,	-88.89653	], name: '	El Salvador	'}, 
  {position: [	34.802075	,	38.996815	], name: '	Syria	'}, 
  {position: [	-26.522503	,	31.465866	], name: '	Swaziland	'}, 
  {position: [	21.694025	,	-71.797928	], name: '	Turks and Caicos Islands	'}, 
  {position: [	15.454166	,	18.732207	], name: '	Chad	'}, 
  {position: [	-49.280366	,	69.348557	], name: '	French Southern Territories	'}, 
  {position: [	8.619543	,	0.824782	], name: '	Togo	'}, 
  {position: [	15.870032	,	100.992541	], name: '	Thailand	'}, 
  {position: [	38.861034	,	71.276093	], name: '	Tajikistan	'}, 
  {position: [	-8.967363	,	-171.855881	], name: '	Tokelau	'}, 
  {position: [	-8.874217	,	125.727539	], name: '	Timor-Leste	'}, 
  {position: [	38.969719	,	59.556278	], name: '	Turkmenistan	'}, 
  {position: [	33.886917	,	9.537499	], name: '	Tunisia	'}, 
  {position: [	-21.178986	,	-175.198242	], name: '	Tonga	'}, 
  {position: [	38.963745	,	35.243322	], name: '	Turkey	'}, 
  {position: [	10.691803	,	-61.222503	], name: '	Trinidad and Tobago	'}, 
  {position: [	-7.109535	,	177.64933	], name: '	Tuvalu	'}, 
  {position: [	23.69781	,	120.960515	], name: '	Taiwan	'}, 
  {position: [	-6.369028	,	34.888822	], name: '	Tanzania	'}, 
  {position: [	48.379433	,	31.16558	], name: '	Ukraine	'}, 
  {position: [	1.373333	,	32.290275	], name: '	Uganda	'}, 
  {position: [	37.09024	,	-95.712891	], name: '	United States	'}, 
  {position: [	-32.522779	,	-55.765835	], name: '	Uruguay	'}, 
  {position: [	41.377491	,	64.585262	], name: '	Uzbekistan	'}, 
  {position: [	41.902916	,	12.453389	], name: '	Vatican City	'}, 
  {position: [	12.984305	,	-61.287228	], name: '	Saint Vincent and the Grenadines	'}, 
  {position: [	6.42375	,	-66.58973	], name: '	Venezuela	'}, 
  {position: [	18.420695	,	-64.639968	], name: '	British Virgin Islands	'}, 
  {position: [	18.335765	,	-64.896335	], name: '	U.S. Virgin Islands	'}, 
  {position: [	14.058324	,	108.277199	], name: '	Vietnam	'}, 
  {position: [	-15.376706	,	166.959158	], name: '	Vanuatu	'}, 
  {position: [	-13.768752	,	-177.156097	], name: '	Wallis and Futuna	'}, 
  {position: [	-13.759029	,	-172.104629	], name: '	Samoa	'}, 
  {position: [	42.602636	,	20.902977	], name: '	Kosovo	'}, 
  {position: [	15.552727	,	48.516388	], name: '	Yemen	'}, 
  {position: [	-12.8275	,	45.166244	], name: '	Mayotte	'}, 
  {position: [	-30.559482	,	22.937506	], name: '	South Africa	'}, 
  {position: [	-13.133897	,	27.849332	], name: '	Zambia	'}, 
  {position: [	-19.015438	,	29.154857	], name: '	Zimbabwe	'}, 
  ];
  console.log(data);
  
  return (
    <div style={{ height: '400px', width: '400px', background: 'gray' }}>
      <MapContainer center={data[0].position} zoom={15} scrollWheelZoom={true}  >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          data.map((marker) => (
            <InfoBox position={marker.position} name={marker.name} key={marker.name}/>
          ))
        }
        
      </MapContainer>
    </div>
  );
};
