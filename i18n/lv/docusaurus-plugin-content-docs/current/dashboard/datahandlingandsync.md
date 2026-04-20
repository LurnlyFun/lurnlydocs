---
description: Kā tiek apstrādāti komplektu dati.
sidebar_position: 5
---

# 🛠️ Datu apstrāde un sinhronizācija

Lurnly ir (*pašlaik*) pilnībā **klienta puses** lietojumprogramma — nav servera, nav konta un nav mākoņa. Visi jūsu dati atrodas jūsu pārlūkprogrammā.

Tas var mainīties. Konti un pārvaldība **ir plānoti turpmākajos atjauninājumos.**

---

## Kā dati plūst

Katra jūsu veiktā darbība — komplekta izveide, karšu mācīšanās, progresa izsekošana — tiek saglabāta un nolasīta no jūsu pārlūkprogrammas **lokālās krātuves**. Nekas netiek nosūtīts uz serveri.

<div style={{maxWidth: '520px', marginTop: '8px'}}>

  <div style={{display: 'flex', alignItems: 'center', gap: '0', marginBottom: '8px'}}>
    <div style={{background: 'linear-gradient(135deg, #8c52ff 0%, #ff52d4 100%)', borderRadius: '12px', padding: '12px 18px', color: 'white', fontWeight: 700, fontSize: '0.9rem', textAlign: 'center', minWidth: '110px'}}>Jūsu darbība<br/><span style={{fontSize: '0.75rem', fontWeight: 400, opacity: 0.85}}>mācīties, veidot, importēt</span></div>
    <div style={{flex: 1, height: '2px', background: 'linear-gradient(90deg, #8c52ff, #ff52d4)'}}/>
    <div style={{background: 'linear-gradient(135deg, #fff5fd 0%, #ffeef9 100%)', border: '2px solid #ffd4f4', borderRadius: '12px', padding: '12px 18px', fontWeight: 700, fontSize: '0.9rem', color: '#333', textAlign: 'center', minWidth: '110px'}}>localStorage<br/><span style={{fontSize: '0.75rem', fontWeight: 400, color: '#888'}}>pārlūka krātuve</span></div>
    <div style={{flex: 1, height: '2px', background: 'linear-gradient(90deg, #ff52d4, #8c52ff)'}}/>
    <div style={{background: 'linear-gradient(135deg, #8c52ff 0%, #ff52d4 100%)', borderRadius: '12px', padding: '12px 18px', color: 'white', fontWeight: 700, fontSize: '0.9rem', textAlign: 'center', minWidth: '110px'}}>Vadības panelis<br/><span style={{fontSize: '0.75rem', fontWeight: 400, opacity: 0.85}}>nolasa un rāda</span></div>
  </div>

</div>

---

## Kas tiek saglabāts

Lurnly izmanto divas atsevišķas atslēgas lokālajā krātuvē:

<div style={{maxWidth: '520px', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px'}}>

  <div style={{background: 'white', border: '2px solid #ffd4f4', borderRadius: '14px', padding: '16px 18px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px'}}>
      <code style={{background: 'linear-gradient(135deg, #8c52ff 0%, #ff52d4 100%)', color: 'white', borderRadius: '8px', padding: '3px 10px', fontSize: '0.82rem', fontWeight: 700}}>lurnly_decks</code>
      <span style={{color: '#888', fontSize: '0.8rem'}}>Komplektu objektu masīvs</span>
    </div>
    <div style={{color: '#555', fontSize: '0.85rem', lineHeight: '1.5'}}>Saglabā katru jūsu komplektu — nosaukumu, ikonu, kartes, progresa procentu, izveides datumu un pēdējo studiju datumu.</div>
  </div>

  <div style={{background: 'white', border: '2px solid #ffd4f4', borderRadius: '14px', padding: '16px 18px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px'}}>
      <code style={{background: 'linear-gradient(135deg, #8c52ff 0%, #ff52d4 100%)', color: 'white', borderRadius: '8px', padding: '3px 10px', fontSize: '0.82rem', fontWeight: 700}}>lurnly_study_log</code>
      <span style={{color: '#888', fontSize: '0.8rem'}}>Ikdienas karšu skaits</span>
    </div>
    <div style={{color: '#555', fontSize: '0.85rem', lineHeight: '1.5'}}>Datumam piesaistīts ieraksts par to, cik kartes esat mācījies katru dienu. Tas nodrošina <strong>Dienu sērijas</strong> un <strong>Šodien mācīts</strong> statistiku.</div>
  </div>

</div>

---

## Komplekta datu struktūra

Katrs komplekts tiek glabāts kā JSON objekts. Lūk, kā izskatās v1.3 komplekts:

```json
{
  "id": "deck_1714000000000_0",
  "name": "Spāņu pamati",
  "icon": "🇪🇸",
  "description": "Izplatīta spāņu vārdu krājums",
  "author": "Jūs",
  "progress": 64,
  "created": "2026-03-01T10:00:00.000Z",
  "lastStudied": "2026-04-17T18:30:00.000Z",
  "shuffle": false,
  "timer": null,
  "cards": [
    { "front": "Hola", "back": "Sveiki" },
    { "front": "Gracias", "back": "Paldies" }
  ]
}
```

---

## Formātu saderība

Lurnly nolasa gan pašreizējo formātu, gan vecākus eksportus, tāpēc komplekti no iepriekšējām versijām tiek importēti bez problēmām.

<div style={{maxWidth: '520px', marginTop: '8px', border: '2px solid #ffd4f4', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', background: 'white'}}>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'linear-gradient(135deg, #8c52ff 0%, #ff52d4 100%)'}}>
    <div style={{padding: '11px 16px', color: 'white', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Lauks</div>
    <div style={{padding: '11px 16px', color: 'white', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Vecais formāts</div>
    <div style={{padding: '11px 16px', color: 'white', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>v1.3</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid #ffd4f4'}}>
    <div style={{padding: '10px 16px', fontWeight: 700, color: '#8c52ff', fontSize: '0.85rem'}}>Karšu masīvs</div>
    <div style={{padding: '10px 16px', color: '#555', fontSize: '0.85rem'}}><span style={{fontFamily: 'monospace', background: '#f3f4f6', borderRadius: '4px', padding: '2px 6px', fontSize: '0.82rem'}}>flashcards</span></div>
    <div style={{padding: '10px 16px', color: '#555', fontSize: '0.85rem'}}><span style={{fontFamily: 'monospace', background: '#f3f4f6', borderRadius: '4px', padding: '2px 6px', fontSize: '0.82rem'}}>cards</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid #ffd4f4', background: '#fff5fd'}}>
    <div style={{padding: '10px 16px', fontWeight: 700, color: '#8c52ff', fontSize: '0.85rem'}}>Komplekta nosaukums</div>
    <div style={{padding: '10px 16px', color: '#555', fontSize: '0.85rem'}}><span style={{fontFamily: 'monospace', background: '#f3f4f6', borderRadius: '4px', padding: '2px 6px', fontSize: '0.82rem'}}>title</span></div>
    <div style={{padding: '10px 16px', color: '#555', fontSize: '0.85rem'}}><span style={{fontFamily: 'monospace', background: '#f3f4f6', borderRadius: '4px', padding: '2px 6px', fontSize: '0.82rem'}}>name</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid #ffd4f4'}}>
    <div style={{padding: '10px 16px', fontWeight: 700, color: '#8c52ff', fontSize: '0.85rem'}}>Ikona</div>
    <div style={{padding: '10px 16px', color: '#555', fontSize: '0.85rem'}}><span style={{fontFamily: 'monospace', background: '#f3f4f6', borderRadius: '4px', padding: '2px 6px', fontSize: '0.82rem'}}>emoji</span></div>
    <div style={{padding: '10px 16px', color: '#555', fontSize: '0.85rem'}}><span style={{fontFamily: 'monospace', background: '#f3f4f6', borderRadius: '4px', padding: '2px 6px', fontSize: '0.82rem'}}>icon</span></div>
  </div>
</div>

---

## Auto-ID

Importējot komplektu bez `id` lauka, Lurnly automātiski ģenerē vienu, izmantojot pašreizējo laikspiedolu:

```
deck_1714000000000_0
```

Tas nodrošina, ka katru komplektu var unikāli identificēt mācīšanās, rediģēšanas un dzēšanas nolūkos — pat ja sākotnējais eksports ir pirms ID sistēmas.

---

## ⚠️ Svarīgi ierobežojumi

<div style={{maxWidth: '520px', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px'}}>

  <div style={{background: '#fff5fd', border: '2px solid #ffd4f4', borderRadius: '14px', padding: '14px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
    <span style={{fontSize: '1.3rem', flexShrink: 0}}>🌐</span>
    <div style={{fontSize: '0.88rem', color: '#333', lineHeight: '1.5'}}><strong>Piesaistīts pārlūkprogrammai:</strong> Jūsu dati pastāv tikai tajā pārlūkprogrammā, kurā izmantojat Lurnly. Citā pārlūkprogrammā vai ierīcē sāksiet ar tukšu bibliotēku.</div>
  </div>

  <div style={{background: '#fff5fd', border: '2px solid #ffd4f4', borderRadius: '14px', padding: '14px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
    <span style={{fontSize: '1.3rem', flexShrink: 0}}>🗑️</span>
    <div style={{fontSize: '0.88rem', color: '#333', lineHeight: '1.5'}}><strong>Vietnes datu dzēšana iznīcina visu.</strong> Pārlūkprogrammas sīkdatņu/krātuves dzēšana vietnei neatgriezeniski dzēš visus komplektus un progresu. Regulāri eksportējiet komplektus kā dublējumu.</div>
  </div>

  <div style={{background: '#fff5fd', border: '2px solid #ffd4f4', borderRadius: '14px', padding: '14px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
    <span style={{fontSize: '1.3rem', flexShrink: 0}}>☁️</span>
    <div style={{fontSize: '0.88rem', color: '#333', lineHeight: '1.5'}}><strong>Nav mākoņa sinhronizācijas.</strong> Nav konta sistēmas. Lai pārvietotu komplektus starp ierīcēm, izmantojiet Eksportēt → Importēt darbplūsmu.</div>
  </div>

</div>
