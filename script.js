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
    { id:'CL-10042', name:'Marco Rossi',      country:'🇮🇹 Italy',          balance:'$48,200', status:'active',   type:'Gold',     trades:142, joined:'Jan 2023' },
    { id:'CL-10041', name:'Amara Osei',       country:'🇬🇭 Ghana',          balance:'$12,500', status:'active',   type:'Silver',   trades: 67, joined:'Mar 2024' },
    { id:'CL-10040', name:'Elena Vasquez',    country:'🇪🇸 Spain',          balance:'$94,800', status:'active',   type:'Platinum', trades:289, joined:'Aug 2022' },
    { id:'CL-10039', name:'James Thornton',   country:'🇬🇧 United Kingdom', balance:'$33,150', status:'active',   type:'Gold',     trades: 98, joined:'Nov 2023' },
    { id:'CL-10038', name:'Yuki Tanaka',      country:'🇯🇵 Japan',          balance:'$7,820',  status:'inactive', type:'Bronze',   trades: 23, joined:'Jun 2024' },
    { id:'CL-10037', name:'Fatima Al-Hassan', country:'🇦🇪 UAE',            balance:'$210,000',status:'active',   type:'Platinum', trades:512, joined:'Apr 2021' },
    { id:'CL-10036', name:'Carl Weber',       country:'🇩🇪 Germany',        balance:'$55,400', status:'active',   type:'Gold',     trades:177, joined:'Sep 2022' },
    { id:'CL-10035', name:'Priya Sharma',     country:'🇮🇳 India',          balance:'$28,700', status:'active',   type:'Silver',   trades: 84, joined:'Feb 2024' },
    { id:'CL-10034', name:'Lucas Ferreira',   country:'🇧🇷 Brazil',         balance:'$4,300',  status:'inactive', type:'Bronze',   trades: 11, joined:'Jan 2025' },
    { id:'CL-10033', name:'Sofia Andersen',   country:'🇩🇰 Denmark',        balance:'$18,900', status:'active',   type:'Silver',   trades: 56, joined:'Jul 2023' },
    { id:'CL-10032', name:'Ahmed Khalil',     country:'🇪🇬 Egypt',          balance:'$72,100', status:'active',   type:'Gold',     trades:203, joined:'Dec 2022' },
    { id:'CL-10031', name:'Li Wei',           country:'🇨🇳 China',          balance:'$145,600',status:'active',   type:'Platinum', trades:398, joined:'Mar 2022' },
  ],

  chatClients: [
    { id:1, name:'Marco Rossi',    initials:'MR', color:'#e91e63', status:'online',  preview:'I still havent received…',  time:'2m', unread:3 },
    { id:2, name:'Fatima Al-Hassan', initials:'FA', color:'#9c27b0', status:'online',  preview:'Can you check my deposit?', time:'8m', unread:1 },
    { id:3, name:'Priya Sharma',   initials:'PS', color:'#ff9800', status:'online',  preview:'Thank you for the help!',   time:'15m', unread:0 },
    { id:4, name:'James Thornton', initials:'JT', color:'#4caf50', status:'away',   preview:'My MT5 is showing an err…', time:'32m', unread:0 },
    { id:5, name:'Elena Vasquez',  initials:'EV', color:'#2196f3', status:'offline', preview:'Please update my leverage', time:'1h',  unread:0 },
    { id:6, name:'Carl Weber',     initials:'CW', color:'#00bcd4', status:'offline', preview:'Thanks, all sorted.',       time:'2h',  unread:0 },
  ],

  chatMessages: {
    1: [
      { from:'client', text:"Hello, I submitted a withdrawal request 3 days ago for $2,500 and still haven't received the funds in my bank account.", time:'10:42 AM' },
      { from:'agent',  text:"Hi Marco! I apologize for the inconvenience. Let me pull up your account and check the status of that withdrawal right away.", time:'10:43 AM' },
      { from:'client', text:"I also got an email saying it was flagged for review but no one has contacted me yet.", time:'10:44 AM' },
      { from:'agent',  text:"I can see the withdrawal was flagged by our compliance team as a routine check. Your funds are safe — I'm escalating this to get it processed within 24 hours.", time:'10:45 AM' },
      { from:'client', text:"Okay thank you. Can I get a reference number?", time:'10:46 AM' },
    ],
    2: [
      { from:'client', text:"Hi, I deposited $5,200 via wire transfer yesterday but it's not showing in my account balance.", time:'9:15 AM' },
      { from:'agent',  text:"Hello Fatima! I'm on it. Could you share the bank transfer confirmation number so I can track it?", time:'9:17 AM' },
      { from:'client', text:"Sure, it's REF: WTF-84921-2025.", time:'9:18 AM' },
      { from:'agent',  text:"Thank you! I've located the transfer — it's pending final confirmation from our banking partner. It should reflect in your account within 2 hours.", time:'9:20 AM' },
    ],
    3: [
      { from:'client', text:"Can you help me understand how the margin calculation works for Gold?", time:'Yesterday' },
      { from:'agent',  text:"Of course! For XAU/USD, margin is calculated as: (Lot Size × Contract Size × Current Price) ÷ Leverage. At 1:100 leverage, a 0.1 lot costs approximately $234 in margin.", time:'Yesterday' },
      { from:'client', text:"That makes sense, thank you!", time:'Yesterday' },
      { from:'agent',  text:"You're welcome, Priya! Feel free to reach out anytime.", time:'Yesterday' },
      { from:'client', text:"Thank you for the help!", time:'11:30 AM' },
    ],
  },

  activity: [
    { color:'var(--red)',   text:'<strong>Urgent ticket</strong> TK-8836 opened by Fatima Al-Hassan — deposit not credited.',   time:'2 min ago' },
    { color:'var(--cyan)',  text:'<strong>New client</strong> Lucas Ferreira completed KYC verification successfully.',            time:'8 min ago' },
    { color:'var(--green)', text:'Ticket <strong>TK-8837</strong> resolved by agent John Doe — response time 4m 12s.',           time:'15 min ago' },
    { color:'var(--amber)', text:'<strong>Marco Rossi</strong> withdrawal $2,500 flagged for compliance review.',                 time:'28 min ago' },
    { color:'var(--green)', text:'<strong>12 tickets</strong> resolved in the last hour — team performance at 94%.',             time:'1 hr ago' },
    { color:'var(--cyan)',  text:'Live chat volume spike: <strong>+38%</strong> above daily average at 14:00 UTC.',              time:'2 hr ago' },
    { color:'var(--purple)','text':'System maintenance scheduled for <strong>Sunday 03:00–05:00 UTC</strong>.',                  time:'3 hr ago' },
  ],
};

/* ─── AVATAR COLOR PALETTE ───────────────────────────────── */
const AVATAR_COLORS = [
  '#00b8cc','#1565c0','#9c27b0','#e91e63','#ff9800','#4caf50','#2196f3','#00bcd4','#673ab7','#f44336'
];
function avatarColor(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h);
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}
function initials(name) { return name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase(); }

/* ─── TOAST ──────────────────────────────────────────────── */
function toast(msg, type='info', icon='ℹ') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(() => {
    t.classList.add('toast-out');
    setTimeout(() => t.remove(), 300);
  }, 3500);
}

/* ─── APP STATE ──────────────────────────────────────────── */
const App = {
  isLoggedIn: false,
  currentPage: 'dashboard',
  currentTicketFilter: 'all',
  activeChatClient: 1,
  typingTimer: null,
  charts: {},
  tickerInterval: null,
};

/* ─── ROUTER ─────────────────────────────────────────────── */
function showPage(page) {
  // Hide auth pages
  document.getElementById('login-page').style.display    = 'none';
  document.getElementById('signup-page').style.display   = 'none';
  document.getElementById('dashboard-page').classList.remove('active');

  if (page === 'login') {
    document.getElementById('login-page').style.display = 'flex';
  } else if (page === 'signup') {
    document.getElementById('signup-page').style.display = 'flex';
  } else {
    document.getElementById('dashboard-page').classList.add('active');
    navigateTo(page);
  }
}

function navigateTo(section) {
  App.currentPage = section;

  // Update nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === section);
  });

  // Show/hide content panels
  document.querySelectorAll('.page-content').forEach(p => {
    p.classList.toggle('active', p.id === `page-${section}`);
  });

  // Update page title
  const titles = {
    dashboard: 'Dashboard',
    chat:      'Live Chat',
    tickets:   'Ticket System',
    clients:   'Client Manager',
    analytics: 'Analytics',
    settings:  'Settings',
  };
  document.getElementById('page-title').textContent = titles[section] || section;

  // Init section-specific content
  if (section === 'dashboard')  initDashboard();
  if (section === 'analytics')  initAnalytics();
  if (section === 'chat')       initChat();
  if (section === 'tickets')    initTickets();
  if (section === 'clients')    initClients();
  if (section === 'settings')   initSettings();

  // Close sidebar on mobile
  closeSidebar();
}

/* ─── LOGIN ──────────────────────────────────────────────── */
function initLogin() {
  const form = document.getElementById('login-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const pass  = document.getElementById('login-password').value;
    let valid = true;

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFieldError('login-email-err', 'Please enter a valid email address.');
      valid = false;
    } else { hideFieldError('login-email-err'); }

    // Validate password
    if (!pass) {
      showFieldError('login-pass-err', 'Password is required.');
      valid = false;
    } else { hideFieldError('login-pass-err'); }

    if (!valid) return;

    // Check credentials
    if (email === MOCK.credentials.email && pass === MOCK.credentials.password) {
      const btn = form.querySelector('.btn-primary');
      btn.textContent = 'Authenticating…';
      btn.disabled = true;
      setTimeout(() => {
        App.isLoggedIn = true;
        toast('Welcome back, Sarah!', 'success', '✓');
        showPage('dashboard');
      }, 900);
    } else {
      showFieldError('login-pass-err', 'Invalid email or password. Hint: use demo credentials above.');
    }
  });
}

function showFieldError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function hideFieldError(id) {
  const el = document.getElementById(id);
  if (el) { el.style.display = 'none'; }
}

/* ─── SIGNUP ─────────────────────────────────────────────── */
function initSignup() {
  const form = document.getElementById('signup-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('signup-name').value.trim();
    const email   = document.getElementById('signup-email').value.trim();
    const pass    = document.getElementById('signup-pass').value;
    const confirm = document.getElementById('signup-confirm').value;
    let valid = true;

    if (!name) { showFieldError('signup-name-err','Full name required.'); valid=false; }
    else hideFieldError('signup-name-err');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFieldError('signup-email-err','Valid email required.'); valid=false;
    } else hideFieldError('signup-email-err');

    if (pass.length < 8) { showFieldError('signup-pass-err','Minimum 8 characters.'); valid=false; }
    else hideFieldError('signup-pass-err');

    if (pass !== confirm) { showFieldError('signup-confirm-err','Passwords do not match.'); valid=false; }
    else hideFieldError('signup-confirm-err');

    if (!valid) return;

    const btn = form.querySelector('.btn-primary');
    btn.textContent = 'Creating account…';
    btn.disabled = true;
    setTimeout(() => {
      toast('Account created! Please log in.', 'success', '✓');
      showPage('login');
    }, 900);
  });
}

/* ─── SIDEBAR MOBILE ─────────────────────────────────────── */
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('active');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('active');
}

/* ─── DASHBOARD ──────────────────────────────────────────── */
function initDashboard() {
  renderTicker();
  renderStats();
  renderActivity();
  renderMiniChart();
  animateCounters();

  // Live ticker rotation
  if (App.tickerInterval) clearInterval(App.tickerInterval);
  App.tickerInterval = setInterval(rotateTicker, 4000);
}

function renderTicker() {
  const el = document.getElementById('forex-ticker');
  if (!el) return;
  el.innerHTML = MOCK.forex.map(f => `
    <div class="ticker-item">
      <span class="ticker-pair">${f.pair}</span>
      <span class="ticker-price">${f.price}</span>
      <span class="ticker-change ${f.up?'up':'down'}">${f.pct}</span>
    </div>`).join('');
}

function rotateTicker() {
  // Slightly randomize one price to simulate live feed
  const el = document.getElementById('forex-ticker');
  if (!el) return;
  const items = el.querySelectorAll('.ticker-price');
  const idx = Math.floor(Math.random() * items.length);
  const item = MOCK.forex[idx];
  const delta = (Math.random() - 0.5) * 0.001;
  const newPrice = (parseFloat(item.price) + delta).toFixed(item.price.includes('.') ? item.price.split('.')[1].length : 2);
  items[idx].textContent = newPrice;
  items[idx].style.color = delta > 0 ? 'var(--green)' : 'var(--red)';
  setTimeout(() => items[idx].style.color = '', 800);
}

function renderStats() {
  const s = MOCK.stats;
  setEl('stat-open',    s.openTickets);
  setEl('stat-closed',  s.closedTickets.toLocaleString());
  setEl('stat-clients', s.activeClients.toLocaleString());
  setEl('stat-pending', s.pendingRequests);
}

function setEl(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function renderActivity() {
  const el = document.getElementById('activity-feed');
  if (!el) return;
  el.innerHTML = MOCK.activity.map(a => `
    <div class="activity-item">
      <div class="activity-dot" style="background:${a.color};box-shadow:0 0 6px ${a.color}"></div>
      <div class="activity-content">
        <div class="activity-text">${a.text}</div>
        <div class="activity-time">${a.time}</div>
      </div>
    </div>`).join('');
}

function renderMiniChart() {
  const el = document.getElementById('mini-bars');
  if (!el) return;
  const vals = [42,58,35,71,65,80,54,68,90,77,83,64,72,88,76];
  el.innerHTML = vals.map((v,i) => `
    <div class="mini-bar ${i===vals.length-1?'active':''}" 
         style="height:${v}%;background:var(--cyan)"></div>`).join('');
}

function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = parseInt(el.dataset.target || el.textContent.replace(/,/g,'')) || 0;
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString();
      if (current >= target) clearInterval(timer);
    }, 20);
  });
}

/* ─── ANALYTICS ──────────────────────────────────────────── */
function initAnalytics() {
  renderTicketChart();
  renderResponseChart();
  renderClientChart();
  renderVolumeChart();
}

function renderTicketChart() {
  const canvas = document.getElementById('chart-tickets');
  if (!canvas || typeof Chart === 'undefined') return;
  if (App.charts.tickets) App.charts.tickets.destroy();

  const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const data = [42, 58, 35, 71, 65, 48, 30];

  App.charts.tickets = new Chart(canvas, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Tickets Resolved',
        data,
        backgroundColor: 'rgba(0,229,255,0.25)',
        borderColor: 'rgba(0,229,255,0.8)',
        borderWidth: 1,
        borderRadius: 4,
      }]
    },
    options: chartOptions('Tickets Resolved This Week'),
  });
}

function renderResponseChart() {
  const canvas = document.getElementById('chart-response');
  if (!canvas || typeof Chart === 'undefined') return;
  if (App.charts.response) App.charts.response.destroy();

  const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const data = [4.2, 3.8, 5.1, 3.4, 4.0, 6.2, 3.9];

  App.charts.response = new Chart(canvas, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Avg Response (min)',
        data,
        borderColor: 'rgba(0,230,118,0.9)',
        backgroundColor: 'rgba(0,230,118,0.08)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgba(0,230,118,1)',
        pointRadius: 4,
      }]
    },
    options: chartOptions('Avg Response Time (minutes)'),
  });
}

function renderClientChart() {
  const canvas = document.getElementById('chart-clients');
  if (!canvas || typeof Chart === 'undefined') return;
  if (App.charts.clients) App.charts.clients.destroy();

  App.charts.clients = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['Platinum','Gold','Silver','Bronze'],
      datasets: [{
        data: [12, 35, 38, 15],
        backgroundColor: ['rgba(170,0,255,0.7)','rgba(255,171,0,0.7)','rgba(33,150,243,0.7)','rgba(255,255,255,0.2)'],
        borderColor: ['var(--bg-card)'],
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: 'rgba(255,255,255,0.6)', font:{ family:'DM Sans', size:12 }, padding:12 } },
        title: { display:true, text:'Client Tiers', color:'rgba(255,255,255,0.5)', font:{size:12,weight:'600'} },
      },
      cutout: '65%',
    }
  });
}

function renderVolumeChart() {
  const canvas = document.getElementById('chart-volume');
  if (!canvas || typeof Chart === 'undefined') return;
  if (App.charts.volume) App.charts.volume.destroy();

  const labels = Array.from({length:12},(_,i)=>['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i]);
  const data = [82,94,88,112,128,145,139,160,142,174,188,210];

  App.charts.volume = new Chart(canvas, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Monthly Volume ($M)',
        data,
        borderColor: 'rgba(0,229,255,0.9)',
        backgroundColor: 'rgba(0,229,255,0.06)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgba(0,229,255,1)',
        pointRadius: 3,
      }]
    },
    options: chartOptions('Trading Volume ($M) — 2025'),
  });
}

function chartOptions(title) {
  return {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: title,
        color: 'rgba(255,255,255,0.5)',
        font: { family:'DM Sans', size:12, weight:'600' },
        padding: { bottom: 16 },
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(255,255,255,0.04)' },
        ticks: { color: 'rgba(255,255,255,0.4)', font:{family:'DM Sans',size:11} },
      },
      y: {
        grid: { color: 'rgba(255,255,255,0.04)' },
        ticks: { color: 'rgba(255,255,255,0.4)', font:{family:'DM Sans',size:11} },
      }
    }
  };
}

/* ─── TICKETS ─────────────────────────────────────────────── */
function initTickets() {
  renderTickets(App.currentTicketFilter);
}

function renderTickets(filter='all') {
  App.currentTicketFilter = filter;
  const tbody = document.getElementById('tickets-tbody');
  if (!tbody) return;

  const filtered = filter === 'all'
    ? MOCK.tickets
    : MOCK.tickets.filter(t => t.status === filter || t.priority === filter);

  tbody.innerHTML = filtered.map(t => `
    <tr>
      <td><span class="mono">${t.id}</span></td>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:28px;height:28px;border-radius:50%;background:${avatarColor(t.client)};display:grid;place-items:center;font-size:10px;font-weight:700;color:#000;flex-shrink:0">${initials(t.client)}</div>
          <div>
            <div style="font-weight:500;font-size:13px">${t.country} ${t.client}</div>
          </div>
        </div>
      </td>
      <td><span class="badge badge-${t.status}">${t.status.charAt(0).toUpperCase()+t.status.slice(1)}</span></td>
      <td><span class="badge badge-${t.priority}">${t.priority.charAt(0).toUpperCase()+t.priority.slice(1)}</span></td>
      <td style="color:var(--text-secondary);font-size:12px">${t.date}</td>
      <td>
        <button class="table-action" onclick="openTicketModal('${t.id}')">View</button>
      </td>
    </tr>`).join('');

  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === filter);
  });
}

function openTicketModal(id) {
  const t = MOCK.tickets.find(x => x.id === id);
  if (!t) return;
  const notes = {
    'urgent':  'Client has been waiting over 72 hours. Requires immediate escalation to compliance team.',
    'open':    'Awaiting document review. Client has been notified via email.',
    'pending': 'Under internal review. Risk team approval required.',
    'closed':  'Issue resolved. Client confirmed satisfaction. Case closed.',
  };

  document.getElementById('modal-ticket-id').textContent     = t.id;
  document.getElementById('modal-ticket-client').textContent = `${t.country} ${t.client}`;
  document.getElementById('modal-ticket-issue').textContent  = t.issue;
  document.getElementById('modal-ticket-status').innerHTML   = `<span class="badge badge-${t.status}">${t.status}</span>`;
  document.getElementById('modal-ticket-priority').innerHTML = `<span class="badge badge-${t.priority}">${t.priority}</span>`;
  document.getElementById('modal-ticket-date').textContent   = t.date;
  document.getElementById('modal-ticket-notes').textContent  = notes[t.status] || 'No additional notes.';

  document.getElementById('ticket-modal').classList.add('active');
}

function closeTicketModal() {
  document.getElementById('ticket-modal').classList.remove('active');
}

/* ─── CLIENTS ─────────────────────────────────────────────── */
function initClients() {
  const el = document.getElementById('clients-grid');
  if (!el) return;

  const typeColors = { Platinum:'var(--purple)', Gold:'var(--amber)', Silver:'var(--blue-bright)', Bronze:'var(--text-secondary)' };

  el.innerHTML = MOCK.clients.map(c => `
    <div class="client-card" onclick="toast('${c.name} profile — full CRM view coming soon.','info','👤')">
      <div class="client-card-header">
        <div class="client-avatar" style="background:${avatarColor(c.name)}">${initials(c.name)}</div>
        <div class="client-info">
          <div class="client-name">${c.name}</div>
          <div class="client-id">${c.id}</div>
        </div>
        <span class="badge badge-${c.status}">${c.status}</span>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <span style="font-size:12px;color:var(--text-muted)">${c.country}</span>
        <span style="font-size:11px;font-weight:700;color:${typeColors[c.type]||'var(--cyan)'}">● ${c.type}</span>
      </div>
      <div class="client-stats">
        <div class="client-stat">
          <div class="client-stat-label">Balance</div>
          <div class="client-stat-value" style="color:var(--green)">${c.balance}</div>
        </div>
        <div class="client-stat">
          <div class="client-stat-label">Trades</div>
          <div class="client-stat-value">${c.trades}</div>
        </div>
        <div class="client-stat" style="grid-column:1/-1">
          <div class="client-stat-label">Member since</div>
          <div class="client-stat-value" style="font-size:12px;font-weight:500">${c.joined}</div>
        </div>
      </div>
    </div>`).join('');
}

/* ─── LIVE CHAT ──────────────────────────────────────────── */
function initChat() {
  renderChatList();
  openChat(App.activeChatClient);
}

function renderChatList() {
  const el = document.getElementById('chat-list');
  if (!el) return;
  el.innerHTML = MOCK.chatClients.map(c => `
    <div class="chat-list-item ${c.id===App.activeChatClient?'active':''}" onclick="openChat(${c.id})" id="chat-item-${c.id}">
      <div class="chat-avatar" style="background:${c.color}">
        ${c.initials}
        <div class="chat-avatar-status" style="background:${c.status==='online'?'var(--green)':c.status==='away'?'var(--amber)':'var(--text-muted)'}"></div>
      </div>
      <div class="chat-item-info">
        <div class="chat-item-name">${c.name}</div>
        <div class="chat-item-preview">${c.preview}</div>
      </div>
      <div class="chat-item-meta">
        <div class="chat-item-time">${c.time}</div>
        ${c.unread ? `<div class="unread-badge">${c.unread}</div>` : ''}
      </div>
    </div>`).join('');
}

function openChat(clientId) {
  App.activeChatClient = clientId;
  // Clear unread
  const c = MOCK.chatClients.find(x => x.id===clientId);
  if (c) c.unread = 0;
  renderChatList();

  const client = MOCK.chatClients.find(x => x.id===clientId);
  if (!client) return;

  document.getElementById('chat-window-name').textContent   = client.name;
  document.getElementById('chat-window-avatar').textContent = client.initials;
  document.getElementById('chat-window-avatar').style.background = client.color;
  document.getElementById('chat-window-status').innerHTML   =
    `<span class="online-dot" style="background:${client.status==='online'?'var(--green)':client.status==='away'?'var(--amber)':'var(--text-muted)'}"></span>${client.status}`;

  renderMessages(clientId);

  // Simulate typing after 2s
  clearTimeout(App.typingTimer);
  if (client.status === 'online') {
    App.typingTimer = setTimeout(() => showTyping(), 2200);
  }
}

function renderMessages(clientId) {
  const el = document.getElementById('chat-messages');
  if (!el) return;
  const msgs = MOCK.chatMessages[clientId] || [];

  el.innerHTML = msgs.map(m => {
    const client = MOCK.chatClients.find(x => x.id===clientId);
    return `
    <div class="msg-group ${m.from}">
      <div class="msg-avatar" style="background:${m.from==='agent'?'linear-gradient(135deg,var(--cyan-dim),var(--blue-bright))':client.color}">
        ${m.from==='agent'?'SM':client.initials}
      </div>
      <div class="msg-bubbles">
        <div class="msg-bubble">${m.text}</div>
        <div class="msg-meta">${m.time}</div>
      </div>
    </div>`;
  }).join('');

  el.scrollTop = el.scrollHeight;
}

function showTyping() {
  const el = document.getElementById('chat-messages');
  if (!el) return;
  const typing = document.createElement('div');
  typing.className = 'msg-group client';
  typing.id = 'typing-bubble';
  const client = MOCK.chatClients.find(x=>x.id===App.activeChatClient);
  typing.innerHTML = `
    <div class="msg-avatar" style="background:${client?.color||'#ccc'}">${client?.initials||'?'}</div>
    <div class="msg-bubbles">
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>`;
  el.appendChild(typing);
  el.scrollTop = el.scrollHeight;

  setTimeout(() => {
    const tb = document.getElementById('typing-bubble');
    if (tb) tb.remove();
  }, 3000);
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  const msgs = MOCK.chatMessages[App.activeChatClient];
  if (!msgs) return;

  msgs.push({ from:'agent', text, time:'Now' });
  input.value = '';
  renderMessages(App.activeChatClient);

  // Simulate client response
  const responses = [
    'Thank you for the quick response!',
    'I understand, could you also check my account history?',
    'Great, I appreciate the help.',
    'When will this be resolved?',
    'OK, I will wait for the confirmation email.',
  ];
  const client = MOCK.chatClients.find(x=>x.id===App.activeChatClient);
  if (client && client.status === 'online') {
    App.typingTimer = setTimeout(() => {
      showTyping();
      setTimeout(() => {
        msgs.push({ from:'client', text:responses[Math.floor(Math.random()*responses.length)], time:'Just now' });
        renderMessages(App.activeChatClient);
      }, 2800);
    }, 1000);
  }
}

/* ─── SETTINGS ───────────────────────────────────────────── */
function initSettings() {
  // Profile user data
  const uname = document.getElementById('settings-username');
  if (uname) uname.value = 'Sarah Mitchell';
  const uemail = document.getElementById('settings-email');
  if (uemail) uemail.value = 'admin@nexusfx.com';
  const urole = document.getElementById('settings-role');
  if (urole) urole.value = 'Senior Support Agent';
}

function switchSettingsTab(tab) {
  document.querySelectorAll('.settings-nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.tab === tab);
  });
  document.querySelectorAll('.settings-section').forEach(el => {
    el.classList.toggle('active', el.id === `settings-${tab}`);
  });
}

function saveSettings() {
  toast('Settings saved successfully!', 'success', '✓');
}

/* ─── THEME TOGGLE ───────────────────────────────────────── */
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const label = document.getElementById('theme-label');
  if (label) label.textContent = document.body.classList.contains('light-theme') ? 'Light Mode' : 'Dark Mode';

  // Regenerate charts with new theme
  if (App.currentPage === 'analytics') {
    setTimeout(initAnalytics, 50);
  }
}

/* ─── LOGOUT ─────────────────────────────────────────────── */
function logout() {
  App.isLoggedIn = false;
  if (App.tickerInterval) clearInterval(App.tickerInterval);
  toast('Signed out successfully.', 'info', '👋');
  setTimeout(() => showPage('login'), 600);
}

/* ─── DOM READY ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLogin();
  initSignup();

  // Nav items
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    item.addEventListener('click', () => {
      if (item.dataset.page === 'logout') {
        logout();
      } else {
        navigateTo(item.dataset.page);
      }
    });
  });

  // Menu toggle (mobile)
  document.getElementById('menu-toggle')?.addEventListener('click', openSidebar);
  document.getElementById('sidebar-overlay')?.addEventListener('click', closeSidebar);

  // Chat send
  document.getElementById('send-btn')?.addEventListener('click', sendMessage);
  document.getElementById('chat-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });

  // Ticket filters
  document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => renderTickets(btn.dataset.filter));
  });

  // Modal close
  document.getElementById('modal-close-btn')?.addEventListener('click', closeTicketModal);
  document.getElementById('ticket-modal')?.addEventListener('click', e => {
    if (e.target === document.getElementById('ticket-modal')) closeTicketModal();
  });

  // Start on login page
  showPage('login');
});

/* ─── Export globals for inline onclick handlers ─────────── */
window.openTicketModal  = openTicketModal;
window.closeTicketModal = closeTicketModal;
window.openChat         = openChat;
window.navigateTo       = navigateTo;
window.toast            = toast;
window.toggleTheme      = toggleTheme;
window.switchSettingsTab= switchSettingsTab;
window.saveSettings     = saveSettings;
window.logout           = logout;
