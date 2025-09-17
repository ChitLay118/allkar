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

  // ဗီဒီယို / မြန်မာစာတန်းထိုး / ဇာတ်ကား နမူနာများ
 
   { name: "မြန်မာစာတန်းထိုးဇာတ်ကားများ", url: "https://mmsubmovie.com/", category: "ဇာတ်ကား", desc: "Asian shows & movies", domain: "mmsubmovie.com" },
  { name: "မြန်မာစာတန်းထိုးရုပ်ရှင်", url: "https://yoteshin.net/", category: "ဇာတ်ကား", desc: "Asian shows & movies", domain: "yoteshin.net" },
  { name: "Viu (Myanmar)", url: "https://www.viu.com/ott/mm", category: "ဇာတ်ကား", desc: "Asian shows & movies", domain: "viu.com" },
  { name: "PyonePlay", url: "https://www.pyoneplay.com/", category: "ဇာတ်ကား", desc: "Myanmar TV & drama", domain: "pyoneplay.com" },
  { name: "ကမ္ဘာ့ချန်နယ်လိုင်းပေါင်းစုံ", url: "https://tv.garden/mm/cdsVyojNjKqygk", category: "Live", desc: "StreamTV", domain: "tv.garden" },
  { name: "Iflix (example)", url: "https://www.iflix.com/", category: "ဇာတ်ကား", desc: "Movies & series", domain: "iflix.com" }
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

/* search */
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  if(!q){
    render(sites);
    return;
  }
  const filtered = sites.filter(s => {
    return s.name.toLowerCase().includes(q)
      || (s.category||'').toLowerCase().includes(q)
      || (s.desc||'').toLowerCase().includes(q)
      || (s.url||'').toLowerCase().includes(q);
  });
  render(filtered);
});

/* on load */
render(sites);

/* --- လိုချင်ရင်: 
   - sites array ကို ဖိုင်ရှင်းပေါ်က JSON ဖိုင်တစ်ခုနဲ့ ထည့်ချင်တယ်ဆိုရင် fetch() သုံးပြီး ပြောင်းလဲနိုင်သည်။
   - Icon မပြနိုင်ပါက default placeholder ထည့်လိုပါက makeCard() ထဲမှာ စစ်ပြီး image.onerror သတ်မှတ်နိုင်သည်။
*/


