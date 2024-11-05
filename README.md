# E-shop s AI Generátorem Obrázků pro Potisky na Trička

Tento projekt představuje e-shop pro prodej potisků na trička, který využívá AI generátor pro tvorbu obrázků na základě textových promptů. Uživatelé mohou generovat náhodné obrázky a umístit je na různé produkty. Tento e-shop je postavený na **Shoptet** šabloně a obsahuje pokročilé funkce pro integraci AI (např. **Leonardo.ai**, **MidJourney**) a další e-shopové funkce.

## Technologie

- **Shoptet** - platforma pro vytváření e-shopů.
- **Leonardo.ai / MidJourney** - AI modely pro generování obrázků na základě textových promptů.
- **Google Analytics** - pro měření událostí a konverzí.
- **Meta Conversion API** - pro sledování konverzí na Facebooku.
- **Stripe / GoPay** - platební brány pro platby kartou.
  
## Funkce

### 1. **AI Generátor Obrázků**
   - Uživatelé mohou zadat textový popis (např. "žába") a AI generátor vygeneruje obrázek.
   - Uživatelé vidí vygenerované obrázky v galerii.
   - Historie promptů (se zobrazením, jaký prompt byl použit pro každý obrázek).
   - Možnost zakoupení generovaných obrázků s různými platebními plány (např. kredity, předplatné).
   
### 2. **E-shop Funkce**
   - **Kategorizace produktů**: Trička a další textilní produkty s možností přidávání variant (velikost, barva).
   - **Produktová stránka**: Možnost nahrát generovaný obrázek a umístit jej na produkt.
   - **Výpočet ceny**: Cena se automaticky vypočítá na základě vybraného obrázku a velikosti produktu.
   - **Objednávkový systém**: Základní funkce pro zadávání objednávky, notifikace a posílání emailů.
   - **Promo kódy**: Možnost zadávání kódů při checkoutu pro slevy.
   - **Platební brány**: Implementace Stripe nebo GoPay pro platby kartou.

### 3. **UI/UX Design**
   - **Home page**: Design pro úvodní stránku s carousel sekcemi.
   - **Produktové stránky**: Čistý, moderní design produktových karet.
   - **Landing pages**: Možnost tvorby přistávacích stránek pro kampaně.
   - **Sekce o nás, kontakt atd.**

### 4. **Správa a Monitoring**
   - **Google Analytics**:
     - Měření událostí (např. opuštěný košík, konverze).
     - Vlastní konverze a napojení na Google Ads.
   - **Facebook Pixel / Meta Conversion API**:
     - Sledování výkonu reklamy a konverzí.
   
### 5. **Doplňkové Funkce**
   - **Tvorba XML feedů** pro export produktů do dalších platforem.
   - **Reklama a marketing**: Integrace s Google Ads a Facebook Ads pro lepší marketing.

## Instalace

Pro instalaci a spuštění tohoto projektu postupujte podle následujících kroků.

### 1. **Získání přístupu k AI API**
   - Registrujte se na **Leonardo.ai** nebo **MidJourney** a získejte přístup k jejich API pro generování obrázků.
   - Vytvořte si účet pro přístup k API a získejte autentizační klíče.

### 2. **Nastavení Shoptet**
   - Zaregistrujte se na platformě **Shoptet**.
   - Vyberte vhodnou šablonu pro e-shop.
   - Nainstalujte moduly pro **platební brány** (např. GoPay, Stripe) a **XML feedy**.

### 3. **Implementace AI Generátoru Obrázků**
   - Vytvořte UI pro zadávání promptů a zobrazení výsledků (využijte Shoptet šablonu a přizpůsobte ji pro tuto funkci).
   - Implementujte API pro generování obrázků pomocí Leonardo.ai nebo MidJourney.
   - Přidejte funkci pro ukládání historie promptů a generovaných obrázků.

### 4. **Integrace s Google Analytics a Meta Pixel**
   - Pro měření událostí a konverzí nastavte **Google Analytics** a **Meta Pixel** (Facebook).
   - Nastavte měření událostí jako **konverze**, **opuštěný košík** a **vytvoření objednávky**.

### 5. **Přizpůsobení Frontendu**
   - Přizpůsobte design dle požadavků (inspirováno webem **belabel.cz**), aby byl čistý, moderní a funkční.
   - Vytvořte sekce jako **O nás**, **Kontakt**, **FAQ** a další.

### 6. **Testování a Ladění**
   - Provádějte testy pro všechny funkce: generování obrázků, funkce košíku, platební brány, emailové notifikace a sledování konverzí.
   - Zajistěte, aby bylo všechno plně funkční a bez chyb.