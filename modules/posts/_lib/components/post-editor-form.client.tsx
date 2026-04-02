'use client'

import { getFormProps, getInputProps, type SubmissionResult, useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod/v4'
import { useActionState, useId } from 'react'

import {
  FormField,
  FormFieldErrors,
  FormFieldInput,
  FormFieldLabel,
  FormFieldTextarea,
} from '@/components/compositions/form-field'
import {
  Section,
  SectionBody,
  SectionContent,
  SectionFooter,
  SectionHeader,
  SectionTitle,
} from '@/components/compositions/section'
import { Button } from '@/components/ui/button'

import { cn } from '@/helpers'
import { SurfaceStyles } from '@/styles/compositions'

import { postEditorSchema } from '../api/mutations/post-editor-schema'

export function PostEditorForm({
  submitLabel,
  defaultValue,
  action,
}: {
  submitLabel: string
  defaultValue?: {
    title?: string
    body?: string
  }
  action: (state: unknown, formData: FormData) => Promise<SubmissionResult<string[]>>
}) {
  const id = useId()

  const [lastResult, formAction] = useActionState(action, undefined)

  const [form, fields] = useForm({
    lastResult,
    defaultValue,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: postEditorSchema })
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  })

  return (
    <Section baseId={id}>
      <SectionHeader>
        <SectionTitle baseId={id} level={2}>
          Form
        </SectionTitle>
      </SectionHeader>

      <SectionBody>
        <SectionContent className="p-xl">
          <form
            {...getFormProps(form)}
            action={formAction}
            className={cn(SurfaceStyles.raised, 'flex flex-col gap-md rounded-lg')}
          >
            {form.errors?.length ? <FormFieldErrors errorList={form.errors} /> : null}

            <FormField hasBottomDivider>
              <FormFieldLabel htmlFor={fields.title.id}>Title</FormFieldLabel>
              <FormFieldInput
                {...getInputProps(fields.title, { type: 'text' })}
                placeholder="Write a concise post title"
              />
              <FormFieldErrors errorList={fields.title.errors} />
            </FormField>

            <FormField>
              <FormFieldLabel htmlFor={fields.body.id}>Body</FormFieldLabel>
              <FormFieldTextarea
                {...getInputProps(fields.body, { type: 'text' })}
                placeholder="Write the main content of your post"
              />
              <FormFieldErrors errorList={fields.body.errors} />
            </FormField>
          </form>
        </SectionContent>
      </SectionBody>

      <SectionFooter className="flex justify-end">
        <Button form={form.id} type="submit">
          {submitLabel}
        </Button>
      </SectionFooter>
    </Section>
  )
}
