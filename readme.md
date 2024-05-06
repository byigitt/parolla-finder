# Parolla Finder
_veritabanınız public olmadığından repo küçük bir scraper de içeriyor. sqlite, axios ve knex yardımı ile scraper de yaptım. dakikada 60 request ile 3-4 saat çalıştırmama rağmen arada gelmeyen idler mevcut. benim şansıma mı gelmedi yoksa o idler veritabanınızda mı yok onu da bilmiyorum. lütfen databasenizi public yapın :(_

## Demo
![](https://github.com/byigitt/parolla-finder/blob/main/images/demo.gif)


## İçindekiler
- Scraper yardımı ile (neredeyse) tüm veritabanı dosyada.
- Direkt API request ile rekabetçi (günlük) modda çıkanları bulma yardımcısı mevcut.
- Basit bir veritabanı düzenleyicisi mevcut (eğer kendiniz scraperle veri çekmek isterseniz çektikten sonra veritabanını düzenlemeyi unutmayın).

## İndirme

```
git clone https://github.com/byigitt/parolla-finder.git
cd parolla-finder
npm install
```

## Çalıştırma
- Rekabetçi: `npm run daily`
- Limitsiz: `npm run finder`
- Veritabanı Düzenleyicisi: `npm run format`
- Veri İndirici: `npm run scraper`
