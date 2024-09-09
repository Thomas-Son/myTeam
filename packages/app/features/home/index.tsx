import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  SwitchThemeButton,
  SwitchRouterButton,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp, X } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Platform } from 'react-native'
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
      <XStack
        pos="absolute"
        w="100%"
        t="$6"
        gap="$6"
        jc="center"
        fw="wrap"
        $sm={{ pos: 'relative', t: 0 }}
      >
        {Platform.OS === 'web' && (
            <SwitchThemeButton />
        )}
      </XStack>

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

      <Button {...linkProps}>Se connecter</Button>
      <Button {...linkProps2}>S'inscrire</Button>
      <Button {...linkProps3}>Equipe démo</Button>
    </YStack>
  )
}