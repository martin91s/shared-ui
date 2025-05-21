import modalCss from './assets/modal.css?inline';

export function confirmModal({ title, description }) {
    injectModalStyles();

    return new Promise((resolve) => {
        const modal = document.createElement('dialog');
        modal.classList.add('confirm-modal');

        modal.innerHTML = `
      <h3>${ title }</h3>
      <p>${ description }</p>
      <div class="actions">
          <button id="confirm">Confirm</button>
          <button id="dismiss">Dismiss</button>
      </div>
    `;

        document.body.appendChild(modal);
        modal.showModal();

        modal.querySelector('#confirm')?.addEventListener('click', () => {
            resolve(true);
            modal.close();
            modal.remove();
        });

        modal.querySelector('#dismiss')?.addEventListener('click', () => {
            resolve(false);
            modal.close();
            modal.remove();
        });
    });
}

function injectModalStyles() {
    if (document.getElementById('modal-css')) return;

    const style = document.createElement('style');
    style.id = 'modal-css';
    style.textContent = modalCss;
    document.head.appendChild(style);
}
