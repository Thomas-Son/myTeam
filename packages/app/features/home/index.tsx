import {
  Button,
  H1,
  Paragraph,
  Separator,
  YStack,
} from '@my/ui'
import { useLink } from 'solito/navigation'

export function Home({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkProps = useLink({
    href: `utilisateur/connexion`,
  });
  const linkProps2 = useLink({
    href: `utilisateur/inscription`,
  });
  const linkProps3 = useLink({
    href: `team-demo`,
  });

  return (
    <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
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

      {/* <Button {...linkProps}>Se connecter</Button>
      <Button {...linkProps2}>S'inscrire</Button> */}
      <Button {...linkProps3}>Equipe démo</Button>
    </YStack>
  )
}