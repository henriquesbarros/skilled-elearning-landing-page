import { Button } from "../Button";
import { ContainerAbout, TextAbout, TextBox } from "./styles";

export function About() {
	return (
		<ContainerAbout>
			<TextAbout>
				<TextBox>
					<h1>Maximize skill, minimize budget</h1>
				</TextBox>
				<p>
					Our modern courses across a range of in-demand skills will give you 
					the knowledge you need to live the life you want.
				</p>
				<Button color='primary-gradient' size="large" />
			</TextAbout>
		</ContainerAbout>
	)
}