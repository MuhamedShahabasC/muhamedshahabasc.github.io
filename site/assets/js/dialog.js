import { LitElement, css, html } from "../vendor/lit-3.3.3.min.js";

class SiteDialog extends LitElement {
  static styles = css`
    :host {
      color: var(--text-color);
      font-family: var(--body-font);
    }

    dialog {
      width: min(500px, calc(100% - 2rem));
      max-height: min(80vh, 680px);
      padding: 0;
      overflow: auto;
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      background: var(--container-color);
      color: var(--text-color);
      box-shadow: var(--shadow-lg);
    }

    dialog::backdrop {
      background: hsla(230, 20%, 10%, 0.55);
      backdrop-filter: blur(3px);
    }

    .content {
      position: relative;
      padding: 2.5rem;
    }

    button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      display: grid;
      width: 2.25rem;
      height: 2.25rem;
      place-items: center;
      border: 0;
      border-radius: 50%;
      background: transparent;
      color: var(--title-color);
      cursor: pointer;
      font-size: 1.5rem;
    }

    button:hover,
    button:focus-visible {
      background: var(--body-color);
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    @media (max-width: 576px) {
      .content {
        padding: 2.5rem 1.25rem 1.5rem;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.#handleLightDomClick);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this.#handleLightDomClick);
    super.disconnectedCallback();
  }

  open() {
    this.renderRoot.querySelector("dialog")?.showModal();
  }

  close() {
    this.renderRoot.querySelector("dialog")?.close();
  }

  #handleLightDomClick = (event) => {
    if (event.target.closest("[data-dialog-close]")) this.close();
  };

  #handleBackdrop = (event) => {
    if (event.target === event.currentTarget) this.close();
  };

  render() {
    return html`
      <dialog @click=${this.#handleBackdrop}>
        <div class="content">
          <button type="button" @click=${this.close} aria-label="Close dialog">
            ×
          </button>
          <slot></slot>
        </div>
      </dialog>
    `;
  }
}

customElements.define("site-dialog", SiteDialog);

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-dialog]");
  if (!trigger) return;

  document.getElementById(trigger.dataset.dialog)?.open();
});
