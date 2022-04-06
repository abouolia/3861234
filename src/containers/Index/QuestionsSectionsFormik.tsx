import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import { QuestionsSectionsFields } from './QuestionsSections';
import { Questions } from '../../data';

export interface FormikValues {
  questions: any;
}
/**
 * Questions sections binded into Formik.
 * @returns {JSX.Element}
 */
export function QuestionsSectionsForm(): JSX.Element {
  const router = useRouter();

  return (
    <Formik
      initialValues={{ questions: Questions }}
      onSubmit={(
        values: FormikValues,
        { setSubmitting }: FormikHelpers<FormikValues>
      ) => {
        router.push('https://news.airbnb.com/tripmatcher/personalities/pop_culture_junkie.html');
      }}
    >
      <QuestionsSectionsFields />
    </Formik>
  );
}
