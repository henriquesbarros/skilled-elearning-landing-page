import { About } from "./components/About";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { globalStyles } from "./styles/global"

export function App() {
	globalStyles();
  return (
    <Container>
			<Header />
			<About />
		</Container>
  )
}