'use strict';

const INSTALL_LABELS = {
  unix: 'UNIX INSTALLER',
  windows: 'WINDOWS INSTALLER',
  source: 'BUILD FROM SOURCE'
};

let toastTimer;
function toast(message) {
  const element = document.getElementById('toast');
  element.textContent = message;
  element.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove('visible'), 3500);
}

function activePanel() {
  return document.querySelector('.install-panel:not([hidden])');
}

function copyTextFrom(pre) {
  return pre.textContent.replace(/\n{3,}/g, '\n\n').trim();
}

document.getElementById('copy-command').addEventListener('click', async () => {
  const panel = activePanel();
  const pre = panel.querySelector('pre');
  const command = copyTextFrom(pre);
  const button = document.getElementById('copy-command');
  try {
    await navigator.clipboard.writeText(command);
    button.querySelector('span').textContent = 'Copied';
    toast('Install command copied.');
    setTimeout(() => { button.querySelector('span').textContent = 'Copy'; }, 2500);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(pre);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    toast('Command selected. Press Ctrl+C (or ⌘C) to copy.');
  }
});

document.querySelectorAll('.install-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const name = tab.dataset.panel;
    document.querySelectorAll('.install-tab').forEach((other) => {
      const selected = other === tab;
      other.classList.toggle('active', selected);
      other.setAttribute('aria-selected', selected ? 'true' : 'false');
    });
    document.querySelectorAll('.install-panel').forEach((panel) => {
      panel.hidden = panel.id !== `panel-${name}`;
    });
    document.getElementById('install-label').textContent = INSTALL_LABELS[name];
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
