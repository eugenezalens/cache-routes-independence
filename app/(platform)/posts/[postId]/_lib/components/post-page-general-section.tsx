import { Suspense, useId } from 'react'

import { SplitShellSection, SplitShellSectionTitle } from '@/components/compositions/split-shell'

import { type IPost, OpenPostEditingAction, PostCard, PostCardBody, PostCardText } from '@/modules/posts'

import { PostPageUser } from './post-page-user.server'

export function PostPageGeneralSection({ post }: { post: IPost }) {
  const id = useId()

  return (
    <SplitShellSection baseId={id}>
      <SplitShellSectionTitle baseId={id} level={3} className="sr-only">
        General Information
      </SplitShellSectionTitle>

      <PostCard
        titleLevel={3}
        post={post}
        slots={{
          openPostEditingAction: OpenPostEditingAction,
        }}
      >
        <PostCardBody className="overflow-y-auto">
          <PostCardText>{post.body}</PostCardText>
        </PostCardBody>
      </PostCard>

      <Suspense>
        <PostPageUser userId={post.userId} />
      </Suspense>
    </SplitShellSection>
  )
}
