/// <reference types="react-scripts" />

interface Window {
    ethereum: any
}

(window as any).global = window;
// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;