# Maktab soati

Zavuch va sinf rahbari uchun kunlik ish vositasi — bitta HTML fayl, o'rnatish shart emas, server kerak emas.

## Nima bor

- **Direktor soati** — maktab rahbarining yili (34 ish) + **Buyruqlar** reyestri: ichki (maktab chiqargan) va tashqi (yuqoridan kelgan; muddatlisi soatga o'zi tushadi), AI bilan buyruq loyihasi va chop etish
- **Zavuch soati** va **Sinf rahbari soati** — o'quv yili davomidagi ishlar 12 oylik doira ustida, tayyor AI-topshiriqlar bilan
- **Sinf rahbari** uchun bir yillik tarbiyaviy reja — o'zi tuziladi, tayyor fayldan yuklanadi, yoki AI yordamida yaratiladi
- **Dars jadvali** — yuklamadan avtomatik tuziladi (Excel/Word/CSV qabul qiladi), qulflab qayta tuzish, AI bilan yaxshilash
- **Tarifikatsiya** — xodimlar bo'yicha stavka, ish haqi va soliqlarni (JShDS, ijtimoiy soliq) hisoblaydi
- Ismlar va telefon raqamlari AI'ga yuborishdan oldin **avtomatik yashiriladi**, javob qaytganda o'zi tiklanadi
- Uch tilda ishlaydi: o'zbek, rus, ingliz

## Qanday ochish

**Eng oson yo'l — havola orqali.** Pastdagi "GitHub Pages'ga qo'yish" bo'limini bir marta bajarsangiz, doimiy ishlaydigan havola paydo bo'ladi — uni istalgan brauzerda ochasiz, hech narsa yuklab olish shart emas.

**Yoki faylni to'g'ridan-to'g'ri.** `index.html` faylini istalgan qurilmaga ko'chirib, brauzerda oching. Fayl menejeridan emas — Telegram yoki shunga o'xshash ilova ichidagi brauzerdan ochsangiz, fayl tanlash oynalari ishlamasligi mumkin.

## GitHub Pages'ga qo'yish (bir marta, 5 daqiqa)

1. github.com'da yangi repository yarating (**New repository**), nomini xohlagancha qo'ying.
2. Repository sahifasida **"uploading an existing file"** havolasini bosing (yoki **Add file → Upload files**).
3. `index.html` faylini shu yerga tashlang (drag-and-drop), pastda **Commit changes** tugmasini bosing.
4. **Settings → Pages** bo'limiga o'ting. **Branch** ostida `main` ni tanlang, **Save** bosing.
5. Bir necha daqiqadan so'ng yuqorida havola chiqadi: `https://<username>.github.io/<repository-nomi>/` — shu havola doimiy ishlaydi.

Keyinchalik faylni yangilash uchun: shu havolani qayta bosib, yangi `index.html`'ni yuklab, **Commit changes** deysiz — sahifa bir necha daqiqada yangilanadi.

## Yordamchi (🎤)

Pastki o'ngdagi 🎤 tugma yoki daraxt markazidagi doira — ovozli/yozma yordamchi. Buyruqni gapirasiz yoki yozasiz:
- «Bu hafta nima bor?», «Bugun nima?» — soatdagi ishlarni ko'rsatadi, bosib ochasiz
- «Zavuch soatini och», «Tarifikatsiyani och», «Dars jadvali» — bo'limga o'tadi
- «Ota-onalar majlisi» — ish nomini aytsangiz, o'sha ishni ochadi
- «Aliyevning oyligi qanday hisoblangan?» — tarifikatsiya ro'yxatidan topib, har bir qadamni raqam bilan tushuntiradi (AI kerak emas)
- «Ota-onalarga majlis haqida xabar tayyorla», «Pedsovet haqida prezentatsiya tayyorla», «Yillik reja tuz» — AI orqali (kalit bo'lsa shu yerda, bo'lmasa ilovaga ulashadi); «Yukla» — oxirgi natijani yuklab oladi
- «Buyruq tayyorla ...» — buyruq loyihasini yozadi (chop etish bilan); «Bajarilmagan buyruqlar» — ro'yxat; «Tashqi buyruqlar» — reyestr
- «... qidir» — ilova ichidan (ishlar, hujjatlar) topadi va Google'da ochadi; «Faylni och» — joriy bo'limning fayl tugmasini ko'rsatadi
- «Ruschaga o'tkaz» — tilni almashtiradi

Ovozni tanish Chrome'da ishlaydi (internet kerak); Firefox va ba'zi ilova ichidagi brauzerlarda mikrofon yo'q — yozib yuboriladi. O'zbekcha ovozli javob qurilmada o'zbek ovozi bo'lsagina eshitiladi.

## O'qituvchi o'z oyligini so'rashi uchun — shaxsiy havola

Tarifikatsiya ro'yxati faqat zavuchning qurilmasida turadi. O'qituvchi o'z telefonida so'ray olishi uchun: Tarifikatsiya jadvalida xodim qatoridagi **🔗** tugmasini bosing → «Shaxsiy havola» chiqadi → Telegram orqali o'sha o'qituvchiga yuboring. Havolada faqat uning qatori va hisob sozlamalari bor (server yo'q, boshqalarniki yo'q). O'qituvchi bossa — ilova ochilib, oyligini qadam-baqadam tushuntiradi; keyin «Oyligim nega buncha?» deb so'rayverishi mumkin.

Havola faqat GitHub'ga joylangan versiyada ishlaydi (fayldan ochilganda 🔗 tugmasi buning o'rniga tushuntirish matnini nusxalash imkonini beradi).

Ro'yxatni yo'qotmaslik uchun **«Faylga saqlash»** (JSON) — sozlamalar bilan birga saqlanadi, 📎 orqali qaytadan yuklanadi.

## AI (miya) — Gemini bepul

Yordamchining ko'p buyruqlari AI'siz ishlaydi (bo'limlar, ishlar, oylik hisobi, buyruqlar reyestri). Erkin savollar, xabar/buyruq loyihasi, prezentatsiya va yillik reja uchun AI kerak: ⚙ AI → Xizmat: **Gemini (Google)** → kalit **aistudio.google.com/apikey**'dan (Google hisobi, 18+, karta shart emas). AI javoblari ekranda chiqadi va ovozda o'qiladi. Bepul tarifda Google so'rovlardan mahsulotlarini yaxshilash uchun foydalanishi mumkin — ismlar yuborishdan oldin yashiriladi.

## Sado — bepul ovoz (o'rnatilgan)

Ilova ichida **Sado** moduli bor (brauzerning Web Speech API'si ustida, kalit va serversiz): ovozli javob o'zbekcha ovoz bo'lmagan telefonda ham eshitiladi — matn transliteratsiya qilinib, ruscha (yoki turkcha) ovoz bilan o'qiladi; mikrofon gapirgan sari matnni jonli ko'rsatadi va sukutda o'zi qayta yoqiladi. Aisha kaliti kiritilsa, Aisha ustun turadi.

## Azure — tabiiy o'zbek ovoz (ixtiyoriy, bepul tarif bor)

⚙ AI → «Azure» qatori: KEY 1 va Region (masalan `westeurope`), ovoz — Madina yoki Sardor. Kalit portal.azure.com'da «Speech» resursi yaratilib (tarif **Free F0**), «Keys and Endpoint» bo'limidan olinadi. Ustunlik: Azure → Aisha → Sado.

## Aisha — o'zbekcha ovoz (ixtiyoriy)

⚙ AI → «Aisha» qatoriga aisha.group API kalitini kiriting (voicelab.uz/app'da olinadi, har belgi uchun to'lanadi). Shundan keyin:
- yordamchining ovozli javobi **o'zbekcha tabiiy ovozda** (Gulnoza; kayfiyat va tezlik sozlanadi) — brauzerda o'zbek ovozi bo'lmasa ham;
- 🎤 tugmasi ovozni **Aisha orqali** taniydi: Chrome shart emas, Yandex/Firefox'da ham ishlaydi; yozib olinadi → matnga aylanadi → buyruq bajariladi.
Kalitsiz — avvalgidek brauzer ovozi va Chrome'ning tanishi. Mikrofon har holda faqat havola (https) orqali ochilganda beriladi.

## Ekranga ikonka qilib chiqarish

Havola orqali ochilganda ilova o'zini «o'rnatiladigan» qilib tanishtiradi (manifest + offlayn kesh). Bir marta o'rnatsangiz, oddiy ilovadek ochiladi — brauzer panelisiz, internetsiz ham.

- **Android (Chrome):** havolani oching → yuqori o'ngdagi ⋮ → **«Ilovani o'rnatish»** (yoki «Bosh ekranga qo'shish»).
- **iPhone (Safari):** havolani oching → pastdagi «Ulashish» tugmasi → **«Bosh ekranga qo'shish»**.
- **Windows (Chrome/Edge):** havolani oching → manzil qatorining o'ng chetidagi o'rnatish belgisi (yoki ⋮ → **«Maktab soati»ni o'rnatish**) → ish stoliga va Start menyusiga ikonka tushadi.
- **Mac (Chrome):** ⋮ → «Yorliq yaratish» → «Oyna sifatida ochish» belgisini qo'ying. Safari: Fayl → **«Dock'ka qo'shish»**.

Faylni havolasiz, kompyuterda ochsangiz: ish stolida o'ng tugma → **Yangi → Yorliq** → `index.html` faylini ko'rsating. Bu ham ikonka beradi, lekin brauzer oynasida ochiladi.

## Fayllar

- `index.html` — ilovaning o'zi (yagona zarur fayl)
- `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — ikonka, nom va offlayn kesh uchun; havola orqali ochilganda ishlaydi
- `README.md` — shu yo'riqnoma

GitHub'ga yuklaganda **hammasini bitta papkaga** tashlang (bir xil darajada, ichki papkasiz).

## AI qismi haqida

⚙ tugmasi orqali kiritilgan API kalit **faqat o'sha brauzerda** saqlanadi (localStorage) — faylning ichiga yozilmaydi, hech qayerga yuborilmaydi, faqat to'g'ridan-to'g'ri tanlangan xizmatga (Anthropic yoki OpenAI) ketadi. Boshqa qurilma yoki brauzerda qayta kiritish kerak bo'ladi.

Saqlangan rejalar, tarifikatsiya ro'yxati va hujjatlar ham xuddi shunday — brauzer xotirasida, qurilmadan qurilmaga o'zi ko'chmaydi.

## Texnik eslatma

Bitta `index.html` — build qadam yo'q, paket o'rnatish shart emas. O'zgartirish kerak bo'lsa, faylni to'g'ridan-to'g'ri tahrirlab, qayta yuklash kifoya.
