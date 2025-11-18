import { Fragment } from 'react/jsx-runtime';

type RenderMultilineTextProps = {
  text: string | undefined | null;
};

/**
 * Chuyển text có \n thành JSX với <br />
 * Dùng được với next-intl hoặc bất kỳ string nào.
 */
export default function RenderMultilineText({
  text,
}: RenderMultilineTextProps) {
  if (!text) return null;

  return (
    <>
      {text.split('\n').map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
        </Fragment>
      ))}
    </>
  );
}
