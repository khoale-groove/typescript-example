import React, {
  FC,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from 'react';
import { Text, TextProps as RNTextProps } from 'react-native';

interface TextProps extends RNTextProps {
  text?: string;
}

export function TextField({ text }: TextProps) {
  const [first, setFirst] = useState<number>(0);
  const [second, setSecond] = useState<string>('😁');

  return <Text>{text + second}</Text>;
}

//
export const TextField1: FC<TextProps> = ({ text }) => <Text>{text}</Text>;

export type TextHandle = {
  show: () => void;
  hide: () => void;
};

const TextField2: ForwardRefRenderFunction<TextHandle, TextProps> = ({ text }, ref) => {
  useImperativeHandle(
    ref,
    () => ({
      show: () => {},
      hide: () => {},
    }),
    [],
  );
  return <Text>{text}</Text>;
};
export const TextField3 = forwardRef(TextField2);
