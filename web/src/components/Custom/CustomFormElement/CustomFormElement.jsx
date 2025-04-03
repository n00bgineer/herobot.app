import React from 'react'

import { Controller } from 'react-hook-form'

import CustomTextField from 'src/components/Custom/CustomTextField'

// TEXT FIELDS
const TextFieldElement = ({
  name,
  validations,
  defaultValue,
  disabled,
  control,
  ...props
}) => {
  // EXTRACTING ADDITIONAL PROPS
  const { InputProps, ...otherProps } = props || {}
  const {
    disabled: customDisabled = false,
    onBlur: customOnBlur,
    onChange: customOnChange,
    ...otherInputProps
  } = InputProps || {}

  return (
    <Controller
      name={name}
      control={control}
      disabled={disabled}
      rules={validations}
      defaultValue={defaultValue}
      render={({ field, fieldState, formState }) => {
        // EXTRACTING RELEVANT DATA
        const { error } = fieldState || {}
        const { isLoading, isSubmitting } = formState || {}
        const {
          value,
          disabled,
          onBlur = () => {},
          onChange = () => {},
        } = field || {}

        return (
          <CustomTextField
            {...otherProps}
            id={name}
            name={name}
            value={value}
            error={error !== undefined}
            disabled={isLoading || isSubmitting || disabled || customDisabled}
            onBlur={customOnBlur || onBlur}
            onChange={(event) => {
              onChange(event)
              if (typeof customOnChange === 'function') {
                customOnChange(event)
              }
            }}
            {...(error ? { helperText: error?.message } : {})}
            InputProps={otherInputProps}
          />
        )
      }}
    />
  )
}

const CustomFormElement = ({ element, control, ...props }) => {
  const {
    name, // DEFULT ELEMENT PROPS
    type,
    disabled,
    validations,
    defaultValue,
  } = element || {}

  if (type === 'text') {
    return (
      <TextFieldElement
        {...{
          name,
          validations,
          defaultValue,
          disabled,
          control,
          ...props,
        }}
      />
    )
  } else {
    return <></>
  }
}

export default CustomFormElement
