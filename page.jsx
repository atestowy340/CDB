import React, { useState, useEffect } from 'react';

// ==========================================
// i18n Translations Dictionary (EN, PL, DE)
// ==========================================
const translations = {
  en: {
    brand: "CryptoDiscussionBoard",
    tagline: "Secure & Decentralized Web3 Community",
    setNickname: "Set Your Nickname",
    nicknamePlaceholder: "Enter unique nickname...",
    saveNickname: "Save Nickname",
    freeChangeNotice: "First nickname change is free! Subsequent changes cost 5 CDB tokens.",
    freeBadge: "Free Change Available",
    paidBadge: "Paid Change (5 CDB)",
    nicknameSuccess: "Nickname updated successfully!",
    createPost: "Create New Post",
    postPlaceholder: "What's happening in the crypto markets today?",
    tagPlaceholder: "Select or type tag (e.g., #Bitcoin, #DeFi)",
    publishPost: "Publish Post",
    feedTitle: "Community Discussions",
    chatTitle: "Direct Messages (DM)",
    chattingWith: "Chatting with",
    typeMessage: "Type a message...",
    send: "Send",
    rememberTagsLabel: "Remember my favorite tags locally",
    consentActive: "Consent granted",
    tagDetailsTitle: "Tag Information",
    usageCount: "Usage count",
    isSponsored: "Sponsored / Bought out",
    buyoutPrice: "Buyout price",
    close: "Close",
    topCommentTitle: "Top Comment of the Day",
    utcResetNotice: "Resets daily at midnight UTC",
    ethicalRulesBtn: "Ethical Guidelines",
    ethicalModalTitle: "Platform Architecture & Ethical Standards",
    serverlessNote: "Architecture: Serverless & Decentralized hybrid backend.",
    ethicalModalText: "Though blockchain ensures data permanence, we strictly oppose hate speech, fraud, and spam. We reserve the right to filter and hide such content in the user interface.",
    footerText: "© 2026 CryptoDiscussionBoard (CDB). All rights reserved."
  },
  pl: {
    brand: "CryptoDiscussionBoard",
    tagline: "Bezpieczna i zdecentralizowana społeczność Web3",
    setNickname: "Ustaw swój nick",
    nicknamePlaceholder: "Wpisz unikalny nick...",
    saveNickname: "Zapisz nick",
    freeChangeNotice: "Pierwsza zmiana nicku jest darmowa! Kolejne kosztują 5 tokenów CDB.",
    freeBadge: "Darmowa zmiana dostępna",
    paidBadge: "Płatna zmiana (5 CDB)",
    nicknameSuccess: "Nick został pomyślnie zaktualizowany!",
    createPost: "Utwórz nowy wpis",
    postPlaceholder: "Co się dzieje dzisiaj na rynkach krypto?",
    tagPlaceholder: "Wybierz lub wpisz tag (np. #Bitcoin, #DeFi)",
    publishPost: "Opublikuj wpis",
    feedTitle: "Dyskusje społeczności",
    chatTitle: "Wiadomości prywatne (DM)",
    chattingWith: "Rozmowa z",
    typeMessage: "Napisz wiadomość...",
    send: "Wyślij",
    rememberTagsLabel: "Zapamiętaj moje ulubione tagi lokalnie",
    consentActive: "Zgoda udzielona",
    tagDetailsTitle: "Informacje o tagu",
    usageCount: "Liczba użyć",
    isSponsored: "Wykupiony / Sponsoring",
    buyoutPrice: "Cena podkupienia",
    close: "Zamknij",
    topCommentTitle: "Komentarz dnia",
    utcResetNotice: "Reset codziennie o północy UTC",
    ethicalRulesBtn: "Zasady etyczne",
    ethicalModalTitle: "Architektura platformy i standardy etyczne",
    serverlessNote: "Architektura: hybrydowa bezserwerowa i zdecentralizowana.",
    ethicalModalText: "Choć blockchain zapewnia trwałość danych, stanowczo sprzeciwiamy się mowie nienawiści, oszustwom i spamowi. Zastrzegamy sobie prawo do filtrowania i ukrywania takich treści w interfejsie użytkownika.",
    footerText: "© 2026 CryptoDiscussionBoard (CDB). Wszelkie prawa zastrzeżone."
  },
  de: {
    brand: "CryptoDiscussionBoard",
    tagline: "Sichere und dezentrale Web3-Community",
    setNickname: "Spitznamen festlegen",
    nicknamePlaceholder: "Eindeutigen Spitznamen eingeben...",
    saveNickname: "Spitznamen speichern",
    freeChangeNotice: "Die erste Namensänderung ist kostenlos! Weitere kosten 5 CDB-Token.",
    freeBadge: "Kostenlose Änderung verfügbar",
    paidBadge: "Kostenpflichtige Änderung (5 CDB)",
    nicknameSuccess: "Spitzname erfolgreich aktualisiert!",
    createPost: "Neuen Beitrag erstellen",
    postPlaceholder: "Was passiert heute auf den Krypto-Märkten?",
    tagPlaceholder: "Tag auswählen oder eingeben (z. B. #Bitcoin, #DeFi)",
    publishPost: "Beitrag veröffentlichen",
    feedTitle: "Community-Diskussionen",
    chatTitle: "Direktnachrichten (DM)",
    chattingWith: "Chatten mit",
    typeMessage: "Nachricht schreiben...",
    send: "Senden",
    rememberTagsLabel: "Meine Lieblings-Tags lokal speichern",
    consentActive: "Einwilligung erteilt",
    tagDetailsTitle: "Tag-Informationen",
    usageCount: "Verwendungshäufigkeit",
    isSponsored: "Gesponsert / Übernommen",
    buyoutPrice: "Übernahmepreis",
    close: "Schließen",
    topCommentTitle: "Top-Kommentar des Tages",
    utcResetNotice: "Reset täglich um Mitternacht UTC",
    ethicalRulesBtn: "Ethische Richtlinien",
    ethicalModalTitle: "Plattformarchitektur & Ethische Standards",
    serverlessNote: "Architektur: Serverless & Dezentrales Hybrid-Backend.",
    ethicalModalText: "Obwohl die Blockchain die Datenspeicherung gewährleistet, lehnen wir Hassrede, Betrug und Spam entschieden ab. Wir behalten uns das Recht vor, solche Inhalte in der Benutzeroberfläche zu filtern und auszublenden.",
    footerText: "© 2026 CryptoDiscussionBoard (CDB). Alle Rechte vorbehalten."
  }
};

// ==========================================
// Modular Ad Slot Component
// ==========================================
function AdSlot({ type = "banner" }) {
  // Returns null by default, ready for future ad network integration without layout break
  return null;
}

export default function App() {
  // ==========================================
  // State Management & i18n
  // ==========================================
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const t = translations[currentLanguage];

  // Nickname state
  const [nickname, setNickname] = useState('');
  const [confirmedNickname, setConfirmedNickname] = useState('');
  const [hasUsedFreeChange, setHasUsedFreeChange] = useState(false);
  const [nicknameNotice, setNicknameNotice] = useState('');

  // Local Storage & Favorite Tags consent state
  const [localStorageConsent, setLocalStorageConsent] = useState(() => {
    return localStorage.getItem('cdb_local_consent') === 'true';
  });
  const [favoriteTags, setFavoriteTags] = useState(() => {
    if (localStorage.getItem('cdb_local_consent') === 'true') {
      try {
        return JSON.parse(localStorage.getItem('cdb_fav_tags') || '["#Bitcoin", "#DeFi"]');
      } catch {
        return ["#Bitcoin", "#DeFi"];
      }
    }
    return [];
  });

  // Post creation state
  const [postContent, setPostContent] = useState('');
  const [postTag, setPostTag] = useState('#General');
  const [postsList, setPostsList] = useState([
    { id: 1, author: 'CryptoWhale', content: 'Bull run is just getting started! Keep an eye on layer 2 tokens.', tag: '#Bitcoin', timestamp: '10m ago', votes: 42 },
    { id: 2, author: 'SatoshiFan', content: 'Just deployed my first smart contract on testnet. Exciting times!', tag: '#DeFi', timestamp: '25m ago', votes: 19 }
  ]);

  // Chat / DM state (1-on-1 dynamic partner)
  const [activeChatUser, setActiveChatUser] = useState('CryptoWhale');
  const [chatThreads, setChatThreads] = useState({
    'CryptoWhale': [
      { id: 1, sender: 'CryptoWhale', text: 'Hey, did you check the latest governance proposal?', incoming: true },
      { id: 2, sender: 'You', text: 'Yes, voting in favor today.', incoming: false }
    ],
    'SatoshiFan': [
      { id: 1, sender: 'SatoshiFan', text: 'Nice smart contract breakdown earlier!', incoming: true }
    ]
  });
  const [newMessage, setNewMessage] = useState('');

  // Modals state
  const [selectedTagForInfo, setSelectedTagForInfo] = useState(null);
  const [isEthicalModalOpen, setIsEthicalModalOpen] = useState(false);

  // ==========================================
  // Effects & Local Storage Sync
  // ==========================================
  const handleConsentToggle = (checked) => {
    setLocalStorageConsent(checked);
    localStorage.setItem('cdb_local_consent', checked ? 'true' : 'false');
    if (!checked) {
      localStorage.removeItem('cdb_fav_tags');
      setFavoriteTags([]);
    } else {
      localStorage.setItem('cdb_fav_tags', JSON.stringify(['#Bitcoin', '#DeFi']));
      setFavoriteTags(['#Bitcoin', '#DeFi']);
    }
  };

  // ==========================================
  // Event Handlers
  // ==========================================
  const handleSaveNickname = (e) => {
    e.preventDefault();
    if (!nickname.trim()) return;

    setConfirmedNickname(nickname);
    setHasUsedFreeChange(true);
    setNicknameNotice(t.nicknameSuccess);
    setTimeout(() => setNicknameNotice(''), 4000);
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!postContent.trim()) return;

    const formattedTag = postTag.startsWith('#') ? postTag : `#${postTag}`;
    const newPostItem = {
      id: Date.now(),
      author: confirmedNickname || 'Anonymous User',
      content: postContent,
      tag: formattedTag,
      timestamp: 'Just now',
      votes: 1
    };

    setPostsList([newPostItem, ...postsList]);
    setPostContent('');

    // If local storage consent is active, save tag to favorites if unique
    if (localStorageConsent && !favoriteTags.includes(formattedTag)) {
      const updatedTags = [...favoriteTags, formattedTag];
      setFavoriteTags(updatedTags);
      localStorage.setItem('cdb_fav_tags', JSON.stringify(updatedTags));
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessages = chatThreads[activeChatUser] || [];
    const updatedMessages = [
      ...userMessages,
      { id: Date.now(), sender: 'You', text: newMessage, incoming: false }
    ];

    setChatThreads({
      ...chatThreads,
      [activeChatUser]: updatedMessages
    });
    setNewMessage('');
  };

  const openChatWithUser = (username) => {
    if (confirmedNickname && username === confirmedNickname) return; // Do not chat with yourself
    setActiveChatUser(username);
    if (!chatThreads[username]) {
      setChatThreads(prev => ({
        ...prev,
        [username]: [{ id: Date.now(), sender: username, text: `Hello! Let's talk about crypto.`, incoming: true }]
      }));
    }
  };

  // Find top comment of the day (highest votes)
  const topComment = postsList.reduce((max, post) => (post.votes > max.votes ? post : max), postsList[0]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800 px-4 lg:px-8 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <span className="font-bold text-lg text-white">CDB</span>
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
              {t.brand}
            </h1>
            <p className="text-xs text-slate-400 hidden sm:block">{t.tagline}</p>
          </div>
        </div>

        {/* Header Controls: Language Switcher & Ethical Guidelines Trigger */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsEthicalModalOpen(true)}
            className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 rounded-xl transition-all shadow-sm"
          >
            {t.ethicalRulesBtn}
          </button>

          <div className="flex bg-slate-800/80 p-1 rounded-xl border border-slate-700/50">
            {['en', 'pl', 'de'].map((lang) => (
              <button
                key={lang}
                onClick={() => setCurrentLanguage(lang)}
                className={`px-3 py-1 text-xs font-semibold uppercase rounded-lg transition-all duration-200 ${
                  currentLanguage === lang
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Modular Ad Slot Integration Point */}
      <AdSlot type="banner" />

      {/* ================= MAIN CONTAINER ================= */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Nickname, Post Creator & Favorite Tags */}
        <div className="space-y-6 lg:col-span-1">
          
          {/* Nickname Manager Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl shadow-black/20">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-sm tracking-wide text-slate-200 uppercase">{t.setNickname}</h2>
              <span className={`text-[10px] px-2.5 py-1 rounded-full font-medium ${
                hasUsedFreeChange 
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                  : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
              }`}>
                {hasUsedFreeChange ? t.paidBadge : t.freeBadge}
              </span>
            </div>

            <form onSubmit={handleSaveNickname} className="space-y-3">
              <div>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder={t.nicknamePlaceholder}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-medium text-sm py-2.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all"
              >
                {t.saveNickname}
              </button>
            </form>

            <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">{t.freeChangeNotice}</p>
            {nicknameNotice && (
              <p className="text-xs text-emerald-400 mt-2 font-medium bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                {nicknameNotice}
              </p>
            )}
          </div>

          {/* Post Creation Form Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl shadow-black/20">
            <h2 className="font-semibold text-sm tracking-wide text-slate-200 uppercase mb-3">{t.createPost}</h2>
            <form onSubmit={handleCreatePost} className="space-y-3">
              <textarea
                rows="3"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder={t.postPlaceholder}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              />
              <input
                type="text"
                value={postTag}
                onChange={(e) => setPostTag(e.target.value)}
                placeholder={t.tagPlaceholder}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-500 active:scale-[0.99] text-white font-medium text-sm py-2.5 rounded-xl shadow-lg shadow-violet-600/20 transition-all"
              >
                {t.publishPost}
              </button>
            </form>

            {/* Render local favorite tags if consent is active */}
            {localStorageConsent && favoriteTags.length > 0 && (
              <div className="mt-4 pt-3 border-t border-slate-800">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-2 font-medium">Favorite Tags:</span>
                <div className="flex flex-wrap gap-1.5">
                  {favoriteTags.map((favTag, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPostTag(favTag)}
                      className="text-[10px] bg-slate-950 hover:bg-slate-800 text-indigo-300 border border-indigo-500/30 px-2.5 py-1 rounded-lg transition-all"
                    >
                      {favTag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Center/Right Columns: Top Comment, Feed & Chat */}
        <div className="space-y-6 lg:col-span-2">
          
          {/* Top Comment of the Day Box */}
          {topComment && (
            <div className="bg-gradient-to-r from-indigo-950/60 via-slate-900 to-violet-950/60 border border-indigo-500/30 rounded-2xl p-5 shadow-xl shadow-indigo-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold uppercase tracking-wider">
                    🏆 {t.topCommentTitle}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">{t.utcResetNotice}</span>
              </div>
              <p className="text-sm text-slate-200 italic mb-2">"{topComment.content}"</p>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <button 
                  onClick={() => openChatWithUser(topComment.author)}
                  className="text-indigo-400 hover:underline font-medium"
                >
                  By: {topComment.author}
                </button>
                <span className="font-mono text-indigo-300">{topComment.votes} upvotes</span>
              </div>
            </div>
          )}

          {/* Feed Section */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl shadow-black/20">
            <h2 className="font-semibold text-sm tracking-wide text-slate-200 uppercase mb-4">{t.feedTitle}</h2>
            <div className="space-y-4">
              {postsList.map((post) => (
                <div key={post.id} className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 transition-all hover:border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-7 w-7 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-xs flex items-center justify-center border border-indigo-500/30">
                        {post.author.charAt(0).toUpperCase()}
                      </div>
                      <button 
                        onClick={() => openChatWithUser(post.author)}
                        className="font-medium text-sm text-slate-200 hover:text-indigo-400 transition-colors text-left"
                      >
                        {post.author}
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* Tag with Info Icon ℹ️ */}
                      <div className="flex items-center space-x-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md px-2 py-0.5">
                        <span className="text-[10px] text-indigo-400 font-mono">{post.tag}</span>
                        <button
                          onClick={() => setSelectedTagForInfo({ name: post.tag, count: postsList.filter(p => p.tag === post.tag).length })}
                          className="text-slate-400 hover:text-indigo-300 text-[10px] transition-colors ml-0.5"
                          title="Tag Details"
                        >
                          ℹ️
                        </button>
                      </div>
                      <span className="text-xs text-slate-500">{post.timestamp}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{post.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DM / 1-on-1 Chat Section */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl shadow-black/20 flex flex-col h-80">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-sm tracking-wide text-slate-200 uppercase">{t.chatTitle}</h2>
              <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-lg border border-indigo-500/20">
                {t.chattingWith}: <strong className="font-semibold">{activeChatUser}</strong>
              </span>
            </div>
            
            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-2 mb-3">
              {(chatThreads[activeChatUser] || []).map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[75%] ${msg.incoming ? 'self-start items-start' : 'self-end items-end ml-auto'}`}
                >
                  <span className="text-[10px] text-slate-500 mb-0.5 px-1">{msg.sender}</span>
                  <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.incoming 
                      ? 'bg-slate-800 text-slate-200 rounded-tl-sm border border-slate-700/50' 
                      : 'bg-indigo-600 text-white rounded-tr-sm shadow-md shadow-indigo-600/20'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input Form */}
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={t.typeMessage}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 rounded-xl text-xs font-semibold text-white shadow-md shadow-indigo-600/20 transition-all"
              >
                {t.send}
              </button>
            </form>
          </div>

        </div>

      </main>

      {/* ================= MODALS ================= */}

      {/* Tag Details Modal triggered by ℹ️ */}
      {selectedTagForInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-sm w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-white">{t.tagDetailsTitle}: <span className="text-indigo-400">{selectedTagForInfo.name}</span></h3>
              <button 
                onClick={() => setSelectedTagForInfo(null)}
                className="text-slate-400 hover:text-white text-sm font-bold"
              >
                ✕
              </button>
            </div>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex justify-between p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400">{t.usageCount}:</span>
                <span className="font-semibold text-slate-100">{selectedTagForInfo.count} posts</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400">{t.isSponsored}:</span>
                <span className="font-semibold text-emerald-400">No (Community owned)</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400">{t.buyoutPrice}:</span>
                <span className="font-semibold text-indigo-400">50 CDB Tokens</span>
              </div>
            </div>
            <button
              onClick={() => setSelectedTagForInfo(null)}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs py-2.5 rounded-xl transition-all"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}

      {/* Ethical Guidelines & Architecture Modal */}
      {isEthicalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-white">{t.ethicalModalTitle}</h3>
              <button 
                onClick={() => setIsEthicalModalOpen(false)}
                className="text-slate-400 hover:text-white text-sm font-bold"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p className="bg-indigo-950/40 border border-indigo-500/20 p-3 rounded-xl text-indigo-300 font-medium">
                {t.serverlessNote}
              </p>
              <p className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                {t.ethicalModalText}
              </p>
            </div>
            <button
              onClick={() => setIsEthicalModalOpen(false)}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs py-2.5 rounded-xl transition-all shadow-lg shadow-indigo-600/20"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800/80 bg-slate-900/40 px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 mt-auto">
        <div>{t.footerText}</div>
        
        {/* Local Storage Consent Toggle Switch */}
        <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
          <span className="text-slate-400 text-[11px]">{t.rememberTagsLabel}</span>
          <input
            type="checkbox"
            checked={localStorageConsent}
            onChange={(e) => handleConsentToggle(e.target.checked)}
            className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
          />
        </div>
      </footer>

    </div>
  );
}
