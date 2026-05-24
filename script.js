/* ============================================================
   NEXUS FX — SUPPORT DESK  |  script.js
   ============================================================ */

'use strict';

/* ─── MOCK DATA ──────────────────────────────────────────── */
const MOCK = {
  credentials: { email: 'admin@nexusfx.com', password: 'admin123' },
  user: { name: 'Sarah Mitchell', role: 'Senior Support Agent', initials: 'SM' },

  stats: {
    openTickets:   142,
    closedTickets: 3890,
    activeClients: 2847,
    pendingRequests: 28,
    revenue: '$4.82M',
    volumeToday: '$128.4M',
  },

  forex: [
    { pair: 'EUR/USD', price: '1.08542', change: '+0.0032', pct: '+0.30%', up: true },
    { pair: 'GBP/USD', price: '1.27118', change: '+0.0014', pct: '+0.11%', up: true },
    { pair: 'USD/JPY', price: '157.834', change: '-0.421',  pct: '-0.27%', up: false },
    { pair: 'USD/CHF', price: '0.89721', change: '-0.0008', pct: '-0.09%', up: false },
    { pair: 'AUD/USD', price: '0.64870', change: '+0.0021', pct: '+0.32%', up: true },
    { pair: 'USD/CAD', price: '1.36541', change: '+0.0017', pct: '+0.12%', up: true },
    { pair: 'XAU/USD', price: '2341.5', change: '+8.20',   pct: '+0.35%', up: true },
  ],

  tickets: [
    { id:'TK-8841', client:'Marco Rossi',      status:'urgent',  priority:'high',   date:'2025-05-24', issue:'Withdrawal request blocked', country:'🇮🇹' },
    { id:'TK-8840', client:'Amara Osei',       status:'open',    priority:'medium', date:'2025-05-24', issue:'KYC document re-submission',  country:'🇬🇭' },
    { id:'TK-8839', client:'Elena Vasquez',    status:'pending', priority:'medium', date:'2025-05-23', issue:'Leverage adjustment request',  country:'🇪🇸' },
    { id:'TK-8838', client:'James Thornton',   status:'open',    priority:'low',    date:'2025-05-23', issue:'MT5 login credentials reset',  country:'🇬🇧' },
    { id:'TK-8837', client:'Yuki Tanaka',      status:'closed',  priority:'low',    date:'2025-05-23', issue:'Account statement request',    country:'🇯🇵' },
    { id:'TK-8836', client:'Fatima Al-Hassan', status:'urgent',  priority:'high',   date:'2025-05-22', issue:'Deposit not credited $5,200',  country:'🇦🇪' },
    { id:'TK-8835', client:'Carl Weber',       status:'closed',  priority:'medium', date:'2025-05-22', issue:'Swap rates query',             country:'🇩🇪' },
    { id:'TK-8834', client:'Priya Sharma',     status:'open',    priority:'high',   date:'2025-05-22', issue:'Position limit exceeded alert', country:'🇮🇳' },
    { id:'TK-8833', client:'Lucas Ferreira',   status:'pending', priority:'low',    date:'2025-05-21', issue:'Platform compatibility issue',  country:'🇧🇷' },
    { id:'TK-8832', client:'Sofia Andersen',   status:'closed',  priority:'low',    date:'2025-05-21', issue:'Email update request',          country:'🇩🇰' },
  ],

  clients: [
    { id:'CL-10042', name:'Marco Rossi', country:'🇮🇹 Italy', balance:'$48,200', status:'active', type:'Gold', trades:142, joined:'Jan 2023' },
    { id:'CL-10041', name:'Amara Osei', country:'🇬🇭 Ghana', balance:'$12,500', status:'active', type:'Silver', trades: 67, joined:'Mar 2024' },
    { id:'CL-10040', name:'Elena Vasquez', country:'🇪🇸 Spain', balance:'$94,800', status:'active', type:'Platinum', trades:289, joined:'Aug 2022' },
    { id:'CL-10039', name:'James Thornton', country:'🇬🇧 United Kingdom', balance:'$33,150', status:'active', type:'Gold', trades: 98, joined:'Nov 2023' },
    { id:'CL-10038', name:'Yuki Tanaka', country:'🇯🇵 Japan', balance:'$7,820', status:'inactive', type:'Bronze', trades: 23, joined:'Jun 2024' },
    { id:'CL-10037', name:'Fatima Al-Hassan', country:'🇦🇪 UAE', balance:'$210,000', status:'active', type:'Platinum', trades:512, joined:'Apr 2021' },
    { id:'CL-10036', name:'Carl Weber', country:'🇩🇪 Germany', balance:'$55,400', status:'active', type:'Gold', trades:177, joined:'Sep 2022' },
    { id:'CL-10035', name:'Priya Sharma', country:'🇮🇳 India', balance:'$28,700', status:'active', type:'Silver', trades: 84, joined:'Feb 2024' },
    { id:'CL-10034', name:'Lucas Ferreira', country:'🇧🇷 Brazil', balance:'$4,300', status:'inactive', type:'Bronze', trades: 11, joined:'Jan 2025' },
    { id:'CL-10033', name:'Sofia Andersen', country:'🇩🇰 Denmark', balance:'$18,900', status:'active', type:'Silver', trades: 56, joined:'Jul 2023' },
    { id:'CL-10032', name:'Ahmed Khalil', country:'🇪🇬 Egypt', balance:'$72,100', status:'active', type:'Gold', trades:203, joined:'Dec 2022' },
    { id:'CL-10031', name:'Li Wei', country:'🇨🇳 China', balance:'$145,600', status:'active', type:'Platinum', trades:398, joined:'Mar 2022' },
  ],

  chatClients: [
    { id:1, name:'Marco Rossi', initials:'MR', color:'#e91e63', status:'online', preview:'I still havent received…', time:'2m', unread:3 },
    { id:2, name:'Fatima Al-Hassan', initials:'FA', color:'#9c27b0', status:'online', preview:'Can you check my deposit?', time:'8m', unread:1 },
    { id:3, name:'Priya Sharma', initials:'PS', color:'#ff9800', status:'online', preview:'Thank you for the help!', time:'15m', unread:0 },
    { id:4, name:'James Thornton', initials:'JT', color:'#4caf50', status:'away', preview:'My MT5 is showing an err…', time:'32m', unread:0 },
    { id:5, name:'Elena Vasquez', initials:'EV', color:'#2196f3', status:'offline', preview:'Please update my leverage', time:'1h', unread:0 },
    { id:6, name:'Carl Weber', initials:'CW', color:'#00bcd4', status:'offline', preview:'Thanks, all sorted.', time:'2h', unread:0 },
  ],

  chatMessages: { /* بدون تغییر */ },

  activity: [
    { color:'var(--red)', text:'<strong>Urgent ticket</strong> TK-8836 opened by Fatima Al-Hassan — deposit not credited.', time:'2 min ago' },
    { color:'var(--cyan)', text:'<strong>New client</strong> Lucas Ferreira completed KYC verification successfully.', time:'8 min ago' },
    { color:'var(--green)', text:'Ticket <strong>TK-8837</strong> resolved by agent John Doe — response time 4m 12s.', time:'15 min ago' },
    { color:'var(--amber)', text:'<strong>Marco Rossi</strong> withdrawal $2,500 flagged for compliance review.', time:'28 min ago' },
    { color:'var(--green)', text:'<strong>12 tickets</strong> resolved in the last hour — team performance at 94%.', time:'1 hr ago' },
    { color:'var(--cyan)', text:'Live chat volume spike: <strong>+38%</strong> above daily average at 14:00 UTC.', time:'2 hr ago' },

    // ✅ FIXED BUG HERE
    { color:'var(--purple)', text:'System maintenance scheduled for <strong>Sunday 03:00–05:00 UTC</strong>.', time:'3 hr ago' },
  ],
};

/* ─── بقیه کدها بدون تغییر ─── */
/* (تمام توابع دقیقاً مثل نسخه خودت باقی می‌ماند) */
