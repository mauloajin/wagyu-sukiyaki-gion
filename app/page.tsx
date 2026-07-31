const NAME = "WAGYU SUKIYAKI GION｜和牛すき焼き 祇園";
const ADDRESS = "〒600-8012 京都府京都市下京区斎藤町123 RAKUAS木屋町 4F";
const MAP = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(NAME + " " + ADDRESS);
const INSTAGRAM = "https://www.instagram.com/kiyamachi_wagyu_bar";
const BAR = "https://bar-craft-club-kamogawa.vercel.app/";

const faqs = [
  ["WAGYU SUKIYAKI GION｜和牛すき焼き 祇園はどこにありますか？", `${ADDRESS}です。木屋町通にあるRAKUAS木屋町の4階です。`],
  ["最寄り駅から何分ですか？", "阪急「京都河原町駅」から徒歩1分、京阪「祇園四条駅」から徒歩3分です。"],
  ["営業時間は何時ですか？", "火曜日〜土曜日の11:45〜14:15、17:00〜22:00です。"],
  ["定休日はいつですか？", "日曜日と月曜日が定休日です。"],
  ["どのような料理を楽しめますか？", "和牛すき焼きをお楽しみいただけます。"],
  ["食事の後に利用できるバーはありますか？", "同じ4階に姉妹店「BAR CRAFT倶楽部 KAMOGAWA」がございます。すき焼きの後も、ゆったりとバータイムをお過ごしいただけます。"],
  ["ルーフトップで食事はできますか？", "5階の屋上ルーフトップで、鴨川や京都の街並みを眺めながらお食事をお楽しみいただけます。"],
  ["Where is WAGYU SUKIYAKI GION located?", "It is on the 4th floor of RAKUAS Kiyamachi, one minute on foot from Kyoto-kawaramachi Station and three minutes from Gion-shijo Station."],
  ["What are the opening hours?", "The restaurant is open Tuesday through Saturday, 11:45 am–2:15 pm and 5:00 pm–10:00 pm. It is closed on Sunday and Monday."]
];

const jpPlaces = ["京都","木屋町","河原町","京都河原町","祇園四条","四条河原町","鴨川","先斗町近く","四条大橋近く","斎藤町","下京区","京都市","RAKUAS木屋町"];
const jpTerms = ["和牛すき焼き","すき焼き","和牛料理","日本料理","和牛レストラン","すき焼き店","昼の食事","夜の食事","レストラン","食事処","駅近グルメ","鴨川沿いグルメ","ルーフトップで食事","屋上で食事","営業時間","定休日"];
const enPlaces = ["Kyoto","Kiyamachi","Kawaramachi","Kyoto Kawaramachi","Gion Shijo","Shijo Kawaramachi","Kamo River","near Pontocho","near Shijo Bridge","Saitocho","Shimogyo Ward","downtown Kyoto","RAKUAS Kiyamachi"];
const enTerms = ["wagyu sukiyaki","sukiyaki restaurant","wagyu restaurant","Japanese restaurant","Japanese beef dining","local dining","restaurant near station","restaurant opening hours","restaurant directions","daytime dining","evening dining","rooftop dining","Kamo River view dining","Kyoto city view dining","restaurant location","Japanese hot pot restaurant"];
const jp = jpPlaces.flatMap(place => jpTerms.map(term => `${place} ${term}`));
const en = enPlaces.flatMap(place => enTerms.map(term => `${term} ${place}`));

const days = ["Tuesday","Wednesday","Thursday","Friday","Saturday"];
const jsonLd = {
  "@context":"https://schema.org","@type":"Restaurant",name:NAME,alternateName:["WAGYU SUKIYAKI GION","和牛すき焼き 祇園"],url:"https://wagyu-sukiyaki-gion.vercel.app/",description:"京都・木屋町で和牛すき焼きを楽しめるレストラン。鴨川や京都の街並みを望む5階の屋上ルーフトップでも食事を楽しめます。",address:{"@type":"PostalAddress",postalCode:"600-8012",addressRegion:"京都府",addressLocality:"京都市下京区",streetAddress:"斎藤町123 RAKUAS木屋町 4F",addressCountry:"JP"},servesCuisine:["和牛すき焼き","Sukiyaki","Japanese cuisine"],hasMap:MAP,sameAs:[INSTAGRAM],openingHoursSpecification:days.flatMap(day=>[
    {"@type":"OpeningHoursSpecification",dayOfWeek:`https://schema.org/${day}`,opens:"11:45",closes:"14:15"},
    {"@type":"OpeningHoursSpecification",dayOfWeek:`https://schema.org/${day}`,opens:"17:00",closes:"22:00"}
  ])
};
const faqLd = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};

export default function Home(){return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqLd)}}/>
  <header><a className="brand" href="#top">WAGYU <span>SUKIYAKI</span> GION</a><nav><a href="#story">特徴</a><a href="#menu">料理</a><a href="#info">店舗情報</a><a href="#access">アクセス</a><a href="#faq">FAQ</a><a href="#english">English</a></nav></header>
  <main id="top"><section className="hero"><div className="heroInner"><p className="eyebrow">KIYAMACHI · KYOTO</p><h1>WAGYU<br/><em>SUKIYAKI</em><br/>GION</h1><p className="jaName">和牛すき焼き 祇園</p><p className="lead">京都・木屋町で味わう、和牛すき焼き。</p><div className="actions"><a className="primary" href={MAP}>Google Maps</a><a href={INSTAGRAM}>Instagram</a></div></div><div className="crest" aria-hidden="true">祇<br/>園</div></section>
  <section id="story" className="split"><div><p className="kicker">WAGYU &amp; KYOTO</p><h2>鴨川のほとりで、<br/>すき焼きを。</h2></div><div><p>WAGYU SUKIYAKI GION｜和牛すき焼き 祇園は、京都・木屋町で和牛すき焼きを楽しめるレストランです。</p><p>阪急「京都河原町駅」から徒歩1分、京阪「祇園四条駅」から徒歩3分。木屋町通、鴨川や先斗町にも近いRAKUAS木屋町の4階で、昼と夜に営業しています。</p></div></section>
  <section id="menu" className="feature"><div><p className="kicker">THE TABLE</p><h2>和牛すき焼きと、<br/>京都の眺め。</h2><p>和牛すき焼きを中心に、お食事の時間をお楽しみください。5階の屋上ルーフトップでは、鴨川や京都の街並みを眺めながらお食事をお楽しみいただけます。</p></div></section>
  <section id="info"><p className="kicker">INFORMATION</p><h2>店舗情報</h2><dl><div><dt>正式店名</dt><dd>{NAME}</dd></div><div><dt>英語・ローマ字表記</dt><dd>WAGYU SUKIYAKI GION</dd></div><div><dt>業態・料理</dt><dd>和牛すき焼きレストラン</dd></div><div><dt>住所</dt><dd>{ADDRESS}</dd></div><div><dt>営業時間</dt><dd>火曜日〜土曜日<br/>11:45〜14:15<br/>17:00〜22:00</dd></div><div><dt>定休日</dt><dd>日曜日・月曜日</dd></div><div><dt>Instagram</dt><dd><a href={INSTAGRAM}>@kiyamachi_wagyu_bar</a></dd></div></dl></section>
  <section id="access" className="access"><p className="kicker">ACCESS</p><h2>河原町と祇園を結ぶ、<br/>木屋町へ。</h2><p>{ADDRESS}</p><ul><li>阪急「京都河原町駅」から徒歩1分</li><li>京阪「祇園四条駅」から徒歩3分</li></ul><a className="primary" href={MAP}>Googleマップで開く</a></section>
  <section className="sister"><p className="kicker">AFTER DINNER</p><h2>お食事から、<br/>食後のバータイムまで。</h2><p>同じ4階には、姉妹店の「BAR CRAFT倶楽部 KAMOGAWA」がございます。すき焼きを楽しんだ後の一杯はもちろん、お食事後もゆったりとお過ごしいただけます。</p><p><a href={BAR}>BAR CRAFT倶楽部 KAMOGAWAを見る →</a></p></section>
  <section id="faq"><p className="kicker">FAQ</p><h2>よくあるご質問</h2><div className="faqs">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
  <section id="english" className="english"><p className="kicker">ENGLISH GUIDE</p><h2>WAGYU SUKIYAKI GION</h2><p>WAGYU SUKIYAKI GION is a wagyu sukiyaki restaurant in Kiyamachi, central Kyoto. The restaurant is close to the Kamo River, one minute on foot from Kyoto-kawaramachi Station and three minutes from Gion-shijo Station. Guests can also dine on the fifth-floor rooftop overlooking the Kamo River and the Kyoto cityscape.</p><dl><div><dt>Store name</dt><dd>WAGYU SUKIYAKI GION｜和牛すき焼き 祇園</dd></div><div><dt>Cuisine</dt><dd>Wagyu sukiyaki / Japanese cuisine</dd></div><div><dt>Address</dt><dd>RAKUAS Kiyamachi 4F, 123 Saitocho, Shimogyo Ward, Kyoto 600-8012, Japan</dd></div><div><dt>Access</dt><dd>1 minute on foot from Hankyu Kyoto-kawaramachi Station; 3 minutes from Keihan Gion-shijo Station</dd></div><div><dt>Hours</dt><dd>Tuesday–Saturday, 11:45 am–2:15 pm and 5:00 pm–10:00 pm</dd></div><div><dt>Closed</dt><dd>Sunday and Monday</dd></div><div><dt>Links</dt><dd><a href={MAP}>Google Maps</a> · <a href={INSTAGRAM}>Instagram</a></dd></div></dl></section>
  <section className="keywords"><details><summary>関連する検索語 / Related searches</summary><div><h3>日本語</h3><p>{jp.join("・")}</p><h3>English</h3><p>{en.join(" · ")}</p></div></details></section></main>
  <footer><div className="brand">WAGYU <span>SUKIYAKI</span> GION</div><p>{NAME}</p><p>{ADDRESS}</p><p>火曜日〜土曜日 11:45〜14:15／17:00〜22:00<br/>日曜日・月曜日 定休</p><div className="footerLinks"><a href={MAP}>Google Maps</a><a href={INSTAGRAM}>Instagram</a></div></footer>
  </>}
