/* ပြင်ဆင်ရန်:
   sites array ထဲကို သင့်လိုချင်သမျှ site name, url, category, description တွေ ထည့်နိုင်ပါတယ်။
   icon ကို domain အလိုက် Google favicon service ဖြင့် ဆွဲယူထားပါတယ်။
*/

const sites = [
  // xvideos
{ name: "XHAMSTER", url: "https://www.xhaccess.com", category: "xnx", desc: "နိုင်ငံခြား", domain: "xhaccess.com" },
  { name: "Buu Mal", url: "https://www.buumal.com", category: "xx", desc: "မြန်မာ", domain: "buumal.com" },
  { name: "Redporn", url: "https://www.redporn.video", category: "xx", desc: "နိုင်ငံခြား", domain: "redporn.video" },
  { name: "Apornvideo", url: "https://www.apornvideo.com", category: "xx", desc: "နိုင်ငံခြား", domain: "apornvideo.com" },
  { name: "MayNoe", url: "https://maynoe.com", category: "ချောင်းရိုက်", desc: "မြန်မာ", domain: "maynoe.com" },
  { name: "စမူဆာ", url: "https://www.samusar.com", category: "ချောင်းရိုက်", desc: "မြန်မာ", domain: "samusar.com" },
  { name: "Apyar", url: "https://apyar.org", category: "ချောင်းရိုက်", desc: "မြန်မာ", domain: "apyar.org" },
  { name: "Allgabar", url: "https://allgabar.com", category: "ချောင်းရိုက်", desc: "မြန်မာ", domain: "allgabar.com" },
  { name: "MM Porns", url: "https://mmporns.com", category: "ချောင်းရိုက်", desc: "မြန်မာ", domain: "mmporns.com" },
  { name: "Wone Dine", url: "https://wonedine.com", category: "ချောင်းရိုက်", desc: "မြန်မာ", domain: "wonedine.com" },
  { name: "SarBalGyi", url: "https://sarbalgyi.net", category: "ချောင်းရိုက်", desc: "မြန်မာ", domain: "sarbalgyi.net" },
  { name: "မြန်မာစာတန်းထိုးဖူးကား1", url: "https://darkplustv.com/category/uncategorized/", category: "mmsub", desc: "Japan", domain: "darkplustv.com" },
  { name: "မြန်မာစာတန်းထိုးဖူးကား2", url: "https://xxxmmsub.com/", category: "mmsub", desc: "Japan", domain: "xxxmmsub.com" },
  { name: "PRED(mmsub)", url: "https://javmyanmar.com/pred-722/", category: "mmsub", desc: "Japan", domain: "javmyanmar.com/pred-722/" }
];

// grid element
const grid = document.getElementById('grid');

/* favicon helper: Google favicon service */
function faviconUrl(domain){
  return `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(domain)}`;
}

/* build card */
function makeCard(s){
  const a = document.createElement('a');
  a.className = 'card';
  a.href = s.url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';

  const thumb = document.createElement('div');
  thumb.className = 'thumb';
  const img = document.createElement('img');
  img.src = faviconUrl(s.domain || new URL(s.url).hostname);
  img.alt = s.name + ' icon';
  thumb.appendChild(img);

  const info = document.createElement('div');
  info.className = 'info';
  const name = document.createElement('div');
  name.className = 'name';
  name.textContent = s.name;
  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.textContent = `${s.category} · ${s.desc || ''}`;

  info.appendChild(name);
  info.appendChild(meta);

  a.appendChild(thumb);
  a.appendChild(info);
  return a;
}

/* initial render */
function render(list){
  grid.innerHTML = '';
  list.forEach(s => {
    const card = makeCard(s);
    grid.appendChild(card);
  });
}

/* on load */
render(sites);

/* --- လိုချင်ရင်: 
   - sites array ကို ဖိုင်ရှင်းပေါ်က JSON ဖိုင်တစ်ခုနဲ့ ထည့်ချင်တယ်ဆိုရင် fetch() သုံးပြီး ပြောင်းလဲနိုင်သည်။
   - Icon မပြနိုင်ပါက default placeholder ထည့်လိုပါက makeCard() ထဲမှာ စစ်ပြီး image.onerror သတ်မှတ်နိုင်သည်။
*/







