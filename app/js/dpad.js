(function () {
  'use strict';

  var FOCUS_CLASS = 'dpad-focused';
  var FOCUSABLE_SELECTOR = [
    'ion-button',
    'ion-back-button',
    'ion-menu-button',
    'ion-item[button]',
    'ion-item.ion-activatable',
    '.torrent',
    'ion-segment-button',
    'ion-tab-button',
    'ion-chip',
    'ion-fab-button',
    'ion-checkbox',
    'ion-toggle',
    'ion-radio',
    'ion-select',
    'ion-input',
    'ion-searchbar',
    'ion-icon[tabindex="0"]',
    'button',
    'a[href]',
    'input:not([type="hidden"])',
    'textarea',
    'select',
    '[role="button"]',
    '[tabindex]:not([tabindex="-1"])'
  ].join(',');

  var currentFocused = null;
  var focusStack = [];

  function isElementVisible(el) {
    if (!el || !el.getBoundingClientRect) return false;
    if (el.disabled || el.hasAttribute('disabled')) return false;
    if (el.classList.contains('button-disabled') || el.classList.contains('item-disabled')) return false;
    if (el.closest('.ion-page-hidden, [hidden], .overlay-hidden')) return false;

    var ariaHiddenAncestor = el.closest('[aria-hidden="true"]');
    if (ariaHiddenAncestor && !(ariaHiddenAncestor.tagName === 'ION-MENU-TOGGLE' && ariaHiddenAncestor.closest('ion-menu'))) {
      return false;
    }

    // Skip menu items if menu is collapsed / off-screen
    var menu = el.closest('ion-menu');
    if (menu && !menu.classList.contains('show-menu')) {
      var splitPane = menu.closest('ion-split-pane');
      if (!splitPane || !splitPane.classList.contains('split-pane-visible')) {
        return false;
      }
    }

    var style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) === 0) {
      return false;
    }

    var rect = el.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return false;
    if (rect.right <= 0 || rect.left >= window.innerWidth) return false;

    return true;
  }

  function getActiveScope() {
    var overlays = Array.prototype.slice.call(
      document.querySelectorAll('ion-alert, ion-action-sheet, ion-popover, ion-select-popover, ion-modal')
    ).filter(function (el) {
      if (el.classList.contains('overlay-hidden')) return false;
      var style = window.getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') return false;
      var rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });

    if (overlays.length > 0) {
      overlays.sort(function (a, b) {
        var za = parseInt(window.getComputedStyle(a).zIndex, 10) || 0;
        var zb = parseInt(window.getComputedStyle(b).zIndex, 10) || 0;
        return za - zb;
      });
      return overlays[overlays.length - 1];
    }

    var openMenu = document.querySelector('ion-menu.show-menu');
    if (openMenu) {
      return openMenu;
    }

    return document.body;
  }

  function getFocusableElements(scope) {
    var root = scope || getActiveScope();
    var raw = Array.prototype.slice.call(root.querySelectorAll(FOCUSABLE_SELECTOR));
    return raw.filter(function (el) {
      // Avoid duplicate focus targets for native input inside ion-input / ion-searchbar
      if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && el.closest('ion-input, ion-searchbar')) {
        return false;
      }
      return isElementVisible(el);
    });
  }

  function scrollIntoViewIfNeeded(el) {
    if (!el || !el.getBoundingClientRect) return;
    var rect = el.getBoundingClientRect();
    var ionContent = el.closest('ion-content');
    if (ionContent && ionContent.shadowRoot) {
      var scrollEl = ionContent.shadowRoot.querySelector('.inner-scroll');
      if (scrollEl) {
        var sRect = scrollEl.getBoundingClientRect();
        var pad = 16;
        if (rect.top < sRect.top + pad) {
          scrollEl.scrollTop -= (sRect.top + pad - rect.top);
        } else if (rect.bottom > sRect.bottom - pad) {
          scrollEl.scrollTop += (rect.bottom - (sRect.bottom - pad));
        }
        return;
      }
    }
    if (rect.top < 0 || rect.bottom > window.innerHeight) {
      try {
        el.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      } catch (e) {
        el.scrollIntoView();
      }
    }
  }

  function setFocus(el) {
    if (!el) return;
    if (currentFocused && currentFocused !== el) {
      currentFocused.classList.remove(FOCUS_CLASS);
    }
    currentFocused = el;
    el.classList.add(FOCUS_CLASS);

    if (!el.hasAttribute('tabindex')) {
      el.setAttribute('tabindex', '0');
    }

    scrollIntoViewIfNeeded(el);

    try {
      el.focus({ preventScroll: true });
    } catch (e) {
      try { el.focus(); } catch (err) {}
    }
  }

  function clearFocus() {
    if (currentFocused) {
      currentFocused.classList.remove(FOCUS_CLASS);
      currentFocused = null;
    }
  }

  function findInitialTarget(scope) {
    var candidates = getFocusableElements(scope);
    if (candidates.length === 0) return null;

    // Prefer first torrent in main list if at root scope
    if (!scope || scope === document.body) {
      for (var i = 0; i < candidates.length; i++) {
        if (candidates[i].classList.contains('torrent')) {
          return candidates[i];
        }
      }
    }
    return candidates[0];
  }

  function findNextElement(current, direction) {
    var scope = getActiveScope();
    var candidates = getFocusableElements(scope);
    if (candidates.length === 0) return null;

    if (!current || !document.body.contains(current) || !scope.contains(current) || !isElementVisible(current)) {
      return findInitialTarget(scope);
    }

    var r1 = current.getBoundingClientRect();
    var cx1 = r1.left + r1.width / 2;
    var cy1 = r1.top + r1.height / 2;

    var best = null;
    var bestScore = Infinity;

    for (var i = 0; i < candidates.length; i++) {
      var el = candidates[i];
      if (el === current) continue;

      var r2 = el.getBoundingClientRect();
      var cx2 = r2.left + r2.width / 2;
      var cy2 = r2.top + r2.height / 2;

      var isCandidate = false;
      var primaryDist = 0;
      var orthoDist = 0;

      if (direction === 'down') {
        if (cy2 > cy1 + 2 && r2.top >= r1.top + 2) {
          isCandidate = true;
          primaryDist = r2.top >= r1.bottom - 4 ? (r2.top - r1.bottom) : (cy2 - cy1);
          var overlapX = Math.max(0, Math.min(r1.right, r2.right) - Math.max(r1.left, r2.left));
          if (overlapX > 0) {
            orthoDist = Math.abs(cx2 - cx1) * 0.1;
          } else {
            orthoDist = (r2.left >= r1.right ? r2.left - r1.right : r1.left - r2.right) + Math.abs(cx2 - cx1) * 0.25;
          }
        }
      } else if (direction === 'up') {
        if (cy2 < cy1 - 2 && r2.bottom <= r1.bottom - 2) {
          isCandidate = true;
          primaryDist = r1.top >= r2.bottom - 4 ? (r1.top - r2.bottom) : (cy1 - cy2);
          var overlapX2 = Math.max(0, Math.min(r1.right, r2.right) - Math.max(r1.left, r2.left));
          if (overlapX2 > 0) {
            orthoDist = Math.abs(cx2 - cx1) * 0.1;
          } else {
            orthoDist = (r2.left >= r1.right ? r2.left - r1.right : r1.left - r2.right) + Math.abs(cx2 - cx1) * 0.25;
          }
        }
      } else if (direction === 'right') {
        if (cx2 > cx1 + 2 && r2.left >= r1.left + 2) {
          isCandidate = true;
          primaryDist = r2.left >= r1.right - 4 ? (r2.left - r1.right) : (cx2 - cx1);
          var overlapY = Math.max(0, Math.min(r1.bottom, r2.bottom) - Math.max(r1.top, r2.top));
          if (overlapY > 0) {
            orthoDist = Math.abs(cy2 - cy1) * 0.1;
          } else {
            orthoDist = (r2.top >= r1.bottom ? r2.top - r1.bottom : r1.top - r2.bottom) + Math.abs(cy2 - cy1) * 0.25;
          }
        }
      } else if (direction === 'left') {
        if (cx2 < cx1 - 2 && r2.right <= r1.right - 2) {
          isCandidate = true;
          primaryDist = r1.left >= r2.right - 4 ? (r1.left - r2.right) : (cx1 - cx2);
          var overlapY2 = Math.max(0, Math.min(r1.bottom, r2.bottom) - Math.max(r1.top, r2.top));
          if (overlapY2 > 0) {
            orthoDist = Math.abs(cy2 - cy1) * 0.1;
          } else {
            orthoDist = (r2.top >= r1.bottom ? r2.top - r1.bottom : r1.top - r2.bottom) + Math.abs(cy2 - cy1) * 0.25;
          }
        }
      }

      if (isCandidate) {
        var score = Math.max(0, primaryDist) + orthoDist * 3.0;
        if (score < bestScore) {
          bestScore = score;
          best = el;
        }
      }
    }

    return best;
  }

  function isTextEditingActive() {
    var active = document.activeElement;
    if (!active) return false;
    var tag = active.tagName;
    if (tag === 'TEXTAREA') return true;
    if (tag === 'INPUT') {
      var type = (active.type || 'text').toLowerCase();
      return ['text', 'password', 'search', 'url', 'email', 'tel', 'number'].indexOf(type) !== -1;
    }
    return false;
  }

  function activateElement(el) {
    if (!el) return;
    if (el.tagName === 'ION-INPUT' || el.tagName === 'ION-SEARCHBAR') {
      var innerInput = el.querySelector('input, textarea');
      if (innerInput) {
        innerInput.focus();
        return;
      }
    }
    el.click();
  }

  function handleBackButton(e) {
    // 1. If typing in a text input, blur it first
    if (isTextEditingActive()) {
      document.activeElement.blur();
      if (currentFocused) setFocus(currentFocused);
      e.preventDefault();
      e.stopPropagation();
      return true;
    }

    // 2. Dismiss topmost Ionic overlay
    var scope = getActiveScope();
    if (scope && scope !== document.body) {
      if (scope.tagName === 'ION-MENU' && typeof scope.close === 'function') {
        scope.close();
        e.preventDefault();
        e.stopPropagation();
        return true;
      }
      if (typeof scope.dismiss === 'function') {
        scope.dismiss();
        e.preventDefault();
        e.stopPropagation();
        return true;
      }
    }

    // 3. History back or webOS platformBack
    if (window.history.length > 1 && window.location.hash && window.location.hash !== '#/' && window.location.hash !== '#/list') {
      window.history.back();
      e.preventDefault();
      e.stopPropagation();
      return true;
    }

    if (window.webOS && typeof window.webOS.platformBack === 'function') {
      window.webOS.platformBack();
      e.preventDefault();
      e.stopPropagation();
      return true;
    }

    return false;
  }

  window.addEventListener('keydown', function (e) {
    var keyCode = e.keyCode || e.which;

    // Ignore modified shortcuts (Ctrl/Alt/Meta) so Shortcuts.ts keeps working
    if (e.ctrlKey || e.altKey || e.metaKey) return;

    // webOS Back button (461)
    if (keyCode === 461) {
      handleBackButton(e);
      return;
    }

    var dir = null;
    if (keyCode === 37) dir = 'left';
    else if (keyCode === 38) dir = 'up';
    else if (keyCode === 39) dir = 'right';
    else if (keyCode === 40) dir = 'down';

    if (dir) {
      // Allow cursor movement inside active text input on Left/Right if not at edge
      if (isTextEditingActive()) {
        var active = document.activeElement;
        if (dir === 'left' && active.selectionStart > 0) return;
        if (dir === 'right' && active.selectionEnd < (active.value || '').length) return;
        if (active.tagName === 'TEXTAREA' && (dir === 'up' || dir === 'down')) return;
        // Exiting text input via D-pad
        active.blur();
      }

      e.preventDefault();
      e.stopPropagation();

      var next = findNextElement(currentFocused, dir);
      if (next) {
        setFocus(next);
      } else if (!currentFocused || !document.body.contains(currentFocused)) {
        var initial = findInitialTarget(getActiveScope());
        if (initial) setFocus(initial);
      }
      return;
    }

    // OK / Enter (13)
    if (keyCode === 13) {
      if (isTextEditingActive()) {
        return;
      }
      if (currentFocused && document.body.contains(currentFocused) && isElementVisible(currentFocused)) {
        e.preventDefault();
        e.stopPropagation();
        activateElement(currentFocused);
      } else {
        var target = findInitialTarget(getActiveScope());
        if (target) {
          e.preventDefault();
          e.stopPropagation();
          setFocus(target);
        }
      }
    }
  }, true);

  // Sync focus when user clicks with Magic Remote pointer
  document.addEventListener('mousedown', function (e) {
    var target = e.target && e.target.closest ? e.target.closest(FOCUSABLE_SELECTOR) : null;
    if (target && isElementVisible(target)) {
      currentFocused = target;
      document.querySelectorAll('.' + FOCUS_CLASS).forEach(function (el) {
        if (el !== target) el.classList.remove(FOCUS_CLASS);
      });
    } else {
      clearFocus();
    }
  }, true);

  // Overlay & Menu lifecycle focus management
  var overlayOpenEvents = ['ionModalDidPresent', 'ionAlertDidPresent', 'ionPopoverDidPresent', 'ionActionSheetDidPresent', 'ionMenuDidOpen'];
  var overlayCloseEvents = ['ionModalDidDismiss', 'ionAlertDidDismiss', 'ionPopoverDidDismiss', 'ionActionSheetDidDismiss', 'ionMenuDidClose'];

  overlayOpenEvents.forEach(function (evtName) {
    window.addEventListener(evtName, function () {
      focusStack.push(currentFocused);
      setTimeout(function () {
        var target = findInitialTarget(getActiveScope());
        if (target) setFocus(target);
      }, 60);
    }, true);
  });

  overlayCloseEvents.forEach(function (evtName) {
    window.addEventListener(evtName, function () {
      var prev = focusStack.pop();
      setTimeout(function () {
        if (prev && document.body.contains(prev) && isElementVisible(prev)) {
          setFocus(prev);
        } else {
          var target = findInitialTarget(getActiveScope());
          if (target) setFocus(target);
        }
      }, 60);
    }, true);
  });

  // Auto-focus when page loads or route changes
  window.addEventListener('hashchange', function () {
    setTimeout(function () {
      var target = findInitialTarget(getActiveScope());
      if (target) setFocus(target);
    }, 150);
  });

  window.addEventListener('load', function () {
    setTimeout(function () {
      if (!currentFocused) {
        var target = findInitialTarget(getActiveScope());
        if (target) setFocus(target);
      }
    }, 500);
  });
})();
