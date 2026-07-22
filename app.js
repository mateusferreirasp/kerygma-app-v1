/* ================= ICONS (SVG monocromático) ================= */
const ICONS = {
  highlighter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4a2 2 0 0 1 2.8 0l5.2 5.2a2 2 0 0 1 0 2.8Z"/></svg>',
  listOrdered: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="12" cy="18" r="2.4"/><path d="M8 7.3L11 16M16 7.3L13 16M8.5 6h7"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 012-2h6v18H6a2 2 0 01-2-2V5z"/><path d="M20 5a2 2 0 00-2-2h-6v18h6a2 2 0 002-2V5z"/></svg>',
  note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M14 3v5h5M8 12h8M8 16h5"/></svg>',
  document: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M14 3v5h5"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none"/></svg>',
  textLines: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h10M4 18h13"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L18.5 9.5a1.5 1.5 0 000-2.12l-1.88-1.88a1.5 1.5 0 00-2.12 0L4 15v5z"/><path d="M13.5 6.5l4 4"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m-8 0l1 12a1 1 0 001 1h6a1 1 0 001-1l1-12"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4"/><path d="M4 18v2a1 1 0 001 1h14a1 1 0 001-1v-2"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3m0 0l-4 4m4-4l4 4"/><path d="M4 18v2a1 1 0 001 1h14a1 1 0 001-1v-2"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>',
  fullscreen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 00-2 2v3M16 3h3a2 2 0 012 2v3M8 21H5a2 2 0 01-2-2v-3M16 21h3a2 2 0 002-2v-3"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M10 20a2 2 0 004 0"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6.5 5.5 5.5 0 0121.5 12c-2.5 4.5-9.5 9-9.5 9z"/></svg>',
  bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M14.5 9.5l-2 5-5 2 2-5 5-2z"/></svg>',
  library: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/></svg>',
  more: '<svg viewBox="0 0 24 24" fill="none"><circle cx="5" cy="12" r="1.7" fill="currentColor"/><circle cx="12" cy="12" r="1.7" fill="currentColor"/><circle cx="19" cy="12" r="1.7" fill="currentColor"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>',
};

function iconInline(svg, size){ return `<span class="icon-inline" style="width:${size}px;height:${size}px;">${svg}</span>`; }

/* ================= RICH TEXT EDITOR (campos de texto livre) ================= */
const RTE_HIGHLIGHT_COLOR = '#FFE58A';
const RTE_ALLOWED_TAGS = {B:1,STRONG:1,I:1,EM:1,U:1,MARK:1,SPAN:1,UL:1,OL:1,LI:1,BR:1,DIV:1,P:1};
const RTE_LIST_STYLES = ['disc','decimal','lower-alpha','upper-alpha','lower-roman','upper-roman'];
function sanitizeStyleValue(styleText){
  const allowed = ['color','background-color','list-style-type'];
  return (styleText||'').split(';').map(s=>s.trim()).filter(Boolean).filter(decl=>{
    const prop = decl.split(':')[0].trim().toLowerCase();
    if(!allowed.includes(prop)) return false;
    if(prop==='list-style-type'){
      const val = decl.split(':')[1].trim().toLowerCase();
      return RTE_LIST_STYLES.includes(val);
    }
    return /^[a-z-]+:\s*(#[0-9a-f]{3,8}|rgb\([\d,\s]+\)|[a-z]+)\s*$/i.test(decl);
  }).join('; ');
}
function sanitizeHTML(html){
  const tmp = document.createElement('div');
  tmp.innerHTML = html || '';
  (function clean(node){
    Array.from(node.childNodes).forEach(child=>{
      if(child.nodeType===1){
        if(!RTE_ALLOWED_TAGS[child.tagName]){
          while(child.firstChild) node.insertBefore(child.firstChild, child);
          node.removeChild(child);
          return;
        }
        Array.from(child.attributes).forEach(attr=>{
          if(attr.name==='style'){
            const clean = sanitizeStyleValue(attr.value);
            if(clean) child.setAttribute('style', clean); else child.removeAttribute('style');
          }else{
            child.removeAttribute(attr.name);
          }
        });
        clean(child);
      }else if(child.nodeType!==3){
        node.removeChild(child);
      }
    });
  })(tmp);
  return tmp.innerHTML;
}
function looksLikeHTML(value){ return /<\/?[a-z][\s\S]*>/i.test(value||''); }
function renderRichContent(value){
  if(!value) return '';
  return looksLikeHTML(value) ? sanitizeHTML(value) : escapeHTML(value);
}
function stripHTML(value){
  if(!value) return '';
  if(!looksLikeHTML(value)) return value;
  const tmp = document.createElement('div');
  tmp.innerHTML = sanitizeHTML(value);
  return (tmp.textContent || '').replace(/\n{3,}/g,'\n\n').trim();
}
function rteToolbarHTML(){
  return `<div class="rte-toolbar">
    <button type="button" class="rte-btn" onmousedown="event.preventDefault()" onclick="rteExec(this,'bold')" title="Negrito"><b>B</b></button>
    <button type="button" class="rte-btn rte-italic" onmousedown="event.preventDefault()" onclick="rteExec(this,'italic')" title="Itálico"><i>I</i></button>
    <button type="button" class="rte-btn" onmousedown="event.preventDefault()" onclick="rteExec(this,'hiliteColor','${RTE_HIGHLIGHT_COLOR}')" title="Destacar">${ICONS.highlighter}</button>
    <span class="rte-sep"></span>
    <button type="button" class="rte-btn" onmousedown="event.preventDefault()" onclick="rteExec(this,'insertUnorderedList')" title="Lista com marcadores">${ICONS.list}</button>
    <button type="button" class="rte-btn" onmousedown="event.preventDefault()" onclick="rteInsertOrderedList(this,'decimal')" title="Lista numerada (1, 2, 3...)">${ICONS.listOrdered}</button>
    <button type="button" class="rte-btn rte-alpha-btn" onmousedown="event.preventDefault()" onclick="rteInsertOrderedList(this,'lower-alpha')" title="Lista com letras (a, b, c...)">a</button>
  </div>`;
}
function rteFieldHTML(attrName, attrValue, placeholder, big){
  const editorId = 'rte-'+uid();
  return { editorId, html: `<div class="rte-wrap">
    ${rteToolbarHTML()}
    <div class="rte-editor ${big?'big':''}" id="${editorId}" contenteditable="true" ${attrName}="${attrValue}" data-placeholder="${placeholder?escapeHTML(placeholder):''}"></div>
  </div>` };
}
function setRTEContent(id, value){
  const el = document.getElementById(id);
  if(!el) return;
  if(looksLikeHTML(value)) el.innerHTML = sanitizeHTML(value);
  else el.textContent = value || '';
}
function hexToRgbString(hex){
  hex = hex.replace('#','');
  const r = parseInt(hex.substring(0,2),16);
  const g = parseInt(hex.substring(2,4),16);
  const b = parseInt(hex.substring(4,6),16);
  return `rgb(${r}, ${g}, ${b})`;
}
function rteExec(btn, command, value){
  const editor = btn.closest('.rte-wrap').querySelector('.rte-editor');
  editor.focus();
  if(command==='hiliteColor'){
    let current = '';
    try{ current = document.queryCommandValue('hiliteColor') || document.queryCommandValue('backColor') || ''; }catch(e){}
    const isHighlighted = current && (current.replace(/\s+/g,'')===hexToRgbString(value).replace(/\s+/g,''));
    document.execCommand('hiliteColor', false, isHighlighted ? 'transparent' : value);
    return;
  }
  document.execCommand(command, false, value || null);
}
function rteInsertOrderedList(btn, type){
  const editor = btn.closest('.rte-wrap').querySelector('.rte-editor');
  editor.focus();
  document.execCommand('insertOrderedList');
  const sel = window.getSelection();
  if(sel && sel.rangeCount){
    let node = sel.getRangeAt(0).startContainer;
    while(node && node.nodeName!=='OL' && node!==editor && node.parentNode) node = node.parentNode;
    if(node && node.nodeName==='OL') node.style.listStyleType = type;
  }
}
function readRTEValue(el){
  const clean = sanitizeHTML(el.innerHTML);
  return stripHTML(clean).trim() ? clean : '';
}

/* ================= SUPABASE CONFIG ================= */
const SUPABASE_URL = 'https://ekixhyvmwvufsuzjqqxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVraXhoeXZtd3Z1ZnN1empxcXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2MzU2ODUsImV4cCI6MjEwMDIxMTY4NX0.ThGgTI26EzCI3Lt3upV0QDPR2NPGKZq6wVCHJnXy_0k';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* ================= DATA ================= */
function uid(){return 'id_'+Date.now().toString(36)+Math.random().toString(36).slice(2,8);}
let db = {folders:[], items:[], mindmaps:[], prayers:[], drafts:[]};
let currentUser = null;

async function loadAllData(){
  const [{data:folders,error:e1}, {data:items,error:e2}, {data:mindmaps,error:e3}, {data:prayers,error:e4}] = await Promise.all([
    sb.from('folders').select('*').order('created_at',{ascending:true}),
    sb.from('items').select('*').order('updated_at',{ascending:false}),
    sb.from('mindmaps').select('*').order('created_at',{ascending:false}),
    sb.from('prayer_requests').select('*').order('created_at',{ascending:false}),
  ]);
  if(e1||e2||e3){ toast('Erro ao carregar dados. Verifique sua conexão.'); console.error(e1,e2,e3); return; }
  db.folders = (folders||[]).map(f=>({id:f.id, name:f.name, createdAt:new Date(f.created_at).getTime()}));
  const allItems = (items||[]).map(i=>({id:i.id, type:i.type, subtype:i.subtype, title:i.title, folderId:i.folder_id, fields:i.fields||{}, isDraft:!!i.is_draft, createdAt:new Date(i.created_at).getTime(), updatedAt:new Date(i.updated_at).getTime()}));
  db.items = allItems.filter(i=>!i.isDraft);
  db.drafts = allItems.filter(i=>i.isDraft);
  db.mindmaps = (mindmaps||[]).map(m=>({id:m.id, itemId:m.item_id, title:m.title, nodes:m.nodes||[], createdAt:new Date(m.created_at).getTime()}));
  if(e4){ db.prayers = []; console.error(e4); }
  else db.prayers = (prayers||[]).map(p=>({id:p.id, text:p.text, answered:p.answered, createdAt:new Date(p.created_at).getTime(), answeredAt:p.answered_at?new Date(p.answered_at).getTime():null}));
}

/* ================= AUTH ================= */
let authMode = 'login';
function toggleAuthMode(){
  authMode = authMode==='login' ? 'signup' : 'login';
  renderAuthMode();
}
function renderAuthMode(){
  const isSignup = authMode==='signup';
  document.getElementById('authFormTitle').textContent = isSignup ? 'Criar sua conta' : 'Acesse seu painel';
  document.getElementById('authFormDesc').textContent = isSignup ? 'Leva menos de 1 minuto. Grátis para começar.' : 'Seus sermões estão te esperando.';
  document.getElementById('authSubmitBtn').textContent = isSignup ? '+ Criar Conta' : '→ Entrar no App';
  document.getElementById('authToggleBtn').textContent = isSignup ? 'Já tem uma conta? Entrar' : 'Novo por aqui? Criar conta agora';
  document.getElementById('auth-name-field').style.display = isSignup ? 'block' : 'none';
  document.getElementById('auth-confirm-field').style.display = isSignup ? 'block' : 'none';
  document.getElementById('authForgotRow').style.display = isSignup ? 'none' : 'block';
  document.getElementById('authError').textContent = '';
}
function translateAuthError(msg){
  if(/invalid login credentials/i.test(msg)) return 'E-mail ou senha incorretos.';
  if(/already registered|already exists/i.test(msg)) return 'Este e-mail já está cadastrado. Tente entrar.';
  if(/email not confirmed/i.test(msg)) return 'Confirme seu e-mail antes de entrar (verifique sua caixa de entrada).';
  if(/password should be at least/i.test(msg)) return 'A senha precisa ter pelo menos 6 caracteres.';
  return 'Algo deu errado: ' + msg;
}
async function submitAuth(){
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const errEl = document.getElementById('authError');
  const btn = document.getElementById('authSubmitBtn');
  errEl.textContent = '';
  if(!email || !password){ errEl.textContent = 'Preencha e-mail e senha.'; return; }
  btn.disabled = true; const originalLabel = btn.textContent; btn.textContent = 'Aguarde...';
  try{
    if(authMode==='signup'){
      const fullName = document.getElementById('auth-name').value.trim();
      const password2 = document.getElementById('auth-password2').value;
      if(!fullName){ errEl.textContent = 'Digite seu nome completo.'; return; }
      if(password.length<6){ errEl.textContent = 'A senha precisa ter pelo menos 6 caracteres.'; return; }
      if(password!==password2){ errEl.textContent = 'As senhas não coincidem.'; return; }
      const { data, error } = await sb.auth.signUp({ email, password, options:{ data:{ full_name: fullName } } });
      if(error){ errEl.textContent = translateAuthError(error.message); return; }
      if(data.session){
        currentUser = data.user;
        await enterApp();
      }else{
        toast('Conta criada! Verifique seu e-mail para confirmar antes de entrar.');
        authMode = 'login'; renderAuthMode();
      }
    }else{
      const { data, error } = await sb.auth.signInWithPassword({ email, password });
      if(error){ errEl.textContent = translateAuthError(error.message); return; }
      currentUser = data.user;
      await enterApp();
    }
  } finally {
    btn.disabled = false; btn.textContent = originalLabel;
  }
}
function showAuthView(){
  document.getElementById('authScreen').style.display = 'flex';
  document.querySelector('.app-shell').style.display = 'none';
  document.getElementById('bottomNav').style.display = 'none';
  document.getElementById('auth-name').value='';
  document.getElementById('auth-email').value='';
  document.getElementById('auth-password').value='';
  document.getElementById('auth-password2').value='';
  authMode = 'login';
  renderAuthMode();
}
async function enterApp(){
  document.getElementById('authScreen').style.display = 'none';
  document.querySelector('.app-shell').style.display = 'flex';
  document.getElementById('bottomNav').style.display = '';
  applySidebarState();
  updateProfileDisplays();
  await loadAllData();
  renderNav();
  showView('home');
  updateNotifBadge();
  if(!localStorage.getItem('kerygma_welcomed')){
    localStorage.setItem('kerygma_welcomed','1');
    addNotification('Bem-vindo ao Kerygma!', 'Comece criando sua primeira pasta ou o seu primeiro sermão.');
  }
  maybeAutoShowInstallPrompt();
}
async function logout(){
  await sb.auth.signOut();
}

/* ================= PROFILE ================= */
function getInitial(name){ return (name||'?').trim().charAt(0).toUpperCase() || '?'; }
function avatarHTML(name, avatarUrl){
  if(avatarUrl) return `<img src="${avatarUrl}" alt="Foto de perfil">`;
  return `<span class="avatar-initial">${escapeHTML(getInitial(name))}</span>`;
}
function updateProfileDisplays(){
  if(!currentUser) return;
  const fullName = (currentUser.user_metadata && currentUser.user_metadata.full_name) || '';
  const avatarUrl = currentUser.user_metadata && currentUser.user_metadata.avatar_url;
  const displayName = fullName || currentUser.email;
  const firstName = fullName ? fullName.split(' ')[0] : currentUser.email;
  const sbAvatar = document.getElementById('sidebarAvatar'); if(sbAvatar) sbAvatar.innerHTML = avatarHTML(displayName, avatarUrl);
  const sbName = document.getElementById('sidebarProfileName'); if(sbName) sbName.textContent = displayName;
  const profAvatar = document.getElementById('profileAvatarBig'); if(profAvatar) profAvatar.innerHTML = avatarHTML(displayName, avatarUrl);
  const nameEl = document.getElementById('accountName'); if(nameEl) nameEl.textContent = displayName;
  const emailEl = document.getElementById('accountEmail'); if(emailEl) emailEl.textContent = currentUser.email;
  const greetEl = document.getElementById('homeGreeting'); if(greetEl) greetEl.textContent = 'Olá, '+firstName;
}
function toggleEditProfile(show){
  document.getElementById('profileEditForm').style.display = show ? 'block' : 'none';
  document.getElementById('profileActionsRow').style.display = show ? 'none' : 'flex';
  if(show){
    const m = currentUser.user_metadata || {};
    document.getElementById('edit-name').value = m.full_name || '';
    document.getElementById('edit-email').value = currentUser.email || '';
    document.getElementById('edit-phone').value = m.phone || '';
    document.getElementById('edit-birthdate').value = m.birthdate || '';
    document.getElementById('edit-city').value = m.city || '';
    document.getElementById('edit-state').value = m.state || '';
    document.getElementById('edit-church').value = m.church || '';
    document.getElementById('edit-has-role').checked = !!m.has_role;
    document.getElementById('edit-role').value = m.role || '';
    toggleRoleField();
  }
}
function toggleRoleField(){
  const checked = document.getElementById('edit-has-role').checked;
  document.getElementById('edit-role-field').style.display = checked ? 'block' : 'none';
}
async function saveProfile(){
  const name = document.getElementById('edit-name').value.trim();
  const email = document.getElementById('edit-email').value.trim();
  if(!name){ toast('Digite seu nome'); return; }
  if(!email){ toast('Digite seu e-mail'); return; }
  const btn = document.getElementById('saveProfileBtn');
  btn.disabled = true; const original = btn.textContent; btn.textContent = 'Salvando...';
  try{
    const hasRole = document.getElementById('edit-has-role').checked;
    const payload = {
      email,
      data: {
        full_name: name,
        phone: document.getElementById('edit-phone').value.trim(),
        birthdate: document.getElementById('edit-birthdate').value,
        city: document.getElementById('edit-city').value.trim(),
        state: document.getElementById('edit-state').value.trim(),
        church: document.getElementById('edit-church').value.trim(),
        has_role: hasRole,
        role: hasRole ? document.getElementById('edit-role').value.trim() : ''
      }
    };
    const emailChanged = email !== currentUser.email;
    const { data, error } = await sb.auth.updateUser(payload);
    if(error){ toast('Erro ao salvar perfil'); console.error(error); return; }
    currentUser = data.user;
    updateProfileDisplays();
    toggleEditProfile(false);
    toast(emailChanged ? 'Perfil salvo! Confirme o novo e-mail na sua caixa de entrada.' : 'Perfil atualizado');
  } finally {
    btn.disabled = false; btn.textContent = original;
  }
}
async function handleAvatarFileChange(event){
  const file = event.target.files[0];
  if(!file) return;
  toast('Enviando foto...');
  try{
    const ext = (file.name.split('.').pop()||'jpg').toLowerCase();
    const path = `${currentUser.id}/avatar.${ext}`;
    const { error: upErr } = await sb.storage.from('avatars').upload(path, file, { upsert:true, cacheControl:'3600' });
    if(upErr){ toast('Erro ao enviar foto. Veja se o bucket "avatars" foi criado no Supabase.'); console.error(upErr); return; }
    const { data: pub } = sb.storage.from('avatars').getPublicUrl(path);
    const avatarUrl = pub.publicUrl + '?t=' + Date.now();
    const { data, error } = await sb.auth.updateUser({ data:{ avatar_url: avatarUrl } });
    if(error){ toast('Erro ao salvar foto'); console.error(error); return; }
    currentUser = data.user;
    updateProfileDisplays();
    toast('Foto atualizada');
  } finally {
    event.target.value = '';
  }
}
async function initAuth(){
  const { data:{ session } } = await sb.auth.getSession();
  if(session){ currentUser = session.user; await enterApp(); }
  else{ showAuthView(); }
  sb.auth.onAuthStateChange((event, session)=>{
    if(event==='SIGNED_OUT'){ currentUser=null; db={folders:[],items:[],mindmaps:[]}; showAuthView(); }
  });
}

/* field configs */
/* Esquemas reutilizáveis para o campo tipo 'points' — cada schema define quais
   sub-campos aparecem dentro de cada bloco/ponto, e qual deles vira o "título" do card recolhido. */
const POINT_SCHEMAS = {
  sermon: {
    titleKey: 'titulo',
    fields: [
      {key:'titulo', label:'Título do ponto', type:'text', placeholder:'Ex: A fé em tempos de crise'},
      {key:'referencia', label:'Referência bíblica', type:'text', placeholder:'Ex: Gênesis 26:1-6'},
      {key:'apoio', label:'Texto de apoio (opcional)', type:'text', placeholder:'Ex: Mateus 6:31-33'},
      {key:'explicacao', label:'Explicação', type:'textarea'},
      {key:'aplicacao', label:'Aplicação', type:'textarea'},
    ]
  },
  oia: {
    titleKey: 'referencia',
    fields: [
      {key:'referencia', label:'Referência (versículo ou trecho)', type:'text', placeholder:'Ex: João 3:16'},
      {key:'observacao', label:'Observação', type:'textarea', placeholder:'O que o texto diz, de forma simples? Fatos, contexto...'},
      {key:'interpretacao', label:'Interpretação', type:'textarea', placeholder:'O que isso significa?'},
      {key:'aplicacao', label:'Aplicação', type:'textarea', placeholder:'Como aplicar isso hoje?'},
    ]
  },
  summary: {
    titleKey: 'titulo',
    fields: [
      {key:'titulo', label:'Ideia / título do ponto', type:'text', placeholder:'Ex: O poder da graça'},
      {key:'conteudo', label:'Conteúdo', type:'textarea', placeholder:'Desenvolva essa ideia com suas palavras...'},
      {key:'destaque', label:'Frase de destaque (opcional)', type:'text', placeholder:'Uma citação ou trecho marcante'},
    ]
  },
};

const SERMON_FIELDS = {
  tematico: [
    {key:'tema', label:'Tema central', type:'text', tab:'geral'},
    {key:'textoBase', label:'Texto base (referência)', type:'text', tab:'geral'},
    {key:'introducao', label:'Introdução', type:'textarea', tab:'geral'},
    {key:'pontos', label:'Pontos principais', type:'points', schema:'sermon', tab:'pontos', hint:'Adicione quantos pontos quiser. Cada um pode ter sua própria referência e aplicação.'},
    {key:'ilustracoes', label:'Ilustrações', type:'textarea', tab:'pontos'},
    {key:'aplicacao', label:'Aplicação prática geral', type:'textarea', tab:'fechamento'},
    {key:'conclusao', label:'Conclusão', type:'textarea', tab:'fechamento'},
    {key:'apelo', label:'Apelo / desafio final', type:'textarea', tab:'fechamento', hint:'Opcional. Um chamado direto ao ouvinte, além da conclusão.'},
  ],
  textual: [
    {key:'textoBase', label:'Texto base', type:'text', tab:'geral'},
    {key:'contexto', label:'Contexto do texto', type:'textarea', tab:'geral'},
    {key:'divisao', label:'Divisão do texto', type:'points', schema:'sermon', tab:'pontos', hint:'Cada parte do texto vira um ponto, com sua própria referência e aplicação.'},
    {key:'aplicacao', label:'Aplicação prática geral', type:'textarea', tab:'fechamento'},
    {key:'conclusao', label:'Conclusão', type:'textarea', tab:'fechamento'},
    {key:'apelo', label:'Apelo / desafio final', type:'textarea', tab:'fechamento', hint:'Opcional. Um chamado direto ao ouvinte, além da conclusão.'},
  ],
  expositivo: [
    {key:'passagem', label:'Passagem / livro', type:'text', tab:'geral'},
    {key:'contextoHistorico', label:'Contexto histórico e literário', type:'textarea', tab:'geral'},
    {key:'analiseVersiculos', label:'Análise versículo a versículo', type:'points', schema:'sermon', tab:'pontos', hint:'Cada versículo ou bloco de versículos vira um ponto, com referência, explicação e aplicação.'},
    {key:'aplicacao', label:'Aplicação prática geral', type:'textarea', tab:'fechamento'},
    {key:'conclusao', label:'Conclusão', type:'textarea', tab:'fechamento'},
    {key:'apelo', label:'Apelo / desafio final', type:'textarea', tab:'fechamento', hint:'Opcional. Um chamado direto ao ouvinte, além da conclusão.'},
  ],
};

/* ESTUDO — reestruturado em abas: Geral / Desenvolvimento (OIA) / Perguntas */
const STUDY_FIELDS = [
  {key:'passagem', label:'Passagem / texto principal', type:'text', tab:'geral', placeholder:'Ex: João 3:16-21'},
  {key:'tema', label:'Tema', type:'text', tab:'geral', placeholder:'Ex: Graça, Salvação', hint:'Palavras-chave separadas por vírgula.'},
  {key:'desenvolvimento', label:'Contexto, Observações, Interpretação e Aplicação', type:'points', schema:'oia', tab:'oia', hint:'Adicione um bloco para cada trecho que for estudar — cada um tem espaço para observação, interpretação e aplicação.'},
  {key:'perguntas', label:'Perguntas para reflexão', type:'textarea', tab:'perguntas', big:true, hint:'Ótimo para uso em pequenos grupos ou aplicação pessoal.'},
];
const FORM_TABS = {
  study: [
    {id:'geral', label:'Geral'},
    {id:'oia', label:'Desenvolvimento'},
    {id:'perguntas', label:'Perguntas'},
  ],
  sermon: [
    {id:'geral', label:'Geral'},
    {id:'pontos', label:'Pontos'},
    {id:'fechamento', label:'Fechamento'},
  ],
};

/* DEVOCIONAL — método SOAP (Scripture, Observation, Application, Prayer) */
const DEVOTIONAL_FIELDS = [
  {key:'escritura', label:'Escritura', type:'text', placeholder:'O versículo que mais chamou sua atenção hoje'},
  {key:'observacao', label:'Observação', type:'textarea', placeholder:'O que esse versículo diz, de forma simples?'},
  {key:'aplicacao', label:'Aplicação', type:'textarea', placeholder:'Como você vai aplicar isso hoje? (o ponto principal)'},
  {key:'oracao', label:'Oração', type:'textarea', placeholder:'Uma breve oração baseada na meditação de hoje'},
];

/* RESUMO — objetivo e rápido, para condensar um livro, estudo ou pregação */
const SUMMARY_FIELDS = [
  {key:'fonte', label:'Fonte', type:'text', placeholder:'Ex: livro, autor, pregador, estudo original...'},
  {key:'pontos', label:'Ideias e pontos de destaque', type:'points', schema:'summary', hint:'Cada ponto pode ter uma ideia principal, conteúdo e uma frase de destaque.'},
];

const SERMON_LABELS = {tematico:'Temático', textual:'Textual', expositivo:'Expositivo'};
const TYPE_LABELS = {sermon:'Sermão', study:'Estudo', devotional:'Devocional', summary:'Resumo'};
function getFieldsConfig(type, subtype){
  if(type==='sermon') return SERMON_FIELDS[subtype] || [];
  if(type==='study') return STUDY_FIELDS;
  if(type==='devotional') return DEVOTIONAL_FIELDS;
  if(type==='summary') return SUMMARY_FIELDS;
  return [];
}

/* ================= NAV ================= */
const NAV_ITEMS_DESKTOP = [
  {id:'home', label:'Início', ic:ICONS.home},
  {id:'folders', label:'Pastas', ic:ICONS.folder},
  {id:'library', label:'Biblioteca', ic:ICONS.library},
  {id:'mindmaps', label:'Mapas', ic:ICONS.brain},
  {id:'guide', label:'Guia', ic:ICONS.compass},
];
const NAV_ITEMS_MOBILE = [
  {id:'home', label:'Início', ic:ICONS.home},
  {id:'folders', label:'Pastas', ic:ICONS.folder},
  {id:'library', label:'Biblioteca', ic:ICONS.library},
  {id:'more', label:'Mais', ic:ICONS.more},
];
const MORE_VIEWS = ['mindmaps','guide','prayers','notifications','settings','more'];
function renderNav(){
  const side = document.getElementById('sideNav');
  side.innerHTML = NAV_ITEMS_DESKTOP.map(n=>`<button data-nav="${n.id}" class="${currentView===n.id?'active':''}" title="${n.label}" onclick="showView('${n.id}')"><span class="ic">${n.ic}</span><span class="nav-label">${n.label}</span></button>`).join('');
  const bottom = document.getElementById('bottomNav');
  const mid = Math.ceil(NAV_ITEMS_MOBILE.length/2);
  const left = NAV_ITEMS_MOBILE.slice(0,mid), right = NAV_ITEMS_MOBILE.slice(mid);
  bottom.innerHTML =
    left.map(n=>navBtn(n)).join('') +
    `<button class="fab" onclick="openCreateSheet()">＋</button>` +
    right.map(n=>navBtn(n)).join('');
  updateNotifBadge();
}
function navBtn(n){
  const isActive = currentView===n.id || (n.id==='more' && MORE_VIEWS.includes(currentView));
  const badge = n.id==='more' ? `<span class="notif-badge" id="notifBadgeMoreTab"></span>` : '';
  return `<button data-nav="${n.id}" class="${isActive?'active':''}" onclick="showView('${n.id}')" style="position:relative"><span class="ic">${n.ic}</span>${n.label}${badge}</button>`;
}

let currentView = 'home';
let sidebarCollapsed = localStorage.getItem('kerygma_sidebar_collapsed')==='1';
function applySidebarState(){
  const el = document.getElementById('sidebarEl');
  if(!el) return;
  el.classList.toggle('collapsed', sidebarCollapsed);
}
function toggleSidebar(){
  sidebarCollapsed = !sidebarCollapsed;
  localStorage.setItem('kerygma_sidebar_collapsed', sidebarCollapsed ? '1':'0');
  applySidebarState();
}
let ctx = {}; // temp context (current folder id, editing item, etc.)

async function showView(name){
  // se está editando item existente com mudanças, intercepta a navegação
  if(currentView==='item-form' && ctx.editingItem && hasEditingChanges() && name!=='item-form'){
    const targetName = name;
    // ao descartar: vai pra tela destino. ao salvar: vai ao detalhe (comportamento padrão de saveItemForm)
    unsavedPendingAction = ()=>{ ctx.editingItem=null; ctx.editSnapshot=null; ctx.skipAutoSave=true; showView(targetName); };
    openSheet('unsavedOverlay');
    return;
  }
  await autoSaveDraftIfNeeded();
  currentView = name;
  ctx.currentFolder = null;
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('visible'));
  document.getElementById('view-'+name).classList.add('visible');
  document.querySelector('.main').classList.toggle('main-wide', name==='mindmap-editor');
  window.scrollTo(0,0);
  renderNav();
  if(name==='home') renderHome();
  if(name==='folders') renderFolders();
  if(name==='mindmaps') renderMindmapsList();
  if(name==='notifications') renderNotifications();
  if(name==='prayers') renderPrayers();
  if(name==='drafts') renderDrafts();
  if(name==='library'){ libraryTab='published'; setLibraryTab('published'); renderLibrary(); }
}

/* ================= TOAST ================= */
let toastTimer;
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2200);
}

/* ================= SHEETS ================= */
function openSheet(id){ document.getElementById(id).classList.add('visible'); }
function closeSheet(id){ document.getElementById(id).classList.remove('visible'); }
function openCreateSheet(){ openSheet('createOverlay'); }
function startSermonChoice(){ closeSheet('createOverlay'); openSheet('sermonTypeOverlay'); }
function backToCreateSheet(){ closeSheet('sermonTypeOverlay'); openSheet('createOverlay'); }

/* ================= HOME ================= */
function renderHome(){
  document.getElementById('statsRow').innerHTML = `
    ${statCard(db.items.filter(i=>i.type==='sermon').length,'Sermões')}
    ${statCard(db.items.filter(i=>i.type==='study').length,'Estudos')}
    ${statCard(db.folders.length,'Pastas')}
    ${statCard(db.mindmaps.length,'Mapas')}
  `;
  updateStreakWidget();
  updatePrayerWidget();
  updateDraftsWidget();
  const q = (document.getElementById('homeSearch').value||'').trim().toLowerCase();
  const list = document.getElementById('recentList');
  if(q){
    const results = db.items.filter(i=>(i.title||'').toLowerCase().includes(q)).sort((a,b)=>b.updatedAt-a.updatedAt);
    list.innerHTML = results.length ? results.map(itemCardHTML).join('') : emptyState(ICONS.search,'Nada encontrado',`Nenhum resultado para "${escapeHTML(q)}".`);
    return;
  }
  const recent = [...db.items].sort((a,b)=>b.updatedAt-a.updatedAt).slice(0,5);
  if(!recent.length){
    list.innerHTML = emptyState(ICONS.sparkle,'Comece seu primeiro estudo','Toque no botão + para criar um sermão ou estudo bíblico.');
    return;
  }
  list.innerHTML = recent.map(itemCardHTML).join('');
}
function calculateDevotionalStreak(){
  const fmt = d => d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  const dates = new Set(db.items.filter(i=>i.type==='devotional').map(i=>fmt(new Date(i.createdAt))));
  if(!dates.size) return 0;
  let cursor = new Date();
  if(!dates.has(fmt(cursor))) cursor.setDate(cursor.getDate()-1);
  let streak = 0;
  while(dates.has(fmt(cursor))){
    streak++;
    cursor.setDate(cursor.getDate()-1);
  }
  return streak;
}
function updateStreakWidget(){
  const streak = calculateDevotionalStreak();
  const numEl = document.getElementById('streakNum');
  const lblEl = document.getElementById('streakLabel');
  if(!numEl) return;
  numEl.textContent = streak;
  lblEl.textContent = streak>0 ? (streak===1 ? 'dia seguido de devocional' : 'dias seguidos de devocional') : 'Comece hoje seu devocional';
}
function updatePrayerWidget(){
  const el = document.getElementById('prayerCount');
  if(!el) return;
  el.textContent = db.prayers ? db.prayers.filter(p=>!p.answered).length : 0;
}
function statCard(n,l){ return `<div class="stat-card"><div class="stat-num">${n}</div><div class="stat-lbl">${l}</div></div>`; }
function emptyState(ic,title,desc){ return `<div class="empty-state"><div class="ic">${ic}</div><div class="title">${title}</div><div class="desc">${desc}</div></div>`; }

/* ================= FOLDERS ================= */
function renderFolders(){
  const grid = document.getElementById('foldersGrid');
  const q = (document.getElementById('foldersSearch').value||'').trim().toLowerCase();
  const folders = q ? db.folders.filter(f=>f.name.toLowerCase().includes(q)) : db.folders;
  let html = folders.map(f=>{
    const count = db.items.filter(i=>i.folderId===f.id).length;
    return `<div class="folder-card" onclick="openFolder('${f.id}')">
      <div class="f-ic">${ICONS.folder}</div>
      <div class="f-name">${escapeHTML(f.name)}</div>
      <div class="f-count">${count} ${count===1?'item':'itens'}</div>
    </div>`;
  }).join('');
  if(!q) html += `<div class="add-card" onclick="openNewFolder()"><span class="ic">${ICONS.plus}</span>Nova pasta</div>`;
  grid.innerHTML = html || emptyState(ICONS.search,'Nada encontrado',`Nenhuma pasta com "${escapeHTML(q)}".`);
}
function openNewFolder(){
  ctx.editingFolder = null;
  document.getElementById('folderSheetTitle').textContent = 'Nova pasta';
  document.getElementById('newFolderName').value = '';
  closeSheet('createOverlay');
  openSheet('folderOverlay');
  setTimeout(()=>document.getElementById('newFolderName').focus(),200);
}
async function confirmFolder(){
  const name = document.getElementById('newFolderName').value.trim();
  if(!name){ toast('Digite um nome para a pasta'); return; }
  if(ctx.editingFolder){
    const { error } = await sb.from('folders').update({name}).eq('id', ctx.editingFolder);
    if(error){ toast('Erro ao salvar pasta'); console.error(error); return; }
    const f = db.folders.find(x=>x.id===ctx.editingFolder);
    if(f) f.name = name;
    closeSheet('folderOverlay');
    toast('Pasta renomeada');
    if(currentView==='folder-detail' && ctx.currentFolder) openFolder(ctx.currentFolder);
    renderFolders();
  }else{
    const { data, error } = await sb.from('folders').insert({name, user_id:currentUser.id}).select().single();
    if(error){ toast('Erro ao criar pasta'); console.error(error); return; }
    db.folders.push({id:data.id, name:data.name, createdAt:new Date(data.created_at).getTime()});
    closeSheet('folderOverlay');
    toast('Pasta criada');
    openFolder(data.id); // entra direto na pasta recém-criada
  }
}
async function openFolder(id){
  await autoSaveDraftIfNeeded();
  ctx.currentFolder = id;
  currentView = 'folder-detail';
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('visible'));
  document.getElementById('view-folder-detail').classList.add('visible');
  const f = db.folders.find(x=>x.id===id);
  document.getElementById('folderDetailTitle').textContent = f.name;
  document.getElementById('folderItemsSearch').value = '';
  renderFolderItemsList();
  window.scrollTo(0,0);
}
function renderFolderItemsList(){
  const id = ctx.currentFolder;
  const q = (document.getElementById('folderItemsSearch').value||'').trim().toLowerCase();
  let items = db.items.filter(i=>i.folderId===id).sort((a,b)=>b.updatedAt-a.updatedAt);
  if(q) items = items.filter(i=>(i.title||'').toLowerCase().includes(q));
  const list = document.getElementById('folderItemsList');
  if(items.length){ list.innerHTML = items.map(itemCardHTML).join(''); return; }
  list.innerHTML = q ? emptyState(ICONS.search,'Nada encontrado',`Nenhum resultado para "${escapeHTML(q)}".`) : emptyState(ICONS.document,'Pasta vazia','Crie um sermão ou estudo e salve nesta pasta.');
}
function renameFolder(){
  const f = db.folders.find(x=>x.id===ctx.currentFolder);
  ctx.editingFolder = f.id;
  document.getElementById('folderSheetTitle').textContent = 'Renomear pasta';
  document.getElementById('newFolderName').value = f.name;
  openSheet('folderOverlay');
}
function deleteFolder(){
  confirmAction('Excluir pasta', 'Os itens desta pasta não serão apagados, mas ficarão sem pasta.', async ()=>{
    const { error:e1 } = await sb.from('items').update({folder_id:null}).eq('folder_id', ctx.currentFolder);
    const { error:e2 } = await sb.from('folders').delete().eq('id', ctx.currentFolder);
    if(e1||e2){ toast('Erro ao excluir pasta'); console.error(e1,e2); return; }
    db.items.forEach(i=>{ if(i.folderId===ctx.currentFolder) i.folderId=null; });
    db.folders = db.folders.filter(f=>f.id!==ctx.currentFolder);
    closeSheet('confirmOverlay');
    showView('folders');
    toast('Pasta excluída');
  });
}

/* ================= ITEM CARD ================= */
function typeTagHTML(item){
  if(item.type==='sermon') return `<span class="tag ${item.subtype}">${SERMON_LABELS[item.subtype]}</span>`;
  if(item.type==='devotional') return `<span class="tag devotional">Devocional</span>`;
  if(item.type==='summary') return `<span class="tag summary">Resumo</span>`;
  return `<span class="tag study">Estudo</span>`;
}
function typeIcon(item){
  if(item.type==='sermon') return ICONS.book;
  if(item.type==='devotional') return ICONS.heart;
  if(item.type==='summary') return ICONS.bookmark;
  return ICONS.note;
}
function itemCardHTML(item){
  const typeTag = typeTagHTML(item);
  const folder = db.folders.find(f=>f.id===item.folderId);
  return `<div class="item-card ${item.type}" onclick="openItem('${item.id}')">
    <div class="i-ic">${typeIcon(item)}</div>
    <div class="i-body">
      <div class="i-title">${escapeHTML(item.title||'Sem título')}</div>
      <div class="i-meta">${typeTag}${folder?`<span>· ${escapeHTML(folder.name)}</span>`:''}</div>
    </div>
    <div class="chev">›</div>
  </div>`;
}
function libraryItemCardHTML(item){
  const typeTag = typeTagHTML(item);
  const folder = db.folders.find(f=>f.id===item.folderId);
  const folderTag = folder ? `<span class="tag folder-tag">${iconInline(ICONS.folder,10)} ${escapeHTML(folder.name)}</span>` : `<span class="tag folder-tag folder-tag-none">Sem pasta</span>`;
  return `<div class="item-card ${item.type}" onclick="openItem('${item.id}')">
    <div class="i-ic">${typeIcon(item)}</div>
    <div class="i-body">
      <div class="i-title">${escapeHTML(item.title||'Sem título')}</div>
      <div class="i-meta">${typeTag}${folderTag}</div>
    </div>
    <div class="chev">›</div>
  </div>`;
}
let libraryFilter = 'all';
let libraryTab = 'published';
function setLibraryTab(tab){
  libraryTab = tab;
  document.querySelectorAll('#libraryTabs .form-tab').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  document.getElementById('library-published-panel').style.display = tab==='published' ? '' : 'none';
  document.getElementById('library-drafts-panel').style.display = tab==='drafts' ? '' : 'none';
  if(tab==='drafts') renderDrafts();
}
function openLibraryDraftsTab(){
  libraryTab = 'drafts';
  currentView = 'library';
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('visible'));
  document.getElementById('view-library').classList.add('visible');
  renderNav();
  setLibraryTab('drafts');
  window.scrollTo(0,0);
}
function setLibraryFilter(type){
  libraryFilter = type;
  document.querySelectorAll('#view-library .filter-chip').forEach(c=>c.classList.toggle('active', c.dataset.type===type));
  renderLibrary();
}
function renderLibrary(){
  const list = document.getElementById('libraryList');
  if(!list) return;
  const q = (document.getElementById('librarySearch').value||'').trim().toLowerCase();
  let items = [...db.items];
  if(libraryFilter!=='all') items = items.filter(i=>i.type===libraryFilter);
  if(q) items = items.filter(i=>(i.title||'').toLowerCase().includes(q));
  items.sort((a,b)=>b.updatedAt-a.updatedAt);
  if(!items.length){
    list.innerHTML = db.items.length
      ? emptyState(ICONS.search,'Nada encontrado','Ajuste a busca ou o filtro selecionado.')
      : emptyState(ICONS.library,'Sua biblioteca está vazia','Tudo que você criar (sermão, estudo, devocional, resumo) aparece aqui.');
    return;
  }
  list.innerHTML = items.map(libraryItemCardHTML).join('');
}

/* ================= CUSTOM SELECT (dropdown estilizado) ================= */
function toggleCustomSelect(id, forceState){
  const el = document.getElementById(id);
  if(!el) return;
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.custom-select.open').forEach(s=>{ if(s.id!==id) s.classList.remove('open'); });
  el.classList.toggle('open', forceState!==undefined ? forceState : !isOpen);
}
document.addEventListener('click', e=>{
  document.querySelectorAll('.custom-select.open').forEach(s=>{
    if(!s.contains(e.target)) s.classList.remove('open');
  });
});

/* ================= ITEM FORM ================= */
function renderFolderSelect(selectedId){
  selectedId = selectedId || '';
  const options = [{id:'', name:'Sem pasta'}].concat(db.folders);
  const panel = document.getElementById('f-folder-panel');
  const createBtn = `<div class="custom-select-option custom-select-create" onclick="inlineCreateFolder()">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
    Criar pasta
  </div>`;
  panel.innerHTML = options.map(f=>`<div class="custom-select-option ${f.id===selectedId?'selected':''}" onclick="chooseFolderOption('${f.id}')">${escapeHTML(f.name)}</div>`).join('') + createBtn;
  const sel = options.find(f=>f.id===selectedId) || options[0];
  document.getElementById('f-folder-label').textContent = sel.name;
  document.getElementById('f-folder').value = selectedId;
}
function chooseFolderOption(id){
  renderFolderSelect(id);
  toggleCustomSelect('f-folder-select', false);
}
function inlineCreateFolder(){
  toggleCustomSelect('f-folder-select', false);
  const panel = document.getElementById('f-folder-panel');
  // mostra o mini-formulário abaixo do trigger
  const wrap = document.getElementById('f-folder-select');
  let inlineForm = document.getElementById('inline-folder-form');
  if(inlineForm) inlineForm.remove();
  inlineForm = document.createElement('div');
  inlineForm.id = 'inline-folder-form';
  inlineForm.className = 'inline-folder-form';
  inlineForm.innerHTML = `
    <input type="text" id="inline-folder-input" placeholder="Nome da pasta" autocomplete="off">
    <button type="button" class="btn btn-primary btn-sm" onclick="confirmInlineFolder()">Criar</button>
    <button type="button" class="btn btn-secondary btn-sm" onclick="cancelInlineFolder()">✕</button>
  `;
  wrap.after(inlineForm);
  setTimeout(()=>{ const el=document.getElementById('inline-folder-input'); if(el) el.focus(); }, 80);
}
async function confirmInlineFolder(){
  const input = document.getElementById('inline-folder-input');
  const name = (input ? input.value : '').trim();
  if(!name){ toast('Digite um nome para a pasta'); return; }
  const btn = document.querySelector('#inline-folder-form .btn-primary');
  if(btn){ btn.disabled = true; btn.textContent = '...'; }
  const { data, error } = await sb.from('folders').insert({name, user_id:currentUser.id}).select().single();
  if(error){ toast('Erro ao criar pasta'); console.error(error); if(btn){ btn.disabled=false; btn.textContent='Criar'; } return; }
  db.folders.push({id:data.id, name:data.name, createdAt:new Date(data.created_at).getTime()});
  cancelInlineFolder();
  renderFolderSelect(data.id); // já seleciona a pasta recém-criada
  toast(`Pasta "${name}" criada e selecionada`);
}
function cancelInlineFolder(){
  const el = document.getElementById('inline-folder-form');
  if(el) el.remove();
}
async function startNewItem(type, subtype){
  await autoSaveDraftIfNeeded();
  closeSheet('createOverlay'); closeSheet('sermonTypeOverlay');
  ctx.editingItem = null;
  ctx.draftId = null;
  ctx.prevView = currentView; // onde o usuário estava ao clicar em 'criar novo'
  ctx.formType = type;
  ctx.formSubtype = subtype || null;
  ctx.activeFormTab = null;
  const titles = {sermon:'Novo sermão '+(SERMON_LABELS[subtype]||''), study:'Novo estudo', devotional:'Novo devocional', summary:'Novo resumo'};
  document.getElementById('formTitle').textContent = titles[type] || 'Novo';
  updateFormTypeTag(type, subtype);
  document.getElementById('f-title').value = '';
  renderFolderSelect(ctx.currentFolder||'');
  renderDynamicFields(type, subtype, {});
  currentView='item-form';
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('visible'));
  document.getElementById('view-item-form').classList.add('visible');
  window.scrollTo(0,0);
}
function updateFormTypeTag(type, subtype){
  const el = document.getElementById('formTypeTag');
  if(!el) return;
  el.innerHTML = typeTagHTML({type, subtype});
  el.style.display = 'block';
}
function getSchemaNameForField(key){
  const cfg = getFieldsConfig(ctx.formType, ctx.formSubtype);
  const f = cfg.find(x=>x.key===key);
  return (f && f.schema) || 'sermon';
}
function renderFieldHTML(f, values, hydrateList){
  if(f.type==='points'){
    return `<div class="field points-field">
      <label>${f.label}</label>
      ${f.hint?`<div class="hint" style="margin-top:-2px;margin-bottom:10px;">${f.hint}</div>`:''}
      <div class="points-list" id="points-list-${f.key}"></div>
      <button type="button" class="btn btn-secondary btn-sm btn-block" onclick="addPoint('${f.key}')">＋ Adicionar ponto</button>
    </div>`;
  }
  if(f.type==='textarea'){
    const { editorId, html } = rteFieldHTML('data-key', f.key, f.placeholder, f.big);
    if(hydrateList) hydrateList.push({id:editorId, value:values[f.key]||''});
    return `<div class="field"><label>${f.label}</label>${html}${f.hint?`<div class="hint">${f.hint}</div>`:''}</div>`;
  }
  const val = escapeHTML(values[f.key]||'');
  return `<div class="field"><label>${f.label}</label><input type="text" data-key="${f.key}" value="${val}" placeholder="${f.placeholder||''}">${f.hint?`<div class="hint">${f.hint}</div>`:''}</div>`;
}
function renderDynamicFields(type, subtype, values){
  const cfg = getFieldsConfig(type, subtype);
  const wrap = document.getElementById('f-dynamic');
  ctx.formPoints = {};
  const hydrateList = [];
  const tabs = FORM_TABS[type];
  if(tabs){
    ctx.activeFormTab = (ctx.activeFormTab && tabs.some(t=>t.id===ctx.activeFormTab)) ? ctx.activeFormTab : tabs[0].id;
    const tabBar = `<div class="form-tabs">${tabs.map(t=>`<button type="button" class="form-tab ${ctx.activeFormTab===t.id?'active':''}" data-tab="${t.id}" onclick="switchFormTab('${t.id}')">${t.label}</button>`).join('')}</div>`;
    const panels = tabs.map(t=>`<div class="form-tab-panel" data-tab="${t.id}" style="display:${ctx.activeFormTab===t.id?'block':'none'}">${cfg.filter(f=>f.tab===t.id).map(f=>renderFieldHTML(f, values, hydrateList)).join('')}</div>`).join('');
    wrap.innerHTML = tabBar + panels;
  }else{
    wrap.innerHTML = cfg.map(f=>renderFieldHTML(f, values, hydrateList)).join('');
  }
  hydrateList.forEach(h=>setRTEContent(h.id, h.value));
  cfg.forEach(f=>{ if(f.type==='points') ctx.formPoints[f.key] = normalizePoints(values[f.key], f.schema); });
  cfg.forEach(f=>{ if(f.type==='points') renderPointsList(f.key); });
}
function switchFormTab(tabId){
  ctx.activeFormTab = tabId;
  document.querySelectorAll('.form-tab-panel').forEach(p=>{ p.style.display = p.dataset.tab===tabId ? 'block':'none'; });
  document.querySelectorAll('.form-tab').forEach(b=>{ b.classList.toggle('active', b.dataset.tab===tabId); });
}
function normalizePoints(value, schemaName){
  const schema = POINT_SCHEMAS[schemaName] || POINT_SCHEMAS.sermon;
  if(Array.isArray(value)){
    return value.map(p=>{
      const o = {id:p.id||uid(), _expanded:false};
      schema.fields.forEach(f=>{ o[f.key] = p[f.key]||''; });
      return o;
    });
  }
  if(typeof value==='string' && value.trim()){
    // migração: formato antigo (texto livre, uma linha por ponto)
    return value.split('\n').map(l=>l.trim()).filter(Boolean).map(l=>{
      const o = {id:uid(), _expanded:false};
      schema.fields.forEach(f=>{ o[f.key] = ''; });
      o[schema.titleKey] = l;
      return o;
    });
  }
  return [];
}
function renderPointsList(key){
  const list = document.getElementById('points-list-'+key);
  if(!list) return;
  const schema = POINT_SCHEMAS[getSchemaNameForField(key)] || POINT_SCHEMAS.sermon;
  const points = ctx.formPoints[key] || [];
  if(!points.length){
    list.innerHTML = `<div class="points-empty">Nenhum ponto ainda. Toque em "Adicionar ponto" para começar.</div>`;
    return;
  }
  const hydrateList = [];
  list.innerHTML = points.map((p,idx)=>{
    const titleVal = p[schema.titleKey] || '';
    if(!p._expanded){
      const otherField = schema.fields.find(f=>f.key!==schema.titleKey && p[f.key]);
      const preview = otherField ? stripHTML(p[otherField.key]) : '';
      return `<div class="point-card point-collapsed" data-point-id="${p.id}">
        <div class="point-collapsed-main" onclick="togglePointExpand('${key}','${p.id}',true)">
          <span class="point-num point-num-round">${idx+1}</span>
          <div class="point-collapsed-text">
            <div class="point-collapsed-title">${escapeHTML(titleVal||'(sem título)')}</div>
            ${preview?`<div class="point-collapsed-ref">${escapeHTML(truncateText(preview,60))}</div>`:''}
          </div>
        </div>
        <div class="point-collapsed-actions">
          <button type="button" class="point-icon-btn" onclick="togglePointExpand('${key}','${p.id}',true)" title="Editar ponto">${ICONS.edit}</button>
          <button type="button" class="point-icon-btn point-icon-danger" onclick="removePoint('${key}','${p.id}')" title="Remover ponto">${ICONS.trash}</button>
        </div>
      </div>`;
    }
    const fieldsHtml = schema.fields.map(f=>{
      if(f.type==='textarea'){
        const { editorId, html } = rteFieldHTML('data-point-field', f.key, f.placeholder, false);
        hydrateList.push({id:editorId, value:p[f.key]||''});
        return `<div class="field"><label>${f.label}</label>${html}</div>`;
      }
      const val = escapeHTML(p[f.key]||'');
      return `<div class="field"><label>${f.label}</label><input type="text" data-point-field="${f.key}" value="${val}" placeholder="${f.placeholder||''}"></div>`;
    }).join('');
    return `<div class="point-card" data-point-id="${p.id}">
      <div class="point-card-head">
        <span class="point-num">Ponto ${idx+1}</span>
        <button type="button" class="point-remove" onclick="removePoint('${key}','${p.id}')" title="Remover ponto">${ICONS.trash}</button>
      </div>
      ${fieldsHtml}
      <button type="button" class="btn btn-primary btn-sm btn-block point-save-btn" onclick="togglePointExpand('${key}','${p.id}',false)">${ICONS.check} Salvar ponto</button>
    </div>`;
  }).join('');
  hydrateList.forEach(h=>setRTEContent(h.id, h.value));
}
function syncPointsFromDOM(key){
  const list = document.getElementById('points-list-'+key);
  if(!list || !ctx.formPoints[key]) return;
  const updated = [];
  list.querySelectorAll('.point-card').forEach(card=>{
    const id = card.dataset.pointId;
    const existing = ctx.formPoints[key].find(p=>p.id===id) || {id};
    card.querySelectorAll('[data-point-field]').forEach(inp=>{
      existing[inp.dataset.pointField] = inp.classList.contains('rte-editor') ? readRTEValue(inp) : inp.value;
    });
    updated.push(existing);
  });
  ctx.formPoints[key] = updated;
}
function togglePointExpand(key, pointId, expand){
  syncPointsFromDOM(key);
  const p = ctx.formPoints[key].find(x=>x.id===pointId);
  if(p) p._expanded = expand;
  renderPointsList(key);
}
function addPoint(key){
  syncPointsFromDOM(key);
  const schema = POINT_SCHEMAS[getSchemaNameForField(key)] || POINT_SCHEMAS.sermon;
  const blank = {id:uid(), _expanded:true};
  schema.fields.forEach(f=>{ blank[f.key] = ''; });
  ctx.formPoints[key].push(blank);
  renderPointsList(key);
}
function removePoint(key, pointId){
  syncPointsFromDOM(key);
  ctx.formPoints[key] = ctx.formPoints[key].filter(p=>p.id!==pointId);
  renderPointsList(key);
}
function collectDynamicFields(){
  const out = {};
  document.querySelectorAll('#f-dynamic [data-key]').forEach(el=>{
    out[el.dataset.key] = el.classList.contains('rte-editor') ? readRTEValue(el) : el.value;
  });
  if(ctx.formPoints){
    Object.keys(ctx.formPoints).forEach(key=>{
      syncPointsFromDOM(key);
      out[key] = ctx.formPoints[key].map(p=>{ const clean = Object.assign({}, p); delete clean._expanded; return clean; });
    });
  }
  return out;
}
async function saveItemForm(){
  const title = document.getElementById('f-title').value.trim();
  if(!title){ toast('Dê um título ao seu conteúdo'); return; }
  const folderId = document.getElementById('f-folder').value || null;
  const fields = collectDynamicFields();
  let savedId = null;
  if(ctx.editingItem){
    const { data, error } = await sb.from('items').update({title, folder_id:folderId, fields, updated_at:new Date().toISOString()}).eq('id', ctx.editingItem).select().single();
    if(error){ toast('Erro ao salvar'); console.error(error); return; }
    const item = db.items.find(i=>i.id===ctx.editingItem);
    item.title = title; item.folderId = folderId; item.fields = fields; item.updatedAt = new Date(data.updated_at).getTime();
    savedId = ctx.editingItem;
  }else if(ctx.draftId){
    const { data, error } = await sb.from('items').update({title, folder_id:folderId, fields, is_draft:false, updated_at:new Date().toISOString()}).eq('id', ctx.draftId).select().single();
    if(error){ toast('Erro ao salvar'); console.error(error); return; }
    db.drafts = db.drafts.filter(d=>d.id!==ctx.draftId);
    const newItem = {id:data.id, type:data.type, subtype:data.subtype, title:data.title, folderId:data.folder_id, fields:data.fields||{}, isDraft:false, createdAt:new Date(data.created_at).getTime(), updatedAt:new Date(data.updated_at).getTime()};
    db.items.push(newItem);
    savedId = data.id;
    ctx.draftId = null;
    updateDraftsWidget();
  }else{
    const wasFirst = db.items.length===0;
    const { data, error } = await sb.from('items').insert({
      type:ctx.formType, subtype:ctx.formSubtype||null, title, folder_id:folderId, fields, user_id:currentUser.id
    }).select().single();
    if(error){ toast('Erro ao salvar'); console.error(error); return; }
    const newItem = {id:data.id, type:data.type, subtype:data.subtype, title:data.title, folderId:data.folder_id, fields:data.fields||{}, isDraft:false, createdAt:new Date(data.created_at).getTime(), updatedAt:new Date(data.updated_at).getTime()};
    db.items.push(newItem);
    savedId = data.id;
    if(wasFirst) addNotification('Primeiro conteúdo salvo!', `"${title}" foi criado com sucesso.`);
  }
  toast('Salvo com sucesso');
  ctx.editSnapshot = null;
  // preserva de onde veio para o botão voltar do detalhe funcionar
  const originView = ctx.prevView || (ctx.currentFolder ? 'folder-detail' : 'home');
  currentView = null;
  if(savedId){
    ctx.prevView = originView; // será usado pelo backFromDetail
    openItem(savedId);
  } else {
    showView('home');
  }
}
/* ================= UNSAVED CHANGES (edição de item existente) ================= */
let unsavedPendingAction = null;
function stableStringify(value){
  if(Array.isArray(value)) return '['+value.map(stableStringify).join(',')+']';
  if(value && typeof value==='object'){
    const keys = Object.keys(value).sort();
    return '{'+keys.map(k=>JSON.stringify(k)+':'+stableStringify(value[k])).join(',')+'}';
  }
  return JSON.stringify(value);
}
function hasEditingChanges(){
  if(!ctx.editingItem || !ctx.editSnapshot) return false;
  const titleEl = document.getElementById('f-title');
  const currentTitle = titleEl ? titleEl.value.trim() : '';
  const currentFolderId = document.getElementById('f-folder').value || null;
  const currentFields = collectDynamicFields();
  const current = stableStringify({title:currentTitle, folderId:currentFolderId, fields:currentFields});
  return current !== ctx.editSnapshot;
}
function checkUnsavedAndRun(action){
  if(ctx.editingItem && hasEditingChanges()){
    unsavedPendingAction = action;
    openSheet('unsavedOverlay');
  }else{
    ctx.editSnapshot = null;
    action();
  }
}
async function unsavedSave(){
  closeSheet('unsavedOverlay');
  await saveItemForm();
  unsavedPendingAction = null;
}
function unsavedDiscard(){
  closeSheet('unsavedOverlay');
  ctx.editSnapshot = null;
  ctx.editingItem = null; // limpa antes de qualquer navegação para não acionar auto-save
  if(unsavedPendingAction){
    const action = unsavedPendingAction;
    unsavedPendingAction = null;
    action();
  }
}

function hasFormContent(title, fields){
  if(title && title.trim()) return true;
  // verifica também conteúdo vivo nos editores RTE (antes de collectDynamicFields)
  if(document.querySelectorAll('#f-dynamic .rte-editor').length){
    for(const el of document.querySelectorAll('#f-dynamic .rte-editor')){
      if((el.textContent||'').trim()) return true;
    }
    for(const el of document.querySelectorAll('#f-dynamic input[type=text][data-key]')){
      if((el.value||'').trim()) return true;
    }
  }
  // verifica campos já coletados
  return Object.values(fields).some(v=>{
    if(Array.isArray(v)) return v.some(p=>Object.entries(p).some(([k,val])=>!['id','_expanded'].includes(k) && val && String(stripHTML(val)).trim()));
    return v && String(stripHTML(v)).trim();
  });
}
async function autoSaveDraftIfNeeded(){
  if(ctx.skipAutoSave){ ctx.skipAutoSave = false; return; }
  if(currentView!=='item-form' && currentView!=='leaving-form') return;
  if(ctx.editingItem) return;
  const titleEl = document.getElementById('f-title');
  if(!titleEl) return;
  const title = titleEl.value.trim();
  const folderEl = document.getElementById('f-folder');
  const folderId = folderEl ? (folderEl.value || null) : null;
  const fields = collectDynamicFields();
  if(!hasFormContent(title, fields)){
    if(ctx.draftId){
      await sb.from('items').delete().eq('id', ctx.draftId);
      db.drafts = db.drafts.filter(d=>d.id!==ctx.draftId);
      ctx.draftId = null;
      updateDraftsWidget();
    }
    return;
  }
  const draftTitle = title || '(sem título)';
  if(ctx.draftId){
    const { data, error } = await sb.from('items').update({title:draftTitle, folder_id:folderId, fields, updated_at:new Date().toISOString()}).eq('id', ctx.draftId).select().single();
    if(!error){
      const d = db.drafts.find(x=>x.id===ctx.draftId);
      if(d){ d.title=draftTitle; d.folderId=folderId; d.fields=fields; d.updatedAt=new Date(data.updated_at).getTime(); }
      toast('Salvo como rascunho');
    }else console.error(error);
  }else{
    const { data, error } = await sb.from('items').insert({
      type:ctx.formType, subtype:ctx.formSubtype||null, title:draftTitle, folder_id:folderId, fields, user_id:currentUser.id, is_draft:true
    }).select().single();
    if(!error){
      db.drafts.push({id:data.id, type:data.type, subtype:data.subtype, title:data.title, folderId:data.folder_id, fields:data.fields||{}, isDraft:true, createdAt:new Date(data.created_at).getTime(), updatedAt:new Date(data.updated_at).getTime()});
      ctx.draftId = data.id;
      toast('Salvo como rascunho');
    }else console.error(error);
  }
  updateDraftsWidget();
}
async function cancelForm(){
  if(currentView!=='item-form'){ showView('home'); return; }
  // edição de item existente com alterações: mostra aviso
  if(ctx.editingItem && hasEditingChanges()){
    const itemId = ctx.editingItem;
    checkUnsavedAndRun(()=>{
      ctx.editingItem = null;
      ctx.editSnapshot = null;
      ctx.skipAutoSave = true;
      openItem(itemId); // volta ao detalhe do item
    });
    return;
  }
  // edição sem alterações: volta ao detalhe silenciosamente
  if(ctx.editingItem){
    const itemId = ctx.editingItem;
    ctx.editingItem = null;
    ctx.editSnapshot = null;
    ctx.skipAutoSave = true;
    currentView = 'leaving-form';
    openItem(itemId);
    return;
  }
  // criação nova: auto-save de rascunho se houver conteúdo
  const titleEl = document.getElementById('f-title');
  const title = titleEl ? titleEl.value.trim() : '';
  const fields = collectDynamicFields();
  const hadContent = hasFormContent(title, fields);
  await autoSaveDraftIfNeeded();
  ctx.editSnapshot = null;
  doLeaveForm(hadContent);
}
function doLeaveForm(hadContent){
  currentView = 'leaving-form';
  const prev = ctx.prevView;
  if(ctx.currentFolder){ openFolder(ctx.currentFolder); return; }
  if(prev && prev!=='item-form' && document.getElementById('view-'+prev)){
    if(hadContent && prev==='library') openLibraryDraftsTab();
    else showView(prev);
  } else {
    showView('home');
  }
}
async function openDraft(id){
  await autoSaveDraftIfNeeded();
  const draft = db.drafts.find(d=>d.id===id);
  if(!draft) return;
  ctx.editingItem = null;
  ctx.draftId = id;
  ctx.prevView = currentView; // salva de onde viemos (ex: 'library')
  ctx.formType = draft.type;
  ctx.formSubtype = draft.subtype;
  ctx.activeFormTab = null;
  document.getElementById('formTitle').textContent = 'Continuar rascunho';
  updateFormTypeTag(draft.type, draft.subtype);
  document.getElementById('f-title').value = draft.title==='(sem título)' ? '' : draft.title;
  renderFolderSelect(draft.folderId);
  renderDynamicFields(draft.type, draft.subtype, draft.fields);
  currentView='item-form';
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('visible'));
  document.getElementById('view-item-form').classList.add('visible');
  window.scrollTo(0,0);
}
function deleteDraft(id){
  confirmAction('Excluir rascunho', 'Esta ação não pode ser desfeita.', async ()=>{
    const { error } = await sb.from('items').delete().eq('id', id);
    if(error){ toast('Erro ao excluir'); console.error(error); return; }
    db.drafts = db.drafts.filter(d=>d.id!==id);
    closeSheet('confirmOverlay');
    renderDrafts();
    updateDraftsWidget();
    toast('Rascunho excluído');
  });
}
function renderDrafts(){
  const list = document.getElementById('draftsList');
  if(!list) return;
  const searchEl = document.getElementById('libraryDraftsSearch');
  const q = (searchEl ? searchEl.value : '').trim().toLowerCase();
  const drafts = db.drafts || [];
  if(!drafts.length){ list.innerHTML = emptyState(ICONS.edit,'Nenhum rascunho','Quando você sair de uma criação sem salvar, ela aparece aqui automaticamente.'); return; }
  let sorted = [...drafts].sort((a,b)=>b.updatedAt-a.updatedAt);
  if(q) sorted = sorted.filter(d=>(d.title||'').toLowerCase().includes(q));
  if(!sorted.length){ list.innerHTML = emptyState(ICONS.search,'Nenhum rascunho encontrado',`Nenhum resultado para "${escapeHTML(q)}".`); return; }
  list.innerHTML = sorted.map(d=>`
    <div class="item-card ${d.type}" onclick="openDraft('${d.id}')">
      <div class="i-ic">${typeIcon(d)}</div>
      <div class="i-body">
        <div class="i-title">${escapeHTML(d.title||'(sem título)')}</div>
        <div class="i-meta">${typeTagHTML(d)}<span>· rascunho de ${new Date(d.updatedAt).toLocaleDateString('pt-BR')}</span></div>
      </div>
      <button class="point-icon-btn point-icon-danger" onclick="event.stopPropagation();deleteDraft('${d.id}')" title="Excluir rascunho">${ICONS.trash}</button>
    </div>`).join('');
}
function updateDraftsWidget(){
  const card = document.getElementById('draftsCard');
  if(!card) return;
  const drafts = db.drafts || [];
  if(drafts.length){
    card.style.display = 'flex';
    document.getElementById('draftsCount').textContent = drafts.length;
  }else{
    card.style.display = 'none';
  }
}

/* ================= ITEM DETAIL ================= */
async function openItem(id){
  await autoSaveDraftIfNeeded();
  ctx.currentItem = id;
  ctx.prevView = currentView;
  currentView='item-detail';
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('visible'));
  document.getElementById('view-item-detail').classList.add('visible');
  renderItemDetail(id);
  window.scrollTo(0,0);
}
function renderItemDetail(id){
  const item = db.items.find(i=>i.id===id);
  const folder = db.folders.find(f=>f.id===item.folderId);
  const cfg = getFieldsConfig(item.type, item.subtype);
  const typeTag = item.type==='sermon' ? `<span class="tag ${item.subtype}">Sermão · ${SERMON_LABELS[item.subtype]}</span>` : typeTagHTML(item);
  let html = `<div class="detail-header">
    <div class="detail-tags">${typeTag}</div>
    <div class="detail-title">${escapeHTML(item.title)}</div>
    <div class="detail-meta">${folder?(iconInline(ICONS.folder,12)+' '+escapeHTML(folder.name)+' · '):''}atualizado em ${new Date(item.updatedAt).toLocaleDateString('pt-BR')}</div>
    <div class="detail-actions">
      <button class="btn btn-primary btn-sm" onclick="editItem('${item.id}')">${ICONS.edit} Editar</button>
      <button class="btn btn-secondary btn-sm" onclick="openPresentation('${item.id}')">${ICONS.fullscreen} Modo Apresentação</button>
      <button class="btn btn-secondary btn-sm" onclick="genMindMapFromItem('${item.id}')">${ICONS.brain} Gerar mapa mental</button>
      <button class="btn btn-danger btn-sm" onclick="deleteItem('${item.id}')">${ICONS.trash} Excluir</button>
    </div>
  </div>`;
  cfg.forEach(f=>{
    if(f.type==='points'){
      const schema = POINT_SCHEMAS[f.schema] || POINT_SCHEMAS.sermon;
      const points = Array.isArray(item.fields[f.key]) ? item.fields[f.key] : [];
      const filled = points.filter(p=>schema.fields.some(sf=>p[sf.key]));
      if(!filled.length) return;
      html += `<div class="field-block"><div class="fb-label">${f.label}</div>`;
      filled.forEach((p,idx)=>{
        const titleVal = p[schema.titleKey] || `Bloco ${idx+1}`;
        const bodyFields = schema.fields.filter(sf=>sf.key!==schema.titleKey && p[sf.key]);
        html += `<div class="point-view${idx>0?' point-view-sep':''}">
          <div class="point-view-title">${idx+1}. ${escapeHTML(titleVal)}</div>
          ${bodyFields.map(sf=>`<div class="point-view-field"><div class="point-view-field-label">${escapeHTML(sf.label)}</div><div class="point-view-field-text">${renderRichContent(p[sf.key])}</div></div>`).join('')}
        </div>`;
      });
      html += `</div>`;
      return;
    }
    const val = (item.fields[f.key]||'').trim();
    if(!val) return;
    html += `<div class="field-block"><div class="fb-label">${f.label}</div><div class="fb-content rte-display">${renderRichContent(val)}</div></div>`;
  });
  document.getElementById('itemDetailContent').innerHTML = html;
}
function backFromDetail(){
  const item = db.items.find(i=>i.id===ctx.currentItem);
  if(item && item.folderId){ openFolder(item.folderId); return; }
  const prev = ctx.prevView;
  if(prev && prev!=='item-detail' && document.getElementById('view-'+prev)){
    showView(prev); return;
  }
  showView('home');
}
async function editItem(id){
  await autoSaveDraftIfNeeded();
  const item = db.items.find(i=>i.id===id);
  ctx.editingItem = id;
  ctx.editSnapshot = stableStringify({title:item.title, folderId:item.folderId, fields:item.fields});
  ctx.prevView = currentView;
  ctx.formType = item.type;
  ctx.formSubtype = item.subtype;
  ctx.activeFormTab = null;
  document.getElementById('formTitle').textContent = 'Editar';
  updateFormTypeTag(item.type, item.subtype);
  document.getElementById('f-title').value = item.title;
  renderFolderSelect(item.folderId);
  renderDynamicFields(item.type, item.subtype, item.fields);
  currentView='item-form';
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('visible'));
  document.getElementById('view-item-form').classList.add('visible');
  window.scrollTo(0,0);
}
function deleteItem(id){
  confirmAction('Excluir item', 'Esta ação não pode ser desfeita. O conteúdo será apagado permanentemente.', async ()=>{
    const item = db.items.find(i=>i.id===id);
    const { error } = await sb.from('items').delete().eq('id', id);
    if(error){ toast('Erro ao excluir'); console.error(error); return; }
    db.items = db.items.filter(i=>i.id!==id);
    db.mindmaps = db.mindmaps.filter(m=>m.itemId!==id);
    closeSheet('confirmOverlay');
    toast('Item excluído');
    if(item && item.folderId) openFolder(item.folderId); else showView('home');
  });
}

/* ================= CONFIRM ================= */
function confirmAction(title, msg, onConfirm){
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmMsg').textContent = msg;
  const btn = document.getElementById('confirmActionBtn');
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
  newBtn.addEventListener('click', onConfirm);
  openSheet('confirmOverlay');
}

/* ================= MINDMAPS ================= */
function truncateText(s,n){ return s.length>n ? s.slice(0,n-1)+'…' : s; }

function htmlForMindMapNode(rawValue){
  if(!rawValue) return {text:'', isHtml:false};
  if(!looksLikeHTML(rawValue)){
    return {text: truncateText(rawValue.trim(), 220), isHtml:false};
  }
  const clean = sanitizeHTML(rawValue);
  const tmp = document.createElement('div');
  tmp.innerHTML = clean;
  // limita itens de lista pra não deixar o card gigante
  tmp.querySelectorAll('ul,ol').forEach(list=>{
    const items = Array.from(list.children);
    if(items.length>8){
      items.slice(8).forEach(li=>li.remove());
      const more = document.createElement('li');
      more.textContent = '…';
      list.appendChild(more);
    }
  });
  const hasList = tmp.querySelector('ul,ol,li');
  if(hasList) return {text: tmp.innerHTML, isHtml:true};
  return {text: truncateText((tmp.textContent||'').trim(), 220), isHtml:false};
}
async function genMindMapFromItem(itemId){
  const item = db.items.find(i=>i.id===itemId);
  const cfg = getFieldsConfig(item.type, item.subtype);
  const nodes = [];
  const rootId = uid();
  nodes.push({id:rootId, text:item.title, full:item.title, parentId:null});
  cfg.forEach(f=>{
    if(f.type==='points'){
      const schema = POINT_SCHEMAS[f.schema] || POINT_SCHEMAS.sermon;
      const points = Array.isArray(item.fields[f.key]) ? item.fields[f.key] : [];
      const filled = points.filter(p=>schema.fields.some(sf=>p[sf.key]));
      if(!filled.length) return;
      const fieldId = uid();
      nodes.push({id:fieldId, text:f.label, full:f.label, parentId:rootId});
      filled.forEach((p,idx)=>{
        const pointId = uid();
        const titleVal = p[schema.titleKey] || `Bloco ${idx+1}`;
        const otherVals = schema.fields.filter(sf=>sf.key!==schema.titleKey).map(sf=>stripHTML(p[sf.key]||'')).filter(Boolean);
        nodes.push({id:pointId, text:truncateText(titleVal,44), full:[titleVal].concat(otherVals).join(' — '), parentId:fieldId});
        const activeSubFields = schema.fields.filter(sf=>sf.key!==schema.titleKey && stripHTML(p[sf.key]||'').trim());
        activeSubFields.forEach(sf=>{
          const { text:nodeText, isHtml } = htmlForMindMapNode(p[sf.key]);
          if(!nodeText) return;
          const plainFull = stripHTML(p[sf.key]||'');
          // só prefixa o rótulo do campo quando há mais de um campo preenchido no mesmo ponto (evita "Conteúdo:" redundante)
          const showLabel = activeSubFields.length>1 && !isHtml;
          nodes.push({
            id:uid(),
            text: showLabel ? (sf.label+': '+nodeText) : nodeText,
            label: (activeSubFields.length>1 && isHtml) ? sf.label : null,
            isHtml, full:plainFull, parentId:pointId
          });
        });
      });
      return;
    }
    const rawVal = item.fields[f.key]||'';
    const plainCheck = stripHTML(rawVal).trim();
    if(!plainCheck) return;
    const fieldId = uid();
    nodes.push({id:fieldId, text:f.label, full:plainCheck, parentId:rootId});
    const { text:nodeText, isHtml } = htmlForMindMapNode(rawVal);
    if(!isHtml){
      const lines = nodeText.split('\n').map(l=>l.trim()).filter(Boolean);
      if(lines.length>1){
        lines.slice(0,8).forEach(line=>{
          nodes.push({id:uid(), text:truncateText(line,120), full:line, parentId:fieldId});
        });
        return;
      }
    }
    // campo de linha única ou com formatação rica: cria um nó-filho com o próprio valor
    nodes.push({id:uid(), text:nodeText, isHtml, full:plainCheck, parentId:fieldId});
  });
  autoLayout({nodes});
  const { data, error } = await sb.from('mindmaps').insert({title:item.title, item_id:item.id, nodes, user_id:currentUser.id}).select().single();
  if(error){ toast('Erro ao gerar mapa'); console.error(error); return; }
  const map = {id:data.id, itemId:data.item_id, title:data.title, nodes:data.nodes, createdAt:new Date(data.created_at).getTime()};
  db.mindmaps.push(map);
  toast('Mapa mental gerado');
  addNotification('Mapa mental gerado', `O mapa de "${item.title}" está pronto para você explorar.`);
  openMindMap(map.id);
}
async function createBlankMindMap(){
  const nodes = [{id:uid(), text:'Novo mapa', full:'Novo mapa', parentId:null, nx:0, ny:0}];
  const { data, error } = await sb.from('mindmaps').insert({title:'Novo mapa mental', item_id:null, nodes, user_id:currentUser.id}).select().single();
  if(error){ toast('Erro ao criar mapa'); console.error(error); return; }
  const map = {id:data.id, itemId:data.item_id, title:data.title, nodes:data.nodes, createdAt:new Date(data.created_at).getTime()};
  db.mindmaps.push(map);
  openMindMap(map.id);
}
function renderMindmapsList(){
  const wrap = document.getElementById('mindmapsList');
  const q = (document.getElementById('mindmapsSearch').value||'').trim().toLowerCase();
  if(!db.mindmaps.length){
    wrap.innerHTML = emptyState(ICONS.brain,'Nenhum mapa ainda','Abra um sermão ou estudo e toque em "Gerar mapa mental", ou crie um mapa em branco.');
    return;
  }
  let maps = [...db.mindmaps].sort((a,b)=>b.createdAt-a.createdAt);
  if(q) maps = maps.filter(m=>(m.title||'').toLowerCase().includes(q));
  if(!maps.length){ wrap.innerHTML = emptyState(ICONS.search,'Nada encontrado',`Nenhum mapa com "${escapeHTML(q)}".`); return; }
  wrap.innerHTML = maps.map(m=>`
    <div class="map-list-card" onclick="openMindMap('${m.id}')">
      <div class="m-ic">${ICONS.brain}</div>
      <div><div class="m-title">${escapeHTML(m.title)}</div><div class="m-meta">${m.nodes.length} nós · ${new Date(m.createdAt).toLocaleDateString('pt-BR')}</div></div>
    </div>`).join('');
}

function autoLayout(map){
  const nodes = map.nodes;
  const byParent = {};
  nodes.forEach(n=>{ const key=n.parentId||'root'; (byParent[key]=byParent[key]||[]).push(n); });
  const root = nodes.find(n=>!n.parentId);
  if(!root) return;
  root.nx = 0; root.ny = 0;
  function place(node, aStart, aEnd, radius){
    const children = byParent[node.id]||[];
    if(!children.length) return;
    const step = (aEnd-aStart)/children.length;
    children.forEach((c,i)=>{
      const a = aStart + step*(i+0.5);
      c.nx = Math.cos(a)*radius;
      c.ny = Math.sin(a)*radius;
      place(c, a-step*0.42, a+step*0.42, radius+180);
    });
  }
  place(root, -Math.PI, Math.PI, 210);
}

const MM_CX = 1000, MM_CY = 800;
const MM_NODE_COLORS = ['#2F6FED','#1B8A5A','#5B3FE0','#C2680C','#E0563F','#0E7C86'];
let currentMapId = null;
let selectedNodeId = null;
let currentZoom = 1;
async function openMindMap(id){
  await autoSaveDraftIfNeeded();
  currentMapId = id; selectedNodeId = null; currentZoom = 1;
  const map = db.mindmaps.find(m=>m.id===id);
  document.getElementById('mapEditorTitle').textContent = map.title;
  currentView='mindmap-editor';
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('visible'));
  document.getElementById('view-mindmap-editor').classList.add('visible');
  document.querySelector('.main').classList.add('main-wide');
  renderMindMapCanvas();
  applyZoom();
  initCanvasPan();
  setTimeout(centerMapScroll, 50);
}
function centerMapScroll(){
  const wrap = document.getElementById('mapWrap');
  wrap.scrollLeft = MM_CX*currentZoom - wrap.clientWidth/2;
  wrap.scrollTop = MM_CY*currentZoom - wrap.clientHeight/2;
}
function getMap(){ return db.mindmaps.find(m=>m.id===currentMapId); }

/* ---- Zoom ---- */
function applyZoom(){
  const canvas = document.getElementById('mapCanvas');
  canvas.style.transform = `scale(${currentZoom})`;
  canvas.style.transformOrigin = '0 0';
  document.getElementById('zoomLabel').textContent = Math.round(currentZoom*100)+'%';
}
function zoomIn(){ currentZoom = Math.min(2, +(currentZoom+0.15).toFixed(2)); applyZoom(); }
function zoomOut(){ currentZoom = Math.max(0.35, +(currentZoom-0.15).toFixed(2)); applyZoom(); }
function zoomReset(){ currentZoom = 1; applyZoom(); }

/* ---- Pan (arrastar espaço vazio para navegar) ---- */
function initCanvasPan(){
  const wrap = document.getElementById('mapWrap');
  if(wrap.dataset.panInit) return;
  wrap.dataset.panInit = '1';
  let panning=false, startX,startY, startScrollLeft, startScrollTop, movedPan=false;
  wrap.addEventListener('pointerdown', e=>{
    if(e.target.closest('.mm-node') || e.target.closest('.mm-toolbar') || e.target.closest('.mm-color-dot')) return;
    panning = true; movedPan = false;
    startX=e.clientX; startY=e.clientY;
    startScrollLeft=wrap.scrollLeft; startScrollTop=wrap.scrollTop;
    wrap.classList.add('panning');
  });
  wrap.addEventListener('pointermove', e=>{
    if(!panning) return;
    const dx = e.clientX-startX, dy = e.clientY-startY;
    if(Math.abs(dx)>3||Math.abs(dy)>3) movedPan = true;
    wrap.scrollLeft = startScrollLeft - dx;
    wrap.scrollTop = startScrollTop - dy;
  });
  window.addEventListener('pointerup', ()=>{
    if(!panning) return;
    panning=false;
    wrap.classList.remove('panning');
    if(!movedPan){ selectedNodeId=null; renderMindMapCanvas(); }
  });
}

function renderMindMapCanvas(){
  const map = getMap();
  if(!map) return;
  const canvas = document.getElementById('mapCanvas');
  const CX=MM_CX, CY=MM_CY;
  let svg = `<svg width="2000" height="1600" style="position:absolute;left:0;top:0;pointer-events:none;">`;
  map.nodes.forEach(n=>{
    if(!n.parentId) return;
    const p = map.nodes.find(x=>x.id===n.parentId);
    if(!p) return;
    const x1=CX+p.nx, y1=CY+p.ny, x2=CX+n.nx, y2=CY+n.ny;
    const mx=(x1+x2)/2;
    svg += `<path data-parent="${p.id}" data-child="${n.id}" d="M${x1},${y1} Q${mx},${y1} ${x2},${y2}" stroke="#BFD6FF" stroke-width="2.5" fill="none"/>`;
  });
  svg += `</svg>`;

  let nodesHTML = '';
  map.nodes.forEach(n=>{
    const level = n.parentId ? (map.nodes.find(x=>x.id===n.parentId).parentId ? 2 : 1) : 0;
    const cls = level===0?'root':(level===1?'lvl1':'')+(n.isHtml?' mm-node-has-html':'');
    const sel = n.id===selectedNodeId ? 'selected':'';
    const colorStyle = n.color ? `background:${n.color};` : '';
    const body = n.isHtml
      ? (n.label?`<div class="mm-node-label">${escapeHTML(n.label)}</div>`:'') + `<div class="mm-node-rich">${n.text}</div>`
      : escapeHTML(n.text);
    nodesHTML += `<div class="mm-node ${cls} ${sel}" data-id="${n.id}" style="left:${CX+n.nx}px;top:${CY+n.ny}px;${colorStyle}" title="${escapeAttr(n.full||n.text)}">${body}</div>`;
  });

  let toolbarHTML = '';
  if(selectedNodeId){
    const n = map.nodes.find(x=>x.id===selectedNodeId);
    if(n){
      toolbarHTML = `<div class="mm-toolbar" id="mmToolbar" style="left:${CX+n.nx}px;top:${CY+n.ny-58}px;">
        <button title="Renomear" onclick="editNode('${n.id}')">${ICONS.edit}</button>
        <button title="Adicionar ramo" onclick="addChildNode('${n.id}')">＋</button>
        ${n.parentId?`<button title="Excluir" onclick="deleteNode('${n.id}')">${ICONS.trash}</button>`:''}
        <span class="mm-color-sep"></span>
        <button class="mm-color-dot mm-color-reset" onclick="setNodeColor('${n.id}',null)" title="Cor padrão"></button>
        ${MM_NODE_COLORS.map(c=>`<button class="mm-color-dot" style="background:${c}" onclick="setNodeColor('${n.id}','${c}')" title="Colorir"></button>`).join('')}
      </div>`;
    }
  }
  canvas.innerHTML = svg + nodesHTML + toolbarHTML;
  attachNodeHandlers();
}
function escapeAttr(s){ return escapeHTML(s).replace(/\n/g,' '); }
async function persistCurrentMap(){
  const map = getMap();
  if(!map) return;
  const { error } = await sb.from('mindmaps').update({nodes:map.nodes}).eq('id', map.id);
  if(error) console.error(error);
}
function setNodeColor(id, color){
  const map = getMap();
  const n = map.nodes.find(x=>x.id===id);
  if(!n) return;
  n.color = color || null;
  persistCurrentMap();
  renderMindMapCanvas();
}

/* ---- Atualização incremental durante o arraste (não recria o DOM) ---- */
function updateNodeVisualPosition(el, n){
  el.style.left = (MM_CX+n.nx)+'px';
  el.style.top = (MM_CY+n.ny)+'px';
}
function updateEdgesForNode(nodeId){
  const map = getMap();
  document.querySelectorAll(`path[data-parent="${nodeId}"], path[data-child="${nodeId}"]`).forEach(path=>{
    const parent = map.nodes.find(x=>x.id===path.dataset.parent);
    const child = map.nodes.find(x=>x.id===path.dataset.child);
    if(!parent||!child) return;
    const x1=MM_CX+parent.nx, y1=MM_CY+parent.ny, x2=MM_CX+child.nx, y2=MM_CY+child.ny;
    const mx=(x1+x2)/2;
    path.setAttribute('d', `M${x1},${y1} Q${mx},${y1} ${x2},${y2}`);
  });
}
function updateToolbarPosition(n){
  const tb = document.getElementById('mmToolbar');
  if(!tb) return;
  tb.style.left = (MM_CX+n.nx)+'px';
  tb.style.top = (MM_CY+n.ny-58)+'px';
}

function attachNodeHandlers(){
  document.querySelectorAll('.mm-node').forEach(el=>{
    let dragging=false, moved=false, startX,startY, origNX, origNY;
    el.addEventListener('pointerdown', e=>{
      if(el.getAttribute('contenteditable')==='true') return;
      dragging=true; moved=false;
      startX=e.clientX; startY=e.clientY;
      const map=getMap(); const n=map.nodes.find(x=>x.id===el.dataset.id);
      origNX=n.nx; origNY=n.ny;
      el.setPointerCapture(e.pointerId);
      e.stopPropagation();
    });
    el.addEventListener('pointermove', e=>{
      if(!dragging) return;
      const dx=(e.clientX-startX)/currentZoom, dy=(e.clientY-startY)/currentZoom;
      if(Math.abs(dx)>3||Math.abs(dy)>3) moved=true;
      if(!moved) return;
      const map=getMap(); const n=map.nodes.find(x=>x.id===el.dataset.id);
      n.nx = origNX+dx; n.ny = origNY+dy;
      updateNodeVisualPosition(el, n);
      updateEdgesForNode(n.id);
      if(selectedNodeId===n.id) updateToolbarPosition(n);
    });
    el.addEventListener('pointerup', e=>{
      if(!dragging) return;
      dragging=false;
      e.stopPropagation();
      if(!moved){
        selectedNodeId = (selectedNodeId===el.dataset.id) ? null : el.dataset.id;
        renderMindMapCanvas();
      }else{
        persistCurrentMap();
        renderMindMapCanvas();
      }
    });
  });
}
function editNode(id){
  const map=getMap(); const n=map.nodes.find(x=>x.id===id);
  const el = document.querySelector(`.mm-node[data-id="${id}"]`);
  if(!el) return;
  el.setAttribute('contenteditable','true');
  el.textContent = n.full || n.text;
  el.focus();
  document.execCommand('selectAll',false,null);
  function finish(){
    n.text = truncateText(el.textContent.trim()||'(sem texto)', 60);
    n.full = el.textContent.trim();
    n.isHtml = false;
    n.label = null;
    el.removeAttribute('contenteditable');
    persistCurrentMap();
    renderMindMapCanvas();
  }
  el.addEventListener('blur', finish, {once:true});
  el.addEventListener('keydown', e=>{ if(e.key==='Enter'){ e.preventDefault(); el.blur(); }});
}
function addChildNode(parentId){
  const map=getMap();
  const parent = map.nodes.find(x=>x.id===parentId);
  const siblings = map.nodes.filter(x=>x.parentId===parentId);
  const angle = Math.random()*Math.PI*2;
  const newNode = {id:uid(), text:'Novo ramo', full:'Novo ramo', parentId, nx:parent.nx+Math.cos(angle)*160, ny:parent.ny+Math.sin(angle)*160};
  map.nodes.push(newNode);
  selectedNodeId = newNode.id;
  persistCurrentMap();
  renderMindMapCanvas();
  setTimeout(()=>editNode(newNode.id), 60);
}
function deleteNode(id){
  const map=getMap();
  const toDelete = new Set([id]);
  let changed=true;
  while(changed){
    changed=false;
    map.nodes.forEach(n=>{ if(n.parentId && toDelete.has(n.parentId) && !toDelete.has(n.id)){ toDelete.add(n.id); changed=true; }});
  }
  map.nodes = map.nodes.filter(n=>!toDelete.has(n.id));
  selectedNodeId = null;
  persistCurrentMap();
  renderMindMapCanvas();
}
function reorganizeMap(){
  const map=getMap();
  autoLayout(map);
  persistCurrentMap();
  renderMindMapCanvas();
  setTimeout(centerMapScroll,30);
}
function deleteCurrentMap(){
  confirmAction('Excluir mapa mental', 'Esta ação não pode ser desfeita.', async ()=>{
    const { error } = await sb.from('mindmaps').delete().eq('id', currentMapId);
    if(error){ toast('Erro ao excluir mapa'); console.error(error); return; }
    db.mindmaps = db.mindmaps.filter(m=>m.id!==currentMapId);
    closeSheet('confirmOverlay');
    toast('Mapa excluído');
    showView('mindmaps');
  });
}
function openRenameMap(){
  const map = getMap();
  if(!map) return;
  document.getElementById('renameMapInput').value = map.title;
  openSheet('renameMapOverlay');
}
async function confirmRenameMap(){
  const name = document.getElementById('renameMapInput').value.trim();
  if(!name){ toast('Digite um nome para o mapa'); return; }
  const map = getMap();
  const { error } = await sb.from('mindmaps').update({title:name}).eq('id', map.id);
  if(error){ toast('Erro ao renomear mapa'); console.error(error); return; }
  map.title = name;
  document.getElementById('mapEditorTitle').textContent = name;
  closeSheet('renameMapOverlay');
  toast('Mapa renomeado');
}
function getMapBoundingBox(map){
  const pad = 90;
  let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;
  map.nodes.forEach(n=>{
    const x=MM_CX+n.nx, y=MM_CY+n.ny;
    minX=Math.min(minX,x-90); maxX=Math.max(maxX,x+90);
    minY=Math.min(minY,y-40); maxY=Math.max(maxY,y+40);
  });
  if(!isFinite(minX)){ minX=MM_CX-200; maxX=MM_CX+200; minY=MM_CY-100; maxY=MM_CY+100; }
  return {x:Math.max(0,minX-pad), y:Math.max(0,minY-pad), width:(maxX-minX)+pad*2, height:(maxY-minY)+pad*2};
}
async function exportMapAsPDF(){
  const map = getMap();
  if(!map || typeof html2canvas==='undefined' || !window.jspdf){ toast('Não foi possível carregar o exportador de PDF. Verifique sua internet.'); return; }
  const btn = document.getElementById('exportMapBtn');
  btn.disabled = true; const original = btn.innerHTML; btn.innerHTML = 'Gerando...';
  const prevZoom = currentZoom, prevSelected = selectedNodeId;
  selectedNodeId = null; currentZoom = 1; applyZoom(); renderMindMapCanvas();
  await new Promise(r=>setTimeout(r,150));
  try{
    const bbox = getMapBoundingBox(map);
    const shot = await html2canvas(document.getElementById('mapCanvas'), {
      backgroundColor:'#ffffff', scale:2,
      x:bbox.x, y:bbox.y, width:bbox.width, height:bbox.height
    });
    const imgData = shot.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: shot.width>shot.height?'landscape':'portrait', unit:'px', format:[shot.width, shot.height] });
    pdf.addImage(imgData, 'PNG', 0, 0, shot.width, shot.height);
    pdf.save((map.title||'mapa-mental').replace(/[^\w\s-]/g,'').trim()+'.pdf');
    toast('PDF exportado');
  }catch(err){
    console.error(err);
    toast('Erro ao exportar PDF');
  } finally {
    currentZoom = prevZoom; selectedNodeId = prevSelected;
    applyZoom(); renderMindMapCanvas();
    btn.disabled = false; btn.innerHTML = original;
  }
}
document.addEventListener('click', e=>{
  if(currentView==='mindmap-editor' && e.target.id==='mapCanvas'){
    selectedNodeId=null; renderMindMapCanvas();
  }
});

/* ================= BACKUP (removido — dados vivem no Supabase) ================= */
function wipeAll(){
  confirmAction('Apagar todos os dados', 'Todas as pastas, sermões, estudos, devocionais, resumos, mapas mentais, rascunhos e pedidos de oração serão apagados permanentemente da sua conta.', async ()=>{
    const results = await Promise.all([
      sb.from('mindmaps').delete().eq('user_id', currentUser.id),
      sb.from('items').delete().eq('user_id', currentUser.id),
      sb.from('folders').delete().eq('user_id', currentUser.id),
      sb.from('prayer_requests').delete().eq('user_id', currentUser.id),
    ]);
    const errors = results.map(r=>r.error).filter(Boolean);
    if(errors.length){
      console.error('Erros ao apagar dados:', errors);
      toast('Alguns dados não puderam ser apagados. Veja o console para detalhes.');
    }
    await loadAllData();
    closeSheet('confirmOverlay');
    if(!errors.length) toast('Dados apagados');
    showView('home');
  });
}

/* ================= UTIL ================= */
function escapeHTML(s){
  return String(s==null?'':s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

/* ================= PRESENTATION MODE ================= */
let presSlides = [];
let presIndex = 0;

function buildSlides(item){
  const cfg = getFieldsConfig(item.type, item.subtype);
  const subtitle = item.fields.textoBase || item.fields.passagem || item.fields.tema || item.fields.escritura || item.fields.fonte || '';
  const eyebrow = item.type==='sermon' ? (SERMON_LABELS[item.subtype]||'Sermão') : TYPE_LABELS[item.type];
  const slides = [{ kind:'title', eyebrow, title:item.title, sub:subtitle }];
  cfg.forEach(f=>{
    if(f.type==='points'){
      const schema = POINT_SCHEMAS[f.schema] || POINT_SCHEMAS.sermon;
      const points = (item.fields[f.key]||[]).filter(p=>schema.fields.some(sf=>p[sf.key]));
      points.forEach((p,i)=>{
        slides.push({ kind:'point', section:f.label, index:i+1, total:points.length, schema:f.schema, point:p });
      });
      return;
    }
    const val = stripHTML(item.fields[f.key]||'').trim();
    if(val) slides.push({ kind:'text', label:f.label, content:val });
  });
  return slides;
}
function openPresentation(itemId){
  const item = db.items.find(i=>i.id===itemId);
  if(!item) return;
  presSlides = buildSlides(item);
  presIndex = 0;
  document.getElementById('presentationScreen').style.display = 'flex';
  renderPresSlide();
  document.addEventListener('keydown', presKeyHandler);
  const el = document.getElementById('presentationScreen');
  if(el.requestFullscreen) el.requestFullscreen().catch(()=>{});
}
function closePresentation(){
  document.getElementById('presentationScreen').style.display = 'none';
  document.removeEventListener('keydown', presKeyHandler);
  if(document.fullscreenElement) document.exitFullscreen().catch(()=>{});
}
function presKeyHandler(e){
  if(e.key==='Escape') closePresentation();
  if(e.key==='ArrowRight' || e.key===' ') presNext();
  if(e.key==='ArrowLeft') presPrev();
}
function presNext(){ if(presIndex < presSlides.length-1){ presIndex++; renderPresSlide(); } }
function presPrev(){ if(presIndex > 0){ presIndex--; renderPresSlide(); } }
function renderPresSlide(){
  const s = presSlides[presIndex];
  const el = document.getElementById('presSlide');
  document.getElementById('presProgress').textContent = (presIndex+1)+' / '+presSlides.length;
  document.getElementById('presPrevBtn').style.visibility = presIndex===0 ? 'hidden' : 'visible';
  document.getElementById('presNextBtn').style.visibility = presIndex===presSlides.length-1 ? 'hidden' : 'visible';
  if(s.kind==='title'){
    el.innerHTML = `<div class="pres-eyebrow">${escapeHTML(s.eyebrow)}</div>
      <div class="pres-title">${escapeHTML(s.title)}</div>
      ${s.sub?`<div class="pres-sub">${escapeHTML(s.sub)}</div>`:''}`;
  }else if(s.kind==='point'){
    const schema = POINT_SCHEMAS[s.schema] || POINT_SCHEMAS.sermon;
    const p = s.point;
    const titleVal = p[schema.titleKey] || '';
    const bodyFields = schema.fields.filter(sf=>sf.key!==schema.titleKey && p[sf.key]);
    el.innerHTML = `<div class="pres-eyebrow">${escapeHTML(s.section)} · ${s.index}/${s.total}</div>
      <div class="pres-point-title">${escapeHTML(titleVal)}</div>
      ${bodyFields.map(sf=>`<div class="pres-app"><b>${escapeHTML(sf.label)}</b><br>${escapeHTML(stripHTML(p[sf.key]))}</div>`).join('')}`;
  }else{
    el.innerHTML = `<div class="pres-eyebrow">${escapeHTML(s.label)}</div>
      <div class="pres-text pres-text-lg">${escapeHTML(s.content)}</div>`;
  }
}

/* ================= NOTIFICATIONS (internas, no aparelho) ================= */
const NOTIF_KEY = 'kerygma_notifications';
function loadNotifications(){
  try{ return JSON.parse(localStorage.getItem(NOTIF_KEY)) || []; }catch(e){ return []; }
}
function saveNotifications(list){ localStorage.setItem(NOTIF_KEY, JSON.stringify(list.slice(0,50))); }
function addNotification(title, body){
  const list = loadNotifications();
  list.unshift({ id:uid(), title, body, read:false, createdAt:Date.now() });
  saveNotifications(list);
  updateNotifBadge();
}
function updateNotifBadge(){
  const unread = loadNotifications().filter(n=>!n.read).length;
  document.querySelectorAll('.notif-badge').forEach(b=>{
    b.textContent = unread>9 ? '9+' : String(unread);
    b.style.display = unread>0 ? 'flex' : 'none';
  });
}
function timeAgo(ts){
  const diff = Date.now()-ts;
  const min = Math.floor(diff/60000);
  if(min<1) return 'agora';
  if(min<60) return min+' min atrás';
  const h = Math.floor(min/60);
  if(h<24) return h+'h atrás';
  const d = Math.floor(h/24);
  if(d<7) return d+'d atrás';
  return new Date(ts).toLocaleDateString('pt-BR');
}
function renderNotifications(){
  const list = loadNotifications();
  const wrap = document.getElementById('notificationsList');
  if(!list.length){ wrap.innerHTML = emptyState(ICONS.bell,'Nenhuma notificação','Você será avisado aqui sobre novidades e lembretes do Kerygma.'); return; }
  wrap.innerHTML = list.map(n=>`
    <div class="notif-card ${n.read?'':'notif-unread'}" onclick="markNotifRead('${n.id}')">
      <div class="notif-dot"></div>
      <div class="notif-body">
        <div class="notif-title">${escapeHTML(n.title)}</div>
        <div class="notif-text">${escapeHTML(n.body)}</div>
        <div class="notif-time">${timeAgo(n.createdAt)}</div>
      </div>
    </div>`).join('');
}
function markNotifRead(id){
  const list = loadNotifications();
  const n = list.find(x=>x.id===id);
  if(n) n.read = true;
  saveNotifications(list);
  renderNotifications();
  updateNotifBadge();
}
function markAllNotifsRead(){
  saveNotifications(loadNotifications().map(n=>Object.assign({}, n, {read:true})));
  renderNotifications();
  updateNotifBadge();
}
function clearNotifications(){
  confirmAction('Limpar notificações', 'Isso vai apagar todas as notificações. Deseja continuar?', ()=>{
    saveNotifications([]);
    closeSheet('confirmOverlay');
    renderNotifications();
    updateNotifBadge();
  });
}

/* ================= INSTALL APP (PWA) ================= */
let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (e)=>{
  e.preventDefault();
  deferredInstallPrompt = e;
});
function isIOS(){ return /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream; }
function isStandalone(){ return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone===true; }
function openInstallSheet(){
  const body = document.getElementById('installBody');
  const btn = document.getElementById('installActionBtn');
  if(isStandalone()){
    body.textContent = 'O Kerygma já está instalado neste aparelho. 🎉';
    btn.style.display = 'none';
  } else if(isIOS()){
    body.innerHTML = 'No Safari, toque no botão de compartilhar (o quadrado com uma seta para cima) e depois em "Adicionar à Tela de Início".';
    btn.style.display = 'none';
  } else if(deferredInstallPrompt){
    body.textContent = 'Adicione o Kerygma à tela inicial do seu aparelho para abrir como um app, em tela cheia, sem precisar do navegador.';
    btn.style.display = '';
    btn.textContent = 'Instalar agora';
  } else {
    body.textContent = 'No menu do seu navegador (geralmente os três pontinhos, no canto superior), procure a opção "Instalar app" ou "Adicionar à tela inicial".';
    btn.style.display = 'none';
  }
  openSheet('installOverlay');
}
async function triggerInstall(){
  if(!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  closeSheet('installOverlay');
}
function maybeAutoShowInstallPrompt(){
  if(isStandalone()) return;
  if(localStorage.getItem('kerygma_install_seen')) return;
  localStorage.setItem('kerygma_install_seen','1');
  setTimeout(openInstallSheet, 1800);
}
if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  });
}

/* ================= PEDIDOS DE ORAÇÃO ================= */
let prayerTab = 'pending';
function switchPrayerTab(tab){
  prayerTab = tab;
  document.querySelectorAll('#view-prayers .form-tab').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  renderPrayers();
}
async function addPrayer(){
  const input = document.getElementById('newPrayerText');
  const text = input.value.trim();
  if(!text){ toast('Digite um pedido de oração'); return; }
  const { data, error } = await sb.from('prayer_requests').insert({text, answered:false, user_id:currentUser.id}).select().single();
  if(error){ toast('Erro ao salvar. Veja se a tabela prayer_requests foi criada no Supabase.'); console.error(error); return; }
  db.prayers.unshift({id:data.id, text:data.text, answered:data.answered, createdAt:new Date(data.created_at).getTime(), answeredAt:null});
  input.value = '';
  prayerTab = 'pending';
  document.querySelectorAll('#view-prayers .form-tab').forEach(b=>b.classList.toggle('active', b.dataset.tab==='pending'));
  renderPrayers();
  updatePrayerWidget();
  toast('Pedido adicionado');
}
async function togglePrayerAnswered(id){
  const p = db.prayers.find(x=>x.id===id);
  if(!p) return;
  const newVal = !p.answered;
  const { error } = await sb.from('prayer_requests').update({answered:newVal, answered_at: newVal ? new Date().toISOString() : null}).eq('id', id);
  if(error){ toast('Erro ao atualizar'); console.error(error); return; }
  p.answered = newVal;
  p.answeredAt = newVal ? Date.now() : null;
  renderPrayers();
  updatePrayerWidget();
  if(newVal) addNotification('Oração respondida!', `"${truncateText(p.text,60)}" foi marcado como respondido.`);
}
function deletePrayer(id){
  confirmAction('Excluir pedido', 'Esta ação não pode ser desfeita.', async ()=>{
    const { error } = await sb.from('prayer_requests').delete().eq('id', id);
    if(error){ toast('Erro ao excluir'); console.error(error); return; }
    db.prayers = db.prayers.filter(p=>p.id!==id);
    closeSheet('confirmOverlay');
    renderPrayers();
    updatePrayerWidget();
  });
}
function renderPrayers(){
  const list = document.getElementById('prayersList');
  if(!list) return;
  const filtered = db.prayers.filter(p=> prayerTab==='pending' ? !p.answered : p.answered);
  if(!filtered.length){
    list.innerHTML = prayerTab==='pending'
      ? emptyState(ICONS.heart,'Nenhum pedido pendente','Adicione acima um motivo de oração.')
      : emptyState(ICONS.check,'Nenhuma oração respondida ainda','Quando um pedido for respondido, marque-o e ele aparece aqui.');
    return;
  }
  list.innerHTML = filtered.map(p=>`
    <div class="prayer-item-card ${p.answered?'answered':''}">
      <button class="prayer-check" onclick="togglePrayerAnswered('${p.id}')" title="${p.answered?'Marcar como pendente':'Marcar como respondida'}">${p.answered ? ICONS.check : ''}</button>
      <div class="prayer-item-text">
        <div class="prayer-item-body">${escapeHTML(p.text)}</div>
        <div class="prayer-item-date">${p.answered && p.answeredAt ? 'Respondida em '+new Date(p.answeredAt).toLocaleDateString('pt-BR') : 'Desde '+new Date(p.createdAt).toLocaleDateString('pt-BR')}</div>
      </div>
      <button class="point-icon-btn point-icon-danger" onclick="deletePrayer('${p.id}')" title="Excluir">${ICONS.trash}</button>
    </div>`).join('');
}

/* ================= INIT ================= */
initAuth();
