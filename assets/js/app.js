/* Perturbateurs endocriniens — ouverture du dossier, navigation entre les pages, accusations. */
(function () {
  'use strict';

  var D = window.DOSSIER;
  var F = window.FIGURES || {};
  var PAGES = D.pages;

  var stage = document.getElementById('stage');
  var folderBtn = document.getElementById('folderBtn');
  var reader = document.getElementById('reader');
  var sheet = document.getElementById('contenu');
  var flipper = document.getElementById('flipper');
  var tabsEl = document.getElementById('tabs');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  var pagerInfo = document.getElementById('pagerInfo');
  var closeBtn = document.getElementById('closeBtn');

  var current = 0;
  var busy = false;
  var opened = false;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── mémoire des accusations (pratique si la page est rechargée) ── */
  var choices = {};
  try {
    var saved = localStorage.getItem('dossier-2026-pe');
    if (saved) { choices = JSON.parse(saved) || {}; }
  } catch (e) { /* stockage indisponible : on continue sans */ }
  function remember() {
    try { localStorage.setItem('dossier-2026-pe', JSON.stringify(choices)); } catch (e) {}
  }

  /* ───────────────────────── Rendu des pages ───────────────────────── */

  function fig(key, legende) {
    if (!F[key]) { return ''; }
    // on ne laisse jamais un schéma s'agrandir au-delà de sa taille de dessin
    var m = /viewBox="0 0 ([\d.]+)/.exec(F[key]);
    var cap = m ? ' style="max-width:' + Math.round(parseFloat(m[1]) * 1.25) + 'px"' : '';
    return '<figure class="fig"' + cap + '>' + F[key] +
      (legende ? '<figcaption>' + legende + '</figcaption>' : '') + '</figure>';
  }

  function renderRecap() {
    var m = D.meta;
    var cases = PAGES.filter(function (p) { return p.kind === 'case'; });

    var liens = cases.map(function (c) {
      return '<li><button type="button" class="case-link" data-goto="' + c.id + '">' +
        '<span class="cl-n">' + c.num + '</span>' +
        '<span class="cl-t">' + c.titre + '<small>' + c.cohorte + '</small></span>' +
        '<span class="cl-go">ouvrir</span></button></li>';
    }).join('');

    var auteurs = m.auteurs.map(function (a) {
      return '<span class="todo">' + a + '</span>';
    }).join('<br>');

    return '' +
      '<header class="page-head">' +
        '<span class="page-kicker">Feuille récapitulative</span>' +
        '<h1>' + m.titre + '<br>' + m.sousTitre + '</h1>' +
        '<p class="page-sub">' + m.numero + ' — quatre enquêtes indépendantes, seize suspects, dix études</p>' +
      '</header>' +

      '<p class="recap-q">' + m.question + '</p>' +

      '<div class="recap-grid">' +
        '<div>' +
          '<h2>Les quatre enquêtes</h2>' +
          '<ul class="case-links">' + liens + '</ul>' +

          '<h2>Comment lire ce dossier</h2>' +
          '<div class="howto">' +
            '<div class="howto-item"><b>1</b><p>Chaque enquête s’ouvre sur une problématique et les pièces du dossier : cinq paragraphes qui posent la situation, des schémas, puis les indices.</p></div>' +
            '<div class="howto-item"><b>2</b><p>À droite, les suspects. Dans chaque enquête, l’un d’eux est un perturbateur endocrinien, et il y a toujours une vraie raison de le soupçonner.</p></div>' +
            '<div class="howto-item"><b>3</b><p>Chaque indice met un ou plusieurs suspects hors de cause. Quand vous êtes décidé, cliquez sur <em>Accuser</em> : le dossier répond, puis donne la solution complète.</p></div>' +
            '<div class="howto-item"><b>4</b><p>Le piège : le perturbateur endocrinien n’est coupable que dans deux enquêtes sur quatre. Accuser par réflexe fait perdre l’enquête.</p></div>' +
          '</div>' +

          '<h2>Le mobile commun</h2>' +
          '<p>Le cerveau du fœtus se construit sous le commandement des hormones thyroïdiennes de la mère. Même de faibles variations peuvent avoir un impact, et le dépistage néonatal classique ne les détecte pas. Un perturbateur endocrinien est une substance qui interfère avec ce système : elle peut imiter une hormone, bloquer son récepteur, ou gêner sa fabrication. Comme ces substances traversent le placenta, elles atteignent le cerveau pendant qu’il se construit.</p>' +
          fig('mecanisme', 'La chaîne causale, de la source d’exposition jusqu’à l’enfant.') +
          fig('fenetre', 'Chaque cohorte ne mesure l’exposition qu’à une fenêtre précise, puis évalue l’enfant des années plus tard.') +
        '</div>' +

        '<aside>' +
          '<h2>Ce dossier</h2>' +
          '<div class="ident">' +
            '<dl>' +
              '<dt>Réalisé par</dt><dd>' + auteurs + '</dd>' +
              '<dt>Classe</dt><dd><span class="todo">' + m.classe + '</span></dd>' +
              '<dt>Établissement</dt><dd><span class="todo">' + m.etablissement + '</span></dd>' +
              '<dt>Matière</dt><dd>' + m.matiere + '</dd>' +
              '<dt>Remise</dt><dd>' + m.remise + '</dd>' +
            '</dl>' +
          '</div>' +

          '<h2>Le résultat</h2>' +
          '<p>Sur les quatre enquêtes, le perturbateur endocrinien est coupable <strong>deux fois</strong>. Dans les deux autres, la vraie cause est ailleurs — et elle est parfois bien plus simple à corriger. C’est, en résumé, l’état de la science sur la question.</p>' +

          '<div class="warn">' +
            '<h3>Avertissement</h3>' +
            '<p>Les quatre sujets sont <strong>fictifs</strong>. Les suspects, les mécanismes et tous les chiffres des indices proviennent d’études scientifiques réelles, citées dans le bilan. Aucune de ces études ne permet de désigner la cause des difficultés d’une personne réelle : elles mesurent des tendances sur des centaines ou des milliers d’enfants.</p>' +
          '</div>' +
        '</aside>' +
      '</div>';
  }

  function renderCase(c) {
    var ctx = c.contexte.map(function (p) { return '<p>' + p + '</p>'; }).join('');

    var indices = c.indices.map(function (i) {
      return '<li><span>' + i.txt + '<span class="ind-src">' + i.src + '</span></span></li>';
    }).join('');

    var suspects = c.suspects.map(function (s) {
      return '<article class="suspect' + (s.pe ? ' is-pe' : '') + '" data-ref="' + s.ref + '">' +
        '<div class="suspect-head"><span class="suspect-ref">' + s.ref + '</span><h3>' + s.nom + '</h3></div>' +
        '<span class="s-type">' + s.type + (s.pe ? ' — suspect imposé du dossier' : '') + '</span>' +
        '<dl>' +
          '<dt>Identité</dt><dd>' + s.identite + '</dd>' +
          '<dt>Pourquoi on le soupçonne</dt><dd>' + s.soupcon + '</dd>' +
          '<dt>Ce que disent les études</dt><dd>' + s.etudes + '</dd>' +
        '</dl>' +
        '<button type="button" class="btn-accuse" data-accuse="' + s.ref + '">Accuser</button>' +
        '</article>';
    }).join('');

    var figs = (c.figures || []).map(function (f, i) {
      return { html: fig(f.key, f.legende), i: i };
    });

    return '' +
      '<header class="page-head">' +
        '<span class="page-kicker">Enquête ' + c.num + ' — sans lien avec les autres affaires</span>' +
        '<h1>' + c.titre + '</h1>' +
        '<p class="page-sub">Cohorte de référence : ' + c.cohorte + '</p>' +
      '</header>' +

      '<div class="case-grid">' +
        '<div class="case-col">' +
          '<div class="ident-row">' +
            '<div><b>Sujet</b>' + c.sujet.nom + '</div>' +
            '<div><b>Âge</b>' + c.sujet.age + '</div>' +
            '<div><b>Situation</b>' + c.sujet.situation + '</div>' +
          '</div>' +
          '<p class="case-question">' + c.question + '</p>' +
          '<h2>La problématique</h2>' +
          '<div class="contexte">' + ctx + '</div>' +
          (figs[0] ? figs[0].html : '') +
          '<h2>Les indices</h2>' +
          '<ol class="indices">' + indices + '</ol>' +
          (figs[1] ? figs[1].html : '') +
        '</div>' +

        '<div class="case-col">' +
          '<h2>Les suspects</h2>' +
          '<div class="suspects">' + suspects + '</div>' +
          '<div id="verdictZone"></div>' +
        '</div>' +
      '</div>';
  }

  function renderBilan() {
    var b = D.bilan;

    var rows = b.table.map(function (r) {
      return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td>' +
        '<td><span class="' + (r[4] ? 'tag-guilty' : 'tag-clear') + '">' + r[2] + '</span></td>' +
        '<td>' + r[3] + '</td></tr>';
    }).join('');

    var chiffres = b.chiffres.map(function (r) {
      return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td></tr>';
    }).join('');

    return '' +
      '<header class="page-head">' +
        '<span class="page-kicker">Bilan du dossier</span>' +
        '<h1>' + b.titre + '</h1>' +
        '<p class="page-sub">' + b.chapo + '</p>' +
      '</header>' +

      '<table class="verdict-table">' +
        '<thead><tr><th>Enquête</th><th>Suspect perturbateur endocrinien</th><th>Verdict le concernant</th><th>Vrai coupable</th></tr></thead>' +
        '<tbody>' + rows + '</tbody>' +
      '</table>' +

      '<h2>La réponse à la question du dossier</h2>' +
      b.reponse.map(function (p) { return '<p>' + p + '</p>'; }).join('') +

      fig('flynn', 'Le recul du QI moyen observé en Norvège, et ce que l’étude permet — ou non — d’en conclure.') +

      '<div class="two-col">' +
        '<div><h2>Établi</h2><ul>' + b.etabli.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>' +
        '<div><h2>Non établi</h2><ul>' + b.nonEtabli.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>' +
      '</div>' +

      '<h2>Les chiffres réels utilisés dans les indices</h2>' +
      '<table class="chiffres"><tbody>' + chiffres + '</tbody></table>' +

      '<h2>Études citées</h2>' +
      '<ol class="sources">' + b.sources.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ol>' +

      '<p class="signature">' + D.meta.numero + ' — ' + D.meta.titre + ', ' + D.meta.sousTitre + '.<br>' +
      'Les sujets sont fictifs ; les suspects, les mécanismes et les chiffres ne le sont pas.</p>';
  }

  /* ───────────────────────── Accusations ───────────────────────── */

  function elimination(c, ref) {
    var list = c.verdict.eliminations || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].indexOf('suspect ' + ref) !== -1) { return list[i]; }
    }
    return null;
  }

  function suspectByRef(c, ref) {
    for (var i = 0; i < c.suspects.length; i++) {
      if (c.suspects[i].ref === ref) { return c.suspects[i]; }
    }
    return null;
  }

  function solutionHTML(c) {
    var v = c.verdict;
    return '<div class="verdict good">' +
      '<span class="verdict-tag">Solution de l’enquête ' + c.num + '</span>' +
      '<h3>Coupable : ' + v.titre + '</h3>' +
      '<p><strong>Indice décisif.</strong> ' + v.decisif + '</p>' +
      '<p><strong>Les éliminations.</strong></p>' +
      '<ul>' + v.eliminations.map(function (e) { return '<li>' + e + '</li>'; }).join('') + '</ul>' +
      '<p><strong>Ce que cette enquête enseigne.</strong> ' + v.lecon + '</p>' +
      '<div class="v-limit"><strong>La limite.</strong> ' + v.limite + '</div>' +
      '<p class="v-src">' + v.source + '</p>' +
      '</div>';
  }

  function showVerdict(c, ref) {
    var zone = document.getElementById('verdictZone');
    if (!zone) { return; }
    var good = ref === c.verdict.coupable;
    var cards = sheet.querySelectorAll('.suspect');

    for (var i = 0; i < cards.length; i++) {
      var r = cards[i].getAttribute('data-ref');
      cards[i].classList.toggle('is-chosen', r === ref);
      cards[i].classList.toggle('is-out', !good && r === ref);
    }

    if (good) {
      zone.innerHTML = '<div class="verdict good">' +
          '<span class="verdict-tag">Accusation retenue</span>' +
          '<h3>' + c.verdict.titre + '</h3>' +
          '<p>C’est la bonne réponse. Voici le détail du raisonnement.</p>' +
        '</div>' + solutionHTML(c);
    } else {
      var s = suspectByRef(c, ref);
      var why = elimination(c, ref);
      zone.innerHTML = '<div class="verdict">' +
          '<span class="verdict-tag">Accusation rejetée</span>' +
          '<h3>' + (s ? s.nom : '') + ' est hors de cause</h3>' +
          (why ? '<p>' + why + '</p>' : '<p>Un indice de cette enquête met ce suspect hors de cause. Relisez-les dans l’ordre.</p>') +
          '<p>Reprenez les indices, puis accusez de nouveau.</p>' +
          '<button type="button" class="btn-accuse" id="revealBtn" style="width:auto">Voir la solution</button>' +
        '</div>';
      var rb = document.getElementById('revealBtn');
      if (rb) {
        rb.addEventListener('click', function () {
          zone.insertAdjacentHTML('beforeend', solutionHTML(c));
          rb.remove();
        });
      }
    }
  }

  function bindCase(c) {
    var btns = sheet.querySelectorAll('[data-accuse]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        var ref = this.getAttribute('data-accuse');
        choices[c.id] = ref;
        remember();
        showVerdict(c, ref);
        var z = document.getElementById('verdictZone');
        if (z) { z.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest' }); }
      });
    }
    if (choices[c.id]) { showVerdict(c, choices[c.id]); }
  }

  /* ───────────────────────── Navigation ───────────────────────── */

  function paint(index) {
    var p = PAGES[index];
    if (p.kind === 'recap') { sheet.innerHTML = renderRecap(); }
    else if (p.kind === 'bilan') { sheet.innerHTML = renderBilan(); }
    else { sheet.innerHTML = renderCase(p); bindCase(p); }

    var links = sheet.querySelectorAll('[data-goto]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        var id = this.getAttribute('data-goto');
        for (var j = 0; j < PAGES.length; j++) {
          if (PAGES[j].id === id) { go(j); return; }
        }
      });
    }

    var tabs = tabsEl.querySelectorAll('.tab');
    for (var k = 0; k < tabs.length; k++) {
      tabs[k].setAttribute('aria-current', k === index ? 'true' : 'false');
    }

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === PAGES.length - 1;
    pagerInfo.textContent = PAGES[index].tabLong + ' — feuillet ' + (index + 1) + ' sur ' + PAGES.length;

    if (history.replaceState) {
      history.replaceState(null, '', '#' + PAGES[index].id);
    } else {
      location.hash = PAGES[index].id;
    }
    document.title = PAGES[index].tabLong + ' — perturbateurs endocriniens';
  }

  function go(index, silent) {
    if (busy || index < 0 || index >= PAGES.length) { return; }
    if (index === current && !silent) { return; }
    var dir = index > current ? 'next' : 'prev';
    current = index;

    if (reduced || silent) {
      paint(index);
      sheet.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    busy = true;
    flipper.className = 'flipper flip-' + dir;
    window.setTimeout(function () {
      paint(index);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 300);
    window.setTimeout(function () {
      flipper.className = 'flipper';
      busy = false;
    }, 640);
  }

  function buildTabs() {
    tabsEl.innerHTML = PAGES.map(function (p, i) {
      var n = p.kind === 'case' ? p.num : (p.kind === 'recap' ? '00' : '05');
      var label = p.kind === 'case' ? p.tab.replace(/^\d+\s/, '') : p.tab;
      return '<button type="button" class="tab" data-index="' + i + '" aria-current="' + (i === 0) + '">' +
        '<span class="tab-n">' + n + '</span>' + label + '</button>';
    }).join('');
    var tabs = tabsEl.querySelectorAll('.tab');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', function () {
        go(parseInt(this.getAttribute('data-index'), 10));
      });
    }
  }

  /* ───────────────────── Ouverture et fermeture ───────────────────── */

  function openDossier(targetIndex) {
    if (opened) { return; }
    opened = true;
    folderBtn.setAttribute('aria-expanded', 'true');
    stage.classList.add('is-opening');

    var delay = reduced ? 0 : 620;
    window.setTimeout(function () {
      stage.classList.add('is-gone');
      reader.hidden = false;
      go(typeof targetIndex === 'number' ? targetIndex : 0, true);
      window.requestAnimationFrame(function () {
        reader.classList.add('is-visible');
      });
      window.setTimeout(function () {
        stage.hidden = true;
        sheet.focus({ preventScroll: true });
      }, reduced ? 0 : 450);
    }, delay);
  }

  function closeDossier() {
    opened = false;
    reader.classList.remove('is-visible');
    stage.hidden = false;
    folderBtn.setAttribute('aria-expanded', 'false');
    window.setTimeout(function () {
      reader.hidden = true;
      stage.classList.remove('is-gone', 'is-opening');
      folderBtn.focus({ preventScroll: true });
      if (history.replaceState) { history.replaceState(null, '', location.pathname); }
    }, reduced ? 0 : 420);
  }

  /* ───────────────────────── Démarrage ───────────────────────── */

  buildTabs();
  folderBtn.addEventListener('click', function () { openDossier(); });
  closeBtn.addEventListener('click', closeDossier);
  prevBtn.addEventListener('click', function () { go(current - 1); });
  nextBtn.addEventListener('click', function () { go(current + 1); });

  document.addEventListener('keydown', function (e) {
    if (!opened) {
      if (e.key === 'Enter' && document.activeElement === folderBtn) { return; }
      return;
    }
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') { return; }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(current + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(current - 1); }
    else if (e.key === 'Escape') { closeDossier(); }
  });

  function indexOfHash() {
    var h = (location.hash || '').replace('#', '');
    for (var i = 0; i < PAGES.length; i++) { if (PAGES[i].id === h) { return i; } }
    return -1;
  }

  // ancre modifiée de l'extérieur : bouton Précédent du navigateur, lien collé, favori
  window.addEventListener('hashchange', function () {
    var i = indexOfHash();
    if (i === -1 || i === current) { return; }
    if (!opened) { openDossier(i); } else { go(i); }
  });

  // lien direct vers une page : le dossier s'ouvre déjà à la bonne page
  var hash = (location.hash || '').replace('#', '');
  if (hash) {
    for (var i = 0; i < PAGES.length; i++) {
      if (PAGES[i].id === hash) {
        reduced = true;              // pas d'animation d'ouverture sur un lien direct
        openDossier(i);
        reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        break;
      }
    }
  }
})();
