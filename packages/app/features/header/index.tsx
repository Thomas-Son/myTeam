import { H1, XStack, Button } from "@my/ui"
import { TextLink } from "solito/link"

function Header() {
    return (
        <XStack justifyContent="space-between" padding="$5" backgroundColor="$blue9" alignItems="center">
            <TextLink href="/">
                <H1 color="white">myTeam</H1>
            </TextLink>

            <XStack gap="$2">
                <Button width="100px"><TextLink href="/connexion">Connexion</TextLink></Button>
                <Button width="100px"><TextLink href="/inscription">Inscription</TextLink></Button>
            </XStack>
        </XStack>
    )
}

export default Header