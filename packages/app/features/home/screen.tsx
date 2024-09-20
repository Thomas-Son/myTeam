import {
  Button,
  H1,
  Paragraph,
  Separator,
  YStack,
} from '@my/ui'
import { TextLink } from 'solito/link';
import Header from "app/features/header/index"

export function HomeScreen() {

  return (
    <main>
      <Header />
      <YStack marginTop="$8" ai="center" gap="$8" p="$4" bg="$background">
        <YStack gap="$4">
          <H1 ta="center" col="$color12">
            Bienvenue dans myTeam.
          </H1>
          <Separator backgroundColor="$blue11" />
          <Paragraph col="$color10" ta="center">
            Une application qui va vous faciliter la gestion de votre équipe.
          </Paragraph>
          <Separator backgroundColor="$blue11" />
        </YStack>

        <YStack gap="$4">
          <Button
            borderRadius="$4"
            backgroundColor="$blue5"
            width="160px"
            animation="bouncy"
            borderColor="$blue8"
            hoverStyle={{ scale: 0.925, borderWidth: "$1", borderColor: "$blue7", backgroundColor: "$blue6" }}
            pressStyle={{ scale: 0.875, borderWidth: "$1.5", borderColor: "$blue8", backgroundColor: "$blue6" }}
          >
            <TextLink href="/connexion">Connexion</TextLink>
          </Button>
          <Button
            borderRadius="$4"
            backgroundColor="$blue5"
            width="160px"
            animation="bouncy"
            borderColor="$blue8"
            hoverStyle={{ scale: 0.925, borderWidth: "$1", borderColor: "$blue7", backgroundColor: "$blue6" }}
            pressStyle={{ scale: 0.875, borderWidth: "$1.5", borderColor: "$blue8", backgroundColor: "$blue6" }}>
            <TextLink href="/inscription">Inscription</TextLink>
          </Button>
          <Button
            borderRadius="$4"
            backgroundColor="$blue5"
            width="160px"
            animation="bouncy"
            borderColor="$blue8"
            hoverStyle={{ scale: 0.925, borderWidth: "$1", borderColor: "$blue7", backgroundColor: "$blue6" }}
            pressStyle={{ scale: 0.875, borderWidth: "$1.5", borderColor: "$blue8", backgroundColor: "$blue6" }}>
            <TextLink href="/team-demo">Equipe démo</TextLink>
          </Button>
        </YStack>
      </YStack>
    </main>
  )
}