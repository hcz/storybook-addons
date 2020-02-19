/**
 * Retrieves iframe content
 *
 * @param {HTMLIFrameElement} iframe
 */
export const getIframeContent = (iframe: HTMLIFrameElement) => {
	const isIframe = iframe && iframe.tagName === 'IFRAME';

	if (isIframe && iframe.contentWindow) {
		return iframe.contentWindow.document || iframe.contentDocument;
	}
};
