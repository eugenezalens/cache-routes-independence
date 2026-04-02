import { PageShell, PageShellTitle } from '@/components/compositions/page-shell'

import { loadDetailsPageData } from '@/helpers/page-data-loaders/server'
import { type TServerPageProps } from '@/types'

import { getServerPost } from '@/modules/posts/server'

import { PostPageCommentsSection } from './_lib/client'
import { PostPageAdditionalSection, PostPageGeneralSection, PostPageOverview } from './_lib/shared'

export default async function PostPage({ params }: TServerPageProps<{ postId: string }>) {
  const { data: post } = await loadDetailsPageData(params, (params) => params.postId, getServerPost)

  return (
    <PageShell className="max-w-5xl">
      <PageShellTitle>{post.title}</PageShellTitle>

      <PostPageOverview>
        <PostPageGeneralSection post={post} />

        <PostPageAdditionalSection>
          <PostPageCommentsSection postId={post.id} />
        </PostPageAdditionalSection>
      </PostPageOverview>
    </PageShell>
  )
}
