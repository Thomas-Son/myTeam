import {
  Button,
  H1,
  Paragraph,
  Separator,
  YStack,
} from '@my/ui'
import { TextLink } from 'solito/link';
import Header from "app/features/header/index"

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {

  return (
    <>
    <Header />
    <YStack marginTop="$8" ai="center" gap="$8" p="$4" bg="$background">
      <YStack gap="$4">
        <H1 ta="center" col="$color12">
          Bienvenue dans myTeam.
        </H1>
        <Separator />
        <Paragraph col="$color10" ta="center">
          Une application qui va vous faciliter la gestion de votre équipe.
        </Paragraph>
        <Separator />
      </YStack>

      <Button><TextLink href="/connexion">Connexion</TextLink></Button>
      <Button><TextLink href="/inscription">Inscription</TextLink></Button>
      <Button><TextLink href="/team-demo">Equipe démo</TextLink></Button>
    </YStack>
    </>
  )
}