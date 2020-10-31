import styled from '@emotion/styled';
import {IconButton, Icons} from '@storybook/components';

export const StyledButton = styled(IconButton)<any>({
	display: 'inline-flex',
	alignItems: 'center',
	padding: '0 6px'
}) as any;

export const StyledLabel = styled.div<object>(({theme}: any) => ({
	fontSize: theme.typography.size.s2 - 1
}));

export const StyledIcon = styled(Icons)({
	marginRight: '6px'
});
