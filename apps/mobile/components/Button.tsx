import  {type ComponentProps, forwardRef } from 'react';
import type{ TamaguiElement } from 'tamagui';

import { Button as TButton } from '../tamagui.config';

type ButtonProps = {
  title: string;
} & ComponentProps<typeof TButton>;

export const Button = forwardRef<TamaguiElement, ButtonProps>(({ title, ...tButtonProps }, ref) => {
  return (
    <TButton {...tButtonProps} ref={ref}>
      {title}
    </TButton>
  );
});
