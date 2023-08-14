import {
  CardHeader,
  CardContent,
  CardThumbnail,
  CardEmojiBoard,
  CardHeaderProps,
  CardContentProps,
  CardEmojiBoardProps
} from "components/card";

export interface FeedCardProps extends CardHeaderProps, CardContentProps, CardEmojiBoardProps {
  imageSrcArray: string[];
  onClickPlusButton: () => void;
}
export function FeedCard({
  title = "",
  price = 0,
  content = "",
  imageSrcArray = [],
  emojiList = [],
  onClickPlusButton
}: FeedCardProps) {
  return (
    <div className="w-full px-1">
      <CardHeader title={title} price={price} onClick={onClickPlusButton} />

      <CardContent content={content} />

      {imageSrcArray.length !== 0 && <FeedThumbnails imagesUrl={imageSrcArray} />}

      {emojiList.length !== 0 && <CardEmojiBoard className="mt-2.5" emojiList={emojiList} />}
    </div>
  );
}

interface FeedThumbnailsProps {
  imagesUrl: string[];
}
function FeedThumbnails({ imagesUrl = [] }: FeedThumbnailsProps) {
  return (
    <div className="flex gap-2.5 mt-2.5">
      {imagesUrl.slice(0, 2).map(url => (
        <CardThumbnail imageSrc={url} />
      ))}
    </div>
  );
}
