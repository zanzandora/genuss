import { Fragment } from 'react/jsx-runtime';

type RenderMultilineTextProps = {
  text: string | undefined | null;
  additionalLineBreaks?: number; // Số lượng thẻ <br /> thêm vào sau mỗi dòng
};

/**
 * Chuyển text có \n thành JSX với <br />
 * Dùng được với next-intl hoặc bất kỳ string nào.
 * @param text - Chuỗi text cần render
 * @param additionalLineBreaks - Số lượng thẻ <br /> thêm vào sau mỗi dòng (mặc định: 0)
 */
export default function RenderMultilineText({
  text,
  additionalLineBreaks = 0,
}: RenderMultilineTextProps) {
  if (!text) return null;

  return (
    <>
      {text.split('\n').map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
          {/* Thêm các thẻ <br /> bổ sung nếu cần */}
          {Array.from({ length: additionalLineBreaks }, (_, i) => (
            <br key={`additional-${i}`} />
          ))}
        </Fragment>
      ))}
    </>
  );
}
