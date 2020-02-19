/** @jsx jsx */
import React, {Fragment, useState} from 'react';
import {jsx} from '@emotion/core';
import {Combo, Consumer} from '@storybook/api';
import {TooltipLinkList, WithTooltip} from '@storybook/components';
import {API} from '@storybook/api';

import {StyledButton, StyledIcon, StyledLabel} from './styled';
import {Preview} from '../Preview';
import {IFRAME_ID, ADDON_ID, PARAM_KEY} from '../../constants';
import {addCSS, getIframeContent, removeOldCSS} from '../../utils';
import {AddonState, Config, CSSManipulationData, LinksContent, PackedThemePart, PackOptionItem} from '../../types';

export const mapper = ({api, state}: Combo): Config<string> => {
	const story = state.storiesHash[state.storyId];
	return story ? api.getParameters(story.id, PARAM_KEY) : {};
};

export const ThemePack = ({api}: {api: API}) => {
	const [pristine, setPristine] = useState(true);

	const updateIframe = async (state: AddonState) => {
		const iframe = document.getElementById(IFRAME_ID) as HTMLIFrameElement;
		const iframeContent = getIframeContent(iframe);

		if (iframeContent) {
			Object.entries(await state).map(([name, option]) => {
				const {css} = option || {};
				removeOldCSS({dataAttribute: name, iframeContent});

				if (css) {
					addCSS({dataAttribute: name, iframeContent, style: css});
				}
			});
		}
	};

	return (
		<Consumer filter={mapper}>
			{(params: any) => {
				const themepack = params && params.pack || {};
				const sortFunction = params && params.sortFunction;
				const removeLabel = params && params.removeLabel;
				const styles = params && params.styles || {};
				const categories = typeof sortFunction === 'function'
					? Object.keys(themepack).sort(sortFunction)
					: Object.keys(themepack);
				const icon = params && params.icon || 'mirror';
				const usePreview = params && params.usePreview;

				const state: Record<string, PackOptionItem> = api.getAddonState(ADDON_ID) || {};
				const preparedState = Object.keys(state).reduce((acc, key) => {
					acc[key] = state[key] && state[key].label;
					return acc;
				}, {} as Record<string, string>);

				if (pristine && styles.iframe) {
					const stateMerger = (state: CSSManipulationData) => ({
						...state, iframe: {css: styles.iframe, label: 'iframe'}
					});
					updateIframe(api.setAddonState(ADDON_ID, stateMerger));

					setPristine(false);
				}

				return (
					<Fragment>
						{
							categories.map((category, index) => {
								if (!themepack[category]) {
									return null;
								}

								const selectedCategoryValue = state[category] || {};

								const [label, ...config] = themepack[category];
								const links = config.reduce((linksContent: LinksContent, {options, condition}: PackedThemePart<string>) => {
									if (typeof condition === 'function' && !condition(preparedState)) {
										const needClean = options
											.filter(({label}) => label === selectedCategoryValue.label)
											.length > 0;

										if (needClean) {
											const stateMerger = (state: CSSManipulationData) => ({
												...state, [category]: undefined
											});
											updateIframe(api.setAddonState(ADDON_ID, stateMerger));
										}
										return linksContent;
									}

									(options || []).forEach(({label, css}: PackOptionItem) => {
										const onClick = () => {
											const stateMerger = (state: CSSManipulationData) => ({
												...state, [category]: {label, css}
											});
											updateIframe(api.setAddonState(ADDON_ID, stateMerger));
										};

										linksContent.push({
											id: label,
											title: label,
											active: label === (selectedCategoryValue && selectedCategoryValue.label),
											right: usePreview && (<Preview theme={css} style={styles.preview} />),
											onClick
										});
									});

									return linksContent;
								}, []);

								links.push({
									id: 'None',
									title: removeLabel || '-',
									right: usePreview && (<Preview theme='' style={styles.preview} />),
									onClick: () => {
										const stateMerger = (state: CSSManipulationData) => ({
											...state, [category]: undefined
										});
										updateIframe(api.setAddonState(ADDON_ID, stateMerger));
									}
								});

								return (links.length > 1) ? (
										<WithTooltip
											key={`${category}_with-tooltip`}
											placement='top'
											trigger='click'
											tooltip={<TooltipLinkList links={links} />}
											closeOnClick
										>
											<StyledButton
												key={`${category}_label`}
												title={label}
												active={!!selectedCategoryValue.label}
											>
												{
													index === 0 && <StyledIcon icon={icon} />
												}
												<StyledLabel>
													{label}
												</StyledLabel>
											</StyledButton>
										</WithTooltip>
								) : null;
							})
						}
					</Fragment>
				)
			}}
		</Consumer>
	)
};
