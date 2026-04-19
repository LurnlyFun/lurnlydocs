---
description: How deck data is handled.
sidebar_position: 5
---

# 🛠️ Data Handling & Sync

Lurnly is (*currently*) a fully **client-side** application - there is no server, no account, and no cloud. All of your data lives in your browser. 

This is subject to be changed. With accounts & managment **being planned in future updates.**

---

## How Data Flows

Every action you take - creating a deck, studying cards, tracking progress - is saved to and read from your browser's **Local Storage**. Nothing is ever sent to a server.

<div style={{maxWidth: '520px', marginTop: '8px'}}>

  <div style={{display: 'flex', alignItems: 'center', gap: '0', marginBottom: '8px'}}>
    <div style={{background: 'linear-gradient(135deg, #8c52ff 0%, #ff52d4 100%)', borderRadius: '12px', padding: '12px 18px', color: 'white', fontWeight: 700, fontSize: '0.9rem', textAlign: 'center', minWidth: '110px'}}>Your Action<br/><span style={{fontSize: '0.75rem', fontWeight: 400, opacity: 0.85}}>study, create, import</span></div>
    <div style={{flex: 1, height: '2px', background: 'linear-gradient(90deg, #8c52ff, #ff52d4)'}}/>
    <div style={{background: 'linear-gradient(135deg, #fff5fd 0%, #ffeef9 100%)', border: '2px solid #ffd4f4', borderRadius: '12px', padding: '12px 18px', fontWeight: 700, fontSize: '0.9rem', color: '#333', textAlign: 'center', minWidth: '110px'}}>localStorage<br/><span style={{fontSize: '0.75rem', fontWeight: 400, color: '#888'}}>browser storage</span></div>
    <div style={{flex: 1, height: '2px', background: 'linear-gradient(90deg, #ff52d4, #8c52ff)'}}/>
    <div style={{background: 'linear-gradient(135deg, #8c52ff 0%, #ff52d4 100%)', borderRadius: '12px', padding: '12px 18px', color: 'white', fontWeight: 700, fontSize: '0.9rem', textAlign: 'center', minWidth: '110px'}}>Dashboard<br/><span style={{fontSize: '0.75rem', fontWeight: 400, opacity: 0.85}}>reads & displays</span></div>
  </div>

</div>

---

## What Gets Stored

Lurnly uses two separate keys in Local Storage:

<div style={{maxWidth: '520px', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px'}}>

  <div style={{background: 'white', border: '2px solid #ffd4f4', borderRadius: '14px', padding: '16px 18px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px'}}>
      <code style={{background: 'linear-gradient(135deg, #8c52ff 0%, #ff52d4 100%)', color: 'white', borderRadius: '8px', padding: '3px 10px', fontSize: '0.82rem', fontWeight: 700}}>lurnly_decks</code>
      <span style={{color: '#888', fontSize: '0.8rem'}}>Array of deck objects</span>
    </div>
    <div style={{color: '#555', fontSize: '0.85rem', lineHeight: '1.5'}}>Stores every deck you own — name, icon, cards, progress percentage, creation date, and last studied date.</div>
  </div>

  <div style={{background: 'white', border: '2px solid #ffd4f4', borderRadius: '14px', padding: '16px 18px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px'}}>
      <code style={{background: 'linear-gradient(135deg, #8c52ff 0%, #ff52d4 100%)', color: 'white', borderRadius: '8px', padding: '3px 10px', fontSize: '0.82rem', fontWeight: 700}}>lurnly_study_log</code>
      <span style={{color: '#888', fontSize: '0.8rem'}}>Daily card counts</span>
    </div>
    <div style={{color: '#555', fontSize: '0.85rem', lineHeight: '1.5'}}>A date-keyed record of how many cards you studied each day. This is what powers the <strong>Day Streak</strong> and <strong>Studied Today</strong> stats.</div>
  </div>

</div>

---

## Deck Data Structure

Each deck is stored as a JSON object. Here's what a v1.3 deck looks like:

```json
{
  "id": "deck_1714000000000_0",
  "name": "Spanish Basics",
  "icon": "🇪🇸",
  "description": "Common Spanish vocabulary",
  "author": "You",
  "progress": 64,
  "created": "2026-03-01T10:00:00.000Z",
  "lastStudied": "2026-04-17T18:30:00.000Z",
  "shuffle": false,
  "timer": null,
  "cards": [
    { "front": "Hola", "back": "Hello" },
    { "front": "Gracias", "back": "Thank you" }
  ]
}
```

---

## Format Compatibility

Lurnly reads both the current format and older exports, so decks from previous versions import without issues.

<div style={{maxWidth: '520px', marginTop: '8px', border: '2px solid #ffd4f4', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', background: 'white'}}>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'linear-gradient(135deg, #8c52ff 0%, #ff52d4 100%)'}}>
    <div style={{padding: '11px 16px', color: 'white', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Field</div>
    <div style={{padding: '11px 16px', color: 'white', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Old Format</div>
    <div style={{padding: '11px 16px', color: 'white', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>v1.3</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid #ffd4f4'}}>
    <div style={{padding: '10px 16px', fontWeight: 700, color: '#8c52ff', fontSize: '0.85rem'}}>Cards array</div>
    <div style={{padding: '10px 16px', color: '#555', fontSize: '0.85rem'}}><span style={{fontFamily: 'monospace', background: '#f3f4f6', borderRadius: '4px', padding: '2px 6px', fontSize: '0.82rem'}}>flashcards</span></div>
    <div style={{padding: '10px 16px', color: '#555', fontSize: '0.85rem'}}><span style={{fontFamily: 'monospace', background: '#f3f4f6', borderRadius: '4px', padding: '2px 6px', fontSize: '0.82rem'}}>cards</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid #ffd4f4', background: '#fff5fd'}}>
    <div style={{padding: '10px 16px', fontWeight: 700, color: '#8c52ff', fontSize: '0.85rem'}}>Deck name</div>
    <div style={{padding: '10px 16px', color: '#555', fontSize: '0.85rem'}}><span style={{fontFamily: 'monospace', background: '#f3f4f6', borderRadius: '4px', padding: '2px 6px', fontSize: '0.82rem'}}>title</span></div>
    <div style={{padding: '10px 16px', color: '#555', fontSize: '0.85rem'}}><span style={{fontFamily: 'monospace', background: '#f3f4f6', borderRadius: '4px', padding: '2px 6px', fontSize: '0.82rem'}}>name</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid #ffd4f4'}}>
    <div style={{padding: '10px 16px', fontWeight: 700, color: '#8c52ff', fontSize: '0.85rem'}}>Icon</div>
    <div style={{padding: '10px 16px', color: '#555', fontSize: '0.85rem'}}><span style={{fontFamily: 'monospace', background: '#f3f4f6', borderRadius: '4px', padding: '2px 6px', fontSize: '0.82rem'}}>emoji</span></div>
    <div style={{padding: '10px 16px', color: '#555', fontSize: '0.85rem'}}><span style={{fontFamily: 'monospace', background: '#f3f4f6', borderRadius: '4px', padding: '2px 6px', fontSize: '0.82rem'}}>icon</span></div>
  </div>
</div>

---

## Auto-ID

When importing a deck that has no `id` field, Lurnly automatically generates one using the current timestamp:

```
deck_1714000000000_0
```

This ensures every deck can be uniquely identified for studying, editing, and deletion — even if the original export pre-dates the ID system.

---

## ⚠️ Important Limitations

<div style={{maxWidth: '520px', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px'}}>

  <div style={{background: '#fff5fd', border: '2px solid #ffd4f4', borderRadius: '14px', padding: '14px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
    <span style={{fontSize: '1.3rem', flexShrink: 0}}>🌐</span>
    <div style={{fontSize: '0.88rem', color: '#333', lineHeight: '1.5'}}><strong>Browser-bound:</strong> Your data only exists in the browser where you use Lurnly. A different browser or device will start with an empty library.</div>
  </div>

  <div style={{background: '#fff5fd', border: '2px solid #ffd4f4', borderRadius: '14px', padding: '14px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
    <span style={{fontSize: '1.3rem', flexShrink: 0}}>🗑️</span>
    <div style={{fontSize: '0.88rem', color: '#333', lineHeight: '1.5'}}><strong>Clearing site data wipes everything.</strong> Clearing your browser's cookies/storage for the site permanently deletes all decks and progress. Export your decks regularly as a backup.</div>
  </div>

  <div style={{background: '#fff5fd', border: '2px solid #ffd4f4', borderRadius: '14px', padding: '14px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
    <span style={{fontSize: '1.3rem', flexShrink: 0}}>☁️</span>
    <div style={{fontSize: '0.88rem', color: '#333', lineHeight: '1.5'}}><strong>No cloud sync.</strong> There is no account system. To move decks between devices, use the Export → Import workflow.</div>
  </div>

</div>
