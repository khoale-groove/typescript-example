import React, {
  FC,
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { Text } from 'react-native';

interface TextProps {
  text: string;
}

export function TextField({ text }: TextProps) {
  const [first, setfirst] = useState<number>(0);
  const [second, setSecond] = useState<string>('');

  useEffect(() => {
    return () => {};
  }, []);

  return <Text>{text}</Text>;
}

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
