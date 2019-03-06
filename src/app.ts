import { Storage } from 'session-storage-sync';

const storage = new Storage();
const btn = document.getElementById('btn') as HTMLButtonElement;
const input = document.getElementById('input') as HTMLInputElement;
const placeholder = document.getElementById('value-placeholder');

function renderStorageValue() {
  const value = storage.session.get('value');
  console.log(Date.now(), 'rendering', value);
  placeholder.innerHTML = value;
}

btn.addEventListener('click', () => {
  const value = input.value;
  storage.session.set('value', value);
  renderStorageValue();
});

window.addEventListener('load', () => {
  // it takes some time before it's ready
  setTimeout(() => renderStorageValue(), 100);
});
