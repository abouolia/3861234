import React from 'react';
import { FastField, FieldProps } from 'formik';
import { useQuestionsForm } from './hooks';
import { useQuestionsNavigator } from '../../contexts';
import {
  QuestionOptionsRadioProps,
  QuestionOptionsRadio,
} from './QuestionOptions';

/**
 * Transformes fields props to options props.
 */
function transformOptionsPropsToField({
  field: { ...field },
  form: { ...form },
  ...props
}: TransformFieldToOptionsProps): QuestionOptionsRadioProps {
  return {
    selectedOption: field.value,
    onSelect: (payload) => {
      form.setFieldValue(field.name, payload.index);
    },
    ...props,
  };
}

interface TransformFieldToOptionsProps extends FieldProps {
  questionIndex: number;
  options: { label: string }[];
}

/**
 * Transformes fields props to options props.
 * @param {} props -
 * @returns {JSX.Element}
 */
function TransformFieldToOptions({ ...props }: TransformFieldToOptionsProps) {
  const [selectedIndex, setSelectedIndex] = React.useState<null | number>(null);
  const { getUnansweredIndex } = useQuestionsForm();
  const { moveToIndexQuestionSection } = useQuestionsNavigator();

  // Once the option is select, try to move to the next/backward
  // unanswered question, than reset the selected answer index.
  React.useEffect(() => {
    if (selectedIndex !== null) {
      const nextUnansweredIndex = getUnansweredIndex(selectedIndex);

      if (nextUnansweredIndex !== null) {
        moveToIndexQuestionSection(nextUnansweredIndex + 1);
      }
      setSelectedIndex(null);
    }
  }, [selectedIndex]);

  const transformedProps = transformOptionsPropsToField(props);

  const fieldProps = {
    ...transformedProps,
    onSelect: (payload) => {
      transformedProps?.onSelect(payload);
      setSelectedIndex(props.questionIndex);
    },
  };
  return <QuestionOptionsRadio {...fieldProps} />;
}

export interface QuestionOptionsRadioFieldProps {
  questionIndex: number;
  options: { label: string }[];
}

/**
 * Questions options binded with Formik component.
 */
export function QuestionOptionsRadioField({
  questionIndex,
  ...props
}: QuestionOptionsRadioFieldProps) {
  // Used the `FastField` instead of `Field` to avoid unnecessary re-rendering.
  return (
    <FastField
      name={`questions.${questionIndex}.selected`}
      component={TransformFieldToOptions}
      questionIndex={questionIndex}
      {...props}
    />
  );
}
