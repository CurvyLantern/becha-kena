import { cva } from 'class-variance-authority';
import { useSeparator } from 'react-aria';

export type SeperatorProps = {
    orientation?: 'vertical' | 'horizontal'
}

const seperatorStyles = cva('bg-gray-200',{
    variants : {
        intent: {
            vertical : 'w-[2px] h-auto mx-1 my-0',
            horizontal: 'h-[2px] w-full mx-0 my-1'
        }
    },
    defaultVariants: {
        intent: 'vertical'
    }
})

function Separator(props:SeperatorProps) {
  let { separatorProps } = useSeparator(props);

  return (
    <div
      {...separatorProps}
      className={seperatorStyles({
        intent: props.orientation ?? 'horizontal'
      })}
    />
  );
}

export default Separator

