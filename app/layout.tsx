import { Inter, Roboto } from 'next/font/google'

import { Logo } from '@/components/compositions/logo'
import { Navbar } from '@/components/compositions/navbar'
import { NavbarLink } from '@/components/compositions/navbar/client'
import { ProfileLink } from '@/components/compositions/profile-link'
import { GithubIcon } from '@/components/icons/github-icon'
import { LinkedinIcon } from '@/components/icons/linkedin-icon'
import { YoutubeIcon } from '@/components/icons/youtube-icon'

import { CommentsRoutes } from '@/modules/comments'
import { PostsRoutes } from '@/modules/posts'
import { UsersRoutes } from '@/modules/users'

import type { Metadata } from 'next'

import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'eugenezalens',
  description: 'Modern Frontend Systems',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} h-full`}>
      <body className="min-h-screen bg-surface-base text-content-primary antialiased">
        <header className="fixed inset-x-0 top-0 z-50 gap-md bg-surface-sunken p-sm shadow-sm">
          <div className="grid grid-cols-3 items-center">
            <div className="flex">
              <Logo />
            </div>

            <Navbar aria-label="Main navigation">
              <NavbarLink href={UsersRoutes.browse()}>Users</NavbarLink>
              <NavbarLink href={PostsRoutes.browse()}>Posts</NavbarLink>
              <NavbarLink href={CommentsRoutes.browse()}>Comments</NavbarLink>
            </Navbar>

            <div className="flex items-center justify-end gap-sm">
              <ProfileLink
                href="https://github.com/eugenezalens"
                ariaLabel="Open GitHub profile"
                slots={{ icon: GithubIcon }}
              />
              <ProfileLink
                href="https://linkedin.com/in/eugenezalens"
                ariaLabel="Open LinkedIn profile"
                slots={{ icon: LinkedinIcon }}
              />
              <ProfileLink
                href="https://www.youtube.com/channel/UClnSFfqMIOVcModvYvDDKPQ"
                ariaLabel="Open YouTube profile"
                slots={{ icon: YoutubeIcon }}
              />
            </div>
          </div>
        </header>

        <div className="flex min-h-screen flex-col">
          <main id="content" className="w-full flex-1 pt-16">
            <div className="p-xl">{children}</div>
          </main>

          <footer className="mx-auto flex h-14 max-w-231 items-center px-4 text-sm text-content-muted">
            <div>© 2026 @eugenezalens</div>
          </footer>
        </div>
      </body>
    </html>
  )
}
