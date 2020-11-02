/** @jsx jsx */
import React from 'react';
import {jsx} from '@emotion/core';
import {TooltipLinkList, WithTooltip} from '@storybook/components';
import {useAddonState, useParameter} from '@storybook/api';

import {StyledButton, StyledLabel} from './styled';
import {Preview} from '../Preview';
import {ADDON_ID, PARAM_KEY} from '../../constants';
import {updateIframe} from '../../utils';

const ClearItem = ({labelForClear, usePreview, styles}: any = {}, onClick: any) => ({
	id: 'None',
	title: labelForClear,
	right: usePreview && (<Preview theme='' style={styles.preview}/>),
	onClick
});

export const Theme: React.FC = () => {
	const {
		default: preloadedState,
		pack,
		styles,
		labelForClear,
		usePreview,
		sortFunction
	} = useParameter<any>(PARAM_KEY, {});

	React.useLayoutEffect(() => {
		if (styles && styles.iframe) {
			updateIframe('iframe', styles.iframe);
		}
	}, [styles]);

	const [state, setState] = useAddonState<Record<string, any>>(ADDON_ID, {});

	React.useEffect(() => {
		setState({pristine: true});
	}, []);

	const categories = typeof sortFunction === 'function'
		? pack && Object.keys(pack).sort(sortFunction)
		: pack && Object.keys(pack);

	return (
		<div>
			{
				categories && categories.map((category: string) => {
					if (!pack[category]) {
						return null;
					}

					const [name, ...config] = pack[category];

					let preloadedCSS = undefined;
					const preloadedItemLabel = preloadedState[category];

					const tooltipContent = config
						.reduce((accumulator: any, {options, condition}: any = {}) => {
							options.map(({css, label}: any) => {
								if (typeof condition === 'function' && !condition(state)) {
									return accumulator;
								}

								if (css && label) {
									accumulator.push({
										id: label,
										title: label,
										active: state[category] === label,
										right: usePreview && (<Preview theme={css} style={styles.preview}/>),
										onClick: () => {
											setState((state) => ({
												...state,
												[category]: label
											}));
											updateIframe(category, css);
										}
									});

									if (label === preloadedItemLabel) {
										preloadedCSS = css;
									}
								}
							});
							return accumulator;
						}, [])
						.concat(
							ClearItem(({labelForClear, usePreview, styles}), () => {
								setState((state) => ({
									...state,
									[category]: undefined
								}));
								updateIframe(category, '');
							})
						);

					// Select preloaded state item
					if (state.pristine && preloadedItemLabel && preloadedCSS) {
						setState((state) => ({
							...state,
							pristine: false,
							[category]: preloadedItemLabel
						}));
						updateIframe(category, preloadedCSS);
					}

					const isInTooltip = tooltipContent.some(({title}: any) => title === state[category]);

					// Remove items that was previously selected but disappeared
					if (!isInTooltip && state[category]) {
						setState((state) => ({
							...state,
							[category]: undefined
						}));
						updateIframe(category, '');
					}

					return tooltipContent.length > 1 ? (
						<WithTooltip
							key={category}
							placement='top'
							trigger='click'
							tooltip={<TooltipLinkList links={tooltipContent}/>}
							closeOnClick
						>
							<StyledButton
								active={state[category]}
							>
								<StyledLabel>
									{state[category] || name}
								</StyledLabel>
							</StyledButton>
						</WithTooltip>
					) : null
				})
			}
		</div>
	)
}
