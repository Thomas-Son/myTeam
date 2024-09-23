import { H1, XStack, Button, Nav } from "@my/ui"
import { TextLink } from "solito/link"
import { AlignJustify } from '@tamagui/lucide-icons'
import { useState } from "react"

function Header() {

    const [active, setActive] = useState(false)

    return (
        <header>
            <XStack justifyContent="space-between" padding="$5" backgroundColor="$blue9" alignItems="center" >
                <TextLink href="/">
                    <H1 color="white">myTeam</H1>
                </TextLink>

                <XStack gap="$2" $xs={{display: "none"}}>
                    <Button 
                        width="100px" 
                        backgroundColor="white"
                    >
                        <TextLink href="/utilisateur/connexion">Connexion</TextLink>
                    </Button>
                    <Button 
                        width="100px" 
                        backgroundColor="white"
                    >
                        <TextLink href="/utilisateur/inscription">Inscription</TextLink>
                    </Button>
                </XStack>

                <XStack gap="$2" $gtXs={{ display: "none" }}>
                    <Button 
                        icon={AlignJustify}
                        color="white"
                        backgroundColor=""
                        scaleIcon={2}
                        onPress={() => {!active ? (setActive(true)) : (setActive(false))}}
                        hoverStyle={{ scale: 0.925, backgroundColor: "", borderColor: "" }}
                        pressStyle={{ scale: 0.875, backgroundColor: "", borderColor: "" }}
                    >
                    </Button>
                </XStack>

            </XStack>

            {!active ? (null) : (
                <Nav ai="center" $gtXs={{ display: "none" }}>
                    <Button 
                        backgroundColor="$blue1" 
                        width="100vw" 
                        height="60px" 
                        borderRadius="none"
                        borderBottomColor="$blue9"
                        hoverStyle={{ backgroundColor: "white", borderColor: "" }}
                        pressStyle={{ backgroundColor: "$blue2", borderColor: "" }}
                    >
                        <TextLink href="/utilisateur/connexion">Connexion</TextLink>
                    </Button>
                    <Button 
                        backgroundColor="$blue1" 
                        width="100vw" 
                        height="60px" 
                        borderRadius="none"
                        borderBottomColor="$blue9"
                        hoverStyle={{ backgroundColor: "white", borderColor: "" }}
                        pressStyle={{ backgroundColor: "$blue2", borderColor: "" }}
                    >
                        <TextLink href="/utilisateur/inscription">Inscription</TextLink>
                    </Button>
                    <Button 
                        backgroundColor="$blue1"
                        width="100vw"
                        height="60px"
                        borderRadius="none"
                        borderBottomColor="$blue9"
                        hoverStyle={{ backgroundColor: "white", borderColor: "" }}
                        pressStyle={{ backgroundColor: "$blue2", borderColor: "" }}
                    >
                        <TextLink href="/team-demo">Equipe démo</TextLink>
                    </Button>
                </Nav>
            )}
            
        </header>
    )
}

export default Header;