---
description: Quick Actions and what they do.
sidebar_position: 4
---

# ⚡ Quick Actions

Located in the sidebar (desktop) or bottom section (mobile), these buttons give you instant access to the most common workflows.

---

## 📝 Create Deck

Start building a new flashcard set from scratch.

<a href="#" onClick={(e) => e.preventDefault()} style={{display: 'flex', alignItems: 'center', gap: '12px', background: 'linear-gradient(135deg, #fff5fd 0%, #ffeef9 100%)', border: '2px solid #ffd4f4', borderRadius: '12px', padding: '15px', boxShadow: '0 4px 15px rgba(140, 82, 255, 0.15)', textDecoration: 'none', maxWidth: '320px'}}>
  <div style={{fontSize: '2rem'}}>📝</div>
  <div>
    <div style={{fontSize: '1rem', fontWeight: 700, color: '#333'}}>Create Deck</div>
    <div style={{color: '#666', fontSize: '0.75rem'}}>Build from scratch</div>
  </div>
</a>

---

## 📚 View Decks

Browse your entire collection beyond the recent list shown on the dashboard.

<a href="#" onClick={(e) => e.preventDefault()} style={{display: 'flex', alignItems: 'center', gap: '12px', background: 'linear-gradient(135deg, #fff5fd 0%, #ffeef9 100%)', border: '2px solid #ffd4f4', borderRadius: '12px', padding: '15px', boxShadow: '0 4px 15px rgba(140, 82, 255, 0.15)', textDecoration: 'none', maxWidth: '320px'}}>
  <div style={{fontSize: '2rem'}}>📚</div>
  <div>
    <div style={{fontSize: '1rem', fontWeight: 700, color: '#333'}}>View Decks</div>
    <div style={{color: '#666', fontSize: '0.75rem'}}>Browse collection</div>
  </div>
</a>

---

## 📥 Import

Upload a Lurnly-compatible `.json` file to add decks to your library. Supports both the current v1.3 format and older exports.

<div style={{display: 'flex', alignItems: 'center', gap: '12px', background: 'linear-gradient(135deg, #fff5fd 0%, #ffeef9 100%)', border: '2px solid #ffd4f4', borderRadius: '12px', padding: '15px', boxShadow: '0 4px 15px rgba(140, 82, 255, 0.15)', maxWidth: '320px', cursor: 'pointer'}}>
  <div style={{fontSize: '2rem'}}>📥</div>
  <div>
    <div style={{fontSize: '1rem', fontWeight: 700, color: '#333'}}>Import</div>
    <div style={{color: '#666', fontSize: '0.75rem'}}>Upload JSON file</div>
  </div>
</div>

---

## 🎲 Random Study

Automatically selects and starts a study session from a random deck in your collection — great for keeping your review habits varied.

<div style={{display: 'flex', alignItems: 'center', gap: '12px', background: 'linear-gradient(135deg, #fff5fd 0%, #ffeef9 100%)', border: '2px solid #ffd4f4', borderRadius: '12px', padding: '15px', boxShadow: '0 4px 15px rgba(140, 82, 255, 0.15)', maxWidth: '320px', cursor: 'pointer'}}>
  <div style={{fontSize: '2rem'}}>🎲</div>
  <div>
    <div style={{fontSize: '1rem', fontWeight: 700, color: '#333'}}>Random Study</div>
    <div style={{color: '#666', fontSize: '0.75rem'}}>Practice any deck</div>
  </div>
</div>
