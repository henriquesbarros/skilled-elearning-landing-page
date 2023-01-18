import { ButtonContainer } from "./styles";

interface ButtonProps {
	color?: 'primary' | 'primary-gradient' | 'secondary-gradient';
	size?: 'medium' | 'large';
}

export function Button({...rest}: ButtonProps) {
	return (
		<ButtonContainer {...rest}>
			Get Started
		</ButtonContainer>
	)
}