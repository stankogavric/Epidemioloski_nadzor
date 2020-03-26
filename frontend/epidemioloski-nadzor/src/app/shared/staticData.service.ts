
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class StaticDataService {

    public url = "http://localhost:8080";

    constructor(private http: HttpClient) { }

    getRiskFactors(){
        return ["Trudnoća trimestar", "Postporođajni period", "Kardiovaskularna bolest", "Imunodeficijencija", "Dijabetes", "Bolest bubrega", "Bolest jetre", "Bolest pluća", "Hronična neurološka bolest", "Maligna bolest"]
    }

    getSymptoms() {
        return ['Povišena temperatura', 'Otežano disanje', 'Bol u mišićima', 'Bol u grudima', 'Bol u trbuhu', 'Bol u zglobovima', "Opšta slabost", "Proliv", "Mučnina", "Kašalj", "Upala grla", "Glavobolja", "Curenje nosa", "Uznemirenost", "Faringealni eskudat", "Koma", "Abnormalni nalaz radiografije pluća", "Konjuktivitis", "Konvulzija", "Drugi"];
    }

    getCities() {
        return ["Ada", "Adaševci", "Adorjan", "Adrani", "Aleksa Šantić", "Aleksandrovac", "Aleksandrovo", "Aleksinac", "Aleksinački Rudnik", "Alibunar", "Aljinovići", "Apatin", "Aradac", "Aranđelovac", "Arilje", "Ašanja", "Azanja", "Babušnica", "Bač", "Bačevci", "Bačina", "Bačinci", "Bačka Palanka", "Bačka Topola", "Bački Breg", "Bački Brestovac", "Bački Gračac", "Bački Jarak", "Bački Monoštor", "Bački Petrovac", "Bački Sokolac", "Bački Vinogradi", "Bačko Dobro Polje", "Bačko Gradište", "Bačko Novo Selo", "Bačko Petrovo Selo", "Badnjevac", "Badovinci", "Bagrdan", "Bajina Bašta", "Bajmok", "Bajša", "Balajnac", "Baljevac", "Banatska Dubica", "Banatska Palanka", "Banatska Subotica", "Banatska Topola", "Banatski Brestovac", "Banatski Despotovac", "Banatski Dvor", "Banatski Karlovac", "Banatsko Aranđelovo", "Banatsko Karađorđevo", "Banatsko Novo Selo", "Banatsko Veliko Selo", "Banja", "Banja (kod Priboja)", "Banja Koviljača", "Banjani", "Banjska", "Banoštor", "Banovci-Dunav", "Banovo Polje", "Barajevo", "Baranda", "Barbatovac", "Bare", "Barič", "Barice", "Barlovo", "Baroševac", "Bašaid", "Batočina", "Batrovci", "Batuse", "Bavanište", "Bečej", "Begeč", "Bela Crkva", "Bela Palanka", "Bela Voda", "Bela Zemlja", "Belanovica", "Bele Vode", "Belegiš", "Beli Potok", "Beljina", "Belo Blato", "Beloljin", "Belosavci", "Beloševac", "Belotinac", "Belušić", "Beočin", "Beograd", "Berkasovo", "Bešenovo", "Beška", "Bezdan", "Bigrenica", "Bikić Do", "Bikovo", "Biljača", "Bingula", "Bioska", "Bistar", "Bistrica", "Blace", "Blaževo", "Bobovo", "Bočar", "Bogaraš", "Bogatić", "Bogojevce", "Bogojevo", "Bogovađa", "Bogovina", "Bogutovac", "Bojnik", "Boka", "Boljevac", "Boljkovci", "Bor", "Borski Brestovac", "Bosilegrad", "Bošnjace", "Bošnjane", "Bosut", "Botoš", "Božetići", "Boževac", "Božica", "Bođani", "Braćevac", "Bradarac", "Braničevo", "Brankovina", "Bratljevo", "Brekovo", "Bresnica", "Brestovac", "Brestovačka Banja", "Brezjak", "Brezna", "Brezova", "Brezovica", "Brežđe", "Brgule", "Brodarevo", "Brus", "Brusnik", "Brvenik", "Brza Palanka", "Brzan", "Brzeće", "Brzi Brod", "Brđani", "Bučje", "Budisava", "Bujanovac", "Bukorovac", "Bukovac", "Bukovica", "Bukovik", "Bunar", "Burdimo", "Burovac", "Busilovac", "Buđanovci", "Čačak", "Čajetina", "Čalma", "Čantavir", "Čečina", "Čelarevo", "Čenej", "Čenta", "Čerević", "Cerovac", "Čestereg", "Ćićevac", "Čitluk", "Čoka", "Čonoplja", "Čortanovci", "Crepaja", "Crkvine", "Crna Bara", "Crna Trava", "Crnoklište", "Crvena Crkva", "Crvena Reka", "Crvenka", "Čukojevac", "Čumić", "Ćuprija", "Čurug", "Darosava", "Debeljača", "Debrc", "Deč", "Deliblato", "Delimeđe", "Deronje", "Desimirovac", "Despotovac", "Despotovo", "Devojački Bunar", "Deževa", "Dimitrovgrad", "Divci", "Divčibare", "Divljaka", "Divoš", "Divostin", "Dobra", "Dobri Do", "Dobrić", "Dobrica", "Dobrinci", "Dolac", "Doljevac", "Dolovo", "Donja Bela Reka", "Donja Borina", "Donja Gušterica", "Donja Kamenica", "Donja Ljubata", "Donja Mutnica", "Donja Orovica", "Donja Rečica", "Donja Šatornja", "Donja Trnava", "Donje Crnatovo", "Donje Crniljevo", "Donje Međurovo", "Donje Vidovo", "Donje Zuniče", "Donji Dušnik", "Donji Krčin", "Donji Milanovac", "Donji Stajevac", "Doroslovo", "Dračić", "Draginac", "Draginje", "Draglica", "Dragobraća", "Dragocvet", "Dragolj", "Dragoševac", "Dragovo", "Drajkovce", "Draževac", "Drenovac", "Drugovac", "Dublje", "Dubočane", "Duboka", "Dubovac", "Dubovo", "Dubravica", "Dudovica", "Duga Poljana", "Dugo Polje", "Dupljaja", "Džep", "Džigolj", "Ečka", "Elemir", "Erdeč", "Erdevik", "Farkaždin", "Feketić", "Futog", "Gadžin Han", "Gaj", "Gajdobra", "Gakovo", "Gamzigradska Banja", "Gardinovci", "Gibarac", "Glavinci", "Globoder", "Glogonj", "Glogovac", "Gložan", "Glušci", "Gnjilan", "Golobok", "Golubac", "Golubinci", "Goračići", "Gornja Dobrinja", "Gornja Draguša", "Gornja Lisina", "Gornja Sabanta", "Gornja Toplica", "Gornja Toponica", "Gornja Trepča", "Gornja Trnava", "Gornje Dvorane", "Gornji Barbeš", "Gornji Breg", "Gornji Matejevac", "Gornji Milanovac", "Gornji Stepoš", "Gornji Stupanj", "Gospođinci", "Gostun", "Grabovac", "Grabovci", "Grabovica", "Gračanica", "Gradskovo", "Grdelica", "Grebenac", "Grgurevci", "Grlište", "Grljan", "Grošnica", "Gruža", "Guberevac", "Guča", "Gudurica", "Gunaroš", "Guševac", "Hajdučica", "Hajdukovo", "Hetin", "Horgoš", "Horgoš granični prelaz", "Hrtkovci", "Idvor", "Ilandža", "Ilićevo", "Ilinci", "Inđija", "Irig", "Ivanjica", "Ivanovo", "Izbište", "Iđoš", "Jabučje", "Jabuka", "Jabukovac", "Jadranska Lešnica", "Jagnjilo", "Jagodina", "Jamena", "Jankov Most", "Janošik", "Jarak", "Jarkovac", "Jarmenovci", "Jaša Tomić", "Jasenovo", "Jasika", "Jasikovo", "Jazak", "Jazovo", "Jelašnica", "Jelen Do", "Jelovik", "Jermenovci", "Ježevica", "Jošanica", "Jošanička Banja", "Jovac", "Jovanovac", "Jugbogdanovac", "Junkovac", "Kać", "Kačarevo", "Kalna", "Kaluđerica", "Kamenica", "Kanjiža", "Kaona", "Kaonik", "Karan", "Karavukovo", "Karađorđevo", "Karlovčić", "Katun", "Kelebija", "Kelebija gran. prelaz", "Kevi", "Kikinda", "Kisač", "Kladovo", "Klek", "Klenak", "Klenike", "Klenje", "Kličevac", "Klisura", "Kljajićevo", "Klokočevac", "Knić", "Knićanin", "Knjaževac", "Kobišnica", "Koceljeva", "Kokin Brod", "Kolare", "Kolari", "Kolut", "Komirić", "Konak", "Konarevo", "Končarevo", "Konjuh", "Kopaonik", "Koprivnica", "Koraćica", "Korbevac", "Korbovo", "Korenita", "Korman", "Kosančić", "Kosjerić", "Kosovo Polje", "Kosovska Kamenica", "Kosovska Mitrovica", "Kostojevići", "Kostolac", "Kotraža", "Kovačevac", "Kovačica", "Kovilj", "Kovin", "Kragujevac", "Krajišnik", "Kraljevci", "Kraljevo", "Krčedin", "Kremna", "Krepoljin", "Kriva Feja", "Krivaja", "Krivelj", "Krivi Vir", "Krnješevci", "Krnjevo", "Krupac", "Krupanj", "Krušar", "Kruščić", "Krušedol", "Kruševac", "Kruševica", "Kučevo", "Kucura", "Kukljin", "Kukujevci", "Kula", "Kulina", "Kulpin", "Kumane", "Kupci", "Kupinik", "Kupinovo", "Kupusina", "Kuršumlija", "Kuršumlijska Banja", "Kusadak", "Kusić", "Kušići", "Kušiljevo", "Kuštilj", "Kuzmin", "Laćarak", "Lajkovac", "Lalić", "Lalinac", "Laplje Selo", "Lapovo", "Lapovo (Varoš)", "Lazarevac", "Lazarevo", "Laznica", "Lađevci", "Lebane", "Lece", "Ledinci", "Lelić", "Lenovac", "Lepenac", "Lepenica", "Lepina", "Leposavić", "Lešak", "Leskovac", "Lešnica", "Ležimir", "Lički Hanovi", "Lipar", "Lipe", "Lipnički Šor", "Lipolist", "Ljig", "Ljuba", "Ljuberađa", "Ljubiš", "Ljubovija", "Ljukovo", "Ljutovo", "Loćika", "Lok", "Lokve", "Lovćenac", "Loznica", "Lozovik", "Lubnica", "Lučani", "Lug", "Lugavčina", "Lukare", "Lukićevo", "Lukino Selo", "Lukovo", "Lukovska Banja", "Lunovo Selo", "Lužnice", "Mačkat", "Mačvanska Mitrovica", "Mačvanski Pričinović", "Maglić", "Majdan", "Majdanpek", "Majilovac", "Majur", "Mala Bosna", "Mala Krsna", "Mala Moštanica", "Mala Plana", "Malča", "Male Pčelice", "Male Pijace", "Mali Beograd", "Mali Izvor", "Mali Iđoš", "Mali Jasenovac", "Mali Požarevac", "Mali Zvornik", "Malo Crniće", "Malo Krčmare", "Malošište", "Manojlovce", "Manđelos", "Maradik", "Margita", "Markovac", "Markovica", "Maršić", "Martinci", "Martonoš", "Mataruška Banja", "Medoševac", "Medveđa", "Melenci", "Melenci-Rusanda", "Meljak", "Merćez", "Merdare", "Merošina", "Metlić", "Metovnica", "Međa", "Međulužje", "Međurečje", "Mihajlovac", "Mihajlovo", "Mijatovac", "Milatovac", "Milentija", "Mileševo", "Miletićevo", "Miloševac", "Miloševo", "Milutovac", "Minićevo", "Mionica", "Mirosaljci", "Miroševce", "Mišićevo", "Mitrovac", "Mladenovo", "Mokra Gora", "Mokrin", "Mol", "Molovin", "Morović", "Mošorin", "Mozgovo", "Mramor", "Mramorak", "Mrčajevci", "Mršinci", "Muhovac", "Mužlja", "Nadalj", "Nakovo", "Natalinci", "Negotin", "Neresnica", "Neštin", "Neuzina", "Nikinci", "Nikoličevo", "Nikolinci", "Niš", "Niševac", "Niška Banja", "Noćaj", "Nova Crnja", "Nova Crvenka", "Nova Gajdobra", "Nova Pazova", "Nova Varoš", "Novi Banovci", "Novi Bečej", "Novi Bračin", "Novi Itebej", "Novi Karlovci", "Novi Kneževac", "Novi Kozarci", "Novi Kozjak", "Novi Pazar", "Novi Sad", "Novi Slankamen", "Novi Žednik", "Novo Miloševo", "Novo Orahovo", "Novo Selo", "Obrenovac", "Obrež", "Obrovac", "Odžaci", "Ogar", "Omoljica", "Oparić", "Opovo", "Orane", "Orašac", "Oreškovica", "Orid", "Orlovat", "Orom", "Osanica", "Osečina", "Osipaonica", "Ostojićevo", "Oštrelj", "Ostrovica", "Ostružnica", "Ovčar Banja", "Pačir", "Padej", "Padež", "Padina", "Palić", "Pambukovica", "Pančevo", "Panonija", "Paraćin", "Parage", "Parteš", "Parunovac", "Pasjane", "Pavliš", "Pečenjevce", "Pećinci", "Pecka", "Pejkovac", "Pepeljevac", "Perlez", "Perućac", "Petlovača", "Petrovac", "Petrovaradin", "Pinosava", "Pirot", "Pivnice", "Plana", "Plandište", "Platičevo", "Plavna", "Plažane", "Plemetina", "Pleš", "Pločica", "Pobeda", "Počekovina", "Poćuta", "Podgorac", "Podunavci", "Podvis", "Podvrška", "Poganovo", "Pojate", "Poljana", "Poljska Ržana", "Popinci", "Popovac", "Popučke", "Porodin", "Potočac", "Požarevac", "Požega", "Prahovo", "Pranjani", "Predejane", "Prekonoga", "Preljina", "Preševo", "Preševo-terminal", "Prevešt", "Prhovo", "Priboj", "Priboj Vranjski", "Pričević", "Prigrevica", "Prijepolje", "Prilički Kiseljak", "Prilužje", "Privina Glava", "Prnjavor (Mačvanski)", "Prokuplje", "Prolom Banja", "Provo", "Pružatovac", "Pukovac", "Putinci", "Rabrovo", "Rača", "Rača Kragujevačka", "Radalj", "Radičević", "Radinac", "Radljevo", "Radojevo", "Radovnica", "Radujevac", "Rainovača", "Rajković", "Rakovac", "Ralja", "Ranilović", "Ranilug", "Ranovac", "Rašanac", "Raševica", "Raška", "Rastina", "Rataje", "Ratari", "Ratina", "Ratkovo", "Ravna Dubrava", "Ravni", "Ravni Topolovac", "Ravnje", "Ravno Selo", "Ražana", "Ražanj", "Razbojna", "Razgojna", "Rekovac", "Resavica", "Resnik", "Rgotina", "Ribare", "Ribari", "Ribariće", "Ribarska Banja", "Ripanj", "Ristovac", "Riđica", "Roćevići", "Rogača", "Rogačica", "Roge", "Rogljevo", "Rožanstvo", "Rudna Glava", "Rudnica", "Rudnik", "Rudno", "Rudovci", "Ruma", "Rumenka", "Rušanj", "Ruski Krstur", "Rusko Selo", "Rutevac", "Šabac", "Sajan", "Šajkaš", "Sakule", "Salaš", "Salaš Noćajski", "Samaila", "Samoš", "Sanad", "Saraorci", "Šarbanovac", "Šarbanovac-Timok", "Šašinci", "Sastav Reka", "Sastavci", "Savinac", "Savino Selo", "Seča Reka", "Sečanica", "Sečanj", "Sedlare", "Sefkerin", "Selenča", "Seleuš", "Selevac", "Senje", "Senjski Rudnik", "Senta", "Šepšin", "Šetonje", "Sevojno", "Sibač", "Sićevo", "Šid", "Sijarinska Banja", "Sikirica", "Sikole", "Silbaš", "Šilovo", "Šimanovci", "Siokovac", "Sip", "Sipić", "Sirča", "Sirig", "Sirogojno", "Sivac", "Sjenica", "Skela", "Skobalj", "Skorenovac", "Slatina", "Slavkovica", "Šljivovac", "Šljivovica", "Šljivovo", "Slovac", "Smederevo", "Smederevska Palanka", "Smilovci", "Smoljinac", "Sočanica", "Sokobanja", "Sombor", "Sonta", "Sopot", "Sot", "Srbobran", "Srednjevo", "Sremčica", "Sremska Kamenica", "Sremska Mitrovica", "Sremska Rača", "Sremski Karlovci", "Sremski Mihaljevci", "Srpska Crnja", "Srpski Itebej", "Srpski Krstur", "Srpski Miletić", "Stajićevo", "Stalać", "Stanišić", "Stapar", "Stara Moravica", "Stara Pazova", "Starčevo", "Stari Banovci", "Stari Lec", "Stari Slankamen", "Stari Žednik", "Staro Selo", "Štavalj", "Stave", "Stejanovci", "Stenjevac", "Stepanovićevo", "Stepojevac", "Štitar", "Štitare", "Stojnik", "Stopanja", "Stragari", "Straža", "Strelac", "Štrpce", "Stubal", "Stubica", "Štubik", "Stubline", "Studenica", "Subotica", "Subotica (kod Svijanca)", "Subotinac", "Subotište", "Sukovo", "Sumrakovac", "Šupljak", "Supska", "Surduk", "Surdulica", "Šurjan", "Susek", "Sutjeska", "Sveti Ilija", "Svetozar Miletić", "Svilajnac", "Svileuva", "Svilojevo", "Svojnovo", "Svođe", "Svrljig", "Takovo", "Taraš", "Tavankut", "Tekeriš", "Tekija", "Telečka", "Temerin", "Temska", "Tešica", "Titel", "Toba", "Tomaševac", "Tomislavci", "Topola", "Topolovnik", "Toponica", "Torak", "Torda", "Tornjoš", "Totovo Selo", "Tovariševo", "Trbušani", "Trešnjevac", "Trešnjevica", "Trgovište", "Trnavci", "Trnjane", "Tršić", "Trstenik", "Trupale", "Tulare", "Turekovac", "Turija", "Tutin", "Ub", "Ugao", "Ugrinovci", "Uljma", "Umka", "Urovica", "Ušće", "Utrine", "Uzdin", "Užice", "Uzovnica", "Vajska", "Valjevo", "Varda", "Varna", "Varoš", "Varvarin", "Vašica", "Vasilj", "Vatin", "Velebit", "Velesnica", "Velika Drenova", "Velika Grabovnica", "Velika Greda", "Velika Ivanča", "Velika Jasikova", "Velika Krsna", "Velika Lomnica", "Velika Moštanica", "Velika Plana", "Velika Reka", "Velika Vrbnica", "Veliki Borak", "Veliki Crljeni", "Veliki Gaj", "Veliki Izvor", "Veliki Popović", "Veliki Radinci", "Veliki Šiljegovac", "Veliki Trnovac", "Veliko Bonjince", "Veliko Gradište", "Veliko Laole", "Veliko Orašje", "Veliko Središte", "Venčane", "Veternik", "Viča", "Vilovo", "Vina", "Vionica", "Višnjevac", "Višnjićevo", "Visočka Ržana", "Vitanovac", "Vitkovac", "Vitoševac", "Vladičin Han", "Vladimirci", "Vladimirovac", "Vlajkovac", "Vlase", "Vlaška", "Vlasotince", "Vodanj", "Voganj", "Vojka", "Vojska", "Vojvoda Stepa", "Vojvodinci", "Voluja", "Vračev Gaj", "Vraćevšnica", "Vranić", "Vranje", "Vranjska Banja", "Vranovo", "Vratarnica", "Vražogrnac", "Vrba", "Vrbas", "Vrbica", "Vrbovac", "Vrćenovica", "Vrdnik", "Vreoci", "Vrhpolje", "Vrmdža", "Vrnjačka Banja", "Vrnjci", "Vršac", "Vučje", "Vukovac", "Žabalj", "Žabari", "Zablaće", "Zabojnica", "Zabrežje", "Zagajica", "Žagubica", "Zajača", "Zvezdan", "Zaplanjska Toponica", "Zasavica", "Zavlaka", "Zdravinje", "Željuše", "Žiča", "Žirovnica", "Žitište", "Žitkovac", "Žitni Potok", "Žitorađa", "Zlatibor", "Zlatica", "Zlodol", "Zlot", "Zmajevo", "Zminjak", "Zrenjanin", "Zubin Potok", "Žuč", "Zuce", "Zvečan", "Zvonce", "Đala", "Đunis", "Đurđevo", "Đurđin"];
    }

    getCountries() {
        return ["Angola", "Alandska ostrva", "Albanija", "Alžir", "Američka Samoa", "Andora", "Angola", "Angvila", "Antarktik", "Antigva i Barbuda", "Argentina", "Armenija", "Aruba", "Australija", "Austrija", "Avganistan", "Azerbejdžan", "Bahami", "Bahrein", "Bangladeš", "Barbados", "Belgija", "Belize", "Belorusija", "Benin", "Bermudi", "Bocvana", "Bolivija", "Bonaire, Sint Eustazije i Saba", "Bosna i Hercegovina", "Božićna Ostrva", "Brazil", "Britanska Teritorija Indijskog Okeana", "Brunej Darusalam", "Bugarska", "Burkina Faso", "Burundi", "Butan", "Buve Ostrvo", "Centralnoafrička Republika", "Crna Gora", "Danska", "Devičanska Ostrva (Britanska)", "Devičanska Ostrva (SAD)", "Dominika", "Dominikanska Republika", "Dzersi", "Džibuti", "Egipat", "Ekvador", "Ekvatorijalna Gvineja", "El Salvador", "Eritreja", "Estonija", "Etiopija", "Evropska unija", "Farska Ostrva", "Fidži", "Filipini", "Finska", "Foklandska Ostrva (Malvini)", "Francuska", "Francuska Gijana", "Francuska Polinezija", "Gabon", "Gambija", "Gana", "Gernzi", "Gibraltar", "Grenada", "Grenland", "Gruzija", "Grčka", "Guam", "Gvadelupe", "Gvajana", "Gvatemala", "Gvineja", "Gvineja Bisao", "Haiti", "Herd i Mekdonald Ostrva", "Holandija", "Honduras", "Hong Kong", "Hrvatska", "Indija", "Indonezija", "Irak", "Iran (Islamska Republika)", "Irska", "Island", "Isle of man", "Italija", "Izrael", "Jamajka", "Japan", "Jemen", "Jordan", "Juzni Sudan", "Južna Afrika", "Južna Džordžija i Južna Sendvič Ostrva", "Južna Francuska Teritorija", "Kajmanska Ostrva", "Kambodža", "Kamerun", "Kanada", "Katar", "Kazahstan", "Kenija", "Kina", "Kipar", "Kirgistan", "Kiribati", "Kokosova (Kiling) Ostrva", "Kolumbija", "Komori", "Kongo", "Kongo, Demokratska Republika", "Koreja, Demokratska Narodna Republika", "Koreja, Republika", "Kostarika", "Kuba", "Kukova Ostrva", "Kurasao", "Kuvajt", "Laos", "Lesoto", "Letonija", "Liban", "Liberija", "Libija", "Lihtenštajn", "Litvanija", "Luksemburg", "Madagaskar", "Majote", "Makao", "Malavi", "Maldivi", "Malezija", "Mali", "Malta", "Maroko", "Martinik", "Maršalska Ostrva", "Mauricijus", "Mauritanija", "Mađarska", "Medjunarodne finansijske organizacije", "Meksiko", "Mikronezija (Ujedinjene Države)", "Mjanmar", "Moldavija, Republika", "Monako", "Mongolija", "Monserat", "Mozambik", "Namibija", "Nauru", "Nemačka", "Nepal", "Niger", "Nigerija", "Nikaragva", "Niue", "Norfolk Ostrvo", "Norveška", "Nova Kaledonija", "Novi Zeland", "Obala Slonovače", "Oman", "Pakistan", "Palau", "Palestina", "Panama", "Papua Nova Gvineja", "Paragvaj", "Peru", "Pitkern", "Poljska", "Portoriko", "Portugalija", "Reinion", "Republika Severna Makedonija", "Republika Srpska", "Ruanda", "Rumunija", "Ruska Federacija", "SAD", "Samoa", "San Marino", "Sao Tome i Principe", "Saudijska Arabija", "Sejšeli", "Senegal", "Sent Kits - Nevis", "Sent Lusija", "Sent Vinsent i Grenadini", "Sentpjer i Mikelon", "Severnomarijanska Ostrva", "Sijera Leone", "Singapur", "Sirijska Arapska Republika", "Slovačka", "Slovenija", "Solomonska Ostrva", "Somalija", "Srbija", "St Martin(holandski deo)", "Sudan", "Surinam", "Svalbard i Jan Majen", "Svazilend", "Sveta Jelena", "Sveti Bartolomej", "Tadžikistan", "Tajland", "Tajvan, Kineska Provincija", "Tanzanija", "Timor-Leste DR", "Togo", "Tokelau", "Tonga", "Trinidad i Tobago", "Tunis", "Turkmenistan", "Turks i Kaikos Ostrva", "Turska", "Tuvalu", "Uganda", "Ujedinjene Države Manjih Udaljenih Ostrva", "Ujedinjeni Arapski Emirati", "Ukrajina", "Urugvaj", "Uzbekistan", "Vanuatu", "Vatikan - Sveta Stolica", "Velika Britanija", "Venecuela", "Vijetnam", "Volis i Futuna Ostrva", "Zambija", "Zapadna Sahara", "Zelenortska Ostrva", "Zimbabve", "Čad", "Češka Republika", "Čile", "Španija", "Šri Lanka", "Švajcarska", "Švedska"];
    }

}
