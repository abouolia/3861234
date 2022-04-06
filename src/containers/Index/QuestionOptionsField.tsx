import React from 'react';
import { FastField } from 'formik';
import { QuestionOptions, QuestionOption } from '../../components';
import { useQuestionsForm } from './hooks';
import { useQuestionsNavigator } from '../../contexts';

/**
 *
 * @returns {JSX.Element}
 */
export function QuestionOptionsFieldBase({
  options,
  selectedOption,
  onSelect,
}) {
  return (
    <QuestionOptions>
      {options.map((option, index) => (
        <QuestionOption
          isChecked={index === selectedOption}
          label={option.label}
          index={index}
          onSelect={onSelect}
        />
      ))}
    </QuestionOptions>
  );
}

/**
 * Transformes fields props to options props.
 */
function transformOptionsPropsToField({
  field: { ...field },
  form: { ...form },
  ...props
}) {
  return {
    selectedOption: field.value,
    onSelect: (payload) => {
      form.setFieldValue(field.name, payload.index);
    },
    ...props,
  };
}

/**
 * Transformes fields props to options props.
 * @param {} props -
 * @returns {JSX.Element}
 */
function TransformFieldToOptionsProps({ questionIndex, ...props }) {
  const [selectedIndex, setSelectedIndex] = React.useState<null | number>(null);
  const { getUnansweredIndex } = useQuestionsForm();
  const { moveToIndexQuestionSection } = useQuestionsNavigator();

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
      setSelectedIndex(questionIndex);
    },
  };
  return <QuestionOptionsFieldBase {...fieldProps} />;
}

export interface QuestionOptionsFieldProps {
  questionIndex: number;
  options: { label: string }[];
}

/**
 * Questions options binded with Formik component.
 */
export function QuestionOptionsField({
  questionIndex,
  ...props
}: QuestionOptionsFieldProps) {
  // Used the `FastField` instead of `Field` to avoid unnecessary re-rendering.
  return (
    <FastField
      name={`questions.${questionIndex}.selected`}
      component={TransformFieldToOptionsProps}
      questionIndex={questionIndex}
      {...props}
    />
  );
}
